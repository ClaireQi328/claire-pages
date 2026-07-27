#!/usr/bin/env python3
"""xml_to_markdown.py — Convert Feishu XML docx content to Obsidian Markdown.

Parses the XML from `lark-cli docs +fetch --doc-format xml --detail full`
and produces clean Markdown with proper tables, lists, and media placeholders.

Usage:
    python3 xml_to_markdown.py <input_json> <output_md>
    python3 xml_to_markdown.py --input <json_dir> --output <md_dir>  # batch
"""

import argparse
import json
import os
import re
import sys
import xml.etree.ElementTree as ET
from html import unescape
from pathlib import Path


# ---------------------------------------------------------------------------
# XML → Markdown converter
# ---------------------------------------------------------------------------

def xml_to_markdown(xml_str: str, image_width: int = 600) -> str:
    """Convert a Feishu docx XML string to Obsidian-flavored Markdown."""
    # Wrap in root if needed
    xml_str = xml_str.strip()
    if not xml_str.startswith("<"):
        return xml_str
    # Some responses have multiple top-level blocks; wrap them
    try:
        root = ET.fromstring(xml_str)
    except ET.ParseError:
        # Try wrapping in a root element
        try:
            root = ET.fromstring(f"<root>{xml_str}</root>")
        except ET.ParseError:
            # Last resort: return as plain text with tags stripped
            return re.sub(r"<[^>]+>", "", xml_str)

    lines = []
    for elem in root if root.tag == "root" else [root] + list(root):
        block = _convert_block(elem, image_width)
        if block is not None:
            lines.append(block)

    text = "\n\n".join(lines)
    # Clean excessive blank lines
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def _convert_block(elem, image_width: int = 600) -> str | None:
    """Convert a single XML block element to Markdown."""
    tag = elem.tag.split("}")[-1] if "}" in elem.tag else elem.tag

    match tag:
        case "title":
            text = _extract_text(elem)
            return f"# {text}" if text else None

        case "heading":
            level = int(elem.get("level", "2"))
            text = _extract_text(elem)
            return f"{'#' * level} {text}" if text else None

        case "p" | "paragraph":
            text = _extract_rich_text(elem)
            return text if text.strip() else None

        case "table":
            return _convert_table(elem, image_width)

        case "bullet_list" | "bulletList":
            return _convert_list(elem, ordered=False)

        case "ordered_list" | "orderedList":
            return _convert_list(elem, ordered=True)

        case "quote":
            text = _extract_rich_text(elem)
            if text:
                return "\n".join(f"> {line}" for line in text.split("\n"))
            return None

        case "code_block" | "codeBlock":
            lang = elem.get("language", elem.get("lang", ""))
            text = _extract_text(elem)
            return f"```{lang}\n{text}\n```" if text else None

        case "img":
            token = elem.get("token", "")
            alt = elem.get("alt", elem.get("title", "图片"))
            w = elem.get("width", str(image_width))
            if token:
                return f"![{alt}](media:img:{token}|{w})"
            src = elem.get("src", elem.get("url", ""))
            return f"![{alt}]({src})" if src else None

        case "source":
            token = elem.get("token", "")
            name = elem.get("name", "attachment")
            if token:
                return f"[{name}](media:source:{token})"
            return None

        case "whiteboard":
            token = elem.get("token", "")
            if token:
                return f"![画板](media:whiteboard:{token})"
            return None

        case "sheet":
            token = elem.get("token", "")
            sheet_id = elem.get("sheet-id", "")
            return (
                f"> [!info] 嵌入电子表格\n"
                f"> Token: `{token}`, Sheet: `{sheet_id}`\n"
                f"> 使用 `lark-cli sheets` 查看完整数据"
            ) if token else None

        case "bitable":
            token = elem.get("token", "")
            table_id = elem.get("table-id", "")
            return (
                f"> [!info] 嵌入多维表格\n"
                f"> Token: `{token}`, Table: `{table_id}`\n"
                f"> 使用 `lark-cli base` 查看完整数据"
            ) if token else None

        case "callout":
            emoji = elem.get("emoji", "💡")
            children_text = "\n".join(
                _convert_block(child, image_width) or ""
                for child in elem
            ).strip()
            if children_text:
                return f"> [!note] {emoji}\n" + "\n".join(
                    f"> {line}" for line in children_text.split("\n")
                )
            return None

        case "divider":
            return "---"

        case "todo":
            checked = elem.get("checked", "false").lower() == "true"
            text = _extract_text(elem)
            checkbox = "[x]" if checked else "[ ]"
            return f"- {checkbox} {text}" if text else None

        case "grid":
            cols = []
            for col in elem.findall(".//grid_column") + elem.findall(".//gridColumn"):
                col_text = _convert_block(col, image_width) or ""
                if col_text.strip():
                    cols.append(col_text.strip())
            return "\n\n".join(cols) if cols else None

        case "grid_column" | "gridColumn":
            parts = []
            for child in elem:
                converted = _convert_block(child, image_width)
                if converted:
                    parts.append(converted)
            return "\n\n".join(parts) if parts else None

        case "sub-page-list" | "subPageList":
            return None  # Skip sub-page lists in content

        case _:
            # Try to extract text from unknown blocks
            text = _extract_rich_text(elem)
            return text if text and text.strip() else None


