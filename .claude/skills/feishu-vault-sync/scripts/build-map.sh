#!/bin/bash
# 从全量同步日志生成增量映射文件
set -euo pipefail

VAULT_DIR="${VAULT_ROOT:-C:/Users/qi'yue/Desktop/Claire}"
DATA_DIR="$VAULT_DIR/.claude/scripts"
LOG_FILE="$DATA_DIR/sync-feishu.log"
MAP_FILE="$DATA_DIR/sync-feishu-map.tsv"

if [[ ! -f "$LOG_FILE" ]]; then
  echo "❌ 日志不存在: $LOG_FILE"
  echo "请先运行: Skill(\"feishu-vault-sync\") full"
  exit 1
fi

> "$MAP_FILE"
NOW=$(date +%s); COUNT=0

while IFS= read -r line; do
  if [[ "$line" =~ ^\[OK\]\ (.+)\ →\ (https://.+) ]]; then
    path="${BASH_REMATCH[1]}"
    url="${BASH_REMATCH[2]}"
    doc_id=$(echo "$url" | sed -E 's|.*/docx/([^/]+).*|\1|')
    [[ -n "$doc_id" ]] && { echo -e "${path}\t${doc_id}\t${url}\t${NOW}" >> "$MAP_FILE"; ((COUNT++)) || true; }
  fi
done < "$LOG_FILE"

echo "=========================================="
echo "映射文件生成完成"
echo "📄 $MAP_FILE"
echo "📊 $COUNT 条记录"
echo "=========================================="
echo ""
echo "前 5 条:"
head -5 "$MAP_FILE" | while IFS=$'\t' read -r p d u t; do echo "  $p → $d"; done
