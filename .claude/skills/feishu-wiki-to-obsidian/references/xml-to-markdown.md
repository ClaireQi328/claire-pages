# 飞书 XML → Obsidian Markdown 转换指南

将 `lark-cli docs +fetch --doc-format xml` 返回的 XML 内容转换为 Obsidian 兼容的 Markdown。

## 基础 Block 转换

| 飞书 XML | Obsidian Markdown | 备注 |
|----------|-------------------|------|
| `<title>...</title>` | `# ...` | 提取到 frontmatter，body 中保留一个 H1 |
| `<heading level="N">...</heading>` | `## ...` (N 级) | 确保不跳级 |
| `<p>...</p>` | 段落文本 | 去掉标签 |
| `<bold>...</bold>` | `**...**` | |
| `<italic>...</italic>` | `*...*` | |
| `<strikethrough>...</strikethrough>` | `~~...~~` | |
| `<underline>...</underline>` | `==...==` (Obsidian highlight) | |
| `<code inline="true">...</code>` | `` `...` `` | |
| `<code_block language="...">...</code_block>` | ` ```...\n...\n``` ` | |
| `<bullet_list>` / `<ordered_list>` | `- ` / `1. ` | 递归处理嵌套 |
| `<list_item>` | 列表项 | |
| `<quote>` | `> ` | |
| `<divider />` | `---` | |

## 表格转换（核心价值）

飞书的 `<table>` 在 markdown 导出中会被**拍平成图片**，但在 XML 中保留完整结构。

```xml
<table>
  <tr>
    <td><p>区域</p></td>
    <td><p>缺货率</p></td>
    <td><p>目标</p></td>
  </tr>
  <tr>
    <td><p>全国</p></td>
    <td><p>12.37%</p></td>
    <td><p>40.00%</p></td>
  </tr>
</table>
```

→ 转换为：

```markdown
| 区域 | 缺货率 | 目标 |
|------|--------|------|
| 全国 | 12.37% | 40.00% |
```

**转换逻辑：**
1. 第一个 `<tr>` 作为表头
2. 添加 `|---|---|...` 分隔行（根据列数）
3. 后续 `<tr>` 作为数据行
4. 每个 `<td>` 的文本内容提取为单元格
5. 如果 `<td>` 有 `colspan` / `rowspan`，用空单元格填充

## 资源块转换

### 图片

```xml
<img token="boxcnXXX" width="800" height="600" alt="描述文本"/>
```

**两步转换：**
1. 先转为占位符：`![描述文本](token:boxcnXXX)`
2. Phase 4 链接替换时转为：`![[DingDong/assets/images/img_001.png|600]]`

### 附件/文件

```xml
<source token="boxcnYYY" name="report.xlsx"/>
```

→ 占位符：`[report.xlsx](media:source:boxcnYYY)`
→ 下载后（自动检测为 xlsx）→ 最终：`[[DingDong/assets/report.xlsx|report.xlsx]]`

**支持的附件类型：** xlsx, xls, csv, docx, doc, pptx, ppt, pdf, zip, txt, json, xml, mp4, mp3 等

### 画板

```xml
<whiteboard token="wbxZZZ"/>
```

→ 占位符：`![画板](media:whiteboard:wbxZZZ)`
→ 下载缩略图后：`![[DingDong/assets/images/wb_001.png|600]]`

### 嵌入电子表格

```xml
<sheet token="shtAAA" sheet-id="Sheet1"/>
```

→ 提取 token，标注为嵌入表格（需要切到 `lark-sheets` skill 下钻）：
```markdown
> [!info] 嵌入电子表格
> Token: `shtAAA`，Sheet: `Sheet1`
> 使用 `lark-cli sheets` 查看完整数据
```

### 嵌入多维表格

```xml
<bitable token="bascBBB" table-id="tblCCC"/>
```

→ 同上，标注为嵌入多维表格（切到 `lark-base` skill）

## Callout / 高亮块

```xml
<callout emoji="💡" bg_color="light-blue">
  <p>这是一个提示</p>
</callout>
```

→ Obsidian callout：
```markdown
> [!tip]
> 这是一个提示
```

## 特殊元素

### 分栏布局

```xml
<grid>
  <grid_column>
    <p>左栏内容</p>
  </grid_column>
  <grid_column>
    <p>右栏内容</p>
  </grid_column>
</grid>
```

→ 无法在 markdown 中完美还原分栏，转为连续段落：

```markdown
**左栏：** 左栏内容

**右栏：** 右栏内容
```

### 任务列表

```xml
<todo checked="true">已完成的任务</todo>
<todo checked="false">未完成的任务</todo>
```

→ `- [x] 已完成的任务` / `- [ ] 未完成的任务`

### @提及

```xml
<mention user_id="ou_xxx">张三</mention>
```

→ `@张三`

### 日期

```xml
<date>2024-01-15</date>
```

→ `2024-01-15`

## 文本内嵌样式

XML 中样式可能嵌套：

```xml
<p>
  这是<bold>加粗</bold>和<italic>斜体</italic>的<bold><italic>混合</italic></bold>
</p>
```

→ `这是**加粗**和*斜体*的***混合***`

## 实现注意事项

1. **递归处理**：block 元素可能嵌套（paragraph 内有 bold、italic、link 等），需要递归解析
2. **空行规则**：block 之间用空行分隔，但列表项内部不加空行
3. **转义字符**：XML 中的 `&amp;` → `&`，`&lt;` → `<`，`&gt;` → `>`
4. **链接**：`<link url="https://...">文本</link>` → `[文本](https://...)`
5. **保留原始顺序**：不要重排 block 顺序
