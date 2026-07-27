---
created: '2026-07-24'
tags: [Xiaomi, AI, 系统]
---

---created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 采购, 数据]
status: draft
---

> [!summary] EP CLI字段地图 — 统一字段总表（逐字段独立行）
> - **核心**：每个字段独立一行，按模块-接口-方向组织EP系统CLI的全部输入输出字段
> - **要点**：覆盖18个接口、42个入参、~180出参字段行、45条枚举映射；含跨接口接力关系
> - **关联**：[[⚙️EP-CLI字段地图-大宽表]] · [[⚙️EP-CLI数据字典-整合表]]

# EP CLI 字段地图 — 统一字段总表

> 基于接口CLI化需求文档 v1.0，覆盖全部 18 个接口，每个字段独立一行

---

## 统一返回包装结构（所有接口共用）

| 字段路径 | 类型 | 说明 |
|----------|------|------|
| state | string | success / fail |
| message | string | 提示信息（fail 时展示） |
| data | object/array | 业务数据 |

**分页结构（data 内）：**

| 字段路径 | 类型 | 说明 |
|----------|------|------|
| content | array | 数据列表 |
| currentPage | int | 当前页码 |
| pageSize | int | 每页条数 |
| totalCount | int | 总记录数 |
| totalPage | int | 总页数 |

---

## 供应商模块

### 接口 1：供应商详情查询

**CLI:** `dx-ep supplier info query --id <id>` | **接口:** /custom/supplier/getById.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| 供应商 | 1-详情查询 | 入参 | --id | string | 是 | - | 供应商主键ID | NotBlank校验 |
| 供应商 | 1-详情查询 | 出参 | id | string | - | - | 供应商主键ID | |
| 供应商 | 1-详情查询 | 出参 | orgCode | string | - | - | 供应商编码 | |
| 供应商 | 1-详情查询 | 出参 | orgName | string | - | - | 供应商名称 | |
| 供应商 | 1-详情查询 | 出参 | orgNameEn | string | - | - | 供应商英文名称 | |
| 供应商 | 1-详情查询 | 出参 | enterpriseType | string | - | - | 公司类型 | FOREIGN_INVESTED=外资 |
| 供应商 | 1-详情查询 | 出参 | certificate | string | - | - | 资质认证 | |
| 供应商 | 1-详情查询 | 出参 | addressStrng | string | - | - | 制造地址 | |
| 供应商 | 1-详情查询 | 出参 | buyerName | string | - | - | 采购员姓名 | |
| 供应商 | 1-详情查询 | 出参 | accountingPeriodDay | string | - | - | 量产账期天数 | |
| 供应商 | 1-详情查询 | 出参 | paymentCashRatio | string | - | - | 量产-现金比例(%) | |
| 供应商 | 1-详情查询 | 出参 | paymentChitRatio | string | - | - | 量产-承兑比例(%) | |
| 供应商 | 1-详情查询 | 出参 | accountingPeriodDaySample | string | - | - | 样件账期天数 | |
| 供应商 | 1-详情查询 | 出参 | accountingPeriodDayAfterSales | string | - | - | 售后账期天数 | |
| 供应商 | 1-详情查询 | 出参 | settlementBank.bankName | string | - | - | 电汇银行名称 | |
| 供应商 | 1-详情查询 | 出参 | settlementBank.bankAccount | string | - | - | 电汇银行账号 | |
| 供应商 | 1-详情查询 | 出参 | acceptingBank.bankName | string | - | - | 承兑银行名称 | |
| 供应商 | 1-详情查询 | 出参 | acceptingBank.bankAccount | string | - | - | 承兑银行账号 | |
| 供应商 | 1-详情查询 | 出参 | supplierBusinessPremises[].id | string | - | - | 商务前提ID | |
| 供应商 | 1-详情查询 | 出参 | supplierBusinessPremises[].supplierId | string | - | - | 供应商ID | |
| 供应商 | 1-详情查询 | 出参 | supplierBusinessPremises[].type | string | - | - | 商务前提类型 | MASS=量产, SAMPLE=样件, AFTERSALES=售后 |
| 供应商 | 1-详情查询 | 出参 | supplierBusinessPremises[].versionNo | int | - | - | 版本号 | |
| 供应商 | 1-详情查询 | 出参 | supplierBusinessPremises[].accountingPeriod | string | - | - | 账期代码 | V001~V015（见枚举表） |
| 供应商 | 1-详情查询 | 出参 | supplierBusinessPremises[].suplChgKeyAfId | string | - | - | 变更申请单ID | |
| 供应商 | 1-详情查询 | 出参 | supplierBusinessPremises[].suplChgKeyAfCode | string | - | - | 变更申请单号 | |
| 供应商 | 1-详情查询 | 出参 | supplierBusinessPremises[].startDate | string | - | - | 生效日期 | |
| 供应商 | 1-详情查询 | 出参 | supplierBusinessPremises[].endDate | string | - | - | 失效日期 | |

---

### 接口 2：供应商列表查询

