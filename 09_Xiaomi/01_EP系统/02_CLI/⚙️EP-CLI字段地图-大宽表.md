---
created: '2026-07-24'
tags: [Xiaomi, AI, 系统]
---

---created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 采购, 数据]
status: draft
---

> [!summary] EP CLI字段地图 — 全接口统一视图大宽表
> - **核心**：将EP系统18个CLI接口的220个唯一字段整合为一张大宽表，标注各接口角色
> - **要点**：覆盖供应商/SOR/通用/RFQ/定点5大业务域；含48条枚举映射、12条跨接口接力关系
> - **关联**：[[⚙️EP-CLI数据字典]] · [[⚙️EP CLI应用]]

# EP CLI 字段地图 — 大宽表（全接口统一视图）

> 每个字段仅出现一次，列标识其在各接口中的角色：入=输入参数，出=输出字段，- =不涉及

---

## 接口编号索引

| # | 模块 | CLI 命令 | 接口路径 |
|---|------|----------|----------|
| 1 | 供应商 | dx-ep supplier info query | /custom/supplier/getById.api |
| 2 | 供应商 | dx-ep supplier info list | /custom/custSupplierManager/findAllSupplierList.api |
| 3 | 供应商 | dx-ep supplier change list | /custom/suplChgKeyAf/find.api |
| 4 | 供应商 | dx-ep supplier changecompare detail | /custom/suplNoncriticalChg/compareSupplier.api |
| 5 | SOR | dx-ep sor info list | /custom/designReq/find.api |
| 6 | SOR | dx-ep sor vehicle query | /custom/designReqItem/findBicycleMapByProjectSor.api |
| 7 | SOR | dx-ep sor part list | /custom/designReqItem/findDesignReqItems.api |
| 8 | SOR | dx-ep sor process-history query | /custom/custWorkFlow/findHistoryTasks.api |
| 9 | 通用 | dx-ep user info query | /fwSecurity/security/getUserById.api |
| 10 | RFQ | dx-ep rfq info list | /custom/rfq/find.api |
| 11 | RFQ | dx-ep rfq quote list | /custom/rfqQuotesInfo/findQuotesByRfqIdAndRoundNo.api |
| 12 | RFQ | dx-ep rfq release list | /custom/rfqReleaseInfo/doFindByRfqQuotesInfoId.api |
| 13 | RFQ | dx-ep rfq bidderaf query | /custom/rfqBidderAf/findLatestBySorCode.api |
| 14 | RFQ | dx-ep rfq bidderaf list | /custom/rfqBidderAf/find.api |
| 15 | RFQ | dx-ep rfq logistics list | /custom/rfqQuotesInfo/findRfqRoundSupplierFile.api |
| 16 | RFQ | dx-ep rfq round supplier list | /custom/rfqQuotesInfo/findSupplierByCurrentRoundNo.api |
| 17 | 定点 | dx-ep nomi nomiaf query | /custom/nominationAf/find.api |
| 18 | 定点 | dx-ep nomi nomiaf create | /custom/nominationAf/create.api |

---

## 统一字段大宽表