def _extract_text(elem) -> str:
    """Extract plain text content from an element (recursively)."""
    parts = []
    if elem.text:
        parts.append(elem.text)
    for child in elem:
        parts.append(_extract_text(child))
        if child.tail:
            parts.append(child.tail)
    return unescape("".join(parts).strip())


def _extract_rich_text(elem) -> str:
    """Extract text with inline formatting preserved."""
    parts = []
    if elem.text:
        parts.append(elem.text)

    for child in elem:
        tag = child.tag.split("}")[-1] if "}" in child.tag else child.tag
        inner = _extract_rich_text(child)

        match tag:
            case "bold":
                parts.append(f"**{inner}**")
            case "italic":
                parts.append(f"*{inner}*")
            case "strikethrough":
                parts.append(f"~~{inner}~~")
            case "underline":
                parts.append(f"=={inner}==")
            case "code" if child.get("inline", "false").lower() == "true":
                parts.append(f"`{inner}`")
            case "link":
                url = child.get("url", child.get("href", "#"))
                parts.append(f"[{inner}]({url})")
            case "mention":
                name = inner or child.get("name", "user")
                parts.append(f"@{name}")
            case "date":
                parts.append(inner)
            case _:
                parts.append(inner)

        if child.tail:
            parts.append(child.tail)

    return unescape("".join(parts))


def _convert_table(table_elem, image_width: int = 600) -> str:
    """Convert XML <table> to markdown table."""
    rows = table_elem.findall(".//tr")
    if not rows:
        # Try without namespace
        rows = table_elem.findall(".//{.*}tr") or list(table_elem.iter("tr"))
    if not rows:
        return ""

    # Extract cell text for each row
    all_rows = []
    for tr in rows:
        cells = tr.findall(".//td") or tr.findall(".//{.*}td") or list(tr.iter("td"))
        row = []
        for td in cells:
            # Handle colspan
            colspan = int(td.get("colspan", td.get("colSpan", "1")))
            cell_text = _extract_rich_text(td).replace("\n", " ").replace("|", "\\|")
            row.append(cell_text)
            for _ in range(colspan - 1):
                row.append("")
        if row:
            all_rows.append(row)

    if not all_rows:
        return ""

    # Normalize column count
    max_cols = max(len(row) for row in all_rows)
    for row in all_rows:
        while len(row) < max_cols:
            row.append("")

    # Build markdown table
    lines = []
    # Header
    lines.append("| " + " | ".join(all_rows[0]) + " |")
    # Separator
    lines.append("|" + "|".join(["---"] * max_cols) + "|")
    # Data rows
    for row in all_rows[1:]:
        lines.append("| " + " | ".join(row) + " |")

    return "\n".join(lines)


