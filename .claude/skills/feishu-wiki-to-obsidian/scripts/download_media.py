#!/usr/bin/env python3
"""download_media.py — Download images/attachments/whiteboards from Feishu docs.

Reads markdown files, extracts media placeholders (media:img:X, media:source:X,
media:whiteboard:X), downloads via lark-cli docs +media-download, detects
extensions, and replaces placeholders with Obsidian wiki-links.

Usage:
    python3 download_media.py --input target/ --vault-root . --target-folder DingDong
"""

import argparse
import os
import re
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed


# ---------------------------------------------------------------------------
# Extension detection via file header bytes
# ---------------------------------------------------------------------------

MAGIC_MAP = {
    b"\x89PNG": "png",
    b"\xff\xd8\xff": "jpg",
    b"GIF8": "gif",
    b"RIFF": "webp",
    b"%PDF": "pdf",
    b"<?xm": "svg",
    b"<svg": "svg",
    b"PK\x03\x04": "zip",  # xlsx, pptx, docx are zip archives
}

# Office XML formats: zip archives with specific content types
OFFICE_CONTENT_TYPES = {
    "word/document.xml": "docx",
    "xl/workbook.xml": "xlsx",
    "ppt/presentation.xml": "pptx",
}


def detect_extension(filepath: str) -> str:
    """Detect file format from header bytes, with Office XML detection."""
    try:
        with open(filepath, "rb") as f:
            header = f.read(16)
    except (OSError, IOError):
        return "bin"

    for magic, ext in MAGIC_MAP.items():
        if header.startswith(magic):
            if ext == "zip":
                # Check if it's an Office document (xlsx/pptx/docx)
                return _detect_office_type(filepath) or "zip"
            return ext
    return "bin"  # default for unknown (not "png"!)


def _detect_office_type(filepath: str) -> str | None:
    """Detect if a zip file is an Office document (xlsx/pptx/docx)."""
    try:
        import zipfile
        with zipfile.ZipFile(filepath, "r") as zf:
            names = zf.namelist()
            for name in names:
                for pattern, ext in OFFICE_CONTENT_TYPES.items():
                    if name.lower() == pattern:
                        return ext
    except (zipfile.BadZipFile, OSError):
        pass
    return None


# ---------------------------------------------------------------------------
# Download logic
# ---------------------------------------------------------------------------

def _find_lark_cli() -> str:
    """Find lark-cli executable (handle Windows .cmd suffix)."""
    import shutil
    path = shutil.which("lark-cli") or shutil.which("lark-cli.cmd") or "lark-cli"
    return path


def download_single(token: str, media_type: str, output_dir: str, filename: str,
                     retry: int = 3, cwd: str = "") -> str | None:
    """Download a single media file via lark-cli.

    Returns the local filename with extension, or None on failure.
    """
    os.makedirs(output_dir, exist_ok=True)
    outpath = os.path.join(output_dir, filename)

    # lark-cli requires relative paths for --output
    if cwd:
        rel_output = os.path.relpath(output_dir, cwd)
    else:
        rel_output = os.path.basename(output_dir)

    cli = _find_lark_cli()
    cmd = [cli, "docs", "+media-download", "--token", token, "--output", rel_output, "--as", "user"]
    if media_type == "whiteboard":
        cmd += ["--type", "whiteboard"]

    for attempt in range(retry):
        try:
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=30,
                                    cwd=cwd or None, shell=True)
            if result.returncode == 0:
                # Find the downloaded file (lark-cli may name it differently)
                downloaded = _find_downloaded_file(output_dir, filename)
                if downloaded:
                    # Detect extension and rename if needed
                    ext = detect_extension(downloaded)
                    final_name = filename if "." in filename else f"{filename}.{ext}"
                    final_path = os.path.join(output_dir, final_name)
                    if downloaded != final_path:
                        os.rename(downloaded, final_path)
                    return final_name
                return filename
            else:
                if attempt < retry - 1:
                    time.sleep(2 ** attempt)
                    continue
                print(f"  ✗ Failed to download {token}: {result.stderr[:100]}")
                return None
        except subprocess.TimeoutExpired:
            if attempt < retry - 1:
                time.sleep(2 ** attempt)
                continue
            print(f"  ✗ Timeout downloading {token}")
            return None
    return None


def _find_downloaded_file(output_dir: str, expected_name: str) -> str | None:
    """Find the downloaded file (lark-cli may use different naming)."""
    # Check exact match first
    exact = os.path.join(output_dir, expected_name)
    if os.path.isfile(exact):
        return exact

    # Check with common extensions (images + documents)
    all_extensions = (
        "png", "jpg", "jpeg", "gif", "webp", "svg",  # images
        "pdf",                                         # documents
        "xlsx", "xls", "csv",                          # spreadsheets
        "docx", "doc",                                 # word
        "pptx", "ppt",                                 # presentations
        "zip", "rar",                                  # archives
        "txt", "json", "xml",                          # text
        "mp4", "mp3", "wav",                           # media
    )
    for ext in all_extensions:
        path = os.path.join(output_dir, f"{expected_name}.{ext}")
        if os.path.isfile(path):
            return path

    # Check for any recently created file in the directory
    # (but only files created in the last 10 seconds to avoid picking up old files)
    import time
    now = time.time()
    candidates = []
    for f in os.listdir(output_dir):
        fpath = os.path.join(output_dir, f)
        if os.path.isfile(fpath) and (now - os.path.getmtime(fpath)) < 10:
            candidates.append((os.path.getmtime(fpath), fpath))
    if candidates:
        candidates.sort(reverse=True)
        return candidates[0][1]

    return None


