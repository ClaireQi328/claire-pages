#!/bin/bash
# 增量同步：只处理新建或修改的文件
# 用法: bash sync-incremental.sh [--dry-run] [--force]
set -euo pipefail

VAULT_DIR="${VAULT_ROOT:-C:/Users/qi'yue/Desktop/Claire}"
SCRIPT_DIR="$VAULT_DIR/.claude/skills/feishu-vault-sync/scripts"
DATA_DIR="$VAULT_DIR/.claude/scripts"
MAP_FILE="$DATA_DIR/sync-feishu-map.tsv"
LOG_FILE="$DATA_DIR/sync-feishu-incremental.log"

DRY_RUN=false; FORCE=false
mkdir -p "$DATA_DIR"
touch "$MAP_FILE"

while [[ $# -gt 0 ]]; do
  case $1 in
    --dry-run) DRY_RUN=true; shift ;;
    --force) FORCE=true; shift ;;
    *) shift ;;
  esac
done

echo "=========================================="
echo "飞书增量同步 ($(date '+%Y-%m-%d %H:%M:%S'))"
echo "=========================================="
echo "模式: $([ "$DRY_RUN" = true ] && echo '试运行' || echo '正式')"
echo "映射: $(wc -l < "$MAP_FILE") 条"
echo "=========================================="

# --- 转换函数 ---
convert_markdown() {
  local content
  content=$(cat "$1")
  content=$(echo "$content" | sed '/^---$/,/^---$/d')
  content=$(echo "$content" | sed -E '/^#[A-Za-z一-鿿]+( #[A-Za-z一-鿿]+)*$/d')
  content=$(echo "$content" | sed -E 's/^> \[![a-z]+\]-? *(.*)$/> **\1**/')
  content=$(echo "$content" | sed -E 's/\[\[([^]|]+)\|([^]]+)\]\]/\2/g')
  content=$(echo "$content" | sed -E 's/\[\[([^]|]+)\/([^]|]+)\]\]/\2/g')
  content=$(echo "$content" | sed -E 's/\[\[([^]|]+)\]\]/\1/g')
  content=$(echo "$content" | sed -E 's/!\[\[[^]]*\]\]//g')
  content=$(echo "$content" | sed 's/```mermaid/```/')
  content=$(echo "$content" | awk 'NF{c=0} !NF{c++} c<=2')
  content=$(echo "$content" | sed -e :a -e '/^\n*$/{$d;N;ba' -e '}')
  echo "$content"
}

extract_title() {
  local t
  t=$(grep -m1 '^# ' "$1" | sed 's/^# //' || true)
  [[ -n "$t" ]] && echo "$t" || basename "$1" .md
}

lookup_field() { grep -P "^${1}\t" "$MAP_FILE" 2>/dev/null | cut -f"$2" || true; }

upsert_map() {
  local tmp; tmp=$(mktemp)
  grep -vP "^${1}\t" "$MAP_FILE" > "$tmp" || true
  echo -e "${1}\t${2}\t${3}\t${4}" >> "$tmp"
  mv "$tmp" "$MAP_FILE"
}

# --- 收集文件 ---
mapfile -t FILES < <(find "$VAULT_DIR" -name "*.md" \
  -not -path "*/.obsidian/*" -not -path "*/.git/*" \
  -not -path "*/.agents/*" -not -path "*/.claude/*" \
  -not -path "*/.workbuddy/*" -not -path "*/node_modules/*" \
  -not -path "*/templates/*" -not -path "*/assets/*" | sort)

TOTAL=${#FILES[@]}
echo "扫描到 $TOTAL 个文件"
echo ""

SUCCESS=0; FAILED=0; SKIPPED=0; CREATED=0; UPDATED=0

for file in "${FILES[@]}"; do
  rel_path="${file#$VAULT_DIR/}"
  file_size=$(wc -c < "$file")
  [[ "$file_size" -lt 10 ]] && continue

  doc_id=$(lookup_field "$rel_path" 2)
  synced_at=$(lookup_field "$rel_path" 4)
  file_mtime=$(stat -c %Y "$file" 2>/dev/null || stat -f %m "$file" 2>/dev/null || echo "0")

  if [[ -z "$doc_id" ]]; then
    action="create"
  elif [[ "$FORCE" = true ]] || [[ "$file_mtime" -gt "${synced_at:-0}" ]]; then
    action="update"
  else
    ((SKIPPED++)) || true; continue
  fi

  content=$(convert_markdown "$file")
  [[ -z "$(echo "$content" | tr -d '[:space:]')" ]] && continue

  now=$(date +%s)

  if [[ "$DRY_RUN" = true ]]; then
    echo "[$action] $rel_path"
    [[ "$action" == "create" ]] && ((CREATED++)) || true || ((UPDATED++)) || true
    continue
  fi

  if [[ "$action" == "create" ]]; then
    echo -n "[新建] $rel_path ... "
    result=$(lark-cli docs +create --api-version v2 --doc-format markdown --as user --parent-position my_library --content "$content" 2>&1) || true
    if echo "$result" | grep -q '"ok": true'; then
      url=$(echo "$result" | grep -o '"url": "[^"]*"' | head -1 | sed 's/"url": "//;s/"//')
      did=$(echo "$result" | grep -o '"document_id": "[^"]*"' | head -1 | sed 's/"document_id": "//;s/"//')
      upsert_map "$rel_path" "$did" "$url" "$now"
      echo "✅"; echo "[CREATE] $rel_path → $url" >> "$LOG_FILE"
      ((SUCCESS++)) || true; ((CREATED++)) || true
    else
      err=$(echo "$result" | grep -o '"message": "[^"]*"' | head -1 | sed 's/"message": "//;s/"//' || echo "?")
      echo "❌ $err"; echo "[FAIL] $rel_path → $err" >> "$LOG_FILE"
      ((FAILED++)) || true
    fi
  else
    echo -n "[更新] $rel_path ... "
    result=$(lark-cli docs +update --api-version v2 --doc-format markdown --as user \
      --doc "$doc_id" --command overwrite --content "$content" 2>&1) || true
    if echo "$result" | grep -q '"ok": true'; then
      url=$(lookup_field "$rel_path" 3)
      upsert_map "$rel_path" "$doc_id" "$url" "$now"
      echo "✅"; echo "[UPDATE] $rel_path → $url" >> "$LOG_FILE"
      ((SUCCESS++)) || true; ((UPDATED++)) || true
    else
      err=$(echo "$result" | grep -o '"message": "[^"]*"' | head -1 | sed 's/"message": "//;s/"//' || echo "?")
      echo "❌ $err"; echo "[FAIL] $rel_path → $err" >> "$LOG_FILE"
      ((FAILED++)) || true
    fi
  fi
done

echo ""
echo "=========================================="
echo "增量同步完成 ($(date '+%Y-%m-%d %H:%M:%S'))"
echo "🆕 $CREATED | 🔄 $UPDATED | ⏭️ $SKIPPED | ❌ $FAILED"
echo "=========================================="
