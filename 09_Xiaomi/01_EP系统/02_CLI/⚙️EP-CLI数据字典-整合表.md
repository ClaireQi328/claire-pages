---
created: '2026-07-24'
tags: [Xiaomi, AI, 数据]
---

---created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 采购, 数据]
status: draft
---

> [!summary] EP CLI数据字典 — 全量字段整合表（单表视图）
> - **核心**：将EP系统18个CLI接口的所有字段整合为一张大表，按业务域-实体-接口维度组织
> - **要点**：覆盖供应商/SOR/通用/RFQ/定点5域、12+实体、~180出参字段、13枚举表；含跨接口接力和入参全量汇总
> - **关联**：[[⚙️EP-CLI数据字典]] · [[⚙️EP-CLI字段地图-统一表]]

# EP CLI 数据字典 — 全量字段整合表

> 5 业务域 | 18 CLI 接口 | 12+ 业务实体 | ~180 出参字段 | 13 枚举表

| 业务域 | 实体 | 来源接口 | # | 字段路径 | 数据类型 | 约束 | 业务含义 | 示例值 | 备注/枚举 |
|--------|------|----------|---|----------|----------|------|----------|--------|-----------|
| **供应商** | SupplierDto | 1-供应商详情 | 1 | id | string | PK, NotBlank | 供应商主键ID | "8a27a9ae..." | UUID生成 |
| 供应商 | SupplierDto | 1-供应商详情 | 2 | orgCode | string | UNIQUE | 供应商编码 | "V10001" | |
| 供应商 | SupplierDto | 1-供应商详情 | 3 | orgName | string | NOT NULL | 供应商名称 | "苏州智选电子有限公司" | |
| 供应商 | SupplierDto | 1-供应商详情 | 4 | orgNameEn | string | - | 供应商英文名称 | "Shenzhen Longhorn..." | |
| 供应商 | SupplierDto | 1-供应商详情 | 5 | enterpriseType | string | ENUM | 公司类型 | "FOREIGN_INVESTED" | E-01 |
| 供应商 | SupplierDto | 1-供应商详情 | 6 | certificate | string | - | 资质认证 | "IATF16949,ISO9001" | 逗号分隔 |
| 供应商 | SupplierDto | 1-供应商详情 | 7 | addressStrng | string | - | 制造地址 | "江苏省苏州市..." | |
| 供应商 | SupplierDto | 1-供应商详情 | 8 | buyerName | string | FK→User | 采购员姓名 | "张采购" | |
| 供应商 | SupplierDto | 1-供应商详情 | 9 | accountingPeriodDay | string | - | 量产账期天数 | "90" | |
| 供应商 | SupplierDto | 1-供应商详情 | 10 | paymentCashRatio | string | - | 量产-现金比例(%) | "50" | |
| 供应商 | SupplierDto | 1-供应商详情 | 11 | paymentChitRatio | string | - | 量产-承兑比例(%) | "50" | |
| 供应商 | SupplierDto | 1-供应商详情 | 12 | accountingPeriodDaySample | string | - | 样件账期天数 | "60" | |
| 供应商 | SupplierDto | 1-供应商详情 | 13 | accountingPeriodDayAfterSales | string | - | 售后账期天数 | "120" | |
| 供应商 | SupplierDto | 1-供应商详情 | 14 | settlementBank | object | - | 电汇银行信息 | 见 SettlementBankDto | 嵌套对象 |
| 供应商 | SupplierDto | 1-供应商详情 | 15 | acceptingBank | object | - | 承兑银行信息 | 见 AcceptingBankDto | 嵌套对象 |
| 供应商 | SupplierDto | 1-供应商详情 | 16 | supplierBusinessPremises[] | array | - | 商务前提列表 | 见 SupplierBusinessPremiseDto | 按type区分量产/样件/售后 |
| 供应商 | SettlementBankDto | 1-供应商详情(嵌套) | 1 | bankName | string | - | 电汇银行名称 | "中国工商银行苏州分行" | |
| 供应商 | SettlementBankDto | 1-供应商详情(嵌套) | 2 | bankAccount | string | - | 电汇银行账号 | "6222021001002233445" | |
| 供应商 | AcceptingBankDto | 1-供应商详情(嵌套) | 1 | bankName | string | - | 承兑银行名称 | "招商银行苏州市支行" | |
| 供应商 | AcceptingBankDto | 1-供应商详情(嵌套) | 2 | bankAccount | string | - | 承兑银行账号 | "121900012345678" | |
| 供应商 | SupplierBusinessPremiseDto | 1-供应商详情(嵌套) | 1 | id | string | PK | 商务前提ID | "8a621d9e..." | |
| 供应商 | SupplierBusinessPremiseDto | 1-供应商详情(嵌套) | 2 | supplierId | string | FK→Supplier | 供应商ID | "764329453351131" | |
| 供应商 | SupplierBusinessPremiseDto | 1-供应商详情(嵌套) | 3 | type | string | ENUM | 类型 | "MASS" | E-02: MASS/SAMPLE/AFTERSALES |
| 供应商 | SupplierBusinessPremiseDto | 1-供应商详情(嵌套) | 4 | versionNo | int | - | 版本号 | 10002 | |
| 供应商 | SupplierBusinessPremiseDto | 1-供应商详情(嵌套) | 5 | accountingPeriod | string | ENUM | 账期代码 | "V002" | E-03 |
| 供应商 | SupplierBusinessPremiseDto | 1-供应商详情(嵌套) | 6 | suplChgKeyAfId | string | FK→SuplChgKeyAf | 变更申请单ID | "8a621d9e..." | |
| 供应商 | SupplierBusinessPremiseDto | 1-供应商详情(嵌套) | 7 | suplChgKeyAfCode | string | - | 变更申请单号 | "SC20260300005" | |
| 供应商 | SupplierBusinessPremiseDto | 1-供应商详情(嵌套) | 8 | startDate | string (datetime) | - | 生效日期 | "2026-03-04 00:00:00" | |
| 供应商 | SupplierBusinessPremiseDto | 1-供应商详情(嵌套) | 9 | endDate | string (datetime) | - | 失效日期 | "2099-12-31 23:59:59" | |
| 供应商 | SupplierListItemDto | 2-供应商列表 | 1 | id | string | PK | 供应商主键ID | "8a27a9ae..." | 接力→接口1 |
| 供应商 | SupplierListItemDto | 2-供应商列表 | 2 | orgCode | string | - | 供应商编码 | "V10001" | |
| 供应商 | SupplierListItemDto | 2-供应商列表 | 3 | orgName | string | - | 供应商名称 | "苏州智选电子有限公司" | |
| 供应商 | SupplierListItemDto | 2-供应商列表 | 4 | supplierType | string | ENUM | 供应商类型 | "OFFICIAL" | E-04: TEMPORARY/POTENTIAL/OFFICIAL |
| 供应商 | SuplChgKeyAfDto | 3-变更单列表 | 1 | id | string | PK | 变更申请单主键ID | "8a27a9ae..." | |
| 供应商 | SuplChgKeyAfDto | 3-变更单列表 | 2 | appFormId | string | - | 关联表单ID | "AF_UUID_101" | |
| 供应商 | SuplChgKeyAfDto | 3-变更单列表 | 3 | oldHisId | string | - | 变更前快照ID | "HIS_OLD_001" | 接力→接口4 |
| 供应商 | SuplChgKeyAfDto | 3-变更单列表 | 4 | newHisId | string | - | 变更后快照ID | "HIS_NEW_002" | 接力→接口4 |
| 供应商 | SuplChgKeyAfDto | 3-变更单列表 | 5 | supplierId | string | FK→Supplier | 供应商ID | "SUP_001" | |
| 供应商 | SuplChgKeyAfDto | 3-变更单列表 | 6 | changeContentTypes | string | - | 变更要素描述 | "供应商名称,注册地址,电汇银行账号" | 逗号分隔 |
| 供应商 | SuplChgKeyAfDto | 3-变更单列表 | 7 | appForm.code | string | - | 变更申请单号 | "SC2024040001" | |
| 供应商 | SuplChgKeyAfDto | 3-变更单列表 | 8 | appForm.name | string | - | 申请单名称 | "苏州智选电子 - 信息变更申请" | |
| 供应商 | SuplChgKeyAfDto | 3-变更单列表 | 9 | appForm.status | string | ENUM | 审批状态 | "PASS" | E-05 |
| 供应商 | SuplChgKeyAfDto | 3-变更单列表 | 10 | appForm.auditDate | string (datetime) | - | 变更生效时间 | "2024-04-20 10:00:00" | |
| 供应商 | SuplChgKeyAfDto | 3-变更单列表 | 11 | supplier.orgName | string | - | 供应商名称 | "苏州智选电子有限公司" | |
| 供应商 | SuplChgKeyAfDto | 3-变更单列表 | 12 | supplier.orgCode | string | - | 供应商编码 | "100001" | |
| 供应商 | SupplierChangeHis(差异标识) | 4-变更对比 | 1 | differentSameAddress | boolean | - | 生产工厂/制造地是否有变 | false | false=有变化 |
| 供应商 | SupplierChangeHis(差异标识) | 4-变更对比 | 2 | differentSameCertification | boolean | - | 认证体系是否变化 | false | false=有变化 |
| 供应商 | SupplierChangeHis(差异标识) | 4-变更对比 | 3 | differentSameCaps | boolean | - | 公司股比是否变化 | false | false=有变化 |
| 供应商 | SupplierChangeHis(差异标识) | 4-变更对比 | 4 | differentSameCompostion | boolean | - | 人员构成是否变化 | false | false=有变化 |
| 供应商 | SupplierChangeHis(差异标识) | 4-变更对比 | 5 | differentRegisterAddress | boolean | - | 注册地址是否有变 | false | false=有变化 |
| 供应商 | SupplierChangeHis | 4-变更对比 | 1 | id | string | PK | 主键ID | "8a87f6e1..." | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 2 | orgName | string | - | 供应商名称 | "某某科技有限公司" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 3 | orgNameEn | string | - | 供应商英文名称 | "XX Technology Co., Ltd." | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 4 | orgSimpleName | string | - | 供应商简称 | "某某科技" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 5 | orgSimpleNameEn | string | - | 供应商简称英文 | "XX Tech" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 6 | orgSimpleCode | string | - | 供应商简码 | "MOUMOU" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 7 | orgCode | string | - | 供应商编码 | "SUP20260001" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 8 | orgTempCode | string | - | 临时编码 | "TEMP001" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 9 | suplChgKeyAfId | string | - | 变更申请单ID | "8a87f6e1..." | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 10 | supplierId | string | - | 供应商ID | "8a87f6e1..." | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 11 | inDate | date | - | 生效时间 | 2026-01-01 | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 12 | outDate | date | - | 失效时间 | null | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 13 | addressId | string | - | 地址ID | "8a87f6e1..." | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 14 | address | object | - | 公司地址 | 见 address 子表 | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 15 | settlementBankId | string | - | 结算银行ID | "8a87f6e1..." | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 16 | settlementBank | object | - | 结算账户 | 见 settlementBank 子表 | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 17 | acceptingBankId | string | - | 承兑银行ID | "8a87f6e1..." | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 18 | acceptingBank | object | - | 承兑银行 | 见 acceptingBank 子表 | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 19 | massBusinessPremise | object | - | 量产商务前提 | 见 massBusinessPremise 子表 | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 20 | sampleBusinessPremise | object | - | 样件商务前提 | 见 sampleBusinessPremise 子表 | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 21 | afterSalesBusinessPremise | object | - | 售后商务前提 | 见 afterSalesBusinessPremise 子表 | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 22 | businessScope | string | - | 经营范围 | "主营汽车娱乐app..." | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 23 | income | number | - | 收入 | 47000 | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 24 | numberOfEmployees | int | - | 员工人数 | 312 | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 25 | registeredCapital | number | - | 注册资本 | 1122 | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 26 | legalPerson | string | - | 法定代表人 | "张某某" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 27 | registeredDate | date | - | 注册日期 | 2008-12-04 | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 28 | duns | string | - | DUNS编码 | "202112217413381134" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 29 | certificate | string | - | 资质认证 | "ISO9001,IATF16949" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 30 | accountingPeriod | string | - | 账期代码 | "V003" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 31 | paymentCashRatio | string | - | 现金比例 | "12" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 32 | paymentChitRatio | string | - | 承兑比例 | "88" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 33 | chitAccountingPeriod | string | - | 承兑汇票账期 | "3" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 34 | accountingPeriodAfterSales | string | - | 售后账期 | "V001" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 35 | supplierType | string | - | 供应商类型 | "POTENTIAL" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 36 | enterpriseType | string | - | 公司类型 | "3" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 37 | officialWebsite | string | - | 官方网站 | "https://..." | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 38 | domesticSupplier | string | - | 是否国内供应商 | "1" | |
| 供应商 | SupplierChangeHis | 4-变更对比 | 39 | monetaryUnit | string | - | 货币单位 | "CNY" | |
| 供应商 | address(子对象) | 4-变更对比(嵌套) | 1 | id | string | - | 地址ID | "8a87f6e1..." | |
| 供应商 | address(子对象) | 4-变更对比(嵌套) | 2 | country | string | - | 国家 | "CN" | |
| 供应商 | address(子对象) | 4-变更对比(嵌套) | 3 | provinces | string | - | 省份 | "北京市" | |
| 供应商 | address(子对象) | 4-变更对比(嵌套) | 4 | city | string | - | 城市 | "北京市" | |
| 供应商 | address(子对象) | 4-变更对比(嵌套) | 5 | county | string | - | 区县 | "朝阳区" | |
| 供应商 | address(子对象) | 4-变更对比(嵌套) | 6 | address | string | - | 详细地址 | "某某路123号" | |
| 供应商 | address(子对象) | 4-变更对比(嵌套) | 7 | addressEn | string | - | 英文地址 | "No.123 XX Road" | |
| 供应商 | settlementBank(子对象) | 4-变更对比(嵌套) | 1 | id | string | - | 结算银行ID | "8a87f6e1..." | |
| 供应商 | settlementBank(子对象) | 4-变更对比(嵌套) | 2 | bankName | string | - | 银行名称 | "中国银行" | |
| 供应商 | settlementBank(子对象) | 4-变更对比(嵌套) | 3 | accountName | string | - | 账户名称 | "某某科技有限公司" | |
| 供应商 | settlementBank(子对象) | 4-变更对比(嵌套) | 4 | accountNo | string | - | 账号 | "1234567890123456" | |
| 供应商 | acceptingBank(子对象) | 4-变更对比(嵌套) | 1 | id | string | - | 承兑银行ID | "8a87f6e1..." | |
| 供应商 | acceptingBank(子对象) | 4-变更对比(嵌套) | 2 | bankName | string | - | 银行名称 | "中国工商银行" | |
| 供应商 | acceptingBank(子对象) | 4-变更对比(嵌套) | 3 | accountName | string | - | 账户名称 | "某某科技有限公司" | |
| 供应商 | acceptingBank(子对象) | 4-变更对比(嵌套) | 4 | accountNo | string | - | 账号 | "9876543210123456" | |
| 供应商 | massBusinessPremise(子对象) | 4-变更对比(嵌套) | 1 | id | string | - | 量产商务前提ID | "8a87f6e1..." | |
| 供应商 | massBusinessPremise(子对象) | 4-变更对比(嵌套) | 2 | type | string | - | 类型 | "MASS" | |
| 供应商 | massBusinessPremise(子对象) | 4-变更对比(嵌套) | 3 | accountingPeriod | string | - | 账期 | "V005" | |
| 供应商 | massBusinessPremise(子对象) | 4-变更对比(嵌套) | 4 | chitAccountingPeriod | string | - | 承兑汇票账期 | "1" | |
| 供应商 | massBusinessPremise(子对象) | 4-变更对比(嵌套) | 5 | startDate | date | - | 生效日期 | 2026-01-01 | |
| 供应商 | sampleBusinessPremise(子对象) | 4-变更对比(嵌套) | 1 | id | string | - | 样件商务前提ID | "8a87f6e1..." | |
| 供应商 | sampleBusinessPremise(子对象) | 4-变更对比(嵌套) | 2 | type | string | - | 类型 | "SAMPLE" | |
| 供应商 | sampleBusinessPremise(子对象) | 4-变更对比(嵌套) | 3 | accountingPeriod | string | - | 账期 | "V012" | |
| 供应商 | sampleBusinessPremise(子对象) | 4-变更对比(嵌套) | 4 | chitAccountingPeriod | string | - | 承兑汇票账期 | "12" | |
| 供应商 | sampleBusinessPremise(子对象) | 4-变更对比(嵌套) | 5 | startDate | date | - | 生效日期 | 2026-04-23 | |
| 供应商 | afterSalesBusinessPremise(子对象) | 4-变更对比(嵌套) | 1 | id | string | - | 售后商务前提ID | "8a87f6e1..." | |
| 供应商 | afterSalesBusinessPremise(子对象) | 4-变更对比(嵌套) | 2 | type | string | - | 类型 | "AFTERSALES" | |
| 供应商 | afterSalesBusinessPremise(子对象) | 4-变更对比(嵌套) | 3 | accountingPeriod | string | - | 账期 | "X051" | |
| 供应商 | afterSalesBusinessPremise(子对象) | 4-变更对比(嵌套) | 4 | startDate | date | - | 生效日期 | 2026-04-21 | |
| **SOR** | DesignReqDto | 5-SOR列表 | 1 | id | string | PK | SOR ID | "SOR_8899_UUID" | 接力→接口6/7/8 |
| SOR | DesignReqDto | 5-SOR列表 | 2 | code | string | UNIQUE | SOR编码 | "SOR-2024-EV-001" | |
| SOR | DesignReqDto | 5-SOR列表 | 3 | name | string | NOT NULL | SOR名称 | "小米SU7前围模块SOR" | |
| SOR | DesignReqDto | 5-SOR列表 | 4 | status | string | ENUM | SOR状态 | "PASS" | E-06 |
| SOR | DesignReqDto | 5-SOR列表 | 5 | versionNo | string | - | 版本号 | "V1.0" | |
| SOR | DesignReqDto | 5-SOR列表 | 6 | classifyCode | string | - | 分类编码 | "A1" | |
| SOR | DesignReqDto | 5-SOR列表 | 7 | taskStatus | string | - | 任务状态 | "ISSUED" | |
| SOR | DesignReqDto | 5-SOR列表 | 8 | isLatest | boolean | - | 是否最新版本 | true | |
| SOR | DesignReqDto | 5-SOR列表 | 9 | submitBy | object | FK→User | 研发工程师 | {"userName":"王研发"} | |
| SOR | DesignReqDto | 5-SOR列表 | 10 | productProjects[] | array | - | 关联采购项目 | 见 ProductProject | |
| SOR | ProductProject(子对象) | 5-SOR列表(嵌套) | 1 | id | string | - | 项目主键 | - | |
| SOR | ProductProject(子对象) | 5-SOR列表(嵌套) | 2 | code | string | - | 采购项目编码 | "Modena(8041)" | |
| SOR | PlatFormLevelNode | 6-车型查询(一级) | 1 | platFormNode.id | string | PK | 平台节点ID | "plat_001" | |
| SOR | PlatFormLevelNode | 6-车型查询(一级) | 2 | platFormNode.nodeCode | string | - | 平台编码 | "MS11" | |
| SOR | PlatFormLevelNode | 6-车型查询(一级) | 3 | platFormNode.nodeName | string | - | 平台名称 | "MS11平台" | |
| SOR | PlatFormLevelNode | 6-车型查询(一级) | 4 | platFormNode.nodeType | string | ENUM | 节点类型 | "PLATFORM" | E-13 |
| SOR | PlatFormLevelNode | 6-车型查询(一级) | 5 | platFormNode.bomLevel | int | - | BOM层级 | 2 | |
| SOR | ProjectLevelNode | 6-车型查询(二级) | 1 | projectNode.id | string | PK | 项目节点ID | "prj_001" | |
| SOR | ProjectLevelNode | 6-车型查询(二级) | 2 | projectNode.nodeCode | string | - | 项目编码 | "SU7" | |
| SOR | ProjectLevelNode | 6-车型查询(二级) | 3 | projectNode.nodeName | string | - | 项目名称 | "小米SU7" | |
| SOR | ProjectLevelNode | 6-车型查询(二级) | 4 | projectNode.nodeType | string | ENUM | 节点类型 | "PROJECT" | E-13 |
| SOR | ProjectLevelNode | 6-车型查询(二级) | 5 | projectNode.bomLevel | int | - | BOM层级 | 3 | |
| SOR | BaseNode | 6-车型查询(三级) | 1 | baseNodes[].id | string | PK | 车型节点ID | "base_001" | |
| SOR | BaseNode | 6-车型查询(三级) | 2 | baseNodes[].nodeCode | string | - | 车型编码 | "SU7-STD" | |
| SOR | BaseNode | 6-车型查询(三级) | 3 | baseNodes[].nodeName | string | - | 车型名称 | "基础车型-标准版" | |
| SOR | BaseNode | 6-车型查询(三级) | 4 | baseNodes[].nodeType | string | ENUM | 节点类型 | "BASE_MODEL" | E-13 |
| SOR | BaseNode | 6-车型查询(三级) | 5 | baseNodes[].bomLevel | int | - | BOM层级 | 4 | |
| SOR | BaseNode | 6-车型查询(三级) | 6 | baseNodes[].isBomNode | boolean | - | 是否BOM节点 | true | |
| SOR | BaseNode | 6-车型查询(三级) | 7 | baseNodes[].isForSale | boolean | - | 是否可销售 | true | |
| SOR | BaseNode | 6-车型查询(三级) | 8 | baseNodes[].status | string | - | 节点状态 | "ACTIVE" | |
| SOR | DesignReqItemDto | 7-零件列表 | 1 | id | string | PK | SOR行项目ID | "8a87f6e1..." | |
| SOR | DesignReqItemDto | 7-零件列表 | 2 | pdId | string | FK→User | 产品经理ID | "pd_20250801_001" | |
| SOR | DesignReqItemDto | 7-零件列表 | 3 | operationType | string | ENUM | 操作类型 | "NEW" | E-07: NEW/UPDATE/DELETE |
| SOR | DesignReqItemDto | 7-零件列表 | 4 | devType | string | - | 开发类型 | "DEV_NEW" | |
| SOR | DesignReqItemDto | 7-零件列表 | 5 | partTechDesc | string | - | 零件技术描述 | "前保险杠总成 - 高配版本" | |
| SOR | DesignReqItemDto | 7-零件列表 | 6 | isChange | string | - | 是否变更 | "0" | 0=否, 1=是 |
| SOR | DesignReqItemDto | 7-零件列表 | 7 | partId | string | FK→Part | 零件ID | "part_001" | |
| SOR | DesignReqItemDto | 7-零件列表 | 8 | materialNum | string | NOT NULL | 物料号 | "MX11-BUMPER-001" | |
| SOR | DesignReqItemDto | 7-零件列表 | 9 | materialName | string | - | 物料名称 | "前保险杠总成" | |
| SOR | DesignReqItemDto | 7-零件列表 | 10 | measurementUnit | string | - | 计量单位 | "EA" | |
| SOR | DesignReqItemDto | 7-零件列表 | 11 | subDataType | string | - | 子数据类型 | "PURCHASED" | |
| SOR | DesignReqItemDto | 7-零件列表 | 12 | qualityId | string | FK→User | 质量工程师ID | "quality_001" | |
| SOR | DesignReqItemDto | 7-零件列表 | 13 | designReqId | string | FK→DesignReq | SOR ID | "dr_20250801_001" | |
| SOR | DesignReqItemDto | 7-零件列表 | 14 | applyTo | string | - | 适用范围 | "ALL" | |
| SOR | DesignReqItemDto | 7-零件列表 | 15 | node{车型节点ID}.count | BigDecimal | - | 单车用量 | 1 | 动态字段 |
| SOR | DesignReqItemDto | 7-零件列表 | 16 | node{车型节点ID}.percent | BigDecimal | - | 装配比例 | 100 | 动态字段 |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 1 | id | string | PK | 任务ID | "TASK001" | |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 2 | processId | string | - | 流程ID | "PROC001" | |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 3 | resourceName | string | - | 资源名称 | "前大灯总成SOR" | |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 4 | processDetail | string | - | 流程描述 | "SOR审批流程" | |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 5 | createBy | string | FK→User | 创建人ID | "USER001" | |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 6 | createByName | string | - | 创建人姓名 | "张三" | |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 7 | taskName | string | - | 环节名称 | "采购工程师审批" | |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 8 | startDate | string (datetime) | - | 开始时间 | "2024-06-01 10:00:00" | |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 9 | finishDate | string (datetime) | NULLABLE | 完成时间 | "2024-06-02 14:30:00" | null=进行中 |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 10 | actionName | string | - | 动作/结果 | "通过" | |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 11 | caller | string | FK→User | 处理人ID | "USER001" | |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 12 | callerName | string | - | 处理人姓名 | "张三" | |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 13 | approveComment | string | - | 审批意见 | "同意，供应商资质符合要求" | |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 14 | taskType | string | ENUM | 任务类型 | "H" | E-08: S/H/E |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 15 | statusCode | int | - | 状态码 | 2 | |
| SOR | HistoryTasksResponseDto | 8-审批历史 | 16 | statusName | string | - | 状态名称 | "已完成" | |
| **通用** | UserDto | 9-用户信息 | 1 | id | string | PK, NotBlank | 用户主键ID(UUID) | "b1c6df265edd..." | |
| 通用 | UserDto | 9-用户信息 | 2 | userName | string | NOT NULL | 用户真实姓名 | "张三" | |
| 通用 | UserDto | 9-用户信息 | 3 | userLoginName | string | - | 用户登录账号 | "chuhuo" | |
| 通用 | UserDto | 9-用户信息 | 4 | email | string | - | 电子邮箱 | "zhangsan@xiaomi.com" | |
| 通用 | UserDto | 9-用户信息 | 5 | userType | string | ENUM | 用户类型 | "EMPLOYEE" | E-09: EMPLOYEE/非EMPLOYEE |
| 通用 | UserDto | 9-用户信息 | 6 | mobile | string | - | 联系电话 | "13800000000" | |
| 通用 | UserDto | 9-用户信息 | 7 | organizationName | string | - | 所属部门 | "汽车部-采购组" | |
| 通用 | UserDto | 9-用户信息 | 8 | isActive | boolean | - | 账号状态 | true | E-10: true=有效, false=离职/停用 |
| **RFQ** | RfqDto | 10-RFQ列表 | 1 | id | string | PK | RFQ ID | "8a87f6e1..." | 接力→接口11/17/18 |
| RFQ | RfqDto | 10-RFQ列表 | 2 | rfqCode | string | UNIQUE | RFQ编码 | "RFQ-20250811-002" | |
| RFQ | RfqDto | 10-RFQ列表 | 3 | rfqName | string | NOT NULL | RFQ名称 | "SOR_CL2_0811" | |
| RFQ | RfqDto | 10-RFQ列表 | 4 | rfqType | string | ENUM | RFQ类型 | "RFQ_TYPE_FIXED_PLANT" | 定点类型 |
| RFQ | RfqDto | 10-RFQ列表 | 5 | rfqStatus | string | ENUM | RFQ状态 | "ENQUIRING" | |
| RFQ | RfqDto | 10-RFQ列表 | 6 | rfqDesc | string | - | RFQ描述 | — | |
| RFQ | RfqDto | 10-RFQ列表 | 7 | rfqCurrency | string | - | 货币 | "CNY" | |
| RFQ | RfqDto | 10-RFQ列表 | 8 | remarks | string | - | 备注 | — | |
| RFQ | RfqDto | 10-RFQ列表 | 9 | isIssueTargetPrice | boolean | - | 是否发放目标价 | true | |
| RFQ | RfqDto | 10-RFQ列表 | 10 | isTaskComplete | boolean | - | 是否任务完成 | false | |
| RFQ | RfqDto | 10-RFQ列表 | 11 | isFree | boolean | - | 是否允许供应商自由报价 | false | |
| RFQ | RfqDto | 10-RFQ列表 | 12 | needTechnicalReview | boolean | - | 是否需要技术评审 | false | |
| RFQ | RfqDto | 10-RFQ列表 | 13 | reviewReason | string | - | 技术评审原因 | — | |
| RFQ | RfqDto | 10-RFQ列表 | 14 | cancelDate | date | NULLABLE | 取消时间 | null | |
| RFQ | RfqDto | 10-RFQ列表 | 15 | cancelReason | string | NULLABLE | 取消原因 | null | |
| RFQ | RfqDto | 10-RFQ列表 | 16 | endDate | date | - | 结束时间 | — | |
| RFQ | RfqDto | 10-RFQ列表 | 17 | currentRoundId | string | FK→RfqRound | 当前轮次ID | "round_001" | |
| RFQ | RfqDto | 10-RFQ列表 | 18 | buyerId | string | FK→User | 采购工程师ID | "6bc9deb9..." | |
| RFQ | RfqDto | 10-RFQ列表 | 19 | buyerName | string | - | 采购工程师姓名 | "张三" | |
| RFQ | RfqDto | 10-RFQ列表 | 20 | sqeId | string | FK→User | SQE ID | "sqe_001" | |
| RFQ | RfqDto | 10-RFQ列表 | 21 | pdId | string | FK→User | 研发工程师ID | "pd_001" | |
| RFQ | RfqDto | 10-RFQ列表 | 22 | pdName | string | - | 研发工程师姓名 | "李四" | |
| RFQ | RfqDto | 10-RFQ列表 | 23 | logisticsEngId | string | FK→User | 物流工程师ID | "lg_001" | |
| RFQ | RfqDto | 10-RFQ列表 | 24 | lgName | string | - | 物流工程师姓名 | "王五" | |
| RFQ | RfqDto | 10-RFQ列表 | 25 | afterSalesEngId | string | FK→User | 售后工程师ID | "as_001" | |
| RFQ | RfqDto | 10-RFQ列表 | 26 | afterSalesEngName | string | - | 售后工程师姓名 | — | |
| RFQ | RfqDto | 10-RFQ列表 | 27 | planEngId | string | FK→User | 体系工程师ID | "eng_001" | |
| RFQ | RfqDto | 10-RFQ列表 | 28 | costEngId | string | FK→User | 成本工程师ID | "eng_002" | |
| RFQ | RfqDto | 10-RFQ列表 | 29 | asOrdererId | string | FK→User | 售后订单员ID | "ao_001" | |
| RFQ | RfqDto | 10-RFQ列表 | 30 | currentRound | object | - | 当前轮次对象 | 见 RfqRoundDto | |
| RFQ | RfqDto | 10-RFQ列表 | 31 | designReqId | string | FK→DesignReq | SOR/设计需求ID | "dr_001" | |
| RFQ | RfqDto | 10-RFQ列表 | 32 | sorCode | string | - | SOR编码 | "SOR_CL2_0811" | |
| RFQ | RfqDto | 10-RFQ列表 | 33 | versionNo | string | - | SOR版本号 | "V1.0" | |
| RFQ | RfqDto | 10-RFQ列表 | 34 | projectCode | string | - | 采购项目编码(逗号分隔) | "P20260001,P20260002" | |
| RFQ | RfqDto | 10-RFQ列表 | 35 | projectName | string | - | 采购项目名称(逗号分隔) | "MX11项目,MX12项目" | |
| RFQ | RfqDto | 10-RFQ列表 | 36 | plantInfo | string | - | 工厂信息(逗号分隔) | "北京工厂(BJ001)" | |
| RFQ | RfqDto | 10-RFQ列表 | 37 | partCodes | string | - | RFQ所有零件编码(逗号分隔) | "MX11-FCS-001,MX11-FCS-002" | |
| RFQ | RfqDto | 10-RFQ列表 | 38 | partNames | string | - | RFQ所有零件名称(逗号分隔) | "前副车架总成,后副车架总成" | |
| RFQ | RfqDto | 10-RFQ列表 | 39 | supQuoteStatus | string | - | 供应商报价状态(HTML) | "SUP001 公司 \| 已报价" |
| RFQ | RfqDto | 10-RFQ列表 | 40 | nomiStatus | string | ENUM | 首次定点状态 | "TOCREATE" | E-11: TOCREATE/PASS |
| RFQ | RfqRoundDto | 10-RFQ列表(嵌套) | 1 | id | string | PK | 轮次ID | "round_001" | |
| RFQ | RfqRoundDto | 10-RFQ列表(嵌套) | 2 | rfqId | string | FK→Rfq | RFQ ID | — | |
| RFQ | RfqRoundDto | 10-RFQ列表(嵌套) | 3 | roundNo | string | - | 轮次号 | "1" | |
| RFQ | RfqRoundDto | 10-RFQ列表(嵌套) | 4 | status | string | ENUM | 轮次状态 | "FINISHED" | |
| **定点** | NominationAf | 17-定点查询 / 18-创建定点 | — | *(待原始PRD补充)* | — | — | — | — | 接口17/18出参字段待定义 |

