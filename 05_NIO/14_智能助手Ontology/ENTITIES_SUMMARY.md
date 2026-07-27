---
created: '2026-07-24'
tags: [NIO, AI]
---

---tags: [NIO]
created: 2026-07-08
updated: 2026-07-22
status: draft
---
> [!summary] GPS系统实体概览文档
> - **核心**：1. 本文档提供实体的概览信息，包括实体名称、层级、类别和中文含义 2. 不包含属性的详细信息 3. 不包含关系的详细信息 4. 如需查看完整的属性和关系信息，请参考 `ALL_ENTITIES_AT


# GPS系统实体概览文档

> 本文档包含所有实体的基本信息、层级分类和中文含义推理，不包含属性和关系详细信息。

> 生成时间: 2025-12-05 15:21:24

---

## 使用说明

1. 本文档提供实体的概览信息，包括实体名称、层级、类别和中文含义
2. 不包含属性的详细信息
3. 不包含关系的详细信息
4. 如需查看完整的属性和关系信息，请参考 `ALL_ENTITIES_ATTRIBUTES_CHINESE_INFERENCE.md`

---

## 统计信息

- **实体总数**: 300
- **L1-Core核心实体**: 13
- **L2-Supporting支撑实体**: 287
- **L3-ValueObject值对象**: 0

---

## 核心实体 (L1-Core)

### L1-Core实体列表

| 序号 | 实体名称 | 标准化名称 | 类别 | 推理中文含义 | 描述 |
|------|---------|-----------|------|-------------|------|
| 1 | `BrPurchaseRequestEntity` | `purchaserequest` | 需求相关 | 采购申请 | 融合实体（合并了2个实体: BrPurchaseRequestEntity, PurchaseReq... |
| 2 | `OnlineBiddingEntity` | `reqforquote` | 寻源定点相关 | 询价单 | 融合实体（合并了2个实体: OnlineBiddingEntity, ReqForQuoteEnti... |
| 3 | `QuoteRoundEntity` | `quoteround` | 寻源定点相关 | 报价轮次 | 关联SOR主键 |
| 4 | `QuoteItemEntity` | `quoteitem` | 寻源定点相关 | 报价项 | 融合实体（合并了2个实体: QuoteItemEntity, QuoteEntity） |
| 5 | `NominationEntity` | `nomination` | 寻源定点相关 | 定点 | @Classname NominationEntity |
| 6 | `PriPendingPriceFlowEntity` | `pripriceflow` | 报价和价格相关 | 价格流程 | 融合实体（合并了2个实体: PriPendingPriceFlowEntity, PriPriceF... |
| 7 | `PriPriceApplicationEntity` | `pripriceapplication` | 报价和价格相关 | 价格申请 | 融合实体（合并了2个实体: PriPriceApplicationEntity, IpPriceAp... |
| 8 | `PriceChangeTaskAggregate` | `assemblysummary` | 报价和价格相关 | 价格汇总 | 融合实体（合并了3个实体: PriceChangeTaskAggregate, AssemblyDb... |
| 9 | `ContractAggregate` | `contract` | 合同相关 | 合同 | 合同聚合根（合并了16个Contract相关实体） |
| 10 | `PurchaseOrderEntity` | `purchaseorder` | 订单相关 | 采购订单 | 主键 |
| 11 | `GoodsReceiptEntity` | `goodsreceipt` | 订单相关 | 收货单 | 是否删除 |
| 12 | `WorkflowTaskEntity` | `workflowtask` | 审批流相关 | 工作流任务 | 主键 |
| 13 | `DpMaterialEntity` | `material` | 物料相关 | 物料 | 融合实体（合并了3个实体: DpMaterialEntity, BrMaterialEntity, ... |

### L1-Core实体详情

#### 1. BrPurchaseRequestEntity

**标准化名称**: `purchaserequest`

**层级**: L1-Core

**类别**: 需求相关

**推理中文含义**: 采购申请

**当前描述**: 融合实体（合并了2个实体: BrPurchaseRequestEntity, PurchaseRequestEntity）

**包路径**: `com.nio.srm.gps.pr.br.domain.purchaserequest.entity`

**文件路径**: `com/nio/srm/gps/pr/br/domain/purchaserequest/entity/BrPurchaseRequestEntity.java`

---

#### 2. OnlineBiddingEntity

**标准化名称**: `reqforquote`

**层级**: L1-Core

**类别**: 寻源定点相关

**推理中文含义**: 询价单

**当前描述**: 融合实体（合并了2个实体: OnlineBiddingEntity, ReqForQuoteEntity）

**包路径**: `com.nio.srm.gps.sourcing.domain.onlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/onlinebidding/buyer/OnlineBiddingEntity.java`

---

#### 3. QuoteRoundEntity

**标准化名称**: `quoteround`

**层级**: L1-Core

**类别**: 寻源定点相关

**推理中文含义**: 报价轮次

**当前描述**: 关联SOR主键

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/QuoteRoundEntity.java`

---

#### 4. QuoteItemEntity

**标准化名称**: `quoteitem`

**层级**: L1-Core

**类别**: 寻源定点相关

**推理中文含义**: 报价项

**当前描述**: 融合实体（合并了2个实体: QuoteItemEntity, QuoteEntity）

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/QuoteItemEntity.java`

---

#### 5. NominationEntity

**标准化名称**: `nomination`

**层级**: L1-Core

**类别**: 寻源定点相关

**推理中文含义**: 定点

**当前描述**: @Classname NominationEntity

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationEntity.java`

---

#### 6. PriPendingPriceFlowEntity

**标准化名称**: `pripriceflow`

**层级**: L1-Core

**类别**: 报价和价格相关

**推理中文含义**: 价格流程

**当前描述**: 融合实体（合并了2个实体: PriPendingPriceFlowEntity, PriPriceFlowEntity）

**包路径**: `com.nio.srm.gps.price.domain.price.application`

**文件路径**: `com/nio/srm/gps/price/domain/price/application/PriPendingPriceFlowEntity.java`

---

#### 7. PriPriceApplicationEntity

**标准化名称**: `pripriceapplication`

**层级**: L1-Core

**类别**: 报价和价格相关

**推理中文含义**: 价格申请

**当前描述**: 融合实体（合并了2个实体: PriPriceApplicationEntity, IpPriceApplicationEntity）

**包路径**: `com.nio.srm.gps.price.domain.price.application`

**文件路径**: `com/nio/srm/gps/price/domain/price/application/PriPriceApplicationEntity.java`

---

#### 8. PriceChangeTaskAggregate

**标准化名称**: `assemblysummary`

**层级**: L1-Core

**类别**: 报价和价格相关

**推理中文含义**: 价格汇总

**当前描述**: 融合实体（合并了3个实体: PriceChangeTaskAggregate, AssemblyDbSummaryEntity, AssemblySummaryEntity）

**包路径**: `com.nio.srm.gps.contract.domain.aggregate`

**文件路径**: `com/nio/srm/gps/contract/domain/aggregate/PriceChangeTaskAggregate.java`

---

#### 9. ContractAggregate

**标准化名称**: `contract`

**层级**: L1-Core

**类别**: 合同相关

**推理中文含义**: 合同

**当前描述**: 合同聚合根（合并了16个Contract相关实体）

**包路径**: `com.nio.srm.gps.contract.domain.aggregate`

**文件路径**: `com/nio/srm/gps/contract/domain/aggregate/ContractAggregate.java`

---

#### 10. PurchaseOrderEntity

**标准化名称**: `purchaseorder`

**层级**: L1-Core

**类别**: 订单相关

**推理中文含义**: 采购订单

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.order.domain.purchaseorder`

**文件路径**: `com/nio/srm/gps/order/domain/purchaseorder/PurchaseOrderEntity.java`

---

#### 11. GoodsReceiptEntity

**标准化名称**: `goodsreceipt`

**层级**: L1-Core

**类别**: 订单相关

**推理中文含义**: 收货单

**当前描述**: 是否删除

**包路径**: `com.nio.srm.gps.order.domain.goodsreceipt`

**文件路径**: `com/nio/srm/gps/order/domain/goodsreceipt/GoodsReceiptEntity.java`

---

#### 12. WorkflowTaskEntity

**标准化名称**: `workflowtask`

**层级**: L1-Core

**类别**: 审批流相关

**推理中文含义**: 工作流任务

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.order.domain.workflow`

**文件路径**: `com/nio/srm/gps/order/domain/workflow/WorkflowTaskEntity.java`

---

#### 13. DpMaterialEntity

**标准化名称**: `material`

**层级**: L1-Core

**类别**: 物料相关

**推理中文含义**: 物料

**当前描述**: 融合实体（合并了3个实体: DpMaterialEntity, BrMaterialEntity, MaterialCommonEntity）

**包路径**: `com.nio.srm.gps.material.domain.material.dp`

**文件路径**: `com/nio/srm/gps/material/domain/material/dp/DpMaterialEntity.java`

---

## 支撑实体 (L2-Supporting)

### L2-Supporting实体列表

