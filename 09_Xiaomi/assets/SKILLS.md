---
created: '2026-07-24'
tags: [Xiaomi, 供应链]
---

---created: 2026-06-09
updated: 2026-07-16
tags: [Xiaomi, 学习]
status: draft
---
> [!summary] 🧠 Claude 全部 Skill 目录
> - **核心**：| 方式 | 语法 | 适用 | 示例 | |------|------|------|------| | **斜杠命令** | `/skill-name` | 系统已注册的 Skill（Obsidi





# 🧠 Claude 全部 Skill 目录

> 总计 **266+ 个 Skill**，分为 **30 个大类**（2026-07-27 新增 analyst 结构化分析框架）
> 本地 Skill 库 **210 个目录**，系统已注册 Skill **190+**

---

## ⚡ 调用方式速查

| 方式 | 语法 | 适用 | 示例 |
|------|------|------|------|
| **斜杠命令** | `/skill-name` | 系统已注册的 Skill（Obsidian 内置、PM 插件、impeccable） | `/blog` `/create-prd` `/impeccable craft` |
| **工具调用** | `Skill("name")` | 本地安装的 Skill（视频、飞书、思维框架等） | `Skill("video-creation-pro")` `Skill("lark-doc")` |
| **自然语言** | 直接描述需求 | Claude 自动匹配的 Skill | "帮我写个 PRD" "分析这个竞品" |

> 💡 **不确定用哪个？** 直接描述你的需求，Claude 会自动选择最合适的 Skill。

---

## 📊 概览

| # | 分类 | 数量 | 调用方式 | 用途 |
|---|------|------|---------|------|
| 1 | 🖌️ 设计品味 (Design Taste) | 14 | `Skill("design-taste")` 等 | 高端视觉设计、品牌套件、图像转代码、原型生成 |
| 2 | 🎨 Impeccable (前端/UI) | 27+ | `/impeccable` + 子命令 | 前端界面设计、重构与打磨 |
| 3 | 📄 PDF 处理 | 2 | `/pdf` 或 `Skill("pdf")` | PDF 读取、创建、审查、批处理 |
| 4 | 🎭 Playwright (浏览器) | 1 | `Skill("playwright")` | 浏览器自动化测试 |
| 5 | 🚀 PM 执行 | 16 | `/create-prd` `/sprint-plan` 等 | Sprint、OKR、PRD 等日常执行 |
| 6 | 🧭 PM 产品策略 | 12 | `/swot-analysis` `/business-model` 等 | SWOT、商业模式、定价策略等 |
| 7 | 🔍 PM 产品发现 | 13 | `/interview-script` `/brainstorm-ideas-*` 等 | 用户访谈、功能优先级、假设验证 |
| 8 | 🌍 PM 市场调研 | 7 | `/competitor-analysis` `/market-sizing` 等 | 竞品分析、用户画像、市场规模 |
| 9 | 📈 PM 数据分析 | 3 | `/ab-test-analysis` `/sql-queries` 等 | A/B 测试、队列分析、SQL 生成 |
| 10 | 🎯 PM 市场进入 | 6 | `/gtm-strategy` `/growth-loops` 等 | GTM 策略、增长飞轮、竞品战卡 |
| 11 | 📣 PM 营销增长 | 5 | `/north-star-metric` `/product-name` 等 | 北极星指标、定位创意、产品命名 |
| 12 | 🤖 PM AI 发布 | 2 | `/intended-vs-implemented` 等 | 意图审计、AI 应用文档化 |
| 13 | 🧰 PM 工具箱 | 4 | `/draft-nda` `/review-resume` 等 | NDA、隐私政策、简历审查 |
| 14 | 🔌 官方插件 | 31 | `/find-skills` `/update-config` 等 | 消息渠道、插件开发、MCP 等 |
| 15 | 📝 Obsidian 内置 | 12 | `/blog` `/obsidian-moc` `/daily-note` 等 | 写作、MOC、每日笔记等 |
| 16 | 📦 视频创作 | 14 | `Skill("video-creation-pro")` 等 | 视频制作、数字人、短视频营销 |
| 17 | 📝 内容创作与发布 | 14 | `Skill("content-research-writer")` 等 | 文章写作、多平台发布、内容研究 |
| 18 | 🗣️ 语音与音频 | 5 | `Skill("tts-voice-synthesis")` 等 | TTS、ASR、语音合成 |
| 19 | 🔧 开发工具与工作流 | 16 | `Skill("github-pages")` `/brainstorming` 等 | Git、Pages 同步、调试、代码审查 |
| 20 | 🏢 飞书/Lark 生态 | 29+ | `Skill("lark-doc")` `Skill("lark-im")` `Skill("feishu-vault-sync")` 等 | 飞书全产品线 API 集成 |
| 21 | 🎯 人物思维框架 (Nuwa) | 16 | `Skill("nuwa-skill")` 或 `Skill("zhang-yiming-perspective")` | 名人思维模型提取与复用 |
| 22 | 🏭 企业采购与供应链 | 4 | `Skill("rfq-tracker")` `Skill("supplier-profile")` | RFQ 跟踪、供应商画像、需求评审 |
| 23 | 🎓 学术研究管线 | 3 | `Skill("academic-paper")` `Skill("academic-pipeline")` | 论文写作、审稿、全流程编排 |
| 24 | 📰 AI 资讯 | 1 | `Skill("aihot")` | AI HOT 日报、行业动态查询 |
| 25 | ⚖️ 法律文档 | 2 | `Skill("contract-review")` `Skill("law-to-markdown")` | 合同审查、法条转Markdown |
| 26 | 🤝 智能体协作 | 2 | `Skill("agent-team")` `Skill("multi-agent-meeting")` | 多代理团队框架、会议决策模拟 |
| 27 | 📊 企业分析工具 | 4 | `Skill("analyst")` `Skill("hv-analysis")` | 结构化分析框架、横纵分析、价格偏离对比 |
| 28 | 🆕 本次新增 Skills (07-13) | 15 | `Skill("bi")` `Skill("xiaomi-fds")` 等 | 小米BI、FDS上传、PPT/原型/演示、小红书、Obsidian |
| 29 | 🏭 数据工场 (Datum) | 6 | `Skill("datum-metadata")` `Skill("datum-sql")` 等 | 元数据、SQL查询、集成作业、Kestra工作流 |
| 30 | 📱 微信收藏导出 | 1 | `/wechat-export` | 公众号文章导出、图片本地化、HTML生成 |

---

## 1️⃣ 🖌️ 设计品味 — Design Taste (14 skills)

> 高端视觉设计技能集合：反模板化前端设计、品牌视觉系统、图像转代码、UI 原型生成等
> 来源：`D:\Obsidian\.agents\skills/` + `Claire/Skill/`

### 🎨 高端视觉设计

| Skill | 调用 | 说明 |
|-------|------|------|
| `design-taste` | `Skill("design-taste")` | 反模板化前端设计，自动推断设计方向 |
| `design-taste-frontend-v1` | `Skill("design-taste-frontend-v1")` | v1 原始版本，向后兼容 |
| `gpt-taste` | `Skill("gpt-taste")` | Awwwards 级前端设计引擎 |
| `high-end-visual-design` | `Skill("high-end-visual-design")` | 高端视觉设计，含创意方差引擎 |
| `minimalist-ui` | `Skill("minimalist-ui")` | 极简主义 UI，温暖单色调 |
| `industrial-brutalist-ui` | `Skill("industrial-brutalist-ui")` | 工业粗野主义 UI |

