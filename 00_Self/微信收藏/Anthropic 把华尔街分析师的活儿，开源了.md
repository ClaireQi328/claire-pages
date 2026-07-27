---
created: 2026-07-27
updated: 2026-07-27
tags: [Clippings, 微信收藏]
source: "https://mp.weixin.qq.com/s?__biz=Mzg2NTA4MTAwMQ==&mid=2247484059&idx=1&sn=c4135eefb2d0317861b2888933ad3af0&chksm=cff4a40253848e76eb93f8e6b980a5d867476afd6a9b86bfaabd31944d1ccc24695c78782d15&mpshare=1&scene=24&srcid=0527LBWhQJrtoItRjPj4FEpE&sharer_shareinfo=9bf5a6431b1463a8eb7bd0d4d878834c&sharer_shareinfo_first=2b4e27140a28bb8e5893aefea081a33e#rd"
status: draft
---


> 🌐 [在线阅读 HTML 版本](html/Anthropic 把华尔街分析师的活儿，开源了.html)


# Anthropic 把华尔街分析师的活儿，开源了

![cover_image](assets/942d6ddc7caa05215fb9b6819f4aa6f1_MD5.jpg)

# Anthropic 把华尔街分析师的活儿，开源了

原创ColaAIColaAIColaAI

******

在小说阅读器读本章

去阅读

在小说阅读器中沉浸阅读

# Anthropic 把华尔街分析师的活儿，开源了

从 Pitch Agent 到 GL Reconciler，10 个开箱即用的 Agent 模板，一份藏在 GitHub 上的"华尔街分析师 OS"

周二凌晨两点，VP 微信弹出来。

**"明早 9 点要个 pitch deck，目标 A、B、C 三家，comps、precedents 全套，再带个简化 LBO，老板要看。"**

Associate 把第三杯美式一推，开始重复过去七年里所有挨过的夜——拉 Capital IQ，扒 10-K，搭三张表，复制粘贴到 PPT，调字号，对齐 box，改 footnote 编号⋯⋯

这套流程里，"分析"含量大概只占 15%。剩下 85% 是机械的数据搬运和格式工艺。

投行、卖方研究、PE、资管的从业者都太熟悉这种夜了。AI 能不能把这 85% 吃掉？过去两年市面上的回答大多是"还不行"——demo 都很美，落到一份真实的 pitch book、一次真实的月末对账，处处卡壳。

直到 5 月初，**Anthropic 在 GitHub 上开源了一个名为`anthropics/financial-services`的项目**，把 Claude 在金融场景里的 agent、skill、数据连接器全部以可复制的 reference 形式掏了出来。

仓库目前**16.9k stars、2.1k forks**，金融科技类项目里现象级的体量。

今天把它从头拆一遍，看看它到底在解决什么问题、对你的工作流意味着什么、怎么上手。
📎 仓库地址：github.com/anthropics/financial-services

✦ ✦ ✦
PART 01

## 它到底是什么

官方定位非常克制：
"Reference agents, skills, and data connectors for the financial-services workflows we see most."

翻译过来——投行、股票研究、PE、财富管理这四个最常见的工作流，给你一份可以直接装的参考实现。

说人话：Anthropic 把它在金融客户那里见到的高频任务（写 pitch、做 earnings note、对账、KYC⋯⋯）抽象成了——
- **10 个端到端的 Agent 模板**
- **7 个垂直领域 Skill 包**
- **11 个 MCP 数据连接器**

全部用 Markdown 和 YAML 写成。**没有编译步骤，fork 下来改一改就是你自家的工具。**

真正聪明的是它的部署逻辑——**"two ways from one source"**。同一份 system prompt 和 skill，两种完全不同的运行方式：
部署方式

运行形态

适合场景
**Cowork 插件**
桌面端"陪跑"，调本地 Excel/PPT

单 deal、单份模型、人机协同
**Managed Agents API**
Claude Platform 后台跑批