| 序号 | 实体名称 | 标准化名称 | 推理中文含义 | 描述 |
|------|---------|-----------|-------------|------|
| 1 | `AccessDraftEntity` | `accessdraft` | 访问 | @author kaeya.zhang |
| 2 | `AccessMaterialTemplateEntity` | `accessmaterialtemplate` | 物料 | 准入资料模版 |
| 3 | `AccessTemplateCategoryHistoryVersionDetailEntity` | `accesstemplatecategoryhistoryversiondetail` | 明细 |  |
| 4 | `AccessTemplateHistoryVersionDetailEntity` | `accesstemplatehistoryversiondetail` | 明细 |  |
| 5 | `AccessTemplateItemHistoryVersionDetailEntity` | `accesstemplateitemhistoryversiondetail` | 项 |  |
| 6 | `AccessVendorEntity` | `accessvendor` | 供应商 | @description: 准入的合作伙伴清单 |
| 7 | `AccountingVehicleUpdateEntity` | `accountingvehicleupdate` | 日期 | 业务来源 RFQ/PDATA (定位需更新的单据) |
| 8 | `AdBomConfigEntity` | `adbomconfig` | 配置 |  |
| 9 | `AdBomConfigDetailEntity` | `adbomconfigdetail` | 明细 |  |
| 10 | `AfterSalesVendorWhiteListAggregate` | `aftersalesvendorwhitelist` | 供应商 |  |
| 11 | `AgreementContractPartEntity` | `agreementcontractpart` | 合同 | 协议合同聚合根 |
| 12 | `AiMeetingEntity` | `aimeeting` | 会议 | @Author Muhouer |
| 13 | `AiMeetingConfigEntity` | `aimeetingconfig` | 会议 | <p> |
| 14 | `AlternativePartEntity` | `alternativepart` | 部分 | 替代件是否生效 |
| 15 | `ApvAndNpvEntity` | `apvandnpv` | apv需求npv | 车型列表 |
| 16 | `AssemblyDbItemEntity` | `assemblydbitem` | 项 | @Description 卷积DB明细行 |
| 17 | `AssessManufacturerEntity` | `assessmanufacturer` | assessmanufacturer | @author minghao.bai1 |
| 18 | `AttachmentEntity` | `attachment` | 附件 | 文件所属的业务单号 |
| 19 | `AuditingHistoryEntity` | `auditinghistory` | 审核 | @author d.heng |
| 20 | `AuthAuthorityApiConfigEntity` | `authauthorityapiconfig` | 配置 |  |
| 21 | `AuthAuthorityStrategyEntity` | `authauthoritystrategy` | 比率 |  |
| 22 | `AuthAuthorityStructureEntity` | `authauthoritystructure` | authauthoritystructure |  |
| 23 | `AuthAuthorityTreeEntity` | `authauthoritytree` | authauthoritytree |  |
| 24 | `AuthDbTableEntity` | `authdbtable` | TA |  |
| 25 | `AuthDbTableColumnEntity` | `authdbtablecolumn` | TA |  |
| 26 | `AuthFieldConfigEntity` | `authfieldconfig` | 配置 |  |
| 27 | `AuthFieldConfigValueEntity` | `authfieldconfigvalue` | 配置 | 字段编码 |
| 28 | `AuthFileEntity` | `authfile` | 文件 | 文件存储云服务类型，腾讯云、阿里云 |
| 29 | `AuthProfileEntity` | `authprofile` | 文件 |  |
| 30 | `AuthProfileFieldContentEntity` | `authprofilefieldcontent` | 文件 |  |
| 31 | `AuthRoleEntity` | `authrole` | authrole |  |
| 32 | `AuthRoleAdminInfoEntity` | `authroleadmininfo` | 信息 |  |
| 33 | `AuthUserEntity` | `authuser` | 用户 | 该用户是否生效，同步自laputa。 |
| 34 | `AuthUserDetailEntity` | `authuserdetail` | 明细 | 所有下属员工，包含people + 自定义 |
| 35 | `AuthUserOrganizationEntity` | `authuserorganization` | 用户 |  |
| 36 | `BaseEntity` | `base` | base | 基础领域对象 |
| 37 | `BaseAccountingEntity` | `baseaccounting` | 数量 | 基础核价单聚合根 |
| 38 | `BaseBomEntity` | `basebom` | basebom |  |
| 39 | `BeanComparatorEntity` | `beancomparator` | beancomparator | 前后两个对象作比较 |
| 40 | `BidderListEntity` | `bidderlist` | ID | @author lei.zhang26 |
| 41 | `BidderListItemEntity` | `bidderlistitem` | ID | 关联bidder list的id |
| 42 | `BizSourceWfRelationEntity` | `bizsourcewfrelation` | 来源 | 业务来源 |
| 43 | `BomTrialProjectEntity` | `bomtrialproject` | 项目 | 试制项目号 |
| 44 | `BrandEntity` | `brand` | 品牌 | 品牌 |
| 45 | `BrBaseEntity` | `brbase` | 品牌base |  |
| 46 | `BrCategoryCeStrategyEntity` | `brcategorycestrategy` | 比率 | @author zihao.zhai |
| 47 | `BrPeMaterialEntity` | `brpematerial` | 物料 | SES的物料数据，只需要更新 serviceVenderCode/sesMaterialGroup/... |
| 48 | `BrPurchaseOrderEntity` | `brpurchaseorder` | 订单 | 考虑到未来订单会通过订单行关联多个合同，所以合同信息在行上也冗余一份。 |
| 49 | `BrPurchaseOrderDetailEntity` | `brpurchaseorderdetail` | 订单 | 主键 |
| 50 | `BrPurchaseRequestDetailEntity` | `brpurchaserequestdetail` | 采购 | 主键 |
| 51 | `BrRfqEntity` | `brrfq` | 询价 | 业务分组：SD,BR |
| 52 | `BrSpecialListEntity` | `brspeciallist` | 全部 | RFQ单号 |
| 53 | `BundleEntity` | `bundle` | BU | 项目 |
| 54 | `BundleConfigEntity` | `bundleconfig` | BU |  |
| 55 | `CategoryBuyerEntity` | `categorybuyer` | 采购员 |  |
| 56 | `CategoryBuyerMappingEntity` | `categorybuyermapping` | 采购员 | 创建人 |
| 57 | `CategoryConfigEntity` | `categoryconfig` | 品类 |  |
| 58 | `CategoryNodeEntity` | `categorynode` | 编号 |  |
| 59 | `CategoryNodeLabelEntity` | `categorynodelabel` | 编号 |  |
| 60 | `CategoryTreeEntity` | `categorytree` | 品类 |  |
| 61 | `CBPCategoryEntity` | `cbpcategory` | 品类 | @author xuwen.huang |
| 62 | `ChangeTaskEntity` | `changetask` | 任务 | <p> |
| 63 | `ChangeTaskDetailEntity` | `changetaskdetail` | 明细 | <p> |
| 64 | `ChangeTaskSnapshotEntity` | `changetasksnapshot` | 任务 | <p> |
| 65 | `ClmCategoryEntity` | `clmcategory` | 品类 | 三级销售类目编码 |
| 66 | `ContactPersonInfoEntity` | `contactpersoninfo` | 信息 | @author reno.zeng |
| 67 | `ContractAttachmentEntity` | `contractattachment` | 合同 | 合同附件 |
| 68 | `ContractPartyEntity` | `contractparty` | 合同 | @author d.heng |
| 69 | `CostBomEntity` | `costbom` | 成本 |  |
| 70 | `CostEntityRelEntity` | `costentityrel` | 英文 |  |
| 71 | `CucoEntity` | `cuco` | cuco | @author joe.jiang |
| 72 | `CucoProjectInfoEntity` | `cucoprojectinfo` | 信息 | @author zhongcheng.li |
| 73 | `CurrencyEntity` | `currency` | 货币 |  |
| 74 | `DataDictEntity` | `datadict` | 数据 |  |
| 75 | `DeadLetterRecordAggregate` | `deadletterrecord` | 信函 | 死信消息记录 |
| 76 | `DemandItemEntity` | `demanditem` | 项 | @author quan.liang |
| 77 | `DeviationApprovalEntity` | `deviationapproval` | 偏差 | @Desc |
| 78 | `DocumentTransferEntity` | `documenttransfer` | 英文 | @author danny.shi |
| 79 | `DomainEventEntity` | `domainevent` | 英文 | 领域事件 Entity |
| 80 | `DomainModelDefinitionEntity` | `domainmodeldefinition` | 主 | 模板定义改为叫【领域模型定义】 |
| 81 | `DpBomEntity` | `dpbom` | dpbom | @author zhongcheng.li |
| 82 | `DpCnvlBomEntity` | `dpcnvlbom` | dpcnvlbom | 子bom行 |
| 83 | `DpEIPbomEntity` | `dpeipbom` | IP |  |
| 84 | `DpFullBomEntity` | `dpfullbom` | dpfullbom | 子bom行 |
| 85 | `DpPbomEntity` | `dppbom` | dppbom |  |
| 86 | `DropDemandItemListPriceExecLifecycleEntity` | `dropdemanditemlistpriceexeclifecycle` | 价格 | @author quan.liang |
| 87 | `DropDemandItemPriceTaskLifecycleEntity` | `dropdemanditempricetasklifecycle` | 价格 | @author quan.liang |
| 88 | `EstimationEntity` | `estimation` | 估算 |  |
| 89 | `EstimationCountEntity` | `estimationcount` | 数量 |  |
| 90 | `EstimationItemEntity` | `estimationitem` | 项 | @author joe.jiang |
| 91 | `EstimationMaterialEntity` | `estimationmaterial` | 物料 |  |
| 92 | `EstimationTaskEntity` | `estimationtask` | 任务 | @author joe.jiang |
| 93 | `ExistedPriceEntity` | `existedprice` | 价格 | @author: Tutu.Wang |
| 94 | `ExternalSystemMessageConversionConfigAggregate` | `externalsystemmessageconversionconfig` | 版本 | @author devon.chen |
| 95 | `FactoryStockLocationRelationEntity` | `factorystocklocationrelation` | 工厂 | @author bunny.wang |
| 96 | `FeiShuComponentEntity` | `feishucomponent` | 英文 |  |
| 97 | `FieldRecordEntity` | `fieldrecord` | DRE | 合作伙伴主数据信息变更记录 |
| 98 | `FileEntity` | `file` | 文件 | 是否逻辑删除 |
| 99 | `FileRelationEntity` | `filerelation` | 文件 |  |
| 100 | `FinanceInfoEntity` | `financeinfo` | 信息 | @author reno.zeng |
| 101 | `FinancialTargetEntity` | `financialtarget` | 目标 | 财务目标价任务号; FT  + 生成日期 (yyyyMMdd) + 4 位流水号 |
| 102 | `FinancialTargetMaterialEntity` | `financialtargetmaterial` | 物料 | 财务标价主表任务编号 |
| 103 | `FinancialTargetTotalPriceEntity` | `financialtargettotalprice` | 价格 | A + B 核算合计 |
| 104 | `FinancialUpdateEntity` | `financialupdate` | 日期 | 业务来源 RFQ/PDATA (定位需更新的单据) |
| 105 | `FrameworkContractTextEntity` | `frameworkcontracttext` | 合同 | 框架合同文本 |
| 106 | `FrameworkPurchaseItemEntity` | `frameworkpurchaseitem` | 采购 | 框架合同采购行信息 |
| 107 | `GoodsReceiptDetailEntity` | `goodsreceiptdetail` | 明细 | 是否删除 |
| 108 | `GpsCategoryNodeBizTypeEntity` | `gpscategorynodebiztype` | 编号 |  |
| 109 | `GrEntity` | `gr` | 收货单 | <p> |
| 110 | `GrDetailEntity` | `grdetail` | 明细 | <p> |
| 111 | `IdempotenceEntity` | `idempotence` | ID | @author zhongcheng.li |
| 112 | `IdempotentEntity` | `idempotent` | ID |  |
| 113 | `IndustryEntity` | `industry` | 行业 | 品牌 |
| 114 | `InvitationEntity` | `invitation` | TA | @author reno.zeng |
| 115 | `IpMaterialEntity` | `ipmaterial` | 物料 | 物料号 |
| 116 | `IpPriceFlowEntity` | `ippriceflow` | 价格 | @author: Tutu.Wang |
| 117 | `IpPriceFlowSyncEntity` | `ippriceflowsync` | 价格 | @author: Tutu.Wang |
| 118 | `IpPricePendingFlowEntity` | `ippricependingflow` | 价格 | @author: Tutu.Wang |
| 119 | `KafkaFailMsgEntity` | `kafkafailmsg` | kafkafailmsg | @author zhongcheng.li |
| 120 | `LadderPriceEntity` | `ladderprice` | 价格 | (100, 100) same error |
| 121 | `LadderPriceItemEntity` | `ladderpriceitem` | 价格 | 阶梯起始金额 |
| 122 | `LaputaUserEntity` | `laputauser` | TA |  |
| 123 | `LaputaUserRoleEntity` | `laputauserrole` | TA |  |
| 124 | `LifeAccountingEntity` | `lifeaccounting` | 数量 | Life 核价单聚合根 |
| 125 | `LogisticAccountingEntity` | `logisticaccounting` | 数量 | @version 1.0 |
| 126 | `ManufacturerInfoEntity` | `manufacturerinfo` | 信息 | @author reno.zeng |
| 127 | `MaterialAttributeEntity` | `materialattribute` | 物料 | 主键 |
| 128 | `MaterialExtInfoEntity` | `materialextinfo` | 物料 |  |
| 129 | `MaterialItemLimitPriceEntity` | `materialitemlimitprice` | 价格 | TA评标为限价评标时，针对单个物料设定的限价信息 |
| 130 | `MaterialLadderPriceEntity` | `materialladderprice` | 价格 | 物料名称 |
| 131 | `MaterialLimitPriceEntity` | `materiallimitprice` | 价格 |  |
| 132 | `MeetingEntity` | `meeting` | 会议 | @Classname MeetingEntity |
| 133 | `MeetingDoclinkEntity` | `meetingdoclink` | 会议 | 云文档存储表 |
| 134 | `MeetingFeishuDocEntity` | `meetingfeishudoc` | 会议 | 上会id |
| 135 | `MeetingFeishuTaskEntity` | `meetingfeishutask` | 任务 |  |
| 136 | `MeetingFeishuUserTokenEntity` | `meetingfeishuusertoken` | 英文 | 用户ID（飞书邮箱前缀） |
| 137 | `MeetingRpcEntity` | `meetingrpc` | 会议 | @Classname MeetingEntity |
| 138 | `MeetingWorkflowTaskEntity` | `meetingworkflowtask` | 工作流 | @author tim.ning |
| 139 | `MGroupConfigEntity` | `mgroupconfig` | 分组 | 业务类型 |
| 140 | `MgtBrOrderEntity` | `mgtbrorder` | 订单 | @author zihao.zhai |
| 141 | `MgtFileEntity` | `mgtfile` | 文件 | @author zihao.zhai |
| 142 | `MigrateItemDetailEntity` | `migrateitemdetail` | 比率 | migrate价格迁移详情表; |
| 143 | `MigrateMaterialRouteEntity` | `migratematerialroute` | 比率 | @Description: 迁移的物料清单 |
| 144 | `MigrateMouldRdEntity` | `migratemouldrd` | 比率 | 模具研发价格迁移详情 |
| 145 | `MigratePriceFlowEntity` | `migratepriceflow` | 价格 | 直采价格流水迁移详情 |
| 146 | `MigrateTaskEntity` | `migratetask` | 比率 | 价格中心迁移任务表 |
| 147 | `MqMessageStoreEntity` | `mqmessagestore` | 消息 | MQ 消息存储 |
| 148 | `NewFactoryChangeEntity` | `newfactorychange` | 工厂 |  |
| 149 | `NominationFileEntity` | `nominationfile` | 编号 | @Classname NominationFileEntity |
| 150 | `NominationFileDetailEntity` | `nominationfiledetail` | 编号 | @author by devon.chen |
| 151 | `NominationFileExcelEntity` | `nominationfileexcel` | 编号 | @author by devon.chen |
| 152 | `NominationLetterEntity` | `nominationletter` | 编号 | 定点表单 Id |
| 153 | `NominationMaterialEntity` | `nominationmaterial` | 编号 | 定点申请表id |
| 154 | `NominationRelationEntity` | `nominationrelation` | 编号 | @author zhongcheng.li |
| 155 | `NominationVendorEntity` | `nominationvendor` | 编号 | 定点表单 Id |
| 156 | `NormalPriceComparisonEntity` | `normalpricecomparison` | 编号 | 合作伙伴状态 |
| 157 | `OnlineBiddingAttachmentEntity` | `onlinebiddingattachment` | ID | 所属的竞价单id |
| 158 | `OnlineBiddingItemEntity` | `onlinebiddingitem` | ID | 所属竞价单ID |
| 159 | `OrderDetailEntity` | `orderdetail` | 订单 | @author eason.wang |
| 160 | `PackagePriceComparisonEntity` | `packagepricecomparison` | 价格 | 合作伙伴状态 |
| 161 | `PartnerRelationEntity` | `partnerrelation` | 部分 | 合作伙伴关系实体 |
| 162 | `PdataRelationItemEntity` | `pdatarelationitem` | 项 | rfq id |
| 163 | `PendingVendorQuotaEntity` | `pendingvendorquota` | 供应商 | @author zhongcheng.li |
| 164 | `PriceApplicationEntity` | `priceapplication` | 价格 | 价格申请单 |
| 165 | `PriceApportionMappingEntity` | `priceapportionmapping` | 价格 | <p> |
| 166 | `PriceAssemblyDbConfigEntity` | `priceassemblydbconfig` | 价格 | @Author Muhouer |
| 167 | `PriceAttachmentDetailEntity` | `priceattachmentdetail` | 价格 | @author: Tutu.Wang |
| 168 | `PriceAuditTaskEntity` | `priceaudittask` | 价格 | @author steven.sun |
| 169 | `PriceBizTaskEntity` | `pricebiztask` | 价格 | @author zhongcheng.li |
| 170 | `PriceCenterFrameworkChangeTaskEntity` | `pricecenterframeworkchangetask` | 价格 |  |
| 171 | `PriceCenterFrameworkChangeTaskPackageEntity` | `pricecenterframeworkchangetaskpackage` | 价格 |  |
| 172 | `PriceCenterFrameworkContractSnapshotEntity` | `pricecenterframeworkcontractsnapshot` | 价格 |  |
| 173 | `PriceCenterFrameworkSyncTaskEntity` | `pricecenterframeworksynctask` | 价格 | 价格中心-价格框架同步任务表 |
| 174 | `PriceComparisonEntity` | `pricecomparison` | 价格 | 询价单编号 |
| 175 | `PriceComparisonHistoryEntity` | `pricecomparisonhistory` | 价格 | 合作伙伴状态 |
| 176 | `PriceComparisonReportEntity` | `pricecomparisonreport` | 价格 | 合作伙伴状态 |
| 177 | `PriceDefinitionEntity` | `pricedefinition` | 价格 | 价格的定义 |
| 178 | `PriceExternalApplyEntity` | `priceexternalapply` | 价格 | @Author Muhouer |
| 179 | `PriceFieldConfigEntity` | `pricefieldconfig` | 价格 | @author qichen.shi |
| 180 | `PriceFieldConfigDetailEntity` | `pricefieldconfigdetail` | 价格 | @author qichen.shi |
| 181 | `PriceFlowEntity` | `priceflow` | 价格 | 价格流水Entity，聚合起各类价格。 |
| 182 | `PriceFlowItemEntity` | `priceflowitem` | 价格 | 一个价格项 |
| 183 | `PriceLcrApplyItemEntity` | `pricelcrapplyitem` | 价格 | @Author Muhouer |
| 184 | `PriceMeetingRelEntity` | `pricemeetingrel` | 价格 | File Description: PriceMeetingRelEntity |
| 185 | `PriLogisticsPriceEntity` | `prilogisticsprice` | 价格 | @author zhongcheng.li |
| 186 | `PriMaterialApportionInfoEntity` | `primaterialapportioninfo` | 物料 | @author: Tutu.Wang |
| 187 | `PriMaterialBomInfoEntity` | `primaterialbominfo` | 物料 | @author zhongcheng.li |
| 188 | `PriMaterialPriceEntity` | `primaterialprice` | 价格 | 明细参考: <a href="https://nio.feishu.cn/docs/doccnBsG... |
| 189 | `PriMouldPriceEntity` | `primouldprice` | 价格 | @author zhongcheng.li |
| 190 | `PriPaymentTypeEntity` | `pripaymenttype` | 类型 | @author zhongcheng.li |
| 191 | `PriPriceContractAssociationEntity` | `pripricecontractassociation` | 价格 | @author zhongcheng.li |
| 192 | `PriRdPriceEntity` | `prirdprice` | 价格 | @author zhongcheng.li |
| 193 | `PriSamplePriceEntity` | `prisampleprice` | 价格 | @author zhongcheng.li |
| 194 | `ProjectAttachmentEntity` | `projectattachment` | 附件 | 乐观锁版本号 |
| 195 | `ProjectCrossInfoEntity` | `projectcrossinfo` | 信息 | @author feihuang.huang |
| 196 | `ProjectCrossInfoDetailEntity` | `projectcrossinfodetail` | 明细 | @author feihuang.huang |
| 197 | `ProjectEstimateEntity` | `projectestimate` | 项目 | @author minghao.bai1 |
| 198 | `ProjectEstimateItemEntity` | `projectestimateitem` | 项 | @author minghao.bai1 |
| 199 | `ProjectEstimateTaskEntity` | `projectestimatetask` | 任务 | @author minghao.bai1 |
| 200 | `ProjectEstimateTemplateEntity` | `projectestimatetemplate` | 模板 | @author minghao.bai1 |
| 201 | `PurchaseContractItemEntity` | `purchasecontractitem` | 采购 | @author d.heng |
| 202 | `PurchaseContractItemAmountEntity` | `purchasecontractitemamount` | 金额 | @author danny.shi |
| 203 | `PurchaseContractPartEntity` | `purchasecontractpart` | 采购 | @author d.heng |
| 204 | `PurchaseOrderDetailEntity` | `purchaseorderdetail` | 订单 | 主键 |
| 205 | `PurchaseOrderDetailInfoEntity` | `purchaseorderdetailinfo` | 订单 | <p> |
| 206 | `PurchaseOrderDetailStatusLifecycleEntity` | `purchaseorderdetailstatuslifecycle` | 状态 | <p> |
| 207 | `PurchaseOrderInfoEntity` | `purchaseorderinfo` | 订单 | <p> |
| 208 | `PurchaseOrderSignatureEntity` | `purchaseordersignature` | 订单 | <p> |
| 209 | `PurchaseOrderStatusLifecycleEntity` | `purchaseorderstatuslifecycle` | 状态 | <p> |
| 210 | `PurchaseRequestBuyerEntity` | `purchaserequestbuyer` | 采购 | 申请单id |
| 211 | `PurchaseRequestDetailEntity` | `purchaserequestdetail` | 采购 | 主键 |
| 212 | `PurchaseRequestDetailPriceEntity` | `purchaserequestdetailprice` | 价格 | 主键 |
| 213 | `PurchaseRequestVendorEntity` | `purchaserequestvendor` | 采购 | 主键 |
| 214 | `QualificationFileInfoEntity` | `qualificationfileinfo` | 文件 | @author reno.zeng |
| 215 | `QuoteNodeEntity` | `quotenode` | 编号 | 逻辑删除字段 |
| 216 | `QuotePlanEntity` | `quoteplan` | 报价 | 寻报价单号 |
| 217 | `QuoteTemplateEntity` | `quotetemplate` | 报价 | @Desc |
| 218 | `RawMaterialAdjustEntity` | `rawmaterialadjust` | 物料 | @author joe.jiang |
| 219 | `RelatedMaterialEntity` | `relatedmaterial` | 物料 | 主键 |
| 220 | `RequestLogEntity` | `requestlog` | 申请 | 主键 |
| 221 | `RiskInfoEntity` | `riskinfo` | 信息 | 合作伙伴风控实体; |
| 222 | `RoundApplyEntity` | `roundapply` | 轮次 | @Classname LastCallApplyEntity |
| 223 | `SaveDemandItemChangeEntity` | `savedemanditemchange` | 项 | @author quan.liang |
| 224 | `SdMeetingEntity` | `sdmeeting` | 会议 | 主键id |
| 225 | `SequenceEntity` | `sequence` | 序列 | @author jian.he2 |
| 226 | `SequenceRuleEntity` | `sequencerule` | 英文 | @author jian.he2 |
| 227 | `SequenceSerialEntity` | `sequenceserial` | 英文 | @author jian.he2 |
| 228 | `SerialSequenceEntity` | `serialsequence` | 英文 | @author minghao.bai1 |
| 229 | `SesNominationEntity` | `sesnomination` | 编号 | <p> |
| 230 | `SesNominationRelationEntity` | `sesnominationrelation` | 编号 | <p> |
| 231 | `SesOnlineBiddingEntity` | `sesonlinebidding` | ID | 竞价单号 |
| 232 | `SesOnlineBiddingAttachmentEntity` | `sesonlinebiddingattachment` | ID | 所属的竞价单id |
| 233 | `SesOnlineBiddingItemEntity` | `sesonlinebiddingitem` | ID | 所属竞价单ID |
| 234 | `SesOnlineBiddingQuoteRecordEntity` | `sesonlinebiddingquoterecord` | ID | <p> |
| 235 | `SesQuoteItemEntity` | `sesquoteitem` | 项 | 所属报价单id |
| 236 | `SesQuoteRoundEntity` | `sesquoteround` | 报价 | 是否封标 |
| 237 | `SesRfqEntity` | `sesrfq` | 询价 | 寻报价单号 |
| 238 | `SesRoundApplyEntity` | `sesroundapply` | 轮次 | 间采last call申请单 |
| 239 | `StandardAccountPeriodEntity` | `standardaccountperiod` | 数量 | @author kaeya.zhang |
| 240 | `StatOfReqEntity` | `statofreq` | TA | SOR全局唯一id |
| 241 | `StrategyTemplateEntity` | `strategytemplate` | 比率 | @author tim.ning |
| 242 | `SupplyRelationshipEntity` | `supplyrelationship` | 关系 | 合作伙伴中文名称 |
| 243 | `SupplyRelationshipApplyItemEntity` | `supplyrelationshipapplyitem` | 项 | @project srm-gps-price |
| 244 | `SupplyRelationshipApplyRfqItemEntity` | `supplyrelationshipapplyrfqitem` | 项 | ID |
| 245 | `TaAttachmentEntity` | `taattachment` | 附件 |  |
| 246 | `TaskEntity` | `task` | 任务 |  |
| 247 | `TaskFailMsgEntity` | `taskfailmsg` | 任务 | 业务单号 |
| 248 | `TaTaskEntity` | `tatask` | 任务 | 商务评标 备注 |
| 249 | `TaVendorRecordEntity` | `tavendorrecord` | 供应商 |  |
| 250 | `TaxEntity` | `tax` | 税 |  |
| 251 | `TblActionplanAmortzEntity` | `tblactionplanamortz` | 计划 | @author MybatisPlusGenerator |
| 252 | `TblDBOnlinePriceManangeEntity` | `tbldbonlinepricemanange` | 价格 | @author MybatisPlusGenerator |
| 253 | `TblDBOnlinePriceManangeItemEntity` | `tbldbonlinepricemanangeitem` | 价格 | @author MybatisPlusGenerator |
| 254 | `TradeTypeEntity` | `tradetype` | 类型 |  |
| 255 | `UomEntity` | `uom` | uom | 单位 unitOfMeasure |
| 256 | `VehicleProjectEntity` | `vehicleproject` | 项目 | @author jun.zou2.o |
| 257 | `VendorAccessDraftInfoEntity` | `vendoraccessdraftinfo` | 供应商 | 合作伙伴准入信息草稿表; |
| 258 | `VendorAccessFactoryEntity` | `vendoraccessfactory` | 供应商 | @author minghao.bai1 |
| 259 | `VendorAccessInfoEntity` | `vendoraccessinfo` | 供应商 | 合作伙伴准入信息实体; |
| 260 | `VendorAccessMaterialEntity` | `vendoraccessmaterial` | 供应商 | 合作伙伴上传的准入资料; |
| 261 | `VendorAccessMaterialTemplateEntity` | `vendoraccessmaterialtemplate` | 供应商 | @author minghao.bai1 |
| 262 | `VendorAccessTemplateEntity` | `vendoraccesstemplate` | 供应商 | 合作伙伴准入模版实体实体; |
| 263 | `VendorAccessTemplateApplyRulesEntity` | `vendoraccesstemplateapplyrules` | 供应商 |  |
| 264 | `VendorAccessTemplateCategoryEntity` | `vendoraccesstemplatecategory` | 供应商 | 准入模版关联品类实体; |
| 265 | `VendorAccessTemplateItemEntity` | `vendoraccesstemplateitem` | 供应商 | 准入模版评估项实体; |
| 266 | `VendorAccessTemplateOperationLogEntity` | `vendoraccesstemplateoperationlog` | 供应商 | 初始化文件生成状态 |
| 267 | `VendorAccessTemplateRulesEntity` | `vendoraccesstemplaterules` | 供应商 |  |
| 268 | `VendorAssessDetailEntity` | `vendorassessdetail` | 供应商 | 合作伙伴评估细节实体; |
| 269 | `VendorChangeInfoEntity` | `vendorchangeinfo` | 供应商 | 合作伙伴变更领域对象 完成 application层 委托的功能  (与领域服务不是同一概念) |
| 270 | `VendorChangeInfoReserveEntity` | `vendorchangeinforeserve` | 供应商 | 变更单号 |
| 271 | `VendorContactPersonEntity` | `vendorcontactperson` | 供应商 | 合作伙伴联系人实体; |
| 272 | `VendorExtInfoEntity` | `vendorextinfo` | 供应商 | 合作伙伴关联的基本信息扩展表; |
| 273 | `VendorFactoryEntity` | `vendorfactory` | 供应商 | 合作伙伴关联工厂信息; |
| 274 | `VendorFiledJointAssistEntity` | `vendorfiledjointassist` | 供应商 | 获取合作伙伴信息变化字段拼接辅助类 |
| 275 | `VendorFinanceInfoEntity` | `vendorfinanceinfo` | 供应商 | 合作伙伴财务信息实体; |
| 276 | `VendorInfoEntity` | `vendorinfo` | 供应商 | 合作伙伴领域对象 完成 application层 委托的功能  (与领域服务不是同一概念) |
| 277 | `VendorInternalPartnerEntity` | `vendorinternalpartner` | 供应商 | @author reno.zeng |
| 278 | `VendorInviteEntity` | `vendorinvite` | 供应商 | 合作伙伴邀请链接实体; |
| 279 | `VendorManufacturerEntity` | `vendormanufacturer` | 供应商 | 合作伙伴制造主体实体; |
| 280 | `VendorOnlineBiddingEntity` | `vendoronlinebidding` | ID | 竞价单号 |
| 281 | `VendorOnlineBiddingAttachmentEntity` | `vendoronlinebiddingattachment` | ID | 所属的竞价单id |
| 282 | `VendorOnlineBiddingItemEntity` | `vendoronlinebiddingitem` | ID | 所属竞价单ID |
| 283 | `VendorOtherQualificationEntity` | `vendorotherqualification` | 供应商 | 合作伙伴其他资质实体; |
| 284 | `VendorQualificationFileConfigInfoEntity` | `vendorqualificationfileconfiginfo` | 供应商 | 合作伙伴文件配置; |
| 285 | `VendorQuotaEntity` | `vendorquota` | 供应商 | @author zhongcheng.li |
| 286 | `VendorQuotaApplicationEntity` | `vendorquotaapplication` | 供应商 | @author zhongcheng.li |
| 287 | `WorkflowLogEntity` | `workflowlog` | 工作流 | 是否删除 |

