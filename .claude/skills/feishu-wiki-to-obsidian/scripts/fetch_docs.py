#!/usr/bin/env python3
"""fetch_docs.py — Fetch Feishu wiki documents as XML via lark-cli.

Uses --doc-format xml --detail full to preserve table structure.

Usage:
    python3 fetch_docs.py --url "https://xxx.feishu.cn/wiki/xxx" --output temp/
"""

import argparse
import json
import os
import re
import subprocess
import sys


def extract_token(url: str) -> str:
    """Extract wiki/docx token from a Feishu URL."""
    m = re.search(r"/wiki/(\w+)", url)
    if m:
        return m.group(1)
    m = re.search(r"/docx/(\w+)", url)
    if m:
        return m.group(1)
    # Assume it's a raw token
    return url.strip()


def _find_lark_cli() -> str:
    """Find lark-cli executable (handle Windows .cmd suffix)."""
    import shutil
    path = shutil.which("lark-cli")
    if path:
        return path
    path = shutil.which("lark-cli.cmd")
    if path:
        return path
    return "lark-cli"


def run_lark(args: list[str], as_user: bool = True) -> dict:
    """Run a lark-cli command and return parsed JSON."""
    cli = _find_lark_cli()
    cmd = [cli] + args + ["--format", "json"]
    if as_user:
        cmd += ["--as", "user"]
    result = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8")
    if result.returncode != 0:
        # Try to parse error JSON
        try:
            err = json.loads(result.stderr)
            raise RuntimeError(f"lark-cli error: {err.get('error', {}).get('message', result.stderr)}")
        except json.JSONDecodeError:
            raise RuntimeError(f"lark-cli failed (exit {result.returncode}): {result.stderr}")
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError:
        raise RuntimeError(f"lark-cli returned invalid JSON: {result.stdout[:200]}")


def get_wiki_node(token: str) -> dict:
    """Get wiki node info (space_id, obj_token, title, has_child)."""
    data = run_lark(["wiki", "spaces", "get_node", "--params", json.dumps({"token": token})])
    return data.get("data", {}).get("node", {})


def list_child_nodes(space_id: str, parent_token: str) -> list[dict]:
    """List child nodes under a wiki parent node."""
    data = run_lark([
        "wiki", "nodes", "list",
        "--params", json.dumps({"space_id": space_id, "parent_node_token": parent_token}),
        "--page-all"
    ])
    return data.get("data", {}).get("items", [])


def fetch_doc_xml(doc_token: str) -> dict:
    """Fetch a single document's content as XML."""
    data = run_lark([
        "docs", "+fetch",
        "--api-version", "v2",
        "--doc-format", "xml",
        "--detail", "full",
        "--doc", doc_token
    ])
    return data


def extract_sub_pages(xml_content: str) -> list[dict]:
    """Extract sub-page references from XML content."""
    pages = []
    # Match <sub-page doc-id="..." file-type="..." title="..."/>
    for m in re.finditer(
        r'<sub-page\s+[^>]*doc-id="([^"]+)"[^>]*/>', xml_content
    ):
        doc_id = m.group(1)
        title_m = re.search(r'title="([^"]*)"', m.group(0))
        title = title_m.group(1) if title_m else doc_id
        pages.append({"doc_id": doc_id, "title": title})
    return pages