整本 deal book、夜间任务

白天分析师在桌面上和 Claude 对着模型 craft，晚上同样的 agent 切换成 headless 模式，自动跑完整本组合的对账或全行业 earnings refresh。

同一个 prompt、同一套 skill、同一份输出标准，**不用维护两套逻辑**。这一点对工程团队是巨大的诱惑。

合规底线（写进项目设计的）

AI drafts, humans sign off.

这些 agent 不会真的去执行交易、过账、绑定风险或批准 onboarding——所有输出都是 staged for human sign-off，给到合格专业人员审核。这条原则贯穿整个工程。

✦ ✦ ✦
PART 02

## 十个 Agent 全家福

仓库的`plugins/agent-plugins/`目录下，10 个 agent 各自是一个"自包含"的 plugin。

system prompt 加它要用的 skill 都打包在自己文件夹里，**装一个就够，不用东拼西凑**。
![image](assets/85a2024c8ea87c74673a246ce62e49a8_MD5.jpg)

按业务条线分四组：
业务条线

Agent

核心交付物

覆盖与咨询

Pitch Agent

Comps + Precedents + LBO → 带品牌的 pitch deck

Meeting Prep Agent

每次客户会议前的 briefing pack

研究与建模

Market Researcher

行业/主题 → overview、landscape、peer comps、shortlist

Earnings Reviewer

业绩电话 + 财报 → 模型更新 → 研报草稿

Model Builder

DCF、LBO、3-statement、comps，**直接活在 Excel 里**

基金运营与财务

Valuation Reviewer

吃进 GP package，跑估值模板，stage 给 LP reporting

GL Reconciler

找断点 → 追根因 → 走签批流

Month-End Closer

应计、roll-forward、差异说明

Statement Auditor

LP statement 分发前的审计

运营与开户

KYC Screener

解析 onboarding 文件，跑 rules engine，标记缺口

这十个 agent 覆盖了卖方、买方、运营三条线最吃工时的环节。

更妙的是**它们之间可以互相调用**——Managed Agents 模式下，一个 agent 需要另一个 agent 的输出时，会发出`handoff_request`事件，由你自己的 orchestration 层路由出去。

项目里给了`orchestrate.py`的 reference event loop，可以接 Temporal、Airflow 或公司内部的事件总线。

✦ ✦ ✦
PART 03

## Vertical Plugins：每一个都是"工种工具箱"

如果你不需要完整的 agent，只想要`/comps``/dcf``/earnings`这些斜杠命令和数据连接器，可以单独装 vertical plugin。

仓库给了七个：
- **financial-analysis（核心，必装）**
——comps、DCF、LBO、三表、deck QC、Excel 审计。**11 个数据连接器全部集中在这里**，其他 plugin 共享。

- **investment-banking**
——CIM、teaser、process letter、buyer list、merger model、deal tracker。

- **equity-research**
——earnings note、initiation report、model update、thesis & catalyst tracking。

- **private-equity**
——sourcing、screening、DD checklist、IC memo、portfolio monitoring。

- **wealth-management**
——client review、financial plan、再平衡、TLH（税损收割）。

- **fund-admin**
——GL recon、break tracing、应计、roll-forward、NAV tie-out。

- **operations**
——KYC 文件解析与 rules-grid 评估。

另外还有两个**合作伙伴贡献的 plugin**：
- **LSEG**
——债券 RV、swap 曲线、FX carry、期权波动率、宏观利率监控

- **S&P Global**
——tear sheet、earnings preview、funding digest（基于 Capital IQ 数据）

这一块是金融数据厂商主动适配 Claude 的信号——**data vendor 开始把自家终端能力以 MCP 形式接到 Claude 上**。

### 关键斜杠命令一览

挑几个高频的让你感受一下风格——
命令

所属

作用
`/comps`
financial-analysis

可比公司分析（含交易倍数）
`/dcf`
financial-analysis

