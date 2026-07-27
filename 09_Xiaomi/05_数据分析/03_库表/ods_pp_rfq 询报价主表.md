---
created: '2026-07-24'
tags: [Xiaomi, 数据]
---

---created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 采购, 数据]
status: draft
---

> [!summary] ods_pp_rfq 询报价主表
> - **核心**：采购询报价（RFQ）全流程 ODS 主表，覆盖从询价发起到报价截止的全生命周期
> - **要点**：主键 pp_rfq_id；8 大类字段（基础信息/状态流程/关联项目/人员/评审/物流付款/数据管理/变更日志）；准实时分钟级同步；RFQ 状态流转（草稿→已发布→报价中→已完成，可取消/冻结）
> - **关联**：[[ods_pp_rfq_item 询报价行项目表]] · [[ods_pp_rfq_round 询报价轮次表]] · [[dwd_rfq_quotes_base_info 报价基础信息宽表]]

# ods_pp_rfq 询报价主表

> **表名**: iceberg_nc4cloudprc_hadoop.ep.ods_pp_rfq
> **表类型**: ODS 操作数据表（Operational Data Store）
> **用途**: 采购询报价（RFQ）全流程数据，从询价发起到报价截止的全生命周期管理
> **更新频率**: 准实时 / 分钟级同步

---

## 字段注释

### 一、RFQ 基础信息

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| pp_rfq_id | RFQ主键 | String | 询报价单唯一标识，系统自动生成 |
| rfq_code | RFQ编号 | String | 询价单编号，如 `RFQ-2026-089` |
| rfq_name | RFQ名称 | String | 询价单名称，如"前排座椅骨架总成询价" |
| rfq_name_front | RFQ名称前缀 | String | 名称前半部分（系统拼接用） |
| rfq_name_behind | RFQ名称后缀 | String | 名称后半部分（系统拼接用） |
| rfq_type | RFQ类型 | String | 标准询价/竞争性谈判/单一来源/紧急采购 |
| rfq_desc | RFQ描述 | String | 询价单详细说明 |
| rfq_currency | RFQ币种 | String | 报价币种（CNY/USD/EUR） |
| rec_type_id | 询价类型ID | String | 关联询价类型配置表 |

### 二、RFQ 状态与流程

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| rfq_status | RFQ状态 | String | 草稿/已发布/报价中/已完成/已取消/已冻结 |
| is_task_complete | 任务是否完成 | Boolean | 该RFQ下所有任务是否全部完成 |
| quotation_rule | 报价规则 | String | 报价规则配置（如最低价中标/综合评分） |
| cancel_date | 取消日期 | String | RFQ被取消的时间 |
| cancel_reason | 取消原因 | String | 取消原因说明 |
| end_date | 截止日期 | String | 报价截止时间 |
| remarks | 备注 | String | 补充说明 |

### 三、关联项目与品类

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| prdpm_product_project_id | 产品项目ID | String | 关联的产品项目，如Modena/Leman/Kunlun |
| md_materialgroup_id | 物料组ID | String | 关联的物料组（品类），如座椅/电池/电驱 |
| sor_code | SOR编号 | String | 关联的SOR（Statement of Requirements）编号 |
| plan_eng_id | 计划工程师ID | String | 负责该RFQ的计划工程师 |

### 四、人员信息

| 字段名              | 中文名     | 类型     | 说明                      |
| ---------------- | ------- | ------ | ----------------------- |
| pre_buyer_id     | 预采购员ID  | String | 预分配的采购员（待确认）            |
| buyer_id         | 采购员ID   | String | 负责该RFQ的采购员              |
| cost_eng_id      | 成本工程师ID | String | CE（Cost Engineering）负责人 |
| sqe_id           | SQE ID  | String | 供应商质量工程师                |
| pd_id            | PD ID   | String | 产品设计师                   |
| logistics_eng_id | 物流工程师ID | String | 物流规划工程师                 |
| data_owner       | 数据负责人   | String | 数据治理责任人                 |
| as_orderer_id    | AS下单人ID | String | 自动下单操作人                 |

### 五、评审与技术

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| need_technical_review | 是否需要技术评审 | Boolean | Y/N，是否需要技术部门评审 |
| review_reason | 评审原因 | String | 需要技术评审的原因说明 |
| ce_user_id | CE用户ID | String | 成本工程系统用户ID |

### 六、物流与付款

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| payment_term | 付款条款 | String | 付款条件（Net30/Net60等） |
| is_free | 是否免费 | Boolean | Y/N，是否为免费样品/试制件 |

### 七、数据管理

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| company_id | 公司ID | String | 所属公司/BU |
| data_owner | 数据负责人 | String | 数据治理责任人 |
| created_by | 创建人 | String | 记录创建操作人 |
| create_date | 创建日期 | String | 记录创建时间 |
| updated_by | 更新人 | String | 最近更新操作人 |
| update_date | 更新日期 | String | 最后更新时间 |
| is_deleted | 是否已删除 | Boolean | 软删除标记 |
| delete_date | 删除日期 | String | 软删除时间 |
| deleted_by | 删除人 | String | 删除操作人 |
| opt_counter | 操作计数器 | Integer | 数据变更版本号 |

### 八、变更日志

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| change_log | 变更日志 | String | 记录RFQ关键变更（状态变更/人员调整等） |

---

## 主键与关系

| 类型 | 字段 | 关联表 | 说明 |
|------|------|--------|------|
| 主键 | pp_rfq_id | — | RFQ唯一标识 |
| 外键 | prdpm_product_project_id | dim_project | 关联产品项目 |
| 外键 | md_materialgroup_id | dim_md_materialgroup | 关联物料组/品类 |
| 外键 | buyer_id | dim_md_supplier（采购员） | 关联采购员 |
| 外键 | cost_eng_id | dim_user | 关联成本工程师 |
| 外键 | sqe_id | dim_user | 关联SQE |
| 外键 | sor_code | ods_pp_sor | 关联SOR |
| 外键 | rec_type_id | dim_rec_type | 关联询价类型 |

---

## RFQ 状态流转

```
草稿(draft) → 已发布(published) → 报价中(bidding) → 已完成(completed)
                                  ↓
                            已取消(cancelled)
                                  ↓
                            已冻结(frozen)
```

---

## 常用查询场景

| 场景 | 关键字段 | 示例 |
|------|----------|------|
| 查找进行中的RFQ | rfq_status | WHERE rfq_status IN ('published', 'bidding') |
| 按项目查RFQ | prdpm_product_project_id | WHERE prdpm_product_project_id = 'MODENA' |
| 按品类查RFQ | md_materialgroup_id | WHERE md_materialgroup_id = '座椅总成' |
| 查找即将截止的RFQ | end_date | WHERE end_date <= DATE_ADD(CURDATE(), INTERVAL 7 DAY) |
| 查找需要技术评审的 | need_technical_review | WHERE need_technical_review = 'Y' |
| 查找采购员负责的RFQ | buyer_id | WHERE buyer_id = 'zhangsan' |
| 查找已取消的RFQ | rfq_status | WHERE rfq_status = 'cancelled' |
| 统计各状态RFQ数量 | rfq_status | GROUP BY rfq_status |
