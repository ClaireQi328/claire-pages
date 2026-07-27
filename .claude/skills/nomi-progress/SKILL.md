---
name: nomi-progress
description: 车型定点进度查询 - 输入车型项目名、RFQ编码或供应商名称，自动查询定点申请进度、审批状态、报价比价情况，输出结构化进度卡片。
argument-hint: "<vehicle-model|rfq-code|supplier-name>"
version: "2.0.0"
user-invocable: true
allowed-tools: Bash
---

# 车型定点进度查询

查询车型/RFQ/供应商维度的定点申请进度，输出结构化进度卡片。

## 触发

- `/nomi-progress Modena` / `/nomi-progress RFQ-20250314-002` / `/nomi-progress 上海得力`
- 自然语言：「查一下 Modena 车型的定点进度」

## 参数识别

- 以 `RFQ/rfq/C-RFQ/D-RFQ` 开头 → RFQ 编码
- 包含车型关键词（Modena、KUNLUN、SU7 等） → 车型项目名
- 其他中文 → 供应商名称

## 执行

**Step 1** — 查询定点申请列表
```bash
# 按RFQ编码
dx-ep nomi af list --rfq-code <编码> -f json
# 按供应商名称
dx-ep nomi af list --supplier-name <名称> -f json
# 按车型项目名
dx-ep nomi af list --rfq-name <名称> -f json
```
提取：totalCount、各记录的 rfqCode/rfqName/rfqType/status/orgName/auditDate/amount/disableCreateMsg

**Step 2** — 汇总定点进度
- 按 RFQ 分组，按状态统计（PASS✅/DRAFT⚠️/REJECT❌），按日期倒序
- RFQ类型映射：FIXED_PLANT=正常定点, FAST_NOMI=快速定点, CWO=颜色件变更, DESIGN_CHANGE=设计变更, LPC=物流价格变更
- REJECT 的 disableCreateMsg 提取驳回原因；DRAFT 标记待审批

**Step 3（可选）** — 用户要求详情时：
```bash
dx-ep rfq info list --rfq-code <rfq-code> -f json
```

## 输出

```
## 车型定点进度：{查询条件}

**状态概览**：{一句话总结，如"共61条，45条已通过，10条待审批"}

| RFQ编码 | 供应商 | 状态 | 审批日期 | 金额 |
|---------|--------|------|----------|------|

**状态统计**：✅ PASS {N}条/{X}% | ⚠️ DRAFT {N}条 | ❌ REJECT {N}条

**需关注项**：{DRAFT待审批 + REJECT驳回原因}
```