---

## 枚举/代码表汇总

| 编号 | 枚举名称 | 枚举值 | 中文含义 | 适用实体/字段 |
|------|----------|--------|----------|---------------|
| E-01 | enterpriseType(公司类型) | FOREIGN_INVESTED | 外资 | SupplierDto.enterpriseType |
| E-02 | type(商务前提类型) | MASS | 量产 | SupplierBusinessPremiseDto.type |
| E-02 | type(商务前提类型) | SAMPLE | 样件 | SupplierBusinessPremiseDto.type |
| E-02 | type(商务前提类型) | AFTERSALES | 售后 | SupplierBusinessPremiseDto.type |
| E-03 | accountingPeriod(账期代码) | V001 | 发票入账后30天付款, 100%现金 | SupplierBusinessPremiseDto.accountingPeriod |
| E-03 | accountingPeriod(账期代码) | V002 | 发票入账后60天付款, 100%现金 | SupplierBusinessPremiseDto.accountingPeriod |
| E-03 | accountingPeriod(账期代码) | V003 | 发票入账后60天付款, 100%承兑 | SupplierBusinessPremiseDto.accountingPeriod |
| E-03 | accountingPeriod(账期代码) | V004 | 发票入账后60天付款, 70%现金+30%承兑 | SupplierBusinessPremiseDto.accountingPeriod |
| E-03 | accountingPeriod(账期代码) | V005 | 发票入账后60天付款, 50%现金+50%承兑 | SupplierBusinessPremiseDto.accountingPeriod |
| E-03 | accountingPeriod(账期代码) | V014 | 发票入账后120天付款, 100%承兑 | SupplierBusinessPremiseDto.accountingPeriod |
| E-03 | accountingPeriod(账期代码) | V015 | 发票入账后180天付款, 100%承兑 | SupplierBusinessPremiseDto.accountingPeriod |
| E-04 | supplierType(供应商类型) | TEMPORARY | 临时供应商 | SupplierListItemDto.supplierType |
| E-04 | supplierType(供应商类型) | POTENTIAL | 预选供应商 | SupplierListItemDto.supplierType |
| E-04 | supplierType(供应商类型) | OFFICIAL | 正式供应商 | SupplierListItemDto.supplierType |
| E-05 | appForm.status(变更审批状态) | DRAFT | 草稿 | SuplChgKeyAfDto.appForm.status |
| E-05 | appForm.status(变更审批状态) | SUBMIT | 审批中 | SuplChgKeyAfDto.appForm.status |
| E-05 | appForm.status(变更审批状态) | PASS | 通过 | SuplChgKeyAfDto.appForm.status |
| E-05 | appForm.status(变更审批状态) | REJECT | 否决 | SuplChgKeyAfDto.appForm.status |
| E-05 | appForm.status(变更审批状态) | FINISHED | 完成 | SuplChgKeyAfDto.appForm.status |
| E-05 | appForm.status(变更审批状态) | CANCELLED | 废弃 | SuplChgKeyAfDto.appForm.status |
| E-05 | appForm.status(变更审批状态) | WITHDRAW | 撤回 | SuplChgKeyAfDto.appForm.status |
| E-05 | appForm.status(变更审批状态) | PENDING | 待审批 | SuplChgKeyAfDto.appForm.status |
| E-06 | status(SOR状态) | DRAFT | 草稿 | DesignReqDto.status |
| E-06 | status(SOR状态) | REJECT | 驳回 | DesignReqDto.status |
| E-06 | status(SOR状态) | SUBMIT | 审批中 | DesignReqDto.status |
| E-06 | status(SOR状态) | PASS | 已发布 | DesignReqDto.status |
| E-06 | status(SOR状态) | ABANDON | 废弃 | DesignReqDto.status |
| E-06 | status(SOR状态) | WITHDRAW | 撤回 | DesignReqDto.status |
| E-06 | status(SOR状态) | DELETE | 已取消 | DesignReqDto.status |
| E-06 | status(SOR状态) | RETURN_TO_DEV | 退回 | DesignReqDto.status |
| E-07 | operationType(零件操作类型) | NEW | 新增 | DesignReqItemDto.operationType |
| E-07 | operationType(零件操作类型) | UPDATE | 更新 | DesignReqItemDto.operationType |
| E-07 | operationType(零件操作类型) | DELETE | 删除 | DesignReqItemDto.operationType |
| E-08 | taskType(审批任务类型) | S | 开始步骤 | HistoryTasksResponseDto.taskType |
| E-08 | taskType(审批任务类型) | H | 历史步骤 | HistoryTasksResponseDto.taskType |
| E-08 | taskType(审批任务类型) | E | 结束步骤 | HistoryTasksResponseDto.taskType |
| E-09 | userType(用户类型) | EMPLOYEE | 内部员工 | UserDto.userType |
| E-09 | userType(用户类型) | 非EMPLOYEE | 非员工(供应商侧) | UserDto.userType |
| E-10 | isActive(账号状态) | true | 有效人员 | UserDto.isActive |
| E-10 | isActive(账号状态) | false | 离职/停用 | UserDto.isActive |
| E-11 | nomiStatus(定点状态) | TOCREATE | 待创建 | RfqDto.nomiStatus |
| E-11 | nomiStatus(定点状态) | PASS | 已通过 | RfqDto.nomiStatus |
| E-12 | delayStatus(RFQ查询范围) | mine | 我的(默认) | rfq info list --delay-status |
| E-12 | delayStatus(RFQ查询范围) | all | 全部 | rfq info list --delay-status |
| E-13 | nodeType(车型节点类型) | PLATFORM | 平台(bomLevel=2) | VehicleTree 各层级.nodeType |
| E-13 | nodeType(车型节点类型) | PROJECT | 项目(bomLevel=3) | VehicleTree 各层级.nodeType |
| E-13 | nodeType(车型节点类型) | BASE_MODEL | 基础车型(bomLevel=4) | VehicleTree 各层级.nodeType |

