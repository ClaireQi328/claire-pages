#!/bin/bash
# fix-wikilinks.sh — Post-processing for Obsidian wiki-links and images
# Usage: bash fix-wikilinks.sh <target_dir> [vault_root]
#
# Actions:
# 1. Detect and fix double image extensions (.png.png → .png)
# 2. Add image width spec if missing (|600)
# 3. Verify all wiki-link references point to existing files
# 4. Report orphan images (files not referenced)
# 5. Clean up excessive blank lines

set -euo pipefail

TARGET_DIR="${1:?Usage: fix-wikilinks.sh <target_dir> [vault_root]}"
VAULT_ROOT="${2:-.}"

# --- 1. Fix double extensions ---
echo "=== Fix double extensions ==="
double_ext=0
for f in "$TARGET_DIR"/assets/images/*.png.png "$TARGET_DIR"/assets/images/*.jpg.jpg "$TARGET_DIR"/assets/images/*.gif.gif 2>/dev/null; do
  [ -f "$f" ] || continue
  newname="${f%.*}"
  mv "$f" "$newname"
  double_ext=$((double_ext + 1))
done
echo "Fixed: $double_ext double extensions"

# --- 2. Add image width if missing ---
echo "=== Add image width ==="
width_added=0
for md in "$TARGET_DIR"/*.md; do
  [ -f "$md" ] || continue
  # Match ![[path]] without |width, add |600
  if grep -qP '!\[\[[^\]|]+\]\]' "$md"; then
    perl -i -pe 's/!\[\[([^\]|]+)\]\]/![[$1|600]]/g unless /\|/' "$md"
    width_added=$((width_added + 1))
  fi
done
echo "Updated: $width_added files"

# --- 3. Verify references ---
echo "=== Verify references ==="
missing=0
while IFS= read -r ref; do
  # Extract path from ![[path]] or [[path]]
  path=$(echo "$ref" | sed 's/!\?\[\[//;s/|.*//;s/\]\]//')
  full_path="$VAULT_ROOT/$path"
  if [ ! -f "$full_path" ]; then
    echo "MISSING: $path (ref: $ref)"
    missing=$((missing + 1))
  fi
done < <(grep -roh '!\?\[\[[^]]*\]\]' "$TARGET_DIR"/*.md 2>/dev/null | sort -u)
echo "Missing: $missing"

# --- 4. Find orphan images ---
echo "=== Orphan images ==="
orphan=0
for img in "$TARGET_DIR"/assets/images/*.{png,jpg,gif,webp} 2>/dev/null; do
  [ -f "$img" ] || continue
  basename=$(basename "$img")
  if ! grep -rq "$basename" "$TARGET_DIR"/*.md 2>/dev/null; then
    echo "ORPHAN: $img"
    orphan=$((orphan + 1))
  fi
done
echo "Orphans: $orphan"

# --- 5. Clean blank lines ---
echo "=== Clean blank lines ==="
for md in "$TARGET_DIR"/*.md; do
  [ -f "$md" ] || continue
  perl -i -0pe 's/\n{3,}/\n\n/g' "$md"
done
echo "Done"

# --- Summary ---
echo ""
echo "=== Summary ==="
echo "Files: $(ls "$TARGET_DIR"/*.md 2>/dev/null | wc -l)"
echo "Images: $(find "$TARGET_DIR/assets/images" -type f 2>/dev/null | wc -l)"
echo "References: $(grep -roh '!\?\[\[[^]]*\]\]' "$TARGET_DIR"/*.md 2>/dev/null | wc -l)"
echo "Missing refs: $missing"
echo "Orphan images: $orphan"
echo "Double extensions fixed: $double_ext"

if [ "$missing" -eq 0 ] && [ "$orphan" -eq 0 ] && [ "$double_ext" -eq 0 ]; then
  echo "✅ All checks passed"
else
  echo "⚠️  Issues found, review above"
fi