### 🖼️ 品牌与图像生成

| Skill | 调用 | 说明 |
|-------|------|------|
| `brandkit` | `Skill("brandkit")` | 品牌套件图像生成 |
| `image-to-code` | `Skill("image-to-code")` | 图像→前端代码 |
| `imagegen-frontend-mobile` | `Skill("imagegen-frontend-mobile")` | 移动端界面图像 |
| `imagegen-frontend-web` | `Skill("imagegen-frontend-web")` | Web 设计参考图 |

### 🔧 项目优化与原型

| Skill | 调用 | 说明 |
|-------|------|------|
| `redesign-existing-projects` | `Skill("redesign-existing-projects")` | 项目重设计 |
| `stitch-design-taste` | `Skill("stitch-design-taste")` | Google Stitch 设计系统 |
| `full-output-enforcement` | `Skill("full-output-enforcement")` | 强制完整输出 |
| `prototype-html` | `Skill("prototype-html")` | HTML 产品原型 |

---

## 2️⃣ 🎨 Impeccable — 前端/UI 设计与开发

> 设计、重构和打磨生产级前端界面，涵盖网站、落地页、仪表盘等各类 UI

### 🧠 核心能力

| 子命令 | 调用 | 说明 |
|--------|------|------|
| `adapt` | `/impeccable adapt` | 适配现有设计系统 |
| `animate` | `/impeccable animate` | 添加交互动画与微交互 |
| `audit` | `/impeccable audit` | 审计 UI 质量 |
| `bolder` | `/impeccable bolder` | 大胆重塑视觉风格 |
| `brand` | `/impeccable brand` | 品牌视觉系统设计 |
| `clarify` | `/impeccable clarify` | 简化复杂界面 |
| `codex` | `/impeccable codex` | 代码组件库构建 |
| `colorize` | `/impeccable colorize` | 色彩系统设计 |
| `craft` | `/impeccable craft` | 精细打磨界面细节 |
| `critique` | `/impeccable critique` | 结构化 UI 评审 |
| `delight` | `/impeccable delight` | 添加愉悦设计细节 |
| `distill` | `/impeccable distill` | 提炼核心信息 |
| `document` | `/impeccable document` | 组件文档生成 |
| `extract` | `/impeccable extract` | 从设计稿提取组件 |
| `harden` | `/impeccable harden` | 增强 UI 健壮性 |
| `init` | `/impeccable init` | 项目初始化 |
| `interaction-design` | `/impeccable interaction-design` | 交互模式设计 |
| `layout` | `/impeccable layout` | 响应式布局系统 |
| `live` | `/impeccable live` | 实时预览调试 |
| `onboard` | `/impeccable onboard` | 新手引导设计 |
| `optimize` | `/impeccable optimize` | 性能优化 |
| `overdrive` | `/impeccable overdrive` | 极致性能优化 |
| `polish` | `/impeccable polish` | 视觉细节精修 |
| `product` | `/impeccable product` | 产品级界面构建 |
| `quieter` | `/impeccable quieter` | 极简化设计 |
| `shape` | `/impeccable shape` | 视觉层次塑造 |
| `typeset` | `/impeccable typeset` | 排版系统设计 |

---

## 3️⃣ 📄 PDF 处理

> 读取、创建和审查 PDF 文件

| Skill | 调用 | 说明 |
|-------|------|------|
| `pdf` | `/pdf` | PDF 读取、创建、审查，Poppler + reportlab |
| `pdf-processing-pro` | `Skill("pdf-processing-pro")` | 生产级 PDF 处理：表单、OCR、批处理 |

---

## 4️⃣ 🎭 Playwright — 浏览器自动化

> 通过终端自动化操控真实浏览器

| Skill | 说明 |
|-------|------|
| `playwright` | 浏览器自动化：导航、表单、快照、截图、数据提取、UI 调试 |

### 参考文档

- `references/cli.md` — CLI 命令参考
- `references/workflows.md` — 工作流最佳实践

---

## 5️⃣ 🚀 PM 执行 (16 skills)

> 产品日常执行工具箱：Sprint 规划、OKR、PRD、用户故事、回顾会议等

| Skill | 调用 | 说明 |
|-------|------|------|
| `brainstorm-okrs` | `/brainstorm-okrs` | 头脑风暴团队级 OKR |
| `create-prd` | `/create-prd` | 8 段式 PRD 模板 |
| `dummy-dataset` | `/dummy-dataset` | 生成逼真测试数据集 |
| `job-stories` | `/job-stories` | 创建带验收标准的工作故事 |
| `outcome-roadmap` | `/outcome-roadmap` | 成果导向路线图 |
| `pre-mortem` | `/pre-mortem` | 预验尸风险分析 |
| `prioritization-frameworks` | `/prioritization-frameworks` | 9 种优先级框架 |
| `release-notes` | `/release-notes` | 生成发布说明 |
| `retro` | `/retro` | Sprint 回顾会议 |
| `sprint-plan` | `/sprint-plan` | Sprint 规划 |
| `stakeholder-map` | `/stakeholder-map` | 利益相关者地图 |
| `strategy-red-team` | `/strategy-red-team` | 红队攻击检验假设 |
| `summarize-meeting` | `/summarize-meeting` | 会议纪要生成 |
| `test-scenarios` | `/test-scenarios` | 测试场景创建 |
| `user-stories` | `/user-stories` | 用户故事创建 |
| `wwas` | `/wwas` | Why-What-Acceptance 待办 |

---

## 6️⃣ 🧭 PM 产品策略 (12 skills)

> 战略分析框架：SWOT、商业模式画布、精益画布、波特五力、定价策略等

| Skill | 调用 | 说明 |
|-------|------|------|
| `ansoff-matrix` | `/ansoff-matrix` | 安索夫矩阵 |
| `business-model` | `/business-model` | 商业模式画布 |
| `lean-canvas` | `/lean-canvas` | 精益画布 |
| `monetization-strategy` | `/monetization-strategy` | 变现策略 |
| `pestle-analysis` | `/pestle-analysis` | PESTLE 宏观分析 |
| `porters-five-forces` | `/porters-five-forces` | 波特五力 |
| `pricing-strategy` | `/pricing-strategy` | 定价策略 |
| `product-strategy` | `/product-strategy` | 产品战略画布 |
| `product-vision` | `/product-vision` | 产品愿景 |
| `startup-canvas` | `/startup-canvas` | 创业画布 |
| `swot-analysis` | `/swot-analysis` | SWOT 分析 |
| `value-proposition` | `/value-proposition` | 价值主张设计 |

---

## 7️⃣ 🔍 PM 产品发现 (13 skills)

> 用户访谈、功能优先级排序、假设验证、实验设计