### L2-Supporting实体详情

#### 1. AccessDraftEntity

**标准化名称**: `accessdraft`

**层级**: L2-Supporting

**推理中文含义**: 访问

**当前描述**: @author kaeya.zhang

**包路径**: `com.nio.srm.gps.vendor.domain.access.draft.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/draft/entity/AccessDraftEntity.java`

---

#### 2. AccessMaterialTemplateEntity

**标准化名称**: `accessmaterialtemplate`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 准入资料模版

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/AccessMaterialTemplateEntity.java`

---

#### 3. AccessTemplateCategoryHistoryVersionDetailEntity

**标准化名称**: `accesstemplatecategoryhistoryversiondetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: 

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/AccessTemplateCategoryHistoryVersionDetailEntity.java`

---

#### 4. AccessTemplateHistoryVersionDetailEntity

**标准化名称**: `accesstemplatehistoryversiondetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: 

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/AccessTemplateHistoryVersionDetailEntity.java`

---

#### 5. AccessTemplateItemHistoryVersionDetailEntity

**标准化名称**: `accesstemplateitemhistoryversiondetail`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: 

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/AccessTemplateItemHistoryVersionDetailEntity.java`

---

#### 6. AccessVendorEntity

**标准化名称**: `accessvendor`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @description: 准入的合作伙伴清单

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/AccessVendorEntity.java`

---

#### 7. AccountingVehicleUpdateEntity

**标准化名称**: `accountingvehicleupdate`

**层级**: L2-Supporting

**推理中文含义**: 日期

**当前描述**: 业务来源 RFQ/PDATA (定位需更新的单据)

**包路径**: `com.nio.srm.gps.cost.domain.estimation.dto`

**文件路径**: `com/nio/srm/gps/cost/domain/estimation/dto/AccountingVehicleUpdateEntity.java`

---

#### 8. AdBomConfigEntity

**标准化名称**: `adbomconfig`

**层级**: L2-Supporting

**推理中文含义**: 配置

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.bomconfig`

**文件路径**: `com/nio/srm/gps/material/domain/bomconfig/AdBomConfigEntity.java`

---

#### 9. AdBomConfigDetailEntity

