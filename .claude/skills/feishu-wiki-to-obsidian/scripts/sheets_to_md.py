#!/usr/bin/env python3
"""Export Feishu sheets to Markdown files in the vault."""
import json
import os
import subprocess
import sys


def find_lark_cli():
    import shutil
    path = shutil.which("lark-cli") or shutil.which("lark-cli.cmd")
    if path:
        return path
    # Fallback for Windows npm global
    npm_path = os.path.join(os.environ.get("APPDATA", ""), "npm", "lark-cli.cmd")
    if os.path.isfile(npm_path):
        return npm_path
    return "lark-cli"


def run_lark(args):
    cli = find_lark_cli()
    cmd = f'"{cli}" ' + " ".join(f'"{a}"' for a in args) + " --as user"
    result = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8",
                            timeout=60, shell=True)
    if result.returncode != 0:
        raise RuntimeError(f"lark-cli error: {result.stderr[:200]}")
    return json.loads(result.stdout)


def table_to_markdown(columns, data):
    if not columns:
        return ""
    header = "| " + " | ".join(str(c or "") for c in columns) + " |"
    sep = "| " + " | ".join("---" for _ in columns) + " |"
    rows = []
    for row in data:
        padded = list(row) + [None] * (len(columns) - len(row))
        cells = [str(c if c is not None else "") for c in padded[:len(columns)]]
        rows.append("| " + " | ".join(cells) + " |")
    return "\n".join([header, sep] + rows)


SHEETS = [
    {
        "token": "MlJWsT3D8hMyODtNxnyct9rfnhg",
        "name": "资金记录",
        "tabs": [
            {"id": "1aa37d", "name": "工资记录"},
            {"id": "yPc0pG", "name": "支出记录"},
            {"id": "eSl3pm", "name": "RSU"},
        ],
    },
    {
        "token": "QbOFs8JY4hDCHXt25cjc3Ae3nYb",
        "name": "Finance",
        "tabs": [
            {"id": "9c5842", "name": "Sheet1"},
            {"id": "vl0sRp", "name": "Sheet2"},
            {"id": "bliPZr", "name": "Sheet3"},
        ],
    },
    {
        "token": "PuRisp53qhsthctYj3fcoTFAnXx",
        "name": "Clothes",
        "tabs": [
            {"id": "7270b7", "name": "Sheet1"},
        ],
    },
]


def main():
    target_dir = sys.argv[1] if len(sys.argv) > 1 else "."
    os.makedirs(target_dir, exist_ok=True)

    for sheet in SHEETS:
        md = f'---\ntitle: "{sheet["name"]}"\ntags: [资金, 资产]\nsource: "https://my.feishu.cn/wiki/{sheet["token"]}"\nparent: "[[Self]]"\n---\n\n# {sheet["name"]}\n\n'
        saved_tabs = 0

        for tab in sheet["tabs"]:
            try:
                data = run_lark([
                    "sheets", "+table-get",
                    "--spreadsheet-token", sheet["token"],
                    "--sheet-id", tab["id"],
                ])
                sheet_data = data.get("data", {}).get("sheets", [{}])[0]
                columns = sheet_data.get("columns", [])
                rows = sheet_data.get("data", [])

                # Filter empty rows
                non_empty = [r for r in rows if any(c is not None and c != "" for c in r)]
                if non_empty and columns:
                    md += f'## {tab["name"]}\n\n'
                    md += table_to_markdown(columns, non_empty) + "\n\n"
                    saved_tabs += 1
                    print(f'  {sheet["name"]}/{tab["name"]}: {len(non_empty)} rows')
                else:
                    print(f'  {sheet["name"]}/{tab["name"]}: empty, skipped')
            except Exception as e:
                print(f'  {sheet["name"]}/{tab["name"]}: ERROR - {str(e)[:100]}')

        if saved_tabs > 0:
            filepath = os.path.join(target_dir, f'{sheet["name"]}.md')
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(md)
            print(f'  Saved: {filepath}')
        else:
            print(f'  {sheet["name"]}: no data, skipped')

    print("\nDone!")


if __name__ == "__main__":
    main()