def fetch_all(url: str, output_dir: str, max_depth: int = 10) -> dict:
    """Fetch a wiki document and its children recursively.

    Returns metadata dict with title, children list, stats.
    """
    os.makedirs(output_dir, exist_ok=True)
    token = extract_token(url)

    # Step 1: Get wiki node info
    print(f"[1/3] Resolving wiki node: {token}")
    node = get_wiki_node(token)
    title = node.get("title", token)
    obj_token = node.get("obj_token", token)
    space_id = node.get("space_id", "")
    has_child = node.get("has_child", False)

    print(f"  Title: {title}")
    print(f"  Obj token: {obj_token}")
    print(f"  Space: {space_id}")

    # Step 2: Fetch main document
    print(f"\n[2/3] Fetching main document (XML)...")
    main_data = fetch_doc_xml(obj_token)
    content = main_data.get("data", {}).get("document", {}).get("content", "")

    main_file = os.path.join(output_dir, f"{_safe_filename(title)}.json")
    with open(main_file, "w", encoding="utf-8") as f:
        json.dump(main_data, f, ensure_ascii=False, indent=2)
    print(f"  Saved: {main_file}")

    # Extract sub-pages from XML content AND wiki child nodes
    sub_pages = extract_sub_pages(content)
    children = []
    total_files = 1

    # Also check wiki child nodes (has_child from wiki API)
    if has_child and space_id:
        try:
            wiki_children = list_child_nodes(space_id, token)
            for wc in wiki_children:
                wc_title = wc.get("title", "")
                wc_obj_token = wc.get("obj_token", "")
                wc_obj_type = wc.get("obj_type", "")
                wc_node_token = wc.get("node_token", "")
                # Skip if already in sub_pages (XML embedded)
                if any(p["doc_id"] == wc_obj_token for p in sub_pages):
                    continue
                # Only fetch docx types (sheets/bitables handled separately)
                if wc_obj_type == "docx":
                    sub_pages.append({
                        "doc_id": wc_obj_token,
                        "title": wc_title,
                        "node_token": wc_node_token,
                        "has_child": wc.get("has_child", False),
                        "space_id": space_id,
                    })
                elif wc_obj_type == "sheet":
                    print(f"  ⚠ Skipping sheet: {wc_title} (use sheets CLI)")
                else:
                    print(f"  ⚠ Skipping {wc_obj_type}: {wc_title}")
        except Exception as e:
            print(f"  ⚠ Could not list wiki children: {e}")

    # Step 3: Fetch child documents recursively
    if sub_pages and max_depth > 0:
        print(f"\n[3/3] Fetching {len(sub_pages)} sub-pages...")
        for i, page in enumerate(sub_pages, 1):
            doc_id = page["doc_id"]
            page_title = page["title"]
            print(f"  [{i}/{len(sub_pages)}] {page_title} ({doc_id})")
            try:
                # Fetch this child document
                child_data = fetch_doc_xml(doc_id)
                child_content = child_data.get("data", {}).get("document", {}).get("content", "")
                child_file = os.path.join(output_dir, f"{_safe_filename(page_title)}.json")
                with open(child_file, "w", encoding="utf-8") as f:
                    json.dump(child_data, f, ensure_ascii=False, indent=2)
                children.append({"title": page_title, "doc_id": doc_id, "file": child_file})
                total_files += 1
                print(f"    → Saved")

                # Recursively fetch sub-sub-pages (both XML and wiki nodes)
                grand_children_xml = extract_sub_pages(child_content)
                grand_children_wiki = []
                if page.get("has_child") and page.get("space_id"):
                    try:
                        wiki_gc = list_child_nodes(page["space_id"], page.get("node_token", doc_id))
                        for wgc in wiki_gc:
                            if wgc.get("obj_type") == "docx":
                                grand_children_wiki.append({
                                    "doc_id": wgc["obj_token"],
                                    "title": wgc["title"],
                                    "node_token": wgc.get("node_token", ""),
                                    "has_child": wgc.get("has_child", False),
                                    "space_id": page["space_id"],
                                })
                    except Exception:
                        pass
                all_grand = grand_children_xml + grand_children_wiki
                if all_grand and max_depth > 1:
                    _fetch_recursive(doc_id, all_grand, output_dir, max_depth - 1,
                                     children, lambda: None)
                    total_files += len([c for c in children if not c.get("error")])
            except Exception as e:
                print(f"    ✗ Error: {e}")
                children.append({"title": page_title, "doc_id": doc_id, "error": str(e)})
    else:
        print(f"\n[3/3] No sub-pages found.")

    return {
        "title": title,
        "node_token": token,
        "obj_token": obj_token,
        "space_id": space_id,
        "main_file": main_file,
        "children": children,
        "total_files": total_files,
    }


def _fetch_recursive(parent_id: str, sub_pages: list[dict], output_dir: str,
                     depth: int, all_children: list, counter) -> None:
    """Recursively fetch sub-pages to arbitrary depth."""
    if depth <= 0 or not sub_pages:
        return

    seen_ids = {c["doc_id"] for c in all_children}

    for page in sub_pages:
        doc_id = page["doc_id"]
        if doc_id in seen_ids:
            continue
        seen_ids.add(doc_id)

        page_title = page["title"]
        print(f"    ↳ [sub] {page_title} ({doc_id})")
        try:
            child_data = fetch_doc_xml(doc_id)
            child_content = child_data.get("data", {}).get("document", {}).get("content", "")
            child_file = os.path.join(output_dir, f"{_safe_filename(page_title)}.json")
            with open(child_file, "w", encoding="utf-8") as f:
                json.dump(child_data, f, ensure_ascii=False, indent=2)
            all_children.append({"title": page_title, "doc_id": doc_id, "file": child_file})
            print(f"      → Saved")

            # Go deeper: XML sub-pages + wiki child nodes
            deeper_xml = extract_sub_pages(child_content)
            deeper_wiki = []
            if page.get("has_child") and page.get("space_id"):
                try:
                    wiki_gc = list_child_nodes(page["space_id"], page.get("node_token", doc_id))
                    for wgc in wiki_gc:
                        if wgc.get("obj_type") == "docx":
                            deeper_wiki.append({
                                "doc_id": wgc["obj_token"],
                                "title": wgc["title"],
                                "node_token": wgc.get("node_token", ""),
                                "has_child": wgc.get("has_child", False),
                                "space_id": page["space_id"],
                            })
                except Exception:
                    pass
            all_deeper = deeper_xml + deeper_wiki
            if all_deeper:
                _fetch_recursive(doc_id, all_deeper, output_dir, depth - 1, all_children, counter)
        except Exception as e:
            print(f"      ✗ Error: {e}")
            all_children.append({"title": page_title, "doc_id": doc_id, "error": str(e)})


def _safe_filename(name: str) -> str:
    """Convert a title to a safe filename."""
    # Replace problematic characters
    name = name.replace("/", "_").replace("\\", "_").replace(":", "_")
    name = name.replace("*", "_").replace("?", "_").replace('"', "_")
    name = name.replace("<", "_").replace(">", "_").replace("|", "_")
    return name.strip()


def main():
    parser = argparse.ArgumentParser(description="Fetch Feishu wiki documents as XML")
    parser.add_argument("--url", required=True, help="Feishu wiki URL or token")
    parser.add_argument("--output", required=True, help="Output directory for JSON files")
    parser.add_argument("--max-depth", type=int, default=1, help="Max recursion depth (default: 1)")
    args = parser.parse_args()

    result = fetch_all(args.url, args.output, args.max_depth)
    print(f"\nDone: {result['total_files']} documents fetched to {args.output}/")


if __name__ == "__main__":
    main()