**标准化名称**: `adbomconfigdetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.bomconfig`

**文件路径**: `com/nio/srm/gps/material/domain/bomconfig/AdBomConfigDetailEntity.java`

---

#### 10. AfterSalesVendorWhiteListAggregate

**标准化名称**: `aftersalesvendorwhitelist`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 

**包路径**: `com.nio.srm.gps.contract.domain.aggregate`

**文件路径**: `com/nio/srm/gps/contract/domain/aggregate/AfterSalesVendorWhiteListAggregate.java`

---

#### 11. AgreementContractPartEntity

**标准化名称**: `agreementcontractpart`

**层级**: L2-Supporting

**推理中文含义**: 合同

**当前描述**: 协议合同聚合根

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/AgreementContractPartEntity.java`

---

#### 12. AiMeetingEntity

**标准化名称**: `aimeeting`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: @Author Muhouer

**包路径**: `com.nio.srm.gps.meeting.domain.ai`

**文件路径**: `com/nio/srm/gps/meeting/domain/ai/AiMeetingEntity.java`

---

#### 13. AiMeetingConfigEntity

**标准化名称**: `aimeetingconfig`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.meeting.domain.ai`

**文件路径**: `com/nio/srm/gps/meeting/domain/ai/AiMeetingConfigEntity.java`

---

#### 14. AlternativePartEntity

**标准化名称**: `alternativepart`

**层级**: L2-Supporting

**推理中文含义**: 部分

**当前描述**: 替代件是否生效

**包路径**: `com.nio.srm.gps.material.domain.alternativepart`

**文件路径**: `com/nio/srm/gps/material/domain/alternativepart/AlternativePartEntity.java`

---

#### 15. ApvAndNpvEntity

**标准化名称**: `apvandnpv`

**层级**: L2-Supporting

**推理中文含义**: apv需求npv

**当前描述**: 车型列表

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/ApvAndNpvEntity.java`

---

#### 16. AssemblyDbItemEntity

**标准化名称**: `assemblydbitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: @Description 卷积DB明细行

**包路径**: `com.nio.srm.gps.price.domain.center.assembly`

**文件路径**: `com/nio/srm/gps/price/domain/center/assembly/AssemblyDbItemEntity.java`

---

#### 17. AssessManufacturerEntity

**标准化名称**: `assessmanufacturer`

**层级**: L2-Supporting

**推理中文含义**: assessmanufacturer

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.vendor.domain.assess.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/assess/entity/AssessManufacturerEntity.java`

---

#### 18. AttachmentEntity

**标准化名称**: `attachment`

**层级**: L2-Supporting

**推理中文含义**: 附件

**当前描述**: 文件所属的业务单号

**包路径**: `com.nio.srm.gps.sourcing.domain.file`

**文件路径**: `com/nio/srm/gps/sourcing/domain/file/AttachmentEntity.java`

---

#### 19. AuditingHistoryEntity

**标准化名称**: `auditinghistory`

**层级**: L2-Supporting

**推理中文含义**: 审核

**当前描述**: @author d.heng

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/AuditingHistoryEntity.java`

---

#### 20. AuthAuthorityApiConfigEntity

**标准化名称**: `authauthorityapiconfig`

**层级**: L2-Supporting

**推理中文含义**: 配置

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthAuthorityApiConfigEntity.java`

---

#### 21. AuthAuthorityStrategyEntity

**标准化名称**: `authauthoritystrategy`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthAuthorityStrategyEntity.java`

---

#### 22. AuthAuthorityStructureEntity

**标准化名称**: `authauthoritystructure`

**层级**: L2-Supporting

**推理中文含义**: authauthoritystructure

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthAuthorityStructureEntity.java`

---

#### 23. AuthAuthorityTreeEntity

**标准化名称**: `authauthoritytree`

**层级**: L2-Supporting

**推理中文含义**: authauthoritytree

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthAuthorityTreeEntity.java`

---

#### 24. AuthDbTableEntity

**标准化名称**: `authdbtable`

**层级**: L2-Supporting

**推理中文含义**: TA

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthDbTableEntity.java`

---

#### 25. AuthDbTableColumnEntity

**标准化名称**: `authdbtablecolumn`

**层级**: L2-Supporting

**推理中文含义**: TA

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthDbTableColumnEntity.java`

---

#### 26. AuthFieldConfigEntity

**标准化名称**: `authfieldconfig`

**层级**: L2-Supporting

**推理中文含义**: 配置

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthFieldConfigEntity.java`

---

#### 27. AuthFieldConfigValueEntity

**标准化名称**: `authfieldconfigvalue`

**层级**: L2-Supporting

**推理中文含义**: 配置

**当前描述**: 字段编码

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthFieldConfigValueEntity.java`

---

#### 28. AuthFileEntity

**标准化名称**: `authfile`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: 文件存储云服务类型，腾讯云、阿里云

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthFileEntity.java`

---

#### 29. AuthProfileEntity

**标准化名称**: `authprofile`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthProfileEntity.java`

---

#### 30. AuthProfileFieldContentEntity

**标准化名称**: `authprofilefieldcontent`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthProfileFieldContentEntity.java`

---

#### 31. AuthRoleEntity

**标准化名称**: `authrole`

**层级**: L2-Supporting

**推理中文含义**: authrole

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthRoleEntity.java`

---

#### 32. AuthRoleAdminInfoEntity

**标准化名称**: `authroleadmininfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthRoleAdminInfoEntity.java`

---

#### 33. AuthUserEntity

**标准化名称**: `authuser`

**层级**: L2-Supporting

**推理中文含义**: 用户

**当前描述**: 该用户是否生效，同步自laputa。

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthUserEntity.java`

---

#### 34. AuthUserDetailEntity

**标准化名称**: `authuserdetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: 所有下属员工，包含people + 自定义

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthUserDetailEntity.java`

---

#### 35. AuthUserOrganizationEntity

**标准化名称**: `authuserorganization`

**层级**: L2-Supporting

**推理中文含义**: 用户

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthUserOrganizationEntity.java`

---

#### 36. BaseEntity

**标准化名称**: `base`

**层级**: L2-Supporting

**推理中文含义**: base

**当前描述**: 基础领域对象

**包路径**: `com.nio.srm.gps.order.domain`

**文件路径**: `com/nio/srm/gps/order/domain/BaseEntity.java`

---

#### 37. BaseAccountingEntity

**标准化名称**: `baseaccounting`

**层级**: L2-Supporting

**推理中文含义**: 数量

**当前描述**: 基础核价单聚合根

**包路径**: `com.nio.srm.gps.cost.domain.accounting.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/accounting/entity/BaseAccountingEntity.java`

---

#### 38. BaseBomEntity

**标准化名称**: `basebom`

**层级**: L2-Supporting

**推理中文含义**: basebom

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.base`

**文件路径**: `com/nio/srm/gps/material/domain/base/BaseBomEntity.java`

---

#### 39. BeanComparatorEntity

**标准化名称**: `beancomparator`

**层级**: L2-Supporting

**推理中文含义**: beancomparator

**当前描述**: 前后两个对象作比较

**包路径**: `com.nio.srm.gps.vendor.domain.changeinfo.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/changeinfo/entity/BeanComparatorEntity.java`

---

#### 40. BidderListEntity

**标准化名称**: `bidderlist`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: @author lei.zhang26

**包路径**: `com.nio.srm.gps.sourcing.domain.bidderlist`

**文件路径**: `com/nio/srm/gps/sourcing/domain/bidderlist/BidderListEntity.java`

---

#### 41. BidderListItemEntity

**标准化名称**: `bidderlistitem`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 关联bidder list的id

**包路径**: `com.nio.srm.gps.sourcing.domain.bidderlist`

**文件路径**: `com/nio/srm/gps/sourcing/domain/bidderlist/BidderListItemEntity.java`

---

#### 42. BizSourceWfRelationEntity

**标准化名称**: `bizsourcewfrelation`

**层级**: L2-Supporting

**推理中文含义**: 来源

**当前描述**: 业务来源

**包路径**: `com.nio.srm.gps.meeting.domain.meeting`

**文件路径**: `com/nio/srm/gps/meeting/domain/meeting/BizSourceWfRelationEntity.java`

---

#### 43. BomTrialProjectEntity

**标准化名称**: `bomtrialproject`

**层级**: L2-Supporting

**推理中文含义**: 项目

**当前描述**: 试制项目号

**包路径**: `com.nio.srm.gps.project.domain.vehicle`

**文件路径**: `com/nio/srm/gps/project/domain/vehicle/BomTrialProjectEntity.java`

---

#### 44. BrandEntity

**标准化名称**: `brand`

**层级**: L2-Supporting

**推理中文含义**: 品牌

**当前描述**: 品牌

**包路径**: `com.nio.srm.gps.maindata.domain.brand`

**文件路径**: `com/nio/srm/gps/maindata/domain/brand/BrandEntity.java`

---

#### 45. BrBaseEntity

**标准化名称**: `brbase`

**层级**: L2-Supporting

**推理中文含义**: 品牌base

**当前描述**: 

**包路径**: `com.nio.srm.gps.pr.br.domain`

**文件路径**: `com/nio/srm/gps/pr/br/domain/BrBaseEntity.java`

---

#### 46. BrCategoryCeStrategyEntity

**标准化名称**: `brcategorycestrategy`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: @author zihao.zhai

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/BrCategoryCeStrategyEntity.java`

---

#### 47. BrPeMaterialEntity

**标准化名称**: `brpematerial`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: SES的物料数据，只需要更新 serviceVenderCode/sesMaterialGroup/serviceBuyCode/extInfo

**包路径**: `com.nio.srm.gps.material.domain.material.br`

**文件路径**: `com/nio/srm/gps/material/domain/material/br/BrPeMaterialEntity.java`

---

#### 48. BrPurchaseOrderEntity

**标准化名称**: `brpurchaseorder`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: 考虑到未来订单会通过订单行关联多个合同，所以合同信息在行上也冗余一份。

**包路径**: `com.nio.srm.gps.order.domain.br.purchaseorder`

**文件路径**: `com/nio/srm/gps/order/domain/br/purchaseorder/BrPurchaseOrderEntity.java`

---

#### 49. BrPurchaseOrderDetailEntity

**标准化名称**: `brpurchaseorderdetail`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.order.domain.br.purchaseorder`

**文件路径**: `com/nio/srm/gps/order/domain/br/purchaseorder/BrPurchaseOrderDetailEntity.java`

---

#### 50. BrPurchaseRequestDetailEntity

**标准化名称**: `brpurchaserequestdetail`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.pr.br.domain.purchaserequest.entity`

**文件路径**: `com/nio/srm/gps/pr/br/domain/purchaserequest/entity/BrPurchaseRequestDetailEntity.java`

---

#### 51. BrRfqEntity

**标准化名称**: `brrfq`

**层级**: L2-Supporting

**推理中文含义**: 询价

**当前描述**: 业务分组：SD,BR

**包路径**: `com.nio.srm.gps.sourcing.domain.quote.br`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/br/BrRfqEntity.java`

---

#### 52. BrSpecialListEntity

**标准化名称**: `brspeciallist`

**层级**: L2-Supporting

**推理中文含义**: 全部

**当前描述**: RFQ单号

**包路径**: `com.nio.srm.gps.sourcing.domain.quote.br`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/br/BrSpecialListEntity.java`

---

#### 53. BundleEntity

**标准化名称**: `bundle`

**层级**: L2-Supporting

**推理中文含义**: BU

**当前描述**: 项目

**包路径**: `com.nio.srm.gps.material.domain.bundle`

**文件路径**: `com/nio/srm/gps/material/domain/bundle/BundleEntity.java`

---

#### 54. BundleConfigEntity

**标准化名称**: `bundleconfig`

**层级**: L2-Supporting

**推理中文含义**: BU

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.bundleconfig`

**文件路径**: `com/nio/srm/gps/material/domain/bundleconfig/BundleConfigEntity.java`

---

#### 55. CategoryBuyerEntity

**标准化名称**: `categorybuyer`

**层级**: L2-Supporting

**推理中文含义**: 采购员

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/CategoryBuyerEntity.java`

---

#### 56. CategoryBuyerMappingEntity

**标准化名称**: `categorybuyermapping`

**层级**: L2-Supporting

**推理中文含义**: 采购员

**当前描述**: 创建人

**包路径**: `com.nio.srm.gps.pr.domain.purchaserequest`

**文件路径**: `com/nio/srm/gps/pr/domain/purchaserequest/CategoryBuyerMappingEntity.java`

---

#### 57. CategoryConfigEntity

**标准化名称**: `categoryconfig`

**层级**: L2-Supporting

**推理中文含义**: 品类

**当前描述**: 

**包路径**: `com.nio.srm.gps.pr.domain.categoryconfig`

**文件路径**: `com/nio/srm/gps/pr/domain/categoryconfig/CategoryConfigEntity.java`

---

#### 58. CategoryNodeEntity

**标准化名称**: `categorynode`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/CategoryNodeEntity.java`

---

#### 59. CategoryNodeLabelEntity

**标准化名称**: `categorynodelabel`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/CategoryNodeLabelEntity.java`

---

#### 60. CategoryTreeEntity

**标准化名称**: `categorytree`

**层级**: L2-Supporting

**推理中文含义**: 品类

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/CategoryTreeEntity.java`

---

#### 61. CBPCategoryEntity

**标准化名称**: `cbpcategory`

**层级**: L2-Supporting

**推理中文含义**: 品类

**当前描述**: @author xuwen.huang

**包路径**: `com.nio.srm.gps.sourcing.domain.cbpcategory`

**文件路径**: `com/nio/srm/gps/sourcing/domain/cbpcategory/CBPCategoryEntity.java`

---

#### 62. ChangeTaskEntity

**标准化名称**: `changetask`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/ChangeTaskEntity.java`

---

#### 63. ChangeTaskDetailEntity

**标准化名称**: `changetaskdetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/ChangeTaskDetailEntity.java`

---

#### 64. ChangeTaskSnapshotEntity

**标准化名称**: `changetasksnapshot`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/ChangeTaskSnapshotEntity.java`

---

#### 65. ClmCategoryEntity

**标准化名称**: `clmcategory`

**层级**: L2-Supporting

**推理中文含义**: 品类

**当前描述**: 三级销售类目编码

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/ClmCategoryEntity.java`

---

#### 66. ContactPersonInfoEntity

