---
created: '2026-07-24'
tags: [Xiaomi, AI, 数据]
---

---tags: [Xiaomi]
created: 2026-07-08
updated: 2026-07-22
status: draft
---
﻿---
created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 采购, 数据]
---

> [!summary] EP CLI数据字典 — 18个接口全量字段定义
> - **核心**：按数据开发流程提炼EP系统CLI接口的数据字典，覆盖5个业务域、18个接口、12+业务实体
> - **要点**：含供应商/SOR/RFQ/定点等实体关系图、完整字段定义、13张枚举代码表、跨接口接力关系
> - **关联**：[[⚙️EP-CLI字段地图-大宽表]] · [[⚙️EP CLI应用]]

# EP CLI 数据字典

> 基于接口CLI化需求文档 v1.0，按数据开发流程提炼
> 覆盖 5 个业务域、18 个 CLI 接口、6 大核心业务实体

---

## 1. 数据范围与业务域

| 业务域 | 英文标识 | 实体数 | 接口数 | 说明 |
|--------|----------|--------|--------|------|
| 供应商 | Supplier | 3 | 4 | 供应商主数据、变更单、变更快照 |
| SOR | DesignReq | 3 | 4 | SOR主数据、车型树、零件条目 |
| 通用 | User | 1 | 1 | 用户/人员信息 |
| RFQ | RFQ | 4 | 7 | RFQ主数据、轮次、报价条目、预选供应商 |
| 定点 | Nomination | 1 | 2 | 定点申请单 |

---

## 2. 核心业务实体关系

```
Supplier (供应商)
  ├── 1:N ── SupplierBusinessPremise (商务前提: 量产/样件/售后)
  └── 1:N ── SupplierChangeHis (变更快照)
                  └── N:1 ── SuplChgKeyAf (变更申请单)

DesignReq (SOR)
  ├── 1:N ── DesignReqItem (零件条目)
  │              └── N:M ── VehicleNode (车型节点装配关系)
  └── 1:N ── ProcessHistory (审批历史)

RFQ
  ├── 1:N ── RfqRound (轮次)
  │              ├── 1:N ── RfqQuotesInfo (报价条目)
  │              │              └── 1:N ── RfqReleaseInfo (供应商发放)
  │              └── 1:N ── RfqRoundSupplierFile (物流文件)
  ├── 1:N ── RfqBidderAf (预选供应商申请单)
  └── 1:1 ── NominationAf (定点申请单)

User (用户)
  └── 被 Supplier.buyerName、RFQ.buyerName 等多处引用
```

---

## 3. 供应商域数据字典

### 3.1 SupplierDto — 供应商主数据

> 来源接口: `dx-ep supplier info query` (接口1)
> 表用途: 供应商基本信息、财务信息、商务前提

| # | 字段路径 | 数据类型 | 约束 | 业务含义 | 示例值 | 备注 |
|---|----------|----------|------|----------|--------|------|
| 1 | id | string | PK, NotBlank | 供应商主键ID | "8a27a9ae9db56321019db911db280001" | UUID生成 |
| 2 | orgCode | string | UNIQUE | 供应商编码 | "V10001" | 正式供应商编码 |
| 3 | orgName | string | NOT NULL | 供应商名称 | "苏州智选电子有限公司" | 中文名 |
| 4 | orgNameEn | string | - | 供应商英文名称 | "Shenzhen Longhorn Automotive..." | |
| 5 | enterpriseType | string | ENUM | 公司类型 | "FOREIGN_INVESTED" | 见枚举表 E-01 |
| 6 | certificate | string | - | 资质认证 | "IATF16949,ISO9001" | 逗号分隔 |
| 7 | addressStrng | string | - | 制造地址 | "江苏省苏州市工业园区顺风路88号" | |
| 8 | buyerName | string | FK→User | 采购员姓名 | "张采购" | |
| 9 | accountingPeriodDay | string | - | 量产账期天数 | "90" | |
| 10 | paymentCashRatio | string | - | 量产-现金比例(%) | "50" | |
| 11 | paymentChitRatio | string | - | 量产-承兑比例(%) | "50" | |
| 12 | accountingPeriodDaySample | string | - | 样件账期天数 | "60" | |
| 13 | accountingPeriodDayAfterSales | string | - | 售后账期天数 | "120" | |
| 14 | settlementBank | object | - | 电汇银行信息 | 见 3.2 | 嵌套对象 |
| 15 | acceptingBank | object | - | 承兑银行信息 | 见 3.3 | 嵌套对象 |
| 16 | supplierBusinessPremises[] | array | - | 商务前提列表 | 见 3.4 | 按type区分量产/样件/售后 |

