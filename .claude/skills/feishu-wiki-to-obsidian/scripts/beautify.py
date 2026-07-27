#!/usr/bin/env python3
"""beautify.py — Obsidian Markdown beautification and cross-references.

Adds frontmatter, callouts, heading hierarchy fixes, section dividers,
cross-references, and CJK typography.

Usage:
    python3 beautify.py --input target/ --tags "工作/项目" --parent "[[Folder]]"
"""

import argparse
import os
import re
import subprocess
import sys
from collections import Counter
from datetime import datetime


# ---------------------------------------------------------------------------
# Frontmatter
# ---------------------------------------------------------------------------

def add_frontmatter(content: str, title: str, tags: list[str],
                    parent: str = "", source: str = "", created: str = "") -> str:
    """Add or update YAML frontmatter."""
    if content.startswith("---"):
        return content  # Already has frontmatter

    if not created:
        created = datetime.now().strftime("%Y-%m-%d")

    tags_str = ", ".join(tags) if tags else ""
    parent_str = f'"{parent}"' if parent else ""
    source_str = f'"{source}"' if source else ""

    fm = f"""---
title: "{title}"
tags: [{tags_str}]
created: {created}
parent: {parent_str}
source: {source_str}
---

"""
    return fm + content


# ---------------------------------------------------------------------------
# Callout conversion
# ---------------------------------------------------------------------------

CALLOUT_PATTERNS = [
    (r"^\*\*(结论|总结|核心|关键点|要点|Summary|Conclusion)[：:]\*\*", "tip"),
    (r"^\*\*(背景|目标|价值|目的|Background)[：:]\*\*", "info"),
    (r"^\*\*(风险|注意|警告|Warning|Risk)[：:]\*\*", "warning"),
    (r"^\*\*(数据|统计|从.*看|指标|Data)[：:]\*\*", "abstract"),
    (r"^\*\*(方案|建议|Action|Recommendation)[：:]\*\*", "tip"),
]


def convert_callouts(content: str) -> str:
    """Convert bold summary lines to Obsidian callouts."""
    lines = content.split("\n")
    result = []
    for line in lines:
        converted = False
        for pattern, callout_type in CALLOUT_PATTERNS:
            m = re.match(pattern, line.strip())
            if m:
                # Extract the content after the bold keyword
                inner = re.sub(r"^\*\*[^*]+\*\*\s*", "", line.strip())
                keyword = m.group(1)
                result.append(f"> [!{callout_type}] {keyword}")
                if inner:
                    result.append(f"> {inner}")
                converted = True
                break
        if not converted:
            result.append(line)
    return "\n".join(result)


# ---------------------------------------------------------------------------
# Heading hierarchy
# ---------------------------------------------------------------------------

def fix_heading_hierarchy(content: str) -> str:
    """Ensure headings don't skip levels (e.g., # directly to ###)."""
    lines = content.split("\n")
    result = []
    prev_level = 0

    for line in lines:
        m = re.match(r"^(#{1,6})\s+(.+)", line)
        if m:
            level = len(m.group(1))
            # Don't let level jump by more than 1
            if prev_level > 0 and level > prev_level + 1:
                level = prev_level + 1
            result.append(f"{'#' * level} {m.group(2)}")
            prev_level = level
        else:
            result.append(line)
            if line.strip():
                prev_level = 0  # Reset on non-heading content

    return "\n".join(result)


# ---------------------------------------------------------------------------
# Section dividers
# ---------------------------------------------------------------------------

def add_section_dividers(content: str) -> str:
    """Add --- dividers between major sections (## headings)."""
    lines = content.split("\n")
    result = []
    section_count = 0
    prev_was_heading = False

    for i, line in enumerate(lines):
        is_h2 = re.match(r"^##\s+", line)

        if is_h2:
            section_count += 1
            # Add divider before ## (except the first one), if not already there
            if section_count > 1 and result and result[-1].strip() != "---":
                # Check if there's meaningful content before
                if any(r.strip() for r in result[-3:]):
                    result.append("")
                    result.append("---")
                    result.append("")

        result.append(line)

    # Only return modified content if we have 3+ sections
    if section_count >= 3:
        return "\n".join(result)
    return content


# ---------------------------------------------------------------------------
# Artifact cleanup
# ---------------------------------------------------------------------------

