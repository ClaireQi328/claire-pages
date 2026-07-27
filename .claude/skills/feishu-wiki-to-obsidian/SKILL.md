---
name: feishu-wiki-to-obsidian
version: 1.0.0
description: "将飞书知识库文档下载为 Obsidian Markdown，保留图片、表格、附件。当用户提供飞书 wiki/docx URL 并要求保存到 Obsidian vault 时使用。"
user-invocable: true
metadata:
  requires:
    bins: ["lark-cli"]
---

# 飞书知识库 → Obsidian Vault

将飞书知识库（Wiki）文档完整下载到 Obsidian vault，保留图片（本地化）、表格（还原为 markdown table）、附件、画板，并自动美化排版。

**核心原则：XML-first，单次完成，不要迭代修 bug。**

## 前置依赖

| 依赖 | 用途 | 检查方式 |
|------|------|---------|
| `lark-cli` | 飞书 API 调用 | `lark-cli --version` |
| `lark-shared` skill | 认证、权限处理 | Read `../lark-shared/SKILL.md` |
| `lark-wiki` skill | Wiki 节点操作 | Read `../lark-wiki/SKILL.md` |
| `lark-doc` skill | 文档内容获取 | Read `../lark-doc/SKILL.md` |
| `baoyu-format-markdown` skill | CJK 排版脚本 | `npx -y bun <skill_dir>/scripts/main.ts --help` |
| `obsidian-markdown` skill | Callout 语法参考 | 已内化，无需额外检查 |

**开始前 MUST 先 Read `../lark-shared/SKILL.md`**（认证、权限处理规则）。

## 脚本（可直接执行的 Pipeline）

`scripts/` 目录下有完整的 Python pipeline，可一键执行或分步运行：

```bash
# 一键迁移（推荐）
python3 scripts/main.py --url "https://xxx.feishu.cn/wiki/xxx" --target "FolderName"

# 使用配置文件
python3 scripts/main.py --url "..." --target "Folder" --config config.yaml

# 仅美化已有文件
python3 scripts/main.py --beautify-only --path existing_dir/ --target "Folder"

# 预览（不实际执行）
python3 scripts/main.py --url "..." --target "Folder" --dry-run
```

| 脚本 | 功能 | 独立使用 |
|------|------|---------|
| `main.py` | Pipeline 总控 | ✅ CLI 入口 |
| `fetch_docs.py` | XML 拉取（`--doc-format xml --detail full`） | ✅ `--url --output` |
| `xml_to_markdown.py` | XML → Markdown（保留表格结构） | ✅ `input.json output.md` |
| `download_media.py` | 媒体下载 + wiki-link 替换 | ✅ `--input --vault-root --target-folder` |
| `beautify.py` | Obsidian 美化 + 交叉引用 | ✅ `--input --tags --parent` |
| `verify.py` | 验证完整性 | ✅ `--input --vault-root --target-folder [--fix]` |

**Pipeline 流程：**
```
fetch (XML) → convert (tables) → download (media) → beautify (Obsidian) → verify
```

## 参数

| 参数 | 必填 | 说明 | 示例 |
|------|------|------|------|
| Feishu URL | 是 | 飞书 wiki/docx 链接 | `https://xxx.feishu.cn/wiki/E0V...` |
| 目标文件夹 | 否 | Vault 内相对路径（默认用文档标题） | `DingDong` |
| tags | 否 | YAML frontmatter 标签 | `工作/叮咚买菜` |
| 图片宽度 | 否 | 图片 embed 宽度限制（默认 600） | `800` |
| `--skip-beautify` | 否 | 跳过美化步骤 | |
| `--dry-run` | 否 | 只分析不写入 | |

## 完整流程（6 阶段）

### Phase 1：鉴权与节点发现

```bash
# 1. 授权（split-flow：先拿 URL，用户扫码后继续）
lark-cli auth login --scope "wiki:node:read,drive:drive:readonly" --no-wait --json

# 2. 获取 wiki 节点信息
lark-cli wiki spaces get_node --params '{"token":"<wiki_token>"}' --format json --as user

# 3. 如果 has_child=true，枚举所有子节点
lark-cli wiki nodes list --params '{"space_id":"<space_id>","parent_node_token":"<node_token>"}' --format json --as user --page-all
```

**提取字段：**
- `space_id` → 知识空间 ID
- `obj_token` → 文档实际 token（用于 `docs +fetch`）
- `obj_type` → 文档类型（docx / sheet / bitable）
- `title` → 文档标题（用作默认文件夹名）
- 子节点列表 → 每个子节点的 `node_token`、`obj_token`、`title`

### Phase 2：XML 内容获取（关键：用 XML 不用 Markdown）

```bash
# 获取完整 XML（保留表格结构、资源块引用）
lark-cli docs +fetch --api-version v2 --doc-format xml --detail full --as user --doc "<obj_token_or_url>"
```

**为什么用 XML 不用 Markdown：**
- 飞书的 `--doc-format markdown` 会把 `<table>` 转成**图片**，丢失结构化数据
- XML 保留完整的 `<table>` / `<tr>` / `<td>` 结构，可以还原为 markdown table
- XML 保留 `<img token="...">` 的 token，可直接用于 `+media-download`
- XML 保留 `<source>`、`<whiteboard>`、`<sheet>`、`<bitable>` 等资源块引用

**XML → Markdown 转换规则：** 参见 [references/xml-to-markdown.md](references/xml-to-markdown.md)

### Phase 3：媒体资源下载

从 XML 转换后的 markdown 中提取所有 media 占位符，使用 `lark-cli docs +media-download` 下载。