### 3.2 SettlementBankDto — 电汇银行

> 嵌套于 SupplierDto.settlementBank

| # | 字段 | 数据类型 | 约束 | 业务含义 | 示例值 |
|---|------|----------|------|----------|--------|
| 1 | bankName | string | - | 电汇银行名称 | "中国工商银行苏州分行" |
| 2 | bankAccount | string | - | 电汇银行账号 | "6222021001002233445" |

### 3.3 AcceptingBankDto — 承兑银行

> 嵌套于 SupplierDto.acceptingBank

| # | 字段 | 数据类型 | 约束 | 业务含义 | 示例值 |
|---|------|----------|------|----------|--------|
| 1 | bankName | string | - | 承兑银行名称 | "招商银行苏州市支行" |
| 2 | bankAccount | string | - | 承兑银行账号 | "121900012345678" |

### 3.4 SupplierBusinessPremiseDto — 商务前提

> 嵌套于 SupplierDto.supplierBusinessPremises[]
> 按 type 字段区分: MASS(量产) / SAMPLE(样件) / AFTERSALES(售后)

| # | 字段 | 数据类型 | 约束 | 业务含义 | 示例值 | 备注 |
|---|------|----------|------|----------|--------|------|
| 1 | id | string | PK | 商务前提ID | "8a621d9e..." | |
| 2 | supplierId | string | FK→Supplier | 供应商ID | "764329453351131" | |
| 3 | type | string | ENUM | 类型 | "MASS" | 见枚举表 E-02 |
| 4 | versionNo | int | - | 版本号 | 10002 | |
| 5 | accountingPeriod | string | ENUM | 账期代码 | "V002" | 见枚举表 E-03 |
| 6 | suplChgKeyAfId | string | FK→SuplChgKeyAf | 变更申请单ID | "8a621d9e..." | |
| 7 | suplChgKeyAfCode | string | - | 变更申请单号 | "SC20260300005" | |
| 8 | startDate | string (datetime) | - | 生效日期 | "2026-03-04 00:00:00" | |
| 9 | endDate | string (datetime) | - | 失效日期 | "2099-12-31 23:59:59" | |

### 3.5 SupplierListItemDto — 供应商列表项

> 来源接口: `dx-ep supplier info list` (接口2)

| # | 字段 | 数据类型 | 约束 | 业务含义 | 示例值 | 备注 |
|---|------|----------|------|----------|--------|------|
| 1 | id | string | PK | 供应商主键ID | "8a27a9ae..." | 接力→接口1 |
| 2 | orgCode | string | - | 供应商编码 | "V10001" | |
| 3 | orgName | string | - | 供应商名称 | "苏州智选电子有限公司" | |
| 4 | supplierType | string | ENUM | 供应商类型 | "OFFICIAL" | 见枚举表 E-04 |

### 3.6 SuplChgKeyAfDto — 供应商变更申请单

> 来源接口: `dx-ep supplier change list` (接口3)

| # | 字段路径 | 数据类型 | 约束 | 业务含义 | 示例值 | 备注 |
|---|----------|----------|------|----------|--------|------|
| 1 | id | string | PK | 变更申请单主键ID | "8a27a9ae..." | |
| 2 | appFormId | string | - | 关联表单ID | "AF_UUID_101" | |
| 3 | oldHisId | string | - | 变更前快照ID | "HIS_OLD_001" | 接力→接口4 |
| 4 | newHisId | string | - | 变更后快照ID | "HIS_NEW_002" | 接力→接口4 |
| 5 | supplierId | string | FK→Supplier | 供应商ID | "SUP_001" | |
| 6 | changeContentTypes | string | - | 变更要素描述 | "供应商名称,注册地址,电汇银行账号" | 逗号分隔 |
| 7 | appForm.code | string | - | 变更申请单号 | "SC2024040001" | |
| 8 | appForm.name | string | - | 申请单名称 | "苏州智选电子 - 信息变更申请" | |
| 9 | appForm.status | string | ENUM | 审批状态 | "PASS" | 见枚举表 E-05 |
| 10 | appForm.auditDate | string (datetime) | - | 变更生效时间 | "2024-04-20 10:00:00" | |
| 11 | supplier.orgName | string | - | 供应商名称 | "苏州智选电子有限公司" | |
| 12 | supplier.orgCode | string | - | 供应商编码 | "100001" | |

### 3.7 SupplierChangeHis — 供应商变更快照（对比视图）

> 来源接口: `dx-ep supplier changecompare detail` (接口4)
> 顶层为 newChangeHis（变更后）和 oldChangeHis（变更前）两个对称对象