**CLI:** `dx-ep supplier info list [--name] [--code] [--page] [--page-size]` | **接口:** /custom/custSupplierManager/findAllSupplierList.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| 供应商 | 2-列表查询 | 入参 | --name | string | 否 | - | 供应商名称（模糊） | |
| 供应商 | 2-列表查询 | 入参 | --code | string | 否 | - | 供应商编码（模糊） | |
| 供应商 | 2-列表查询 | 入参 | --page | int | 否 | 1 | 页码 | |
| 供应商 | 2-列表查询 | 入参 | --page-size | int | 否 | 50 | 每页条数 | |
| 供应商 | 2-列表查询 | 出参 | content[].id | string | - | - | 供应商主键ID | |
| 供应商 | 2-列表查询 | 出参 | content[].orgCode | string | - | - | 供应商编码 | |
| 供应商 | 2-列表查询 | 出参 | content[].orgName | string | - | - | 供应商名称 | |
| 供应商 | 2-列表查询 | 出参 | content[].supplierType | string | - | - | 供应商类型 | TEMPORARY=临时, POTENTIAL=预选, OFFICIAL=正式 |

---

### 接口 3：供应商变更申请单查询

**CLI:** `dx-ep supplier change list [--name] [--code] [--page] [--page-size]` | **接口:** /custom/suplChgKeyAf/find.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| 供应商 | 3-变更单查询 | 入参 | --name | string | 否 | - | 供应商名称（模糊） | |
| 供应商 | 3-变更单查询 | 入参 | --code | string | 否 | - | 供应商编码（精确） | |
| 供应商 | 3-变更单查询 | 入参 | --page | int | 否 | 1 | 页码 | >0校验 |
| 供应商 | 3-变更单查询 | 入参 | --page-size | int | 否 | 50 | 每页条数 | 1~100校验 |
| 供应商 | 3-变更单查询 | 出参 | content[].id | string | - | - | 变更申请单主键ID | |
| 供应商 | 3-变更单查询 | 出参 | content[].appFormId | string | - | - | 关联表单ID | |
| 供应商 | 3-变更单查询 | 出参 | content[].oldHisId | string | - | - | 变更前快照ID | 接力→接口4 |
| 供应商 | 3-变更单查询 | 出参 | content[].newHisId | string | - | - | 变更后快照ID | 接力→接口4 |
| 供应商 | 3-变更单查询 | 出参 | content[].supplierId | string | - | - | 供应商ID | |
| 供应商 | 3-变更单查询 | 出参 | content[].changeContentTypes | string | - | - | 变更要素描述 | |
| 供应商 | 3-变更单查询 | 出参 | content[].appForm.code | string | - | - | 变更申请单号 | |
| 供应商 | 3-变更单查询 | 出参 | content[].appForm.name | string | - | - | 申请单名称 | |
| 供应商 | 3-变更单查询 | 出参 | content[].appForm.status | string | - | - | 审批状态 | DRAFT=草稿, SUBMIT=审批中, PASS=通过, REJECT=否决, FINISHED=完成, CANCELLED=废弃, WITHDRAW=撤回, PENDING=待审批 |
| 供应商 | 3-变更单查询 | 出参 | content[].appForm.auditDate | string | - | - | 变更生效时间 | |
| 供应商 | 3-变更单查询 | 出参 | content[].supplier.orgName | string | - | - | 供应商名称 | |
| 供应商 | 3-变更单查询 | 出参 | content[].supplier.orgCode | string | - | - | 供应商编码 | |

---

### 接口 4：供应商变更详情对比