| Skill | 调用 | 说明 |
|-------|------|------|
| `analyze-feature-requests` | `/analyze-feature-requests` | 功能请求分析 |
| `brainstorm-experiments-existing` | `/brainstorm-experiments-existing` | 现有产品实验设计 |
| `brainstorm-experiments-new` | `/brainstorm-experiments-new` | 新产品实验设计 |
| `brainstorm-ideas-existing` | `/brainstorm-ideas-existing` | 现有产品创意 |
| `brainstorm-ideas-new` | `/brainstorm-ideas-new` | 新产品创意 |
| `identify-assumptions-existing` | `/identify-assumptions-existing` | 现有产品假设识别 |
| `identify-assumptions-new` | `/identify-assumptions-new` | 新产品假设识别 |
| `interview-script` | `/interview-script` | 客户访谈脚本 |
| `metrics-dashboard` | `/metrics-dashboard` | 指标仪表盘 |
| `opportunity-solution-tree` | `/opportunity-solution-tree` | OST 机会树 |
| `prioritize-assumptions` | `/prioritize-assumptions` | 假设优先排序 |
| `prioritize-features` | `/prioritize-features` | 功能优先排序 |
| `summarize-interview` | `/summarize-interview` | 访谈总结 |

---

## 8️⃣ 🌍 PM 市场调研 (7 skills)

> 竞品分析、用户画像、市场规模估算、客户旅程地图

| Skill | 调用 | 说明 |
|-------|------|------|
| `competitor-analysis` | `/competitor-analysis` | 竞品分析 |
| `customer-journey-map` | `/customer-journey-map` | 客户旅程地图 |
| `market-segments` | `/market-segments` | 客户细分市场 |
| `market-sizing` | `/market-sizing` | TAM/SAM/SOM 市场规模 |
| `sentiment-analysis` | `/sentiment-analysis` | 用户情感分析 |
| `user-personas` | `/user-personas` | 用户画像创建 |
| `user-segmentation` | `/user-segmentation` | 用户行为细分 |

---

## 9️⃣ 📈 PM 数据分析 (3 skills)

> A/B 测试分析、队列分析、SQL 查询生成

| Skill | 调用 | 说明 |
|-------|------|------|
| `ab-test-analysis` | `/ab-test-analysis` | A/B 测试分析 |
| `cohort-analysis` | `/cohort-analysis` | 用户留存队列分析 |
| `sql-queries` | `/sql-queries` | 自然语言→SQL |

---

## 🔟 🎯 PM 市场进入 (6 skills)

> GTM 策略、增长飞轮、竞品战卡、理想客户画像

| Skill | 调用 | 说明 |
|-------|------|------|
| `beachhead-segment` | `/beachhead-segment` | 滩头市场细分 |
| `competitive-battlecard` | `/competitive-battlecard` | 竞品战卡 |
| `growth-loops` | `/growth-loops` | 增长飞轮设计 |
| `gtm-motions` | `/gtm-motions` | GTM 动议评估 |
| `gtm-strategy` | `/gtm-strategy` | GTM 策略 |
| `ideal-customer-profile` | `/ideal-customer-profile` | 理想客户画像 |

---

## 1️⃣1️⃣ 📣 PM 营销增长 (5 skills)

> 北极星指标、定位创意、营销创意、产品命名

| Skill | 调用 | 说明 |
|-------|------|------|
| `marketing-ideas` | `/marketing-ideas` | 营销方案 |
| `north-star-metric` | `/north-star-metric` | 北极星指标 |
| `positioning-ideas` | `/positioning-ideas` | 定位创意 |
| `product-name` | `/product-name` | 产品命名 |
| `value-prop-statements` | `/value-prop-statements` | 价值主张陈述 |

---

## 1️⃣2️⃣ 🤖 PM AI 发布 (2 skills)

> AI 构建应用的审计与文档化

| Skill | 调用 | 说明 |
|-------|------|------|
| `intended-vs-implemented` | `/intended-vs-implemented` | 意图 vs 实现审计 |
| `shipping-artifacts` | `/shipping-artifacts` | AI 应用文档化 |

---

## 1️⃣3️⃣ 🧰 PM 工具箱 (4 skills)

> 法律文档、文本审查、简历优化

| Skill | 调用 | 说明 |
|-------|------|------|
| `draft-nda` | `/draft-nda` | 起草 NDA |
| `grammar-check` | `/grammar-check` | 语法检查 |
| `privacy-policy` | `/privacy-policy` | 隐私政策 |
| `review-resume` | `/review-resume` | 简历审查 |

---

## 1️⃣4️⃣ 🔌 官方插件 Skills (31 skills)

> Claude Code 官方插件市场提供的各类技能

### 💬 消息渠道

| 插件 | Skill | 说明 |
|------|-------|------|
| Discord | `access` | 管理 Discord 频道访问控制 |
| Discord | `configure` | 设置 Discord 频道，保存机器人令牌 |
| iMessage | `access` | 管理 iMessage 频道访问控制 |
| iMessage | `configure` | 检查 iMessage 频道配置状态 |
| Telegram | `access` | 管理 Telegram 频道访问控制 |
| Telegram | `configure` | 设置 Telegram 频道，保存机器人令牌 |

### 🛠️ Claude Code 配置

| 插件 | Skill | 说明 |
|------|-------|------|
| claude-code-setup | `claude-automation-recommender` | 分析代码库并推荐自动化方案（钩子、子代理、技能、插件、MCP） |
| claude-md-management | `claude-md-improver` | 审计和改进仓库中的 CLAUDE.md 文件 |
| hookify | `writing-rules` | 编写 hookify 规则，定义模式匹配和触发语法 |
| session-report | `session-report` | 从会话记录生成 HTML 报告（令牌用量、缓存、子代理数据） |

### 🔌 插件开发

| 插件 | Skill | 说明 |
|------|-------|------|
| plugin-dev | `agent-development` | 创建自主代理：文件结构、系统提示、触发条件 |
| plugin-dev | `command-development` | 创建斜杠命令：YAML frontmatter、动态参数、文件引用 |
| plugin-dev | `hook-development` | 创建事件驱动自动化钩子 |
| plugin-dev | `mcp-integration` | 集成 MCP 服务器（stdio/SSE/HTTP/WebSocket） |
| plugin-dev | `plugin-settings` | 文档化插件配置模式 |
| plugin-dev | `plugin-structure` | 插件目录布局、清单配置和组件组织 |
| plugin-dev | `skill-development` | 创建有效技能：渐进式披露和编写最佳实践 |
| skill-creator | `skill-creator` | 创建/修改/评估技能，通过基准测试衡量性能 |

### 🧪 MCP 服务器开发

| 插件 | Skill | 说明 |
|------|-------|------|
| mcp-server-dev | `build-mcp-server` | MCP 服务器入门：用例分析、部署模式、工具设计 |
| mcp-server-dev | `build-mcp-app` | 构建带交互式 UI 组件的 MCP 应用 |
| mcp-server-dev | `build-mcpb` | 将 MCP 服务器打包为 MCPB 格式 |

### 🎨 前端与设计

| 插件 | Skill | 说明 |
|------|-------|------|
| frontend-design | `frontend-design` | 创建独特、生产级前端界面，避免通用 AI 美学 |
| playground | `playground` | 创建交互式 HTML 操场，含控件、实时预览 |

### 🔢 数学与硬件

| 插件 | Skill | 说明 |
|------|-------|------|
| math-olympiad | `math-olympiad` | 竞赛数学题求解（IMO、Putnam 等），对抗式验证 |
| cwc-makers | `cardputer-buddy` | Cardputer-Adv MicroPython 应用开发 |
| cwc-makers | `m5-onboard` | M5Stack ESP32 设备入门引导 |

