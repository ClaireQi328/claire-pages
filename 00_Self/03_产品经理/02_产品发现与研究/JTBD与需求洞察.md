---
created: 2026-07-10
updated: 2026-07-10
tags: [Self, AI]
status: final
---

> [!summary] JTBD 与需求洞察 — Jobs-to-be-Done 框架
> "People don't want to buy a quarter-inch drill. They want a quarter-inch hole."

**核心要点**：一、核心理念 ｜ 二、Job Story 语法 ｜ 三、三种 Job 类型 ｜ 四、Milkshake 案例 ｜ 五、Functional Job Map ｜ 六、机会评分

# JTBD 与需求洞察 — Jobs-to-be-Done 框架

> "People don't want to buy a quarter-inch drill. They want a quarter-inch hole."
> — Theodore Levitt

> "Users don't buy products. They hire them to do a job."
> — Clayton Christensen

---

## 一、核心理念

### JTBD 是什么？

Jobs-to-be-Done (JTBD) 是一种理解用户需求的框架。它的核心假设是：

| 核心观点 | 说明 |
|----------|------|
| 用户不是"买"产品 | 用户是"雇佣"产品来完成某个任务 |
| 产品是解决方案 | 用户真正需要的是"完成任务" |
| 竞争来自替代方案 | 不是同类产品，而是任何能完成同一任务的东西 |
| 情境决定需求 | 同一个人在不同情境下有不同的"任务" |

### 为什么 JTBD 重要？

| 问题 | 传统方法的局限 | JTBD 的优势 |
|------|---------------|-------------|
| 需求定义 | 基于用户画像、人口统计 | 基于用户想要完成的任务 |
| 竞争分析 | 只看同类产品 | 看所有替代方案（包括"什么都不做"） |
| 创新方向 | 优化现有功能 | 发现未被满足的任务 |
| 产品粘性 | 依赖功能堆叠 | 依赖任务完成度 |

---

## 二、Job Story 语法

### 基本格式

```
When [情境 Situation],
I want to [动机 Motivation],
so I can [期望结果 Outcome].
```

### 示例

| 情境 | 动机 | 期望结果 |
|------|------|----------|
| 当我早上赶时间 | 我想要快速准备早餐 | 我能在路上吃完，不迟到 |
| 当我需要向领导汇报项目进展 | 我想要一键生成报告 | 我能在 5 分钟内完成汇报准备 |
| 当我发现竞品推出了新功能 | 我想要快速评估对我们产品的影响 | 我能在当天给出应对建议 |

### 与传统用户故事对比

| 维度 | 传统用户故事 | Job Story |
|------|-------------|-----------|
| 格式 | As a [角色], I want [功能], so that [价值] | When [情境], I want [动机], so I can [结果] |
| 焦点 | 用户角色 + 功能 | 情境 + 动机 + 结果 |
| 问题 | 容易变成"想要功能"的描述 | 聚焦于用户真正想要完成的任务 |
| 灵活性 | 绑定到特定用户类型 | 情境驱动，跨用户类型 |

**关键区别**：

- 传统用户故事："As a 管理员, I want to export data, so that I can analyze it offline"
- Job Story："When I need to share quarterly results with stakeholders who don't have system access, I want to generate a formatted report, so I can present findings without technical barriers"

---

## 三、三种 Job 类型

### 框架说明

| Job 类型 | 说明 | 示例 |
|----------|------|------|
| **Functional Job** | 实际要完成的任务 | "整理我的待办事项" |
| **Emotional Job** | 使用产品时的感受 | "感觉自己很高效" |
| **Social Job** | 别人如何看待我 | "让同事觉得我很靠谱" |

### 详细拆解

#### Functional Job（功能性任务）

| 维度 | 说明 |
|------|------|
| 定义 | 用户想要完成的实际任务 |
| 特点 | 可观察、可度量 |
| 发现方法 | 观察用户行为、分析任务流程 |
| 示例 | "发送一份专业的报价单给客户" |