**CLI:** `dx-ep supplier changecompare detail --old-his-id <id> --new-his-id <id>` | **接口:** /custom/suplNoncriticalChg/compareSupplier.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| 供应商 | 4-变更对比 | 入参 | --old-his-id | string | 是 | - | 变更前历史记录ID | NotBlank; 来源: 接口3 oldHisId |
| 供应商 | 4-变更对比 | 入参 | --new-his-id | string | 是 | - | 变更后历史记录ID | NotBlank; 来源: 接口3 newHisId |
| 供应商 | 4-变更对比 | 出参 | differentSameAddress | boolean | - | - | 生产工厂/制造地是否有变 | |
| 供应商 | 4-变更对比 | 出参 | differentSameCertification | boolean | - | - | 认证体系是否变化 | |
| 供应商 | 4-变更对比 | 出参 | differentSameCaps | boolean | - | - | 公司股比是否变化 | |
| 供应商 | 4-变更对比 | 出参 | differentSameCompostion | boolean | - | - | 人员构成是否变化 | |
| 供应商 | 4-变更对比 | 出参 | differentRegisterAddress | boolean | - | - | 注册地址是否有变 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.id | string | - | - | 变更后-主键ID | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.orgName | string | - | - | 变更后-供应商名称 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.orgNameEn | string | - | - | 变更后-供应商英文名称 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.orgSimpleName | string | - | - | 变更后-供应商简称 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.orgSimpleNameEn | string | - | - | 变更后-供应商简称英文 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.orgSimpleCode | string | - | - | 变更后-供应商简码 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.orgCode | string | - | - | 变更后-供应商编码 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.orgTempCode | string | - | - | 变更后-临时编码 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.suplChgKeyAfId | string | - | - | 变更后-变更申请单ID | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.supplierId | string | - | - | 变更后-供应商ID | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.inDate | date | - | - | 变更后-生效时间 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.outDate | date | - | - | 变更后-失效时间 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.addressId | string | - | - | 变更后-地址ID | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.address.id | string | - | - | 变更后-地址ID | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.address.country | string | - | - | 变更后-国家 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.address.provinces | string | - | - | 变更后-省份 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.address.city | string | - | - | 变更后-城市 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.address.county | string | - | - | 变更后-区县 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.address.address | string | - | - | 变更后-详细地址 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.address.addressEn | string | - | - | 变更后-英文地址 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.settlementBankId | string | - | - | 变更后-结算银行ID | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.settlementBank.id | string | - | - | 变更后-结算银行ID | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.settlementBank.bankName | string | - | - | 变更后-银行名称 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.settlementBank.accountName | string | - | - | 变更后-账户名称 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.settlementBank.accountNo | string | - | - | 变更后-账号 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.acceptingBankId | string | - | - | 变更后-承兑银行ID | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.acceptingBank.id | string | - | - | 变更后-承兑银行ID | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.acceptingBank.bankName | string | - | - | 变更后-银行名称 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.acceptingBank.accountName | string | - | - | 变更后-账户名称 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.acceptingBank.accountNo | string | - | - | 变更后-账号 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.massBusinessPremise.id | string | - | - | 变更后-量产商务前提ID | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.massBusinessPremise.type | string | - | - | 变更后-类型 | MASS |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.massBusinessPremise.accountingPeriod | string | - | - | 变更后-账期 | V001~V015 |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.massBusinessPremise.chitAccountingPeriod | string | - | - | 变更后-承兑汇票账期 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.massBusinessPremise.startDate | date | - | - | 变更后-生效日期 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.sampleBusinessPremise.id | string | - | - | 变更后-样件商务前提ID | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.sampleBusinessPremise.type | string | - | - | 变更后-类型 | SAMPLE |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.sampleBusinessPremise.accountingPeriod | string | - | - | 变更后-账期 | V001~V015 |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.sampleBusinessPremise.chitAccountingPeriod | string | - | - | 变更后-承兑汇票账期 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.sampleBusinessPremise.startDate | date | - | - | 变更后-生效日期 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.afterSalesBusinessPremise.id | string | - | - | 变更后-售后商务前提ID | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.afterSalesBusinessPremise.type | string | - | - | 变更后-类型 | AFTERSALES |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.afterSalesBusinessPremise.accountingPeriod | string | - | - | 变更后-账期 | X051等 |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.afterSalesBusinessPremise.startDate | date | - | - | 变更后-生效日期 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.businessScope | string | - | - | 变更后-经营范围 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.income | number | - | - | 变更后-收入 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.numberOfEmployees | int | - | - | 变更后-员工人数 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.registeredCapital | number | - | - | 变更后-注册资本 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.legalPerson | string | - | - | 变更后-法定代表人 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.registeredDate | date | - | - | 变更后-注册日期 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.duns | string | - | - | 变更后-DUNS编码 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.certificate | string | - | - | 变更后-资质认证 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.accountingPeriod | string | - | - | 变更后-账期代码 | V001~V015 |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.paymentCashRatio | string | - | - | 变更后-现金比例 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.paymentChitRatio | string | - | - | 变更后-承兑比例 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.chitAccountingPeriod | string | - | - | 变更后-承兑汇票账期 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.accountingPeriodAfterSales | string | - | - | 变更后-售后账期 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.supplierType | string | - | - | 变更后-供应商类型 | TEMPORARY/POTENTIAL/OFFICIAL |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.enterpriseType | string | - | - | 变更后-公司类型 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.officialWebsite | string | - | - | 变更后-官方网站 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.domesticSupplier | string | - | - | 变更后-是否国内供应商 | |
| 供应商 | 4-变更对比 | 出参 | newChangeHis.monetaryUnit | string | - | - | 变更后-货币单位 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.id | string | - | - | 变更前-主键ID | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.orgName | string | - | - | 变更前-供应商名称 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.orgNameEn | string | - | - | 变更前-供应商英文名称 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.orgSimpleName | string | - | - | 变更前-供应商简称 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.orgSimpleNameEn | string | - | - | 变更前-供应商简称英文 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.orgSimpleCode | string | - | - | 变更前-供应商简码 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.orgCode | string | - | - | 变更前-供应商编码 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.orgTempCode | string | - | - | 变更前-临时编码 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.suplChgKeyAfId | string | - | - | 变更前-变更申请单ID | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.supplierId | string | - | - | 变更前-供应商ID | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.inDate | date | - | - | 变更前-生效时间 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.outDate | date | - | - | 变更前-失效时间 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.addressId | string | - | - | 变更前-地址ID | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.address.id | string | - | - | 变更前-地址ID | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.address.country | string | - | - | 变更前-国家 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.address.provinces | string | - | - | 变更前-省份 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.address.city | string | - | - | 变更前-城市 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.address.county | string | - | - | 变更前-区县 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.address.address | string | - | - | 变更前-详细地址 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.address.addressEn | string | - | - | 变更前-英文地址 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.settlementBankId | string | - | - | 变更前-结算银行ID | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.settlementBank.id | string | - | - | 变更前-结算银行ID | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.settlementBank.bankName | string | - | - | 变更前-银行名称 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.settlementBank.accountName | string | - | - | 变更前-账户名称 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.settlementBank.accountNo | string | - | - | 变更前-账号 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.acceptingBankId | string | - | - | 变更前-承兑银行ID | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.acceptingBank.id | string | - | - | 变更前-承兑银行ID | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.acceptingBank.bankName | string | - | - | 变更前-银行名称 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.acceptingBank.accountName | string | - | - | 变更前-账户名称 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.acceptingBank.accountNo | string | - | - | 变更前-账号 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.massBusinessPremise.id | string | - | - | 变更前-量产商务前提ID | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.massBusinessPremise.type | string | - | - | 变更前-类型 | MASS |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.massBusinessPremise.accountingPeriod | string | - | - | 变更前-账期 | V001~V015 |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.massBusinessPremise.chitAccountingPeriod | string | - | - | 变更前-承兑汇票账期 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.massBusinessPremise.startDate | date | - | - | 变更前-生效日期 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.sampleBusinessPremise.id | string | - | - | 变更前-样件商务前提ID | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.sampleBusinessPremise.type | string | - | - | 变更前-类型 | SAMPLE |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.sampleBusinessPremise.accountingPeriod | string | - | - | 变更前-账期 | V001~V015 |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.sampleBusinessPremise.chitAccountingPeriod | string | - | - | 变更前-承兑汇票账期 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.sampleBusinessPremise.startDate | date | - | - | 变更前-生效日期 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.afterSalesBusinessPremise.id | string | - | - | 变更前-售后商务前提ID | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.afterSalesBusinessPremise.type | string | - | - | 变更前-类型 | AFTERSALES |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.afterSalesBusinessPremise.accountingPeriod | string | - | - | 变更前-账期 | X051等 |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.afterSalesBusinessPremise.startDate | date | - | - | 变更前-生效日期 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.businessScope | string | - | - | 变更前-经营范围 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.income | number | - | - | 变更前-收入 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.numberOfEmployees | int | - | - | 变更前-员工人数 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.registeredCapital | number | - | - | 变更前-注册资本 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.legalPerson | string | - | - | 变更前-法定代表人 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.registeredDate | date | - | - | 变更前-注册日期 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.duns | string | - | - | 变更前-DUNS编码 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.certificate | string | - | - | 变更前-资质认证 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.accountingPeriod | string | - | - | 变更前-账期代码 | V001~V015 |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.paymentCashRatio | string | - | - | 变更前-现金比例 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.paymentChitRatio | string | - | - | 变更前-承兑比例 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.chitAccountingPeriod | string | - | - | 变更前-承兑汇票账期 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.accountingPeriodAfterSales | string | - | - | 变更前-售后账期 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.supplierType | string | - | - | 变更前-供应商类型 | TEMPORARY/POTENTIAL/OFFICIAL |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.enterpriseType | string | - | - | 变更前-公司类型 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.officialWebsite | string | - | - | 变更前-官方网站 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.domesticSupplier | string | - | - | 变更前-是否国内供应商 | |
| 供应商 | 4-变更对比 | 出参 | oldChangeHis.monetaryUnit | string | - | - | 变更前-货币单位 | |

