#!/bin/bash
# 全量同步：vault 所有 .md 文件 → 飞书个人知识库
set -euo pipefail

VAULT_DIR="C:/Users/qi'yue/Desktop/Claire"
LOG_DIR="$VAULT_DIR/.claude/scripts"
LOG_FILE="$LOG_DIR/sync-feishu.log"
LIMIT=${1:-0}

mkdir -p "$LOG_DIR"
: > "$LOG_FILE"

echo "飞书全量同步 开始"
echo "目标: 个人知识库 (my_library)"

convert_markdown() {
  local file="$1"
  local c
  c=$(sed '/^---$/,/^---$/d' "$file")
  c=$(echo "$c" | sed -E '/^#[A-Za-z一-鿿]+( #[A-Za-z一-鿿]+)*$/d')
  c=$(echo "$c" | sed -E 's/^> \[![a-z]+\]-? *(.*)$/> **\1**/')
  c=$(echo "$c" | sed -E 's/\[\[([^]|]+)\|([^]]+)\]\]/\2/g')
  c=$(echo "$c" | sed -E 's/\[\[([^]|]+)\/([^]|]+)\]\]/\2/g')
  c=$(echo "$c" | sed -E 's/\[\[([^]|]+)\]\]/\1/g')
  c=$(echo "$c" | sed -E 's/!\[\[[^]]*\]\]//g')
  c=$(echo "$c" | sed 's/```mermaid/```/')
  c=$(echo "$c" | awk 'NF{cnt=0} !NF{cnt++} cnt<=2')
  echo "$c"
}

mapfile -t FILES < <(find "$VAULT_DIR" -name "*.md" \
  -not -path "*/.obsidian/*" -not -path "*/.git/*" \
  -not -path "*/.agents/*" -not -path "*/.claude/*" \
  -not -path "*/.workbuddy/*" -not -path "*/node_modules/*" \
  -not -path "*/templates/*" -not -path "*/assets/*" | sort)

TOTAL=${#FILES[@]}
echo "文件数: $TOTAL"

OK=0; FAIL=0; SKIP=0

for f in "${FILES[@]}"; do
  if [ "$LIMIT" -gt 0 ] && [ $((OK + FAIL)) -ge "$LIMIT" ]; then break; fi

  rel="${f#$VAULT_DIR/}"
  sz=$(wc -c < "$f")
  if [ "$sz" -lt 10 ]; then SKIP=$((SKIP+1)); continue; fi

  content=$(convert_markdown "$f")
  trimmed=$(echo "$content" | tr -d '[:space:]')
  if [ -z "$trimmed" ]; then SKIP=$((SKIP+1)); continue; fi

  tmpf=$(mktemp)
  echo "$content" > "$tmpf"

  printf "[%s] " "$rel"
  result=$(lark-cli docs +create --api-version v2 --doc-format markdown --as user --parent-position my_library --content "$content" 2>&1) || true
  rm -f "$tmpf"

  if echo "$result" | grep -q '"ok": true'; then
    url=$(echo "$result" | grep -o '"url": "[^"]*"' | head -1 | sed 's/"url": "//;s/"//')
    echo "OK $url"
    printf "[OK] %s -> %s\n" "$rel" "$url" >> "$LOG_FILE"
    OK=$((OK+1))
  else
    msg=$(echo "$result" | grep -o '"message": "[^"]*"' | head -1 | sed 's/"message": "//;s/"//' || echo "err")
    echo "FAIL $msg"
    printf "[FAIL] %s -> %s\n" "$rel" "$msg" >> "$LOG_FILE"
    FAIL=$((FAIL+1))
  fi

  done_n=$((OK + FAIL + SKIP))
  mod=$((done_n % 20))
  if [ "$mod" -eq 0 ] && [ "$done_n" -gt 0 ]; then
    echo "--- $done_n / $TOTAL ---"
  fi
done

echo ""
echo "完成: OK=$OK FAIL=$FAIL SKIP=$SKIP"
echo "日志: $LOG_FILE"
echo "下一步: bash .claude/skills/feishu-vault-sync/scripts/build-map.sh"