#### 3.7.1 变更差异标识字段

| # | 字段 | 数据类型 | 业务含义 | 说明 |
|---|------|----------|----------|------|
| 1 | differentSameAddress | boolean | 生产工厂/制造地是否有变 | false=有变化 |
| 2 | differentSameCertification | boolean | 认证体系是否变化 | false=有变化 |
| 3 | differentSameCaps | boolean | 公司股比是否变化 | false=有变化 |
| 4 | differentSameCompostion | boolean | 人员构成是否变化 | false=有变化 |
| 5 | differentRegisterAddress | boolean | 注册地址是否有变 | false=有变化 |

#### 3.7.2 SupplierChangeHis 主体字段

| # | 字段 | 数据类型 | 业务含义 | 示例值 |
|---|------|----------|----------|--------|
| 1 | id | string | 主键ID | "8a87f6e198843070019898cdf6140093" |
| 2 | orgName | string | 供应商名称 | "某某科技有限公司" |
| 3 | orgNameEn | string | 供应商英文名称 | "XX Technology Co., Ltd." |
| 4 | orgSimpleName | string | 供应商简称 | "某某科技" |
| 5 | orgSimpleNameEn | string | 供应商简称英文 | "XX Tech" |
| 6 | orgSimpleCode | string | 供应商简码 | "MOUMOU" |
| 7 | orgCode | string | 供应商编码 | "SUP20260001" |
| 8 | orgTempCode | string | 临时编码 | "TEMP001" |
| 9 | suplChgKeyAfId | string | 变更申请单ID | "8a87f6e1..." |
| 10 | supplierId | string | 供应商ID | "8a87f6e1..." |
| 11 | inDate | date | 生效时间 | 2026-01-01 |
| 12 | outDate | date | 失效时间 | null |
| 13 | addressId | string | 地址ID | "8a87f6e1..." |
| 14 | address | object | 公司地址 | 见 3.7.3 |
| 15 | settlementBankId | string | 结算银行ID | "8a87f6e1..." |
| 16 | settlementBank | object | 结算账户 | 见 3.7.4 |
| 17 | acceptingBankId | string | 承兑银行ID | "8a87f6e1..." |
| 18 | acceptingBank | object | 承兑银行 | 见 3.7.5 |
| 19 | massBusinessPremise | object | 量产商务前提 | 见 3.7.6 |
| 20 | sampleBusinessPremise | object | 样件商务前提 | 见 3.7.7 |
| 21 | afterSalesBusinessPremise | object | 售后商务前提 | 见 3.7.8 |
| 22 | businessScope | string | 经营范围 | "主营汽车娱乐app..." |
| 23 | income | number | 收入 | 47000 |
| 24 | numberOfEmployees | int | 员工人数 | 312 |
| 25 | registeredCapital | number | 注册资本 | 1122 |
| 26 | legalPerson | string | 法定代表人 | "张某某" |
| 27 | registeredDate | date | 注册日期 | 2008-12-04 |
| 28 | duns | string | DUNS编码 | "202112217413381134" |
| 29 | certificate | string | 资质认证 | "ISO9001,IATF16949" |
| 30 | accountingPeriod | string | 账期代码 | "V003" |
| 31 | paymentCashRatio | string | 现金比例 | "12" |
| 32 | paymentChitRatio | string | 承兑比例 | "88" |
| 33 | chitAccountingPeriod | string | 承兑汇票账期 | "3" |
| 34 | accountingPeriodAfterSales | string | 售后账期 | "V001" |
| 35 | supplierType | string | 供应商类型 | "POTENTIAL" |
| 36 | enterpriseType | string | 公司类型 | "3" |
| 37 | officialWebsite | string | 官方网站 | "https://..." |
| 38 | domesticSupplier | string | 是否国内供应商 | "1" |
| 39 | monetaryUnit | string | 货币单位 | "CNY" |

#### 3.7.3 address — 公司地址

| # | 字段 | 数据类型 | 业务含义 | 示例值 |
|---|------|----------|----------|--------|
| 1 | id | string | 地址ID | "8a87f6e1..." |
| 2 | country | string | 国家 | "CN" |
| 3 | provinces | string | 省份 | "北京市" |
| 4 | city | string | 城市 | "北京市" |
| 5 | county | string | 区县 | "朝阳区" |
| 6 | address | string | 详细地址 | "某某路123号" |
| 7 | addressEn | string | 英文地址 | "No.123 XX Road" |

#### 3.7.4 settlementBank — 结算银行