### 📖 示例

| 插件 | Skill | 说明 |
|------|-------|------|
| example-plugin | `example-command` | 示例用户调用技能 |
| example-plugin | `example-skill` | 示例技能，展示插件结构和格式 |

---

## 1️⃣5️⃣ 📝 Obsidian 内置 Skills (12 skills)

> Obsidian 辅助工具，用于知识管理和写作

| Skill | 调用 | 说明 |
|-------|------|------|
| `/blog` | `/blog` | 笔记→博客文章 |
| `/obsidian-writing` | `/obsidian-writing` | 辅助写作（10 子命令） |
| `/obsidian-moc` | `/obsidian-moc` | 生成/更新 MOC |
| `/daily-note` | `/daily-note` | 每日笔记 |
| `/flashcard` | `/flashcard` | 笔记→抽认卡 |
| `/knowledge-check` | `/knowledge-check` | 知识掌握度检测 |
| `/smart-rename` | `/smart-rename` | 智能重命名 |
| `/claude-api` | `/claude-api` | Claude API 开发 |
| `/find-skills` | `/find-skills` | 搜索安装新技能 |
| `/update-config` | `/update-config` | 配置 Claude Code |
| `/simplify` | `/simplify` | 代码质量审查 |
| `/clippings` | `/clippings` | 网页剪藏 |
| `/self-improvement` | `/self-improvement` | 自我改进 |

### Obsidian 官方增强 (本地安装)

| Skill | 说明 |
|-------|------|
| `obsidian-markdown` | Obsidian 特有 Markdown 处理：wikilinks、嵌入、callouts、properties |
| `json-canvas` | 创建/编辑 JSON Canvas 文件 (.canvas)，用于思维导图、知识图谱 |
| `obsidian-bases` | 操作 Obsidian 1.9+ 原生数据库文件 (.base) |

---

## 1️⃣6️⃣ 📦 视频创作 (14 skills)

> 视频制作、数字人、短视频营销全套工具链

### 🎬 视频制作管线

| Skill | 调用 | 说明 |
|-------|------|------|
| `video-creation-suite` | `Skill("video-creation-suite")` | 完整视频创作套件 |
| `video-creation-pro` | `Skill("video-creation-pro")` | 10 代理协作产品视频 |
| `video-creation-collaborator` | `Skill("video-creation-collaborator")` | 11 代理协作视频管理 |
| `product-video-creator` | `Skill("product-video-creator")` | 产品视频管线 |
| `video-recreation` | `Skill("video-recreation")` | 视频复刻工具 |
| `three-body-video-creator` | `Skill("three-body-video-creator")` | "三体"赛道 AI 视频 |

### 🤖 数字人与电商视频

| Skill | 调用 | 说明 |
|-------|------|------|
| `digital-avatar-shopping-video` | `Skill("digital-avatar-shopping-video")` | 数字人口播带货 |
| `agentkit-multimedia-shopping` | `Skill("agentkit-multimedia-shopping")` | agentkit 数字人视频 |
| `infinitetalk-shopping-avatar` | `Skill("infinitetalk-shopping-avatar")` | InfiniteTalk 数字人 |
| `infinitetalk` | `Skill("infinitetalk")` | 音频驱动唇型同步 |
| `dream-video-prompt-generator` | `Skill("dream-video-prompt-generator")` | 即梦视频提示词 |
| `ecommerce-video-marketing` | `Skill("ecommerce-video-marketing")` | 电商视频营销 |
| `pet-commerce-creator` | `Skill("pet-commerce-creator")` | 宠物电商短视频 |

### 🎞️ 视频辅助工具

| Skill | 调用 | 说明 |
|-------|------|------|
| `video-frame-extractor` | `Skill("video-frame-extractor")` | 视频帧提取+分析 |
| `video-transcript-downloader` | `Skill("video-transcript-downloader")` | 视频/字幕下载 |
| `viral-video-copywriting` | `Skill("viral-video-copywriting")` | 爆款短视频文案 |
| `remotion-video-enhancer` | `Skill("remotion-video-enhancer")` | 视频转场增强 |
| `historical-interview-scripts` | `Skill("historical-interview-scripts")` | 历史名人访谈脚本 |
| `historical-science-video-prod` | `Skill("historical-science-video-prod")` | 历史科普视频素材 |

---

## 1️⃣7️⃣ 📝 内容创作与发布 (14 skills)

> 文章写作、多平台发布、内容研究

### ✍️ 内容研究与写作

| Skill | 调用 | 说明 |
|-------|------|------|
| `content-research-writer` | `Skill("content-research-writer")` | 协作写作伙伴 |
| `data-storytelling` | `Skill("data-storytelling")` | 数据叙事 |
| `content-creation-publisher` | `Skill("content-creation-publisher")` | 内容创作发布 |
| `intelligent-content-system` | `Skill("intelligent-content-system")` | 智能内容系统 |
| `article-illustrator` | `Skill("article-illustrator")` | 文章配图 |
| `khazix-writer` | `Skill("khazix-writer")` | 公众号长文写作 |
| `ian-xiaohei-illustrations` | `Skill("ian-xiaohei-illustrations")` | Ian 风格配图 |

### 📱 多平台发布

| Skill | 调用 | 说明 |
|-------|------|------|
| `baoyu-post-to-x` | `Skill("baoyu-post-to-x")` | 发布到 X/Twitter |
| `baoyu-post-to-wechat` | `Skill("baoyu-post-to-wechat")` | 发布到微信公众号 |
| `baoyu-url-to-markdown` | `Skill("baoyu-url-to-markdown")` | URL→Markdown |
| `baoyu-format-markdown` | `Skill("baoyu-format-markdown")` | Markdown 格式化 |
| `qiaomu-x-article-publisher` | `Skill("qiaomu-x-article-publisher")` | X Articles 发布 |
| `wechatsync-publisher` | `Skill("wechatsync-publisher")` | 多平台发布 |
| `wechat-hotspot-publisher` | `Skill("wechat-hotspot-publisher")` | 热点采集+发布 |

---

## 1️⃣8️⃣ 🗣️ 语音与音频 (5 skills)

> TTS、ASR、语音合成

| Skill | 调用 | 说明 |
|-------|------|------|
| `tts-voice-synthesis` | `Skill("tts-voice-synthesis")` | 智能语音合成 |
| `qwen3-tts-local` | `Skill("qwen3-tts-local")` | 本地 Edge-TTS 离线合成 |
| `qwen3-asr-assistant` | `Skill("qwen3-asr-assistant")` | 语音转文字 |
| `poetry-music-visual` | `Skill("poetry-music-visual")` | 古诗词+音乐+视觉 |
| `bedtime-story` | `Skill("bedtime-story")` | 儿童睡前故事 |

---

## 1️⃣9️⃣ 🔧 开发工具与工作流 (16 skills)

> Git、调试、代码审查、子代理开发、系统分析

### 🛠️ 开发工作流