**占位符格式：**
- 图片：`![alt](media:img:token|width)` （XML 转换器生成）
- 附件：`[name](media:source:token)` （XML 转换器生成，无 `!` 前缀）
- 画板：`![画板](media:whiteboard:token)`

**下载命令：**
```bash
# 下载图片 → assets/images/
lark-cli docs +media-download --token "<img_token>" --output "<target_dir>/assets/images" --as user

# 下载附件（xlsx/pptx/docx/pdf/csv 等）→ assets/
lark-cli docs +media-download --token "<source_token>" --output "<target_dir>/assets" --as user

# 下载画板缩略图 → assets/images/
lark-cli docs +media-download --token "<whiteboard_token>" --type whiteboard --output "<target_dir>/assets/images" --as user
```

**替换后的 wiki-link：**
- 图片：`![[Folder/assets/images/img_001.png|600]]`
- 附件：`[[Folder/assets/report.xlsx|report.xlsx]]`
- 画板：`![[Folder/assets/images/wb_001.png|600]]`

**文件命名与扩展名检测：**
- 序号命名：`img_001`、`img_002`、`att_001`、...
- 头字节检测格式：PNG/JPG/GIF/WebP/PDF/ZIP
- ZIP 文件进一步检测是否为 Office 文档（xlsx/pptx/docx）
- 建立 token → local_filename 映射表

**扩展名检测逻辑：**
```
\x89PNG → png
\xff\xd8\xff → jpg
GIF8 → gif
RIFF → webp
%PDF → pdf
PK\x03\x04 → zip（进一步检测：xl/workbook.xml → xlsx, word/document.xml → docx, ppt/presentation.xml → pptx）
其他 → bin
```

### Phase 4：链接替换

将 XML 转换后的 markdown 中的媒体引用替换为本地 wiki-link：

```
原始 XML:  <img token="boxcnXXX" .../>
转换后:    ![图片描述](token:boxcnXXX)
最终替换:  ![[<vault_relative_path>/assets/images/img_001.png|600]]
```

**关键规则：**
- wiki-link 路径必须相对于 **vault 根目录**，不是相对于当前文件
- 如果目标文件夹是 `DingDong`，图片路径是 `DingDong/assets/images/img_001.png`
- 图片默认加 `|600` 宽度限制
- 附件用 `[[path/to/file.ext|显示名]]`

### Phase 5：Obsidian 排版美化

按顺序执行：

1. **YAML Frontmatter**
```yaml
---
title: "文档标题"
tags: [<用户指定的tags>]
created: <文档创建日期>
parent: "[[<目标文件夹>]]"
source: "https://xxx.feishu.cn/wiki/<token>"
---
```

2. **标题层级** — 确保不跳级（# 后直接 ### → 插入 ##）

3. **Callout 转换** — 关键摘要行转为 Obsidian callout：
   - `**结论：**` / `**总结：**` → `> [!tip]`
   - `**背景：**` / `**目标：**` → `> [!info]`
   - `**风险：**` / `**注意：**` → `> [!warning]`
   - `**数据：**` / `**从...看：**` → `> [!abstract]`

4. **清理** — 多余空行、空格行、Unicode 乱码 `￼`、残留 HTML 标签

5. **CJK 排版** — 运行 baoyu-format-markdown 脚本：
```bash
npx -y bun "<baoyu-format-markdown-skill-dir>/scripts/main.ts" "<file>" --no-quotes
```

6. **章节分隔** — 3+ 主要章节的文件，在 `##` 标题间添加 `---`

### Phase 6：验证

```bash
# 检查所有 wiki-link 引用的文件是否存在
grep -roh '!\[\[[^]]*\]\]' *.md | sed 's/.*\[\[//;s/\]\]//' | sort -u | while read f; do
  [ ! -f "$VAULT_ROOT/$f" ] && echo "MISSING: $f"
done

# 检查是否有孤立图片（未被引用）
# 检查是否有双重扩展名
ls *.png.png 2>/dev/null && echo "ERROR: double extension detected"

# 统计
echo "Files: $(ls *.md | wc -l)"
echo "Images: $(ls assets/images/*.{png,jpg,gif,webp} 2>/dev/null | wc -l)"
echo "References: $(grep -roh '!\[\[[^]]*\]\]' *.md | wc -l)"
```

## 错误处理

| 场景 | 处理 |
|------|------|
| `missing_scope` | 按 hint 执行 `lark-cli auth login --scope "<scope>"` |
| `exit 10` (高风险操作) | 展示给用户确认，不要自动加 `--yes` |
| 图片下载失败 | 记录失败 token，继续处理其他图片，最后汇总报告 |
| 子节点无权限 | 记录跳过的节点，继续处理有权限的节点 |
| 网络超时 | 最多重试 2 次，间隔 5 秒 |

## 复盘经验（来自 DingDong 项目）

详见 [references/retrospective.md](references/retrospective.md)

**最关键的教训：用 XML 不用 Markdown 做数据源。** 飞书的 markdown 导出会把表格拍平成图片，XML 才保留真正的结构化数据。

## 使用示例

```
用户：把这个飞书文档保存到 DingDong 文件夹
https://my.feishu.cn/wiki/E0VEwsnuFiCz6Hk22JBcfyPKn4f

用户：下载飞书知识库，放到 工作/项目A 目录，tags 用 项目/A
https://xxx.feishu.cn/wiki/xxxxx

用户：只下载这一个页面，不要子页面
https://xxx.feishu.cn/docx/xxxxx
```
