#!/bin/bash
# 同步 vault 文件到飞书 Wiki 知识库（树状结构）
# 用法: bash sync-to-wiki.sh [--dry-run] [--force] [--folder <path>]
set -euo pipefail

VAULT_DIR="${VAULT_ROOT:-C:/Users/qi'yue/Desktop/Claire}"
DATA_DIR="$VAULT_DIR/.claude/scripts"
NODES_FILE="$DATA_DIR/feishu-nodes.json"
MAP_FILE="$DATA_DIR/sync-feishu-wiki-map.tsv"
LOG_FILE="$DATA_DIR/sync-feishu-wiki.log"

SPACE_ID=$(grep -o '"space_id": "[^"]*"' "$NODES_FILE" | sed 's/"space_id": "//;s/"//')

DRY_RUN=false; FORCE=false; FOLDER_FILTER=""
mkdir -p "$DATA_DIR"
touch "$MAP_FILE"

while [[ $# -gt 0 ]]; do
  case $1 in
    --dry-run) DRY_RUN=true; shift ;;
    --force) FORCE=true; shift ;;
    --folder) FOLDER_FILTER="$2"; shift 2 ;;
    *) shift ;;
  esac
done

echo "=========================================="
ts=$(date '+%Y-%m-%d %H:%M:%S')
echo "飞书 Wiki 同步 - $ts"
echo "=========================================="
echo "Space: $SPACE_ID"
echo "模式: $([ "$DRY_RUN" = true ] && echo '试运行' || echo '正式')"
echo "映射: $(wc -l < "$MAP_FILE") 条"
echo "=========================================="