DCF 估值 + WACC + 敏感性
`/lbo`
financial-analysis

杠杆收购模型
`/debug-model`
financial-analysis

Excel 公式追溯、硬编码识别、平衡校验
`/cim`
investment-banking

起草 CIM（保密信息备忘录）
`/buyer-list`
investment-banking

战略 + 财务买家清单
`/earnings`
equity-research

业绩后季度更新报告
`/initiate`
equity-research

机构级首次覆盖报告
`/ic-memo`
private-equity

投委会备忘录起草
`/unit-economics`
private-equity

ARR cohort、LTV/CAC、净留存、收入质量
`/tlh`
wealth-management

税损收割识别 + wash sale 管理
`/rebalance`
wealth-management

配置漂移分析与税务友好再平衡

每条命令背后挂着一个 markdown 写的 skill 文件，里面写明了"建模步骤、行业惯例、输出格式、QC 清单"。

这意味着：你公司的内部模板和风格规范，**可以直接通过编辑这些 markdown 文件被 Claude 继承下来**。

● ● ●
PART 04

## 11 个 MCP 连接器：把 Claude 插进金融基础设施

AI 在金融场景里的瓶颈从来不是"语言模型本身不够聪明"，而是**能不能连上权威数据源**。

这个项目把 11 个连接器集中在`financial-analysis/.mcp.json`里——

几乎覆盖了主流买卖方在用的 data vendor：
提供方

主要场景

FactSet

综合金融数据、估值与基本面

S&P Global / Capital IQ

公司基本面、信用、并购数据

LSEG

固定收益、利率、外汇、期权波动率

Moody's

评级、信用研究、GenAI-ready 数据

Morningstar

基金、ETF、独立研究

PitchBook

PE/VC 交易与一级市场数据

Daloopa

分析师标注的高质量历史财务数据

Aiera

业绩电话会议转录与事件智能

MT Newswires

实时新闻与市场资讯

Chronograph

PE 组合监控与 LP 报告

Egnyte

企业内部文件库

⚠️ 注意：MCP 连接通常需要你公司在对应平台上有**有效订阅或 API Key**。Claude 本身只负责"插上去"，数据合规与授权依然走原平台体系。

✦ ✦ ✦
PART 05

## 三个实战场景：它能不能立刻帮上忙

### 场景一 · Pitch Agent

一句话，生成完整 pitch 包

**典型输入：**
"Build pitch book: TargetCo / AcquirerCo, thesis: 北美中型软件资产横向整合，关注 ARR 质量与 SBC 调整后 EBITDA"

**幕后协作：**

Pitch Agent 在 Managed Agent 模式下会依次唤起三个 leaf-worker：
- **researcher**
——行业与目标研究

- **modeler**
——comps、precedents、简版 LBO

- **deck-writer**
——套用品牌模板生成 PPT

**典型输出：**
- 
Excel：comps 表（带交易倍数）、precedents 表、LBO with sensitivity

- 
PowerPoint：套你 firm 品牌模板的 pitch deck，封面、目录、估值 summary、卖点页

- 
Outlook：cover note 草稿，调一下 tone 就能发

这不是 PPT 生成器。是**把 IBD analyst 一个通宵的活儿端到端串起来**。

Anthropic 自己在产品介绍里给的描述很直白——把目标清单丢给它，"comps model in Excel, a pitchbook drafted in PowerPoint, and a cover note ready in Outlook"。

— · —

### 场景二 · Market Researcher

从主题到 shortlist 的研究流水线

**典型输入：**
"Primer: 全球数据中心液冷产业链, angle: GPU 功耗跃升驱动的长期资本开支主题"

**幕后协作：**

sector-reader 拉行业资料、comps-spreader 拉 peer 组、note-writer 输出研报骨架。背后调用 FactSet、S&P Capital IQ、PitchBook 等连接器。

**典型输出：**

行业 overview + 竞争格局图谱 + peer comps + idea shortlist。

