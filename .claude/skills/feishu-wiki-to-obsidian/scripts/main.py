#!/usr/bin/env python3
"""main.py — Feishu Wiki → Obsidian Vault migration pipeline.

Orchestrates the 5-step pipeline:
  1. Fetch docs as XML (fetch_docs.py)
  2. Convert XML → Markdown (xml_to_markdown.py)
  3. Download media (download_media.py)
  4. Beautify (beautify.py)
  5. Verify (verify.py)

Usage:
    python3 main.py --url "https://xxx.feishu.cn/wiki/xxx" --target "FolderName"
    python3 main.py --url "https://xxx.feishu.cn/wiki/xxx" --target "FolderName" --dry-run
    python3 main.py --beautify-only --path existing_md_dir/ --target "FolderName"
"""

import argparse
import json
import os
import shutil
import sys
import tempfile
from pathlib import Path

# Import sibling modules
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, SCRIPT_DIR)

import fetch_docs
import xml_to_markdown
import download_media
import beautify
import verify


def load_config(config_path: str = "") -> dict:
    """Load and merge config from file + defaults."""
    defaults = {
        "source": {
            "type": "feishu",
            "auth": {"scope": "wiki:node:read,drive:drive:readonly"},
        },
        "target": {
            "vault": ".",
            "folder": "Documents",
            "tags": [],
        },
        "images": {
            "width": 600,
            "parallel": 10,
            "retry": 3,
        },
        "conversion": {
            "tables": True,
            "callouts": True,
            "cross_refs": True,
            "max_cross_refs": 5,
        },
        "beautify": {
            "frontmatter": True,
            "heading_hierarchy": True,
            "section_dividers": True,
            "cjk_spacing": True,
            "clean_artifacts": True,
        },
    }

    if config_path and os.path.isfile(config_path):
        import yaml  # type: ignore
        with open(config_path, "r", encoding="utf-8") as f:
            user_config = yaml.safe_load(f) or {}
        # Deep merge
        _deep_merge(defaults, user_config)

    return defaults


def _deep_merge(base: dict, override: dict):
    """Deep merge override into base dict."""
    for k, v in override.items():
        if k in base and isinstance(base[k], dict) and isinstance(v, dict):
            _deep_merge(base[k], v)
        else:
            base[k] = v


def run_pipeline(url: str, target_folder: str, config: dict,
                 vault_root: str = ".", dry_run: bool = False,
                 beautify_only: bool = False, existing_path: str = ""):
    """Run the full migration pipeline."""
    vault = config["target"]["vault"]
    if vault == ".":
        vault = vault_root

    target_dir = os.path.join(vault, target_folder)
    tags = config["target"]["tags"]
    if isinstance(tags, str):
        tags = [t.strip() for t in tags.split(",")]

    print(f"{'='*60}")
    print(f"Feishu Wiki → Obsidian Migration")
    print(f"{'='*60}")
    print(f"URL: {url}")
    print(f"Target: {target_dir}")
    print(f"Tags: {tags}")
    print(f"Dry run: {dry_run}")
    print(f"{'='*60}\n")

    if dry_run:
        print("[DRY RUN] Would execute the following steps:")
        print("  1. Fetch docs as XML from Feishu")
        print("  2. Convert XML to Markdown (with table support)")
        print("  3. Download media (images, attachments, whiteboards)")
        print("  4. Beautify (frontmatter, callouts, CJK typography)")
        print("  5. Verify (references, orphans, structure)")
        return {"dry_run": True}

    # Create temp dir for intermediate files
    temp_dir = tempfile.mkdtemp(prefix="feishu-migration-")
    print(f"Temp dir: {temp_dir}\n")

    try:
        if beautify_only:
            # Skip steps 1-3, only beautify existing files
            if not existing_path or not os.path.isdir(existing_path):
                print(f"ERROR: --path {existing_path} is not a directory")
                sys.exit(1)
            md_dir = existing_path
            print(f"Beautify-only mode on: {md_dir}\n")
        else:
            # Step 1: Fetch docs as XML
            print("=" * 40)
            print("STEP 1: Fetch docs as XML")
            print("=" * 40)
            fetch_result = fetch_docs.fetch_all(url, temp_dir)
            print(f"  Fetched {fetch_result['total_files']} documents\n")

            # Step 2: Convert XML → Markdown
            print("=" * 40)
            print("STEP 2: Convert XML → Markdown")
            print("=" * 40)
            md_dir = os.path.join(temp_dir, "markdown")
            os.makedirs(md_dir, exist_ok=True)

            total_tables = 0
            total_images = 0
            for fname in sorted(os.listdir(temp_dir)):
                if not fname.endswith(".json"):
                    continue
                in_file = os.path.join(temp_dir, fname)
                out_file = os.path.join(md_dir, fname.replace(".json", ".md"))
                stats = xml_to_markdown.convert_file(in_file, out_file, config["images"]["width"])
                total_tables += stats["tables"]
                total_images += stats["images"]
                print(f"  {fname} → {os.path.basename(out_file)} "
                      f"({stats['tables']} tables, {stats['images']} images)")
            print(f"  Total: {total_tables} tables, {total_images} images\n")

            # Step 3: Download media
            print("=" * 40)
            print("STEP 3: Download media")
            print("=" * 40)
            media_stats = download_media.process_directory(
                md_dir, vault, target_folder,
                config["images"]["parallel"],
                config["images"]["width"]
            )
            print(f"  Downloaded: {media_stats['downloaded']}/{media_stats['total_tokens']}\n")

        # Step 4: Beautify
        print("=" * 40)
        print("STEP 4: Beautify")
        print("=" * 40)
        source_url = url if not beautify_only else ""
        beautify_stats = beautify.beautify_directory(
            md_dir, tags, parent=f"[[{target_folder}]]",
            source=source_url,
            image_width=config["images"]["width"],
            run_cjk=config["beautify"]["cjk_spacing"],
            run_xrefs=config["conversion"]["cross_refs"],
        )
        print(f"  Beautified: {beautify_stats['files']} files, "
              f"{beautify_stats['xrefs']} cross-refs\n")

        # Step 5: Copy to target (if not beautify-only)
        if not beautify_only:
            print("=" * 40)
            print("STEP 5: Copy to target")
            print("=" * 40)
            os.makedirs(target_dir, exist_ok=True)
            for fname in sorted(os.listdir(md_dir)):
                if not fname.endswith(".md"):
                    continue
                src = os.path.join(md_dir, fname)
                dst = os.path.join(target_dir, fname)
                shutil.copy2(src, dst)
                print(f"  {fname}")

        # Step 6: Verify
        print("\n" + "=" * 40)
        print("STEP 6: Verify")
        print("=" * 40)
        verify_dir = target_dir if not beautify_only else md_dir
        report = verify.verify_directory(
            verify_dir, vault, target_folder
        )
        verify.print_report(report)

        print(f"{'='*60}")
        print(f"Migration complete!")
        print(f"{'='*60}")
        return report

    finally:
        # Clean up temp dir
        if os.path.isdir(temp_dir):
            shutil.rmtree(temp_dir, ignore_errors=True)
            print(f"Cleaned up temp dir")


