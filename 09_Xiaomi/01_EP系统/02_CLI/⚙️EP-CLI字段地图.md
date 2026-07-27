---
created: '2026-07-24'
tags: [Xiaomi, AI, 系统]
---

---created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 采购, 数据]
status: draft
---

> [!summary] EP CLI字段地图 — 18个接口逐接口详细定义
> - **核心**：逐接口定义EP系统CLI的输入参数、输出字段、枚举映射和验收标准
> - **要点**：覆盖供应商/SOR/通用/RFQ/定点全部18个接口；含统一返回格式、跨接口接力关系图、全量枚举映射
> - **关联**：[[⚙️EP-CLI数据字典]] · [[⚙️EP-CLI字段地图-大宽表]]

# EP CLI 字段地图 (Field Map)

> 基于接口CLI化需求文档 v1.0 生成，覆盖全部 18 个接口

---

## 一、CLI 命令总览

| 序号 | 模块 | CLI 命令 | 动作 | 接口路径 | 目标用户 |
|------|------|----------|------|----------|----------|
| 1 | 供应商 | `dx-ep supplier info query` | 查询 | /custom/supplier/getById.api | 采购员、DRE、SQE |
| 2 | 供应商 | `dx-ep supplier info list` | 列表 | /custom/custSupplierManager/findAllSupplierList.api | 采购员、DRE、SQE |
| 3 | 供应商 | `dx-ep supplier change list` | 变更单列表 | /custom/suplChgKeyAf/find.api | 采购员、DRE、SQE |
| 4 | 供应商 | `dx-ep supplier changecompare detail` | 变更对比 | /custom/suplNoncriticalChg/compareSupplier.api | 采购员、DRE、SQE |
| 5 | SOR | `dx-ep sor info list` | 列表 | /custom/designReq/find.api | 采购员 |
| 6 | SOR | `dx-ep sor vehicle query` | 车型树 | /custom/designReqItem/findBicycleMapByProjectSor.api | 采购员、DRE |
| 7 | SOR | `dx-ep sor part list` | 零件列表 | /custom/designReqItem/findDesignReqItems.api | 采购员、DRE |
| 8 | SOR | `dx-ep sor process-history query` | 审批历史 | /custom/custWorkFlow/findHistoryTasks.api | 采购员 |
| 9 | 通用 | `dx-ep user info query` | 用户信息 | /fwSecurity/security/getUserById.api | 所有角色 |
| 10 | RFQ | `dx-ep rfq info list` | 列表 | /custom/rfq/find.api | 采购员 |
| 11 | RFQ | `dx-ep rfq quote list` | 询报价条目 | /custom/rfqQuotesInfo/findQuotesByRfqIdAndRoundNo.api | 采购员 |
| 12 | RFQ | `dx-ep rfq release list` | 询报价供应商 | /custom/rfqReleaseInfo/doFindByRfqQuotesInfoId.api | 采购员 |
| 13 | RFQ | `dx-ep rfq bidderaf query` | 预选供应商信息 | /custom/rfqBidderAf/findLatestBySorCode.api | 采购员、SQE |
| 14 | RFQ | `dx-ep rfq bidderaf list` | 预选申请单 | /custom/rfqBidderAf/find.api | 采购员、SQE |
| 15 | RFQ | `dx-ep rfq logistics list` | 物流信息 | /custom/rfqQuotesInfo/findRfqRoundSupplierFile.api | 采购员、物流 |
| 16 | RFQ | `dx-ep rfq round supplier list` | 当前轮次供应商 | /custom/rfqQuotesInfo/findSupplierByCurrentRoundNo.api | 采购员 |
| 17 | 定点 | `dx-ep nomi nomiaf query` | 定点申请单 | /custom/nominationAf/find.api | 采购员 |
| 18 | 定点 | `dx-ep nomi nomiaf create` | 创建定点申请 | /custom/nominationAf/create.api | 采购员 |

---

## 二、统一返回格式

所有接口返回统一包装结构：

| 字段 | 类型 | 说明 |
|------|------|------|
| state | string | 状态：`success` / `fail` |
| message | string | 提示信息（fail 时展示） |
| data | object/array | 业务数据 |

分页接口 data 内统一分页结构：

| 字段 | 类型 | 说明 |
|------|------|------|
| content | array | 数据列表 |
| currentPage | int | 当前页码 |
| pageSize | int | 每页条数 |
| totalCount | int | 总记录数 |
| totalPage | int | 总页数 |

---

## 三、供应商模块

### 接口 1：供应商详情查询

**CLI:** `dx-ep supplier info query --id <id>`

#### 输入参数

| 参数 | 类型 | 必选 | 默认值 | 校验 | 说明 |
|------|------|------|--------|------|------|
| --id | string | 是 | - | NotBlank | 供应商主键 ID |

#### 输入示例
```bash
dx-ep supplier info query --id 963833799075766
```
```json
{"id":"963833799075766"}
```

#### 输出字段 (data = SupplierDto)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 供应商主键 ID | "8a27a9ae9db56321019db911db280001" |
| orgCode | string | 供应商编码 | "V10001" |
| orgName | string | 供应商名称 | "苏州智选电子有限公司" |
| orgNameEn | string | 供应商英文名称 | "Shenzhen Longhorn..." |
| enterpriseType | string | 公司类型（需翻译） | "FOREIGN_INVESTED" |
| certificate | string | 资质认证 | "IATF16949,ISO9001" |
| addressStrng | string | 制造地址 | "江苏省苏州市工业园区..." |
| buyerName | string | 采购员姓名 | "张采购" |
| accountingPeriodDay | string | 量产账期天数 | "90" |
| paymentCashRatio | string | 量产-现金比例(%) | "50" |
| paymentChitRatio | string | 量产-承兑比例(%) | "50" |
| accountingPeriodDaySample | string | 样件账期天数 | "60" |
| accountingPeriodDayAfterSales | string | 售后账期天数 | "120" |
| settlementBank | object | 电汇银行信息 | 见下表 |
| acceptingBank | object | 承兑银行信息 | 见下表 |
| supplierBusinessPremises[] | array | 商务前提列表 | 见下表 |

#### 嵌套对象 - settlementBank (电汇银行)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| bankName | string | 电汇银行名称 | "中国工商银行苏州分行" |
| bankAccount | string | 电汇银行账号 | "6222021001002233445" |

#### 嵌套对象 - acceptingBank (承兑银行)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| bankName | string | 承兑银行名称 | "招商银行苏州市支行" |
| bankAccount | string | 承兑银行账号 | "121900012345678" |

