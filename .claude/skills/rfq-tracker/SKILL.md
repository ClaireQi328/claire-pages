---
name: rfq-tracker
description: 采购RFQ进度管理 - 输入RFQ编码或SOR编码，自动查询预选供应商清单、报价状态、物流确认状态，输出诊断卡片。
argument-hint: "<rfq-code|sor-code>"
version: "2.0.0"
user-invocable: true
allowed-tools: Bash
---

# 采购 RFQ 进度追踪

查询 RFQ/SOR 编码的全流程进度，三步串行诊断，输出结构化卡片。

## 触发

- `/rfq-tracker RFQ12345` 或 `/rfq-tracker SOR67890`
- 自然语言：「查一下这个 RFQ 的进度」

## 参数识别

- 以 `RFQ/rfq` 开头 → RFQ 编码，`--rfq-code` 传参
- 以 `SOR/sor` 开头 → SOR 编码，`--sor-code` 传参
- 其他 → 提示输入正确格式

## 执行

**Step 1** — 查询预选供应商清单
```bash
dx-ep sor bidderaf list --rfq-code <编码> --sor-code <编码>
```
提取：供应商数量、审批状态、审批人列表、rfq-id（用于 Step 2）

**Step 2** — 查询 RFQ 当前轮次
```bash
dx-ep rfq supplier list --rfq-id <rfq-id>
```
rfq-id 从 Step 1 获取，获取不到则用用户输入编码。提取：当前轮次、已报价/未报价供应商。

**Step 3** — 查询物流信息
```bash
dx-ep rfq logistics list --sor-code <code> --rfq-code <code>
```
提取：物流信息完整性、审批状态。

## 输出

```
## RFQ 进度诊断：{编码}

**状态概览**：{一句话总结，如"2/3 步骤正常，物流确认待审批"}

| 步骤 | 状态 | 详情 |
|------|------|------|
| 预选供应商清单 | ✅/❌ | {供应商数}家，审批{状态} |
| RFQ 报价状态 | ✅/⚠️ | 第{N}轮，{已报价}/{未报价} |
| 物流确认 | ✅/⚠️ | {完整/不完整}，审批{状态} |

**建议**：{异常项的下一步操作}
```

每步查询失败不阻断后续步骤，标记为「数据暂不可用」继续。异常状态标记：`不存在/未找到`→❌，`待审批/未完成/null`→⚠️。
