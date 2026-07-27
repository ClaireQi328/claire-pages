#!/usr/bin/env python3
"""verify.py — Validate migrated Obsidian markdown files.

Checks wiki-link references, orphan images, double extensions,
heading hierarchy, and frontmatter presence.

Usage:
    python3 verify.py --input target/ --vault-root . --target-folder DingDong [--fix]
"""

import argparse
import os
import re
import sys


WIKILINK_RE = re.compile(r"!\[\[([^\]|]+?)(?:\|[^\]]+)?\]\]")
FRONTMATTER_RE = re.compile(r"^---\n.*?---\n", re.DOTALL)


def verify_directory(md_dir: str, vault_root: str = ".", target_folder: str = "",
                     fix: bool = False) -> dict:
    """Run all verification checks.

    Returns a report dict.
    """
    report = {
        "files": 0,
        "images": 0,
        "references": 0,
        "missing_refs": [],
        "orphan_images": [],
        "double_extensions": [],
        "missing_frontmatter": [],
        "heading_issues": [],
        "extra_blank_lines": 0,
        "passed": True,
    }

    images_dir = os.path.join(vault_root, target_folder, "assets", "images")

    # Collect all markdown files
    md_files = sorted(f for f in os.listdir(md_dir) if f.endswith(".md"))
    report["files"] = len(md_files)

    # Collect all image files
    all_images = set()
    if os.path.isdir(images_dir):
        for f in os.listdir(images_dir):
            if os.path.isfile(os.path.join(images_dir, f)):
                all_images.add(f)
    report["images"] = len(all_images)

    # Check each markdown file
    all_ref_paths = set()
    for fname in md_files:
        filepath = os.path.join(md_dir, fname)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Check frontmatter
        if not content.startswith("---"):
            report["missing_frontmatter"].append(fname)

        # Check wiki-link references
        refs = WIKILINK_RE.findall(content)
        for ref in refs:
            report["references"] += 1
            # Extract just the filename part
            ref_path = ref.strip()
            all_ref_paths.add(os.path.basename(ref_path))

            # Check if referenced file exists
            full_path = os.path.join(vault_root, ref_path)
            if not os.path.isfile(full_path):
                # Also check without target folder prefix
                alt_path = os.path.join(vault_root, target_folder, os.path.basename(ref_path))
                if not os.path.isfile(alt_path):
                    report["missing_refs"].append({
                        "file": fname,
                        "ref": ref_path,
                    })

        # Check heading hierarchy
        headings = re.findall(r"^(#{1,6})\s", content, re.MULTILINE)
        prev_level = 0
        for h in headings:
            level = len(h)
            if prev_level > 0 and level > prev_level + 1:
                report["heading_issues"].append({
                    "file": fname,
                    "from": prev_level,
                    "to": level,
                })
            prev_level = level

        # Check extra blank lines
        triple_blanks = len(re.findall(r"\n{3,}", content))
        report["extra_blank_lines"] += triple_blanks

    # Check double extensions
    for img in all_images:
        if ".png.png" in img or ".jpg.jpg" in img or ".gif.gif" in img:
            report["double_extensions"].append(img)

    # Check orphan images
    for img in all_images:
        if img not in all_ref_paths:
            report["orphan_images"].append(img)

    # Determine pass/fail
    if report["missing_refs"] or report["double_extensions"]:
        report["passed"] = False

    # Fix mode
    if fix:
        fixed = _fix_issues(md_dir, images_dir, report)
        report["fixed"] = fixed

    return report


def _fix_issues(md_dir: str, images_dir: str, report: dict) -> dict:
    """Auto-fix common issues."""
    fixed = {"double_ext": 0, "blank_lines": 0, "frontmatter": 0}

    # Fix double extensions
    for img_name in report["double_extensions"]:
        old_path = os.path.join(images_dir, img_name)
        new_path = old_path.rsplit(".", 1)[0]  # Remove one extension
        if os.path.isfile(old_path):
            os.rename(old_path, new_path)
            fixed["double_ext"] += 1

    # Fix extra blank lines
    for fname in sorted(os.listdir(md_dir)):
        if not fname.endswith(".md"):
            continue
        filepath = os.path.join(md_dir, fname)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        cleaned = re.sub(r"\n{3,}", "\n\n", content)
        if cleaned != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(cleaned)
            fixed["blank_lines"] += 1

    return fixed


def print_report(report: dict):
    """Pretty-print the verification report."""
    status = "[OK] PASSED" if report["passed"] else "[FAIL] ISSUES FOUND"

    print(f"\n{'='*50}")
    print(f"Verification Report: {status}")
    print(f"{'='*50}")
    print(f"Files: {report['files']}")
    print(f"Images: {report['images']}")
    print(f"References: {report['references']}")

    if report["missing_refs"]:
        print(f"\n[FAIL] Missing references ({len(report['missing_refs'])}):")
        for item in report["missing_refs"]:
            print(f"  {item['file']}: {item['ref']}")

    if report["double_extensions"]:
        print(f"\n[FAIL] Double extensions ({len(report['double_extensions'])}):")
        for name in report["double_extensions"]:
            print(f"  {name}")

    if report["orphan_images"]:
        print(f"\n[WARN]  Orphan images ({len(report['orphan_images'])}):")
        for name in report["orphan_images"][:10]:
            print(f"  {name}")
        if len(report["orphan_images"]) > 10:
            print(f"  ... and {len(report['orphan_images']) - 10} more")

    if report["missing_frontmatter"]:
        print(f"\n[WARN]  Missing frontmatter ({len(report['missing_frontmatter'])}):")
        for name in report["missing_frontmatter"]:
            print(f"  {name}")

    if report["heading_issues"]:
        print(f"\n[WARN]  Heading hierarchy issues ({len(report['heading_issues'])}):")
        for item in report["heading_issues"]:
            print(f"  {item['file']}: h{item['from']} → h{item['to']}")

    if report["extra_blank_lines"] > 0:
        print(f"\n[WARN]  Extra blank lines: {report['extra_blank_lines']}")

    if "fixed" in report:
        f = report["fixed"]
        print(f"\n[FIX] Fixed: {f['double_ext']} double extensions, {f['blank_lines']} blank line issues")

    if not report["missing_refs"] and not report["double_extensions"]:
        print(f"\n[OK] All references valid, no double extensions")

    print()


def main():
    parser = argparse.ArgumentParser(description="Verify migrated Obsidian files")
    parser.add_argument("--input", required=True, help="Directory with markdown files")
    parser.add_argument("--vault-root", default=".", help="Vault root directory")
    parser.add_argument("--target-folder", default="", help="Target folder name")
    parser.add_argument("--fix", action="store_true", help="Auto-fix issues")
    args = parser.parse_args()

    report = verify_directory(args.input, args.vault_root, args.target_folder, args.fix)
    print_report(report)

    if not report["passed"]:
        sys.exit(1)


if __name__ == "__main__":
    main()
