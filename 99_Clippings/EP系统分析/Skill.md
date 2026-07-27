---
created: 2026-07-16
updated: 2026-05-25
tags:
  - Clippings
  - 采购
source: "https://mi.feishu.cn/wiki/UCDzdZjcCofT8sxFtqqcYpqOn9b"
status: draft
---
> [!summary] Skill
> - **核心**：[Agent Skill规范、构建与设计模式-阿里云开发者社区](https://developer.aliyun.com/article/1734589) 解决问题： 1. 什么是好的skill？包


# Skill

[Agent Skill规范、构建与设计模式-阿里云开发者社区](https://developer.aliyun.com/article/1734589)

解决问题：

1. 什么是好的skill？包含哪些内容？
2. skill怎么写？
3. 如何测评一个skill的好坏？

skill不是长prompt

规范结构、分层加载机制、触发逻辑

上下文膨胀，

目录

指令

资源

装20个skill，初始加载只花20tokens，比单体节省90%上下文

## skill编写流程

![[EP系统分析_db7f67db1473022b2b26540f8fa62c79_MD5.jpg]]

![[EP系统分析_53f75d47e707c1a7180cffbfa75749d9_MD5.jpg]]

## skill编写规范

![[EP系统分析_54a212c32a4351fcb19df5d0dc2a25b1_MD5.jpg]]

## skill评价体系