def _convert_list(list_elem, ordered: bool = False, depth: int = 0) -> str:
    """Convert XML list to markdown list (recursive for nested lists)."""
    lines = []
    idx = 1
    for child in list_elem:
        tag = child.tag.split("}")[-1] if "}" in child.tag else child.tag

        if tag in ("list_item", "listItem", "li"):
            # Get the text of this list item
            item_parts = []
            sub_lists = []
            for sub in child:
                sub_tag = sub.tag.split("}")[-1] if "}" in sub.tag else sub.tag
                if sub_tag in ("bullet_list", "bulletList", "ordered_list", "orderedList"):
                    sub_lists.append(_convert_list(sub, ordered=(sub_tag in ("ordered_list", "orderedList")), depth=depth + 1))
                else:
                    text = _extract_rich_text(sub)
                    if text.strip():
                        item_parts.append(text.strip())

            # If the list item itself has direct text
            if not item_parts and child.text and child.text.strip():
                item_parts.append(child.text.strip())

            indent = "  " * depth
            prefix = f"{idx}. " if ordered else "- "
            if item_parts:
                lines.append(f"{indent}{prefix}{item_parts[0]}")
                for extra in item_parts[1:]:
                    lines.append(f"{indent}  {extra}")
            else:
                lines.append(f"{indent}{prefix}(empty)")

            for sub_list in sub_lists:
                lines.append(sub_list)

            idx += 1

    return "\n".join(lines)


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def convert_file(input_path: str, output_path: str, image_width: int = 600) -> dict:
    """Convert a single JSON file (from lark-cli) to Markdown.

    Returns stats dict.
    """
    with open(input_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Extract XML content from lark-cli response
    content = ""
    if "data" in data and "document" in data["data"]:
        content = data["data"]["document"].get("content", "")
    elif "content" in data:
        content = data["content"]
    else:
        # Try the whole thing as XML
        content = json.dumps(data) if isinstance(data, dict) else str(data)

    if not content.strip():
        return {"tables": 0, "images": 0, "lines": 0}

    md = xml_to_markdown(content, image_width)

    # Count stats
    table_count = md.count("|---")
    image_count = len(re.findall(r"!\[.*?\]\(media:", md))
    line_count = md.count("\n") + 1

    os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(md)

    return {"tables": table_count, "images": image_count, "lines": line_count}


def main():
    parser = argparse.ArgumentParser(description="Convert Feishu XML to Obsidian Markdown")
    parser.add_argument("input", nargs="?", help="Input JSON file or directory")
    parser.add_argument("output", nargs="?", help="Output MD file or directory")
    parser.add_argument("--input", dest="input_kw", help="Input JSON file or directory")
    parser.add_argument("--output", dest="output_kw", help="Output MD file or directory")
    parser.add_argument("--image-width", type=int, default=600, help="Default image width")
    args = parser.parse_args()

    input_path = args.input_kw or args.input
    output_path = args.output_kw or args.output
    if not input_path or not output_path:
        parser.print_help()
        sys.exit(1)

    if os.path.isdir(input_path):
        # Batch mode
        os.makedirs(output_path, exist_ok=True)
        total = {"tables": 0, "images": 0, "files": 0}
        for fname in sorted(os.listdir(input_path)):
            if not fname.endswith(".json"):
                continue
            in_file = os.path.join(input_path, fname)
            out_file = os.path.join(output_path, fname.replace(".json", ".md"))
            stats = convert_file(in_file, out_file, args.image_width)
            total["tables"] += stats["tables"]
            total["images"] += stats["images"]
            total["files"] += 1
            print(f"  {fname} → {os.path.basename(out_file)} ({stats['tables']} tables, {stats['images']} images)")
        print(f"\nTotal: {total['files']} files, {total['tables']} tables, {total['images']} images")
    else:
        stats = convert_file(input_path, output_path, args.image_width)
        print(f"Converted: {stats['tables']} tables, {stats['images']} images, {stats['lines']} lines")


if __name__ == "__main__":
    main()