def clean_artifacts(content: str) -> str:
    """Clean up common artifacts from converted content."""
    # Remove Unicode replacement character
    content = content.replace("�", "")

    # Remove empty lines that only contain whitespace
    lines = content.split("\n")
    lines = [line.rstrip() for line in lines]
    content = "\n".join(lines)

    # Collapse 3+ blank lines to 2
    content = re.sub(r"\n{3,}", "\n\n", content)

    # Remove stray <br> tags where blank line works
    content = re.sub(r"<br\s*/?>\s*\n", "\n", content)

    return content.strip() + "\n"


# ---------------------------------------------------------------------------
# Cross-references
# ---------------------------------------------------------------------------

def extract_keywords(text: str) -> Counter:
    """Extract keywords from text for cross-reference matching."""
    # Remove frontmatter
    text = re.sub(r"^---\n.*?---\n", "", text, flags=re.DOTALL)
    # Remove markdown syntax
    text = re.sub(r"!\[\[.*?\]\]", "", text)
    text = re.sub(r"\[\[.*?\]\]", "", text)
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"[*_~`=#>\-|]", "", text)
    text = re.sub(r"```.*?```", "", text, flags=re.DOTALL)

    # Extract CJK words (2+ chars) and English words
    cjk_words = re.findall(r"[一-鿿]{2,}", text)
    en_words = re.findall(r"[A-Za-z]{3,}", text.lower())

    # Weight headings 2x (look for heading text)
    heading_text = re.findall(r"^#{1,6}\s+(.+)$", text, re.MULTILINE)
    heading_cjk = []
    for h in heading_text:
        heading_cjk.extend(re.findall(r"[一-鿿]{2,}", h))
    heading_en = []
    for h in heading_text:
        heading_en.extend(re.findall(r"[A-Za-z]{3,}", h.lower()))

    counter = Counter(cjk_words + en_words)
    counter.update(heading_cjk * 2)  # 2x weight for headings
    counter.update(heading_en * 2)

    return counter


def generate_cross_references(md_dir: str, max_refs: int = 5) -> dict:
    """Generate cross-references between documents in a directory."""
    files = {}
    for fname in sorted(os.listdir(md_dir)):
        if not fname.endswith(".md"):
            continue
        filepath = os.path.join(md_dir, fname)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        title = os.path.splitext(fname)[0]
        # Try to extract title from frontmatter
        m = re.search(r'^title:\s*"?([^"\n]+)"?', content, re.MULTILINE)
        if m:
            title = m.group(1)
        files[fname] = {
            "title": title,
            "content": content,
            "keywords": extract_keywords(content),
        }

    # Find related docs for each
    refs_added = 0
    for fname, info in files.items():
        if fname == "DingDong.md":
            continue

        # Calculate similarity with all other docs
        scores = []
        for other_fname, other_info in files.items():
            if other_fname == fname:
                continue
            # Weighted Jaccard similarity
            kw1 = info["keywords"]
            kw2 = other_info["keywords"]
            if not kw1 or not kw2:
                continue
            common = set(kw1.keys()) & set(kw2.keys())
            all_keys = set(kw1.keys()) | set(kw2.keys())
            if not all_keys:
                continue
            sim = sum(min(kw1[k], kw2[k]) for k in common) / sum(max(kw1[k], kw2[k]) for k in all_keys)
            if sim > 0.05:
                scores.append((sim, other_fname, other_info["title"]))

        scores.sort(reverse=True)
        top_refs = scores[:max_refs]

        if top_refs:
            # Add cross-reference section
            ref_section = "\n\n## 相关文档\n\n"
            for sim, ref_fname, ref_title in top_refs:
                ref_name = os.path.splitext(ref_fname)[0]
                ref_section += f"- [[{ref_name}|{ref_title}]]\n"

            # Check if cross-ref section already exists
            if "## 相关文档" not in info["content"]:
                filepath = os.path.join(md_dir, fname)
                with open(filepath, "a", encoding="utf-8") as f:
                    f.write(ref_section)
                refs_added += 1

    return {"docs_processed": len(files), "refs_added": refs_added}


# ---------------------------------------------------------------------------
# CJK typography
# ---------------------------------------------------------------------------

