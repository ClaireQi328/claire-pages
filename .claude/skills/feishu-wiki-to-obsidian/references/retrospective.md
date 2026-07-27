# 复盘：飞书 → Obsidian 全流程经验教训

来源：DingDong 项目（2024-07-08），将飞书知识库 19 个子页面 + 165 张图片完整迁移到 Obsidian vault。

## 问题 1：飞书 Markdown 导出丢失表格

**现象**：`lark-cli docs +fetch --doc-format markdown` 返回的内容中，所有 `<table>` 被转换为**图片 URL**（带 alt 文本描述表格内容），原始表格结构完全丢失。

**根因**：飞书的 markdown 转换器将复杂 block（表格、分栏、嵌套布局）统一降级为截图。这不是 lark-cli 的 bug，而是飞书 API 的行为。

**解决方案**：使用 `--doc-format xml --detail full` 获取原始 XML，从 XML 中解析 `<table>` / `<tr>` / `<td>` 还原为 markdown table。

**教训**：永远用 XML 做数据源，不要信任飞书的 markdown 导出。

---

## 问题 2：图片双重扩展名 `.png.png`

**现象**：93 个图片文件被命名为 `img_001.png.png`，Obsidian 无法识别。

**根因**：
1. curl 下载时不带扩展名：`-o img_001`
2. 重命名脚本用 `file` 命令检测格式，添加 `.png` → `img_001.png`
3. 脚本第一次超时中断后重跑，此时文件已是 `img_001.png`，条件判断有缺陷，又加了一次 `.png`

**解决方案**：使用 `lark-cli docs +media-download --token <token>`，它会自动检测扩展名并正确命名。

**教训**：不要自己做 curl + 手动重命名。用 lark-cli 的内置下载功能，一步到位。

---

## 问题 3：Wiki-link 路径错误

**现象**：`![[assets/images/img_001.png]]` 在 Obsidian 中显示为"文件不存在"。

**根因**：Obsidian 的 wiki-link 是相对于 **vault 根目录** 解析的。图片实际路径是 `DingDong/assets/images/img_001.png`，但 wiki-link 写的是 `assets/images/img_001.png`（少了 `DingDong/` 前缀）。

**解决方案**：在写替换脚本时，始终使用 `target_folder + /assets/images/` 作为路径前缀。

**教训**：写 wiki-link 之前，先确认 vault 根目录结构。路径 = `<目标文件夹>/<子路径>`，不是 `<子路径>`。

---

## 问题 4：6 轮迭代才完成，每次发现新问题

**现象**：
- 第 1 轮：下载内容
- 第 2 轮：发现图片 `.png.png` → 修复
- 第 3 轮：发现 wiki-link 路径错 → 修复
- 第 4 轮：美化排版
- 第 5 轮：深度美化
- 第 6 轮：发现表格丢失 → 从 alt 文本手动重建

**根因**：没有在开始前规划完整 pipeline，而是"做一步看一步"。

**解决方案**：按 6 阶段 pipeline 一次性执行（鉴权 → XML 获取 → 媒体下载 → 链接替换 → 美化 → 验证），每阶段结束做验证。

**教训**：规划完整流程再动手。验证步骤放在每个阶段末尾，不是最后。

---

## 问题 5：`与算法对接.md` 内容重复

**现象**：文件后半段完整复制了前半段内容。

**根因**：飞书文档本身可能有重复内容（可能是编辑遗留），markdown 导出照搬了。

**解决方案**：在获取内容后做去重检测（比较段落序列的相似度）。

**教训**：飞书文档的原始内容不一定干净，获取后需要做基本的质量检查。

---

## 问题 6：使用 curl 下载飞书图片的稳定性风险

**现象**：这次 curl 下载成功了，但飞书内链 URL 包含 `authcode` 参数，有时效性。

**根因**：飞书的图片 URL 是临时签名链接，过期后无法访问。直接 curl 依赖这个临时 URL。

**解决方案**：使用 `lark-cli docs +media-download --token <token>` 走正规 API，token 本身是稳定的资源标识符，不受 URL 过期影响。

**教训**：不要用 curl 直接下载飞书资源的临时 URL。用 lark-cli 的 media API。

---

## 问题 7：飞书文档中表格数据以图片形式存在

**现象**：markdown 文件中大量 `![图片展示了...表格...](url)` 形式的图片引用，alt 文本描述了表格内容，但实际数据无法编辑。

**根因**：飞书的 markdown 导出将 `<table>` 拍平为截图（问题 1 的直接后果）。从 markdown 转换时，我们只能从 alt 文本描述中反推表格数据，准确度有限。

**解决方案**：用 XML 获取原始数据，直接解析出表格内容，不需要依赖图片 alt 文本。

**教训**：图片 alt 文本是"最后手段"，不是数据源。XML 才是。

---

## 最佳实践清单

- [ ] 用 `--doc-format xml --detail full` 获取内容
- [ ] 用 `lark-cli docs +media-download` 下载媒体
- [ ] wiki-link 使用 vault 根目录相对路径
- [ ] 每个阶段结束做验证
- [ ] 下载后检查内容重复
- [ ] 图片宽度统一限制（`|600`）
- [ ] 运行 CJK 排版脚本
- [ ] 添加完整 frontmatter（title, tags, parent, source）