| Skill | 调用 | 说明 |
|-------|------|------|
| `executing-plans` | 自然语言 | 执行开发计划 |
| `writing-plans` | 自然语言 | 编写开发计划 |
| `writing-skills` | 自然语言 | 编写技能文档 |
| `finishing-a-development-branch` | 自然语言 | 完成开发分支 |
| `using-git-worktrees` | 自然语言 | Git worktree 指南 |
| `test-driven-development` | 自然语言 | TDD 流程 |
| `systematic-debugging` | 自然语言 | 系统化调试 |

### 🔍 代码审查与质量

| Skill | 调用 | 说明 |
|-------|------|------|
| `receiving-code-review` | 自然语言 | 接收代码审查反馈 |
| `requesting-code-review` | 自然语言 | 请求代码审查 |
| `verification-before-completion` | 自然语言 | 完成前验证 |
| `neat-freak` | 自然语言 | 代码整洁度 |
| `storage-analyzer` | 自然语言 | 存储空间分析 |

### 🤖 代理与搜索

| Skill | 调用 | 说明 |
|-------|------|------|
| `subagent-driven-development` | 自然语言 | 子代理驱动开发 |
| `dispatching-parallel-agents` | 自然语言 | 并行代理调度 |
| `using-superpowers` | 自然语言 | 超级能力指南 |
| `anysearch-skill` | `Skill("anysearch-skill")` | 实时搜索引擎 |
| `chrome-automation` | `Skill("chrome-automation")` | Chrome CDP 自动化 |
| `deep-research` | `Skill("deep-research")` | 深度研究 |
| `brainstorming` | `/brainstorming` | 头脑风暴 |
| `devlite` | `Skill("devlite")` | Chrome 扩展诊断 |
| `github-pages` | `Skill("github-pages")` | Vault HTML 同步到 GitHub Pages（自动清理孤儿文件） |

---

## 2️⃣0️⃣ 🏢 飞书/Lark 生态 (28+ skills)

> 飞书全产品线 API 集成（通过 `~/.agents/skills/` 符号链接）

### 📋 核心办公

| Skill | 调用 | 说明 |
|-------|------|------|
| `lark-doc` | `Skill("lark-doc")` | 飞书文档 |
| `lark-docx` | `Skill("lark-docx")` | 飞书新版文档 |
| `lark-sheets` | `Skill("lark-sheets")` | 飞书电子表格 |
| `lark-slides` | `Skill("lark-slides")` | 飞书幻灯片 |
| `lark-base` | `Skill("lark-base")` | 飞书多维表格 |
| `lark-note` | `Skill("lark-note")` | 飞书笔记 |
| `lark-wiki` | `Skill("lark-wiki")` | 飞书知识库 |
| `lark-markdown` | `Skill("lark-markdown")` | 飞书 Markdown |

### 📅 协作与沟通

| Skill | 调用 | 说明 |
|-------|------|------|
| `lark-im` | `Skill("lark-im")` | 飞书消息 |
| `lark-mail` | `Skill("lark-mail")` | 飞书邮件 |
| `lark-calendar` | `Skill("lark-calendar")` | 飞书日历 |
| `lark-event` | `Skill("lark-event")` | 飞书事件 |
| `lark-vc` | `Skill("lark-vc")` | 飞书视频会议 |
| `lark-vc-agent` | `Skill("lark-vc-agent")` | 飞书会议代理 |
| `lark-whiteboard` | `Skill("lark-whiteboard")` | 飞书白板 |

### 👥 人事与行政

| Skill | 调用 | 说明 |
|-------|------|------|
| `lark-contact` | `Skill("lark-contact")` | 飞书通讯录 |
| `lark-task` | `Skill("lark-task")` | 飞书任务 |
| `lark-task-agent` | `Skill("lark-task-agent")` | 飞书任务代理 |
| `lark-approval` | `Skill("lark-approval")` | 飞书审批 |
| `lark-attendance` | `Skill("lark-attendance")` | 飞书考勤 |
| `lark-okr` | `Skill("lark-okr")` | 飞书 OKR |
| `lark-minutes` | `Skill("lark-minutes")` | 飞书妙记 |
| `lark-timeoff` | `Skill("lark-timeoff")` | 飞书请假 |

### 🔧 平台与工具

| Skill | 调用 | 说明 |
|-------|------|------|
| `lark-apps` | `Skill("lark-apps")` | 飞书应用管理 |
| `lark-drive` | `Skill("lark-drive")` | 飞书云盘 |
| `lark-shared` | `Skill("lark-shared")` | 飞书共享资源 |
| `lark-openapi-explorer` | `Skill("lark-openapi-explorer")` | OpenAPI 探索 |
| `lark-skill-maker` | `Skill("lark-skill-maker")` | 飞书技能创建 |

### 📊 工作流

| Skill | 说明 |
|-------|------|
| `lark-workflow-meeting-summary` | 飞书会议纪要工作流 |
| `lark-workflow-standup-report` | 飞书每日站会报告工作流 |

### 📮 飞书卡片报告

| Skill | 说明 |
|-------|------|
| `feishu-card-report` | 飞书消息卡片生成器：8 种卡片类型（摘要/数据/时间线/风险/档案/对比/进度/引用） |

---

## 2️⃣1️⃣ 🎯 人物思维框架 — Nuwa Skill (16 skills)

> 从名人身上提取可复用的"思维框架"技能

### 🔧 创建器

| Skill | 调用 | 说明 |
|-------|------|------|
| `nuwa-skill` | `Skill("nuwa-skill")` | 女娲技能创建器 |

### 🧠 已创建的思维框架

| 人物 | 调用 | 领域 |
|------|------|------|
| `andrej-karpathy-perspective` | `Skill("andrej-karpathy-perspective")` | AI 可靠性、学习方法 |
| `elon-musk-perspective` | `Skill("elon-musk-perspective")` | 第一性原理、成本分析 |
| `feynman-perspective` | `Skill("feynman-perspective")` | 空壳崇拜检测、反自欺 |
| `ilya-sutskever-perspective` | `Skill("ilya-sutskever-perspective")` | AI 方向、安全策略 |
| `munger-perspective` | `Skill("munger-perspective")` | 多学科思维、认知偏差 |
| `naval-perspective` | `Skill("naval-perspective")` | 杠杆、特定知识 |
| `paul-graham-perspective` | `Skill("paul-graham-perspective")` | 创业、写作、产品 |
| `steve-jobs-perspective` | `Skill("steve-jobs-perspective")` | 产品思维、设计 |
| `sun-yuchen-perspective` | `Skill("sun-yuchen-perspective")` | 营销策略、注意力经济 |
| `taleb-perspective` | `Skill("taleb-perspective")` | 黑天鹅、反脆弱 |
| `trump-perspective` | `Skill("trump-perspective")` | 谈判、权力 |
| `x-mastery-mentor` | `Skill("x-mastery-mentor")` | X/Twitter 增长 |
| `zhang-yiming-perspective` | `Skill("zhang-yiming-perspective")` | 产品、组织、全球化 |
| `zhangxuefeng-perspective` | `Skill("zhangxuefeng-perspective")` | 教育选择、职业规划 |
| `mrbeast-perspective` | `Skill("mrbeast-perspective")` | 视频 CTR、留存优化 |
| `nihaixia` | `Skill("nihaixia")` | 中医经方、六经辨证、倪海厦思维 |

---

## 2️⃣2️⃣ 🏭 企业采购与供应链 (4 skills)