**标准化名称**: `contactpersoninfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: @author reno.zeng

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/ContactPersonInfoEntity.java`

---

#### 67. ContractAttachmentEntity

**标准化名称**: `contractattachment`

**层级**: L2-Supporting

**推理中文含义**: 合同

**当前描述**: 合同附件

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/ContractAttachmentEntity.java`

---

#### 68. ContractPartyEntity

**标准化名称**: `contractparty`

**层级**: L2-Supporting

**推理中文含义**: 合同

**当前描述**: @author d.heng

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/ContractPartyEntity.java`

---

#### 69. CostBomEntity

**标准化名称**: `costbom`

**层级**: L2-Supporting

**推理中文含义**: 成本

**当前描述**: 

**包路径**: `com.nio.srm.gps.cost.domain.costModel.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/costModel/entity/CostBomEntity.java`

---

#### 70. CostEntityRelEntity

**标准化名称**: `costentityrel`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: 

**包路径**: `com.nio.srm.gps.price.domain.estimation.entity`

**文件路径**: `com/nio/srm/gps/price/domain/estimation/entity/CostEntityRelEntity.java`

---

#### 71. CucoEntity

**标准化名称**: `cuco`

**层级**: L2-Supporting

**推理中文含义**: cuco

**当前描述**: @author joe.jiang

**包路径**: `com.nio.srm.gps.price.domain.cuco`

**文件路径**: `com/nio/srm/gps/price/domain/cuco/CucoEntity.java`

---

#### 72. CucoProjectInfoEntity

**标准化名称**: `cucoprojectinfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.cuco`

**文件路径**: `com/nio/srm/gps/price/domain/cuco/CucoProjectInfoEntity.java`

---

#### 73. CurrencyEntity

**标准化名称**: `currency`

**层级**: L2-Supporting

**推理中文含义**: 货币

**当前描述**: 

**包路径**: `com.nio.srm.gps.maindata.domain.currency`

**文件路径**: `com/nio/srm/gps/maindata/domain/currency/CurrencyEntity.java`

---

#### 74. DataDictEntity

**标准化名称**: `datadict`

**层级**: L2-Supporting

**推理中文含义**: 数据

**当前描述**: 

**包路径**: `com.nio.srm.gps.maindata.domain.dict`

**文件路径**: `com/nio/srm/gps/maindata/domain/dict/DataDictEntity.java`

---

#### 75. DeadLetterRecordAggregate

**标准化名称**: `deadletterrecord`

**层级**: L2-Supporting

**推理中文含义**: 信函

**当前描述**: 死信消息记录

**包路径**: `com.nio.srm.gps.contract.domain.aggregate`

**文件路径**: `com/nio/srm/gps/contract/domain/aggregate/DeadLetterRecordAggregate.java`

---

#### 76. DemandItemEntity

**标准化名称**: `demanditem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: @author quan.liang

**包路径**: `com.nio.srm.gps.demand.domain.demand.entity`

**文件路径**: `com/nio/srm/gps/demand/domain/demand/entity/DemandItemEntity.java`

---

#### 77. DeviationApprovalEntity

**标准化名称**: `deviationapproval`

**层级**: L2-Supporting

**推理中文含义**: 偏差

**当前描述**: @Desc

**包路径**: `com.nio.srm.gps.vendor.domain.deviation.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/deviation/entity/DeviationApprovalEntity.java`

---

#### 78. DocumentTransferEntity

**标准化名称**: `documenttransfer`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: @author danny.shi

**包路径**: `com.nio.srm.gps.auth.domain.entity`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/DocumentTransferEntity.java`

---

#### 79. DomainEventEntity

**标准化名称**: `domainevent`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: 领域事件 Entity

**包路径**: `com.nio.srm.gps.cost.domain.internal.event`

**文件路径**: `com/nio/srm/gps/cost/domain/internal/event/DomainEventEntity.java`

---

#### 80. DomainModelDefinitionEntity

**标准化名称**: `domainmodeldefinition`

**层级**: L2-Supporting

**推理中文含义**: 主

**当前描述**: 模板定义改为叫【领域模型定义】

**包路径**: `com.nio.srm.gps.template.domain.model.template.explore`

**文件路径**: `com/nio/srm/gps/template/domain/model/template/explore/DomainModelDefinitionEntity.java`

---

#### 81. DpBomEntity

**标准化名称**: `dpbom`

**层级**: L2-Supporting

**推理中文含义**: dpbom

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.assembly`

**文件路径**: `com/nio/srm/gps/price/domain/assembly/DpBomEntity.java`

---

#### 82. DpCnvlBomEntity

**标准化名称**: `dpcnvlbom`

**层级**: L2-Supporting

**推理中文含义**: dpcnvlbom

**当前描述**: 子bom行

**包路径**: `com.nio.srm.gps.material.domain.bom`

**文件路径**: `com/nio/srm/gps/material/domain/bom/DpCnvlBomEntity.java`

---

#### 83. DpEIPbomEntity

**标准化名称**: `dpeipbom`

**层级**: L2-Supporting

**推理中文含义**: IP

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.material.dp`

**文件路径**: `com/nio/srm/gps/material/domain/material/dp/DpEIPbomEntity.java`

---

#### 84. DpFullBomEntity

**标准化名称**: `dpfullbom`

**层级**: L2-Supporting

**推理中文含义**: dpfullbom

**当前描述**: 子bom行

**包路径**: `com.nio.srm.gps.material.domain.bom`

**文件路径**: `com/nio/srm/gps/material/domain/bom/DpFullBomEntity.java`

---

#### 85. DpPbomEntity

**标准化名称**: `dppbom`

**层级**: L2-Supporting

**推理中文含义**: dppbom

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.material.dp`

**文件路径**: `com/nio/srm/gps/material/domain/material/dp/DpPbomEntity.java`

---

#### 86. DropDemandItemListPriceExecLifecycleEntity

**标准化名称**: `dropdemanditemlistpriceexeclifecycle`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author quan.liang

**包路径**: `com.nio.srm.gps.demand.domain.demand.component.process`

**文件路径**: `com/nio/srm/gps/demand/domain/demand/component/process/DropDemandItemListPriceExecLifecycleEntity.java`

---

#### 87. DropDemandItemPriceTaskLifecycleEntity

**标准化名称**: `dropdemanditempricetasklifecycle`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author quan.liang

**包路径**: `com.nio.srm.gps.demand.domain.demand.component.process`

**文件路径**: `com/nio/srm/gps/demand/domain/demand/component/process/DropDemandItemPriceTaskLifecycleEntity.java`

---

#### 88. EstimationEntity

**标准化名称**: `estimation`

**层级**: L2-Supporting

**推理中文含义**: 估算

**当前描述**: 

**包路径**: `com.nio.srm.gps.cost.domain.estimation.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/estimation/entity/EstimationEntity.java`

---

#### 89. EstimationCountEntity

**标准化名称**: `estimationcount`

**层级**: L2-Supporting

**推理中文含义**: 数量

**当前描述**: 

**包路径**: `com.nio.srm.gps.cost.domain.estimation.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/estimation/entity/EstimationCountEntity.java`

---

#### 90. EstimationItemEntity

**标准化名称**: `estimationitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: @author joe.jiang

**包路径**: `com.nio.srm.gps.price.domain.estimation.entity`

**文件路径**: `com/nio/srm/gps/price/domain/estimation/entity/EstimationItemEntity.java`

---

#### 91. EstimationMaterialEntity

**标准化名称**: `estimationmaterial`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 

**包路径**: `com.nio.srm.gps.cost.domain.estimation.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/estimation/entity/EstimationMaterialEntity.java`

---

#### 92. EstimationTaskEntity

**标准化名称**: `estimationtask`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: @author joe.jiang

**包路径**: `com.nio.srm.gps.price.domain.estimation.entity`

**文件路径**: `com/nio/srm/gps/price/domain/estimation/entity/EstimationTaskEntity.java`

---

#### 93. ExistedPriceEntity

**标准化名称**: `existedprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author: Tutu.Wang

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/ExistedPriceEntity.java`

---

#### 94. ExternalSystemMessageConversionConfigAggregate

**标准化名称**: `externalsystemmessageconversionconfig`

**层级**: L2-Supporting

**推理中文含义**: 版本

**当前描述**: @author devon.chen

**包路径**: `com.nio.srm.gps.contract.domain.aggregate`

**文件路径**: `com/nio/srm/gps/contract/domain/aggregate/ExternalSystemMessageConversionConfigAggregate.java`

---

#### 95. FactoryStockLocationRelationEntity

**标准化名称**: `factorystocklocationrelation`

**层级**: L2-Supporting

**推理中文含义**: 工厂

**当前描述**: @author bunny.wang

**包路径**: `com.nio.srm.gps.maindata.domain.stocklocation`

**文件路径**: `com/nio/srm/gps/maindata/domain/stocklocation/FactoryStockLocationRelationEntity.java`

---

#### 96. FeiShuComponentEntity

**标准化名称**: `feishucomponent`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: 

**包路径**: `com.nio.srm.gps.sourcing.domain.feishu`

**文件路径**: `com/nio/srm/gps/sourcing/domain/feishu/FeiShuComponentEntity.java`

---

#### 97. FieldRecordEntity

**标准化名称**: `fieldrecord`

**层级**: L2-Supporting

**推理中文含义**: DRE

**当前描述**: 合作伙伴主数据信息变更记录

**包路径**: `com.nio.srm.gps.vendor.domain.changeinfo.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/changeinfo/entity/FieldRecordEntity.java`

---

#### 98. FileEntity

**标准化名称**: `file`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: 是否逻辑删除

**包路径**: `com.nio.srm.gps.order.domain.file`

**文件路径**: `com/nio/srm/gps/order/domain/file/FileEntity.java`

---

#### 99. FileRelationEntity

**标准化名称**: `filerelation`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: 

**包路径**: `com.nio.srm.gps.demand.file`

**文件路径**: `com/nio/srm/gps/demand/file/FileRelationEntity.java`

---

#### 100. FinanceInfoEntity

**标准化名称**: `financeinfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: @author reno.zeng

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/FinanceInfoEntity.java`

---

#### 101. FinancialTargetEntity

**标准化名称**: `financialtarget`

**层级**: L2-Supporting

**推理中文含义**: 目标

**当前描述**: 财务目标价任务号; FT  + 生成日期 (yyyyMMdd) + 4 位流水号

**包路径**: `com.nio.srm.gps.cost.domain.financial.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/financial/entity/FinancialTargetEntity.java`

---

#### 102. FinancialTargetMaterialEntity

**标准化名称**: `financialtargetmaterial`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 财务标价主表任务编号

**包路径**: `com.nio.srm.gps.cost.domain.financial.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/financial/entity/FinancialTargetMaterialEntity.java`

---

#### 103. FinancialTargetTotalPriceEntity

**标准化名称**: `financialtargettotalprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: A + B 核算合计

**包路径**: `com.nio.srm.gps.cost.domain.financial.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/financial/entity/FinancialTargetTotalPriceEntity.java`

---

#### 104. FinancialUpdateEntity

**标准化名称**: `financialupdate`

**层级**: L2-Supporting

**推理中文含义**: 日期

**当前描述**: 业务来源 RFQ/PDATA (定位需更新的单据)

**包路径**: `com.nio.srm.gps.cost.domain.financial.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/financial/entity/FinancialUpdateEntity.java`

---

#### 105. FrameworkContractTextEntity

**标准化名称**: `frameworkcontracttext`

**层级**: L2-Supporting

**推理中文含义**: 合同

**当前描述**: 框架合同文本

**包路径**: `com.nio.srm.gps.contract.framework.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/framework/domain/entity/FrameworkContractTextEntity.java`

---

#### 106. FrameworkPurchaseItemEntity

**标准化名称**: `frameworkpurchaseitem`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: 框架合同采购行信息

**包路径**: `com.nio.srm.gps.contract.framework.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/framework/domain/entity/FrameworkPurchaseItemEntity.java`

---

#### 107. GoodsReceiptDetailEntity

**标准化名称**: `goodsreceiptdetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: 是否删除

**包路径**: `com.nio.srm.gps.order.domain.goodsreceipt`

**文件路径**: `com/nio/srm/gps/order/domain/goodsreceipt/GoodsReceiptDetailEntity.java`

---

#### 108. GpsCategoryNodeBizTypeEntity

**标准化名称**: `gpscategorynodebiztype`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/GpsCategoryNodeBizTypeEntity.java`

---

#### 109. GrEntity

**标准化名称**: `gr`

**层级**: L2-Supporting

**推理中文含义**: 收货单

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/GrEntity.java`

---

#### 110. GrDetailEntity

**标准化名称**: `grdetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/GrDetailEntity.java`

---

#### 111. IdempotenceEntity

**标准化名称**: `idempotence`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.idempotence`

**文件路径**: `com/nio/srm/gps/price/domain/idempotence/IdempotenceEntity.java`

---

#### 112. IdempotentEntity

**标准化名称**: `idempotent`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.idempotent`

**文件路径**: `com/nio/srm/gps/material/domain/idempotent/IdempotentEntity.java`

---

#### 113. IndustryEntity

**标准化名称**: `industry`

**层级**: L2-Supporting

**推理中文含义**: 行业

**当前描述**: 品牌

**包路径**: `com.nio.srm.gps.maindata.domain.industry`

**文件路径**: `com/nio/srm/gps/maindata/domain/industry/IndustryEntity.java`

---

#### 114. InvitationEntity

**标准化名称**: `invitation`

**层级**: L2-Supporting

**推理中文含义**: TA

**当前描述**: @author reno.zeng

**包路径**: `com.nio.srm.gps.vendor.domain.invitation.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/invitation/entity/InvitationEntity.java`

---

#### 115. IpMaterialEntity

**标准化名称**: `ipmaterial`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 物料号

**包路径**: `com.nio.srm.gps.material.domain.material.ip`

**文件路径**: `com/nio/srm/gps/material/domain/material/ip/IpMaterialEntity.java`

---

#### 116. IpPriceFlowEntity

**标准化名称**: `ippriceflow`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author: Tutu.Wang

**包路径**: `com.nio.srm.gps.price.domain.ip`

**文件路径**: `com/nio/srm/gps/price/domain/ip/IpPriceFlowEntity.java`

---

#### 117. IpPriceFlowSyncEntity

**标准化名称**: `ippriceflowsync`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author: Tutu.Wang

**包路径**: `com.nio.srm.gps.price.domain.ip`