#### 嵌套对象 - supplierBusinessPremises[] (商务前提)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 商务前提ID | "8a621d9e..." |
| supplierId | string | 供应商ID | "764329453351131" |
| type | string | 类型（枚举） | "MASS" |
| versionNo | int | 版本号 | 10002 |
| accountingPeriod | string | 账期代码（枚举） | "V002" |
| suplChgKeyAfId | string | 变更申请单ID | "8a621d9e..." |
| suplChgKeyAfCode | string | 变更申请单号 | "SC20260300005" |
| startDate | string | 生效日期 | "2026-03-04 00:00:00" |
| endDate | string | 失效日期 | "2099-12-31 23:59:59" |

#### 枚举映射 - enterpriseType (公司类型)

| 枚举值 | 中文含义 |
|--------|----------|
| FOREIGN_INVESTED | 外资 |

#### 枚举映射 - type (商务前提类型)

| 枚举值 | 中文含义 |
|--------|----------|
| MASS | 量产 |
| SAMPLE | 样件 |
| AFTERSALES | 售后 |

#### 枚举映射 - accountingPeriod (账期代码)

| 枚举值 | 中文含义 |
|--------|----------|
| V001 | 发票入账后30天付款：100%现金 |
| V002 | 发票入账后60天付款：100%现金 |
| V003 | 发票入账后60天付款：100%承兑 |
| V004 | 发票入账后60天付款：70%现金，30%承兑 |
| V005 | 发票入账后60天付款：50%现金，50%承兑 |
| V014 | 发票入账后120天付款：100%承兑 |
| V015 | 发票入账后180天付款：100%承兑 |

#### 验收标准
- Given 有效的供应商ID → 返回供应商完整基本信息
- Given 不存在的供应商ID → 返回错误提示
- Given 未传 --id → 返回参数校验错误提示

---

### 接口 2：供应商列表查询

**CLI:** `dx-ep supplier info list [--name <name>] [--code <code>] [--page <page>] [--page-size <size>]`

#### 输入参数

| 参数 | 类型 | 必选 | 默认值 | 说明 |
|------|------|------|--------|------|
| --name | string | 否 | - | 供应商名称（模糊查询） |
| --code | string | 否 | - | 供应商编码（模糊查询） |
| --page | int | 否 | 1 | 页码 |
| --page-size | int | 否 | 50 | 每页条数 |

#### 输入示例
```bash
dx-ep supplier info list --name "电子"
dx-ep supplier info list --page-size 100
```
```json
{"filterInfo":{"orgCode":"code","orgName":"name"},"pageInfo":{"beginIndex":0,"pageSize":100}}
```

#### 输出字段 (data.content[] = SupplierListItemDto)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 供应商主键 ID | "8a27a9ae9db56321019db911db280001" |
| orgCode | string | 供应商编码 | "V10001" |
| orgName | string | 供应商名称 | "苏州智选电子有限公司" |
| supplierType | string | 供应商类型（需翻译） | "OFFICIAL" |

#### 枚举映射 - supplierType (供应商类型)

| 枚举值 | 中文含义 |
|--------|----------|
| TEMPORARY | 临时 |
| POTENTIAL | 预选 |
| OFFICIAL | 正式 |

#### 验收标准
- Given 存在供应商数据 → 返回名称包含关键字的分页列表
- Given 后端返回 > 50 条且未指定 --page-size → 默认返回 50 条

---

### 接口 3：供应商变更申请单查询

**CLI:** `dx-ep supplier change list [--name <name>] [--code <code>] [--page <page>] [--page-size <size>]`

#### 输入参数

| 参数 | 类型 | 必选 | 默认值 | 校验 | 说明 |
|------|------|------|--------|------|------|
| --name | string | 否 | - | - | 供应商名称（模糊查询） |
| --code | string | 否 | - | - | 供应商编码（精确查询） |
| --page | int | 否 | 1 | >0 | 页码 |
| --page-size | int | 否 | 50 | 1~100 | 每页条数 |

#### 输入示例
```bash
dx-ep supplier change list --name "XX电子"
dx-ep supplier change list --code "100001" -f json
```
```json
{"filterInfo":{"supplierCode":"code","supplierName":"name"},"pageInfo":{"beginIndex":0,"pageSize":100}}
```

#### 输出字段 (data.content[] = SuplChgKeyAfDto)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 变更申请单主键ID | "8a27a9ae..." |
| appFormId | string | 关联表单ID | "AF_UUID_101" |
| oldHisId | string | 变更前快照ID（接力接口4） | "HIS_OLD_001" |
| newHisId | string | 变更后快照ID（接力接口4） | "HIS_NEW_002" |
| supplierId | string | 供应商ID | "SUP_001" |
| changeContentTypes | string | 变更要素描述 | "供应商名称,注册地址,电汇银行账号" |
| appForm | object | 关联表单对象 | 见下表 |
| supplier | object | 供应商对象 | 见下表 |

#### 嵌套对象 - appForm (AppFormDto)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| code | string | 变更申请单号 | "SC2024040001" |
| name | string | 申请单名称 | "苏州智选电子 - 信息变更申请" |
| status | string | 状态（枚举） | "PASS" |
| auditDate | string | 变更生效时间 | "2024-04-20 10:00:00" |

#### 嵌套对象 - supplier (SupplierBriefDto)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| orgName | string | 供应商名称 | "苏州智选电子有限公司" |
| orgCode | string | 供应商编码 | "100001" |

#### 枚举映射 - appForm.status (审批状态)

| 枚举值 | 中文含义 |
|--------|----------|
| DRAFT | 草稿 |
| SUBMIT | 审批中 |
| PASS | 通过 |
| REJECT | 否决 |
| FINISHED | 完成 |
| CANCELLED | 废弃 |
| WITHDRAW | 撤回 |
| PENDING | 待审批 |

#### 验收标准
- Given 存在变更单数据 → 返回分页变更单列表，含变更要素和审批状态
- Given 指定供应商名称 → 仅返回该供应商的变更单

---

### 接口 4：供应商变更详情对比

**CLI:** `dx-ep supplier changecompare detail --old-his-id <old-his-id> --new-his-id <new-his-id>`

#### 输入参数

| 参数 | 类型 | 必选 | 默认值 | 校验 | 说明 |
|------|------|------|--------|------|------|
| --old-his-id | string | 是 | - | NotBlank | 变更前历史记录ID |
| --new-his-id | string | 是 | - | NotBlank | 变更后历史记录ID |

#### 参数依赖关系

| 参数 | 来源命令 | 来源字段 |
|------|----------|----------|
| --old-his-id | dx-ep supplier change list | oldHisId |
| --new-his-id | dx-ep supplier change list | newHisId |

#### 输入示例
```bash
dx-ep supplier changecompare detail --old-his-id HIS001 --new-his-id HIS002
```

#### 输出字段 (data)

| 字段 | 类型 | 说明 |
|------|------|------|
| differentSameAddress | boolean | 生产工厂/制造地是否有变 |
| differentSameCertification | boolean | 认证体系是否变化 |
| differentSameCaps | boolean | 公司股比是否变化 |
| differentSameCompostion | boolean | 人员构成是否变化 |
| differentRegisterAddress | boolean | 注册地址是否有变 |
| newChangeHis | object | 变更后完整信息（见下表） |
| oldChangeHis | object | 变更前完整信息（见下表） |