| # | 字段 | 数据类型 | 业务含义 | 示例值 |
|---|------|----------|----------|--------|
| 1 | id | string | 结算银行ID | "8a87f6e1..." |
| 2 | bankName | string | 银行名称 | "中国银行" |
| 3 | accountName | string | 账户名称 | "某某科技有限公司" |
| 4 | accountNo | string | 账号 | "1234567890123456" |

#### 3.7.5 acceptingBank — 承兑银行

| # | 字段 | 数据类型 | 业务含义 | 示例值 |
|---|------|----------|----------|--------|
| 1 | id | string | 承兑银行ID | "8a87f6e1..." |
| 2 | bankName | string | 银行名称 | "中国工商银行" |
| 3 | accountName | string | 账户名称 | "某某科技有限公司" |
| 4 | accountNo | string | 账号 | "9876543210123456" |

#### 3.7.6 massBusinessPremise — 量产商务前提

| # | 字段 | 数据类型 | 业务含义 | 示例值 |
|---|------|----------|----------|--------|
| 1 | id | string | 量产商务前提ID | "8a87f6e1..." |
| 2 | type | string | 类型 | "MASS" |
| 3 | accountingPeriod | string | 账期 | "V005" |
| 4 | chitAccountingPeriod | string | 承兑汇票账期 | "1" |
| 5 | startDate | date | 生效日期 | 2026-01-01 |

#### 3.7.7 sampleBusinessPremise — 样件商务前提

| # | 字段 | 数据类型 | 业务含义 | 示例值 |
|---|------|----------|----------|--------|
| 1 | id | string | 样件商务前提ID | "8a87f6e1..." |
| 2 | type | string | 类型 | "SAMPLE" |
| 3 | accountingPeriod | string | 账期 | "V012" |
| 4 | chitAccountingPeriod | string | 承兑汇票账期 | "12" |
| 5 | startDate | date | 生效日期 | 2026-04-23 |

#### 3.7.8 afterSalesBusinessPremise — 售后商务前提

| # | 字段 | 数据类型 | 业务含义 | 示例值 |
|---|------|----------|----------|--------|
| 1 | id | string | 售后商务前提ID | "8a87f6e1..." |
| 2 | type | string | 类型 | "AFTERSALES" |
| 3 | accountingPeriod | string | 账期 | "X051" |
| 4 | startDate | date | 生效日期 | 2026-04-21 |

---

## 4. SOR 域数据字典

### 4.1 DesignReqDto — SOR 主数据

> 来源接口: `dx-ep sor info list` (接口5)

| # | 字段路径 | 数据类型 | 约束 | 业务含义 | 示例值 | 备注 |
|---|----------|----------|------|----------|--------|------|
| 1 | id | string | PK | SOR ID | "SOR_8899_UUID" | 接力→接口6/7/8 |
| 2 | code | string | UNIQUE | SOR编码 | "SOR-2024-EV-001" | |
| 3 | name | string | NOT NULL | SOR名称 | "小米SU7前围模块SOR" | |
| 4 | status | string | ENUM | SOR状态 | "PASS" | 见枚举表 E-06 |
| 5 | versionNo | string | - | 版本号 | "V1.0" | |
| 6 | classifyCode | string | - | 分类编码 | "A1" | |
| 7 | taskStatus | string | - | 任务状态 | "ISSUED" | |
| 8 | isLatest | boolean | - | 是否最新版本 | true | |
| 9 | submitBy | object | FK→User | 研发工程师 | {"userName":"王研发"} | |
| 10 | productProjects[] | array | - | 关联采购项目 | 见 4.2 | |

### 4.2 ProductProject — 采购项目

> 嵌套于 DesignReqDto.productProjects[]

| # | 字段 | 数据类型 | 业务含义 | 示例值 |
|---|------|----------|----------|--------|
| 1 | id | string | 项目主键 | - |
| 2 | code | string | 采购项目编码 | "Modena(8041)" |

### 4.3 VehicleTree — 车型树（三级结构）

> 来源接口: `dx-ep sor vehicle query` (接口6)
> 返回三级树形结构：平台→项目→基础车型

#### 4.3.1 PlatFormLevelNode — 平台节点（一级）

| # | 字段 | 数据类型 | 约束 | 业务含义 | 示例值 |
|---|------|----------|------|----------|--------|
| 1 | platFormNode.id | string | PK | 平台节点ID | "plat_001" |
| 2 | platFormNode.nodeCode | string | - | 平台编码 | "MS11" |
| 3 | platFormNode.nodeName | string | - | 平台名称 | "MS11平台" |
| 4 | platFormNode.nodeType | string | ENUM | 节点类型 | "PLATFORM" |
| 5 | platFormNode.bomLevel | int | - | BOM层级 | 2 |

