---
created: '2026-07-24'
tags: [Xiaomi, 数据]
---

---created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 采购, 数据]
status: draft
---

> [!summary] ods_pp_quote_part_process_status 报价费用项流程状态表
> - **核心**：跟踪每个报价中各费用项（材料/制造/模具/研发/物流/样件/管理/BOM/VSM）的提交和审核状态
> - **要点**：主键 pp_quote_part_process_status_id；9 类费用项状态标志位；BOM/VSM 版本号与原始 JSON 数据；状态流转（未提交→已提交→已审核/已驳回）
> - **关联**：[[dwd_rfq_quotes_base_info 报价基础信息宽表]] · [[ods_qo_part_comprehensive_info 报价明细综合信息表]]

# ods_pp_quote_part_process_status 报价费用项流程状态表

> **表名**: ods_pp_quote_part_process_status
> **表类型**: ODS 操作数据表
> **用途**: 跟踪每个报价中各费用项的提交和审核状态

## 字段注释

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| pp_quote_part_process_status_id | 流程状态主键 | 唯一标识 |
| pp_rfq_quotes_info_id | 报价信息ID | 关联报价信息表 |
| material_process_flag | 材料费用状态 | 未提交/已提交/已审核/已驳回 |
| manufacture_cost_flag | 制造费用状态 | 未提交/已提交/已审核/已驳回 |
| mold_cost_flag | 模具费用状态 | 未提交/已提交/已审核/已驳回 |
| rd_cost_flag | 研发费用状态 | 未提交/已提交/已审核/已驳回 |
| logistics_cost_flag | 物流费用状态 | 未提交/已提交/已审核/已驳回 |
| sample_cost_flag | 样件费用状态 | 未提交/已提交/已审核/已驳回 |
| management_cost_flag | 管理费用状态 | 未提交/已提交/已审核/已驳回 |
| svc_bom_status | BOM提交状态 | 未提交/已提交/已审核/已驳回 |
| svc_vsm_status | VSM提交状态 | 未提交/已提交/已审核/已驳回 |
| svc_bom_json | BOM数据 | 供应商提交的BOM原始JSON |
| svc_vsm_json | VSM数据 | 供应商提交的报价明细原始JSON |
| svc_bom_version_no | BOM版本号 | v1/v2/v3... |
| svc_vsm_version_no | VSM版本号 | v1/v2/v3... |
| created_by | 创建人 | 操作人 |
| create_date | 创建日期 | 创建时间 |
| updated_by | 更新人 | 操作人 |
| update_date | 更新日期 | 更新时间 |
| is_deleted | 是否已删除 | 软删除标记 |
| deleted_by | 删除人 | 操作人 |
| delete_date | 删除日期 | 删除时间 |
| opt_counter | 操作计数器 | 变更版本号 |

## 主键与关系

- 主键: pp_quote_part_process_status_id
- 外键: pp_rfq_quotes_info_id → dwd_rfq_quotes_base_info

## 费用项状态流转

未提交 → 已提交 → 已审核/已驳回