#### Emotional Job（情感性任务）

| 子类型 | 说明 | 示例 |
|------|------|------|
| **个人情感** | 使用时的感受 | "感觉自己掌控全局" |
| **期望情感** | 想要达到的状态 | "感到安心、自信" |
| **避免情感** | 想要避免的感受 | "不想感到焦虑、失控" |

#### Social Job（社会性任务）

| 维度 | 说明 |
|------|------|
| 定义 | 用户希望别人如何看待自己 |
| 特点 | 隐性需求，用户通常不会直接表达 |
| 发现方法 | 深度访谈、情境观察 |
| 示例 | "让领导觉得我工作能力强" |

### 三种 Job 的关系

```
Functional Job（基础）
  └── Emotional Job（体验层）
        └── Social Job（社交层）
```

**洞察**：很多产品的差异化来自于满足 Emotional 和 Social Job，而不仅仅是 Functional Job。

---

## 四、Milkshake 案例（Christensen 经典案例）

### 背景

一家快餐连锁店想要提升 Milkshake（奶昔）的销量。传统做法是：调研用户口味偏好，调整配方。

### JTBD 分析

**发现**：40% 的 Milkshake 在早上 8 点前售出。

**深入访谈发现**：

| 发现 | 说明 |
|------|------|
| 购买者 | 通勤的上班族 |
| Job | 在开车上班的路上找点东西吃 |
| 竞争对手 | 香蕉、面包圈、速食早餐 |
| 为什么选 Milkshake | 浓稠、一杯能喝很久、不脏手 |

**Job Story**：

```
When I'm driving to work and need something to eat,
I want something that keeps me occupied and full,
so I can arrive at work without being hungry and not make a mess in the car.
```

### 解决方案

| 改进 | 说明 |
|------|------|
| 更浓稠 | 让 Milkshake 喝得更久（满足"打发时间"的 Job） |
| 加果粒 | 增加惊喜感（满足 Emotional Job） |
| 预付系统 | 让通勤者快速取餐（优化购买体验） |

### 关键教训

| 传统做法 | JTBD 做法 |
|----------|-----------|
| 调研口味偏好 | 理解用户在什么情境下需要 Milkshake |
| 与竞品（其他 Milkshake）竞争 | 与香蕉、面包圈、速食早餐竞争 |
| 优化产品属性 | 优化 Job 完成度 |

---

## 五、Functional Job Map（功能性任务地图）

### 8 步任务流程

| 步骤 | 说明 | 核心问题 |
|------|------|----------|
| 1. **Define** | 确定任务目标 | 用户想要完成什么？ |
| 2. **Locate** | 找到所需输入 | 用户需要什么信息/资源？ |
| 3. **Prepare** | 准备执行环境 | 用户需要什么准备？ |
| 4. **Confirm** | 确认准备就绪 | 用户如何确认可以开始？ |
| 5. **Execute** | 执行核心任务 | 用户如何完成任务？ |
| 6. **Monitor** | 监控执行状态 | 用户如何确认进展？ |
| 7. **Modify** | 调整执行方式 | 用户遇到问题时如何调整？ |
| 8. **Conclude** | 完成并收尾 | 用户如何确认任务完成？ |

### 示例：招聘新员工

| 步骤 | 具体任务 | 产品机会 |
|------|----------|----------|
| 1. Define | 确定需要招聘的岗位和要求 | 岗位需求模板、能力模型工具 |
| 2. Locate | 找到候选人来源 | 招聘渠道分析、人才库搜索 |
| 3. Prepare | 准备 JD、面试问题 | JD 生成器、面试题库 |
| 4. Confirm | 确认候选人符合基本要求 | 简历筛选工具、初筛标准 |
| 5. Execute | 进行面试、评估 | 面试评估表、协作评分 |
| 6. Monitor | 跟踪招聘进度 | 招聘看板、进度提醒 |
| 7. Modify | 调整招聘策略 | 数据分析、A/B 测试 JD |
| 8. Conclude | 发放 Offer、入职 | Offer 模板、入职流程自动化 |