#### 4.3.2 ProjectLevelNode — 项目节点（二级）

| # | 字段 | 数据类型 | 约束 | 业务含义 | 示例值 |
|---|------|----------|------|----------|--------|
| 1 | projectNode.id | string | PK | 项目节点ID | "prj_001" |
| 2 | projectNode.nodeCode | string | - | 项目编码 | "SU7" |
| 3 | projectNode.nodeName | string | - | 项目名称 | "小米SU7" |
| 4 | projectNode.nodeType | string | ENUM | 节点类型 | "PROJECT" |
| 5 | projectNode.bomLevel | int | - | BOM层级 | 3 |

#### 4.3.3 BaseNode — 基础车型节点（三级）

| # | 字段 | 数据类型 | 约束 | 业务含义 | 示例值 |
|---|------|----------|------|----------|--------|
| 1 | baseNodes[].id | string | PK | 车型节点ID | "base_001" |
| 2 | baseNodes[].nodeCode | string | - | 车型编码 | "SU7-STD" |
| 3 | baseNodes[].nodeName | string | - | 车型名称 | "基础车型-标准版" |
| 4 | baseNodes[].nodeType | string | ENUM | 节点类型 | "BASE_MODEL" |
| 5 | baseNodes[].bomLevel | int | - | BOM层级 | 4 |
| 6 | baseNodes[].isBomNode | boolean | - | 是否BOM节点 | true |
| 7 | baseNodes[].isForSale | boolean | - | 是否可销售 | true |
| 8 | baseNodes[].status | string | - | 节点状态 | "ACTIVE" |

### 4.4 DesignReqItemDto — SOR 零件条目

> 来源接口: `dx-ep sor part list` (接口7)
> 注意: node{车型节点ID} 为动态字段，由车型节点ID拼接

| # | 字段 | 数据类型 | 约束 | 业务含义 | 示例值 | 备注 |
|---|------|----------|------|----------|--------|------|
| 1 | id | string | PK | SOR行项目ID | "8a87f6e1..." | |
| 2 | pdId | string | FK→User | 产品经理ID | "pd_20250801_001" | |
| 3 | operationType | string | ENUM | 操作类型 | "NEW" | 见枚举表 E-07 |
| 4 | devType | string | - | 开发类型 | "DEV_NEW" | |
| 5 | partTechDesc | string | - | 零件技术描述 | "前保险杠总成 - 高配版本" | |
| 6 | isChange | string | - | 是否变更 | "0" | 0=否, 1=是 |
| 7 | partId | string | FK→Part | 零件ID | "part_001" | |
| 8 | materialNum | string | NOT NULL | 物料号 | "MX11-BUMPER-001" | |
| 9 | materialName | string | - | 物料名称 | "前保险杠总成" | |
| 10 | measurementUnit | string | - | 计量单位 | "EA" | |
| 11 | subDataType | string | - | 子数据类型 | "PURCHASED" | |
| 12 | qualityId | string | FK→User | 质量工程师ID | "quality_001" | |
| 13 | designReqId | string | FK→DesignReq | SOR ID | "dr_20250801_001" | |
| 14 | applyTo | string | - | 适用范围 | "ALL" | |
| 15 | node{车型节点ID}.count | BigDecimal | - | 单车用量 | 1 | 动态字段 |
| 16 | node{车型节点ID}.percent | BigDecimal | - | 装配比例 | 100 | 动态字段 |

### 4.5 HistoryTasksResponseDto — SOR 审批历史

> 来源接口: `dx-ep sor process-history query` (接口8)

| # | 字段 | 数据类型 | 约束 | 业务含义 | 示例值 | 备注 |
|---|------|----------|------|----------|--------|------|
| 1 | id | string | PK | 任务ID | "TASK001" | |
| 2 | processId | string | - | 流程ID | "PROC001" | |
| 3 | resourceName | string | - | 资源名称 | "前大灯总成SOR" | |
| 4 | processDetail | string | - | 流程描述 | "SOR审批流程" | |
| 5 | createBy | string | FK→User | 创建人ID | "USER001" | |
| 6 | createByName | string | - | 创建人姓名 | "张三" | |
| 7 | taskName | string | - | 环节名称 | "采购工程师审批" | |
| 8 | startDate | string (datetime) | - | 开始时间 | "2024-06-01 10:00:00" | |
| 9 | finishDate | string (datetime) | NULLABLE | 完成时间 | "2024-06-02 14:30:00" | null=进行中 |
| 10 | actionName | string | - | 动作/结果 | "通过" | |
| 11 | caller | string | FK→User | 处理人ID | "USER001" | |
| 12 | callerName | string | - | 处理人姓名 | "张三" | |
| 13 | approveComment | string | - | 审批意见 | "同意，供应商资质符合要求" | |
| 14 | taskType | string | ENUM | 任务类型 | "H" | 见枚举表 E-08 |
| 15 | statusCode | int | - | 状态码 | 2 | |
| 16 | statusName | string | - | 状态名称 | "已完成" | |

