---
created: '2026-07-24'
tags: [Xiaomi, 数据]
---

---created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 采购, 数据]
status: draft
---

> [!summary] dwd_rfq_quotes_base_info 报价基础信息宽表
> - **核心**：报价信息的 DWD 层宽表，关联 RFQ 与报价，支撑报价查询和统计分析
> - **要点**：主键 pp_rfq_quotes_info_id；包含报价基础信息、RFQ 关联信息、报价轮次、BOM/VSM 状态四大类字段；准实时更新；报价状态流转（待提交→已提交→已审核/已驳回→已过期）
> - **关联**：[[ods_pp_rfq 询报价主表]] · [[ods_pp_rfq_round 询报价轮次表]] · [[供应商报价拆解进度查询]]

# dwd_rfq_quotes_base_info 报价基础信息宽表

> **表名**: iceberg_nc4cloudprc_hadoop.ep.dwd_rfq_quotes_base_info
> **表类型**: DWD 数据仓库明细层（Data Warehouse Detail）
> **用途**: 报价信息的轻量级宽表，关联 RFQ 与报价，支撑报价查询和统计分析
> **更新频率**: 准实时 / 随报价提交同步

---

## 字段注释

### 一、报价基础信息

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| pp_rfq_quotes_info_id | 报价信息主键 | String | 报价单唯一标识 |
| pp_rfq_item_id | 报价项目ID | String | 报价明细行项目ID |
| md_supplier_id | 供应商ID | String | 关联供应商主数据（外键） |
| qi_status | 报价状态 | String | 待提交/已提交/已审核/已驳回/已过期 |
| supplier_submit_date | 供应商提交日期 | String | 供应商提交报价的时间 |

### 二、关联 RFQ 信息

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| pp_rfq_id | RFQ主键 | String | 关联询价单主键（外键） |
| rfq_code | RFQ编号 | String | 询价单编号，如 RFQ-2026-089 |
| rfq_name | RFQ名称 | String | 询价单名称 |
| rfq_type | RFQ类型 | String | 标准/竞争性谈判/单一来源/紧急 |
| rfq_status | RFQ状态 | String | 草稿/已发布/报价中/已完成/已取消 |

### 三、报价轮次

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| pp_rfq_round_id | 报价轮次ID | String | 当前报价轮次标识 |
| round_no | 轮次编号 | Integer | 第几轮报价（1/2/3...） |
| round_status | 轮次状态 | String | 进行中/已完成/已取消 |

### 四、BOM 与 VSM 状态

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| svc_bom_status | BOM状态 | String | 供应商BOM提交状态：未提交/已提交/已审核 |
| svc_vsm_status | VSM状态 | String | 供应商报价明细状态：未提交/已提交/已审核 |
| bom_self_decomposed | BOM是否自拆解 | Boolean | 供应商是否自行完成了BOM成本拆解 |

---

## 主键与关系

| 类型 | 字段 | 关联表 | 说明 |
|------|------|--------|------|
| 主键 | pp_rfq_quotes_info_id | — | 报价信息唯一标识 |
| 外键 | md_supplier_id | dim_md_supplier | 关联供应商主数据 |
| 外键 | pp_rfq_id | ods_pp_rfq | 关联RFQ主表 |
| 外键 | pp_rfq_round_id | ods_pp_rfq_round | 关联报价轮次 |

---

## 报价状态流转

```
供应商创建报价 → 待提交(draft)
       ↓
供应商提交 → 已提交(submitted)
       ↓
采购员审核 → 已审核(approved) / 已驳回(rejected)
       ↓
报价截止 → 已过期(expired)
```

---

## 常用查询场景

| 场景 | 关键字段 | 示例 |
|------|----------|------|
| 查找待审核报价 | qi_status | WHERE qi_status = 'submitted' |
| 按RFQ查所有报价 | pp_rfq_id | WHERE pp_rfq_id = 'XXX' |
| 按供应商查报价 | md_supplier_id | WHERE md_supplier_id = 'XXX' |
| 查找未提交BOM的报价 | svc_bom_status | WHERE svc_bom_status = '未提交' |
| 查找第N轮报价 | round_no | WHERE round_no = 2 |
| 查找已过期报价 | qi_status | WHERE qi_status = 'expired' |
| 统计各状态报价数量 | qi_status | GROUP BY qi_status |