### 使用 Job Map 的价值

| 价值 | 说明 |
|------|------|
| 发现隐性需求 | 用户不会说"我需要监控招聘进度"，但 Job Map 会提示这一步 |
| 找到创新机会 | 每一步都可能有未被满足的需求 |
| 竞争差异化 | 在竞品忽略的步骤上建立优势 |
| 产品规划 | 按 Job 步骤组织产品功能 |

---

## 六、机会评分（Opportunity Score）

### 计算公式

```
Opportunity Score = Importance - Satisfaction
```

| 维度 | 评分范围 | 说明 |
|------|----------|------|
| Importance | 1-10 | 用户认为这个 Job 有多重要 |
| Satisfaction | 1-10 | 用户对当前解决方案的满意度 |

### 评分解读

| Opportunity Score | 解读 | 行动建议 |
|-------------------|------|----------|
| > 5 | 高机会 | 强烈关注，优先投入 |
| 3-5 | 中等机会 | 值得关注，合理投入 |
| 0-3 | 低机会 | 保持现状，持续观察 |
| < 0 | 无机会 | 不值得投入 |

### 评估矩阵

| Job | Importance | Satisfaction | Opportunity Score | 优先级 |
|-----|------------|--------------|-------------------|--------|
| 快速生成报告 | 9 | 3 | **6** | 🔴 高 |
| 数据可视化 | 7 | 5 | **2** | 🟡 中 |
| 自动化工作流 | 8 | 7 | **1** | 🟢 低 |
| 移动端访问 | 6 | 2 | **4** | 🟡 中 |

### 数据收集方法

| 方法 | 说明 | 适用场景 |
|------|------|----------|
| **用户访谈** | 深入了解重要性和满意度 | 探索性研究 |
| **问卷调查** | 量化重要性和满意度 | 大样本验证 |
| **行为数据** | 通过使用频率推断重要性 | 已有产品 |
| **竞品分析** | 通过竞品满意度推断机会 | 市场分析 |

---

## 七、Intercom 的 JTBD 实践

### Intercom 如何使用 JTBD

| 实践 | 说明 |
|------|------|
| **Job Stories 替代 User Stories** | 产品需求用 Job Story 格式描述 |
| **Job-based 竞争分析** | 分析所有能完成同一 Job 的产品 |
| **Job-based 路线图** | 按 Job 组织产品路线图 |
| **Job-based 定价** | 按 Job 的价值定价 |

### Intercom 的 Job Map 示例

**核心 Job**：与客户建立关系

| Job 步骤 | Intercom 产品 |
|----------|---------------|
| 1. Define | 确定需要与哪些客户建立关系 |
| 2. Locate | 找到客户在哪里（网站、App、邮件） |
| 3. Prepare | 准备沟通内容和渠道 |
| 4. Confirm | 确认客户在线且可接触 |
| 5. Execute | 发送消息、开始对话 |
| 6. Monitor | 监控客户响应和参与度 |
| 7. Modify | 根据客户反馈调整沟通策略 |
| 8. Conclude | 完成对话、记录结果 |

### Intercom 的关键洞察

| 洞察 | 说明 |
|------|------|
| **竞争来自替代方案** | 不只是 Zendesk，还有邮件、电话、甚至"什么都不做" |
| **Job 比功能重要** | 用户不想要"聊天功能"，他们想要"与客户建立关系" |
| **Emotional Job 是差异化关键** | "感觉自己很专业"、"让客户觉得被重视" |

---

## 八、JTBD 访谈技巧

### 访谈框架