def run_batch_pipeline(urls: list, target_folder: str, config: dict,
                       vault_root: str = ".", dry_run: bool = False):
    """Run pipeline for multiple URLs, all output goes flat into one target folder."""
    vault = config["target"]["vault"]
    if vault == ".":
        vault = vault_root

    target_dir = os.path.join(vault, target_folder)
    tags = config["target"]["tags"]
    if isinstance(tags, str):
        tags = [t.strip() for t in tags.split(",")]

    print(f"{'='*60}")
    print(f"Feishu Wiki → Obsidian Migration (BATCH)")
    print(f"{'='*60}")
    print(f"URLs: {len(urls)}")
    print(f"Target: {target_dir}")
    print(f"Tags: {tags}")
    print(f"Dry run: {dry_run}")
    print(f"{'='*60}\n")

    if dry_run:
        print("[DRY RUN] Would fetch and migrate these URLs:")
        for i, u in enumerate(urls, 1):
            print(f"  {i}. {u}")
        return {"dry_run": True}

    temp_dir = tempfile.mkdtemp(prefix="feishu-batch-")
    print(f"Temp dir: {temp_dir}\n")

    try:
        # Step 1: Fetch ALL docs into the same temp dir
        print("=" * 40)
        print("STEP 1: Fetch docs as XML (BATCH)")
        print("=" * 40)
        total_fetched = 0
        for i, url in enumerate(urls, 1):
            print(f"\n--- URL {i}/{len(urls)}: {url} ---")
            result = fetch_docs.fetch_all(url, temp_dir)
            total_fetched += result["total_files"]
            print(f"  Fetched {result['total_files']} documents from this URL")
        print(f"\n  Total fetched: {total_fetched} documents\n")

        # Step 2: Convert XML → Markdown
        print("=" * 40)
        print("STEP 2: Convert XML → Markdown")
        print("=" * 40)
        md_dir = os.path.join(temp_dir, "markdown")
        os.makedirs(md_dir, exist_ok=True)

        total_tables = 0
        total_images = 0
        seen_md = set()
        for fname in sorted(os.listdir(temp_dir)):
            if not fname.endswith(".json"):
                continue
            # Deduplicate by filename
            if fname in seen_md:
                continue
            seen_md.add(fname)
            in_file = os.path.join(temp_dir, fname)
            out_file = os.path.join(md_dir, fname.replace(".json", ".md"))
            try:
                stats = xml_to_markdown.convert_file(in_file, out_file, config["images"]["width"])
                total_tables += stats["tables"]
                total_images += stats["images"]
                print(f"  {fname} → {os.path.basename(out_file)} "
                      f"({stats['tables']} tables, {stats['images']} images)")
            except Exception as e:
                print(f"  {fname} → ERROR: {e}")
        print(f"  Total: {total_tables} tables, {total_images} images\n")

        # Step 3: Download media
        print("=" * 40)
        print("STEP 3: Download media")
        print("=" * 40)
        media_stats = download_media.process_directory(
            md_dir, vault, target_folder,
            config["images"]["parallel"],
            config["images"]["width"]
        )
        print(f"  Downloaded: {media_stats['downloaded']}/{media_stats['total_tokens']}\n")

        # Step 4: Beautify
        print("=" * 40)
        print("STEP 4: Beautify")
        print("=" * 40)
        beautify_stats = beautify.beautify_directory(
            md_dir, tags, parent=f"[[{target_folder}]]",
            source="",
            image_width=config["images"]["width"],
            run_cjk=config["beautify"]["cjk_spacing"],
            run_xrefs=config["conversion"]["cross_refs"],
        )
        print(f"  Beautified: {beautify_stats['files']} files, "
              f"{beautify_stats['xrefs']} cross-refs\n")

        # Step 5: Copy to target (flat)
        print("=" * 40)
        print("STEP 5: Copy to target (flat)")
        print("=" * 40)
        os.makedirs(target_dir, exist_ok=True)
        copied = 0
        skipped = 0
        for fname in sorted(os.listdir(md_dir)):
            if not fname.endswith(".md"):
                continue
            src = os.path.join(md_dir, fname)
            dst = os.path.join(target_dir, fname)
            if os.path.exists(dst):
                skipped += 1
                print(f"  {fname} (already exists, skipped)")
            else:
                shutil.copy2(src, dst)
                copied += 1
                print(f"  {fname}")
        print(f"\n  Copied: {copied}, Skipped (existing): {skipped}\n")

        # Step 6: Verify
        print("=" * 40)
        print("STEP 6: Verify")
        print("=" * 40)
        report = verify.verify_directory(target_dir, vault, target_folder)
        verify.print_report(report)

        print(f"{'='*60}")
        print(f"Batch migration complete!")
        print(f"{'='*60}")
        return report

    finally:
        if os.path.isdir(temp_dir):
            shutil.rmtree(temp_dir, ignore_errors=True)
            print(f"Cleaned up temp dir")