---

## SOR 模块

### 接口 5：SOR 列表查询

**CLI:** `dx-ep sor info list [--code] [--material-num] [--latest] [--page] [--page-size]` | **接口:** /custom/designReq/find.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| SOR | 5-SOR列表 | 入参 | --code | string | 否 | - | SOR编号 | |
| SOR | 5-SOR列表 | 入参 | --material-num | string | 否 | - | 零件号 | |
| SOR | 5-SOR列表 | 入参 | --latest | boolean | 否 | true | 仅查最新版本 | |
| SOR | 5-SOR列表 | 入参 | --page | int | 否 | 1 | 页码 | |
| SOR | 5-SOR列表 | 入参 | --page-size | int | 否 | 50 | 每页条数 | |
| SOR | 5-SOR列表 | 出参 | content[].id | string | - | - | SOR ID | |
| SOR | 5-SOR列表 | 出参 | content[].code | string | - | - | SOR编码 | |
| SOR | 5-SOR列表 | 出参 | content[].name | string | - | - | SOR名称 | |
| SOR | 5-SOR列表 | 出参 | content[].status | string | - | - | SOR状态 | DRAFT=草稿, REJECT=驳回, SUBMIT=审批中, PASS=已发布, ABANDON=废弃, WITHDRAW=撤回, DELETE=已取消, RETURN_TO_DEV=退回 |
| SOR | 5-SOR列表 | 出参 | content[].versionNo | string | - | - | 版本号 | |
| SOR | 5-SOR列表 | 出参 | content[].classifyCode | string | - | - | 分类编码 | |
| SOR | 5-SOR列表 | 出参 | content[].taskStatus | string | - | - | 任务状态 | |
| SOR | 5-SOR列表 | 出参 | content[].isLatest | boolean | - | - | 是否最新版本 | |
| SOR | 5-SOR列表 | 出参 | content[].submitBy.userName | string | - | - | 研发工程师姓名 | |
| SOR | 5-SOR列表 | 出参 | content[].productProjects[].id | string | - | - | 采购项目主键 | |
| SOR | 5-SOR列表 | 出参 | content[].productProjects[].code | string | - | - | 采购项目编码 | |

---

### 接口 6：SOR 车型查询