| 阶段 | 目标 | 关键问题 |
|------|------|----------|
| **回溯** | 找到购买/使用的触发点 | "你还记得第一次想要解决这个问题是什么时候？" |
| **情境** | 理解使用情境 | "当时你在做什么？周围有什么人？" |
| **竞争** | 发现替代方案 | "在找到这个产品之前，你是怎么解决这个问题的？" |
| **决策** | 理解决策过程 | "是什么让你最终决定选择这个产品？" |
| **使用** | 了解使用体验 | "使用过程中有什么让你印象深刻的地方？" |

### 避免的陷阱

| 陷阱 | 说明 | 正确做法 |
|------|------|----------|
| 问功能需求 | "你想要什么功能？" | 问任务："你想要完成什么？" |
| 问满意度 | "你满意吗？" | 问 Job 完成度："这个产品帮你完成了任务吗？" |
| 引导性问题 | "你觉得这个功能好用吗？" | 开放性问题："你通常是怎么做的？" |
| 关注产品 | "你为什么选择我们的产品？" | 关注 Job："你当时想要完成什么？" |

---

## 九、JTBD 与其他框架的整合

### JTBD + 用户故事地图

| 整合方式 | 说明 |
|----------|------|
| Job 作为骨架 | 用 Job Map 步骤组织用户故事地图的主干 |
| Job Story 作为用户故事 | 用 Job Story 替代传统用户故事格式 |
| Job-based 优先级 | 用 Opportunity Score 评估优先级 |

### JTBD + Design Thinking

| 阶段 | JTBD 贡献 |
|------|-----------|
| Empathize | 通过 JTBD 访谈深入理解用户 |
| Define | 用 Job Story 定义问题 |
| Ideate | 基于 Job 步骤探索解决方案 |
| Prototype | 验证 Job 完成度 |
| Test | 度量 Job 完成效率和满意度 |

### JTBD + Lean Startup

| 阶段 | JTBD 贡献 |
|------|-----------|
| Build | 基于 Job 需求构建 MVP |
| Measure | 度量 Job 完成度 |
| Learn | 学习用户如何完成 Job |

---

## 十、实施清单

### 第 1 步：识别 Job

- [ ] 访谈 10+ 位目标用户
- [ ] 提取 Functional、Emotional、Social Job
- [ ] 用 Job Story 语法记录

### 第 2 步：绘制 Job Map

- [ ] 为每个核心 Job 绘制 8 步 Job Map
- [ ] 识别每一步的痛点和机会
- [ ] 评估当前解决方案的覆盖度

### 第 3 步：评估机会

- [ ] 对每个 Job 评估 Importance 和 Satisfaction
- [ ] 计算 Opportunity Score
- [ ] 按优先级排序

### 第 4 步：设计解决方案

- [ ] 为高优先级 Job 设计解决方案
- [ ] 用 Job Story 语法描述预期结果
- [ ] 设计实验验证 Job 完成度

### 第 5 步：度量与迭代

- [ ] 定义 Job 完成度指标
- [ ] 持续度量和优化
- [ ] 定期回顾 Job 变化

---

## 十一、参考资源

| 资源 | 类型 | 说明 |
|------|------|------|
| *Competing Against Luck* | 书 | Clayton Christensen 的 JTBD 理论 |
| *When Coffee and Kale Compete* | 书 | Alan Klement 的 JTBD 实践指南 |
| Intercom on Jobs-to-be-Done | 电子书 | Intercom 的 JTBD 实践 |
| JTBD.info | 网站 | JTBD 资源汇总 |
| Bob Moesta 的 YouTube | 视频 | JTBD 访谈技巧 |

---

> 💡 **行动建议**：下次做用户访谈时，尝试用 Job Story 语法记录。不要问"你想要什么功能"，而是问"你当时想要完成什么任务"。JTBD 的核心洞察来自于理解用户的**任务**，而不是**功能需求**。

## 🔗 产品运营延伸

- [[09_产品运营/用户运营|用户运营]] — 用户画像与需求洞察在运营中的应用
