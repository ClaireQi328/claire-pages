---
name: feishu-card-report
description: 飞书卡片报告生成器 - 将研究内容、数据、分析转化为精美的飞书消息卡片，支持多种卡片模板和视觉风格。
argument-hint: "<报告主题或内容>"
version: "2.0.0"
user-invocable: true
allowed-tools: Bash
---

# 飞书卡片报告生成器

将结构化内容转化为飞书消息卡片 JSON，支持多种卡片类型和视觉风格。

## 触发

- `/feishu-card-report 供应商画像：上海得力`
- 自然语言：「帮我做一张飞书卡片」

## 卡片类型

| 类型 | 适用场景 | 模板文件 |
|------|---------|---------|
| `summary` | 执行摘要、概览 | `references/summary.json` |
| `data` | 数据对比、指标 | `references/data.json` |
| `timeline` | 时间线、进度追踪 | `references/timeline.json` |
| `risk` | 风险预警 | `references/risk.json` |
| `profile` | 人/公司画像 | `references/profile.json` |
| `compare` | 多方对比 | `references/compare.json` |
| `progress` | 项目进度 | `references/progress.json` |
| `quote` | 引用、结论 | `references/quote.json` |

## 流程

1. **识别类型**：从输入关键词匹配上表（画像→profile, 风险→risk, 对比→compare, 进度→progress...）
2. **读取模板**：加载 `references/{type}.json`，读取 `references/color-guide.md` 获取颜色/图标规范
3. **填充数据**：将内容填入模板占位符，格式化数据（金额¥X万, 百分比X.X%, 趋势↑/↓）
4. **输出JSON**：生成可直接通过飞书 Webhook 发送的卡片 JSON

## 发送

```bash
curl -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{"msg_type":"interactive","card":'$CARD_JSON'}'
```