#### 嵌套对象 - newChangeHis / oldChangeHis (SupplierChangeHis)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 主键ID | "8a87f6e198843070019898cdf6140093" |
| orgName | string | 供应商名称 | "某某科技有限公司" |
| orgNameEn | string | 供应商英文名称 | "XX Technology Co., Ltd." |
| orgSimpleName | string | 供应商简称 | "某某科技" |
| orgSimpleNameEn | string | 供应商简称英文 | "XX Tech" |
| orgSimpleCode | string | 供应商简码 | "MOUMOU" |
| orgCode | string | 供应商编码 | "SUP20260001" |
| orgTempCode | string | 临时编码 | "TEMP001" |
| suplChgKeyAfId | string | 关键信息变更申请单ID | "8a87f6e1..." |
| supplierId | string | 供应商ID | "8a87f6e1..." |
| inDate | date | 生效时间 | "2026-01-01 00:00:00" |
| outDate | date | 失效时间 | null |
| addressId | string | 地址ID | "8a87f6e1..." |
| address | object | 公司地址（见下表） | |
| settlementBankId | string | 结算银行ID | "8a87f6e1..." |
| settlementBank | object | 结算账户（见下表） | |
| acceptingBankId | string | 承兑银行ID | "8a87f6e1..." |
| acceptingBank | object | 承兑银行（见下表） | |
| massBusinessPremise | object | 量产商务前提（见下表） | |
| sampleBusinessPremise | object | 样件商务前提（见下表） | |
| afterSalesBusinessPremise | object | 售后商务前提（见下表） | |
| businessScope | string | 经营范围 | "主营汽车娱乐app..." |
| income | number | 收入 | 47000 |
| numberOfEmployees | int | 员工人数 | 312 |
| registeredCapital | number | 注册资本 | 1122 |
| legalPerson | string | 法定代表人 | "张某某" |
| registeredDate | date | 注册日期 | "2008-12-04 00:00:00" |
| duns | string | DUNS编码 | "202112217413381134" |
| certificate | string | 资质认证 | "ISO9001,IATF16949" |
| accountingPeriod | string | 账期代码 | "V003" |
| paymentCashRatio | string | 现金比例 | "12" |
| paymentChitRatio | string | 承兑比例 | "88" |
| chitAccountingPeriod | string | 承兑汇票账期 | "3" |
| accountingPeriodAfterSales | string | 售后账期 | "V001" |
| supplierType | string | 供应商类型 | "POTENTIAL" |
| enterpriseType | string | 公司类型 | "3" |
| officialWebsite | string | 官方网站 | "https://..." |
| domesticSupplier | string | 是否国内供应商 | "1" |
| monetaryUnit | string | 货币单位 | "CNY" |

#### 嵌套对象 - address (公司地址)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 地址ID | "8a87f6e1..." |
| country | string | 国家 | "CN" |
| provinces | string | 省份 | "北京市" |
| city | string | 城市 | "北京市" |
| county | string | 区县 | "朝阳区" |
| address | string | 详细地址 | "某某路123号" |
| addressEn | string | 英文地址 | "No.123 XX Road" |

#### 嵌套对象 - settlementBank (结算银行)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 结算银行ID | "8a87f6e1..." |
| bankName | string | 银行名称 | "中国银行" |
| accountName | string | 账户名称 | "某某科技有限公司" |
| accountNo | string | 账号 | "1234567890123456" |

#### 嵌套对象 - acceptingBank (承兑银行)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 承兑银行ID | "8a87f6e1..." |
| bankName | string | 银行名称 | "中国工商银行" |
| accountName | string | 账户名称 | "某某科技有限公司" |
| accountNo | string | 账号 | "9876543210123456" |

#### 嵌套对象 - massBusinessPremise (量产商务前提)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | ID | "8a87f6e1..." |
| type | string | 类型 | "MASS" |
| accountingPeriod | string | 账期 | "V005" |
| chitAccountingPeriod | string | 承兑汇票账期 | "1" |
| startDate | date | 生效日期 | "2026-01-01" |

#### 嵌套对象 - sampleBusinessPremise (样件商务前提)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | ID | "8a87f6e1..." |
| type | string | 类型 | "SAMPLE" |
| accountingPeriod | string | 账期 | "V012" |
| chitAccountingPeriod | string | 承兑汇票账期 | "12" |
| startDate | date | 生效日期 | "2026-04-23" |

#### 嵌套对象 - afterSalesBusinessPremise (售后商务前提)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | ID | "8a87f6e1..." |
| type | string | 类型 | "AFTERSALES" |
| accountingPeriod | string | 账期 | "X051" |
| startDate | date | 生效日期 | "2026-04-21" |

#### 验收标准
- Given 有效的 oldHisId 和 newHisId → 返回变更前后差异对比，每字段含 old/new/changed
- Given ID不存在 → 返回错误提示

---

## 四、SOR 模块

### 接口 5：SOR 列表查询

**CLI:** `dx-ep sor info list [--code <code>] [--material-num <num>] [--latest] [--page <page>] [--page-size <size>]`

#### 输入参数

| 参数 | 类型 | 必选 | 默认值 | 说明 |
|------|------|------|--------|------|
| --code | string | 否 | - | SOR编号 |
| --material-num | string | 否 | - | 零件号 |
| --latest | boolean | 否 | true | 仅查最新版本 |
| --page | int | 否 | 1 | 页码 |
| --page-size | int | 否 | 50 | 每页条数 |

#### 输入示例
```bash
dx-ep sor info list --material-num "P-001"
dx-ep sor info list --code "2026-0421-001" --latest
```
```json
{"pageInfo":{"beginIndex":0,"pageSize":100},"filterInfo":{"code":"sorCode","materialNum":"materilal-num","isLatest":true}}
```

#### 输出字段 (data.content[] = DesignReqDto)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | SOR ID | "SOR_8899_UUID" |
| code | string | SOR 编码 | "SOR-2024-EV-001" |
| name | string | SOR 名称 | "小米SU7前围模块SOR" |
| status | string | SOR 状态（枚举） | "AUDITING" |
| versionNo | string | 版本号 | "V1.0" |
| classifyCode | string | 分类编码 | "A1" |
| taskStatus | string | 任务状态 | "ISSUED" |
| isLatest | boolean | 是否最新版本 | true |
| submitBy | object | 研发工程师 | 见下表 |
| productProjects | array | 关联采购项目 | 见下表 |

#### 嵌套对象 - submitBy (UserDto)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| userName | string | 研发工程师姓名 | "王研发" |

#### 嵌套对象 - productProjects[] (ProductProject)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 主键 | - |
| code | string | 采购项目编码 | "Modena(8041)" |