# --- 节点映射函数 ---
# 根据文件路径返回对应的 parent node_token
get_parent_node() {
  local rel_path="$1"

  # 09_Xiaomi 子文件夹映射
  case "$rel_path" in
    09_Xiaomi/01_EP系统/*)
      grep -o '"01_EP系统": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    09_Xiaomi/02_合作伙伴/*)
      grep -o '"02_合作伙伴": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    09_Xiaomi/03_询报价/*)
      grep -o '"03_询报价": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    09_Xiaomi/04_品类管理/*)
      grep -o '"04_品类管理": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    09_Xiaomi/05_数据分析/*)
      grep -o '"05_数据分析": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    09_Xiaomi/06_AI与技术/*)
      grep -o '"06_AI与技术": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    09_Xiaomi/07_项目与汇报/*)
      grep -o '"07_项目与汇报": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    09_Xiaomi/08_生产计划/*)
      grep -o '"08_生产计划": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    09_Xiaomi/09_质量管理/*)
      grep -o '"09_质量管理": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    09_Xiaomi/10_出海/*)
      grep -o '"10_出海": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    09_Xiaomi/*.md)
      grep -o '"09_Xiaomi": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;

    # 00_Self 子文件夹映射
    00_Self/汽车行业深度研究/*)
      grep -o '"汽车行业深度研究": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    00_Self/供应链/*)
      grep -o '"供应链": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    00_Self/产品经理/*)
      grep -o '"产品经理": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    00_Self/自我探索/*)
      grep -o '"自我探索": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
    00_Self/*.md)
      grep -o '"00_Self": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;

    # 其他文件（05_NIO, 08_ByteDance 等）→ 挂到 Xiaomi 节点下
    *)
      grep -o '"09_Xiaomi": "[^"]*"' "$NODES_FILE" | sed 's/.*: "//;s/"//' ;;
  esac
}

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
  echo -e "${1}\t${2}\t${3}\t${4}\t${5}" >> "$tmp"
  mv "$tmp" "$MAP_FILE"
}

# --- 收集文件 ---
if [[ -n "$FOLDER_FILTER" ]]; then
  mapfile -t FILES < <(find "$VAULT_DIR/$FOLDER_FILTER" -name "*.md" \
    -not -path "*/.obsidian/*" -not -path "*/.git/*" \
    -not -path "*/.agents/*" -not -path "*/.claude/*" \
    -not -path "*/.workbuddy/*" -not -path "*/node_modules/*" \
    -not -path "*/templates/*" -not -path "*/assets/*" | sort)
else
  mapfile -t FILES < <(find "$VAULT_DIR" -name "*.md" \
    -not -path "*/.obsidian/*" -not -path "*/.git/*" \
    -not -path "*/.agents/*" -not -path "*/.claude/*" \
    -not -path "*/.workbuddy/*" -not -path "*/node_modules/*" \
    -not -path "*/templates/*" -not -path "*/assets/*" | sort)
fi

TOTAL=${#FILES[@]}
echo "扫描到 $TOTAL 个文件"
echo ""

SUCCESS=0; FAILED=0; SKIPPED=0; CREATED=0; UPDATED=0

for file in "${FILES[@]}"; do
  rel_path="${file#$VAULT_DIR/}"
  file_size=$(wc -c < "$file")
  [[ "$file_size" -lt 10 ]] && continue

  doc_id=$(lookup_field "$rel_path" 2)
  synced_at=$(lookup_field "$rel_path" 5)
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

  title=$(extract_title "$file")
  parent_node=$(get_parent_node "$rel_path")
  now=$(date +%s)

  if [[ "$DRY_RUN" = true ]]; then
    echo "[$action] $rel_path -> parent=$parent_node"
    [[ "$action" == "create" ]] && ((CREATED++)) || true || ((UPDATED++)) || true
    continue
  fi

  if [[ "$action" == "create" ]]; then
    echo -n "[新建] $rel_path ... "
    result=$(lark-cli wiki +node-create \
      --space-id "$SPACE_ID" \
      --parent-node-token "$parent_node" \
      --title "$title" \
      --obj-type docx \
      --as user \
      --format json 2>&1) || true

    if echo "$result" | grep -q '"ok": true'; then
      new_doc_id=$(echo "$result" | grep -o '"obj_token": "[^"]*"' | head -1 | sed 's/"obj_token": "//;s/"//')
      node_token=$(echo "$result" | grep -o '"node_token": "[^"]*"' | head -1 | sed 's/"node_token": "//;s/"//')
      url="https://my.feishu.cn/wiki/$node_token"

      # 写入内容
      lark-cli docs +update --api-version v2 --doc-format markdown --as user \
        --doc "$new_doc_id" --command overwrite --content "$content" >/dev/null 2>&1 || true

      upsert_map "$rel_path" "$new_doc_id" "$url" "$node_token" "$now"
      echo "✅"
      echo "[CREATE] $rel_path -> $url" >> "$LOG_FILE"
      ((SUCCESS++)) || true; ((CREATED++)) || true
    else
      err=$(echo "$result" | grep -o '"message": "[^"]*"' | head -1 | sed 's/"message": "//;s/"//' || echo "?")
      echo "❌ $err"
      echo "[FAIL] $rel_path -> $err" >> "$LOG_FILE"
      ((FAILED++)) || true
    fi
  else
    echo -n "[更新] $rel_path ... "
    result=$(lark-cli docs +update --api-version v2 --doc-format markdown --as user \
      --doc "$doc_id" --command overwrite --content "$content" 2>&1) || true
    if echo "$result" | grep -q '"ok": true'; then
      url=$(lookup_field "$rel_path" 3)
      upsert_map "$rel_path" "$doc_id" "$url" "$(lookup_field "$rel_path" 4)" "$now"
      echo "✅"
      echo "[UPDATE] $rel_path -> $url" >> "$LOG_FILE"
      ((SUCCESS++)) || true; ((UPDATED++)) || true
    else
      err=$(echo "$result" | grep -o '"message": "[^"]*"' | head -1 | sed 's/"message": "//;s/"//' || echo "?")
      echo "❌ $err"
      echo "[FAIL] $rel_path -> $err" >> "$LOG_FILE"
      ((FAILED++)) || true
    fi
  fi
done

echo ""
echo "=========================================="
ts=$(date '+%Y-%m-%d %H:%M:%S')
echo "Wiki 同步完成 - $ts"
echo "🆕 $CREATED | 🔄 $UPDATED | ⏭️ $SKIPPED | ❌ $FAILED"
echo "=========================================="