| # | 字段路径 | 类型 | 说明 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 枚举/映射 |
|---|----------|------|------|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|----|----|----|-----------|
| 1 | state | string | 响应状态 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | success/fail |
| 2 | message | string | 提示信息 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | |
| 3 | data | object/array | 业务数据 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | |
| 4 | content | array | 分页-数据列表 | - | 出 | 出 | - | 出 | - | - | - | - | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | - | |
| 5 | currentPage | int | 分页-当前页码 | - | 出 | 出 | - | 出 | - | - | - | - | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | - | |
| 6 | pageSize | int | 分页-每页条数 | - | 出 | 出 | - | 出 | - | - | - | - | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | - | |
| 7 | totalCount | int | 分页-总记录数 | - | 出 | 出 | - | 出 | - | - | - | - | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | - | |
| 8 | totalPage | int | 分页-总页数 | - | 出 | 出 | - | 出 | - | - | - | - | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | - | |
| 9 | --id | string | 入参-主键ID | 入 | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - | |
| 10 | --name | string | 入参-名称(模糊) | - | 入 | 入 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 11 | --code | string | 入参-编码 | - | 入 | 入 | - | 入 | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 12 | --page | int | 入参-页码 | - | 入 | 入 | - | 入 | - | 入 | - | - | 入 | - | - | - | - | - | - | - | - | |
| 13 | --page-size | int | 入参-每页条数 | - | 入 | 入 | - | 入 | - | 入 | - | - | 入 | - | - | - | - | - | - | - | - | |
| 14 | --old-his-id | string | 入参-变更前记录ID | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | 来源:接口3 |
| 15 | --new-his-id | string | 入参-变更后记录ID | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | 来源:接口3 |
| 16 | --latest | boolean | 入参-仅最新版本 | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 17 | --sor-id | string | 入参-SOR主键ID | - | - | - | - | - | 入 | 入 | - | - | - | - | - | - | - | - | - | - | - | |
| 18 | --projectId | string | 入参-采购项目ID | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | - | - | 逗号分隔 |
| 19 | --rec-id | string | 入参-业务记录ID | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | |
| 20 | --rec-type-id | long | 入参-记录类型ID | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | 固定值995001 |
| 21 | --controller-name | string | 入参-控制名 | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | 固定值 |
| 22 | --view-name | string | 入参-视图名 | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | 固定值 |
| 23 | --rfq-code | string | 入参-RFQ编号 | - | - | - | - | - | - | - | - | - | 入 | - | - | 入 | 入 | 入 | - | 入 | - | |
| 24 | --rfq-name | string | 入参-RFQ名称 | - | - | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | |
| 25 | --material-num | string | 入参-零件号 | - | - | - | - | 入 | - | - | - | - | 入 | - | - | - | - | - | - | - | - | |
| 26 | --sor-code | string | 入参-SOR编码 | - | - | - | - | - | - | - | - | - | 入 | - | - | 入 | - | 入 | - | 入 | - | |
| 27 | --delay-status | string | 入参-查询范围 | - | - | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | mine=all |
| 28 | --rfq-id | string | 入参-RFQ ID | - | - | - | - | - | - | - | - | - | - | 入 | - | - | - | - | 入 | - | 入 | |
| 29 | --round-no | string | 入参-轮次号 | - | - | - | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | |
| 30 | --rfq-quotes-info-id | string | 入参-报价条目ID | - | - | - | - | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | |
| 31 | id | string | 主键ID | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | - | - | - | - | - | - | - | - | |
| 32 | orgCode | string | 供应商编码 | 出 | 出 | 出 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 33 | orgName | string | 供应商名称 | 出 | 出 | 出 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 34 | orgNameEn | string | 供应商英文名称 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 35 | enterpriseType | string | 公司类型 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | FOREIGN_INVESTED=外资 |
| 36 | certificate | string | 资质认证 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 37 | addressStrng | string | 制造地址 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 38 | buyerName | string | 采购员姓名 | 出 | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 39 | accountingPeriodDay | string | 量产账期天数 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 40 | paymentCashRatio | string | 量产-现金比例(%) | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 41 | paymentChitRatio | string | 量产-承兑比例(%) | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 42 | accountingPeriodDaySample | string | 样件账期天数 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 43 | accountingPeriodDayAfterSales | string | 售后账期天数 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 44 | settlementBank.bankName | string | 电汇银行名称 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 45 | settlementBank.bankAccount | string | 电汇银行账号 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 46 | acceptingBank.bankName | string | 承兑银行名称 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 47 | acceptingBank.bankAccount | string | 承兑银行账号 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 48 | supplierBusinessPremises[].type | string | 商务前提类型 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | MASS=量产,SAMPLE=样件,AFTERSALES=售后 |
| 49 | supplierBusinessPremises[].versionNo | int | 商务前提版本号 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 50 | supplierBusinessPremises[].accountingPeriod | string | 商务前提账期 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | V001~V015 |
| 51 | supplierBusinessPremises[].suplChgKeyAfId | string | 变更申请单ID | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 52 | supplierBusinessPremises[].suplChgKeyAfCode | string | 变更申请单号 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 53 | supplierBusinessPremises[].startDate | string | 生效日期 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 54 | supplierBusinessPremises[].endDate | string | 失效日期 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 55 | supplierType | string | 供应商类型 | - | 出 | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | TEMPORARY=临时,POTENTIAL=预选,OFFICIAL=正式 |
| 56 | appFormId | string | 关联表单ID | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 57 | oldHisId | string | 变更前快照ID | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | 接力→接口4 |
| 58 | newHisId | string | 变更后快照ID | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | 接力→接口4 |
| 59 | supplierId | string | 供应商ID | - | - | 出 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 60 | changeContentTypes | string | 变更要素描述 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 61 | appForm.code | string | 变更申请单号 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 62 | appForm.name | string | 申请单名称 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 63 | appForm.status | string | 审批状态 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | DRAFT=草稿,SUBMIT=审批中,PASS=通过,REJECT=否决,FINISHED=完成,CANCELLED=废弃,WITHDRAW=撤回,PENDING=待审批 |
| 64 | appForm.auditDate | string | 变更生效时间 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 65 | supplier.orgName | string | 供应商名称 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 66 | supplier.orgCode | string | 供应商编码 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 67 | differentSameAddress | boolean | 制造地是否有变 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 68 | differentSameCertification | boolean | 认证体系是否变化 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 69 | differentSameCaps | boolean | 公司股比是否变化 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 70 | differentSameCompostion | boolean | 人员构成是否变化 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 71 | differentRegisterAddress | boolean | 注册地址是否有变 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 72 | orgSimpleName | string | 供应商简称 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 73 | orgSimpleNameEn | string | 供应商简称英文 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 74 | orgSimpleCode | string | 供应商简码 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 75 | orgTempCode | string | 临时编码 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 76 | inDate | date | 生效时间 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 77 | outDate | date | 失效时间 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 78 | address.id | string | 地址ID | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 79 | address.country | string | 国家 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 80 | address.provinces | string | 省份 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 81 | address.city | string | 城市 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 82 | address.county | string | 区县 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 83 | address.address | string | 详细地址 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 84 | address.addressEn | string | 英文地址 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 85 | settlementBank.id | string | 结算银行ID | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 86 | settlementBank.accountName | string | 结算账户名称 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 87 | settlementBank.accountNo | string | 结算账号 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 88 | acceptingBank.id | string | 承兑银行ID | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 89 | acceptingBank.accountName | string | 承兑账户名称 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 90 | acceptingBank.accountNo | string | 承兑账号 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 91 | massBusinessPremise.id | string | 量产商务前提ID | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 92 | massBusinessPremise.type | string | 量产-类型 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | MASS |
| 93 | massBusinessPremise.accountingPeriod | string | 量产-账期 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | V001~V015 |
| 94 | massBusinessPremise.chitAccountingPeriod | string | 量产-承兑汇票账期 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 95 | massBusinessPremise.startDate | date | 量产-生效日期 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 96 | sampleBusinessPremise.id | string | 样件商务前提ID | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 97 | sampleBusinessPremise.type | string | 样件-类型 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | SAMPLE |
| 98 | sampleBusinessPremise.accountingPeriod | string | 样件-账期 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | V001~V015 |
| 99 | sampleBusinessPremise.chitAccountingPeriod | string | 样件-承兑汇票账期 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 100 | sampleBusinessPremise.startDate | date | 样件-生效日期 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 101 | afterSalesBusinessPremise.id | string | 售后商务前提ID | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 102 | afterSalesBusinessPremise.type | string | 售后-类型 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | AFTERSALES |
| 103 | afterSalesBusinessPremise.accountingPeriod | string | 售后-账期 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | X051等 |
| 104 | afterSalesBusinessPremise.startDate | date | 售后-生效日期 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 105 | businessScope | string | 经营范围 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 106 | income | number | 收入 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 107 | numberOfEmployees | int | 员工人数 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 108 | registeredCapital | number | 注册资本 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 109 | legalPerson | string | 法定代表人 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 110 | registeredDate | date | 注册日期 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 111 | duns | string | DUNS编码 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 112 | accountingPeriod | string | 账期代码 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | V001~V015 |
| 113 | chitAccountingPeriod | string | 承兑汇票账期 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 114 | accountingPeriodAfterSales | string | 售后账期 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 115 | officialWebsite | string | 官方网站 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 116 | domesticSupplier | string | 是否国内供应商 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 117 | monetaryUnit | string | 货币单位 | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 118 | code | string | SOR编码 | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 119 | name | string | SOR名称 | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 120 | status | string | SOR状态 | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | DRAFT=草稿,REJECT=驳回,SUBMIT=审批中,PASS=已发布,ABANDON=废弃,WITHDRAW=撤回,DELETE=已取消,RETURN_TO_DEV=退回 |
| 121 | versionNo | string | 版本号 | - | - | - | - | 出 | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 122 | classifyCode | string | 分类编码 | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 123 | taskStatus | string | 任务状态 | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 124 | isLatest | boolean | 是否最新版本 | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 125 | submitBy.userName | string | 研发工程师姓名 | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 126 | productProjects[].id | string | 采购项目主键 | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 127 | productProjects[].code | string | 采购项目编码 | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | |
| 128 | platFormNode.id | string | 平台节点ID | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 129 | platFormNode.nodeCode | string | 平台编码 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 130 | platFormNode.nodeName | string | 平台名称 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 131 | platFormNode.nodeType | string | 平台节点类型 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | PLATFORM |
| 132 | platFormNode.bomLevel | int | 平台BOM层级 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 133 | projectNode.id | string | 项目节点ID | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 134 | projectNode.nodeCode | string | 项目编码 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 135 | projectNode.nodeName | string | 项目名称 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 136 | projectNode.nodeType | string | 项目节点类型 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | PROJECT |
| 137 | projectNode.bomLevel | int | 项目BOM层级 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 138 | baseNodes[].id | string | 基础车型ID | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 139 | baseNodes[].nodeCode | string | 基础车型编码 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 140 | baseNodes[].nodeName | string | 基础车型名称 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 141 | baseNodes[].nodeType | string | 基础车型节点类型 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | BASE_MODEL |
| 142 | baseNodes[].bomLevel | int | 基础车型BOM层级 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 143 | baseNodes[].isBomNode | boolean | 是否BOM节点 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 144 | baseNodes[].isForSale | boolean | 是否可销售 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | |
| 145 | baseNodes[].status | string | 基础车型状态 | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | ACTIVE |
| 146 | pdId | string | 产品经理ID | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | |
| 147 | operationType | string | 操作类型 | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | NEW=新增,UPDATE=更新,DELETE=删除 |
| 148 | devType | string | 开发类型 | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | |
| 149 | partTechDesc | string | 零件技术描述 | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | |
| 150 | isChange | string | 是否变更 | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | |
| 151 | partId | string | 零件ID | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | |
| 152 | materialNum | string | 物料号 | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | |
| 153 | materialName | string | 物料名称 | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | |
| 154 | measurementUnit | string | 计量单位 | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | |
| 155 | subDataType | string | 子数据类型 | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | |
| 156 | qualityId | string | 质量工程师ID | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | |
| 157 | designReqId | string | SOR ID | - | - | - | - | - | - | 出 | - | - | 出 | - | - | - | - | - | - | - | - | |
| 158 | applyTo | string | 适用范围 | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | |
| 159 | node{车型节点ID}.count | BigDecimal | 单车用量 | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | 动态字段 |
| 160 | node{车型节点ID}.percent | BigDecimal | 装配比例 | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | 动态字段 |
| 161 | processId | string | 流程ID | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | |
| 162 | resourceName | string | 资源名称 | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | |
| 163 | processDetail | string | 流程描述 | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | |
| 164 | createBy | string | 创建人ID | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | |
| 165 | createByName | string | 创建人姓名 | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | |
| 166 | taskName | string | 环节名称 | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | |
| 167 | startDate | string | 开始时间 | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | |
| 168 | finishDate | string/null | 完成时间 | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | null=进行中 |
| 169 | actionName | string | 动作/结果 | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | |
| 170 | caller | string | 处理人ID | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | |
| 171 | callerName | string | 处理人姓名 | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | |
| 172 | approveComment | string | 审批意见 | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | |
| 173 | taskType | string | 任务类型 | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | S=开始,H=历史,E=结束 |
| 174 | statusCode | int | 状态码 | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | |
| 175 | statusName | string | 状态名称 | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | - | |
| 176 | userName | string | 用户姓名 | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | |
| 177 | userLoginName | string | 登录账号 | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | |
| 178 | email | string | 电子邮箱 | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | |
| 179 | userType | string | 用户类型 | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | EMPLOYEE=内部员工,非EMPLOYEE=供应商侧 |
| 180 | mobile | string | 联系电话 | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | |
| 181 | organizationName | string | 所属部门 | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | |
| 182 | isActive | boolean | 账号状态 | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | - | true=有效,false=离职/停用 |
| 183 | rfqCode | string | RFQ编码 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 184 | rfqName | string | RFQ名称 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 185 | rfqType | string | RFQ类型 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 186 | rfqStatus | string | RFQ状态 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 187 | rfqDesc | string | RFQ描述 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 188 | rfqCurrency | string | 货币 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 189 | remarks | string | 备注 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 190 | isIssueTargetPrice | boolean | 是否发放目标价 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 191 | isTaskComplete | boolean | 是否任务完成 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 192 | isFree | boolean | 是否允许自由报价 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 193 | needTechnicalReview | boolean | 是否需要技术评审 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 194 | reviewReason | string | 技术评审原因 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 195 | cancelDate | date | 取消时间 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 196 | cancelReason | string | 取消原因 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 197 | endDate | date | 结束时间 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 198 | currentRoundId | string | 当前轮次ID | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 199 | buyerId | string | 采购工程师ID | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 200 | sqeId | string | SQE ID | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 201 | pdId.rfq | string | 研发工程师ID | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 202 | pdName | string | 研发工程师姓名 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 203 | logisticsEngId | string | 物流工程师ID | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 204 | lgName | string | 物流工程师姓名 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 205 | afterSalesEngId | string | 售后工程师ID | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 206 | afterSalesEngName | string | 售后工程师姓名 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 207 | planEngId | string | 体系工程师ID | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 208 | costEngId | string | 成本工程师ID | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 209 | asOrdererId | string | 售后订单员ID | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 210 | sorCode.rfq | string | SOR编码 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 211 | projectCode.rfq | string | 采购项目编码 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | 逗号分隔 |
| 212 | projectName.rfq | string | 采购项目名称 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | 逗号分隔 |
| 213 | plantInfo | string | 工厂信息 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | 逗号分隔 |
| 214 | partCodes | string | RFQ零件编码 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | 逗号分隔 |
| 215 | partNames | string | RFQ零件名称 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | 逗号分隔 |
| 216 | supQuoteStatus | string | 供应商报价状态 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | HTML格式 |
| 217 | nomiStatus | string | 首次定点状态 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | 出 | - | TOCREATE=待创建,PASS=已通过 |
| 218 | currentRound.id | string | 轮次ID | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 219 | currentRound.roundNo | string | 轮次号 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |
| 220 | currentRound.status | string | 轮次状态 | - | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - | |

