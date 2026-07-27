---
created: '2026-07-24'
tags: [Xiaomi, 数据]
---

---created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 采购, 数据]
status: draft
---

> [!summary] ods_qo_part_comprehensive_info 报价明细综合信息表
> - **核心**：报价明细中每个零件的全成本拆解 ODS 表，包含材料成本、制造成本、表面处理等详细信息
> - **要点**：主键 qo_part_comprehensive_info_id；成本计算公式（原材料成本→废料回收→材料采购价→单件材料总成本）；涵盖零件基础信息、尺寸规格、材料信息、制造工艺、表面处理 7 大类字段
> - **关联**：[[ods_pp_quote_part_process_status]] · [[dwd_rfq_quotes_base_info 报价基础信息宽表]]

# ods_qo_part_comprehensive_info 报价明细综合信息表

> **表名**: iceberg_nc4cloudprc_hadoop.ep.ods_qo_part_comprehensive_info
> **表类型**: ODS 操作数据表（Operational Data Store）
> **用途**: 报价明细中每个零件的全成本拆解，包含材料成本、制造成本、表面处理等详细信息
> **更新频率**: 准实时 / 随报价提交更新

---

## 字段注释

### 一、零件基础信息

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| qo_part_comprehensive_info_id | 综合信息主键 | String | 记录唯一标识 |
| pp_rfq_quotes_info_id | 报价信息ID | String | 关联的报价信息表主键（外键） |
| part_level | 零件层级 | String | 总成/分总成/零件/原材料，BOM层级 |
| part_no | 零件编号 | String | 零件唯一编号 |
| part_name | 零件名称 | String | 零件中文名称 |
| part_source | 零件来源 | String | 自制/外购/沿用/新开发 |
| part_reuse_status | 零件复用状态 | String | 新件/沿用件/改型件 |
| part_quantity | 零件数量 | Decimal | 单台用量（个/辆） |
| single_car_usage | 单车用量 | Decimal | 每辆车使用数量 |

### 二、零件尺寸规格

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| length_outer_diameter | 长度/外径 | Decimal | 零件长度或外径（mm） |
| width_inner_diameter | 宽度/内径 | Decimal | 零件宽度或内径（mm） |
| height | 高度 | Decimal | 零件高度（mm） |

### 三、材料信息

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| material_name | 材料名称 | String | 如"SPCC冷轧钢板""PA66+GF30" |
| material_grade | 材料牌号 | String | 如"SPCC""Q235B""PA66-GF30" |
| material_category | 材料大类 | String | 金属/塑料/橡胶/织物/电子等 |
| material_category_sub | 材料子类 | String | 钢/铝/PP/ABS/PC等细分 |
| thickness_spec | 厚度规格 | String | 如"1.2mm""0.8mm" |
| exec_standard | 执行标准 | String | 如"GB/T 700-2006""JIS G3141" |
| material_supplier | 材料供应商 | String | 提供原材料的供应商名称 |
| supplier_location | 供应商所在地 | String | 供应商工厂地址 |
| material_approval | 材料审批状态 | String | 已批准/待审批/未提交 |
| material_unit_price | 材料单价 | Decimal | 原材料单价（元/单位） |
| recycle_price | 回收价格 | Decimal | 废料回收价格（元/单位） |

### 四、材料成本计算

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| net_weight | 净重 | Decimal | 零件净重（kg） |
| gross_weight | 毛重 | Decimal | 零件毛重（kg），含包装 |
| material_utilization | 材料利用率 | Decimal | 有效材料/投入材料比率（%） |
| raw_material_cost | 原材料成本 | Decimal | 净重 × 材料单价（元） |
| scrap_recycle_cost | 废料回收成本 | Decimal | 废料重量 × 回收价格（元） |
| material_purchase_price | 材料采购价 | Decimal | raw_material_cost - scrap_recycle_cost（元） |
| single_material_total_cost | 单件材料总成本 | Decimal | material_purchase_price × part_quantity（元） |

**成本计算公式**：

```
原材料成本 = 净重 × 材料单价
废料回收成本 = (毛重 - 净重) × 材料利用率 × 回收价格
材料采购价 = 原材料成本 - 废料回收成本
单件材料总成本 = 材料采购价 × 单车用量
```

### 五、制造工艺信息

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| manufacturing_process | 制造工艺 | String | 冲压/焊接/注塑/机加工/压铸/装配等 |
| process_category | 工艺大类 | String | 成型/连接/表面/装配等 |
| process_category_sub | 工艺子类 | String | 细分工艺类型 |
| machine_hour | 机时 | Decimal | 单件加工工时（小时） |
| manufacturing_supplier | 制造供应商 | String | 承担制造的供应商名称 |
| manufacturing_location | 制造地点 | String | 工厂地址 |

### 六、表面处理

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| quality_cert | 质量认证 | String | IATF 16949/ISO 9001等 |
| color_texture_code | 颜色纹理编码 | String | 外观颜色/纹理标准编码 |
| surface_treatment_supplier | 表面处理供应商 | String | 电镀/喷涂/阳极氧化等供应商 |
| surface_weld_process_params | 焊接工艺参数 | String | 焊接电流/电压/速度等参数 |

### 七、数据管理

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| remark | 备注 | String | 补充说明 |
| material_tree_id | 材料树ID | String | BOM材料树节点ID |
| parent_material_id | 父材料ID | String | BOM上级材料节点 |
| created_by | 创建人 | String | 记录创建操作人 |
| create_date | 创建日期 | String | 创建时间 |
| updated_by | 更新人 | String | 最近更新操作人 |
| update_date | 更新日期 | String | 最后更新时间 |
| is_deleted | 是否已删除 | Boolean | 软删除标记 |
| deleted_by | 删除人 | String | 删除操作人 |
| delete_date | 删除日期 | String | 删除时间 |
| opt_counter | 操作计数器 | Integer | 数据变更版本号 |

---

## 主键与关系

| 类型 | 字段 | 关联表 | 说明 |
|------|------|--------|------|
| 主键 | qo_part_comprehensive_info_id | — | 综合信息唯一标识 |
| 外键 | pp_rfq_quotes_info_id | ods_qo_rfq_quotes_info | 关联报价信息 |
| 外键 | material_tree_id | dim_material_tree | 关联材料BOM树 |
| 外键 | parent_material_id | dim_material_tree | 关联上级材料 |

---

## 成本结构图

```
零件综合成本
├── 材料成本
│   ├── 原材料成本 = 净重 × 材料单价
│   ├── 废料回收 = (毛重-净重) × 利用率 × 回收价
│   └── 材料采购价 = 原材料 - 回收
├── 制造成本
│   ├── 加工费 = 机时 × 设备费率
│   └── 人工费 = 机时 × 人工费率
└── 表面处理
    ├── 电镀/喷涂费用
    └── 质量检测费用
```

---

## 常用查询场景

| 场景 | 关键字段 | 示例 |
|------|----------|------|
| 按报价查零件明细 | pp_rfq_quotes_info_id | WHERE pp_rfq_quotes_info_id = 'XXX' |
| 查找特定材料零件 | material_category | WHERE material_category = '钢' |
| 查找高成本零件 | single_material_total_cost | ORDER BY single_material_total_cost DESC |
| 按供应商查零件 | manufacturing_supplier | WHERE manufacturing_supplier = '延锋' |
| 查找新开发零件 | part_source | WHERE part_source = '新开发' |
| 查找特定工艺零件 | manufacturing_process | WHERE manufacturing_process = '注塑' |
| 按零件层级查 | part_level | WHERE part_level = '总成' |