# ---------------------------------------------------------------------------
# Placeholder replacement
# ---------------------------------------------------------------------------

# Match media placeholders: both images and attachments
# Images:      ![alt](media:img:token) or ![alt](media:img:token|width)
# Attachments: [name](media:source:token)  (no leading !)
# Whiteboards: ![画板](media:whiteboard:token)
MEDIA_RE = re.compile(r"(!?)\[([^\]]*)\]\(media:(img|source|whiteboard):([^)|]+)(?:\|(\d+))?\)")


def extract_placeholders(md_content: str) -> list[dict]:
    """Extract all media placeholders from markdown content."""
    placeholders = []
    for m in MEDIA_RE.finditer(md_content):
        placeholders.append({
            "full_match": m.group(0),
            "is_image": m.group(1) == "!",
            "alt": m.group(2),
            "type": m.group(3),
            "token": m.group(4),
            "width": m.group(5),
            "start": m.start(),
            "end": m.end(),
        })
    return placeholders


def replace_placeholders(md_content: str, token_to_file: dict[str, str], vault_rel_path: str) -> str:
    """Replace media placeholders with Obsidian wiki-links."""
    def replacer(m):
        is_image = m.group(1) == "!"
        alt = m.group(2)
        media_type = m.group(3)
        token = m.group(4)
        width = m.group(5)

        local_file = token_to_file.get(token)
        if not local_file:
            return m.group(0)  # Keep original if not downloaded

        if media_type in ("img", "whiteboard"):
            wiki_path = f"{vault_rel_path}/assets/images/{local_file}"
            width_spec = f"|{width}" if width else "|600"
            return f"![[{wiki_path}{width_spec}]]"
        elif media_type == "source":
            wiki_path = f"{vault_rel_path}/assets/{local_file}"
            display = alt or local_file
            return f"[[{wiki_path}|{display}]]"
        return m.group(0)

    return MEDIA_RE.sub(replacer, md_content)


# ---------------------------------------------------------------------------
# Main pipeline
# ---------------------------------------------------------------------------

def process_directory(md_dir: str, vault_root: str, target_folder: str,
                      parallel: int = 10, image_width: int = 600) -> dict:
    """Process all markdown files: download media and replace placeholders.

    Returns stats dict.
    """
    images_dir = os.path.join(vault_root, target_folder, "assets", "images")
    assets_dir = os.path.join(vault_root, target_folder, "assets")
    os.makedirs(images_dir, exist_ok=True)

    # Step 1: Collect all placeholders from all md files
    all_tokens = {}  # token -> {type, alt, files[]}
    md_files = sorted(f for f in os.listdir(md_dir) if f.endswith(".md"))

    print(f"[1/3] Scanning {len(md_files)} markdown files for media placeholders...")
    for fname in md_files:
        filepath = os.path.join(md_dir, fname)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        for ph in extract_placeholders(content):
            token = ph["token"]
            if token not in all_tokens:
                all_tokens[token] = {
                    "type": ph["type"],
                    "alt": ph["alt"],
                    "files": [],
                }
            all_tokens[token]["files"].append(fname)

    print(f"  Found {len(all_tokens)} unique media tokens")

    # Step 2: Download all media
    print(f"\n[2/3] Downloading media (parallel={parallel})...")
    token_to_file = {}
    img_idx = 0
    download_tasks = []

    for token, info in all_tokens.items():
        img_idx += 1
        filename = f"img_{img_idx:03d}"
        media_type = info["type"]
        output_dir = images_dir if media_type in ("img", "whiteboard") else assets_dir
        download_tasks.append((token, media_type, output_dir, filename))

    completed = 0
    failed = 0
    # Use vault_root as cwd so lark-cli gets relative paths
    cwd = vault_root
    with ThreadPoolExecutor(max_workers=parallel) as executor:
        futures = {
            executor.submit(download_single, t, mt, od, fn, 3, cwd): (t, fn)
            for t, mt, od, fn in download_tasks
        }
        for future in as_completed(futures):
            token, filename = futures[future]
            result = future.result()
            completed += 1
            if result:
                token_to_file[token] = result
            else:
                failed += 1
            if completed % 20 == 0:
                print(f"  Progress: {completed}/{len(download_tasks)}")

    print(f"  Downloaded: {completed - failed}, Failed: {failed}")

    # Step 3: Replace placeholders in markdown
    print(f"\n[3/3] Replacing placeholders in markdown files...")
    vault_rel = target_folder
    for fname in md_files:
        filepath = os.path.join(md_dir, fname)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        new_content = replace_placeholders(content, token_to_file, vault_rel)

        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"  Updated: {fname}")

    return {
        "total_tokens": len(all_tokens),
        "downloaded": completed - failed,
        "failed": failed,
        "files_updated": sum(1 for f in md_files if True),
    }


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description="Download Feishu media and update markdown")
    parser.add_argument("--input", required=True, help="Directory with markdown files")
    parser.add_argument("--vault-root", default=".", help="Vault root directory")
    parser.add_argument("--target-folder", required=True, help="Target folder name in vault")
    parser.add_argument("--parallel", type=int, default=10, help="Parallel downloads")
    parser.add_argument("--image-width", type=int, default=600, help="Default image width")
    args = parser.parse_args()

    stats = process_directory(
        args.input, args.vault_root, args.target_folder,
        args.parallel, args.image_width
    )
    print(f"\nDone: {stats['downloaded']}/{stats['total_tokens']} media downloaded")


if __name__ == "__main__":
    main()
