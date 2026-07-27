---
created: '2026-07-24'
tags: [Xiaomi, 数据]
---

---created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 采购, 数据]
status: draft
---

> [!summary] ods_pp_rfq_round 询报价轮次表
> - **核心**：RFQ 下每一轮报价的 ODS 管理表，控制报价发布、开标、截止等流程节点
> - **要点**：主键 pp_rfq_round_id；时间线节点（创建→发布→开标→查看→关闭）；报价规则配置（密封报价/目标价发布/按包报价/CBD 要求等）；轮次状态流转（草稿→已发布→开标中→已完成，可取消）
> - **关联**：[[ods_pp_rfq 询报价主表]] · [[ods_pp_rfq_item 询报价行项目表]]

# ods_pp_rfq_round 询报价轮次表

> **表名**: iceberg_nc4cloudprc_hadoop.ep.ods_pp_rfq_round
> **表类型**: ODS 操作数据表（Operational Data Store）
> **用途**: RFQ 下的每一轮报价管理，控制报价发布、开标、截止等流程节点
> **更新频率**: 准实时 / 随报价流程操作更新

---

## 字段注释

### 一、轮次基础信息

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| pp_rfq_round_id | 轮次主键 | String | 报价轮次唯一标识 |
| pp_rfq_id | RFQ主键 | String | 关联询价单（外键） |
| round_no | 轮次编号 | Integer | 第几轮报价（1/2/3...） |
| quote_method | 报价方式 | String | 线上报价/线下报价/密封报价 |
| status | 轮次状态 | String | 草稿/已发布/开标中/已完成/已取消 |

### 二、时间线节点

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| create_date | 创建日期 | String | 轮次创建时间 |
| issue_date | 发布日期 | String | 向供应商发布询价的时间 |
| opening_date | 开标日期 | String | 报价开封/开标时间 |
| end_date | 截止日期 | String | 报价提交截止时间 |
| close_date | 关闭日期 | String | 轮次关闭时间 |
| view_date | 查看日期 | String | 采购员首次查看报价的时间 |

**轮次时间线**：

```
创建(create) → 发布(issue) → 供应商报价中 → 开标(opening) → 查看(view) → 关闭(close)
```

### 三、报价规则配置

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| is_already_opening | 是否已开标 | Boolean | Y/N，当前轮次是否已经开标 |
| is_issue_purtar_price | 是否发布目标价 | Boolean | Y/N，是否向供应商发布目标价作为参考 |
| is_quote_by_package | 是否按包报价 | Boolean | Y/N，供应商按整个RFQ包报价而非逐项 |
| is_view_price | 是否可见价格 | Boolean | Y/N，开标后采购员是否可见价格 |
| is_issue_quote | 是否发布报价 | Boolean | Y/N，是否向供应商发布报价模板 |
| is_sealed_quote | 是否密封报价 | Boolean | Y/N，是否启用密封报价（开标前不可见） |
| unseal_date | 揭封日期 | String | 密封报价的揭封时间 |

### 四、报价内容要求

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| send_forecast | 是否发送预测量 | Boolean | Y/N，是否向供应商发送需求预测 |
| need_itemize | 是否需要逐项报价 | Boolean | Y/N，供应商是否需要逐零件报价 |
| need_classify_file | 是否需要分类文件 | Boolean | Y/N，是否要求供应商按类别提交文件 |
| need_cbd | 是否需要CBD | Boolean | Y/N，是否要求供应商提供Cost Breakdown |
| adjust_logistics | 是否调整物流 | Boolean | Y/N，本轮是否涉及物流方案调整 |

### 五、审批与设计

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| audit_status | 审批状态 | String | 待审批/已审批/已驳回 |
| design_req_id | 设计需求ID | String | 关联的设计需求 |
| reason | 原因说明 | String | 审批驳回或调整的原因 |

### 六、通知与操作人

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| md_employee_id | 操作员工ID | String | 创建/操作该轮次的员工 |
| is_feishu_alarm | 是否飞书告警 | Boolean | Y/N，是否需要发送飞书通知 |
| remark | 备注 | String | 补充说明 |

### 七、数据管理

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| create_date | 创建日期 | String | 记录创建时间 |
| opt_counter | 操作计数器 | Integer | 变更版本号 |
| is_deleted | 是否已删除 | Boolean | 软删除标记 |
| created_by | 创建人 | String | 创建操作人 |
| updated_by | 更新人 | String | 更新操作人 |
| update_date | 更新日期 | String | 更新时间 |
| deleted_by | 删除人 | String | 删除操作人 |
| delete_date | 删除日期 | String | 删除时间 |

---

## 主键与关系

| 类型 | 字段 | 关联表 | 说明 |
|------|------|--------|------|
| 主键 | pp_rfq_round_id | — | 轮次唯一标识 |
| 外键 | pp_rfq_id | ods_pp_rfq | 关联RFQ主表 |
| 外键 | md_employee_id | dim_md_employee | 关联员工主数据 |

---

## 轮次状态流转

```
草稿(draft) → 已发布(published) → 开标中(opening) → 已完成(completed)
                                  ↓
                            已取消(cancelled)
```

---

## 常用查询场景

| 场景 | 关键字段 | 示例 |
|------|----------|------|
| 查找当前进行中的轮次 | status | WHERE status IN ('published', 'opening') |
| 按RFQ查所有轮次 | pp_rfq_id | WHERE pp_rfq_id = 'XXX' ORDER BY round_no |
| 查找密封报价轮次 | is_sealed_quote | WHERE is_sealed_quote = 'Y' |
| 查找需要CBD的轮次 | need_cbd | WHERE need_cbd = 'Y' |
| 查找即将截止的轮次 | end_date | WHERE end_date <= DATE_ADD(CURDATE(), INTERVAL 3 DAY) |
| 查找已开标的轮次 | is_already_opening | WHERE is_already_opening = 'Y' |
| 统计各状态轮次数量 | status | GROUP BY status |