**文件路径**: `com/nio/srm/gps/price/domain/ip/IpPriceFlowSyncEntity.java`

---

#### 118. IpPricePendingFlowEntity

**标准化名称**: `ippricependingflow`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author: Tutu.Wang

**包路径**: `com.nio.srm.gps.price.domain.ip`

**文件路径**: `com/nio/srm/gps/price/domain/ip/IpPricePendingFlowEntity.java`

---

#### 119. KafkaFailMsgEntity

**标准化名称**: `kafkafailmsg`

**层级**: L2-Supporting

**推理中文含义**: kafkafailmsg

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.failmsg`

**文件路径**: `com/nio/srm/gps/price/domain/failmsg/KafkaFailMsgEntity.java`

---

#### 120. LadderPriceEntity

**标准化名称**: `ladderprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: (100, 100) same error

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/LadderPriceEntity.java`

---

#### 121. LadderPriceItemEntity

**标准化名称**: `ladderpriceitem`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 阶梯起始金额

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/LadderPriceItemEntity.java`

---

#### 122. LaputaUserEntity

**标准化名称**: `laputauser`

**层级**: L2-Supporting

**推理中文含义**: TA

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/LaputaUserEntity.java`

---

#### 123. LaputaUserRoleEntity

**标准化名称**: `laputauserrole`

**层级**: L2-Supporting

**推理中文含义**: TA

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/LaputaUserRoleEntity.java`

---

#### 124. LifeAccountingEntity

**标准化名称**: `lifeaccounting`

**层级**: L2-Supporting

**推理中文含义**: 数量

**当前描述**: Life 核价单聚合根

**包路径**: `com.nio.srm.gps.cost.domain.accounting.entity.life`

**文件路径**: `com/nio/srm/gps/cost/domain/accounting/entity/life/LifeAccountingEntity.java`

---

#### 125. LogisticAccountingEntity

**标准化名称**: `logisticaccounting`

**层级**: L2-Supporting

**推理中文含义**: 数量

**当前描述**: @version 1.0

**包路径**: `com.nio.srm.gps.cost.domain.accounting.entity.logistic`

**文件路径**: `com/nio/srm/gps/cost/domain/accounting/entity/logistic/LogisticAccountingEntity.java`

---

#### 126. ManufacturerInfoEntity

**标准化名称**: `manufacturerinfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: @author reno.zeng

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/ManufacturerInfoEntity.java`

---

#### 127. MaterialAttributeEntity

**标准化名称**: `materialattribute`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.material.domain.material.rebuild`

**文件路径**: `com/nio/srm/gps/material/domain/material/rebuild/MaterialAttributeEntity.java`

---

#### 128. MaterialExtInfoEntity

**标准化名称**: `materialextinfo`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.material.tag`

**文件路径**: `com/nio/srm/gps/material/domain/material/tag/MaterialExtInfoEntity.java`

---

#### 129. MaterialItemLimitPriceEntity

**标准化名称**: `materialitemlimitprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: TA评标为限价评标时，针对单个物料设定的限价信息

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/MaterialItemLimitPriceEntity.java`

---

#### 130. MaterialLadderPriceEntity

**标准化名称**: `materialladderprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 物料名称

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/MaterialLadderPriceEntity.java`

---

#### 131. MaterialLimitPriceEntity

**标准化名称**: `materiallimitprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/MaterialLimitPriceEntity.java`

---

#### 132. MeetingEntity

**标准化名称**: `meeting`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: @Classname MeetingEntity

**包路径**: `com.nio.srm.gps.sourcing.domain.meeting`

**文件路径**: `com/nio/srm/gps/sourcing/domain/meeting/MeetingEntity.java`

---

#### 133. MeetingDoclinkEntity

**标准化名称**: `meetingdoclink`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: 云文档存储表

**包路径**: `com.nio.srm.gps.sourcing.domain.meeting`

**文件路径**: `com/nio/srm/gps/sourcing/domain/meeting/MeetingDoclinkEntity.java`

---

#### 134. MeetingFeishuDocEntity

**标准化名称**: `meetingfeishudoc`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: 上会id

**包路径**: `com.nio.srm.gps.meeting.domain.meeting`

**文件路径**: `com/nio/srm/gps/meeting/domain/meeting/MeetingFeishuDocEntity.java`

---

#### 135. MeetingFeishuTaskEntity

**标准化名称**: `meetingfeishutask`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: 

**包路径**: `com.nio.srm.gps.meeting.domain.meeting`

**文件路径**: `com/nio/srm/gps/meeting/domain/meeting/MeetingFeishuTaskEntity.java`

---

#### 136. MeetingFeishuUserTokenEntity

**标准化名称**: `meetingfeishuusertoken`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: 用户ID（飞书邮箱前缀）

**包路径**: `com.nio.srm.gps.meeting.domain.meeting`

**文件路径**: `com/nio/srm/gps/meeting/domain/meeting/MeetingFeishuUserTokenEntity.java`

---

#### 137. MeetingRpcEntity

**标准化名称**: `meetingrpc`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: @Classname MeetingEntity

**包路径**: `com.nio.srm.gps.sourcing.domain.meeting`

**文件路径**: `com/nio/srm/gps/sourcing/domain/meeting/MeetingRpcEntity.java`

---

#### 138. MeetingWorkflowTaskEntity

**标准化名称**: `meetingworkflowtask`

**层级**: L2-Supporting

**推理中文含义**: 工作流

**当前描述**: @author tim.ning

**包路径**: `com.nio.srm.gps.meeting.domain.meeting`

**文件路径**: `com/nio/srm/gps/meeting/domain/meeting/MeetingWorkflowTaskEntity.java`

---

#### 139. MGroupConfigEntity

**标准化名称**: `mgroupconfig`

**层级**: L2-Supporting

**推理中文含义**: 分组

**当前描述**: 业务类型

**包路径**: `com.nio.srm.gps.material.domain.mgroup.config`

**文件路径**: `com/nio/srm/gps/material/domain/mgroup/config/MGroupConfigEntity.java`

---

#### 140. MgtBrOrderEntity

**标准化名称**: `mgtbrorder`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: @author zihao.zhai

**包路径**: `com.nio.srm.gps.order.domain.br.purchaseorder.mgt`

**文件路径**: `com/nio/srm/gps/order/domain/br/purchaseorder/mgt/MgtBrOrderEntity.java`

---

#### 141. MgtFileEntity

**标准化名称**: `mgtfile`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: @author zihao.zhai

**包路径**: `com.nio.srm.gps.order.domain.br.purchaseorder.valueobject`

**文件路径**: `com/nio/srm/gps/order/domain/br/purchaseorder/valueobject/MgtFileEntity.java`

---

#### 142. MigrateItemDetailEntity

**标准化名称**: `migrateitemdetail`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: migrate价格迁移详情表;

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/MigrateItemDetailEntity.java`

---

#### 143. MigrateMaterialRouteEntity

**标准化名称**: `migratematerialroute`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: @Description: 迁移的物料清单

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/MigrateMaterialRouteEntity.java`

---

#### 144. MigrateMouldRdEntity

**标准化名称**: `migratemouldrd`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: 模具研发价格迁移详情

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/MigrateMouldRdEntity.java`

---

#### 145. MigratePriceFlowEntity

**标准化名称**: `migratepriceflow`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 直采价格流水迁移详情

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/MigratePriceFlowEntity.java`

---

#### 146. MigrateTaskEntity

**标准化名称**: `migratetask`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: 价格中心迁移任务表

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/MigrateTaskEntity.java`

---

#### 147. MqMessageStoreEntity

**标准化名称**: `mqmessagestore`

**层级**: L2-Supporting

**推理中文含义**: 消息

**当前描述**: MQ 消息存储

**包路径**: `com.nio.srm.gps.cost.domain.internal.mq`

**文件路径**: `com/nio/srm/gps/cost/domain/internal/mq/MqMessageStoreEntity.java`

---

#### 148. NewFactoryChangeEntity

**标准化名称**: `newfactorychange`

**层级**: L2-Supporting

**推理中文含义**: 工厂

**当前描述**: 

**包路径**: `com.nio.srm.gps.pr.domain.purchaserequest`

**文件路径**: `com/nio/srm/gps/pr/domain/purchaserequest/NewFactoryChangeEntity.java`

---

#### 149. NominationFileEntity

**标准化名称**: `nominationfile`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: @Classname NominationFileEntity

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationFileEntity.java`

---

#### 150. NominationFileDetailEntity

**标准化名称**: `nominationfiledetail`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: @author by devon.chen

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationFileDetailEntity.java`

---

#### 151. NominationFileExcelEntity

**标准化名称**: `nominationfileexcel`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: @author by devon.chen

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationFileExcelEntity.java`

---

#### 152. NominationLetterEntity

**标准化名称**: `nominationletter`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 定点表单 Id

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationLetterEntity.java`

---

#### 153. NominationMaterialEntity

**标准化名称**: `nominationmaterial`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 定点申请表id

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationMaterialEntity.java`

---

#### 154. NominationRelationEntity

**标准化名称**: `nominationrelation`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.nomination`

**文件路径**: `com/nio/srm/gps/price/domain/nomination/NominationRelationEntity.java`

---

#### 155. NominationVendorEntity

**标准化名称**: `nominationvendor`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 定点表单 Id

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationVendorEntity.java`

---

#### 156. NormalPriceComparisonEntity

**标准化名称**: `normalpricecomparison`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 合作伙伴状态

**包路径**: `com.nio.srm.gps.sourcing.domain.pricecomparison`

**文件路径**: `com/nio/srm/gps/sourcing/domain/pricecomparison/NormalPriceComparisonEntity.java`

---

#### 157. OnlineBiddingAttachmentEntity

**标准化名称**: `onlinebiddingattachment`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 所属的竞价单id

**包路径**: `com.nio.srm.gps.sourcing.domain.onlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/onlinebidding/buyer/OnlineBiddingAttachmentEntity.java`

---

#### 158. OnlineBiddingItemEntity

**标准化名称**: `onlinebiddingitem`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 所属竞价单ID

**包路径**: `com.nio.srm.gps.sourcing.domain.onlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/onlinebidding/buyer/OnlineBiddingItemEntity.java`

---

#### 159. OrderDetailEntity

**标准化名称**: `orderdetail`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: @author eason.wang

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/OrderDetailEntity.java`

---

#### 160. PackagePriceComparisonEntity

**标准化名称**: `packagepricecomparison`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 合作伙伴状态

**包路径**: `com.nio.srm.gps.sourcing.domain.pricecomparison`

**文件路径**: `com/nio/srm/gps/sourcing/domain/pricecomparison/PackagePriceComparisonEntity.java`

---

#### 161. PartnerRelationEntity

**标准化名称**: `partnerrelation`

**层级**: L2-Supporting

**推理中文含义**: 部分

**当前描述**: 合作伙伴关系实体

**包路径**: `com.nio.srm.gps.price.domain.partner.relation`

**文件路径**: `com/nio/srm/gps/price/domain/partner/relation/PartnerRelationEntity.java`

---

#### 162. PdataRelationItemEntity

**标准化名称**: `pdatarelationitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: rfq id

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/PdataRelationItemEntity.java`

---

#### 163. PendingVendorQuotaEntity

**标准化名称**: `pendingvendorquota`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.quota`

**文件路径**: `com/nio/srm/gps/price/domain/quota/PendingVendorQuotaEntity.java`

---

#### 164. PriceApplicationEntity

**标准化名称**: `priceapplication`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 价格申请单

**包路径**: `com.nio.srm.gps.template.domain.model.price.app`

**文件路径**: `com/nio/srm/gps/template/domain/model/price/app/PriceApplicationEntity.java`

---

#### 165. PriceApportionMappingEntity

**标准化名称**: `priceapportionmapping`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriceApportionMappingEntity.java`

---

#### 166. PriceAssemblyDbConfigEntity

**标准化名称**: `priceassemblydbconfig`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @Author Muhouer

**包路径**: `com.nio.srm.gps.price.domain.assembly`

**文件路径**: `com/nio/srm/gps/price/domain/assembly/PriceAssemblyDbConfigEntity.java`

---

#### 167. PriceAttachmentDetailEntity

**标准化名称**: `priceattachmentdetail`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author: Tutu.Wang

**包路径**: `com.nio.srm.gps.price.domain.attachment`

**文件路径**: `com/nio/srm/gps/price/domain/attachment/PriceAttachmentDetailEntity.java`

---

#### 168. PriceAuditTaskEntity

**标准化名称**: `priceaudittask`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author steven.sun

**包路径**: `com.nio.srm.gps.price.domain.audit`

**文件路径**: `com/nio/srm/gps/price/domain/audit/PriceAuditTaskEntity.java`

---

#### 169. PriceBizTaskEntity

**标准化名称**: `pricebiztask`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.biz.task`

**文件路径**: `com/nio/srm/gps/price/domain/biz/task/PriceBizTaskEntity.java`

---

#### 170. PriceCenterFrameworkChangeTaskEntity

**标准化名称**: `pricecenterframeworkchangetask`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 

**包路径**: `com.nio.srm.gps.price.domain.center.framework.entity`

**文件路径**: `com/nio/srm/gps/price/domain/center/framework/entity/PriceCenterFrameworkChangeTaskEntity.java`

---

#### 171. PriceCenterFrameworkChangeTaskPackageEntity

**标准化名称**: `pricecenterframeworkchangetaskpackage`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 

**包路径**: `com.nio.srm.gps.price.domain.center.framework.entity`

**文件路径**: `com/nio/srm/gps/price/domain/center/framework/entity/PriceCenterFrameworkChangeTaskPackageEntity.java`

---

#### 172. PriceCenterFrameworkContractSnapshotEntity

**标准化名称**: `pricecenterframeworkcontractsnapshot`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 

**包路径**: `com.nio.srm.gps.price.domain.center.framework.entity`

**文件路径**: `com/nio/srm/gps/price/domain/center/framework/entity/PriceCenterFrameworkContractSnapshotEntity.java`

---

#### 173. PriceCenterFrameworkSyncTaskEntity

**标准化名称**: `pricecenterframeworksynctask`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 价格中心-价格框架同步任务表

**包路径**: `com.nio.srm.gps.price.domain.center.framework.entity`

**文件路径**: `com/nio/srm/gps/price/domain/center/framework/entity/PriceCenterFrameworkSyncTaskEntity.java`

---

#### 174. PriceComparisonEntity

**标准化名称**: `pricecomparison`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 询价单编号