def main():
    parser = argparse.ArgumentParser(
        description="Feishu Wiki → Obsidian Vault migration pipeline",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Full migration
  python3 main.py --url "https://xxx.feishu.cn/wiki/xxx" --target "MyFolder"

  # With config file
  python3 main.py --url "https://xxx.feishu.cn/wiki/xxx" --target "MyFolder" --config config.yaml

  # Dry run (preview only)
  python3 main.py --url "https://xxx.feishu.cn/wiki/xxx" --target "MyFolder" --dry-run

  # Beautify existing markdown files
  python3 main.py --beautify-only --path existing_dir/ --target "MyFolder"
"""
    )
    parser.add_argument("--url", default="", help="Feishu wiki URL or token")
    parser.add_argument("--urls", nargs="+", default=[], help="Multiple Feishu wiki URLs (batch mode)")
    parser.add_argument("--target", required=True, help="Target folder name in vault")
    parser.add_argument("--vault", default=".", help="Vault root directory")
    parser.add_argument("--config", default="", help="Config YAML file")
    parser.add_argument("--tags", default="", help="Tags (comma-separated, overrides config)")
    parser.add_argument("--dry-run", action="store_true", help="Preview only")
    parser.add_argument("--beautify-only", action="store_true", help="Only beautify existing files")
    parser.add_argument("--path", default="", help="Path to existing files (for --beautify-only)")
    parser.add_argument("--parallel", type=int, default=0, help="Parallel downloads (overrides config)")
    args = parser.parse_args()

    # Load config
    config = load_config(args.config)

    # CLI overrides
    if args.tags:
        config["target"]["tags"] = [t.strip() for t in args.tags.split(",")]
    if args.parallel > 0:
        config["images"]["parallel"] = args.parallel

    if not args.url and not args.urls and not args.beautify_only:
        parser.error("--url or --urls is required (unless --beautify-only)")

    urls = args.urls if args.urls else ([args.url] if args.url else [])

    if len(urls) > 1:
        run_batch_pipeline(
            urls=urls,
            target_folder=args.target,
            config=config,
            vault_root=args.vault,
            dry_run=args.dry_run,
        )
    else:
        run_pipeline(
            url=urls[0] if urls else "",
            target_folder=args.target,
            config=config,
            vault_root=args.vault,
            dry_run=args.dry_run,
            beautify_only=args.beautify_only,
            existing_path=args.path,
        )


if __name__ == "__main__":
    main()