---

## 5. 通用域数据字典

### 5.1 UserDto — 用户信息

> 来源接口: `dx-ep user info query` (接口9)

| # | 字段 | 数据类型 | 约束 | 业务含义 | 示例值 | 备注 |
|---|------|----------|------|----------|--------|------|
| 1 | id | string | PK, NotBlank | 用户主键ID(UUID) | "b1c6df265edd4b34a114666584e53588" | |
| 2 | userName | string | NOT NULL | 用户真实姓名 | "张三" | |
| 3 | userLoginName | string | - | 用户登录账号 | "chuhuo" | |
| 4 | email | string | - | 电子邮箱 | "zhangsan@xiaomi.com" | |
| 5 | userType | string | ENUM | 用户类型 | "EMPLOYEE" | 见枚举表 E-09 |
| 6 | mobile | string | - | 联系电话 | "13800000000" | |
| 7 | organizationName | string | - | 所属部门 | "汽车部-采购组" | |
| 8 | isActive | boolean | - | 账号状态 | true | 见枚举表 E-10 |

---

## 6. RFQ 域数据字典

### 6.1 RfqDto — RFQ 主数据

> 来源接口: `dx-ep rfq info list` (接口10)

| # | 字段路径 | 数据类型 | 约束 | 业务含义 | 示例值 | 备注 |
|---|----------|----------|------|----------|--------|------|
| 1 | id | string | PK | RFQ ID | "8a87f6e1..." | 接力→接口11/17/18 |
| 2 | rfqCode | string | UNIQUE | RFQ编码 | "RFQ-20250811-002" | |
| 3 | rfqName | string | NOT NULL | RFQ名称 | "SOR_CL2_0811" | |
| 4 | rfqType | string | ENUM | RFQ类型 | "RFQ_TYPE_FIXED_PLANT" | 定点类型 |
| 5 | rfqStatus | string | ENUM | RFQ状态 | "ENQUIRING" | |
| 6 | rfqDesc | string | - | RFQ描述 | — | |
| 7 | rfqCurrency | string | - | 货币 | "CNY" | |
| 8 | remarks | string | - | 备注 | — | |
| 9 | isIssueTargetPrice | boolean | - | 是否发放目标价 | true | |
| 10 | isTaskComplete | boolean | - | 是否任务完成 | false | |
| 11 | isFree | boolean | - | 是否允许供应商自由报价 | false | |
| 12 | needTechnicalReview | boolean | - | 是否需要技术评审 | false | |
| 13 | reviewReason | string | - | 技术评审原因 | — | |
| 14 | cancelDate | date | NULLABLE | 取消时间 | null | |
| 15 | cancelReason | string | NULLABLE | 取消原因 | null | |
| 16 | endDate | date | - | 结束时间 | — | |
| 17 | currentRoundId | string | FK→RfqRound | 当前轮次ID | "round_001" | |
| 18 | buyerId | string | FK→User | 采购工程师ID | "6bc9deb9..." | |
| 19 | buyerName | string | - | 采购工程师姓名 | "张三" | |
| 20 | sqeId | string | FK→User | SQE ID | "sqe_001" | |
| 21 | pdId | string | FK→User | 研发工程师ID | "pd_001" | |
| 22 | pdName | string | - | 研发工程师姓名 | "李四" | |
| 23 | logisticsEngId | string | FK→User | 物流工程师ID | "lg_001" | |
| 24 | lgName | string | - | 物流工程师姓名 | "王五" | |
| 25 | afterSalesEngId | string | FK→User | 售后工程师ID | "as_001" | |
| 26 | afterSalesEngName | string | - | 售后工程师姓名 | — | |
| 27 | planEngId | string | FK→User | 体系工程师ID | "eng_001" | |
| 28 | costEngId | string | FK→User | 成本工程师ID | "eng_002" | |
| 29 | asOrdererId | string | FK→User | 售后订单员ID | "ao_001" | |
| 30 | currentRound | object | - | 当前轮次对象 | 见 6.2 | |
| 31 | designReqId | string | FK→DesignReq | SOR/设计需求ID | "dr_001" | |
| 32 | sorCode | string | - | SOR编码 | "SOR_CL2_0811" | |
| 33 | versionNo | string | - | SOR版本号 | "V1.0" | |
| 34 | projectCode | string | - | 采购项目编码（逗号分隔） | "P20260001,P20260002" | |
| 35 | projectName | string | - | 采购项目名称（逗号分隔） | "MX11项目,MX12项目" | |
| 36 | plantInfo | string | - | 工厂信息（逗号分隔） | "北京工厂(BJ001)" | |
| 37 | partCodes | string | - | RFQ所有零件编码（逗号分隔） | "MX11-FCS-001,MX11-FCS-002" | |
| 38 | partNames | string | - | RFQ所有零件名称（逗号分隔） | "前副车架总成,后副车架总成" | |
| 39 | supQuoteStatus | string | - | 供应商报价状态（HTML格式） | "SUP001 公司 \| 已报价" |
| 40 | nomiStatus | string | ENUM | 首次定点状态 | "TOCREATE" | 见枚举表 E-11 |