**包路径**: `com.nio.srm.gps.sourcing.domain.pricecomparison`

**文件路径**: `com/nio/srm/gps/sourcing/domain/pricecomparison/PriceComparisonEntity.java`

---

#### 175. PriceComparisonHistoryEntity

**标准化名称**: `pricecomparisonhistory`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 合作伙伴状态

**包路径**: `com.nio.srm.gps.sourcing.domain.pricecomparison`

**文件路径**: `com/nio/srm/gps/sourcing/domain/pricecomparison/PriceComparisonHistoryEntity.java`

---

#### 176. PriceComparisonReportEntity

**标准化名称**: `pricecomparisonreport`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 合作伙伴状态

**包路径**: `com.nio.srm.gps.sourcing.domain.pricecomparison`

**文件路径**: `com/nio/srm/gps/sourcing/domain/pricecomparison/PriceComparisonReportEntity.java`

---

#### 177. PriceDefinitionEntity

**标准化名称**: `pricedefinition`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 价格的定义

**包路径**: `com.nio.srm.gps.template.domain.model.price.definition`

**文件路径**: `com/nio/srm/gps/template/domain/model/price/definition/PriceDefinitionEntity.java`

---

#### 178. PriceExternalApplyEntity

**标准化名称**: `priceexternalapply`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @Author Muhouer

**包路径**: `com.nio.srm.gps.price.domain.external.common`

**文件路径**: `com/nio/srm/gps/price/domain/external/common/PriceExternalApplyEntity.java`

---

#### 179. PriceFieldConfigEntity

**标准化名称**: `pricefieldconfig`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author qichen.shi

**包路径**: `com.nio.srm.gps.price.domain.price.config`

**文件路径**: `com/nio/srm/gps/price/domain/price/config/PriceFieldConfigEntity.java`

---

#### 180. PriceFieldConfigDetailEntity

**标准化名称**: `pricefieldconfigdetail`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author qichen.shi

**包路径**: `com.nio.srm.gps.price.domain.price.config`

**文件路径**: `com/nio/srm/gps/price/domain/price/config/PriceFieldConfigDetailEntity.java`

---

#### 181. PriceFlowEntity

**标准化名称**: `priceflow`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 价格流水Entity，聚合起各类价格。

**包路径**: `com.nio.srm.gps.template.domain.model.price.flow`

**文件路径**: `com/nio/srm/gps/template/domain/model/price/flow/PriceFlowEntity.java`

---

#### 182. PriceFlowItemEntity

**标准化名称**: `priceflowitem`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 一个价格项

**包路径**: `com.nio.srm.gps.template.domain.model.price.flow`

**文件路径**: `com/nio/srm/gps/template/domain/model/price/flow/PriceFlowItemEntity.java`

---

#### 183. PriceLcrApplyItemEntity

**标准化名称**: `pricelcrapplyitem`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @Author Muhouer

**包路径**: `com.nio.srm.gps.price.domain.external.lcr`

**文件路径**: `com/nio/srm/gps/price/domain/external/lcr/PriceLcrApplyItemEntity.java`

---

#### 184. PriceMeetingRelEntity

**标准化名称**: `pricemeetingrel`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: File Description: PriceMeetingRelEntity

**包路径**: `com.nio.srm.gps.price.domain.meeting`

**文件路径**: `com/nio/srm/gps/price/domain/meeting/PriceMeetingRelEntity.java`

---

#### 185. PriLogisticsPriceEntity

**标准化名称**: `prilogisticsprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriLogisticsPriceEntity.java`

---

#### 186. PriMaterialApportionInfoEntity

**标准化名称**: `primaterialapportioninfo`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: @author: Tutu.Wang

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriMaterialApportionInfoEntity.java`

---

#### 187. PriMaterialBomInfoEntity

**标准化名称**: `primaterialbominfo`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.assembly`

**文件路径**: `com/nio/srm/gps/price/domain/assembly/PriMaterialBomInfoEntity.java`

---

#### 188. PriMaterialPriceEntity

**标准化名称**: `primaterialprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 明细参考: <a href="https://nio.feishu.cn/docs/doccnBsGmcqg8qGx4lThrfNsQUf#">DP07009_寻源定点_询报价PRD_产品采购_V0.1_罗聪</a>

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriMaterialPriceEntity.java`

---

#### 189. PriMouldPriceEntity

**标准化名称**: `primouldprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriMouldPriceEntity.java`

---

#### 190. PriPaymentTypeEntity

**标准化名称**: `pripaymenttype`

**层级**: L2-Supporting

**推理中文含义**: 类型

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriPaymentTypeEntity.java`

---

#### 191. PriPriceContractAssociationEntity

**标准化名称**: `pripricecontractassociation`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriPriceContractAssociationEntity.java`

---

#### 192. PriRdPriceEntity

**标准化名称**: `prirdprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriRdPriceEntity.java`

---

#### 193. PriSamplePriceEntity

**标准化名称**: `prisampleprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriSamplePriceEntity.java`

---

#### 194. ProjectAttachmentEntity

**标准化名称**: `projectattachment`

**层级**: L2-Supporting

**推理中文含义**: 附件

**当前描述**: 乐观锁版本号

**包路径**: `com.nio.srm.gps.project.domain.vehicle`

**文件路径**: `com/nio/srm/gps/project/domain/vehicle/ProjectAttachmentEntity.java`

---

#### 195. ProjectCrossInfoEntity

**标准化名称**: `projectcrossinfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: @author feihuang.huang

**包路径**: `com.nio.srm.gps.project.domain.vehicle`

**文件路径**: `com/nio/srm/gps/project/domain/vehicle/ProjectCrossInfoEntity.java`

---

#### 196. ProjectCrossInfoDetailEntity

**标准化名称**: `projectcrossinfodetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: @author feihuang.huang

**包路径**: `com.nio.srm.gps.project.domain.vehicle`

**文件路径**: `com/nio/srm/gps/project/domain/vehicle/ProjectCrossInfoDetailEntity.java`

---

#### 197. ProjectEstimateEntity

**标准化名称**: `projectestimate`

**层级**: L2-Supporting

**推理中文含义**: 项目

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.project.domain.estimate`

**文件路径**: `com/nio/srm/gps/project/domain/estimate/ProjectEstimateEntity.java`

---

#### 198. ProjectEstimateItemEntity

**标准化名称**: `projectestimateitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.project.domain.estimate`

**文件路径**: `com/nio/srm/gps/project/domain/estimate/ProjectEstimateItemEntity.java`

---

#### 199. ProjectEstimateTaskEntity

**标准化名称**: `projectestimatetask`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.project.domain.estimate`

**文件路径**: `com/nio/srm/gps/project/domain/estimate/ProjectEstimateTaskEntity.java`

---

#### 200. ProjectEstimateTemplateEntity

**标准化名称**: `projectestimatetemplate`

**层级**: L2-Supporting

**推理中文含义**: 模板

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.project.domain.estimate`

**文件路径**: `com/nio/srm/gps/project/domain/estimate/ProjectEstimateTemplateEntity.java`

---

#### 201. PurchaseContractItemEntity

**标准化名称**: `purchasecontractitem`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: @author d.heng

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/PurchaseContractItemEntity.java`

---

#### 202. PurchaseContractItemAmountEntity

**标准化名称**: `purchasecontractitemamount`

**层级**: L2-Supporting

**推理中文含义**: 金额

**当前描述**: @author danny.shi

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/PurchaseContractItemAmountEntity.java`

---

#### 203. PurchaseContractPartEntity

**标准化名称**: `purchasecontractpart`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: @author d.heng

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/PurchaseContractPartEntity.java`

---

#### 204. PurchaseOrderDetailEntity

**标准化名称**: `purchaseorderdetail`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.order.domain.purchaseorder`

**文件路径**: `com/nio/srm/gps/order/domain/purchaseorder/PurchaseOrderDetailEntity.java`

---

#### 205. PurchaseOrderDetailInfoEntity

**标准化名称**: `purchaseorderdetailinfo`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/PurchaseOrderDetailInfoEntity.java`

---

#### 206. PurchaseOrderDetailStatusLifecycleEntity

**标准化名称**: `purchaseorderdetailstatuslifecycle`

**层级**: L2-Supporting

**推理中文含义**: 状态

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/PurchaseOrderDetailStatusLifecycleEntity.java`

---

#### 207. PurchaseOrderInfoEntity

**标准化名称**: `purchaseorderinfo`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/PurchaseOrderInfoEntity.java`

---

#### 208. PurchaseOrderSignatureEntity

**标准化名称**: `purchaseordersignature`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/PurchaseOrderSignatureEntity.java`

---

#### 209. PurchaseOrderStatusLifecycleEntity

**标准化名称**: `purchaseorderstatuslifecycle`

**层级**: L2-Supporting

**推理中文含义**: 状态

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/PurchaseOrderStatusLifecycleEntity.java`

---

#### 210. PurchaseRequestBuyerEntity

**标准化名称**: `purchaserequestbuyer`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: 申请单id

**包路径**: `com.nio.srm.gps.pr.domain.purchaserequest.entity`

**文件路径**: `com/nio/srm/gps/pr/domain/purchaserequest/entity/PurchaseRequestBuyerEntity.java`

---

#### 211. PurchaseRequestDetailEntity

**标准化名称**: `purchaserequestdetail`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.pr.domain.purchaserequest.entity`

**文件路径**: `com/nio/srm/gps/pr/domain/purchaserequest/entity/PurchaseRequestDetailEntity.java`

---

#### 212. PurchaseRequestDetailPriceEntity

**标准化名称**: `purchaserequestdetailprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.pr.domain.purchaserequest.entity`

**文件路径**: `com/nio/srm/gps/pr/domain/purchaserequest/entity/PurchaseRequestDetailPriceEntity.java`

---

#### 213. PurchaseRequestVendorEntity

**标准化名称**: `purchaserequestvendor`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.pr.domain.purchaserequest.entity`

**文件路径**: `com/nio/srm/gps/pr/domain/purchaserequest/entity/PurchaseRequestVendorEntity.java`

---

#### 214. QualificationFileInfoEntity

**标准化名称**: `qualificationfileinfo`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: @author reno.zeng

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/QualificationFileInfoEntity.java`

---

#### 215. QuoteNodeEntity

**标准化名称**: `quotenode`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 逻辑删除字段

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/QuoteNodeEntity.java`

---

#### 216. QuotePlanEntity

**标准化名称**: `quoteplan`

**层级**: L2-Supporting

**推理中文含义**: 报价

**当前描述**: 寻报价单号

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/QuotePlanEntity.java`

---

#### 217. QuoteTemplateEntity

**标准化名称**: `quotetemplate`

**层级**: L2-Supporting

**推理中文含义**: 报价

**当前描述**: @Desc

**包路径**: `com.nio.srm.gps.sourcing.domain.quotetemplate`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quotetemplate/QuoteTemplateEntity.java`

---

#### 218. RawMaterialAdjustEntity

**标准化名称**: `rawmaterialadjust`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: @author joe.jiang

**包路径**: `com.nio.srm.gps.price.domain.rawmaterial`

**文件路径**: `com/nio/srm/gps/price/domain/rawmaterial/RawMaterialAdjustEntity.java`

---

#### 219. RelatedMaterialEntity

**标准化名称**: `relatedmaterial`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.material.domain.material.rebuild`

**文件路径**: `com/nio/srm/gps/material/domain/material/rebuild/RelatedMaterialEntity.java`

---

#### 220. RequestLogEntity

**标准化名称**: `requestlog`

**层级**: L2-Supporting

**推理中文含义**: 申请

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.order.domain.goodsreceipt`

**文件路径**: `com/nio/srm/gps/order/domain/goodsreceipt/RequestLogEntity.java`

---

#### 221. RiskInfoEntity

**标准化名称**: `riskinfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: 合作伙伴风控实体;

**包路径**: `com.nio.srm.gps.vendor.domain.remote.risk`

**文件路径**: `com/nio/srm/gps/vendor/domain/remote/risk/RiskInfoEntity.java`

---

#### 222. RoundApplyEntity

**标准化名称**: `roundapply`

**层级**: L2-Supporting

**推理中文含义**: 轮次

**当前描述**: @Classname LastCallApplyEntity

**包路径**: `com.nio.srm.gps.sourcing.domain.roundapply`

**文件路径**: `com/nio/srm/gps/sourcing/domain/roundapply/RoundApplyEntity.java`

---

#### 223. SaveDemandItemChangeEntity

**标准化名称**: `savedemanditemchange`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: @author quan.liang

**包路径**: `com.nio.srm.gps.demand.domain.demand.component.process`

**文件路径**: `com/nio/srm/gps/demand/domain/demand/component/process/SaveDemandItemChangeEntity.java`

---

#### 224. SdMeetingEntity

**标准化名称**: `sdmeeting`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: 主键id

**包路径**: `com.nio.srm.gps.meeting.domain.meeting.sd`

**文件路径**: `com/nio/srm/gps/meeting/domain/meeting/sd/SdMeetingEntity.java`

---

#### 225. SequenceEntity

**标准化名称**: `sequence`

**层级**: L2-Supporting

**推理中文含义**: 序列

**当前描述**: @author jian.he2

**包路径**: `com.nio.srm.gps.maindata.domain.sequence`

**文件路径**: `com/nio/srm/gps/maindata/domain/sequence/SequenceEntity.java`

---

#### 226. SequenceRuleEntity

**标准化名称**: `sequencerule`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: @author jian.he2

**包路径**: `com.nio.srm.gps.maindata.domain.sequence`

**文件路径**: `com/nio/srm/gps/maindata/domain/sequence/SequenceRuleEntity.java`

---

#### 227. SequenceSerialEntity

**标准化名称**: `sequenceserial`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: @author jian.he2

**包路径**: `com.nio.srm.gps.maindata.domain.sequence`

**文件路径**: `com/nio/srm/gps/maindata/domain/sequence/SequenceSerialEntity.java`

---

#### 228. SerialSequenceEntity

**标准化名称**: `serialsequence`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.vendor.base.domain.vendorinfo.entity`

**文件路径**: `com/nio/srm/gps/vendor/base/domain/vendorinfo/entity/SerialSequenceEntity.java`

---

#### 229. SesNominationEntity

**标准化名称**: `sesnomination`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.sourcing.domain.sesnomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesnomination/SesNominationEntity.java`

---

#### 230. SesNominationRelationEntity

**标准化名称**: `sesnominationrelation`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.sourcing.domain.sesnomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesnomination/SesNominationRelationEntity.java`

