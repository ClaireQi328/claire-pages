---
created: '2026-07-24'
tags: [Xiaomi, 数据]
---

---created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 采购, 数据]
status: draft
---

> [!summary] ods_pp_rfq_item 询报价行项目表
> - **核心**：RFQ 下每个报价行项目（零件/分总成）的 ODS 表，包含目标价、定点信息、产量排期等
> - **要点**：主键 pp_rfq_item_id；三种目标价口径（标准/ZBE/采购）；关联零件主数据、定点供应商、产品线等；支持多工厂报价与定点决策
> - **关联**：[[ods_pp_rfq 询报价主表]] · [[ods_pp_rfq_round 询报价轮次表]] · [[ods_qo_part_comprehensive_info 报价明细综合信息表]]

# ods_pp_rfq_item 询报价行项目表

> **表名**: iceberg_nc4cloudprc_hadoop.ep.ods_pp_rfq_item
> **表类型**: ODS 操作数据表（Operational Data Store）
> **用途**: RFQ 下的每个报价行项目（零件/分总成），包含目标价、定点信息等
> **更新频率**: 准实时 / 随报价和定点操作更新

---

## 字段注释

### 一、行项目基础信息

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| pp_rfq_item_id | 行项目主键 | String | 报价行项目唯一标识 |
| pp_rfq_id | RFQ主键 | String | 关联询价单（外键） |
| pp_pr_item_id | PR行项目ID | String | 关联的采购申请行项目 |
| item_name | 行项目名称 | String | 零件/分总成名称 |
| item_desc | 行项目描述 | String | 详细说明 |
| remark | 备注 | String | 补充信息 |
| status | 行项目状态 | String | 活跃/冻结/取消 |

### 二、目标价信息

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| target_develop_price | 目标开发价 | Decimal | 开发费用目标价（元） |
| target_tooling_price | 目标模具价 | Decimal | 模具费用目标价（元） |
| target_total_price | 目标总价 | Decimal | 零件目标总价（元） |
| zbe_target_develop_price | ZBE目标开发价 | Decimal | ZBE口径开发费目标价 |
| zbe_target_tooling_price | ZBE目标模具价 | Decimal | ZBE口径模具费目标价 |
| zbe_target_total_price | ZBE目标总价 | Decimal | ZBE口径目标总价 |
| pur_target_total_price | 采购目标总价 | Decimal | 采购口径目标总价 |
| pur_target_develop_price | 采购目标开发价 | Decimal | 采购口径开发费 |
| pur_target_tooling_price | 采购目标模具价 | Decimal | 采购口径模具费 |
| zbe_factory_price | ZBE出厂价 | Decimal | ZBE口径出厂价 |

**目标价口径说明**：

| 口径 | 说明 | 用途 |
|------|------|------|
| target | 标准目标价 | 内部成本管控基准 |
| zbe | ZBE口径 | 与特定供应商结算口径 |
| pur | 采购口径 | 采购部门执行口径 |

### 三、产量与排期

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| total_output | 总产量 | Integer | 该零件预计总生产数量 |
| suggest_start_date | 建议开始日期 | String | 供应商建议量产开始日期 |
| suggest_end_date | 建议结束日期 | String | 供应商建议量产结束日期 |

### 四、定点信息

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| nominated_supplier_id | 定点供应商ID | String | 已定点的供应商ID |
| nominate_date | 定点日期 | String | 定点决策日期 |

### 五、关联关系

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| pp_rfq_round_id | 报价轮次ID | String | 关联报价轮次 |
| md_part_id | 零件主数据ID | String | 关联零件主数据 |
| pp_design_requirement_id | 设计需求ID | String | 关联设计需求 |
| pp_design_req_item_id | 设计需求行ID | String | 设计需求行项目 |
| pp_sa_pr_item_id | SA PR行项目ID | String | 关联SA采购申请 |
| target_price_record_id | 目标价记录ID | String | 关联目标价记录表 |
| md_price_id | 价格主数据ID | String | 关联价格主数据 |
| product_line_id | 产品线ID | String | 关联产品线 |
| brand_id | 品牌ID | String | 关联品牌 |
| sop_part_task_id | SOP零件任务ID | String | 关联SOP任务 |
| supplier_id | 供应商ID | String | 供应商标识 |
| rec_id | 记录ID | String | 关联记录 |
| rec_type_id | 记录类型ID | String | 记录类型 |
| old_mcpr_id | 旧MCPR ID | String | 历史MCPR记录ID |

### 六、工厂信息

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| plant_id | 工厂ID | String | 目标工厂 |
| sup_plant_id | 供应商工厂ID | String | 供应商生产工厂 |

### 七、数据管理

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| round_no | 轮次编号 | Integer | 报价轮次 |
| opt_counter | 操作计数器 | Integer | 变更版本号 |
| created_by | 创建人 | String | 创建操作人 |
| updated_by | 更新人 | String | 更新操作人 |
| update_date | 更新日期 | String | 更新时间 |
| deleted_by | 删除人 | String | 删除操作人 |
| delete_date | 删除日期 | String | 删除时间 |
| is_deleted | 是否已删除 | Boolean | 软删除标记 |

---

## 主键与关系

| 类型 | 字段 | 关联表 | 说明 |
|------|------|--------|------|
| 主键 | pp_rfq_item_id | — | 行项目唯一标识 |
| 外键 | pp_rfq_id | ods_pp_rfq | 关联RFQ主表 |
| 外键 | pp_rfq_round_id | ods_pp_rfq_round | 关联报价轮次 |
| 外键 | md_part_id | dim_md_part | 关联零件主数据 |
| 外键 | nominated_supplier_id | dim_md_supplier | 关联定点供应商 |
| 外键 | supplier_id | dim_md_supplier | 关联供应商 |
| 外键 | product_line_id | dim_product_line | 关联产品线 |

---

## 常用查询场景

| 场景 | 关键字段 | 示例 |
|------|----------|------|
| 查找RFQ下所有行项目 | pp_rfq_id | WHERE pp_rfq_id = 'XXX' |
| 查找已定点的行项目 | nominated_supplier_id | WHERE nominated_supplier_id IS NOT NULL |
| 查找目标价偏离大的 | target_total_price vs actual | 对比实际报价与目标价 |
| 按零件查行项目 | md_part_id | WHERE md_part_id = 'XXX' |
| 查找未定点的行项目 | nominated_supplier_id | WHERE nominated_supplier_id IS NULL |
| 统计各状态行项目 | status | GROUP BY status |