### 6.2 RfqRoundDto — RFQ 轮次

> 嵌套于 RfqDto.currentRound

| # | 字段 | 数据类型 | 约束 | 业务含义 | 示例值 |
|---|------|----------|------|----------|--------|
| 1 | id | string | PK | 轮次ID | "round_001" |
| 2 | rfqId | string | FK→Rfq | RFQ ID | — |
| 3 | roundNo | string | - | 轮次号 | "1" |
| 4 | status | string | ENUM | 轮次状态 | "FINISHED" |

---

## 7. 定点域数据字典

### 7.1 NominationAf — 定点申请单

> 来源接口: `dx-ep nomi nomiaf query` (接口17) / `dx-ep nomi nomiaf create` (接口18)
> 注: 原始PRD中该接口的详细字段定义待补充

| # | 字段 | 数据类型 | 业务含义 | 备注 |
|---|------|----------|----------|------|
| — | *(待原始PRD补充)* | — | — | 接口17/18出参字段待定义 |

---

## 8. 枚举/代码表

### E-01: enterpriseType — 公司类型

| 枚举值 | 中文含义 | 说明 |
|--------|----------|------|
| FOREIGN_INVESTED | 外资 | 外商投资企业 |

### E-02: type (SupplierBusinessPremise) — 商务前提类型

| 枚举值 | 中文含义 | 说明 |
|--------|----------|------|
| MASS | 量产 | 量产阶段商务条件 |
| SAMPLE | 样件 | 样件阶段商务条件 |
| AFTERSALES | 售后 | 售后阶段商务条件 |

### E-03: accountingPeriod — 账期代码

| 枚举值 | 中文含义 | 账期天数 | 付款方式 |
|--------|----------|----------|----------|
| V001 | 发票入账后30天付款 | 30 | 100%现金 |
| V002 | 发票入账后60天付款 | 60 | 100%现金 |
| V003 | 发票入账后60天付款 | 60 | 100%承兑 |
| V004 | 发票入账后60天付款 | 60 | 70%现金，30%承兑 |
| V005 | 发票入账后60天付款 | 60 | 50%现金，50%承兑 |
| V014 | 发票入账后120天付款 | 120 | 100%承兑 |
| V015 | 发票入账后180天付款 | 180 | 100%承兑 |

### E-04: supplierType — 供应商类型

| 枚举值 | 中文含义 | 说明 |
|--------|----------|------|
| TEMPORARY | 临时 | 临时供应商 |
| POTENTIAL | 预选 | 预选供应商 |
| OFFICIAL | 正式 | 正式供应商 |

### E-05: appForm.status — 变更申请单审批状态

| 枚举值 | 中文含义 | 说明 |
|--------|----------|------|
| DRAFT | 草稿 | 未提交 |
| SUBMIT | 审批中 | 已提交审批 |
| PASS | 通过 | 审批通过 |
| REJECT | 否决 | 审批否决 |
| FINISHED | 完成 | 流程完成 |
| CANCELLED | 废弃 | 已废弃 |
| WITHDRAW | 撤回 | 已撤回 |
| PENDING | 待审批 | 等待审批 |

### E-06: status (DesignReq) — SOR 状态

| 枚举值 | 中文含义 | 说明 |
|--------|----------|------|
| DRAFT | 草稿 | 未提交 |
| REJECT | 驳回 | 审批驳回 |
| SUBMIT | 审批中 | 已提交审批 |
| PASS | 已发布 | 审批通过已发布 |
| ABANDON | 废弃 | 已废弃 |
| WITHDRAW | 撤回 | 已撤回 |
| DELETE | 已取消 | 已取消 |
| RETURN_TO_DEV | 退回 | 退回到研发 |

