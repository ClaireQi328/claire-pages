---
created: '2026-07-24'
tags: [Xiaomi, 数据, 采购]
---

---created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 采购, 数据]
status: draft
---

> [!summary] dim_md_supplier 供应商主数据维度表
> - **核心**：供应商主数据全量快照维度表，覆盖供应商基础信息、编码体系、企业信息、财务、资质认证等 15 大类字段
> - **要点**：主键 md_supplier_id；关联采购/定点/合同/付款等业务场景；日增量 T+1 更新；包含红线供应商、等级、类型等关键维度
> - **关联**：[[dim_ts_acct_user 用户账户维度表]] · [[dwd_rfq_quotes_base_info 报价基础信息宽表]] · [[ods_pp_rfq 询报价主表]]

# dim_md_supplier 供应商主数据维度表

> **表名**: iceberg_nc4cloudprc_hadoop.ep.dim_md_supplier
> **表类型**: 维度表（Dimension Table）
> **用途**: 供应商主数据全量快照，支撑采购、定点、合同、付款等业务场景
> **更新频率**: 日增量 T+1

---

## 字段注释

### 一、供应商基础信息

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| md_supplier_id | 供应商主数据ID | 唯一标识，系统自动生成 |
| parent_supplier_id | 父供应商ID | 集团母体公司ID，用于层级关系 |
| parent_supplier_name | 父供应商名称 | 母体公司名称 |
| supplier_grade | 供应商等级 | 战略/核心/一般/备选/待评估 |
| supplier_type | 供应商类型 | 生产商/贸易商/代理商 |
| supplier_type_two | 二级类型 | 细分类别 |
| supplier_category | 供应商分类 | 按行业/产品分类 |
| supplier_subclass | 子分类 | 三级分类 |
| supplier_formal_type | 正式类型 | 正式/临时/试用 |
| is_production | 是否生产商 | Y/N |
| is_sale_service | 是否销售服务商 | Y/N |
| is_agent_supplier | 是否代理商 | Y/N |
| is_special_supplier | 是否特殊供应商 | Y/N |
| is_foreign_manufacture | 是否外资制造 | Y/N |
| is_potential_supplier | 是否潜在供应商 | Y/N |
| domestic_supplier | 是否国内供应商 | Y/N |
| is_active | 是否有效 | Y/N |
| is_deleted | 是否已删除 | 软删除标记 |
| is_red_line | 是否红线供应商 | 黑名单标记 |
| is_govern | 是否受管供应商 | 集团统一管控 |

### 二、编码体系

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| sap_code | SAP编码 | SAP系统供应商编码 |
| duns | DUNS编码 | 邓白氏编码 |
| duns_code | 邓白氏编码 | 同duns |
| agency_code | 机构编码 | 工商注册编码 |
| mdm_supplier_id | MDM供应商ID | 主数据管理系统ID |
| mdm_out_side_id | MDM外部ID | 外部系统对接ID |
| group_supplier_id | 集团供应商ID | 母体集团编码 |
| supplier_ext_id | 供应商外部ID | SRM/ERP对接ID |
| join_venture_code | 合资公司编码 | 合资企业编码 |

### 三、企业信息

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| parent_org_id | 父组织ID | 上级组织单元 |
| org_name | 组织名称 | 企业全称中文 |
| org_name_en | 组织英文名 | 企业全称英文 |
| org_code | 组织编码 | 企业内部编码 |
| org_type | 组织类型 | 有限公司/股份公司等 |
| org_simple_name | 组织简称 | 企业简称 |
| org_simple_code | 组织简码 | 缩写编码 |
| org_simple_name_en | 英文简称 | 英文缩写 |
| org_simple_name_py | 拼音名 | 拼音搜索用 |
| org_temp_code | 临时编码 | 正式编码前使用 |
| description | 企业描述 | 企业简介 |
| business_scope | 经营范围 | 营业执照范围 |
| company_website | 公司网站 | 官网URL |
| official_website | 官方网站 | 同上 |
| site_type | 站点类型 | 工厂/办公室/仓库 |