def run_cjk_typography(md_dir: str, baoyu_skill_dir: str = "") -> int:
    """Run baoyu-format-markdown CJK typography script on all files."""
    if not baoyu_skill_dir:
        # Try to find it
        candidates = [
            os.path.expanduser("~/.claude/skills/baoyu-format-markdown"),
            os.path.join(os.getcwd(), ".claude/skills/baoyu-format-markdown"),
        ]
        for c in candidates:
            if os.path.isdir(c):
                baoyu_skill_dir = c
                break

    if not baoyu_skill_dir:
        print("  ⚠ baoyu-format-markdown skill not found, skipping CJK typography")
        return 0

    script = os.path.join(baoyu_skill_dir, "scripts", "main.ts")
    if not os.path.isfile(script):
        print(f"  ⚠ CJK script not found at {script}")
        return 0

    count = 0
    for fname in sorted(os.listdir(md_dir)):
        if not fname.endswith(".md"):
            continue
        filepath = os.path.join(md_dir, fname)
        try:
            subprocess.run(
                ["npx", "-y", "bun", script, filepath, "--no-quotes"],
                capture_output=True, timeout=30
            )
            count += 1
        except (subprocess.TimeoutExpired, FileNotFoundError):
            pass

    return count


# ---------------------------------------------------------------------------
# Main beautify pipeline
# ---------------------------------------------------------------------------

def beautify_directory(md_dir: str, tags: list[str], parent: str = "",
                       source: str = "", image_width: int = 600,
                       run_cjk: bool = True, run_xrefs: bool = True,
                       baoyu_skill_dir: str = "") -> dict:
    """Beautify all markdown files in a directory."""
    files = sorted(f for f in os.listdir(md_dir) if f.endswith(".md"))

    # Step 1: Per-file beautification
    print(f"[1/4] Beautifying {len(files)} files...")
    for fname in files:
        filepath = os.path.join(md_dir, fname)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        title = os.path.splitext(fname)[0]
        m = re.search(r'^title:\s*"?([^"\n]+)"?', content, re.MULTILINE)
        if m:
            title = m.group(1)

        original = content
        content = add_frontmatter(content, title, tags, parent, source)
        content = convert_callouts(content)
        content = fix_heading_hierarchy(content)
        content = add_section_dividers(content)
        content = clean_artifacts(content)

        if content != original:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"  OK: {fname}")

    # Step 2: Cross-references
    xrefs = {"refs_added": 0}
    if run_xrefs:
        print(f"\n[2/4] Generating cross-references...")
        xrefs = generate_cross_references(md_dir)
        print(f"  Added refs to {xrefs['refs_added']} files")

    # Step 3: CJK typography
    cjk_count = 0
    if run_cjk:
        print(f"\n[3/4] Running CJK typography...")
        cjk_count = run_cjk_typography(md_dir, baoyu_skill_dir)
        print(f"  Processed {cjk_count} files")

    # Step 4: Final cleanup
    print(f"\n[4/4] Final cleanup...")
    for fname in files:
        filepath = os.path.join(md_dir, fname)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        cleaned = clean_artifacts(content)
        if cleaned != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(cleaned)

    return {
        "files": len(files),
        "xrefs": xrefs.get("refs_added", 0),
        "cjk": cjk_count,
    }


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Beautify Obsidian markdown files")
    parser.add_argument("--input", required=True, help="Directory with markdown files")
    parser.add_argument("--tags", default="", help="Tags (comma-separated)")
    parser.add_argument("--parent", default="", help="Parent wikilink")
    parser.add_argument("--source", default="", help="Source URL")
    parser.add_argument("--image-width", type=int, default=600, help="Image width")
    parser.add_argument("--no-cjk", action="store_true", help="Skip CJK typography")
    parser.add_argument("--no-xrefs", action="store_true", help="Skip cross-references")
    parser.add_argument("--baoyu-skill-dir", default="", help="Path to baoyu-format-markdown")
    args = parser.parse_args()

    tags = [t.strip() for t in args.tags.split(",") if t.strip()] if args.tags else []

    stats = beautify_directory(
        args.input, tags, args.parent, args.source,
        args.image_width, not args.no_cjk, not args.no_xrefs,
        args.baoyu_skill_dir
    )
    print(f"\nDone: {stats['files']} files beautified, {stats['xrefs']} cross-refs added")


if __name__ == "__main__":
    main()