> RFQ 跟踪、供应商画像、需求评审、品类管理

| Skill | 调用 | 说明 |
|-------|------|------|
| `rfq-tracker` | `Skill("rfq-tracker")` | RFQ 进度跟踪与诊断 |
| `supplier-profile` | `Skill("supplier-profile")` | 供应商画像生成 |
| `nomi-progress` | `Skill("nomi-progress")` | 车型定点进度跟踪 |
| `供应商与品类管理B点能力映射` | `Skill("供应商与品类管理B点能力映射")` | 供应商全生命周期能力跃迁 |
| `数字化需求评审技能` | `Skill("数字化需求评审技能")` | 五维价值评审+优先级验证 |

---

## 2️⃣3️⃣ 🎓 学术研究管线 (3 skills)

> 论文写作、审稿、全流程编排，12代理协作

| Skill | 调用 | 说明 |
|-------|------|------|
| `academic-paper` | `Skill("academic-paper")` | 12 代理论文写作管线 |
| `academic-paper-reviewer` | `Skill("academic-paper-reviewer")` | 多视角论文审稿 |
| `academic-pipeline` | `Skill("academic-pipeline")` | 全学术研究管线 |

---

## 2️⃣4️⃣ 📰 AI 资讯 (1 skill)

> AI 行业动态查询，无需 API Key

| Skill | 说明 |
|-------|------|
| `aihot` | AI HOT 中文AI资讯查询，curl 公开 REST API 拉取 aihot.virxact.com 每日AI日报和全部动态，支持精选/模型发布/论文/产品/技巧等分类 |

---

## 2️⃣5️⃣ ⚖️ 法律文档 (2 skills)

> 合同审查与法条格式转换

| Skill | 调用 | 说明 |
|-------|------|------|
| `contract-review` | `Skill("contract-review")` | 三层合同审查 |
| `law-to-markdown` | `Skill("law-to-markdown")` | 法条→Markdown |

---

## 2️⃣6️⃣ 🤝 智能体协作 (2 skills)

> 多代理团队框架与会议决策

| Skill | 调用 | 说明 |
|-------|------|------|
| `agent-team` | `Skill("agent-team")` | 智能体团队协作 |
| `multi-agent-meeting` | `Skill("multi-agent-meeting")` | 多智能体会议决策 |

---

## 2️⃣7️⃣ 📊 企业分析工具 (4 skills)

> 深度研究分析、结构化决策框架与价格对比

| Skill | 调用 | 说明 |
|-------|------|------|
| `analyst` | `Skill("analyst")` | 结构化分析框架，融合 McKinsey/BCG/Bain 等咨询方法论，两大模式：grillme（穷追式提问）+ nailit（五步决策） |
| `hv-analysis` | `Skill("hv-analysis")` | 横纵分析深度研究 |
| `framework-price-deviation-comparator` | `Skill("framework-price-deviation-comparator")` | 价格偏离对比 |
| `quote-report` | `Skill("quote-report")` | 引言报告生成 |

---

## 2️⃣8️⃣ 🧩 其他本地 Skills

> 不属于上述大类的独立技能

| Skill | 说明 |
|-------|------|
| `hatch-pet` | 创建/修复/验证 Codex 兼容动画宠物精灵图，支持 9 种动画状态 |
| `paper-analysis-assistant` | arXiv 论文分析：PDF 下载→多维分析→音频叙述→播客对话→PPT |
| `stock-analysis` | 个股分析：实时行情+技术指标+支撑阻力+缺口检测+3 日趋势预测 |
| `web-design-analyzer` | 网页截图分析→提取设计系统→生成 AI Coding Prompts |
| `web-to-app` | 网页转桌面应用（Rust+Tauri），~5MB 高性能跨平台 |
| `dot-skill` | 统一元技能引擎：将同事/关系/名人蒸馏为可复用技能 |
| `moltbook` | AI 代理社交网络：注册、发帖、评论、投票、社区 |
| `icon-generator` | 图标生成（占位符，待填充） |
| `pop-up-book-illustration` | 3D 纸艺立体书风格插图生成 |
| `tailored-resume-generator` | 分析职位描述→生成定制简历 |
| `product-manager-toolkit` | PM 工具箱：RICE 优先级+用户访谈+PRD 模板+发现框架 |
| `media-processor` | 多媒体处理（FFmpeg+ImageMagick）：格式转换/分辨率/压缩 |
| `xiaohongshu-makeup` | 小红书美妆内容创作：笔记生成/优化/文生图描述 |
| `ecommerce-copywriter` | 电商图文文案创作 |
| `product-marketing-copywriter` | 产品营销文案创作 |
| `skill-icons` | 技能图标资源 |

---

## 2️⃣9️⃣ 🆕 本次新增 Skills（2026-07-13）

> 自 2026-07-09 以来新安装的 **15 个 skill**（本地目录实际 201 个，含 `xiaomi-fds` 命令别名 `xiaomi-fds-auto-upload`）。以下按用途分组，调用方式统一为 `Skill("name")`。

### 🏭 小米内部工具

| Skill | 调用 | 说明 |
|-------|------|------|
| `bi` | `Skill("bi")` | 小米 BI（数鲸）CLI：图表/看板数据查询、NL2SQL 模型问答、模型开发与字段新增、自然语言编辑看板 |
| `xiaomi-fds` | `Skill("xiaomi-fds")` / `/xiaomi-fds-auto-upload` | 一键上传 HTML/图片到小米 FDS 内部预览（含 upload、config 子命令） |
| `mify-model-gateway` | `Skill("mify-model-gateway")` | 小米 Mify 大模型网关：查询 450+ 模型、测试调用、AA 榜单推荐、配置 Claude Code/Desktop |

### 🎨 前端 / 原型 / 演示

| Skill | 调用 | 说明 |
|-------|------|------|
| `editable-html-presentation` | `Skill("editable-html-presentation")` | 自包含单文件 HTML 演示文稿：文本框可编辑 + 浮动工具栏调字号/比例/四向移动，localStorage 持久化，零外部依赖 |
| `prd-to-prototype` | `Skill("prd-to-prototype")` | 产品想法 → PRD → 高保真可交互原型（零提问直出 PRD，支持移动端/PC 端） |
| `prototype-design` | `Skill("prototype-design")` | 业务系统 HTML 原型：统计卡片、筛选、数据表格、弹窗、标准页结构 |
| `cyber-ppt` | `Skill("cyber-ppt")` | DOCX/PDF/XLSX/数据 → 高密度、可编辑、咨询风格 PPTX（MBB 级 SCR 论证 + 渲染质检） |

### 📊 PPT 生成

| Skill | 调用 | 说明 |
|-------|------|------|
| `ppt-generator` | `Skill("ppt-generator")` | 七角色协作智能 PPT 生成与优化：主题/模板/配图/润色/PPTX 输出 |
| `pptx-generator` | `Skill("pptx-generator")` | JSON 内容 → 标准 .pptx（python-pptx，多布局/图表/表格） |

### 📱 小红书

| Skill | 调用 | 说明 |
|-------|------|------|
| `xhs` | `Skill("xhs")` | 提取小红书帖子（文字/图片/视频转录）为 Markdown |
| `xhs-favorites` | `Skill("xhs-favorites")` | 全量拉取小红书收藏夹帖子，整合到 99_Clippings |
| `xhs-analyze` | `Skill("xhs-analyze")` | 分析已提取的小红书收藏，AI 总结/对比/提炼 |
| `xhs-batch` | `Skill("xhs-batch")` | 批量提取小红书帖子为本地 Markdown 知识库 |