**CLI:** `dx-ep sor vehicle query --sor-id <id> --projectId <ids>` | **接口:** /custom/designReqItem/findBicycleMapByProjectSor.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| SOR | 6-车型查询 | 入参 | --sor-id | string | 是 | - | SOR主键ID | |
| SOR | 6-车型查询 | 入参 | --projectId | string | 是 | - | 采购项目ID（逗号分隔） | |
| SOR | 6-车型查询 | 出参 | [].platFormNode.id | string | - | - | 平台节点ID | |
| SOR | 6-车型查询 | 出参 | [].platFormNode.nodeCode | string | - | - | 平台编码 | |
| SOR | 6-车型查询 | 出参 | [].platFormNode.nodeName | string | - | - | 平台名称 | |
| SOR | 6-车型查询 | 出参 | [].platFormNode.nodeType | string | - | - | 节点类型 | PLATFORM |
| SOR | 6-车型查询 | 出参 | [].platFormNode.bomLevel | int | - | - | BOM层级 | 2 |
| SOR | 6-车型查询 | 出参 | [].projectLevelNodes[].projectNode.id | string | - | - | 项目节点ID | |
| SOR | 6-车型查询 | 出参 | [].projectLevelNodes[].projectNode.nodeCode | string | - | - | 项目编码 | |
| SOR | 6-车型查询 | 出参 | [].projectLevelNodes[].projectNode.nodeName | string | - | - | 项目名称 | |
| SOR | 6-车型查询 | 出参 | [].projectLevelNodes[].projectNode.nodeType | string | - | - | 节点类型 | PROJECT |
| SOR | 6-车型查询 | 出参 | [].projectLevelNodes[].projectNode.bomLevel | int | - | - | BOM层级 | 3 |
| SOR | 6-车型查询 | 出参 | [].projectLevelNodes[].baseNodes[].id | string | - | - | 车型节点ID | |
| SOR | 6-车型查询 | 出参 | [].projectLevelNodes[].baseNodes[].nodeCode | string | - | - | 车型编码 | |
| SOR | 6-车型查询 | 出参 | [].projectLevelNodes[].baseNodes[].nodeName | string | - | - | 车型名称 | |
| SOR | 6-车型查询 | 出参 | [].projectLevelNodes[].baseNodes[].nodeType | string | - | - | 节点类型 | BASE_MODEL |
| SOR | 6-车型查询 | 出参 | [].projectLevelNodes[].baseNodes[].bomLevel | int | - | - | BOM层级 | 4 |
| SOR | 6-车型查询 | 出参 | [].projectLevelNodes[].baseNodes[].isBomNode | boolean | - | - | 是否BOM节点 | |
| SOR | 6-车型查询 | 出参 | [].projectLevelNodes[].baseNodes[].isForSale | boolean | - | - | 是否可销售 | |
| SOR | 6-车型查询 | 出参 | [].projectLevelNodes[].baseNodes[].status | string | - | - | 节点状态 | ACTIVE |

---

### 接口 7：SOR 零件列表查询

**CLI:** `dx-ep sor part list --sor-id <id> [--page] [--page-size]` | **接口:** /custom/designReqItem/findDesignReqItems.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| SOR | 7-零件列表 | 入参 | --sor-id | string | 是 | - | SOR主键ID | |
| SOR | 7-零件列表 | 入参 | --page | int | 否 | 1 | 页码 | |
| SOR | 7-零件列表 | 入参 | --page-size | int | 否 | 50 | 每页条数 | |
| SOR | 7-零件列表 | 出参 | [].id | string | - | - | SOR行项目ID | |
| SOR | 7-零件列表 | 出参 | [].pdId | string | - | - | 产品经理ID | |
| SOR | 7-零件列表 | 出参 | [].operationType | string | - | - | 操作类型 | NEW=新增, UPDATE=更新, DELETE=删除 |
| SOR | 7-零件列表 | 出参 | [].devType | string | - | - | 开发类型 | |
| SOR | 7-零件列表 | 出参 | [].partTechDesc | string | - | - | 零件技术描述 | |
| SOR | 7-零件列表 | 出参 | [].isChange | string | - | - | 是否变更 | |
| SOR | 7-零件列表 | 出参 | [].partId | string | - | - | 零件ID | |
| SOR | 7-零件列表 | 出参 | [].materialNum | string | - | - | 物料号 | |
| SOR | 7-零件列表 | 出参 | [].materialName | string | - | - | 物料名称 | |
| SOR | 7-零件列表 | 出参 | [].measurementUnit | string | - | - | 计量单位 | |
| SOR | 7-零件列表 | 出参 | [].subDataType | string | - | - | 子数据类型 | |
| SOR | 7-零件列表 | 出参 | [].qualityId | string | - | - | 质量工程师ID | |
| SOR | 7-零件列表 | 出参 | [].designReqId | string | - | - | SOR ID | |
| SOR | 7-零件列表 | 出参 | [].applyTo | string | - | - | 适用范围 | |
| SOR | 7-零件列表 | 出参 | [].node{车型节点ID}.count | BigDecimal | - | - | 单车用量 | 动态字段 |
| SOR | 7-零件列表 | 出参 | [].node{车型节点ID}.percent | BigDecimal | - | - | 装配比例 | 动态字段 |

---

### 接口 8：SOR 审批历史查询

**CLI:** `dx-ep sor process-history query --rec-id <id>` | **接口:** /custom/custWorkFlow/findHistoryTasks.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| SOR | 8-审批历史 | 入参 | --rec-id | string | 是 | - | 业务记录ID（SOR主键） | |
| SOR | 8-审批历史 | 入参 | --rec-type-id | long | 否 | 995001 | 记录类型ID | 固定值 |
| SOR | 8-审批历史 | 入参 | --controller-name | string | 否 | DesignReqItem2 | 控制名 | 固定值 |
| SOR | 8-审批历史 | 入参 | --view-name | string | 否 | GantDetailMultWindow | 视图名 | 固定值 |
| SOR | 8-审批历史 | 出参 | list[].id | string | - | - | 任务ID | |
| SOR | 8-审批历史 | 出参 | list[].processId | string | - | - | 流程ID | |
| SOR | 8-审批历史 | 出参 | list[].resourceName | string | - | - | 资源名称 | |
| SOR | 8-审批历史 | 出参 | list[].processDetail | string | - | - | 流程描述 | |
| SOR | 8-审批历史 | 出参 | list[].createBy | string | - | - | 创建人ID | |
| SOR | 8-审批历史 | 出参 | list[].createByName | string | - | - | 创建人姓名 | |
| SOR | 8-审批历史 | 出参 | list[].taskName | string | - | - | 环节名称 | |
| SOR | 8-审批历史 | 出参 | list[].startDate | string | - | - | 开始时间 | |
| SOR | 8-审批历史 | 出参 | list[].finishDate | string/null | - | - | 完成时间 | null=进行中 |
| SOR | 8-审批历史 | 出参 | list[].actionName | string | - | - | 动作/结果 | |
| SOR | 8-审批历史 | 出参 | list[].caller | string | - | - | 处理人ID | |
| SOR | 8-审批历史 | 出参 | list[].callerName | string | - | - | 处理人姓名 | |
| SOR | 8-审批历史 | 出参 | list[].approveComment | string | - | - | 审批意见 | |
| SOR | 8-审批历史 | 出参 | list[].taskType | string | - | - | 任务类型 | S=开始步骤, H=历史步骤, E=结束步骤 |
| SOR | 8-审批历史 | 出参 | list[].statusCode | int | - | - | 状态码 | |
| SOR | 8-审批历史 | 出参 | list[].statusName | string | - | - | 状态名称 | |

