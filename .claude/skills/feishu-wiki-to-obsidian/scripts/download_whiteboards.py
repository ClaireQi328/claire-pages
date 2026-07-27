#!/usr/bin/env python3
"""Download whiteboard images from markdown files in a directory."""
import json
import os
import re
import subprocess
import sys
import time


def find_lark_cli():
    import shutil
    path = shutil.which("lark-cli") or shutil.which("lark-cli.cmd")
    if path:
        return path
    npm_path = os.path.join(os.environ.get("APPDATA", ""), "npm", "lark-cli.cmd")
    if os.path.isfile(npm_path):
        return npm_path
    return "lark-cli"


WHITEBOARD_RE = re.compile(r'!\[([^\]]*)\]\(media:whiteboard:([^)]+)\)')


def main():
    md_dir = sys.argv[1] if len(sys.argv) > 1 else "."
    images_dir = os.path.join(md_dir, "assets", "images")
    os.makedirs(images_dir, exist_ok=True)

    # Collect all whiteboard tokens
    tokens = {}
    for fname in sorted(os.listdir(md_dir)):
        if not fname.endswith(".md"):
            continue
        filepath = os.path.join(md_dir, fname)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        for m in WHITEBOARD_RE.finditer(content):
            token = m.group(2)
            if token not in tokens:
                tokens[token] = []
            tokens[token].append(fname)

    print(f"Found {len(tokens)} whiteboard tokens")

    cli = find_lark_cli()
    cwd = md_dir  # Run lark-cli from md_dir so paths are relative

    downloaded = 0
    failed = 0
    token_to_file = {}

    for i, (token, files) in enumerate(tokens.items(), 1):
        fname = f"wb_{i:03d}"
        # --output needs a filename, not just a directory
        rel_output = f"assets/images/{fname}"

        print(f"  [{i}/{len(tokens)}] {token} ({files[0]})")

        success = False
        for attempt in range(3):
            try:
                cmd = f'"{cli}" docs +media-download --token "{token}" --type whiteboard --output "{rel_output}" --as user --overwrite'
                result = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8",
                                        timeout=30, shell=True, cwd=cwd)
                if result.returncode == 0:
                    try:
                        out = json.loads(result.stdout)
                        saved = out.get("data", {}).get("saved_path", "")
                        if saved:
                            ext = os.path.splitext(saved)[1] or ".jpg"
                            token_to_file[token] = f"{fname}{ext}"
                            downloaded += 1
                            print(f"    → Saved: {fname}{ext}")
                        else:
                            token_to_file[token] = f"{fname}.jpg"
                            downloaded += 1
                            print(f"    → Saved")
                    except json.JSONDecodeError:
                        token_to_file[token] = f"{fname}.jpg"
                        downloaded += 1
                        print(f"    → Saved")
                    success = True
                    break
                else:
                    try:
                        err = json.loads(result.stderr)
                        msg = err.get("error", {}).get("message", result.stderr[:100])
                    except Exception:
                        msg = result.stderr[:100]
                    if attempt < 2:
                        time.sleep(2)
                        continue
                    print(f"    ✗ Failed: {msg}")
                    failed += 1
            except Exception as e:
                if attempt < 2:
                    time.sleep(2)
                    continue
                print(f"    ✗ Error: {str(e)[:100]}")
                failed += 1

    # Replace placeholders in markdown
    if token_to_file:
        print(f"\nReplacing placeholders in markdown files...")
        for fname in sorted(os.listdir(md_dir)):
            if not fname.endswith(".md"):
                continue
            filepath = os.path.join(md_dir, fname)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            def replacer(m):
                alt = m.group(1)
                token = m.group(2)
                local = token_to_file.get(token)
                if local:
                    return f'![[SJTU/assets/images/{local}|600]]'
                return m.group(0)

            new_content = WHITEBOARD_RE.sub(replacer, content)
            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"  Updated: {fname}")

    print(f"\nDone: {downloaded}/{len(tokens)} downloaded, {failed} failed")


if __name__ == "__main__":
    main()