#### 枚举映射 - status (SOR状态)

| 枚举值 | 中文含义 |
|--------|----------|
| DRAFT | 草稿 |
| REJECT | 驳回 |
| SUBMIT | 审批中 |
| PASS | 已发布 |
| ABANDON | 废弃 |
| WITHDRAW | 撤回 |
| DELETE | 已取消 |
| RETURN_TO_DEV | 退回 |

#### 验收标准
- Given 存在SOR数据 → 返回分页SOR列表，含编号、名称、版本、状态
- Given 指定 --material-num → 仅返回包含该零件号的SOR

---

### 接口 6：SOR 车型查询

**CLI:** `dx-ep sor vehicle query --sor-id <id> --projectId <projectId>`

#### 输入参数

| 参数 | 类型 | 必选 | 说明 |
|------|------|------|------|
| --sor-id | string | 是 | SOR主键ID |
| --projectId | string | 是 | 采购项目ID（多个逗号分隔） |

#### 输入示例
```bash
dx-ep sor vehicle query --sor-id 8a27a9ae9db56321019db911db28011f --projectId 8a27e5cc957dcd5e01957dde55030054,8a27e5cc957dcd5e01957dd441290015
```
```json
{"id":"8a27a9ae9db56321019db911db28011f","projectId":"8a27e5cc957dcd5e01957dde55030054,8a27e5cc957dcd5e01957dd441290015"}
```

#### 输出字段 (data[] = PlatFormLevelNode，三级树形结构)

**一级：平台节点 (platFormNode)**

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 平台节点ID | "plat_001" |
| nodeCode | string | 平台编码 | "MS11" |
| nodeName | string | 平台名称 | "MS11平台" |
| nodeType | string | 节点类型 | "PLATFORM" |
| bomLevel | int | BOM层级 | 2 |

**二级：项目节点 (projectLevelNodes[])**

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| projectNode.id | string | 项目节点ID | "prj_001" |
| projectNode.nodeCode | string | 项目编码 | "SU7" |
| projectNode.nodeName | string | 项目名称 | "小米SU7" |
| projectNode.nodeType | string | 节点类型 | "PROJECT" |
| projectNode.bomLevel | int | BOM层级 | 3 |

**三级：基础车型节点 (baseNodes[])**

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 车型节点ID | "base_001" |
| nodeCode | string | 车型编码 | "SU7-STD" |
| nodeName | string | 车型名称 | "基础车型-标准版" |
| nodeType | string | 节点类型 | "BASE_MODEL" |
| bomLevel | int | BOM层级 | 4 |
| isBomNode | boolean | 是否BOM节点 | true |
| isForSale | boolean | 是否可销售 | true |
| status | string | 节点状态 | "ACTIVE" |

#### 验收标准
- Given 有效的SOR ID和项目ID → 返回三级车型树
- Given SOR ID不存在 → 返回空数据
- Given 未传 --sor-id → 返回参数校验错误

---

### 接口 7：SOR 零件列表查询

**CLI:** `dx-ep sor part list --sor-id <sor-id> [--page <page>] [--page-size <size>]`

#### 输入参数

| 参数 | 类型 | 必选 | 说明 |
|------|------|------|------|
| --sor-id | string | 是 | SOR主键ID |
| --page | int | 否 | 页码（默认1） |
| --page-size | int | 否 | 每页条数（默认50） |

#### 输入示例
```bash
dx-ep sor part list --sor-id 8a27a9ae9db56321019db911db28011f
```
```json
{"filterInfo":{"designReqId":"8a27a9ae9db56321019db911db28011f"},"pageInfo":{"pageSize":50,"beginIndex":0}}
```

#### 输出字段 (data[] = Map<string, object>)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | SOR行项目ID | "8a87f6e198843070019898cdf6140093" |
| pdId | string | 产品经理ID | "pd_20250801_001" |
| operationType | string | 操作类型（枚举） | "NEW" |
| devType | string | 开发类型 | "DEV_NEW" |
| partTechDesc | string | 零件技术描述 | "前保险杠总成 - 高配版本" |
| isChange | string | 是否变更 | "0" |
| partId | string | 零件ID | "part_001" |
| materialNum | string | 物料号 | "MX11-BUMPER-001" |
| materialName | string | 物料名称 | "前保险杠总成" |
| measurementUnit | string | 计量单位 | "EA" |
| subDataType | string | 子数据类型 | "PURCHASED" |
| qualityId | string | 质量工程师ID | "quality_001" |
| designReqId | string | SOR ID | "dr_20250801_001" |
| applyTo | string | 适用范围 | "ALL" |
| node{车型节点ID} | object | 动态字段：车型节点装配信息 | 见下表 |

#### 动态字段 - node{车型节点ID} (装配比例和用量)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| count | BigDecimal | 单车用量 | 1 |
| percent | BigDecimal | 装配比例 | 100 |

#### 枚举映射 - operationType (操作类型)

| 枚举值 | 中文含义 |
|--------|----------|
| NEW | 新增 |
| UPDATE | 更新 |
| DELETE | 删除 |

#### 验收标准
- Given 有效的SOR ID → 返回所有零件条目
- Given SOR ID不存在 → 返回空列表
- Given 已删除的零件 → 不出现在结果中

---

### 接口 8：SOR 审批历史查询

**CLI:** `dx-ep sor process-history query --rec-id <rec-id>`

#### 输入参数

| 参数 | 类型 | 必选 | 默认值 | 说明 |
|------|------|------|--------|------|
| --rec-id | string | 是 | - | 业务记录ID（SOR主键） |
| --rec-type-id | long | 否 | 995001 | 业务记录类型ID（固定值） |
| --controller-name | string | 否 | gantang.custom.sourcing...DesignReqItem2 | 控制名（固定值） |
| --view-name | string | 否 | gantang.custom.common.view.GantDetailMultWindow | 视图名（固定值） |

#### 输入示例
```bash
dx-ep sor process-history query --rec-id 8a27a9ae9db56321019db911db28011f
```
```json
{"processResourceUrls":[{"recTypeId":995001,"recId":"8a871a359be3dbc6019be4828ca10050","controllerName":"gantang.custom.sourcing.task.designreqitem.controller.DesignReqItem2","viewName":"gantang.custom.common.view.GantDetailMultWindow"}]}
```

#### 输出字段 (data.list[])

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 任务ID | "TASK001" |
| processId | string | 流程ID | "PROC001" |
| resourceName | string | 资源名称 | "前大灯总成SOR" |
| processDetail | string | 流程描述 | "SOR审批流程" |
| createBy | string | 创建人ID | "USER001" |
| createByName | string | 创建人姓名 | "张三" |
| taskName | string | 环节名称 | "采购工程师审批" |
| startDate | string | 开始时间 | "2024-06-01 10:00:00" |
| finishDate | string/null | 完成时间（null=进行中） | "2024-06-02 14:30:00" |
| actionName | string | 动作/结果 | "通过" |
| caller | string | 处理人ID | "USER001" |
| callerName | string | 处理人姓名 | "张三" |
| approveComment | string | 审批意见 | "同意，供应商资质符合要求" |
| taskType | string | 任务类型（枚举） | "H" |
| statusCode | int | 状态码 | 2 |
| statusName | string | 状态名称 | "已完成" |

