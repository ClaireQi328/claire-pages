---
name: datum-skill-installer
name_zh: 数据工场 Skill 安装引导器
version: 1.0.0
description: 检测 Datum CLI 与 Skills 安装状态，引导执行 pipx 安装与 skill.install 命令，并将元数据、SQL、集成等需求路由至对应正式 skill。Use when 用户询问如何安装 datum skills、遇到 command not found 报错、或需要初始化数据工场开发环境。
examples:
  - 帮我安装数据工场的 skills
  - 调用 datum-sql 时报错 skill 未找到，该怎么办
  - 帮我初始化一下数据工场的 Agent 开发环境
scope: cn
not_for:
  - 不执行具体的 SQL 查询、建表或数据同步操作
  - 不处理已安装环境下的日常数据开发任务
  - 不支持非 Xiaomi 数据工场环境的配置
depends_on:
  - datum-metadata
  - datum-sql
  - datum-integration
  - datum-kestra
  - datum-workspace
---

# Datum Skills 安装引导

> **Datum Skills 是什么？**
> Xiaomi 数据工场 Agent skills 集合（兼容遵循 [agentskills.io](https://agentskills.io/) 开放规范的其它 runtime），覆盖元数据管理、数据集成、AI 工作流（Kestra）和数据查询等场景。

> **使用须知：人机协作原则**
> Agent 负责执行操作，**执行人负责决策和最终确认**。所有涉及数据写入、建表、作业上线等不可逆操作，请确认后再授权执行，操作结果由**操作发起人负责。**

---

## 触发条件

满足以下任一场景时使用本 skill：

- 用户想使用数据工场 / Datum 能力（元数据、建表、SQL 查询、数据集成、Kestra 工作流），但尚未安装相关 skills
- 用户询问"怎么安装 datum skills"、"装一下数据工场的 skill"、"datum 怎么用"
- 调用 datum 系列能力时报错 `command not found`、`skill 未安装`、`sol-datum 未找到`
- 用户需要初始化数据工场开发环境

**非触发场景**（应直接使用对应正式 skill）：

- 已安装且要执行查询 / 建表 / 同步 / 工作流 → 直接使用 datum-metadata / datum-sql / datum-integration / datum-kestra

---

## 状态机（加载本 skill 后必须按序执行）

```
Step 0：检测是否已安装
  └─ 检查 datum CLI 是否可用：
       sol datum:// skill.check    （或 datum --help）
     ┌─ 命令存在且返回正常 → 视为「已安装」→ 跳到 Step 2
     └─ command not found / 未找到 → 视为「未安装」→ 进入 Step 1

Step 1：引导安装（仅未安装时执行）
  └─ 向用户展示安装步骤（见下方「安装与配置」），等待用户授权执行
       1. 确认前置条件：Python >= 3.12 & pipx
       2. 安装 Datum CLI（pipx install sol-datum ...）
       3. 安装 Datum Skills（sol datum:// skill.install）
     安装命令退出码 0 → 进入 Step 2
     安装失败          → 显示错误输出并停止，不要继续业务操作

Step 2：路由到正式 skill（关键）
  └─ ⚠️ 本 skill 不执行任何业务操作。
     检测到已安装后，必须提示用户/Agent：
       "Datum Skills 已安装，请使用正式安装的 datum-* skills 进行操作。"
     并根据用户意图路由到对应正式 skill：
       - 元数据查询 / 建表 / 表结构    → datum-metadata
       - SQL 查询 / 写入 / 删除 / DDL  → datum-sql
       - 集成作业（实时/离线同步）      → datum-integration
       - Kestra 工作流开发 / 运维       → datum-kestra
       - workspace / 队列 / quota 查询  → datum-workspace
     正式 skill 安装在 ~/.agents/skills/，会在首次加载时执行自己的前置检查。
```

> **Anti-pattern（禁止）**：不要用本 skill 直接拼 `sol datum://` 命令去查数据、建表或创建作业。本 skill 的职责到「确认已安装并路由」为止。实际操作一律交给正式安装的 datum-* skills，由它们的前置检查保证版本、认证与连通性正确。

---

## 一. 安装与配置

### 前置条件

Python >= 3.12 & pipx

### 安装 Datum CLI

```bash
pipx install sol-datum --include-deps --index-url https://pkgs.d.xiaomi.net/artifactory/api/pypi/pypi-virtual/simple
```

### 安装 Datum Skills

`Datum CLI` 内置了全套 datum skills，执行以下命令进行安装：

```bash
sol datum:// skill.install
```

安装的 Datum Skills 如下：

| **skill** | **技能描述** | **对应能力** |
|-|-|-|
| sol / datum-sol | 底层框架和工场适配器的技能协议和约束 | 与工场无关，主要用于让 Agent 理解工具的用法和相关注意事项 |
| datum-workspace | 查询 token 所属的 workspace 信息，负责人和计算队列等 | 管理-空间配置（只读操作） |
| datum-metadata | 元数据管理和查询，涉及 catalog，db，table 的查询，以及表相关的操作（建表，获取分区等） | 资源-表管理/库管理 |
| datum-integration | 集成作业（实时/离线）全生命周期管理，涉及创建、修改、提交、上线等操作 | 开发-实时开发/离线开发-实时集成/离线集成 |
| datum-kestra | AI 数据开发工作流程的全生命周期管理，涉及开发（flow/文件/kv）、运维（执行/日志/触发器/告警）等操作 | 开发-AI 数据开发，调用 Kestra 服务 |
| datum-sql | SQL 相关操作，通过 SQL 对表进行查询、写入和删除等 | 查询-数据查询（ad-hoc），调用 Kyuubi 服务 |

> 执行命令会安装 Datum Skills 到 `~/.agents/skills/`，同时在 `~/.claude/skills` 中建立对应 skill 的软链接。如果使用的 Agent 存在其他自定义的 Skill 安装目录，可手动拷贝 / 软链接 `~/.agents/skills/` 到该目录。
> 注意：当前提供的 Skill 只是单点的能力映射和多个流程的组合，并不能完全映射为数据工场 UI 上的产品功能，以上 "对应能力" 部分仅供参考，实际能力需自行确认。

### 开始使用

在执行任意操作前，Skill 被首次加载时都会执行前置检查

包括版本确认、底层工具可用性、认证信息配置情况和网络连通性校验，前置检查通过后即可正常使用

> 首次使用时，如果认证配置为空，Agent 会自动询问关于 工作空间 ID、Region（区域）和 Token 的信息
>
> 上述信息请从数据工场 UI 上进行获取 https://data.mioffice.cn/workspace/#/home

---

## 二. 应用场景

| **场景** | **示例 Prompt** | **涉及 Skill** |
|-|-|-|
| 数据查询 | 帮我查询一下服务的审计日志表，从 2026-04-25 到 2026-05-25 的，并看看是否有异常值 | `datum-sql` |
| 数据分析 | 帮我看 tmp 库下订单相关的表，分析 2026-05-25 的订单量相比前一天的变化 | `datum-metadata` `datum-sql` |
| 元数据探查与建表 | 帮我看看 iceberg catalog 下的 tmp 库下有哪些表；在 tmp 库创建一张 Iceberg 表，按天分区 | `datum-metadata` |
| 数据加工 | 联合三张表的信息创建工作流进行数据加工，约定每天凌晨 2 点执行 | `datum-kestra` `datum-metadata` |
| 外部数据同步 | 将外部 MySQL 表同步为 Paimon 格式存储，加个 ods 前缀，实时同步 | `datum-integration` `datum-metadata` |