---

#### 231. SesOnlineBiddingEntity

**标准化名称**: `sesonlinebidding`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 竞价单号

**包路径**: `com.nio.srm.gps.sourcing.domain.sesonlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesonlinebidding/buyer/SesOnlineBiddingEntity.java`

---

#### 232. SesOnlineBiddingAttachmentEntity

**标准化名称**: `sesonlinebiddingattachment`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 所属的竞价单id

**包路径**: `com.nio.srm.gps.sourcing.domain.sesonlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesonlinebidding/buyer/SesOnlineBiddingAttachmentEntity.java`

---

#### 233. SesOnlineBiddingItemEntity

**标准化名称**: `sesonlinebiddingitem`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 所属竞价单ID

**包路径**: `com.nio.srm.gps.sourcing.domain.sesonlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesonlinebidding/buyer/SesOnlineBiddingItemEntity.java`

---

#### 234. SesOnlineBiddingQuoteRecordEntity

**标准化名称**: `sesonlinebiddingquoterecord`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.sourcing.domain.sesonlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesonlinebidding/buyer/SesOnlineBiddingQuoteRecordEntity.java`

---

#### 235. SesQuoteItemEntity

**标准化名称**: `sesquoteitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: 所属报价单id

**包路径**: `com.nio.srm.gps.sourcing.domain.sesquote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesquote/SesQuoteItemEntity.java`

---

#### 236. SesQuoteRoundEntity

**标准化名称**: `sesquoteround`

**层级**: L2-Supporting

**推理中文含义**: 报价

**当前描述**: 是否封标

**包路径**: `com.nio.srm.gps.sourcing.domain.sesquote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesquote/SesQuoteRoundEntity.java`

---

#### 237. SesRfqEntity

**标准化名称**: `sesrfq`

**层级**: L2-Supporting

**推理中文含义**: 询价

**当前描述**: 寻报价单号

**包路径**: `com.nio.srm.gps.sourcing.domain.sesquote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesquote/SesRfqEntity.java`

---

#### 238. SesRoundApplyEntity

**标准化名称**: `sesroundapply`

**层级**: L2-Supporting

**推理中文含义**: 轮次

**当前描述**: 间采last call申请单

**包路径**: `com.nio.srm.gps.sourcing.domain.sesroundapply`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesroundapply/SesRoundApplyEntity.java`

---

#### 239. StandardAccountPeriodEntity

**标准化名称**: `standardaccountperiod`

**层级**: L2-Supporting

**推理中文含义**: 数量

**当前描述**: @author kaeya.zhang

**包路径**: `com.nio.srm.gps.vendor.domain.account.period.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/account/period/entity/StandardAccountPeriodEntity.java`

---

#### 240. StatOfReqEntity

**标准化名称**: `statofreq`

**层级**: L2-Supporting

**推理中文含义**: TA

**当前描述**: SOR全局唯一id

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/StatOfReqEntity.java`

---

#### 241. StrategyTemplateEntity

**标准化名称**: `strategytemplate`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: @author tim.ning

**包路径**: `com.nio.srm.gps.sourcing.domain.strategy.template.valueobject`

**文件路径**: `com/nio/srm/gps/sourcing/domain/strategy/template/valueobject/StrategyTemplateEntity.java`

---

#### 242. SupplyRelationshipEntity

**标准化名称**: `supplyrelationship`

**层级**: L2-Supporting

**推理中文含义**: 关系

**当前描述**: 合作伙伴中文名称

**包路径**: `com.nio.srm.gps.price.domain.supply.relationship`

**文件路径**: `com/nio/srm/gps/price/domain/supply/relationship/SupplyRelationshipEntity.java`

---

#### 243. SupplyRelationshipApplyItemEntity

**标准化名称**: `supplyrelationshipapplyitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: @project srm-gps-price

**包路径**: `com.nio.srm.gps.price.domain.supply.relationship.apply`

**文件路径**: `com/nio/srm/gps/price/domain/supply/relationship/apply/SupplyRelationshipApplyItemEntity.java`

---

#### 244. SupplyRelationshipApplyRfqItemEntity

**标准化名称**: `supplyrelationshipapplyrfqitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: ID

**包路径**: `com.nio.srm.gps.price.domain.supply.relationship.apply`

**文件路径**: `com/nio/srm/gps/price/domain/supply/relationship/apply/SupplyRelationshipApplyRfqItemEntity.java`

---

#### 245. TaAttachmentEntity

**标准化名称**: `taattachment`

**层级**: L2-Supporting

**推理中文含义**: 附件

**当前描述**: 

**包路径**: `com.nio.srm.gps.meeting.domain.ta`

**文件路径**: `com/nio/srm/gps/meeting/domain/ta/TaAttachmentEntity.java`

---

#### 246. TaskEntity

**标准化名称**: `task`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.task`

**文件路径**: `com/nio/srm/gps/material/domain/task/TaskEntity.java`

---

#### 247. TaskFailMsgEntity

**标准化名称**: `taskfailmsg`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: 业务单号

**包路径**: `com.nio.srm.gps.sourcing.domain.task`

**文件路径**: `com/nio/srm/gps/sourcing/domain/task/TaskFailMsgEntity.java`

---

#### 248. TaTaskEntity

**标准化名称**: `tatask`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: 商务评标 备注

**包路径**: `com.nio.srm.gps.meeting.domain.ta`

**文件路径**: `com/nio/srm/gps/meeting/domain/ta/TaTaskEntity.java`

---

#### 249. TaVendorRecordEntity

**标准化名称**: `tavendorrecord`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 

**包路径**: `com.nio.srm.gps.meeting.domain.ta`

**文件路径**: `com/nio/srm/gps/meeting/domain/ta/TaVendorRecordEntity.java`

---

#### 250. TaxEntity

**标准化名称**: `tax`

**层级**: L2-Supporting

**推理中文含义**: 税

**当前描述**: 

**包路径**: `com.nio.srm.gps.maindata.domain.tax`

**文件路径**: `com/nio/srm/gps/maindata/domain/tax/TaxEntity.java`

---

#### 251. TblActionplanAmortzEntity

**标准化名称**: `tblactionplanamortz`

**层级**: L2-Supporting

**推理中文含义**: 计划

**当前描述**: @author MybatisPlusGenerator

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/TblActionplanAmortzEntity.java`

---

#### 252. TblDBOnlinePriceManangeEntity

**标准化名称**: `tbldbonlinepricemanange`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author MybatisPlusGenerator

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/TblDBOnlinePriceManangeEntity.java`

---

#### 253. TblDBOnlinePriceManangeItemEntity

**标准化名称**: `tbldbonlinepricemanangeitem`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author MybatisPlusGenerator

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/TblDBOnlinePriceManangeItemEntity.java`

---

#### 254. TradeTypeEntity

**标准化名称**: `tradetype`

**层级**: L2-Supporting

**推理中文含义**: 类型

**当前描述**: 

**包路径**: `com.nio.srm.gps.maindata.domain.trade`

**文件路径**: `com/nio/srm/gps/maindata/domain/trade/TradeTypeEntity.java`

---

#### 255. UomEntity

**标准化名称**: `uom`

**层级**: L2-Supporting

**推理中文含义**: uom

**当前描述**: 单位 unitOfMeasure

**包路径**: `com.nio.srm.gps.maindata.domain.uom`

**文件路径**: `com/nio/srm/gps/maindata/domain/uom/UomEntity.java`

---

#### 256. VehicleProjectEntity

**标准化名称**: `vehicleproject`

**层级**: L2-Supporting

**推理中文含义**: 项目

**当前描述**: @author jun.zou2.o

**包路径**: `com.nio.srm.gps.project.domain.vehicle`

**文件路径**: `com/nio/srm/gps/project/domain/vehicle/VehicleProjectEntity.java`

---

#### 257. VendorAccessDraftInfoEntity

**标准化名称**: `vendoraccessdraftinfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴准入信息草稿表;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessDraftInfoEntity.java`

---

#### 258. VendorAccessFactoryEntity

**标准化名称**: `vendoraccessfactory`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessFactoryEntity.java`

---

#### 259. VendorAccessInfoEntity

**标准化名称**: `vendoraccessinfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴准入信息实体;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessInfoEntity.java`

---

#### 260. VendorAccessMaterialEntity

**标准化名称**: `vendoraccessmaterial`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴上传的准入资料;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessMaterialEntity.java`

---

#### 261. VendorAccessMaterialTemplateEntity

**标准化名称**: `vendoraccessmaterialtemplate`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessMaterialTemplateEntity.java`

---

#### 262. VendorAccessTemplateEntity

**标准化名称**: `vendoraccesstemplate`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴准入模版实体实体;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessTemplateEntity.java`

---

#### 263. VendorAccessTemplateApplyRulesEntity

**标准化名称**: `vendoraccesstemplateapplyrules`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessTemplateApplyRulesEntity.java`

---

#### 264. VendorAccessTemplateCategoryEntity

**标准化名称**: `vendoraccesstemplatecategory`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 准入模版关联品类实体;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessTemplateCategoryEntity.java`

---

#### 265. VendorAccessTemplateItemEntity

**标准化名称**: `vendoraccesstemplateitem`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 准入模版评估项实体;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessTemplateItemEntity.java`

---

#### 266. VendorAccessTemplateOperationLogEntity

**标准化名称**: `vendoraccesstemplateoperationlog`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 初始化文件生成状态

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessTemplateOperationLogEntity.java`

---

#### 267. VendorAccessTemplateRulesEntity

**标准化名称**: `vendoraccesstemplaterules`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessTemplateRulesEntity.java`

---

#### 268. VendorAssessDetailEntity

**标准化名称**: `vendorassessdetail`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴评估细节实体;

**包路径**: `com.nio.srm.gps.vendor.domain.assess.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/assess/entity/VendorAssessDetailEntity.java`

---

#### 269. VendorChangeInfoEntity

**标准化名称**: `vendorchangeinfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴变更领域对象 完成 application层 委托的功能  (与领域服务不是同一概念)

**包路径**: `com.nio.srm.gps.vendor.domain.changeinfo.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/changeinfo/entity/VendorChangeInfoEntity.java`

---

#### 270. VendorChangeInfoReserveEntity

**标准化名称**: `vendorchangeinforeserve`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 变更单号

**包路径**: `com.nio.srm.gps.vendor.domain.changeinfo.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/changeinfo/entity/VendorChangeInfoReserveEntity.java`

---

#### 271. VendorContactPersonEntity

**标准化名称**: `vendorcontactperson`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴联系人实体;

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorContactPersonEntity.java`

---

#### 272. VendorExtInfoEntity

**标准化名称**: `vendorextinfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴关联的基本信息扩展表;

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorExtInfoEntity.java`

---

#### 273. VendorFactoryEntity

**标准化名称**: `vendorfactory`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴关联工厂信息;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorFactoryEntity.java`

---

#### 274. VendorFiledJointAssistEntity

**标准化名称**: `vendorfiledjointassist`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 获取合作伙伴信息变化字段拼接辅助类

**包路径**: `com.nio.srm.gps.vendor.domain.changeinfo.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/changeinfo/entity/VendorFiledJointAssistEntity.java`

---

#### 275. VendorFinanceInfoEntity

**标准化名称**: `vendorfinanceinfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴财务信息实体;

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorFinanceInfoEntity.java`

---

#### 276. VendorInfoEntity

**标准化名称**: `vendorinfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴领域对象 完成 application层 委托的功能  (与领域服务不是同一概念)

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorInfoEntity.java`

---

#### 277. VendorInternalPartnerEntity

**标准化名称**: `vendorinternalpartner`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @author reno.zeng

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorInternalPartnerEntity.java`

---

#### 278. VendorInviteEntity

**标准化名称**: `vendorinvite`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴邀请链接实体;

**包路径**: `com.nio.srm.gps.vendor.domain.invitation.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/invitation/entity/VendorInviteEntity.java`

---

#### 279. VendorManufacturerEntity

**标准化名称**: `vendormanufacturer`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴制造主体实体;

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorManufacturerEntity.java`

---

#### 280. VendorOnlineBiddingEntity

**标准化名称**: `vendoronlinebidding`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 竞价单号

**包路径**: `com.nio.srm.gps.sourcing.domain.onlinebidding.vendor`

**文件路径**: `com/nio/srm/gps/sourcing/domain/onlinebidding/vendor/VendorOnlineBiddingEntity.java`

---

#### 281. VendorOnlineBiddingAttachmentEntity

**标准化名称**: `vendoronlinebiddingattachment`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 所属的竞价单id

**包路径**: `com.nio.srm.gps.sourcing.domain.onlinebidding.vendor`

**文件路径**: `com/nio/srm/gps/sourcing/domain/onlinebidding/vendor/VendorOnlineBiddingAttachmentEntity.java`

---

#### 282. VendorOnlineBiddingItemEntity

**标准化名称**: `vendoronlinebiddingitem`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 所属竞价单ID

**包路径**: `com.nio.srm.gps.sourcing.domain.onlinebidding.vendor`

**文件路径**: `com/nio/srm/gps/sourcing/domain/onlinebidding/vendor/VendorOnlineBiddingItemEntity.java`

---

#### 283. VendorOtherQualificationEntity

**标准化名称**: `vendorotherqualification`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴其他资质实体;

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorOtherQualificationEntity.java`

---

#### 284. VendorQualificationFileConfigInfoEntity

**标准化名称**: `vendorqualificationfileconfiginfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴文件配置;

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorQualificationFileConfigInfoEntity.java`

---

#### 285. VendorQuotaEntity

**标准化名称**: `vendorquota`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.quota`

**文件路径**: `com/nio/srm/gps/price/domain/quota/VendorQuotaEntity.java`

---

#### 286. VendorQuotaApplicationEntity

**标准化名称**: `vendorquotaapplication`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.quota.application`

**文件路径**: `com/nio/srm/gps/price/domain/quota/application/VendorQuotaApplicationEntity.java`

---

#### 287. WorkflowLogEntity

**标准化名称**: `workflowlog`

**层级**: L2-Supporting

**推理中文含义**: 工作流

**当前描述**: 是否删除

**包路径**: `com.nio.srm.gps.sourcing.domain.workflow`

**文件路径**: `com/nio/srm/gps/sourcing/domain/workflow/WorkflowLogEntity.java`

---

---

> 回到 → [[NIO|🚗 蔚来]]