---

## 通用模块

### 接口 9：用户信息查询

**CLI:** `dx-ep user info query --id <id>` | **接口:** /fwSecurity/security/getUserById.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| 通用 | 9-用户信息 | 入参 | --id | string | 是 | - | 用户主键ID(UUID) | NotBlank校验 |
| 通用 | 9-用户信息 | 出参 | id | string | - | - | 用户主键ID | |
| 通用 | 9-用户信息 | 出参 | userName | string | - | - | 用户真实姓名 | |
| 通用 | 9-用户信息 | 出参 | userLoginName | string | - | - | 用户登录账号 | |
| 通用 | 9-用户信息 | 出参 | email | string | - | - | 电子邮箱 | |
| 通用 | 9-用户信息 | 出参 | userType | string | - | - | 用户类型 | EMPLOYEE=内部员工; 非EMPLOYEE=供应商侧账号 |
| 通用 | 9-用户信息 | 出参 | mobile | string | - | - | 联系电话 | |
| 通用 | 9-用户信息 | 出参 | organizationName | string | - | - | 所属部门 | |
| 通用 | 9-用户信息 | 出参 | isActive | boolean | - | - | 账号状态 | true=有效; false=离职/停用(姓名标注) |

---

## RFQ 模块

### 接口 10：RFQ 列表查询

**CLI:** `dx-ep rfq info list [--rfq-code] [--rfq-name] [--material-num] [--sor-code] [--delay-status] [--page] [--page-size]` | **接口:** /custom/rfq/find.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| RFQ | 10-RFQ列表 | 入参 | --rfq-code | string | 否 | - | RFQ编号（模糊） | |
| RFQ | 10-RFQ列表 | 入参 | --rfq-name | string | 否 | - | RFQ名称（模糊） | |
| RFQ | 10-RFQ列表 | 入参 | --material-num | string | 否 | - | 零件号（模糊） | |
| RFQ | 10-RFQ列表 | 入参 | --sor-code | string | 否 | - | SOR编码（模糊） | |
| RFQ | 10-RFQ列表 | 入参 | --delay-status | string | 否 | mine | 查询范围 | mine=我的(默认), all=全部(需权限) |
| RFQ | 10-RFQ列表 | 入参 | --page | int | 否 | 1 | 页码 | |
| RFQ | 10-RFQ列表 | 入参 | --page-size | int | 否 | 50 | 每页条数 | |
| RFQ | 10-RFQ列表 | 出参 | content[].id | string | - | - | RFQ ID | |
| RFQ | 10-RFQ列表 | 出参 | content[].rfqCode | string | - | - | RFQ编码 | |
| RFQ | 10-RFQ列表 | 出参 | content[].rfqName | string | - | - | RFQ名称 | |
| RFQ | 10-RFQ列表 | 出参 | content[].rfqType | string | - | - | RFQ类型 | |
| RFQ | 10-RFQ列表 | 出参 | content[].rfqStatus | string | - | - | RFQ状态 | |
| RFQ | 10-RFQ列表 | 出参 | content[].rfqDesc | string | - | - | RFQ描述 | |
| RFQ | 10-RFQ列表 | 出参 | content[].rfqCurrency | string | - | - | 货币 | |
| RFQ | 10-RFQ列表 | 出参 | content[].remarks | string | - | - | 备注 | |
| RFQ | 10-RFQ列表 | 出参 | content[].isIssueTargetPrice | boolean | - | - | 是否发放目标价 | |
| RFQ | 10-RFQ列表 | 出参 | content[].isTaskComplete | boolean | - | - | 是否任务完成 | |
| RFQ | 10-RFQ列表 | 出参 | content[].isFree | boolean | - | - | 是否允许供应商自由报价 | |
| RFQ | 10-RFQ列表 | 出参 | content[].needTechnicalReview | boolean | - | - | 是否需要技术评审 | |
| RFQ | 10-RFQ列表 | 出参 | content[].reviewReason | string | - | - | 技术评审原因 | |
| RFQ | 10-RFQ列表 | 出参 | content[].cancelDate | date | - | - | 取消时间 | |
| RFQ | 10-RFQ列表 | 出参 | content[].cancelReason | string | - | - | 取消原因 | |
| RFQ | 10-RFQ列表 | 出参 | content[].endDate | date | - | - | 结束时间 | |
| RFQ | 10-RFQ列表 | 出参 | content[].currentRoundId | string | - | - | 当前轮次ID | |
| RFQ | 10-RFQ列表 | 出参 | content[].buyerId | string | - | - | 采购工程师ID | |
| RFQ | 10-RFQ列表 | 出参 | content[].buyerName | string | - | - | 采购工程师姓名 | |
| RFQ | 10-RFQ列表 | 出参 | content[].sqeId | string | - | - | SQE ID | |
| RFQ | 10-RFQ列表 | 出参 | content[].pdId | string | - | - | 研发工程师ID | |
| RFQ | 10-RFQ列表 | 出参 | content[].pdName | string | - | - | 研发工程师姓名 | |
| RFQ | 10-RFQ列表 | 出参 | content[].logisticsEngId | string | - | - | 物流工程师ID | |
| RFQ | 10-RFQ列表 | 出参 | content[].lgName | string | - | - | 物流工程师姓名 | |
| RFQ | 10-RFQ列表 | 出参 | content[].afterSalesEngId | string | - | - | 售后工程师ID | |
| RFQ | 10-RFQ列表 | 出参 | content[].afterSalesEngName | string | - | - | 售后工程师姓名 | |
| RFQ | 10-RFQ列表 | 出参 | content[].planEngId | string | - | - | 体系工程师ID | |
| RFQ | 10-RFQ列表 | 出参 | content[].costEngId | string | - | - | 成本工程师ID | |
| RFQ | 10-RFQ列表 | 出参 | content[].asOrdererId | string | - | - | 售后订单员ID | |
| RFQ | 10-RFQ列表 | 出参 | content[].currentRound.id | string | - | - | 轮次ID | |
| RFQ | 10-RFQ列表 | 出参 | content[].currentRound.roundNo | string | - | - | 轮次号 | |
| RFQ | 10-RFQ列表 | 出参 | content[].currentRound.status | string | - | - | 轮次状态 | |
| RFQ | 10-RFQ列表 | 出参 | content[].designReqId | string | - | - | SOR/设计需求ID | |
| RFQ | 10-RFQ列表 | 出参 | content[].sorCode | string | - | - | SOR编码 | |
| RFQ | 10-RFQ列表 | 出参 | content[].versionNo | string | - | - | SOR版本号 | |
| RFQ | 10-RFQ列表 | 出参 | content[].projectCode | string | - | - | 采购项目编码 | 逗号分隔 |
| RFQ | 10-RFQ列表 | 出参 | content[].projectName | string | - | - | 采购项目名称 | 逗号分隔 |
| RFQ | 10-RFQ列表 | 出参 | content[].plantInfo | string | - | - | 工厂信息 | 逗号分隔 |
| RFQ | 10-RFQ列表 | 出参 | content[].partCodes | string | - | - | RFQ所有零件编码 | 逗号分隔 |
| RFQ | 10-RFQ列表 | 出参 | content[].partNames | string | - | - | RFQ所有零件名称 | 逗号分隔 |
| RFQ | 10-RFQ列表 | 出参 | content[].supQuoteStatus | string | - | - | 供应商报价状态 | HTML格式 |
| RFQ | 10-RFQ列表 | 出参 | content[].nomiStatus | string | - | - | 首次定点状态 | TOCREATE=待创建, PASS=已通过 |

