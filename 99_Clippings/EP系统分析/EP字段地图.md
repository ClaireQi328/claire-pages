---
created: 2026-07-16
updated: 2026-05-28
tags:
  - Clippings
  - 采购
source: "https://mi.feishu.cn/wiki/Ww5fdX89SoFaYrxfT0Ic4ZpYnMc"
status: draft
---

> [!summary] EP 系统字段枚举值与 API 接口字段映射参考手册
> - **核心**：整理 EP 系统各业务域（供应商、商务前提、账期、变更单、SOR、RFQ 等）的字段枚举值及 API 接口出入参映射
> - **要点**：供应商类型枚举（临时/预选/正式）；商务前提类型（量产/样件/售后）；账期编码 V001-V015 对应不同天数和支付方式；变更单/SOR/RFQ 各状态枚举；API 接口共 18 个，字段路径 55+ 个，含入参/出参方向标记

# EP字段地图

| 业务域 | 字段 | 枚举值 | 中文含义 |
|-|-|-|-|
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

| # | 字段路径 | 类型 | 说明 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 枚举/映射 |
|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
| 1 | state | string | 响应状态 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | success/fail |
| 2 | message | string | 提示信息 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 |  |
| 3 | data | object/array | 业务数据 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 |  |
| 4 | content | array | 分页-数据列表 | - | 出 | 出 | - | 出 | - | - | - | - | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | - |  |
| 5 | currentPage | int | 分页-当前页码 | - | 出 | 出 | - | 出 | - | - | - | - | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | - |  |
| 6 | pageSize | int | 分页-每页条数 | - | 出 | 出 | - | 出 | - | - | - | - | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | - |  |
| 7 | totalCount | int | 分页-总记录数 | - | 出 | 出 | - | 出 | - | - | - | - | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | - |  |
| 8 | totalPage | int | 分页-总页数 | - | 出 | 出 | - | 出 | - | - | - | - | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | - |  |
| 9 | --id | string | 入参-主键ID | 入 | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - |  |
| 10 | --name | string | 入参-名称(模糊) | - | 入 | 入 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 11 | --code | string | 入参-编码 | - | 入 | 入 | - | 入 | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 12 | --page | int | 入参-页码 | - | 入 | 入 | - | 入 | - | 入 | - | - | 入 | - | - | - | - | - | - | - | - |  |
| 13 | --page-size | int | 入参-每页条数 | - | 入 | 入 | - | 入 | - | 入 | - | - | 入 | - | - | - | - | - | - | - | - |  |
| 14 | --old-his-id | string | 入参-变更前记录ID | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | 来源:接口3 |
| 15 | --new-his-id | string | 入参-变更后记录ID | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | 来源:接口3 |
| 16 | --latest | boolean | 入参-仅最新版本 | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 17 | --sor-id | string | 入参-SOR主键ID | - | - | - | - | - | 入 | 入 | - | - | - | - | - | - | - | - | - | - | - |  |
| 18 | --projectId | string | 入参-采购项目ID | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | - | - | 逗号分隔 |
| 19 | --rec-id | string | 入参-业务记录ID | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - |  |
| 20 | --rec-type-id | long | 入参-记录类型ID | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | 固定值995001 |
| 21 | --controller-name | string | 入参-控制名 | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | 固定值 |
| 22 | --view-name | string | 入参-视图名 | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | - | - | 固定值 |
| 23 | --rfq-code | string | 入参-RFQ编号 | - | - | - | - | - | - | - | - | - | 入 | - | - | 入 | 入 | 入 | - | 入 | - |  |
| 24 | --rfq-name | string | 入参-RFQ名称 | - | - | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - |  |
| 25 | --material-num | string | 入参-零件号 | - | - | - | - | 入 | - | - | - | - | 入 | - | - | - | - | - | - | - | - |  |
| 26 | --sor-code | string | 入参-SOR编码 | - | - | - | - | - | - | - | - | - | 入 | - | - | 入 | - | 入 | - | 入 | - |  |
| 27 | --delay-status | string | 入参-查询范围 | - | - | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - | - | mine=all |
| 28 | --rfq-id | string | 入参-RFQ ID | - | - | - | - | - | - | - | - | - | - | 入 | - | - | - | - | 入 | - | 入 |  |
| 29 | --round-no | string | 入参-轮次号 | - | - | - | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - | - |  |
| 30 | --rfq-quotes-info-id | string | 入参-报价条目ID | - | - | - | - | - | - | - | - | - | - | - | 入 | - | - | - | - | - | - |  |
| 31 | id | string | 主键ID | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | 出 | - | - | - | - | - | - | - | - |  |
| 32 | orgCode | string | 供应商编码 | 出 | 出 | 出 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 33 | orgName | string | 供应商名称 | 出 | 出 | 出 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 34 | orgNameEn | string | 供应商英文名称 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 35 | enterpriseType | string | 公司类型 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | FOREIGN_INVESTED=外资 |
| 36 | certificate | string | 资质认证 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 37 | addressStrng | string | 制造地址 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 38 | buyerName | string | 采购员姓名 | 出 | - | - | - | - | - | - | - | - | 出 | - | - | - | - | - | - | - | - |  |
| 39 | accountingPeriodDay | string | 量产账期天数 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 40 | paymentCashRatio | string | 量产-现金比例(%) | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 41 | paymentChitRatio | string | 量产-承兑比例(%) | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 42 | accountingPeriodDaySample | string | 样件账期天数 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 43 | accountingPeriodDayAfterSales | string | 售后账期天数 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 44 | settlementBank.bankName | string | 电汇银行名称 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 45 | settlementBank.bankAccount | string | 电汇银行账号 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 46 | acceptingBank.bankName | string | 承兑银行名称 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 47 | acceptingBank.bankAccount | string | 承兑银行账号 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 48 | supplierBusinessPremises[].type | string | 商务前提类型 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | MASS=量产,SAMPLE=样件,AFTERSALES=售后 |
| 49 | supplierBusinessPremises[].versionNo | int | 商务前提版本号 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 50 | supplierBusinessPremises[].accountingPeriod | string | 商务前提账期 | 出 | - | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | V001\~V015 |
| 51 | supplierBusinessPremises[].suplChgKeyAfId | string | 变更申请单ID | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 52 | supplierBusinessPremises[].suplChgKeyAfCode | string | 变更申请单号 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 53 | supplierBusinessPremises[].startDate | string | 生效日期 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 54 | supplierBusinessPremises[].endDate | string | 失效日期 | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |  |
| 55 | supplierType | string | 供应商类型 | - | 出 | - | 出 | - | - | - | - | - | - | - | - | - | - | - | - | - | - | TEMPORARY=临时,POTENTIAL=预选,OFFICIAL=正式 |