#### 枚举映射 - taskType (任务类型)

| 枚举值 | 中文含义 |
|--------|----------|
| S | 开始步骤 |
| H | 历史步骤 |
| E | 结束步骤 |

#### 验收标准
- Given 有效的SOR ID → 返回EP审批历史列表
- Given 未传任何参数 → 返回参数校验错误

---

## 五、通用模块

### 接口 9：用户信息查询

**CLI:** `dx-ep user info query --id <id>`

#### 输入参数

| 参数 | 类型 | 必选 | 默认值 | 校验 | 说明 |
|------|------|------|--------|------|------|
| --id | string | 是 | - | NotBlank | 用户主键 ID (UUID) |

#### 输入示例
```bash
dx-ep user info query --id 763792248794046
```
```json
{"id":"763792248794046"}
```

#### 输出字段 (data = UserDto)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 用户主键ID | "b1c6df265edd4b34a114666584e53588" |
| userName | string | 用户真实姓名 | "张三" |
| userLoginName | string | 用户登录账号 | "chuhuo" |
| email | string | 电子邮箱 | "zhangsan@xiaomi.com" |
| userType | string | 用户类型（枚举） | "EMPLOYEE" |
| mobile | string | 联系电话 | "13800000000" |
| organizationName | string | 所属部门 | "汽车部-采购组" |
| isActive | boolean | 账号状态 | true |

#### 枚举映射 - userType (用户类型)

| 枚举值 | 中文含义 | 处理逻辑 |
|--------|----------|----------|
| EMPLOYEE | 内部员工 | 正常展示 |
| 非EMPLOYEE | 非员工（如供应商侧账号） | 特殊分支处理 |

#### 枚举映射 - isActive (账号状态)

| 枚举值 | 中文含义 | CLI处理 |
|--------|----------|---------|
| true | 有效人员 | 不做特殊处理 |
| false | 离职/停用 | 姓名标注"(离职/停用)" |

#### 验收标准
- Given 有效的用户ID → 返回用户信息
- Given 用户ID不存在 → 返回空数据
- Given 未传 --id → 返回参数校验错误

---

## 六、RFQ 模块

### 接口 10：RFQ 列表查询

**CLI:** `dx-ep rfq info list [--rfq-code <code>] [--rfq-name <name>] [--material-num <num>] [--sor-code <code>] [--delay-status <status>] [--page <page>] [--page-size <size>]`

#### 输入参数

| 参数 | 类型 | 必选 | 默认值 | 说明 |
|------|------|------|--------|------|
| --rfq-code | string | 否 | - | RFQ编号（模糊） |
| --rfq-name | string | 否 | - | RFQ名称（模糊） |
| --material-num | string | 否 | - | 零件号（模糊） |
| --sor-code | string | 否 | - | SOR编码（模糊） |
| --delay-status | string | 否 | mine | 枚举：mine（默认）/ all |
| --page | int | 否 | 1 | 页码 |
| --page-size | int | 否 | 50 | 每页条数 |

#### 输入示例
```bash
dx-ep rfq info list --sor-code "SOR-2024-001"
dx-ep rfq info list -f json --page-size 100
```
```json
{"filterInfo":{"delayStatus":"all","rfqCode":"001","rfqName":"测试","materialNum":"1"},"pageInfo":{"beginIndex":0,"pageSize":100}}
```

#### 输出字段 (data.content[] = RfqDto)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | RFQ ID | "8a87f6e198843070019898cdf6140093" |
| rfqCode | string | RFQ 编码 | "RFQ-20250811-002" |
| rfqName | string | RFQ 名称 | "SOR_CL2_0811" |
| rfqType | string | RFQ 类型 | "RFQ_TYPE_FIXED_PLANT" |
| rfqStatus | string | RFQ 状态 | "PRICED" |
| rfqDesc | string | RFQ 描述 | — |
| rfqCurrency | string | 货币 | "CNY" |
| remarks | string | 备注 | — |
| isIssueTargetPrice | boolean | 是否发放目标价 | true |
| isTaskComplete | boolean | 是否任务完成 | false |
| isFree | boolean | 是否允许供应商自由报价 | false |
| needTechnicalReview | boolean | 是否需要技术评审 | false |
| reviewReason | string | 技术评审原因 | — |
| cancelDate | date | 取消时间 | null |
| cancelReason | string | 取消原因 | null |
| endDate | date | 结束时间 | — |
| currentRoundId | string | 当前轮次ID | "round_001" |
| buyerId | string | 采购工程师ID | "6bc9deb9..." |
| buyerName | string | 采购工程师姓名 | "张三" |
| sqeId | string | SQE ID | "sqe_001" |
| pdId | string | 研发工程师ID | "pd_001" |
| pdName | string | 研发工程师姓名 | "李四" |
| logisticsEngId | string | 物流工程师ID | "lg_001" |
| lgName | string | 物流工程师姓名 | "王五" |
| afterSalesEngId | string | 售后工程师ID | "as_001" |
| afterSalesEngName | string | 售后工程师姓名 | — |
| planEngId | string | 体系工程师ID | "eng_001" |
| costEngId | string | 成本工程师ID | "eng_002" |
| asOrdererId | string | 售后订单员ID | "ao_001" |
| currentRound | object | 当前轮次对象（见下表） | |
| designReqId | string | SOR/设计需求ID | "dr_001" |
| sorCode | string | SOR 编码 | "SOR_CL2_0811" |
| versionNo | string | SOR版本号 | "V1.0" |
| projectCode | string | 采购项目编码（逗号分隔） | "P20260001,P20260002" |
| projectName | string | 采购项目名称（逗号分隔） | "MX11项目,MX12项目" |
| plantInfo | string | 工厂信息（逗号分隔） | "北京工厂(BJ001)" |
| partCodes | string | RFQ所有零件编码（逗号分隔） | "MX11-FCS-001,MX11-FCS-002" |
| partNames | string | RFQ所有零件名称（逗号分隔） | "前副车架总成,后副车架总成" |
| supQuoteStatus | string | 供应商报价状态（HTML格式） | "SUP001 公司 \| 已报价"
| nomiStatus | string | 首次定点状态（枚举） | "PASS" |

#### 嵌套对象 - currentRound (rfqRoundDto)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| id | string | 轮次ID | "round_001" |
| rfqId | string | RFQ ID | — |
| roundNo | string | 轮次号 | "1" |
| status | string | 轮次状态 | "FINISHED" |