---

### 接口 11：询报价条目查询

**CLI:** `dx-ep rfq quote list --rfq-id <id> --round-no <no>` | **接口:** /custom/rfqQuotesInfo/findQuotesByRfqIdAndRoundNo.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| RFQ | 11-询报价条目 | 入参 | --rfq-id | string | 是 | - | RFQ ID | |
| RFQ | 11-询报价条目 | 入参 | --round-no | string | 是 | - | 轮次号 | |
| RFQ | 11-询报价条目 | 出参 | *(待补充)* | - | - | - | 包含发包日期、供应商报价日期等报价详情 | |

---

### 接口 12：询报价供应商查询

**CLI:** `dx-ep rfq release list --rfq-quotes-info-id <id>` | **接口:** /custom/rfqReleaseInfo/doFindByRfqQuotesInfoId.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| RFQ | 12-询报价供应商 | 入参 | --rfq-quotes-info-id | string | 是 | - | 报价条目ID | |
| RFQ | 12-询报价供应商 | 出参 | *(待补充)* | - | - | - | 含供应商发放状态、报价状态详情、联系人信息和时间线 | |

---

### 接口 13：预选供应商信息查询

**CLI:** `dx-ep rfq bidderaf query [--sor-code] [--rfq-code]` | **接口:** /custom/rfqBidderAf/findLatestBySorCode.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| RFQ | 13-预选供应商信息 | 入参 | --sor-code | string | 否 | - | SOR编码 | |
| RFQ | 13-预选供应商信息 | 入参 | --rfq-code | string | 否 | - | RFQ编码 | |
| RFQ | 13-预选供应商信息 | 出参 | *(待补充)* | - | - | - | 含SQE/研发审核状态和供应商列表 | |

---

### 接口 14：预选供应商申请单查询

**CLI:** `dx-ep rfq bidderaf list --rfq-code <code>` | **接口:** /custom/rfqBidderAf/find.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| RFQ | 14-预选申请单 | 入参 | --rfq-code | string | 是 | - | RFQ编码 | |
| RFQ | 14-预选申请单 | 出参 | *(待补充)* | - | - | - | 含SQE/研发审核状态 | |

---

### 接口 15：物流信息查询

**CLI:** `dx-ep rfq logistics list [--sor-code] [--rfq-code]` | **接口:** /custom/rfqQuotesInfo/findRfqRoundSupplierFile.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| RFQ | 15-物流信息 | 入参 | --sor-code | string | 否 | - | SOR编码 | |
| RFQ | 15-物流信息 | 入参 | --rfq-code | string | 否 | - | RFQ编码 | |
| RFQ | 15-物流信息 | 出参 | *(待补充)* | - | - | - | 含物流信息和产能调查状态 | |