### 📝 内容发布 / Obsidian

| Skill | 调用 | 说明 |
|-------|------|------|
| `qiaomu-x-article-publisher-github` | `Skill("qiaomu-x-article-publisher-github")` | 发布 Markdown 文章到 X (Twitter) Articles（GitHub 版） |
| `feishu-wiki-to-obsidian` | `Skill("feishu-wiki-to-obsidian")` | 飞书知识库/docx → Obsidian Markdown（保留图片/表格/附件） |
| `feishu-vault-sync` | `Skill("feishu-vault-sync")` | Obsidian Vault ↔ 飞书文档同步：全量/增量同步、变更检测、定时任务管理 |
| `obsidian-skills-integrated` | `Skill("obsidian-skills-integrated")` | Obsidian 官方技能集（kepano 开源）：专业 Obsidian 操作能力，遵循 Agent Skills 规范 |

---

## 2️⃣9️⃣ 🏭 数据工场 (Datum) Skills (7 skills)

> Xiaomi 数据工场 Agent skills 集合，覆盖元数据管理、数据集成、AI 工作流和数据查询
> 安装方式：`Skill("datum-skill-installer")`，当前版本 `v0.7.0`

### 📊 全部 Datum Skills

| Skill | 调用 | 说明 | 对应能力 |
|-------|------|------|---------|
| `datum-sol` | `Skill("datum-sol")` | 底层框架适配器协议和约束 | 与工场无关，理解工具用法 |
| `datum-workspace` | `Skill("datum-workspace")` | 空间配置查询（队列/负责人/quota） | 管理-空间配置（只读） |
| `datum-metadata` | `Skill("datum-metadata")` | 元数据管理（catalog/库/表查询、建表、分区） | 资源-表管理/库管理 |
| `datum-integration` | `Skill("datum-integration")` | 集成作业全生命周期（实时/离线同步） | 开发-实时开发/离线集成 |
| `datum-kestra` | `Skill("datum-kestra")` | AI 数据开发工作流（Kestra 流程编排） | 开发-AI 数据开发 |
| `datum-sql` | `Skill("datum-sql")` | SQL 查询/写入/删除/DDL（调用 Kyuubi） | 查询-数据查询（ad-hoc） |
| `kyuubi-cli` | `Skill("kyuubi-cli")` | Kyuubi SQL 客户端（直接查询，无需数据工场） | 快速 SQL 查询 |

### 🎯 使用场景

| 场景 | 示例 | Skill |
|------|------|-------|
| 数据查询 | "查一下审计日志表 2026-04-25 到 05-25" | `datum-sql` |
| 数据分析 | "分析 tmp 库订单量变化" | `datum-metadata` + `datum-sql` |
| 建表 | "在 tmp 库创建 Iceberg 按天分区表" | `datum-metadata` |
| 数据加工 | "联合三张表创建工作流，每天凌晨 2 点执行" | `datum-kestra` + `datum-metadata` |
| 外部同步 | "MySQL 表同步为 Paimon 格式，实时" | `datum-integration` + `datum-metadata` |

> ⚠️ 首次使用时会询问 Workspace ID、Region 和 Token，从数据工场 UI 获取：https://data.mioffice.cn/workspace/#/home

---

## 🗂️ 按使用场景索引

### 📋 产品经理日常

| 场景 | 推荐 Skill |
|------|-----------|
| 写 PRD | `create-prd` |
| Sprint 规划 | `sprint-plan` |
| 优先级排序 | `prioritization-frameworks` |
| 用户故事 | `user-stories`, `job-stories`, `wwas` |
| 发布说明 | `release-notes` |
| 会议纪要 | `summarize-meeting` |
| Sprint 回顾 | `retro` |
| 需求评审 | `数字化需求评审技能` |
| 合同审查 | `contract-review` |
| 法条整理 | `law-to-markdown` |

### 🔬 产品发现

| 场景 | 推荐 Skill |
|------|-----------|
| 用户访谈 | `interview-script`, `summarize-interview` |
| 功能创意 | `brainstorm-ideas-new/existing` |
| 假设验证 | `identify-assumptions-*`, `prioritize-assumptions` |
| 实验设计 | `brainstorm-experiments-*` |
| 指标体系 | `metrics-dashboard`, `north-star-metric` |
| OST | `opportunity-solution-tree` |

### 🧭 战略分析与决策

| 场景 | 推荐 Skill |
|------|-----------|
| 结构化分析 | `analyst`（nailit 五步 + 咨询方法论） |
| 深度研究 | `hv-analysis`（横纵分析） |
| SWOT | `swot-analysis` |
| PESTLE | `pestle-analysis` |
| 波特五力 | `porters-five-forces` |
| 商业模式 | `business-model`, `lean-canvas` |

### 🌍 市场调研

| 场景 | 推荐 Skill |
|------|-----------|
| 竞品分析 | `competitor-analysis`, `competitive-battlecard` |
| 市场规模 | `market-sizing` |
| 定价策略 | `pricing-strategy` |

### 🚀 市场进入

| 场景 | 推荐 Skill |
|------|-----------|
| GTM 策略 | `gtm-strategy`, `gtm-motions` |
| 增长飞轮 | `growth-loops` |
| ICP | `ideal-customer-profile` |
| 滩头市场 | `beachhead-segment` |
| 产品命名 | `product-name` |

### 🎨 前端开发

| 场景 | 推荐 Skill |
|------|-----------|
| UI 设计 | `frontend-design`, `impeccable` |
| 交互设计 | `impeccable/interaction-design` |
| UI 优化 | `impeccable/optimize`, `impeccable/overdrive` |
| HTML 操场 | `playground` |
| 反模板化设计 | `design-taste-frontend`, `gpt-taste` |

### 🖌️ 高端设计 (Design Taste)

| 场景 | 推荐 Skill |
|------|-----------|
| 品牌视觉 | `brandkit`, `high-end-visual-design` |
| 反模板化前端 | `design-taste-frontend`, `gpt-taste` |
| 极简 UI | `minimalist-ui`, `industrial-brutalist-ui` |
| 图像转代码 | `image-to-code` |
| 设计参考图 | `imagegen-frontend-web`, `imagegen-frontend-mobile` |
| 项目重设计 | `redesign-existing-projects`, `stitch-design-taste` |
| HTML 原型 | `prototype-html` |
| 完整输出 | `full-output-enforcement` |

### 🎬 视频创作

| 场景 | 推荐 Skill |
|------|-----------|
| 产品视频 | `video-creation-pro`, `product-video-creator` |
| 数字人带货 | `digital-avatar-shopping-video`, `agentkit-multimedia-shopping` |
| 短视频文案 | `viral-video-copywriting` |
| 视频复刻 | `video-recreation`, `video-frame-extractor` |
| PPT 转视频 | `ppt-roadshow-generator`, `nanobanana-ppt-visualizer` |
| 科普视频 | `historical-science-video-prod` |
| 配音 | `infinitetalk`, `tts-voice-synthesis`, `qwen3-tts-local` |