买方研究员可以拿这个做盲池筛选起点；卖方分析师可以当作 initiation 的 base draft。

— · —

### 场景三 · GL Reconciler

基金运营的"找断点 + 追根因"

部署一行命令搞定——
# 设置 API Key
export ANTHROPIC_API_KEY=sk-ant-...

# 一键部署
scripts/deploy-managed-agent.sh gl-reconciler

**典型工作流：**
- 
读取 GL 与 books of record 两边数据

- 
逐账户跑 NAV tie-out，标出所有 breaks

- 
追溯每一个 break 的 root cause——漏入账？时点差异？汇率？

- 
生成调整建议，**路由给人类签字**——绝不自己过账

对一个跑 10 只基金的 fund admin 团队——

把每月夜间批量任务交给 agent，第二天早上人类只看 exception list 和签字界面。

体感上就是**从"逐行扫账"变成"按例外审"**。
![image](assets/dde530c7aa0fff041d8ded4749f4de5a_MD5.jpg)

✦ ✦ ✦
PART 06

## 上手与定制：三步把它跑起来

### 第一步 · 选择运行环境

**在 Cowork 里：**

打开 Settings → Plugins → Add plugin，把仓库 URL 粘进去，从 marketplace 里勾选你要的 agent 和 vertical。

**在 Claude Code 里：**
# 添加 marketplace
claude plugin marketplace add anthropics/claude-for-financial-services

# 必装核心：skill + 全部连接器
claude plugin install financial-analysis@claude-for-financial-services

# 按需挑 agent
claude plugin install pitch-agent@claude-for-financial-services
claude plugin install gl-reconciler@claude-for-financial-services
claude plugin install market-researcher@claude-for-financial-services

# 加垂直 skill 包
claude plugin install investment-banking@claude-for-financial-services
claude plugin install equity-research@claude-for-financial-services

### 第二步 · 接入 Microsoft 365（可选但强推）

仓库里`claude-for-msft-365-install/`是给 IT 管理员用的 add-in 配置工具。

装完之后，Claude 会以原生侧边栏形态出现在 Excel、PowerPoint、Word、Outlook 里：
- **Excel**
——从 filings 和 data feed 建模，跨工作簿审计公式，跑敏感性分析

- **PowerPoint**
——根据底层数据变化自动刷新 deck

- **Word**
——按 firm 模板编辑 credit memo

- **Outlook**
——当 chief of staff，三连邮箱、安排会议、按你语气起草回信

关键的是**上下文跨应用迁移**——你在 Excel 里改的模型，到 PPT 写 deck 时不用重新解释，Claude 知道你在做什么。

Cowork 独立窗口给不了这种体验。

另外这个 add-in 支持**路由到企业自有云**——Vertex AI、AWS Bedrock，或公司内部 LLM gateway，而不是必须走 Anthropic 的 API。**这对监管严格的银行和资管是能不能合规上生产的关键决定项。**

### 第三步 · 让它"像你公司"

README 特意有一节叫 "Making It Yours"。

意思就是这些是 reference template，调出 firm 特色才是关键。可以从四个维度切：
维度

怎么改

换数据源

改`.mcp.json`，指向自家 data warehouse 或内部 CRM

注入 firm context

把术语、流程、格式规范写进对应的 skill markdown

带自家模板

用`/ppt-template`教 Claude 你的品牌 PPT layout

调 agent 作用域

编辑`agents/<slug>.md`，符合你 team 实际跑流程的方式

● ● ●
PART 07

## 价值分析：对不同角色到底意味着什么

角色

最值得用的部分

价值点

投行 Analyst/Associate

Pitch Agent + investment-banking

把 PPT 工艺、CIM/teaser 草稿、buyer list 这些机械活外包，回到判断与定价

卖方研究

Earnings Reviewer + equity-research

财报季把"读 call → 改模型 → 写 note"流水线化，腾出时间做差异化观点