#### 枚举映射 - delayStatus (查询范围)

| 枚举值 | 中文含义 | 说明 |
|--------|----------|------|
| mine | 我的 | 默认，仅查自己名下 |
| all | 全部 | 需有查看所有RFQ权限 |

#### 枚举映射 - nomiStatus (定点状态)

| 枚举值 | 中文含义 |
|--------|----------|
| TOCREATE | 待创建 |
| PASS | 已通过 |

#### 验收标准
- Given 存在RFQ数据 → 返回自己名下的分页RFQ列表
- Given --delay-status all → 返回所有RFQ（需权限）
- Given 指定 --sor-code → 仅返回关联该SOR的RFQ

---

### 接口 11：询报价条目查询

**CLI:** `dx-ep rfq quote list --rfq-id <rfq-id> --round-no <round-no>`

#### 输入参数

| 参数 | 类型 | 必选 | 说明 |
|------|------|------|------|
| --rfq-id | string | 是 | RFQ ID |
| --round-no | string | 是 | 轮次号 |

#### 输出字段 (data = 报价条目列表)

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| （具体字段由接口返回，包含发包日期、供应商报价日期等报价详情） | | | |

---

### 接口 12：询报价供应商查询

**CLI:** `dx-ep rfq release list --rfq-quotes-info-id <id>`

#### 输入参数

| 参数 | 类型 | 必选 | 说明 |
|------|------|------|------|
| --rfq-quotes-info-id | string | 是 | 报价条目ID |

#### 输出字段

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| （包含供应商发放状态、报价状态详情、联系人信息和时间线） | | | |

---

### 接口 13：预选供应商信息查询

**CLI:** `dx-ep rfq bidderaf query [--sor-code <sor-code>] [--rfq-code <rfq-code>]`

#### 输入参数

| 参数 | 类型 | 必选 | 说明 |
|------|------|------|------|
| --sor-code | string | 否 | SOR编码 |
| --rfq-code | string | 否 | RFQ编码 |

#### 输出字段

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| （返回最新预选供应商推荐申请单，含SQE/研发审核状态和供应商列表） | | | |

---

### 接口 14：预选供应商申请单查询

**CLI:** `dx-ep rfq bidderaf list --rfq-code <rfq-code>`

#### 输入参数

| 参数 | 类型 | 必选 | 说明 |
|------|------|------|------|
| --rfq-code | string | 是 | RFQ编码 |

#### 输出字段

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| （返回最新预选供应商推荐申请单审批状态，含SQE/研发审核状态） | | | |

---

### 接口 15：物流信息查询

**CLI:** `dx-ep rfq logistics list [--sor-code <sor-code>] [--rfq-code <rfq-code>]`

#### 输入参数

| 参数 | 类型 | 必选 | 说明 |
|------|------|------|------|
| --sor-code | string | 否 | SOR编码 |
| --rfq-code | string | 否 | RFQ编码 |

#### 输出字段

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| （返回物流信息和产能调查状态） | | | |

---

### 接口 16：当前轮次供应商查询

**CLI:** `dx-ep rfq round supplier list --rfq-id <rfq-id>`

#### 输入参数

| 参数 | 类型 | 必选 | 说明 |
|------|------|------|------|
| --rfq-id | string | 是 | RFQ ID |

#### 输出字段

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| （返回当前轮次完成报价的供应商列表） | | | |

---

## 七、定点模块

### 接口 17：定点申请单查询

**CLI:** `dx-ep nomi nomiaf query [--sor-code <sor-code>] [--rfq-code <rfq-code>]`

#### 输入参数

| 参数 | 类型 | 必选 | 说明 |
|------|------|------|------|
| --sor-code | string | 否 | SOR编码 |
| --rfq-code | string | 否 | RFQ编码 |

#### 输出字段

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| （返回定点申请单信息） | | | |

---

### 接口 18：创建定点申请单

**CLI:** `dx-ep nomi nomiaf create --rfq-id <rfq-id>`

#### 输入参数

| 参数 | 类型 | 必选 | 说明 |
|------|------|------|------|
| --rfq-id | string | 是 | RFQ ID |

#### 输出字段

| 字段 | 类型 | 说明 | 示例值 |
|------|------|------|--------|
| （根据RFQ号创建定点申请单草稿，返回创建结果） | | | |

---

## 八、跨接口字段接力关系图

```
dx-ep supplier info list (id) ──→ dx-ep supplier info query (id)
dx-ep supplier change list (oldHisId, newHisId) ──→ dx-ep supplier changecompare detail (old-his-id, new-his-id)
dx-ep sor info list (id) ──→ dx-ep sor vehicle query (sor-id)
dx-ep sor info list (id) ──→ dx-ep sor part list (sor-id)
dx-ep sor info list (id) ──→ dx-ep sor process-history query (rec-id)
dx-ep rfq info list (id) ──→ dx-ep rfq quote list (rfq-id)
dx-ep rfq info list (sorCode) ──→ dx-ep rfq bidderaf query (sor-code)
dx-ep rfq info list (sorCode) ──→ dx-ep rfq logistics list (sor-code)
dx-ep rfq info list (id) ──→ dx-ep nomi nomiaf query (rfq-id)
dx-ep rfq info list (id) ──→ dx-ep nomi nomiaf create (rfq-id)
```

---

## 九、全量枚举映射汇总

### 审批/状态类枚举

| 业务域 | 字段 | 枚举值 | 中文含义 |
|--------|------|--------|----------|
| 供应商变更单 | appForm.status | DRAFT | 草稿 |
| 供应商变更单 | appForm.status | SUBMIT | 审批中 |
| 供应商变更单 | appForm.status | PASS | 通过 |
| 供应商变更单 | appForm.status | REJECT | 否决 |
| 供应商变更单 | appForm.status | FINISHED | 完成 |
| 供应商变更单 | appForm.status | CANCELLED | 废弃 |
| 供应商变更单 | appForm.status | WITHDRAW | 撤回 |
| 供应商变更单 | appForm.status | PENDING | 待审批 |
| SOR | status | DRAFT | 草稿 |
| SOR | status | REJECT | 驳回 |
| SOR | status | SUBMIT | 审批中 |
| SOR | status | PASS | 已发布 |
| SOR | status | ABANDON | 废弃 |
| SOR | status | WITHDRAW | 撤回 |
| SOR | status | DELETE | 已取消 |
| SOR | status | RETURN_TO_DEV | 退回 |
| 审批流程 | taskType | S | 开始步骤 |
| 审批流程 | taskType | H | 历史步骤 |
| 审批流程 | taskType | E | 结束步骤 |
| RFQ | nomiStatus | TOCREATE | 待创建 |
| RFQ | nomiStatus | PASS | 已通过 |

### 业务类型枚举