---

## 跨接口字段接力关系

| 源接口 | 源字段 | → | 目标接口 | 目标入参 | 类型一致性 |
|--------|--------|---|----------|----------|------------|
| 2-供应商列表 | id | → | 1-供应商详情 | --id | string=string |
| 3-变更单列表 | oldHisId | → | 4-变更对比 | --old-his-id | string=string |
| 3-变更单列表 | newHisId | → | 4-变更对比 | --new-his-id | string=string |
| 5-SOR列表 | id | → | 6-车型查询 | --sor-id | string=string |
| 5-SOR列表 | id | → | 7-零件列表 | --sor-id | string=string |
| 5-SOR列表 | id | → | 8-审批历史 | --rec-id | string=string |
| 10-RFQ列表 | id | → | 11-询报价条目 | --rfq-id | string=string |
| 10-RFQ列表 | sorCode | → | 13-预选供应商信息 | --sor-code | string=string |
| 10-RFQ列表 | sorCode | → | 15-物流信息 | --sor-code | string=string |
| 10-RFQ列表 | id | → | 17-定点查询 | --rfq-id | string=string |
| 10-RFQ列表 | id | → | 18-创建定点 | --rfq-id | string=string |
| 11-询报价条目 | id | → | 12-询报价供应商 | --rfq-quotes-info-id | string=string |