### E-07: operationType — SOR 零件操作类型

| 枚举值 | 中文含义 | 说明 |
|--------|----------|------|
| NEW | 新增 | 新增零件条目 |
| UPDATE | 更新 | 更新已有条目 |
| DELETE | 删除 | 删除零件条目 |

### E-08: taskType — 审批任务类型

| 枚举值 | 中文含义 | 说明 |
|--------|----------|------|
| S | 开始步骤 | 流程起始节点 |
| H | 历史步骤 | 已完成的历史节点 |
| E | 结束步骤 | 流程终止节点 |

### E-09: userType — 用户类型

| 枚举值 | 中文含义 | 说明 |
|--------|----------|------|
| EMPLOYEE | 内部员工 | 小米内部人员 |
| 非EMPLOYEE | 非员工 | 供应商侧账号 |

### E-10: isActive — 账号状态

| 枚举值 | 中文含义 | CLI处理 |
|--------|----------|---------|
| true | 有效人员 | 不做特殊处理 |
| false | 离职/停用 | 姓名标注"(离职/停用)" |

### E-11: nomiStatus — 定点状态

| 枚举值 | 中文含义 | 说明 |
|--------|----------|------|
| TOCREATE | 待创建 | 尚未创建定点申请单 |
| PASS | 已通过 | 定点申请已通过 |

### E-12: delayStatus — RFQ 查询范围

| 枚举值 | 中文含义 | 说明 |
|--------|----------|------|
| mine | 我的 | 默认，仅查自己名下 |
| all | 全部 | 需有查看所有RFQ权限 |

### E-13: nodeType — 车型节点类型

| 枚举值 | 中文含义 | bomLevel |
|--------|----------|----------|
| PLATFORM | 平台 | 2 |
| PROJECT | 项目 | 3 |
| BASE_MODEL | 基础车型 | 4 |

---

## 9. 跨接口字段接力关系

| 源接口 | 源字段 | → | 目标接口 | 目标入参 | 数据类型一致性 |
|--------|--------|---|----------|----------|----------------|
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

## 10. 接口输入参数全量汇总

| CLI 命令 | 参数名 | 类型 | 必选 | 默认值 | 校验规则 | 说明 |
|----------|--------|------|------|--------|----------|------|
| dx-ep supplier info query | --id | string | 是 | - | NotBlank | 供应商主键ID |
| dx-ep supplier info list | --name | string | 否 | - | - | 供应商名称（模糊） |
| dx-ep supplier info list | --code | string | 否 | - | - | 供应商编码（模糊） |
| dx-ep supplier info list | --page | int | 否 | 1 | - | 页码 |
| dx-ep supplier info list | --page-size | int | 否 | 50 | - | 每页条数 |
| dx-ep supplier change list | --name | string | 否 | - | - | 供应商名称（模糊） |
| dx-ep supplier change list | --code | string | 否 | - | - | 供应商编码（精确） |
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
| dx-ep sor vehicle query | --projectId | string | 是 | - | - | 采购项目ID（逗号分隔） |
| dx-ep sor part list | --sor-id | string | 是 | - | - | SOR主键ID |
| dx-ep sor part list | --page | int | 否 | 1 | - | 页码 |
| dx-ep sor part list | --page-size | int | 否 | 50 | - | 每页条数 |
| dx-ep sor process-history query | --rec-id | string | 是 | - | - | 业务记录ID（SOR主键） |
| dx-ep sor process-history query | --rec-type-id | long | 否 | 995001 | - | 记录类型ID（固定） |
| dx-ep sor process-history query | --controller-name | string | 否 | DesignReqItem2 | - | 控制名（固定） |
| dx-ep sor process-history query | --view-name | string | 否 | GantDetailMultWindow | - | 视图名（固定） |
| dx-ep user info query | --id | string | 是 | - | NotBlank | 用户主键ID |
| dx-ep rfq info list | --rfq-code | string | 否 | - | - | RFQ编号（模糊） |
| dx-ep rfq info list | --rfq-name | string | 否 | - | - | RFQ名称（模糊） |
| dx-ep rfq info list | --material-num | string | 否 | - | - | 零件号（模糊） |
| dx-ep rfq info list | --sor-code | string | 否 | - | - | SOR编码（模糊） |
| dx-ep rfq info list | --delay-status | string | 否 | mine | - | 查询范围：mine/all |
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

## 11. 统计概览

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

## 12. 待补充项

> 以下接口的出参字段定义在原始PRD中被截断，需后续补充：

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