| 业务域 | 字段 | 枚举值 | 中文含义 |
|--------|------|--------|----------|
| 供应商 | supplierType | TEMPORARY | 临时 |
| 供应商 | supplierType | POTENTIAL | 预选 |
| 供应商 | supplierType | OFFICIAL | 正式 |
| 供应商 | enterpriseType | FOREIGN_INVESTED | 外资 |
| 供应商 | userType | EMPLOYEE | 内部员工 |
| 供应商 | userType | 非EMPLOYEE | 非员工（供应商侧） |
| 供应商 | isActive | true | 有效人员 |
| 供应商 | isActive | false | 离职/停用 |
| 商务前提 | type | MASS | 量产 |
| 商务前提 | type | SAMPLE | 样件 |
| 商务前提 | type | AFTERSALES | 售后 |
| 账期 | accountingPeriod | V001 | 30天100%现金 |
| 账期 | accountingPeriod | V002 | 60天100%现金 |
| 账期 | accountingPeriod | V003 | 60天100%承兑 |
| 账期 | accountingPeriod | V004 | 60天70%现金30%承兑 |
| 账期 | accountingPeriod | V005 | 60天50%现金50%承兑 |
| 账期 | accountingPeriod | V014 | 120天100%承兑 |
| 账期 | accountingPeriod | V015 | 180天100%承兑 |
| SOR零件 | operationType | NEW | 新增 |
| SOR零件 | operationType | UPDATE | 更新 |
| SOR零件 | operationType | DELETE | 删除 |
| RFQ查询 | delayStatus | mine | 我的（默认） |
| RFQ查询 | delayStatus | all | 全部 |

---

## 十、接口输入参数全量汇总

| CLI 命令 | 参数名 | 类型 | 必选 | 默认值 | 说明 |
|----------|--------|------|------|--------|------|
| dx-ep supplier info query | --id | string | 是 | - | 供应商主键ID |
| dx-ep supplier info list | --name | string | 否 | - | 供应商名称（模糊） |
| dx-ep supplier info list | --code | string | 否 | - | 供应商编码（模糊） |
| dx-ep supplier info list | --page | int | 否 | 1 | 页码 |
| dx-ep supplier info list | --page-size | int | 否 | 50 | 每页条数 |
| dx-ep supplier change list | --name | string | 否 | - | 供应商名称（模糊） |
| dx-ep supplier change list | --code | string | 否 | - | 供应商编码（精确） |
| dx-ep supplier change list | --page | int | 否 | 1 | 页码 |
| dx-ep supplier change list | --page-size | int | 否 | 50 | 每页条数 |
| dx-ep supplier changecompare detail | --old-his-id | string | 是 | - | 变更前历史记录ID |
| dx-ep supplier changecompare detail | --new-his-id | string | 是 | - | 变更后历史记录ID |
| dx-ep sor info list | --code | string | 否 | - | SOR编号 |
| dx-ep sor info list | --material-num | string | 否 | - | 零件号 |
| dx-ep sor info list | --latest | boolean | 否 | true | 仅查最新版本 |
| dx-ep sor info list | --page | int | 否 | 1 | 页码 |
| dx-ep sor info list | --page-size | int | 否 | 50 | 每页条数 |
| dx-ep sor vehicle query | --sor-id | string | 是 | - | SOR主键ID |
| dx-ep sor vehicle query | --projectId | string | 是 | - | 采购项目ID（逗号分隔） |
| dx-ep sor part list | --sor-id | string | 是 | - | SOR主键ID |
| dx-ep sor part list | --page | int | 否 | 1 | 页码 |
| dx-ep sor part list | --page-size | int | 否 | 50 | 每页条数 |
| dx-ep sor process-history query | --rec-id | string | 是 | - | 业务记录ID（SOR主键） |
| dx-ep sor process-history query | --rec-type-id | long | 否 | 995001 | 记录类型ID（固定） |
| dx-ep sor process-history query | --controller-name | string | 否 | DesignReqItem2 | 控制名（固定） |
| dx-ep sor process-history query | --view-name | string | 否 | GantDetailMultWindow | 视图名（固定） |
| dx-ep user info query | --id | string | 是 | - | 用户主键ID |
| dx-ep rfq info list | --rfq-code | string | 否 | - | RFQ编号（模糊） |
| dx-ep rfq info list | --rfq-name | string | 否 | - | RFQ名称（模糊） |
| dx-ep rfq info list | --material-num | string | 否 | - | 零件号（模糊） |
| dx-ep rfq info list | --sor-code | string | 否 | - | SOR编码（模糊） |
| dx-ep rfq info list | --delay-status | string | 否 | mine | 查询范围：mine/all |
| dx-ep rfq info list | --page | int | 否 | 1 | 页码 |
| dx-ep rfq info list | --page-size | int | 否 | 50 | 每页条数 |
| dx-ep rfq quote list | --rfq-id | string | 是 | - | RFQ ID |
| dx-ep rfq quote list | --round-no | string | 是 | - | 轮次号 |
| dx-ep rfq release list | --rfq-quotes-info-id | string | 是 | - | 报价条目ID |
| dx-ep rfq bidderaf query | --sor-code | string | 否 | - | SOR编码 |
| dx-ep rfq bidderaf query | --rfq-code | string | 否 | - | RFQ编码 |
| dx-ep rfq bidderaf list | --rfq-code | string | 是 | - | RFQ编码 |
| dx-ep rfq logistics list | --sor-code | string | 否 | - | SOR编码 |
| dx-ep rfq logistics list | --rfq-code | string | 否 | - | RFQ编码 |
| dx-ep rfq round supplier list | --rfq-id | string | 是 | - | RFQ ID |
| dx-ep nomi nomiaf query | --sor-code | string | 否 | - | SOR编码 |
| dx-ep nomi nomiaf query | --rfq-code | string | 否 | - | RFQ编码 |
| dx-ep nomi nomiaf create | --rfq-id | string | 是 | - | RFQ ID |

---

## 十一、接口输出字段全量汇总

### 供应商模块输出字段