---

## 接口输入参数全量汇总

| CLI 命令 | 参数名 | 类型 | 必选 | 默认值 | 校验规则 | 说明 |
|----------|--------|------|------|--------|----------|------|
| dx-ep supplier info query | --id | string | 是 | - | NotBlank | 供应商主键ID |
| dx-ep supplier info list | --name | string | 否 | - | - | 供应商名称(模糊) |
| dx-ep supplier info list | --code | string | 否 | - | - | 供应商编码(模糊) |
| dx-ep supplier info list | --page | int | 否 | 1 | - | 页码 |
| dx-ep supplier info list | --page-size | int | 否 | 50 | - | 每页条数 |
| dx-ep supplier change list | --name | string | 否 | - | - | 供应商名称(模糊) |
| dx-ep supplier change list | --code | string | 否 | - | - | 供应商编码(精确) |
| dx-ep supplier change list | --page | int | 否 | 1 | >0 | 页码 |
| dx-ep supplier change list | --page-size | int | 否 | 50 | 1~100 | 每页条数 |
| dx-ep supplier changecompare detail | --old-his-id | string | 是 | - | NotBlank | 变更前历史记录ID |
| dx-ep supplier changecompare detail | --new-his-id | string | 是 | - | NotBlank | 变更后历史记录ID |
| dx-ep sor info list | --code | string | 否 | - | - | SOR编号 |
| dx-ep sor info list | --material-num | string | 否 | - | - | 零件号 |
| dx-ep sor info list | --latest | boolean | 否 | true | - | 仅查最新版本 |
| dx-ep sor info list | --page | int | 否 | 1 | - | 页码 |
| dx-ep sor info list | --page-size | int | 否 | 50 | - | 每页条数 |
| dx-ep sor vehicle query | --sor-id | string | 是 | - | - | SOR主键ID |
| dx-ep sor vehicle query | --projectId | string | 是 | - | - | 采购项目ID(逗号分隔) |
| dx-ep sor part list | --sor-id | string | 是 | - | - | SOR主键ID |
| dx-ep sor part list | --page | int | 否 | 1 | - | 页码 |
| dx-ep sor part list | --page-size | int | 否 | 50 | - | 每页条数 |
| dx-ep sor process-history query | --rec-id | string | 是 | - | - | 业务记录ID(SOR主键) |
| dx-ep sor process-history query | --rec-type-id | long | 否 | 995001 | - | 记录类型ID(固定) |
| dx-ep sor process-history query | --controller-name | string | 否 | DesignReqItem2 | - | 控制名(固定) |
| dx-ep sor process-history query | --view-name | string | 否 | GantDetailMultWindow | - | 视图名(固定) |
| dx-ep user info query | --id | string | 是 | - | NotBlank | 用户主键ID |
| dx-ep rfq info list | --rfq-code | string | 否 | - | - | RFQ编号(模糊) |
| dx-ep rfq info list | --rfq-name | string | 否 | - | - | RFQ名称(模糊) |
| dx-ep rfq info list | --material-num | string | 否 | - | - | 零件号(模糊) |
| dx-ep rfq info list | --sor-code | string | 否 | - | - | SOR编码(模糊) |
| dx-ep rfq info list | --delay-status | string | 否 | mine | - | 查询范围: mine/all |
| dx-ep rfq info list | --page | int | 否 | 1 | - | 页码 |
| dx-ep rfq info list | --page-size | int | 否 | 50 | - | 每页条数 |
| dx-ep rfq quote list | --rfq-id | string | 是 | - | - | RFQ ID |
| dx-ep rfq quote list | --round-no | string | 是 | - | - | 轮次号 |
| dx-ep rfq release list | --rfq-quotes-info-id | string | 是 | - | - | 报价条目ID |
| dx-ep rfq bidderaf query | --sor-code | string | 否 | - | - | SOR编码 |
| dx-ep rfq bidderaf query | --rfq-code | string | 否 | - | - | RFQ编码 |
| dx-ep rfq bidderaf list | --rfq-code | string | 是 | - | - | RFQ编码 |
| dx-ep rfq logistics list | --sor-code | string | 否 | - | - | SOR编码 |
| dx-ep rfq logistics list | --rfq-code | string | 否 | - | - | RFQ编码 |
| dx-ep rfq round supplier list | --rfq-id | string | 是 | - | - | RFQ ID |
| dx-ep nomi nomiaf query | --sor-code | string | 否 | - | - | SOR编码 |
| dx-ep nomi nomiaf query | --rfq-code | string | 否 | - | - | RFQ编码 |
| dx-ep nomi nomiaf create | --rfq-id | string | 是 | - | - | RFQ ID |