### 📱 内容发布

| 场景 | 推荐 Skill |
|------|-----------|
| 微信公众号 | `baoyu-post-to-wechat`, `wechat-hotspot-publisher`, `khazix-writer` |
| X/Twitter | `baoyu-post-to-x`, `qiaomu-x-article-publisher` |
| 小红书 | `xiaohongshu-makeup`, `wechat-hotspot-publisher` |
| 多平台 | `wechatsync-publisher`, `intelligent-content-system` |
| URL 转 Markdown | `baoyu-url-to-markdown` |
| 文章配图 | `article-illustrator`, `ian-xiaohei-illustrations` |

### 🔧 开发工具

| 场景 | 推荐 Skill |
|------|-----------|
| MCP 服务器 | `build-mcp-server`, `build-mcp-app` |
| 浏览器测试 | `playwright`, `chrome-automation` |
| PDF 处理 | `pdf`, `pdf-processing-pro` |
| SQL 生成 | `sql-queries` |
| 数据集 | `dummy-dataset` |
| 搜索 | `anysearch-skill`, `deep-research` |
| 代码审查 | `receiving-code-review`, `requesting-code-review` |
| 调试 | `systematic-debugging` |
| Chrome扩展诊断 | `devlite` |
| GitHub Pages 部署 | `github-pages` |

### 🏢 飞书生态

| 场景 | 推荐 Skill |
|------|-----------|
| 文档协作 | `lark-doc`, `lark-docx`, `lark-sheets`, `lark-slides` |
| 会议管理 | `lark-vc`, `lark-calendar`, `lark-workflow-meeting-summary` |
| 任务管理 | `lark-task`, `lark-approval` |
| 知识库 | `lark-wiki`, `lark-base` |
| Vault 同步 | `feishu-vault-sync`, `feishu-wiki-to-obsidian` |
| 消息通知 | `lark-im`, `feishu-card-report` |
| OKR | `lark-okr` |
| 妙记/转写 | `lark-minutes` |

### 🏭 企业采购

| 场景 | 推荐 Skill |
|------|-----------|
| RFQ 跟踪 | `rfq-tracker` |
| 供应商画像 | `supplier-profile` |
| 定点进度 | `nomi-progress` |
| 能力升级 | `供应商与品类管理B点能力映射` |
| 价格偏离分析 | `framework-price-deviation-comparator` |
| 横纵深度研究 | `hv-analysis` |

### 🎓 学术研究

| 场景 | 推荐 Skill |
|------|-----------|
| 写论文 | `academic-paper` |
| 审稿 | `academic-paper-reviewer` |
| 全流程 | `academic-pipeline` |

### 📰 AI 资讯

| 场景 | 推荐 Skill |
|------|-----------|
| AI 日报 | `aihot` |
| 行业动态 | `aihot` |

### 🤝 智能体协作

| 场景 | 推荐 Skill |
|------|-----------|
| 组建团队 | `agent-team` |
| 会议决策 | `multi-agent-meeting` |

### 🧠 思维框架

| 场景 | 推荐 Skill |
|------|-----------|
| 创建新框架 | `nuwa-skill` |
| 创业思维 | `paul-graham-perspective`, `elon-musk-perspective` |
| 产品思维 | `steve-jobs-perspective`, `zhang-yiming-perspective` |
| 投资思维 | `munger-perspective`, `taleb-perspective` |
| AI 思维 | `andrej-karpathy-perspective`, `ilya-sutskever-perspective` |
| 增长思维 | `x-mastery-mentor`, `mrbeast-perspective` |
| 中医思维 | `nihaixia` |

### 🏭 数据工场 (Datum)

| 场景 | 推荐 Skill |
|------|-----------|
| 安装引导 | `datum-skill-installer` |
| 元数据查询/建表 | `datum-metadata` |
| SQL 查询/写入 | `datum-sql` |
| 集成作业管理 | `datum-integration` |
| Kestra 工作流 | `datum-kestra` |
| 空间配置查询 | `datum-workspace` |
| 快速 SQL 查询 | `kyuubi-cli` |

### 🤖 Mify 大模型网关

| 场景 | 推荐 Skill |
|------|-----------|
| 模型查询 | `mify-model-gateway` (list_models.py) |
| 调用测试 | `mify-model-gateway` (test_model.py) |
| 模型推荐 | `mify-model-gateway` (fetch_aa_rankings.py) |
| 配置 Claude Code | `mify-model-gateway` (set_cc_model.py) |
| Token 安装 | `mify-model-gateway` (install_token.py) |

---

## 3️⃣0️⃣ 📱 微信收藏导出 (1 skill)

> 微信公众号文章导出为 Markdown + HTML，自动清洗噪音、下载图片、生成内容摘要

| Skill | 调用 | 说明 |
|-------|------|------|
| `wechat-export` | `/wechat-export` | 微信收藏→Obsidian：下载文章、图片本地化、清洗微信噪音、生成干净 HTML |

### 使用场景

| 场景 | 操作 |
|------|------|
| 导出单篇文章 | 发送微信文章链接，Claude 自动下载并生成 MD + HTML |
| 批量导出 | 连续发送多个链接，自动去重并批量处理 |
| 重新生成 HTML | 运行 `python md_to_html.py` 批量转换 |
| 手动导出 | 双击 `导出微信收藏.bat`，在微信中 Ctrl+C 复制链接 |

### 文件位置

| 文件 | 路径 |
|------|------|
| 导出脚本 | `00_Self/微信收藏/export_wechat_fav.py` |
| HTML 转换 | `00_Self/微信收藏/md_to_html.py` |
| 一键导出 | `00_Self/微信收藏/导出微信收藏.bat` |
| 批量转换 | `00_Self/微信收藏/convert_all.bat` |
| 文章存储 | `00_Self/微信收藏/*.md` |
| HTML 输出 | `00_Self/微信收藏/html/` |
| 图片存储 | `00_Self/微信收藏/assets/` |
| 导出日志 | `00_Self/微信收藏/.export_log.json` |

---

## 📦 安装信息

| 项目 | 值 |
| ---- | --- |
| **本地 Skill 目录数** | 210 |
| **系统注册 Skill 数** | 190+ |
| **总 Skill 数（去重后）** | 265+ |
| **分类数** | 30 |
| **最后更新** | 2026-07-27 |
| **本地来源** | `Claire/.claude/skills` + `.workbuddy/skills` (207 目录) |
| **系统来源** | `~/.claude/` (PM 插件+官方市场) |
| **飞书来源** | `~/.agents/skills/lark-*` (27+ 符号链接) |
| **设计品味来源** | `D:\Obsidian\.agents\skills/` + `Claire/Skill/taste-skill/` |
| **数据工场来源** | `~/.agents/skills/datum-*` + `~/.claude/skills/datum-*` (6 个，sol-datum v0.7.0) |
| **Mify 网关来源** | `~/.claude/skills/mify-model-gateway` (1 个，from GitHub) |
| **Kyuubi CLI 来源** | `~/.claude/skills/kyuubi-cli` (1 个，v0.4.0) |
| **待填充目录** | `anything-to-notebooklm`, `jiamu-skills`, `ui-ux-pro-max-skill` |

---

> 回到 → [[Xiaomi|📱 小米 EP 采购系统]]