| 接口 | 字段路径 | 类型 | 说明 |
|------|----------|------|------|
| info query | id | string | 供应商主键ID |
| info query | orgCode | string | 供应商编码 |
| info query | orgName | string | 供应商名称 |
| info query | orgNameEn | string | 供应商英文名称 |
| info query | enterpriseType | string | 公司类型 |
| info query | certificate | string | 资质认证 |
| info query | addressStrng | string | 制造地址 |
| info query | buyerName | string | 采购员姓名 |
| info query | accountingPeriodDay | string | 量产账期天数 |
| info query | paymentCashRatio | string | 现金比例(%) |
| info query | paymentChitRatio | string | 承兑比例(%) |
| info query | accountingPeriodDaySample | string | 样件账期天数 |
| info query | accountingPeriodDayAfterSales | string | 售后账期天数 |
| info query | settlementBank.bankName | string | 电汇银行名称 |
| info query | settlementBank.bankAccount | string | 电汇银行账号 |
| info query | acceptingBank.bankName | string | 承兑银行名称 |
| info query | acceptingBank.bankAccount | string | 承兑银行账号 |
| info query | supplierBusinessPremises[].type | string | 商务前提类型 |
| info query | supplierBusinessPremises[].accountingPeriod | string | 账期代码 |
| info list | id | string | 供应商主键ID |
| info list | orgCode | string | 供应商编码 |
| info list | orgName | string | 供应商名称 |
| info list | supplierType | string | 供应商类型 |
| change list | id | string | 变更申请单ID |
| change list | appFormId | string | 关联表单ID |
| change list | oldHisId | string | 变更前快照ID |
| change list | newHisId | string | 变更后快照ID |
| change list | supplierId | string | 供应商ID |
| change list | changeContentTypes | string | 变更要素描述 |
| change list | appForm.code | string | 变更申请单号 |
| change list | appForm.name | string | 申请单名称 |
| change list | appForm.status | string | 审批状态 |
| change list | appForm.auditDate | string | 变更生效时间 |
| change list | supplier.orgName | string | 供应商名称 |
| change list | supplier.orgCode | string | 供应商编码 |
| changecompare | differentSameAddress | boolean | 制造地是否有变 |
| changecompare | differentSameCertification | boolean | 认证体系是否变化 |
| changecompare | differentSameCaps | boolean | 公司股比是否变化 |
| changecompare | differentSameCompostion | boolean | 人员构成是否变化 |
| changecompare | differentRegisterAddress | boolean | 注册地址是否有变 |
| changecompare | newChangeHis.orgName | string | 变更后-供应商名称 |
| changecompare | oldChangeHis.orgName | string | 变更前-供应商名称 |
| changecompare | newChangeHis.orgCode | string | 变更后-供应商编码 |
| changecompare | oldChangeHis.orgCode | string | 变更前-供应商编码 |
| changecompare | newChangeHis.settlementBank.* | object | 变更后-结算银行 |
| changecompare | oldChangeHis.settlementBank.* | object | 变更前-结算银行 |
| changecompare | newChangeHis.acceptingBank.* | object | 变更后-承兑银行 |
| changecompare | oldChangeHis.acceptingBank.* | object | 变更前-承兑银行 |
| changecompare | newChangeHis.address.* | object | 变更后-公司地址 |
| changecompare | oldChangeHis.address.* | object | 变更前-公司地址 |
| changecompare | newChangeHis.massBusinessPremise.* | object | 变更后-量产商务前提 |
| changecompare | oldChangeHis.massBusinessPremise.* | object | 变更前-量产商务前提 |
| changecompare | newChangeHis.sampleBusinessPremise.* | object | 变更后-样件商务前提 |
| changecompare | oldChangeHis.sampleBusinessPremise.* | object | 变更前-样件商务前提 |
| changecompare | newChangeHis.afterSalesBusinessPremise.* | object | 变更后-售后商务前提 |
| changecompare | oldChangeHis.afterSalesBusinessPremise.* | object | 变更前-售后商务前提 |

### SOR 模块输出字段

| 接口 | 字段路径 | 类型 | 说明 |
|------|----------|------|------|
| info list | id | string | SOR ID |
| info list | code | string | SOR编码 |
| info list | name | string | SOR名称 |
| info list | status | string | SOR状态 |
| info list | versionNo | string | 版本号 |
| info list | classifyCode | string | 分类编码 |
| info list | taskStatus | string | 任务状态 |
| info list | isLatest | boolean | 是否最新版本 |
| info list | submitBy.userName | string | 研发工程师姓名 |
| info list | productProjects[].code | string | 采购项目编码 |
| vehicle | platFormNode.id | string | 平台节点ID |
| vehicle | platFormNode.nodeCode | string | 平台编码 |
| vehicle | platFormNode.nodeName | string | 平台名称 |
| vehicle | platFormNode.bomLevel | int | BOM层级 |
| vehicle | projectLevelNodes[].projectNode.* | object | 项目节点 |
| vehicle | projectLevelNodes[].baseNodes[].* | object | 基础车型节点 |
| part list | id | string | SOR行项目ID |
| part list | materialNum | string | 物料号 |
| part list | materialName | string | 物料名称 |
| part list | partTechDesc | string | 零件技术描述 |
| part list | operationType | string | 操作类型 |
| part list | measurementUnit | string | 计量单位 |
| part list | node{车型ID}.count | BigDecimal | 单车用量 |
| part list | node{车型ID}.percent | BigDecimal | 装配比例 |
| process-history | id | string | 任务ID |
| process-history | taskName | string | 环节名称 |
| process-history | callerName | string | 处理人姓名 |
| process-history | actionName | string | 动作/结果 |
| process-history | startDate | string | 开始时间 |
| process-history | finishDate | string/null | 完成时间 |
| process-history | approveComment | string | 审批意见 |
| process-history | taskType | string | 任务类型 |
| process-history | statusName | string | 状态名称 |

### 通用模块输出字段

| 接口 | 字段路径 | 类型 | 说明 |
|------|----------|------|------|
| user query | id | string | 用户主键ID |
| user query | userName | string | 用户姓名 |
| user query | userLoginName | string | 登录账号 |
| user query | email | string | 电子邮箱 |
| user query | userType | string | 用户类型 |
| user query | mobile | string | 联系电话 |
| user query | organizationName | string | 所属部门 |
| user query | isActive | boolean | 账号状态 |

### RFQ 模块输出字段

| 接口 | 字段路径 | 类型 | 说明 |
|------|----------|------|------|
| rfq info list | id | string | RFQ ID |
| rfq info list | rfqCode | string | RFQ编码 |
| rfq info list | rfqName | string | RFQ名称 |
| rfq info list | rfqType | string | RFQ类型 |
| rfq info list | rfqStatus | string | RFQ状态 |
| rfq info list | rfqCurrency | string | 货币 |
| rfq info list | buyerName | string | 采购工程师姓名 |
| rfq info list | pdName | string | 研发工程师姓名 |
| rfq info list | lgName | string | 物流工程师姓名 |
| rfq info list | sorCode | string | SOR编码 |
| rfq info list | projectCode | string | 采购项目编码 |
| rfq info list | projectName | string | 采购项目名称 |
| rfq info list | partCodes | string | 零件编码 |
| rfq info list | partNames | string | 零件名称 |
| rfq info list | supQuoteStatus | string | 供应商报价状态(HTML) |
| rfq info list | nomiStatus | string | 定点状态 |
| rfq info list | currentRound.roundNo | string | 当前轮次号 |
| rfq info list | currentRound.status | string | 轮次状态 |
| rfq info list | plantInfo | string | 工厂信息 |
| rfq info list | isIssueTargetPrice | boolean | 是否发放目标价 |
| rfq info list | isTaskComplete | boolean | 是否任务完成 |
