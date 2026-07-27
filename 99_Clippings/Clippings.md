---
created: '2026-07-24'
tags: [Clippings, 供应链]
---

---aliases: [剪藏]
created: 2026-07-07
updated: 2026-07-23
tags: [Clippings, MOC]
description: "网页剪藏与外部内容汇集"
status: final
---

# 📎 Clippings · 外部知识汇集

> [!summary] 外部内容的入口——网页剪藏、深度分析、行业资料
> - **定位**：外部输入的汇集地，区别于原创笔记（其他文件夹）
> - **结构**：剪藏文章（按日期）→ 深度分析（按主题）→ 自动索引（Dataview）
> - **原则**：剪藏不是收藏，是「读完 → 提炼 → 关联」的起点

---

## 📂 深度分析

> 从剪藏材料中提炼的结构化分析

- [[99_Clippings/EP系统分析/EP系统分析|EP 系统分析]] — 小米 EP 采购系统的 CLI 应用、数据字典、CE 核价等深度拆解

---

## 📰 剪藏文章

| 日期 | 标题 | 主题 |
|---|---|---|
| 2025-06-29 | [[2025-06-29 bytedance-agent-9-nonconsensus\|字节 Agent 9 个非共识]] | AI · Agent · 字节方法论 |
| 2026-06-10 | [[2026-06-10 能量消费观\|能量消费观]] | 自我管理 · 能量视角 |
| 2026-06-11 | [[2026-06-11 可支配时间方法论\|可支配时间方法论]] | 时间管理 · 优先级 |

---

## 📊 全量索引

```dataview
TABLE file.ctime AS "收录日期"
FROM "Clippings"
WHERE file.name != "Clippings"
SORT file.ctime DESC
```