### 四、法人与工商

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| legal_person | 法定代表人 | 法人姓名 |
| legal_person_tel | 法人电话 | 联系电话 |
| legal_person_email | 法人邮箱 | 联系邮箱 |
| tax_code | 税号 | 统一社会信用代码 |
| enterprise_type | 企业类型 | 国有/民营/外资/合资 |
| registered_capital | 注册资本 | 金额 |
| registered_date | 注册日期 | 工商注册日期 |
| register_type | 登记类型 | 注册类别 |

### 五、银行与结算

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| bank | 开户银行 | 基本户开户行 |
| bank_account | 银行账号 | 基本户账号 |
| bank_no | 银行行号 | 联行号 |
| bank_address | 银行地址 | 开户行地址 |
| settlement_account | 结算账户 | 付款结算账户 |
| settlement_bank_id | 结算银行ID | 系统银行ID |
| md_settlement_bank_id | MDM结算银行ID | 主数据银行ID |
| md_accepting_bank_id | MDM开户银行ID | 开户银行ID |

### 六、财务与支付

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| currency | 币种 | CNY/USD/EUR等 |
| monetary_unit | 货币单位 | 同currency |
| payment_term | 付款条款 | Net30/Net60等 |
| payment_type | 付款方式 | 电汇/承兑/现金 |
| payment_condition | 付款条件 | 详细描述 |
| payment_cash_ratio | 现金付款比例 | 现金支付占比 |
| payment_chit_ratio | 票据付款比例 | 承兑汇票占比 |
| accounting_period | 账期 | 月结30/月结60等 |
| chit_accounting_period | 票据账期 | 承兑账期 |
| accounting_period_after_sales | 售后账期 | 售后结算周期 |
| chit_accounting_period_after_sales | 售后票据账期 | 售后承兑账期 |
| income | 营收 | 年营收（元） |

### 七、联系信息

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| telephone | 电话 | 联系电话 |
| telephone_area_code | 电话区号 | 固话区号 |
| telephone_extension | 电话分机 | 分机号 |
| fax | 传真 | 传真号码 |
| fax_area_code | 传真区号 | 传真区号 |
| fax_extension | 传真分机 | 传真分机号 |
| email | 邮箱 | 联系邮箱 |
| language | 语言 | 沟通语言偏好 |
| md_address_id | 主数据地址ID | 关联地址表 |

### 八、产能与规模

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| occupy | 占地面积 | 平方米 |
| structure_area | 建筑面积 | 平方米 |
| fixed_assets | 固定资产 | 金额（元） |
| debt_ratio | 资产负债率 | 负债/资产比率 |
| number_of_employees | 员工人数 | 企业总人数 |
| capacity | 产能 | 生产能力描述 |
| product | 主要产品 | 产品/服务描述 |
| primary_product | 主营产品 | 核心产品线 |

### 九、资质认证

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| cert | 资质认证 | ISO/IATF等 |
| certificate | 证书 | 认证证书编号 |
| other_cert | 其他证书 | 其他资质 |
| nda_sign_status | NDA签署状态 | 保密协议状态 |
| nda_submit_date | NDA提交日期 | 提交日期 |
| nda_is_active | NDA是否有效 | 当前是否有效 |
| document_type | 证件类型 | 营业执照/资质证书 |
| document_number | 证件号码 | 证件编号 |

### 十、采购与定点

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| supply_type | 供货类型 | 直供/间供/寄售 |
| trading_partner_type | 贸易伙伴类型 | 国内/国际/保税 |
| trade_terms | 贸易条款 | FOB/CIF/DDP等 |
| group_name | 集团名称 | 所属企业集团 |
| affiliated_party | 关联方 | 关联企业/股东 |
| nomi_date | 定点日期 | 首次定点日期 |
| formal_status | 正式状态 | 试用/正式/退出 |
| first_formal_approve_date | 首次审批日期 | 正式审批日期 |
| first_approve_company_id | 审批公司ID | 审批主体 |
| first_formal_af_code | AF编码 | 审批流编码 |
| sup_nomi_type | 定点类型 | 新点/二点/三点 |
| srm_status | SRM状态 | SRM系统状态 |
| publish_status | 发布状态 | 信息公开状态 |

