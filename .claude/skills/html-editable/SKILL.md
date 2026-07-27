---
name: html-editable
description: >
  生成单文件可编辑 HTML 展示页/演示文稿。支持右上角编辑/导出按钮，
  编辑模式下所有文本框可点击修改、调字号、调缩放、移动位置，
  所有修改自动保存 localStorage，刷新不丢失。
  当用户需要"可编辑演示文稿"、"editable presentation"、"HTML 展示页"、
  "可编辑 HTML"、"inline editing HTML"、"localStorage 演示"时使用。
user-invocable: true
---

# 可编辑 HTML 展示页生成器

生成单文件 HTML 展示页，内置完整的所见即所得编辑系统。

## 触发词

- "可编辑演示文稿" / "editable presentation"
- "HTML 展示页" / "HTML 演示"
- "可编辑 HTML" / "inline editing"
- "localStorage 演示"

## 核心功能清单

生成的 HTML 必须包含以下全部功能，缺一不可：

### 1. 编辑/导出工具栏（右上角固定）

| 按钮 | 功能 |
|------|------|
| ✎ 编辑 | 切换编辑模式，进入后所有 `[data-editable]` 元素出现虚线边框，可点击编辑 |
| ⤓ 导出 | 将当前页面（含所有修改）导出为独立 HTML 文件下载 |
| ↺ 重置 | 清除 localStorage，恢复默认内容 |

### 2. 文本编辑能力（编辑模式下）

- 点击任意带 `[data-editable]` 属性的元素 → 激活 `contentEditable`
- 支持直接修改文字内容
- 修改实时保存到 localStorage（防抖 300ms）
- 失焦自动关闭 contentEditable

### 3. 浮动调整面板（选中元素后弹出）

选中任意文本框后，弹出浮动面板，包含：

| 控件 | 功能 | 范围 |
|------|------|------|
| 字号滑块 | 调整 `font-size` | 10px ~ 72px |
| 缩放滑块 | 调整 `transform: scale()` | 50% ~ 200% |
| 字距滑块 | 调整 `letter-spacing` | -2px ~ 10px |
| 行高滑块 | 调整 `line-height` | 1.0 ~ 3.0 |
| 移动步长 | 控制每次移动的像素 | 1px ~ 50px |
| ↑↓←→ 按钮 | 通过 `transform: translate()` 移动位置 | 每次按步长 |

所有调整实时保存到 localStorage。

### 4. localStorage 持久化

- 存储 key：`editable-pres-v2`
- 每个元素通过 `data-key` 唯一标识
- 存储内容：`{ [key]: { content, fontSize, scale, letterSpacing, lineHeight, translateX, translateY } }`
- 页面加载时自动恢复所有保存的状态
- 重置按钮清除该 key 并刷新页面

### 5. 键盘快捷键（编辑模式下）

- `↑↓←→`：移动选中元素（未处于 contentEditable 输入状态时）
- `Esc`：取消选中

## 技术规范

### 硬性要求

1. **单文件**：所有 HTML/CSS/JS 在一个 `.html` 文件内，零外部依赖
2. **不使用 CDN**：不引入 Tailwind、Font Awesome 等外部资源
3. **CSS 变量**：用 `:root` 定义主题色，方便整体换肤
4. **响应式**：`clamp()` 做字号适配，`auto-fit` 做网格布局
5. **深色主题优先**：默认暗色背景（`#0f172a`），文字 `#f1f5f9`

### HTML 结构模板

```html
<!-- 所有可编辑元素必须带 data-editable 和 data-key -->
<h1 data-editable data-key="hero-title">标题文字</h1>
<p data-editable data-key="hero-desc">正文描述</p>
<div class="stat-num" data-editable data-key="stat-1">32%</div>
```

### CSS 结构

```css
/* 1. CSS Reset + Variables */
/* 2. Toolbar 固定右上角 */
/* 3. Adjust Panel 浮动面板 */
/* 4. 页面主体布局 */
/* 5. 各组件样式（hero/stats/features/timeline/table/quote/footer） */
/* 6. 编辑态样式（.edit-mode [data-editable] 虚线边框） */
/* 7. 响应式断点 */
```

### JS 结构

```javascript
(function() {
  'use strict';
  // 1. State & DOM refs
  // 2. Storage helpers (load/save/getElement/saveElement)
  // 3. restoreAll() — 页面加载恢复
  // 4. toggleEditMode() — 编辑模式切换
  // 5. selectElement/deselectElement — 选中管理
  // 6. apply*() — 各属性调整
  // 7. moveElement() — 位置移动
  // 8. handleEditable*() — 点击/失焦/输入
  // 9. exportHTML() — 导出
  // 10. resetAll() — 重置
  // 11. Event binding
  // 12. Init: restoreAll()
})();
```

## 内容区块模板

根据用户需求，从以下区块中选择组合：

| 区块 | 适用场景 | 关键 class |
|------|---------|-----------|
| Hero | 首屏大标题 | `.hero`, `.hero-badge`, `.hero-cta` |
| Stats | 核心数字 | `.stats > .stat-card > .stat-num + .stat-label` |
| Features | 功能卡片网格 | `.features > .feature-card` |
| Table | 数据表格 | `.data-table` |
| Timeline | 时间线/里程碑 | `.timeline > .timeline-item` |
| Quote | 引用块 | `.quote-block` |
| Section | 通用章节 | `.section > .section-title + .section-desc` |
| Footer | 页脚 | `.footer` |

## 用户定制选项

生成前需确认（不确定就用默认值）：

| 选项 | 默认值 | 说明 |
|------|--------|------|
| 主题色 | `#6366f1`（靛蓝） | CSS `--primary` |
| 背景色 | `#0f172a`（深蓝黑） | CSS `--bg` |
| 内容主题 | 用户指定 | 供应链/产品/技术/商业等 |
| 区块组合 | 按内容决定 | 从区块模板中选取 |
| 语言 | 中文 | 标题、正文语言 |

## 参考模板

完整的参考实现在：`00_Self/assets/editable-presentation.html`

生成时参考该文件的代码风格和结构，但内容根据用户需求重新编写。

## 输出流程

1. 确认用户需求（内容主题、区块选择、配色偏好）
2. 参考模板文件的代码结构
3. 生成完整 HTML 文件，写入用户指定路径
4. 提示用户用浏览器打开即可使用
5. 提示右上角"编辑"按钮进入编辑模式

## 注意事项

- `data-key` 全局唯一，不能重复
- 导出功能会将当前 DOM 状态（含 localStorage 中的修改）打包成新 HTML
- 新 HTML 不含 localStorage 数据（干净副本），适合分享
- 调整面板跟随选中元素位置，超出视口时自动调整
- 移动使用 `transform: translate()`，不影响文档流