---

### 接口 16：当前轮次供应商查询

**CLI:** `dx-ep rfq round supplier list --rfq-id <id>` | **接口:** /custom/rfqQuotesInfo/findSupplierByCurrentRoundNo.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| RFQ | 16-当前轮次供应商 | 入参 | --rfq-id | string | 是 | - | RFQ ID | |
| RFQ | 16-当前轮次供应商 | 出参 | *(待补充)* | - | - | - | 当前轮次完成报价的供应商列表 | |

---

## 定点模块

### 接口 17：定点申请单查询

**CLI:** `dx-ep nomi nomiaf query [--sor-code] [--rfq-code]` | **接口:** /custom/nominationAf/find.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| 定点 | 17-定点查询 | 入参 | --sor-code | string | 否 | - | SOR编码 | |
| 定点 | 17-定点查询 | 入参 | --rfq-code | string | 否 | - | RFQ编码 | |
| 定点 | 17-定点查询 | 出参 | *(待补充)* | - | - | - | 定点申请单信息 | |

---

### 接口 18：创建定点申请单

**CLI:** `dx-ep nomi nomiaf create --rfq-id <id>` | **接口:** /custom/nominationAf/create.api

| 模块 | 接口 | 方向 | 字段路径 | 类型 | 必选 | 默认值 | 说明 | 枚举/映射 |
|------|------|------|----------|------|------|--------|------|-----------|
| 定点 | 18-创建定点 | 入参 | --rfq-id | string | 是 | - | RFQ ID | |
| 定点 | 18-创建定点 | 出参 | *(待补充)* | - | - | - | 创建定点申请单草稿结果 | |

---

## 跨接口字段接力关系

| 源接口 | 源字段 | → | 目标接口 | 目标入参 |
|--------|--------|---|----------|----------|
| 2-列表查询 | id | → | 1-详情查询 | --id |
| 3-变更单查询 | oldHisId | → | 4-变更对比 | --old-his-id |
| 3-变更单查询 | newHisId | → | 4-变更对比 | --new-his-id |
| 5-SOR列表 | id | → | 6-车型查询 | --sor-id |
| 5-SOR列表 | id | → | 7-零件列表 | --sor-id |
| 5-SOR列表 | id | → | 8-审批历史 | --rec-id |
| 10-RFQ列表 | id | → | 11-询报价条目 | --rfq-id |
| 10-RFQ列表 | sorCode | → | 13-预选供应商信息 | --sor-code |
| 10-RFQ列表 | sorCode | → | 15-物流信息 | --sor-code |
| 10-RFQ列表 | id | → | 17-定点查询 | --rfq-id |
| 10-RFQ列表 | id | → | 18-创建定点 | --rfq-id |
| 11-询报价条目 | id | → | 12-询报价供应商 | --rfq-quotes-info-id |

---

## 全量枚举映射汇总

| 业务域 | 字段 | 枚举值 | 中文含义 |
|--------|------|--------|----------|
| 供应商 | enterpriseType | FOREIGN_INVESTED | 外资 |
| 供应商 | supplierType | TEMPORARY | 临时 |
| 供应商 | supplierType | POTENTIAL | 预选 |
| 供应商 | supplierType | OFFICIAL | 正式 |
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
| 变更单审批 | appForm.status | DRAFT | 草稿 |
| 变更单审批 | appForm.status | SUBMIT | 审批中 |
| 变更单审批 | appForm.status | PASS | 通过 |
| 变更单审批 | appForm.status | REJECT | 否决 |
| 变更单审批 | appForm.status | FINISHED | 完成 |
| 变更单审批 | appForm.status | CANCELLED | 废弃 |
| 变更单审批 | appForm.status | WITHDRAW | 撤回 |
| 变更单审批 | appForm.status | PENDING | 待审批 |
| SOR | status | DRAFT | 草稿 |
| SOR | status | REJECT | 驳回 |
| SOR | status | SUBMIT | 审批中 |
| SOR | status | PASS | 已发布 |
| SOR | status | ABANDON | 废弃 |
| SOR | status | WITHDRAW | 撤回 |
| SOR | status | DELETE | 已取消 |
| SOR | status | RETURN_TO_DEV | 退回 |
| SOR零件 | operationType | NEW | 新增 |
| SOR零件 | operationType | UPDATE | 更新 |
| SOR零件 | operationType | DELETE | 删除 |
| 审批流程 | taskType | S | 开始步骤 |
| 审批流程 | taskType | H | 历史步骤 |
| 审批流程 | taskType | E | 结束步骤 |
| RFQ | nomiStatus | TOCREATE | 待创建 |
| RFQ | nomiStatus | PASS | 已通过 |
| RFQ查询 | delayStatus | mine | 我的（默认） |
| RFQ查询 | delayStatus | all | 全部（需权限） |

---

## 统计

| 维度 | 数量 |
|------|------|
| 接口总数 | 18 |
| 供应商模块接口 | 4 |
| SOR模块接口 | 4 |
| 通用模块接口 | 1 |
| RFQ模块接口 | 7 |
| 定点模块接口 | 2 |
| 已定义完整出参字段的接口 | 10 (接口1~10) |
| 出参待补充的接口 | 8 (接口11~18) |
| 全量入参个数 | 42 |
| 已定义出参字段行数 | ~180 |
| 枚举映射条目 | 45 |