---

## 全量枚举映射汇总

| 业务域 | 字段 | 枚举值 | 中文含义 |
|--------|------|--------|----------|
| 供应商 | enterpriseType | FOREIGN_INVESTED | 外资 |
| 供应商 | supplierType | TEMPORARY | 临时 |
| 供应商 | supplierType | POTENTIAL | 预选 |
| 供应商 | supplierType | OFFICIAL | 正式 |
| 通用 | userType | EMPLOYEE | 内部员工 |
| 通用 | userType | 非EMPLOYEE | 非员工（供应商侧） |
| 通用 | isActive | true | 有效人员 |
| 通用 | isActive | false | 离职/停用 |
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
| 变更单 | appForm.status | DRAFT | 草稿 |
| 变更单 | appForm.status | SUBMIT | 审批中 |
| 变更单 | appForm.status | PASS | 通过 |
| 变更单 | appForm.status | REJECT | 否决 |
| 变更单 | appForm.status | FINISHED | 完成 |
| 变更单 | appForm.status | CANCELLED | 废弃 |
| 变更单 | appForm.status | WITHDRAW | 撤回 |
| 变更单 | appForm.status | PENDING | 待审批 |
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
| 车型节点 | nodeType | PLATFORM | 平台 |
| 车型节点 | nodeType | PROJECT | 项目 |
| 车型节点 | nodeType | BASE_MODEL | 基础车型 |
| 节点 | status | ACTIVE | 活跃 |

---

## 统计

| 维度 | 数量 |
|------|------|
| 接口总数 | 18 |
| 唯一字段行数 | 220 |
| 入参字段行数 | 22 |
| 出参字段行数 | 198 |
| 跨接口复用字段 | id(7), orgCode(4), orgName(4), sorCode(3), rfqCode(4), rfq-id(3), sOR-id(2), designReqId(2), nomiStatus(2), versionNo(2), paymentCashRatio(2), paymentChitRatio(2) |
| 枚举映射条目 | 48 |
| 待补充出参的接口 | 11~16(6个), 17~18(2个) |