### 十一、数据治理

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| data_source | 数据来源 | SRM/ERP/手工导入 |
| data_status | 数据状态 | 有效/无效/待审核 |
| data_type | 数据类型 | 主数据/参考数据 |
| data_owner | 数据负责人 | 治理责任人 |
| opt_counter | 操作计数器 | 变更次数 |
| info_update_date | 信息更新日期 | 最近变更日期 |
| create_date | 创建日期 | 记录创建时间 |
| update_date | 更新日期 | 最后更新时间 |
| delete_date | 删除日期 | 软删除时间 |
| created_by | 创建人 | 操作人 |
| updated_by | 更新人 | 操作人 |
| deleted_by | 删除人 | 操作人 |
| add_user | 新增用户 | 操作人 |
| update_user | 更新用户 | 操作人 |
| import_date | 导入日期 | 批量导入时间 |
| is_edit | 是否可编辑 | Y/N |

### 十二、业务流程

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| receive | 是否已接收 | Y/N |
| receive_date | 接收日期 | 接收资料日期 |
| recom_user_name | 推荐人 | 推荐人员 |
| recom_dept | 推荐部门 | 推荐部门 |
| recom_reason | 推荐理由 | 推荐原因 |
| recom_date | 推荐日期 | 提交日期 |
| is_pass_official | 是否通过审批 | Y/N |
| pass_official_source | 审批来源 | 来源系统 |
| buyer_id | 采购员ID | 供应商负责人 |
| responsible_person_id | 负责人ID | 对接负责人 |
| dead_line | 截止日期 | 合作截止日期 |

### 十三、平台与系统

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| logo_id | Logo标识 | 企业Logo图片ID |
| clientid | 客户端ID | 系统对接标识 |
| if_send_idm_base | 推送IDM基础数据 | Y/N |
| if_send_idm_user | 推送IDM用户数据 | Y/N |
| ab_code_type | AB编码类型 | 编码分类 |
| busicess_type | 业务类型 | 业务分类 |
| listed_company | 是否上市公司 | Y/N |
| merchants_type | 商户类型 | 商户分类 |
| merchants_code | 商户编码 | 系统编码 |
| merchants_short_name | 商户简称 | 简称 |

### 十四、合作周期

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| supplier_register_time | 注册时间 | SRM注册时间 |
| operate_period_start | 经营起始日期 | 合作开始日期 |
| operate_period_stop | 经营截止日期 | 合作结束日期 |
| enter_futon_date | 进入富通日期 | 富通系统日期 |
| leave_futon_date | 离开富通日期 | 离开日期 |
| quit_date | 退出日期 | 终止合作日期 |

### 十五、审核状态

| 字段名 | 中文名 | 说明 |
|--------|--------|------|
| review_date | 审核日期 | 最近审核日期 |
| is_pass_official | 是否通过审批 | Y/N |
| pass_official_source | 审批来源 | 来源系统 |
| formal_status | 正式状态 | 试用/正式/退出 |
| srm_status | SRM状态 | SRM系统状态 |
| is_red_line | 是否红线 | 禁止合作标记 |

---

## 主键与关系

| 类型 | 字段 | 说明 |
|------|------|------|
| 主键 | md_supplier_id | 供应商唯一标识 |
| 外键 | parent_supplier_id | 关联父供应商 |
| 外键 | group_supplier_id | 关联集团供应商 |
| 外键 | settlement_bank_id | 关联银行信息表 |
| 外键 | md_address_id | 关联地址表 |
| 外键 | buyer_id | 关联采购员表 |

---

## 常用查询

| 场景 | 关键字段 | 示例 |
|------|----------|------|
| 战略供应商 | supplier_grade | WHERE supplier_grade = '战略' |
| 待审批供应商 | is_pass_official | WHERE is_pass_official = 'N' |
| 红线供应商 | is_red_line | WHERE is_red_line = 'Y' |
| 即将到期 | operate_period_stop | WHERE operate_period_stop <= DATE_ADD(CURDATE(), INTERVAL 30 DAY) |
| 外资制造 | is_foreign_manufacture | WHERE is_foreign_manufacture = 'Y' |