---

## 统计概览

| 维度 | 数量 |
|------|------|
| 业务域 | 5 (供应商/SOR/通用/RFQ/定点) |
| CLI 接口总数 | 18 |
| 核心业务实体 | 12 |
| 已定义完整出参的实体 | 10 (接口1~10) |
| 出参待补充的接口 | 8 (接口11~18) |
| 全量入参字段 | 43 |
| 已定义出参字段行数 | ~180 |
| 枚举/代码表 | 13 |
| 枚举映射条目 | 48 |
| 跨接口接力关系 | 12 条 |

---

## 待补充项

| 接口编号 | CLI 命令 | 接口路径 | 已知出参描述 |
|----------|----------|----------|--------------|
| 11 | dx-ep rfq quote list | /custom/rfqQuotesInfo/findQuotesByRfqIdAndRoundNo.api | 包含发包日期、供应商报价日期等报价详情 |
| 12 | dx-ep rfq release list | /custom/rfqReleaseInfo/doFindByRfqQuotesInfoId.api | 含供应商发放状态、报价状态详情、联系人信息和时间线 |
| 13 | dx-ep rfq bidderaf query | /custom/rfqBidderAf/findLatestBySorCode.api | 含SQE/研发审核状态和供应商列表 |
| 14 | dx-ep rfq bidderaf list | /custom/rfqBidderAf/find.api | 含SQE/研发审核状态 |
| 15 | dx-ep rfq logistics list | /custom/rfqQuotesInfo/findRfqRoundSupplierFile.api | 含物流信息和产能调查状态 |
| 16 | dx-ep rfq round supplier list | /custom/rfqQuotesInfo/findSupplierByCurrentRoundNo.api | 当前轮次完成报价的供应商列表 |
| 17 | dx-ep nomi nomiaf query | /custom/nominationAf/find.api | 定点申请单信息 |
| 18 | dx-ep nomi nomiaf create | /custom/nominationAf/create.api | 创建定点申请单草稿结果 |