PE 投资团队

private-equity（含`/ic-memo`）

从 sourcing 到 IC 的全流程模板，特别是 unit-economics 和 100 天计划

资管/财富顾问

Meeting Prep + wealth-management

每个客户会议自动 briefing pack，再平衡和 TLH 按规则跑

Fund Admin / 财务

GL Reconciler + Month-End Closer

月末月初的高强度对账与 roll-forward，从全行扫变例外审

Compliance / Ops

KYC Screener

客户尽调材料的解析与 rules-grid 执行，缺口标记后人工复核

### 合规与安全：开源带来的"可审视性"

金融行业用 AI 最怕的是**黑盒**。

这个项目的几个工程选择，对合规团队是友好的：
- **所有逻辑 file-based**
——markdown + YAML，没有编译产物。每一步 skill 做了什么，合规可以直接看代码

- **每个 agent 的 README 都标了 security tier 和 handoff guidance**
——谁能写、谁只能读，写在`agent.yaml`里

- **"AI drafts, humans sign off" 被写进设计**
——agent 不会自动过账、自动下单、自动批 onboarding

- **支持企业自有云路由**
——Vertex / Bedrock / 内部 LLM gateway，数据不必出 firm 边界

- **Apache 2.0 license**
——可商用、可改造、没有专利陷阱

对企业来说，这意味着**不必从零搭建一个 AI agent 框架**——可以拿一份"行业最佳实践"做起点，再叠加自己的 flavor。**这是开源在金融科技领域罕见的"参考实现 + 安全边界"双重价值。**

FINAL

## 从 Demo 走进 Production

过去两年，我们看了太多"用 AI 颠覆华尔街"的 demo。

演示场景里都很美。落到一个真实的 pitch book、一份真实的 earnings note、一次真实的月末对账——处处卡壳。

这次 Anthropic 开源的这套东西不一样。

它不是炫技项目，是**把它和大型买卖方客户合作时积累的真实工作流，转译成可装、可改、可部署的 reference**。

10 个 agent、7 个 vertical、11 个数据连接器。

背后是一套清晰的设计哲学——
让 AI 承担"分析师工作的搬运层"，把判断、定价、风险、关系这些**真正属于人的环节**留给人。

未来 12-24 个月，FSI 从业者面对的现实可能很残酷——

**会用 agent 把流程拼起来的人，和不会用的人，产出能力会拉开数量级的差距。**

这不是要不要学的问题，是早学晚学的问题。

### 建议三件事

- **去仓库点个 star**
，方便后续追更新（Anthropic 在持续迭代，11.2k stars 还会涨）

- **挑一个跟你日常最贴的 agent**
——投行选 Pitch Agent，研究选 Earnings Reviewer，Fund Admin 选 GL Reconciler，在 Claude Code 或 Cowork 里装起来跑一遍

- **把你 firm 的一个真实模板（PPT、IC memo、credit memo）扔进去**
——看输出离"能用"还差多远，差的部分就是你需要二次定制的方向

🔗 仓库地址
github.com/anthropics/financial-services

🔗 Managed Agent 部署文档
managed-agent-cookbooks

金融行业向来是把工艺层做到极致的行业。

pitch deck 的字号对齐、IC memo 的论证结构、月末调整的科目分类——这些工艺背后全是经验。

AI 最适合的，恰恰是把这些工艺标准化、规模化。

从今天起，这件事不再是某个金融科技初创的赌注，而是一份**摆在 GitHub 上、人人可读的开源参考**。

值得每一个金融从业者，认真看一眼。

你们 firm 现在是哪个环节最想交给 AI——
**建模？写 deck？对账？还是 KYC？**
评论区聊聊。

👍点赞↗ 关注转发

— END —


****


****


****


**

![作者头像](assets/f2cc93ca1d989db77eccc9a80ed57f35_MD5.jpg)

微信扫一扫可打开此内容，
使用完整服务