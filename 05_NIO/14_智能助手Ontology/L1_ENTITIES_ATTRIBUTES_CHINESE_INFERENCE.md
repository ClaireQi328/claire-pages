---
created: '2026-07-24'
tags: [NIO, AI]
---

---tags: [NIO]
created: 2026-07-08
updated: 2026-07-22
status: draft
---
> [!summary] GPS系统L1-Core核心实体和属性中文含义推理文档
> - **核心**：1. 本文档包含实体的中文含义推理结果 2. 每个实体包含其所有属性的中文含义推理 3. 推理结果可能存在不准确之处，需要人工校验和修正 4. 修正后的结果可以用于更新实体描述和属性注释 5. 本文档


# GPS系统L1-Core核心实体和属性中文含义推理文档

> 本文档包含L1-Core核心实体和属性的中文含义推理结果，供人工校验和修正使用。

> 生成时间: 2025-12-05 15:16:44

---

## 使用说明

1. 本文档包含实体的中文含义推理结果
2. 每个实体包含其所有属性的中文含义推理
3. 推理结果可能存在不准确之处，需要人工校验和修正
4. 修正后的结果可以用于更新实体描述和属性注释
5. 本文档包含实体的业务关系信息

---

## 统计信息

- **L1-Core核心实体**: 13


## 核心实体 (L1-Core)

### 1. BrPurchaseRequestEntity

**标准化名称**: `purchaserequest`

**层级**: L1-Core

**类别**: 需求相关

**推理中文含义**: 采购申请

**当前描述**: 融合实体（合并了2个实体: BrPurchaseRequestEntity, PurchaseRequestEntity）

**包路径**: `com.nio.srm.gps.pr.br.domain.purchaserequest.entity`

**文件路径**: `com/nio/srm/gps/pr/br/domain/purchaserequest/entity/BrPurchaseRequestEntity.java`

**关系统计**:

- 总关系数: 203
- 出向关系: 42
- 入向关系: 22

**出向关系类型**:

- `involves_create`: 6
- `involves_delete`: 6
- `involves_other`: 30
- `involves_query`: 8
- `involves_update`: 10
- `involves_validate`: 4
- `publishes`: 6
- `queries_find`: 16
- `queries_findBy`: 4
- `queries_get`: 8
- `queries_list`: 3
- `queries_other`: 19
- `triggers_create`: 2
- `triggers_unknown`: 8

**入向关系类型**:

- `involves_create`: 4
- `involves_delete`: 5
- `involves_move`: 1
- `involves_other`: 28
- `involves_query`: 5
- `involves_update`: 8
- `involves_validate`: 5
- `queries_find`: 2
- `queries_findBy`: 2
- `queries_get`: 8
- `queries_list`: 2
- `queries_other`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `afterward` | Boolean | 后续 | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `applicantName` | String | 申请人名称 | ⬜ | |
| `applyDate` | LocalDateTime | 申请日期 | ⬜ | |
| `approveStatus` | ApproveStatusEnum | 审批状态 | ⬜ | |
| `auditStatus` | AuditStatusEnum | 审核状态 | ⬜ | |
| `bizBu` | BizBuEnum | 业务BU | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `brWorkflow2ServiceFacade` | BrWorkflow2ServiceFacade | 品牌工作流服务门面 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `budgetCode` | String | 预算编码 | ⬜ | |
| `budgetType` | BudgetTypeEnum | 预算类型 | ⬜ | |
| `budgetYear` | String | 预算year | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `companyName` | String | 公司名称 | ⬜ | |
| `costCenterCode` | String | 成本中心编码 | ⬜ | |
| `costCenterCompanyCode` | String | 公司编码 | ⬜ | |
| `costCenterCompanyName` | String | 公司名称 | ⬜ | |
| `costCenterCompanyNameEn` | String | 名称英文 | ⬜ | |
| `costCenterCompanyNameZh` | String | 名称中文 | ⬜ | |
| `costCenterDepartmentCode` | String | 部门编码 | ⬜ | |
| `costCenterDepartmentName` | String | 部门名称 | ⬜ | |
| `costCenterDepartmentNameEn` | String | 名称英文 | ⬜ | |
| `costCenterDepartmentNameZh` | String | 名称中文 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createScene` | CreateSceneEnum | 创建场景 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `createType` | CreateTypeEnum | 创建类型 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `dataSource` | PRDataSourceEnum | 数据来源 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `demandDepartmentCode` | String | 需求编码 | ⬜ | |
| `demandDepartmentName` | String | 需求名称 | ⬜ | |
| `domesticOpenItemWithoutTaxTotalAmount` | BigDecimal | 总计金额 | ⬜ | |
| `domesticTotalAmountIncludeTaxAmount` | BigDecimal | 金额金额 | ⬜ | |
| `domesticTotalNetAmount` | BigDecimal | 国内净金额总计 | ⬜ | |
| `domesticTotalTaxAmount` | BigDecimal | 国内税额总计 | ⬜ | |
| `emailSendingService` | EmailSendingService | 邮箱服务 | ⬜ | |
| `endServiceDate` | LocalDateTime | 英文日期 | ⬜ | |
| `eventPublisher` | DomainEventPublisher | 发布者 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `extension` | PurchaseRequestExtendVO | extension | ⬜ | |
| `fileDownloadAddress` | String | 文件下载地址 | ⬜ | |
| `fileRepository` | IFileRepository | 文件仓储 | ⬜ | |
| `generateSignUrlUtil` | GenerateSignUrlUtil | 生成签署URL工具 | ⬜ | |
| `gpsApplyNo` | String | GPS申请编号 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryId` | Long | GPS品类ID | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `injector` | BrPurchaseRequestInjector | 注入器 | ⬜ | |
| `materialServiceFacade` | MaterialServiceFacade | 物料服务门面 | ⬜ | |
| `measuringTool` | Boolean | 测量工具 | ⬜ | |
| `messageFactory` | MessageFactory | 消息工厂 | ⬜ | |
| `multiCostCenter` | Boolean | multi成本中心 | ⬜ | |
| `notifyFacade` | NotifyFacade | 通知门面 | ⬜ | |
| `openItemWithoutTaxTotalAmount` | BigDecimal | 总计金额 | ⬜ | |
| `operationLogServiceFacade` | OperationLogServiceFacade | operation日志服务门面 | ⬜ | |
| `operator` | String | 操作人 | ⬜ | |
| `orderServiceFacade` | OrderServiceFacade | 订单服务门面 | ⬜ | |
| `orderType` | OrderTypeEnum | 订单类型 | ⬜ | |
| `priceAcoFactory` | PriceAcoFactory | 价格ACO工厂 | ⬜ | |
| `priceServiceFacade` | PriceServiceFacade | 价格服务门面 | ⬜ | |
| `purchaseContractServiceFacade` | PurchaseContractServiceFacade | 采购合同服务门面 | ⬜ | |
| `purchaseProcess` | PurchaseProcessEnum | 采购流程 | ⬜ | |
| `purchasePurpose` | String | 采购用途 | ⬜ | |
| `purchaseRequestExtMapper` | PurchaseRequestExtMapper | 采购申请扩展映射器 | ⬜ | |
| `purchaseRequestRepository` | IPurchaseRequestRepository | 采购申请仓储 | ⬜ | |
| `purchaseRequestType` | BrPurchaseRequestTypeEnum | 采购申请类型 | ⬜ | |
| `purchaseRequestType` | PurchaseRequestTypeEnum | 采购申请类型 | ⬜ | |
| `purchaseTotalAmountIncludeTaxAmount` | BigDecimal | 金额金额 | ⬜ | |
| `purchaseTotalNetAmount` | BigDecimal | 采购净金额总计 | ⬜ | |
| `purchaseTotalTaxAmount` | BigDecimal | 采购税额总计 | ⬜ | |
| `reasonDesc` | String | reason描述 | ⬜ | |
| `reasonType` | String | reason类型 | ⬜ | |
| `relationTotalAmount` | BrAmountVO | 总计金额 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `requestId` | String | 申请ID | ⬜ | |
| `requestLogRepository` | IRequestLogRepository | 申请日志仓储 | ⬜ | |
| `sapAcoFactory` | SapAcoFactory | SAPACO工厂 | ⬜ | |
| `sapApplyNo` | String | 申请编号 | ⬜ | |
| `sapServiceFacade` | SapServiceFacade | SAP服务门面 | ⬜ | |
| `sapSyncTime` | LocalDateTime | 同步时间 | ⬜ | |
| `smallAmount` | Boolean | 全部金额 | ⬜ | |
| `startServiceDate` | LocalDateTime | 服务日期 | ⬜ | |
| `status` | StatusEnum | 状态 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `vendor` | PurchaseRequestVendorEntity | 供应商 | ⬜ | |
| `vendorFactory` | VendorFactory | 供应商工厂 | ⬜ | |
| `vendorServiceFacade` | VendorServiceFacade | 供应商服务门面 | ⬜ | |
| `wbsFbpm` | String | wbsBP | ⬜ | |
| `wbsProjectCode` | String | 项目编码 | ⬜ | |
| `wbsProjectName` | String | 项目名称 | ⬜ | |
| `wfProcessId` | String | 工作流流程ID | ⬜ | |
| `workflowConverter` | WorkflowConverter | 工作流转换器 | ⬜ | |
| `workflowFactory` | WorkflowFactory | 工作流工厂 | ⬜ | |
| `workflowServiceFacade` | WorkflowServiceFacade | 工作流服务门面 | ⬜ | |
| `workflowTaskDetailMapper` | WorkflowTaskDetailMapper | 工作流任务明细映射器 | ⬜ | |
| `workflowTaskRepository` | IWorkflowTaskRepository | 工作流任务仓储 | ⬜ | |

---

### 2. OnlineBiddingEntity

**标准化名称**: `reqforquote`

**层级**: L1-Core

**类别**: 寻源定点相关

**推理中文含义**: 询价单

**当前描述**: 融合实体（合并了2个实体: OnlineBiddingEntity, ReqForQuoteEntity）

**包路径**: `com.nio.srm.gps.sourcing.domain.onlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/onlinebidding/buyer/OnlineBiddingEntity.java`

**关系统计**:

- 总关系数: 638
- 出向关系: 112
- 入向关系: 62

**出向关系类型**:

- `involves_compute`: 13
- `involves_convert`: 1
- `involves_create`: 34
- `involves_delete`: 5
- `involves_move`: 2
- `involves_other`: 111
- `involves_query`: 40
- `involves_update`: 29
- `involves_validate`: 10
- `queries_find`: 60
- `queries_findBy`: 7
- `queries_get`: 1
- `queries_other`: 33
- `queries_queryBy`: 2
- `queries_select`: 6

**入向关系类型**:

- `involves_compute`: 13
- `involves_convert`: 1
- `involves_create`: 40
- `involves_delete`: 6
- `involves_move`: 5
- `involves_other`: 104
- `involves_query`: 34
- `involves_update`: 32
- `involves_validate`: 10
- `queries_find`: 13
- `queries_other`: 23
- `queries_select`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `apolloConfigHelper` | ApolloConfigHelper | 采购订单配置助手 | ⬜ | |
| `applicationContext` | ApplicationContext | 申请上下文 | ⬜ | |
| `apportionFlag` | Boolean | 分摊标志 | ⬜ | |
| `attachmentRepository` | IAttachmentRepository | 附件仓储 | ⬜ | |
| `autoPdataPrice` | Boolean | 数据价格 | ⬜ | |
| `autoSendMessage` | Boolean | 自动发送消息 | ⬜ | |
| `beginBiddingTime` | LocalDateTime | ID时间 | ⬜ | |
| `bidderListRepository` | BidderListRepository | 投标人列表仓储 | ⬜ | |
| `bizGroup` | String | 业务分组 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerGroup` | String | 采购员分组 | ⬜ | |
| `canDelayBeforeEndMinutes` | Integer | 可以延迟之前结束分钟 | ⬜ | |
| `cancelMessage` | String | 取消消息 | ⬜ | |
| `categoryAffiliation` | String | 品类归属 | ⬜ | |
| `categoryFacade` | CategoryFacade | 品类门面 | ⬜ | |
| `categoryName` | String | 品类名称 | ⬜ | |
| `ceAccount` | String | CE数量 | ⬜ | |
| `comment` | String | 备注 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `contractFacade` | ContractFacade | 合同门面 | ⬜ | |
| `costCenterCode` | String | 成本中心编码 | ⬜ | |
| `costFinanceFacade` | CostFinanceFacade | 成本财务门面 | ⬜ | |
| `costLogisticsFacade` | CostLogisticsFacade | 成本物流门面 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `currentDelayCount` | Integer | 英文数量 | ⬜ | |
| `currentRound` | QuoteRoundEntity | 当前轮次 | ⬜ | |
| `delayCount` | Integer | 延迟数量 | ⬜ | |
| `delayMinutes` | Integer | 延迟分钟 | ⬜ | |
| `delayRule` | String | 延迟rule | ⬜ | |
| `delayTaskService` | DelayTaskService | 延迟任务服务 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `deliveryContent` | String | 交付内容 | ⬜ | |
| `deliveryDate` | LocalDate | 交付日期 | ⬜ | |
| `deliveryPlace` | String | 交付地点 | ⬜ | |
| `dreAccount` | String | DRE数量 | ⬜ | |
| `durationMinutes` | Integer | 持续时间分钟 | ⬜ | |
| `eachBiddingDurationMinutes` | Integer | 每个竞价持续时间分钟 | ⬜ | |
| `echoEndTime` | LocalDateTime | 英文时间 | ⬜ | |
| `endTime` | LocalDateTime | 结束时间 | ⬜ | |
| `estimatePrice` | Boolean | 估算价格 | ⬜ | |
| `estimatePriceFacade` | EstimatePriceFacade | 估算价格门面 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `feishuDocInfo` | FeishuDocInfoVO | 飞书文档信息 | ⬜ | |
| `finalBidding` | Boolean | 最终竞价 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryId` | Long | GPS品类ID | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `gpsRfqName` | String | GPS询价单名称 | ⬜ | |
| `hasInternalLogisticsTaskFlag` | Boolean | 是否有任务 | ⬜ | |
| `intervalMinutes` | Integer | 间隔分钟 | ⬜ | |
| `isDimensionSyncToVendor` | Boolean | 是否供应商 | ⬜ | |
| `isPimsSynced` | Boolean | 是否同步 | ⬜ | |
| `isPlmSynced` | Boolean | 是否同步 | ⬜ | |
| `ladderPriceFlag` | Boolean | 阶梯价格标志 | ⬜ | |
| `ladderPriceInfo` | LadderPriceEntity | 阶梯价格信息 | ⬜ | |
| `limitTotalAmount` | Boolean | 总计金额 | ⬜ | |
| `logisticsPlannerAccount` | String | 计划数量 | ⬜ | |
| `lowestQuoteTimes` | Integer | 最低报价时间 | ⬜ | |
| `mainDataServiceFacade` | MainDataServiceFacade | 主数据服务门面 | ⬜ | |
| `maindataService` | MaindataService | 主数据服务 | ⬜ | |
| `materialConfigVendorVisibleFlag` | Boolean | 物料配置供应商可见标志 | ⬜ | |
| `materialFacade` | MaterialFacade | 物料门面 | ⬜ | |
| `materialsLimitPriceInfo` | MaterialLimitPriceEntity | 物料限制价格信息 | ⬜ | |
| `meetingFacade` | MeetingFacade | 会议门面 | ⬜ | |
| `meetingRepository` | MeetingRepository | 会议仓储 | ⬜ | |
| `minEchoVendorCount` | Integer | 供应商数量 | ⬜ | |
| `needEcho` | Boolean | 是否需要回音 | ⬜ | |
| `needTaAccount` | String | 需要数量 | ⬜ | |
| `nominatedByConfigFlag` | Boolean | 已提名通过配置标志 | ⬜ | |
| `nominationLetterRepository` | INominationLetterRepository | 提名信函仓储 | ⬜ | |
| `nominationRelationRepository` | NominationRelationRepository | 提名关系仓储 | ⬜ | |
| `nominationRepository` | INominationRepository | 提名仓储 | ⬜ | |
| `onlineBiddingCode` | String | ID编码 | ⬜ | |
| `onlineBiddingEntity` | OnlineBiddingEntity | 在线竞价 | ⬜ | |
| `onlineBiddingRepository` | OnlineBiddingRepository | 在线竞价仓储 | ⬜ | |
| `onlineBiddingStatus` | OnlineBiddingStatus | 在线竞价状态 | ⬜ | |
| `onlineBiddingType` | String | 在线竞价类型 | ⬜ | |
| `originalContractAmount` | BigDecimal | 合同金额 | ⬜ | |
| `originalContractNo` | String | 合同编号 | ⬜ | |
| `originalVendorCode` | String | 供应商编码 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `pimsServiceFacade` | PimsServiceFacade | PIMS服务门面 | ⬜ | |
| `plmServiceFacade` | PlmServiceFacade | PLM服务门面 | ⬜ | |
| `plmSyncType` | String | PLM同步类型 | ⬜ | |
| `prFacade` | PrFacade | 采购申请门面 | ⬜ | |
| `priceEffectTime` | LocalDateTime | 价格时间 | ⬜ | |
| `priceEstimationFacade` | PriceEstimationFacade | 价格估算门面 | ⬜ | |
| `priceExpireTime` | LocalDateTime | 价格时间 | ⬜ | |
| `priceMainServiceFacade` | PriceMainServiceFacade | 价格主服务门面 | ⬜ | |
| `projectFacade` | ProjectFacade | 项目门面 | ⬜ | |
| `publishTime` | LocalDateTime | 发布时间 | ⬜ | |
| `purchaseBpAccount` | String | 采购数量 | ⬜ | |
| `purchaseStrategy` | PurchaseStrategyType | 采购策略 | ⬜ | |
| `purchaseStrategyDesc` | String | 比率描述 | ⬜ | |
| `qualityAccount` | String | 质量数量 | ⬜ | |
| `qualityFileUploaded` | Boolean | 质量文件已上传 | ⬜ | |
| `qualityVisible` | Boolean | 质量可见 | ⬜ | |
| `quoteContractType` | ContractTypeEnum | 报价合同类型 | ⬜ | |
| `quoteConverter` | QuoteConverter | 报价转换器 | ⬜ | |
| `quoteItemMapperService` | IQuoteItemMapperService | 报价项映射器服务 | ⬜ | |
| `quoteMethod` | QuoteMethod | 报价method | ⬜ | |
| `quoteNodeRepository` | IQuoteNodeRepository | 报价节点仓储 | ⬜ | |
| `quotePlanRepository` | IQuotePlanRepository | 报价计划仓储 | ⬜ | |
| `quoteRoundConverter` | QuoteRoundConverter | 报价轮次转换器 | ⬜ | |
| `quoteRoundId` | Long | 报价ID | ⬜ | |
| `quoteRoundMapperService` | IQuoteRoundMapperService | 报价轮次映射器服务 | ⬜ | |
| `quoteRoundNo` | Integer | 报价编号 | ⬜ | |
| `quoteRoundRepository` | IQuoteRoundRepository | 报价轮次仓储 | ⬜ | |
| `quoteStatus` | ReqForQuoteStatus | 报价状态 | ⬜ | |
| `quoteTemplateEntity` | QuoteTemplateEntity | 报价模板 | ⬜ | |
| `quoteTemplateId` | Long | 报价ID | ⬜ | |
| `quoteTemplateType` | String | 报价模板类型 | ⬜ | |
| `quoteType` | QuoteType | 报价类型 | ⬜ | |
| `rankMode` | RankModeType | 排名模式 | ⬜ | |
| `relatedGpsRfqCode` | String | GPS编码 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `reportApplyMapper` | RfqReportApplyMapper | 报告申请映射器 | ⬜ | |
| `reportApplyVO` | RfqReportApplyVO | 报告申请凭证 | ⬜ | |
| `reqForQuoteConverter` | ReqForQuoteConverter | 申请之前报价转换器 | ⬜ | |
| `reqForQuoteMapper` | ReqForQuoteMapper | 申请之前报价映射器 | ⬜ | |
| `reqForQuoteRepository` | IReqForQuoteRepository | 申请之前报价仓储 | ⬜ | |
| `rfqMQModifyCeService` | RfqMQModifyCeService | 询价MQ修改CE服务 | ⬜ | |
| `rfqMQNotifyPrService` | RfqMQNotifyPrService | 询价MQ通知采购申请服务 | ⬜ | |
| `rfqName` | String | 询价名称 | ⬜ | |
| `rfqRelatePrService` | RfqRelatePrService | 询价关联采购申请服务 | ⬜ | |
| `rfqVendorInfoConverter` | RfqVendorInfoConverter | 询价供应商信息转换器 | ⬜ | |
| `rfqVendorInfoMapper` | RfqVendorInfoMapper | 询价供应商信息映射器 | ⬜ | |
| `roundDeadlineTime` | LocalDateTime | 轮次时间 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `sealedBidding` | Boolean | 密封竞价 | ⬜ | |
| `sequenceServiceFacade` | SequenceServiceFacade | 序列服务门面 | ⬜ | |
| `setFloorPrice` | Boolean | 设置价格 | ⬜ | |
| `setIntervalTime` | Boolean | 间隔时间 | ⬜ | |
| `setStartPrice` | Boolean | 开始价格 | ⬜ | |
| `sorInfo` | StatOfReqEntity | SOR信息 | ⬜ | |
| `sorStatus` | String | SOR状态 | ⬜ | |
| `sorSummary` | String | SOR汇总 | ⬜ | |
| `sorUpdated` | Boolean | SOR已更新 | ⬜ | |
| `sorVisible` | Boolean | SOR可见 | ⬜ | |
| `startTime` | LocalDateTime | 开始时间 | ⬜ | |
| `startingMode` | OnlineBiddingStartMode | 开始模式 | ⬜ | |
| `status` | ReqForQuoteStatus | 状态 | ⬜ | |
| `strategyTemplateEntity` | StrategyTemplateEntity | 策略模板 | ⬜ | |
| `strategyTemplateId` | Long | 比率ID | ⬜ | |
| `strategyTemplateRepository` | IStrategyTemplateRepository | 策略模板仓储 | ⬜ | |
| `taFacade` | TaFacade | TA门面 | ⬜ | |
| `taType` | TaType | TA类型 | ⬜ | |
| `taxRate` | BigDecimal | 税比率 | ⬜ | |
| `test` | Boolean | 测试 | ⬜ | |
| `totalBudgetAmount` | BigDecimal | 总金额 | ⬜ | |
| `userAccount` | String | 用户数量 | ⬜ | |
| `userPermissionFacade` | UserPermissionFacade | 用户权限门面 | ⬜ | |
| `vendorAccessStageConfigRepository` | IVendorAccessStageConfigRepository | 供应商访问阶段配置仓储 | ⬜ | |
| `vendorFacade` | VendorFacade | 供应商门面 | ⬜ | |
| `workflowACO` | WorkflowACO | 工作流ACO | ⬜ | |
| `workflowLogRepository` | WorkflowLogRepository | 工作流日志仓储 | ⬜ | |
| `workflowServiceFacade` | WorkflowServiceFacade | 工作流服务门面 | ⬜ | |

---

### 3. QuoteRoundEntity

**标准化名称**: `quoteround`

**层级**: L1-Core

**类别**: 寻源定点相关

**推理中文含义**: 报价轮次

**当前描述**: 关联SOR主键

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/QuoteRoundEntity.java`

**关系统计**:

- 总关系数: 158
- 出向关系: 90
- 入向关系: 68

**出向关系类型**:

- `involves_create`: 5
- `involves_other`: 29
- `involves_query`: 20
- `involves_update`: 3
- `involves_validate`: 1
- `queries_find`: 26
- `queries_other`: 4
- `queries_select`: 2

**入向关系类型**:

- `involves_create`: 8
- `involves_other`: 31
- `involves_query`: 19
- `involves_update`: 1
- `involves_validate`: 3
- `queries_other`: 6

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `sorRecordId` | Long | SORID | ⬜ | |
| `roundNo` | Integer | 轮次编号 | ⬜ | |
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `rfqName` | String | 询价名称 | ⬜ | |
| `sealedBidding` | Boolean | 密封竞价 | ⬜ | |
| `openBidding` | Boolean | 开放竞价 | ⬜ | |
| `roundDeadlineTime` | LocalDateTime | 轮次时间 | ⬜ | |
| `quoteMethod` | QuoteMethod | 报价method | ⬜ | |
| `comment` | String | 备注 | ⬜ | |
| `prevRoundId` | Long | 轮次ID | ⬜ | |
| `status` | QuoteRoundStatusEnum | 状态 | ⬜ | |
| `roundType` | QuoteRoundTypeEnum | 轮次类型 | ⬜ | |
| `reason` | String | reason | ⬜ | |
| `finalBidding` | Boolean | 最终竞价 | ⬜ | |
| `mouldPaymentTemplateCode` | String | 英文编码 | ⬜ | |
| `rdPaymentTemplateCode` | String | 英文编码 | ⬜ | |
| `quoteRoundRepository` | IQuoteRoundRepository | 报价轮次仓储 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `openBiddingAccount` | String | ID数量 | ⬜ | |
| `openBiddingTime` | LocalDateTime | ID时间 | ⬜ | |
| `openBiddingType` | OpenBiddingType | 开放竞价类型 | ⬜ | |
| `ladderPriceType` | LadderPriceType | 阶梯价格类型 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `quoteRoundConverter` | QuoteRoundConverter | 报价轮次转换器 | ⬜ | |
| `attachmentRepository` | IAttachmentRepository | 附件仓储 | ⬜ | |
| `quoteRepository` | IQuoteRepository | 报价仓储 | ⬜ | |

---

### 4. QuoteItemEntity

**标准化名称**: `quoteitem`

**层级**: L1-Core

**类别**: 寻源定点相关

**推理中文含义**: 报价项

**当前描述**: 融合实体（合并了2个实体: QuoteItemEntity, QuoteEntity）

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/QuoteItemEntity.java`

**关系统计**:

- 总关系数: 151
- 出向关系: 38
- 入向关系: 24

**出向关系类型**:

- `involves_compute`: 1
- `involves_create`: 15
- `involves_other`: 36
- `involves_query`: 12
- `involves_update`: 7
- `involves_validate`: 1
- `queries_get`: 6
- `queries_getBy`: 12
- `queries_other`: 2

**入向关系类型**:

- `involves_create`: 7
- `involves_other`: 20
- `involves_query`: 8
- `involves_update`: 4
- `involves_validate`: 1
- `queries_get`: 8
- `queries_other`: 9
- `queries_select`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `attachmentRepository` | IAttachmentRepository | 附件仓储 | ⬜ | |
| `bizMaterialCode` | String | 物料编码 | ⬜ | |
| `deliveryQuoteInfo` | DeliveryQuoteInfo | 交付报价信息 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `mainDataServiceFacade` | MainDataServiceFacade | 主数据服务门面 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialDescription` | String | 物料描述 | ⬜ | |
| `materialId` | Long | 物料ID | ⬜ | |
| `materialInfo` | MaterialVO | 物料信息 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `noTaxPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `partNumber` | String | 部分编号 | ⬜ | |
| `partQuoteInfo` | PartQuoteInfo | 部分报价信息 | ⬜ | |
| `preliminaryQuoteInfo` | PreliminaryQuoteInfo | 最小报价信息 | ⬜ | |
| `quoteCurrency` | String | 报价货币 | ⬜ | |
| `quoteId` | Long | 报价ID | ⬜ | |
| `quoteInfo` | QuoteInfoVO | 报价信息 | ⬜ | |
| `quoteItemRepository` | IQuoteItemRepository | 报价项仓储 | ⬜ | |
| `quoteRepository` | IQuoteRepository | 报价仓储 | ⬜ | |
| `quoteRoundId` | Long | 报价ID | ⬜ | |
| `quoteRoundNo` | Integer | 报价编号 | ⬜ | |
| `quoteRoundRepository` | IQuoteRoundRepository | 报价轮次仓储 | ⬜ | |
| `quoteTemplateId` | Long | 报价ID | ⬜ | |
| `status` | QuoteItemStatus | 状态 | ⬜ | |
| `status` | QuoteStatus | 状态 | ⬜ | |
| `subRoundNo` | Integer | 轮次编号 | ⬜ | |
| `templateId` | Long | 模板ID | ⬜ | |
| `templateType` | String | 模板类型 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorInfo` | VendorVO | 供应商信息 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `vendorOnlineQuoteRemark` | String | 供应商在线报价备注 | ⬜ | |

---

### 5. NominationEntity

**标准化名称**: `nomination`

**层级**: L1-Core

**类别**: 寻源定点相关

**推理中文含义**: 定点

**当前描述**: @Classname NominationEntity

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationEntity.java`

**关系统计**:

- 总关系数: 326
- 出向关系: 177
- 入向关系: 149

**出向关系类型**:

- `involves_compute`: 12
- `involves_create`: 34
- `involves_move`: 4
- `involves_other`: 51
- `involves_query`: 15
- `involves_update`: 16
- `involves_validate`: 4
- `queries_find`: 12
- `queries_findBy`: 6
- `queries_get`: 8
- `queries_getBy`: 6
- `queries_other`: 3
- `queries_queryBy`: 6

**入向关系类型**:

- `involves_compute`: 12
- `involves_create`: 40
- `involves_move`: 2
- `involves_other`: 49
- `involves_query`: 11
- `involves_update`: 15
- `involves_validate`: 5
- `queries_find`: 4
- `queries_get`: 8
- `queries_other`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `gpsMeetingId` | Long | GPSID | ⬜ | |
| `gpsMeetingApplyNo` | String | 申请编号 | ⬜ | |
| `rfqInfo` | NominationRfqVO | 询价信息 | ⬜ | |
| `priceInfo` | NominationPriceVO | 价格信息 | ⬜ | |
| `status` | NominationStatus | 状态 | ⬜ | |
| `effectStatus` | NominationStatus | 生效状态 | ⬜ | |
| `sorStatus` | String | SOR状态 | ⬜ | |
| `costGapActionPlan` | String | 成本差距行动计划 | ⬜ | |
| `ltaLeverage` | String | LTA杠杆 | ⬜ | |
| `meetingEntity` | MeetingEntity | 会议 | ⬜ | |
| `projectAccessAgg` | ProjectAccessAgg | 项目访问agg | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `workflowACO` | WorkflowACO | 工作流ACO | ⬜ | |
| `nominationRepository` | INominationRepository | 提名仓储 | ⬜ | |
| `reqForQuoteRepository` | IReqForQuoteRepository | 申请之前报价仓储 | ⬜ | |
| `deviationFacade` | DeviationFacade | 偏差门面 | ⬜ | |
| `vendorFacade` | VendorFacade | 供应商门面 | ⬜ | |
| `priceEstimationFacade` | PriceEstimationFacade | 价格估算门面 | ⬜ | |
| `quoteRoundRepository` | IQuoteRoundRepository | 报价轮次仓储 | ⬜ | |
| `nominationRelationRepository` | INominationRelationRepository | 提名关系仓储 | ⬜ | |
| `nominationFlag` | Boolean | 提名标志 | ⬜ | |
| `partiallyNominationFlag` | Boolean | 部分提名标志 | ⬜ | |
| `mouldSapWbsCode` | String | SAP编码 | ⬜ | |
| `rdSapWbsCode` | String | SAP编码 | ⬜ | |
| `platformPartFlag` | Boolean | platform部分标志 | ⬜ | |
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `contractEffectTime` | LocalDateTime | 合同时间 | ⬜ | |
| `contractExpireTime` | LocalDateTime | 合同时间 | ⬜ | |
| `limitReplayDays` | Integer | 限制replaydays | ⬜ | |
| `nominationLetterSendType` | NominationLetterSendType | 提名信函发送类型 | ⬜ | |
| `unNominationTemplateType` | NominationTemplateType | 金额提名模板类型 | ⬜ | |
| `coverDemandSource` | String | cover需求来源 | ⬜ | |
| `costReductionInvestment` | BigDecimal | 成本reduction | ⬜ | |
| `costReductionRatio` | BigDecimal | 成本reduction持续时间 | ⬜ | |
| `costReductionAmount` | BigDecimal | 成本金额 | ⬜ | |
| `totalNominationWithoutTaxAmount` | BigDecimal | 总编号 | ⬜ | |
| `riskTip` | String | 是IP | ⬜ | |
| `effect` | Boolean | 生效 | ⬜ | |
| `quoteRemark` | String | 报价备注 | ⬜ | |
| `taRemark` | String | TA备注 | ⬜ | |
| `quoteRoundNo` | Integer | 报价编号 | ⬜ | |
| `extInfo` | NominationExtInfo | 扩展信息 | ⬜ | |
| `costReductionLogic` | CostReductionLogicEnum | 成本reduction日志 | ⬜ | |
| `attachmentRepository` | IAttachmentRepository | 附件仓储 | ⬜ | |
| `workflowLogRepository` | WorkflowLogRepository | 工作流日志仓储 | ⬜ | |
| `nominationConverter` | NominationConverter | 提名转换器 | ⬜ | |
| `quoteRepository` | IQuoteRepository | 报价仓储 | ⬜ | |
| `quoteTemplateRepository` | QuoteTemplateRepository | 报价模板仓储 | ⬜ | |
| `mainDataServiceFacade` | MainDataServiceFacade | 主数据服务门面 | ⬜ | |
| `attachmentFactory` | AttachmentFactory | 附件工厂 | ⬜ | |
| `prFacade` | PrFacade | 采购申请门面 | ⬜ | |
| `workflowServiceFacade` | WorkflowServiceFacade | 工作流服务门面 | ⬜ | |

---

### 6. PriPendingPriceFlowEntity

**标准化名称**: `pripriceflow`

**层级**: L1-Core

**类别**: 报价和价格相关

**推理中文含义**: 价格流程

**当前描述**: 融合实体（合并了2个实体: PriPendingPriceFlowEntity, PriPriceFlowEntity）

**包路径**: `com.nio.srm.gps.price.domain.price.application`

**文件路径**: `com/nio/srm/gps/price/domain/price/application/PriPendingPriceFlowEntity.java`

**关系统计**:

- 总关系数: 139
- 出向关系: 38
- 入向关系: 28

**出向关系类型**:

- `involves_create`: 11
- `involves_delete`: 1
- `involves_other`: 20
- `involves_query`: 6
- `involves_update`: 1
- `involves_validate`: 15
- `queries_count`: 1
- `queries_other`: 14
- `queries_queryBy`: 7

**入向关系类型**:

- `involves_create`: 10
- `involves_delete`: 1
- `involves_other`: 17
- `involves_query`: 1
- `involves_update`: 1
- `involves_validate`: 17
- `queries_count`: 1
- `queries_other`: 15

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `baseCurrency` | String | base货币 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `brand` | BrandEnum | 品牌 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `categoryFlag` | Boolean | 品类标志 | ⬜ | |
| `cbSamplePartPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `colorCode` | String | color编码 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `companyEnName` | String | 公司名称 | ⬜ | |
| `companyName` | String | 公司名称 | ⬜ | |
| `companyZhName` | String | 公司名称 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `dbManageFeeAmount` | BigDecimal | DB金额 | ⬜ | |
| `dbManageFeeRate` | BigDecimal | DBmanagefee率 | ⬜ | |
| `deleteReason` | String | 删除reason | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `extInfo` | ExtInfo | 扩展信息 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `factoryName` | String | 工厂名称 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryEnName` | String | 英文名称 | ⬜ | |
| `gpsCategoryZhName` | String | 中文名称 | ⬜ | |
| `gpsPriceConfirmNo` | String | GPS价格确认编号 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `imported` | Boolean | 采购订单 | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `invalidatedBy` | String | ID通过 | ⬜ | |
| `logisticPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `logisticPriceDeltaAmount` | BigDecimal | 价格金额 | ⬜ | |
| `logisticPriceInfo` | LogisticPriceSimpleInfo | 日志价格信息 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialEnName` | String | 物料名称 | ⬜ | |
| `materialMeasureUnit` | String | 物料计量单位 | ⬜ | |
| `materialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `materialPriceUnit` | String | 物料价格单位 | ⬜ | |
| `materialZhName` | String | 物料名称 | ⬜ | |
| `migrateEcrFlag` | Boolean | 率ecr标志 | ⬜ | |
| `mouldApportionPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `noApportionMaterialLogisticsPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `nomination` | Boolean | 提名 | ⬜ | |
| `originalLogisticPriceInfo` | LogisticPriceSimpleInfo | 原始日志价格信息 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `partCode` | String | 部分编码 | ⬜ | |
| `partName` | String | 部分名称 | ⬜ | |
| `partVersion` | String | 部分版本 | ⬜ | |
| `paymentInfo` | PricePaymentInfo | 支付信息 | ⬜ | |
| `paymentInfo` | String | 支付信息 | ⬜ | |
| `paymentPeriod` | String | 支付周期 | ⬜ | |
| `paymentType` | PriPaymentTypeEntity | 支付类型 | ⬜ | |
| `paymentType` | String | 支付类型 | ⬜ | |
| `ppSamplePartPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `priceChangeInfo` | String | 价格变更信息 | ⬜ | |
| `priceChangeInfoBO` | ChangePriceItemInfo | 价格变更信息bo | ⬜ | |
| `priceInfo` | String | 价格信息 | ⬜ | |
| `priceSource` | PriceSource | 价格来源 | ⬜ | |
| `priceSourceNo` | String | 价格编号 | ⬜ | |
| `priceStatus` | PriceStatus | 价格状态 | ⬜ | |
| `priceType` | PriceType | 价格类型 | ⬜ | |
| `quoteRoundNo` | Integer | 报价编号 | ⬜ | |
| `rdApportionPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `sapTaxRate` | BigDecimal | SAP税率 | ⬜ | |
| `sourceGpsPriceConfirmNo` | String | 价格编号 | ⬜ | |
| `sraGroup` | String | sra分组 | ⬜ | |
| `sraItemId` | Long | 项ID | ⬜ | |
| `supplyStatus` | MaterialSupplyStatusEnum | supply状态 | ⬜ | |
| `syncEiPriceFlag` | Boolean | 同步收货价格标志 | ⬜ | |
| `tradeType` | String | 贸易类型 | ⬜ | |
| `ttSamplePartPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `vbSamplePartPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `vendorEnName` | String | 供应商名称 | ⬜ | |
| `vendorZhName` | String | 供应商名称 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `virtualFlag` | Boolean | virtual标志 | ⬜ | |
| `withApportionMaterialLogisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |

---

### 7. PriPriceApplicationEntity

**标准化名称**: `pripriceapplication`

**层级**: L1-Core

**类别**: 报价和价格相关

**推理中文含义**: 价格申请

**当前描述**: 融合实体（合并了2个实体: PriPriceApplicationEntity, IpPriceApplicationEntity）

**包路径**: `com.nio.srm.gps.price.domain.price.application`

**文件路径**: `com/nio/srm/gps/price/domain/price/application/PriPriceApplicationEntity.java`

**关系统计**:

- 总关系数: 61
- 出向关系: 18
- 入向关系: 10

**出向关系类型**:

- `involves_create`: 10
- `involves_other`: 9
- `involves_query`: 2
- `involves_update`: 1
- `involves_validate`: 7
- `queries_getBy`: 2

**入向关系类型**:

- `involves_create`: 10
- `involves_other`: 9
- `involves_query`: 3
- `involves_update`: 1
- `involves_validate`: 7

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `aggBizCode` | String | 业务编码 | ⬜ | |
| `applicableYear` | String | applicableyear | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `applicantName` | String | 申请人名称 | ⬜ | |
| `applicationStatus` | PriceApplicationStatus | 申请状态 | ⬜ | |
| `applyBizType` | IpPriceApplyBizType | 申请业务类型 | ⬜ | |
| `applyBizType` | PriPriceApplyBizType | 申请业务类型 | ⬜ | |
| `applyTime` | LocalDateTime | 申请时间 | ⬜ | |
| `apportionInfo` | String | 分摊信息 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `brand` | BrandEnum | 品牌 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `cancelReason` | String | 取消reason | ⬜ | |
| `ceAccount` | String | CE数量 | ⬜ | |
| `ceName` | String | CE名称 | ⬜ | |
| `changeDesc` | String | 变更描述 | ⬜ | |
| `changeReason` | String | 变更reason | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `companyName` | String | 公司名称 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `extInfoWrapper` | ExtInfoWrapper | 扩展信息wrapper | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `factoryName` | String | 工厂名称 | ⬜ | |
| `gpsPriceApplyNo` | String | GPS价格申请编号 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `iPriceAttachmentRepository` | IPriceAttachmentRepository | ID价格附件仓储 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `importAccount` | String | TA数量 | ⬜ | |
| `importAccountName` | String | 数量名称 | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `lcrNo` | String | lcr编号 | ⬜ | |
| `manuallyAddReason` | String | 全部地址reason | ⬜ | |
| `needAudit` | Boolean | 是否需要审核 | ⬜ | |
| `needCe` | Boolean | 是否需要CE | ⬜ | |
| `needConference` | Boolean | 是否需要英文 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `priPendingPriceFlowRepository` | PriPendingPriceFlowRepository | 价格待处理价格流程仓储 | ⬜ | |
| `priPriceApplicationRepository` | PriPriceApplicationRepository | 价格价格申请仓储 | ⬜ | |
| `purchasingGroup` | String | 有分组 | ⬜ | |
| `quotationType` | String | TA类型 | ⬜ | |
| `reason` | String | reason | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |

---

### 8. PriceChangeTaskAggregate

**标准化名称**: `assemblysummary`

**层级**: L1-Core

**类别**: 报价和价格相关

**推理中文含义**: 价格汇总

**当前描述**: 融合实体（合并了3个实体: PriceChangeTaskAggregate, AssemblyDbSummaryEntity, AssemblySummaryEntity）

**包路径**: `com.nio.srm.gps.contract.domain.aggregate`

**文件路径**: `com/nio/srm/gps/contract/domain/aggregate/PriceChangeTaskAggregate.java`

**关系统计**:

- 总关系数: 59
- 出向关系: 17
- 入向关系: 22

**出向关系类型**:

- `involves_compute`: 1
- `involves_create`: 3
- `involves_move`: 2
- `involves_other`: 7
- `involves_query`: 2
- `involves_update`: 2
- `queries_exists`: 1
- `queries_other`: 5
- `queries_queryBy`: 4

**入向关系类型**:

- `involves_compute`: 2
- `involves_create`: 4
- `involves_move`: 2
- `involves_other`: 13
- `involves_query`: 4
- `involves_update`: 2
- `queries_other`: 5

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `allDataCompleted` | Boolean | 全部数据completed | ⬜ | |
| `assemblyRootIdentity` | String | 汇总rootID | ⬜ | |
| `assemblyVirtualFlag` | Boolean | 汇总virtual标志 | ⬜ | |
| `baseCurrency` | String | base货币 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `brand` | BrandEnum | 品牌 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `cbSamplePartPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `cbSamplePartSummaryPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `clmsContractNo` | String | 合同编号 | ⬜ | |
| `colorCode` | String | color编码 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `companyEnName` | String | 公司名称 | ⬜ | |
| `companyName` | String | 公司名称 | ⬜ | |
| `companyZhName` | String | 公司名称 | ⬜ | |
| `confirmStatus` | AssemblySummaryConfirmStatus | confirm状态 | ⬜ | |
| `confirmTime` | LocalDateTime | confirm时间 | ⬜ | |
| `consumptionCount` | BigDecimal | consumption数量 | ⬜ | |
| `contractFlag` | Boolean | 合同标志 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `dbManageFeeAmount` | BigDecimal | DB金额 | ⬜ | |
| `dbManageFeeRate` | BigDecimal | DBmanagefee率 | ⬜ | |
| `dbOnlineAssemblyPriceId` | String | 价格ID | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `extInfo` | AssemblyDbSummaryExtInfo | 扩展信息 | ⬜ | |
| `extInfo` | AssemblySummaryExtInfo | 扩展信息 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `factoryName` | String | 工厂名称 | ⬜ | |
| `fillRecord` | Boolean | fillrecord | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryEnName` | String | 英文名称 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `gpsCategoryZhName` | String | 中文名称 | ⬜ | |
| `gpsPriceConfirmNo` | String | GPS价格确认编号 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `hasLastError` | Boolean | 是否有LastError | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `lastErrorInfo` | ErrorInfoVO | lasterror信息 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `logisticPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialEnName` | String | 物料名称 | ⬜ | |
| `materialMeasureUnit` | String | 物料计量单位 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `materialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `materialPriceUnit` | String | 物料价格单位 | ⬜ | |
| `materialZhName` | String | 物料名称 | ⬜ | |
| `migrateEcrFlag` | Boolean | 率ecr标志 | ⬜ | |
| `mouldApportionPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `noApportionMaterialLogisticsPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `nomination` | Boolean | 提名 | ⬜ | |
| `notConfirmedReason` | String | 编号confirmedreason | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `partCode` | String | 部分编码 | ⬜ | |
| `partName` | String | 部分名称 | ⬜ | |
| `partVersion` | String | 部分版本 | ⬜ | |
| `paymentPeriod` | String | 支付周期 | ⬜ | |
| `paymentType` | PriPaymentTypeEntity | 支付类型 | ⬜ | |
| `ppSamplePartPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `ppSamplePartSummaryPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `priceSource` | PriceSource | 价格来源 | ⬜ | |
| `priceSourceNo` | String | 价格编号 | ⬜ | |
| `priceStatus` | PriceStatus | 价格状态 | ⬜ | |
| `priceType` | PriceType | 价格类型 | ⬜ | |
| `quota` | BigDecimal | TA | ⬜ | |
| `quotaPercent` | BigDecimal | TA百分比 | ⬜ | |
| `rdApportionPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `rootBomKey` | String | rootbomkey | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `sapTaxRate` | BigDecimal | SAP税率 | ⬜ | |
| `sourceGpsPriceConfirmNo` | String | 价格编号 | ⬜ | |
| `sourcePriceFlowConfirmNo` | String | 价格编号 | ⬜ | |
| `status` | PriceChangeTaskStatus | 状态 | ⬜ | |
| `success` | Boolean | CE | ⬜ | |
| `summaryPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `supplyStatus` | MaterialSupplyStatusEnum | supply状态 | ⬜ | |
| `syncContractStatus` | AssemblySyncContractStatus | 同步合同状态 | ⬜ | |
| `tip` | String | IP | ⬜ | |
| `tradeType` | String | 贸易类型 | ⬜ | |
| `ttSamplePartPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `ttSamplePartSummaryPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `vbSamplePartPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `vbSamplePartSummaryPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `vendorEnName` | String | 供应商名称 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `vendorZhName` | String | 供应商名称 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `virtualFlag` | Boolean | virtual标志 | ⬜ | |
| `withApportionMaterialLogisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `withApportionSummaryPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `withoutLogisticSummaryPriceAmount` | BigDecimal | 价格金额 | ⬜ | |

---

### 9. ContractAggregate

**标准化名称**: `contract`

**层级**: L1-Core

**类别**: 合同相关

**推理中文含义**: 合同

**当前描述**: 合同聚合根（合并了16个Contract相关实体）

**包路径**: `com.nio.srm.gps.contract.domain.aggregate`

**文件路径**: `com/nio/srm/gps/contract/domain/aggregate/ContractAggregate.java`

**关系统计**:

- 总关系数: 129
- 出向关系: 67
- 入向关系: 62

**出向关系类型**:

- `involves_compute`: 1
- `involves_create`: 24
- `involves_delete`: 2
- `involves_move`: 1
- `involves_other`: 36
- `involves_query`: 15
- `involves_update`: 16
- `involves_validate`: 4
- `queries_other`: 78
- `queries_queryBy`: 13

**入向关系类型**:

- `involves_compute`: 1
- `involves_create`: 19
- `involves_delete`: 5
- `involves_other`: 42
- `involves_query`: 25
- `involves_update`: 15
- `involves_validate`: 5
- `queries_other`: 90

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `bizMode` | String | 业务模式 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `ownerName` | String | 所属人名称 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `ownerEmail` | String | 所属人邮箱 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerDeptCode` | String | 采购员编码 | ⬜ | |
| `buyerDeptName` | ContractLocaleString | 采购员名称 | ⬜ | |
| `buyerDeptNameZh` | String | 名称中文 | ⬜ | |
| `buyerDeptNameEn` | String | 名称英文 | ⬜ | |
| `buyerEmail` | String | 采购员邮箱 | ⬜ | |
| `applicationDate` | LocalDate | 申请日期 | ⬜ | |
| `onlineSign` | Boolean | 在线签署 | ⬜ | |
| `signType` | SignMethodEnum | 签署类型 | ⬜ | |
| `mainPartyDigitalStamp` | Boolean | 主参与方数字印章 | ⬜ | |
| `contractType` | ContractType | 合同类型 | ⬜ | |
| `gpsContractCategoryCode` | String | 合同编码 | ⬜ | |
| `costCenterCode` | String | 成本中心编码 | ⬜ | |
| `hasLastError` | Boolean | 是否有LastError | ⬜ | |
| `lastErrorInfo` | ErrorInfoVO | lasterror信息 | ⬜ | |
| `offlineSignedFileFulfilledStatus` | OfflineSignedFileFulfilledStatus | 线下已签署文件fulfilled状态 | ⬜ | |
| `name` | String | 名称 | ⬜ | |
| `signAddress` | String | 签署地址 | ⬜ | |
| `signDate` | LocalDate | 签署日期 | ⬜ | |
| `effectDate` | LocalDate | 生效日期 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `expireDate` | LocalDate | 过期日期 | ⬜ | |
| `contentLang` | String | 内容lang | ⬜ | |
| `comment` | String | 备注 | ⬜ | |
| `parentContractId` | Long | 合同ID | ⬜ | |
| `standard` | Boolean | 标准 | ⬜ | |
| `clmsTemplateCode` | String | 模板编码 | ⬜ | |
| `clmsBizType` | String | clms业务类型 | ⬜ | |
| `clmsContractNo` | String | 合同编号 | ⬜ | |
| `contractNoSource` | ContractNoSource | 合同编号来源 | ⬜ | |
| `allSigned` | Boolean | 全部已签署 | ⬜ | |
| `sealType` | String | 印章类型 | ⬜ | |
| `legalAdviserAccount` | String | 法务数量 | ⬜ | |
| `legalAdviserName` | String | 法务名称 | ⬜ | |
| `mainParty` | ContractPartyEntity | 主参与方 | ⬜ | |
| `vendorParty` | ContractPartyEntity | 供应商参与方 | ⬜ | |
| `partySigningStrategy` | PartySigningStrategy | 参与方签署策略 | ⬜ | |
| `originalText` | ContractTextFileVO | 原始文本 | ⬜ | |
| `unsignedText` | ContractTextFileVO | 未签署文本 | ⬜ | |
| `signedText` | ContractTextFileVO | 已签署文本 | ⬜ | |
| `agreementPart` | AgreementContractPartEntity | 协议部分 | ⬜ | |
| `purchasePart` | PurchaseContractPartEntity | 采购部分 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryAffiliation` | String | GPS品类归属 | ⬜ | |
| `coverage` | ContractCoverageVO | coverage | ⬜ | |
| `gpsContractNo` | String | GPS合同编号 | ⬜ | |
| `gpsContractVersion` | String | GPS合同版本 | ⬜ | |
| `frameworkContractInjector` | FrameworkContractInjector | 框架合同注入器 | ⬜ | |
| `dispatchChannel` | DispatchChannelEnum | 是channel | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `parentContractId` | Long | 合同ID | ⬜ | |
| `gpsContractNo` | String | GPS合同编号 | ⬜ | |
| `clmsContractNo` | String | 合同编号 | ⬜ | |
| `contractNoSource` | ContractNoSource | 合同编号来源 | ⬜ | |
| `mainStatus` | FrameworkContractMainStatusEnum | 主状态 | ⬜ | |
| `createStatus` | FrameworkCreateStatusEnum | 创建状态 | ⬜ | |
| `legalAuditStatus` | FrameworkContractAuditStatusEnum | 法务审核状态 | ⬜ | |
| `businessAuditStatus` | FrameworkContractAuditStatusEnum | BU审核状态 | ⬜ | |
| `signStatus` | FrameworkContractSignStatusEnum | 签署状态 | ⬜ | |
| `dimension` | FrameworkContractDimensionVO | 维度 | ⬜ | |
| `extend` | FrameworkContractExtendVO | extend | ⬜ | |
| `buyer` | FrameworkContractBuyerVO | 采购员 | ⬜ | |
| `owner` | FrameworkContractOwnerVO | 所属人 | ⬜ | |
| `legalAdviser` | FrameworkLegalAdviserVO | 法务顾问 | ⬜ | |
| `partyExtend` | FrameworkContractPartyExtendVO | 参与方 | ⬜ | |
| `mainParty` | FrameworkContractPartyVO | 主参与方 | ⬜ | |
| `vendorParty` | FrameworkContractPartyVO | 供应商参与方 | ⬜ | |
| `purchase` | FrameworkPurchaseVO | 采购 | ⬜ | |
| `error` | FrameworkErrorVO | error | ⬜ | |
| `contractText` | FrameworkContractTextEntity | 合同文本 | ⬜ | |
| `sudContractCreate` | MpSceneVO | sud合同创建 | ⬜ | |
| `sudContractExtendToSudContract` | MpSceneVO | sud合同总计sud合同 | ⬜ | |
| `sudContractExtendToCopilotContract` | MpSceneVO | sud合同总计copilot合同 | ⬜ | |
| `dbContractCreate` | MpSceneVO | DB合同创建 | ⬜ | |
| `sudContractEcrChange` | MpSceneVO | sud合同ecr变更 | ⬜ | |
| `dbContractEcrChange` | MpSceneVO | DB合同ecr变更 | ⬜ | |
| `dbContractPriceChange` | MpSceneVO | DB合同价格变更 | ⬜ | |
| `sudContractPriceChange` | MpSceneVO | sud合同价格变更 | ⬜ | |
| `sudContractManualChange` | MpSceneVO | sud合同manual变更 | ⬜ | |
| `dbContractManualChange` | MpSceneVO | DB合同manual变更 | ⬜ | |
| `sudContractPaymentTermsChange` | MpSceneVO | sud合同支付terms变更 | ⬜ | |
| `sudContractLcrChange` | MpSceneVO | sud合同lcr变更 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `gpsContractCategoryCode` | String | 合同编码 | ⬜ | |
| `contractCategoryName` | ContractLocaleString | 合同名称 | ⬜ | |
| `contractAttachmentTypeName` | ContractLocaleString | 类型名称 | ⬜ | |
| `contractAttachmentTypeCode` | String | 类型编码 | ⬜ | |
| `available` | Boolean | available | ⬜ | |
| `required` | Boolean | required | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `sequence` | Integer | 序列 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `expenseTypeCode` | String | 类型编码 | ⬜ | |
| `expenseTypeName` | ContractLocaleString | 类型名称 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `expenseTypeNameZh` | String | 名称中文 | ⬜ | |
| `expenseTypeNameEn` | String | 名称英文 | ⬜ | |
| `sequence` | Integer | 序列 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `legalAdviserAccount` | String | 法务数量 | ⬜ | |
| `legalAdviserName` | String | 法务名称 | ⬜ | |
| `legalAdviserEmail` | String | 法务顾问邮箱 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `sequence` | Integer | 序列 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `contractType` | ContractType | 合同类型 | ⬜ | |
| `gpsContractCategoryCode` | String | 合同编码 | ⬜ | |
| `contractCategoryName` | ContractLocaleString | 合同名称 | ⬜ | |
| `importedSapContractCode` | String | 合同编码 | ⬜ | |
| `nonImportedSapContractCode` | String | 编号编码 | ⬜ | |
| `sapInterfaceType` | SapInterfaceType | SAPCE类型 | ⬜ | |
| `syncToSap` | Boolean | 同步总计SAP | ⬜ | |
| `reviewedSyncToSap` | Boolean | reviewed同步总计SAP | ⬜ | |
| `effectiveMethod` | EffectiveMethod | 生效method | ⬜ | |
| `nexusConfirmMessage` | String | nexusconfirm消息 | ⬜ | |
| `syncToPo` | Boolean | 同步总计采购订单 | ⬜ | |
| `allowExtendCompany` | Boolean | 全部公司 | ⬜ | |
| `allowExtendMainParty` | Boolean | 全部主参与方 | ⬜ | |
| `allowChange` | Boolean | 全部变更 | ⬜ | |
| `allowCompensation` | Boolean | 全部 | ⬜ | |
| `clmsSyncStrategy` | ClmsSyncStrategyType | clms同步策略 | ⬜ | |
| `workflowAuditCondition` | WorkflowAuditConditionType | 工作流审核condition | ⬜ | |
| `requireMaterial` | Boolean | require物料 | ⬜ | |
| `allowManualSetPrice` | Boolean | 全部价格 | ⬜ | |
| `requireSendEcrChangeNotice` | Boolean | require发送ecr变更编号 | ⬜ | |
| `enableExpirationNotice` | Boolean | expiration编号 | ⬜ | |
| `expirationNoticeBeforeDays` | Integer | expiration编号之前days | ⬜ | |
| `expirationNoticeFrequency` | Integer | expiration编号 | ⬜ | |
| `requireAssociatePr` | Boolean | requireassociate采购申请 | ⬜ | |
| `sapProcessSign` | String | SAP流程签署 | ⬜ | |
| `partyCountType` | PartyCountType | 参与方账号类型 | ⬜ | |
| `partySigningStrategy` | PartySigningStrategy | 参与方签署策略 | ⬜ | |
| `sapDeliveryMethodCode` | String | SAP编码 | ⬜ | |
| `lease` | Boolean | lease | ⬜ | |
| `selectable` | Boolean | TA | ⬜ | |
| `priceType` | PriceType | 价格类型 | ⬜ | |
| `visible` | Boolean | 可见 | ⬜ | |
| `sapPurchaseGroupNo` | String | 采购编号 | ⬜ | |
| `sapMaterialGroupNo` | String | 物料编号 | ⬜ | |
| `terminationAgreement` | Boolean | 最小协议 | ⬜ | |
| `requireDisplayRelatedContracts` | Boolean | require是相关合同 | ⬜ | |
| `allowDisplayInRelatedContracts` | Boolean | 全部是提名相关合同 | ⬜ | |
| `requireGenerateSapContractNo` | Boolean | 比率编号 | ⬜ | |
| `requireGeneratePurchaseOrderNo` | Boolean | 比率编号 | ⬜ | |
| `allowShare` | Boolean | 全部share | ⬜ | |
| `optionalCompanyScope` | CompanyScope | optional公司scope | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `autoStartSign` | Boolean | 自动开始签署 | ⬜ | |
| `contractCategoryNameZh` | String | 名称中文 | ⬜ | |
| `contractCategoryNameEn` | String | 名称英文 | ⬜ | |
| `sapGiftSyncStrategy` | SapGiftSyncStrategy | SAPgift同步策略 | ⬜ | |
| `sequence` | Integer | 序列 | ⬜ | |
| `uniqueFields` | UniqueFieldsVO | uniquefields | ⬜ | |
| `effectImmediatelyAfterSignOff` | Boolean | 生效immediately后续签署线下 | ⬜ | |
| `gpsContractNoPrefix` | String | GPS合同编号采购申请 | ⬜ | |
| `contractExcelTemplate` | ContractExcelTemplateVO | 合同CE模板 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `gpsContractCategoryCode` | String | 合同编码 | ⬜ | |
| `contractCategoryName` | ContractLocaleString | 合同名称 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `countryCode` | String | 数量编码 | ⬜ | |
| `factoryConfig` | FactoryConfigVO | 工厂配置 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `purchaseOrganizationCode` | String | 采购编码 | ⬜ | |
| `sequence` | Integer | 序列 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `gpsContractCategoryCode` | String | 合同编码 | ⬜ | |
| `contractCategoryName` | ContractLocaleString | 合同名称 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `sapWbsCode` | String | SAP编码 | ⬜ | |
| `sapWbsName` | ContractLocaleString | SAP名称 | ⬜ | |
| `sapWbsProjectClass` | String | SAPwbs项目类别 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `sequence` | Integer | 序列 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `leaseCategoryCode` | String | 品类编码 | ⬜ | |
| `leaseCategoryNameZh` | String | 名称中文 | ⬜ | |
| `leaseCategoryNameEn` | String | 名称英文 | ⬜ | |
| `paymentCategoryCode` | String | 英文编码 | ⬜ | |
| `requireSubjectMatter` | Boolean | require科目matter | ⬜ | |
| `leaseMonths` | Integer | leasemonths | ⬜ | |
| `requireAnswerQuestion` | Boolean | requireanswerquestion | ⬜ | |
| `available` | Boolean | available | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `defaultGeneralLedgerAccountNo` | String | 数量编号 | ⬜ | |
| `sequence` | Integer | 序列 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `planCode` | String | 计划编码 | ⬜ | |
| `preCbStageCoef` | BigDecimal | 采购申请cb阶段coef | ⬜ | |
| `cbStageCoef` | BigDecimal | cb阶段coef | ⬜ | |
| `vbStageCoef` | BigDecimal | vb阶段coef | ⬜ | |
| `ttStageCoef` | BigDecimal | 附件阶段coef | ⬜ | |
| `ppStageCoef` | BigDecimal | 供应商阶段coef | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `settleCompanyCode` | String | 公司编码 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `gpsContractCategoryCode` | String | 合同编码 | ⬜ | |
| `contractCategoryName` | ContractLocaleString | 合同名称 | ⬜ | |
| `createProcessCode` | String | 创建编码 | ⬜ | |
| `cancelProcessCode` | String | 流程编码 | ⬜ | |
| `changeProcessCode` | String | 流程编码 | ⬜ | |
| `requireMaintenanceFinanceInfo` | Boolean | require财务信息 | ⬜ | |
| `sequence` | Integer | 序列 | ⬜ | |
| `customScript` | String | custom描述 | ⬜ | |
| `callbackScript` | String | 全部描述 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `clmsTemplateCode` | String | 模板编码 | ⬜ | |
| `clmsTemplateName` | String | 模板名称 | ⬜ | |
| `gpsContractCategoryCode` | String | 合同编码 | ⬜ | |
| `contractCategoryName` | ContractLocaleString | 合同名称 | ⬜ | |
| `clmsTemplateLang` | String | clms模板lang | ⬜ | |
| `customScript` | String | custom描述 | ⬜ | |
| `partySigningStrategy` | PartySigningStrategy | 参与方签署策略 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `sequence` | Integer | 序列 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `changeSceneCode` | String | 英文编码 | ⬜ | |
| `changeSceneName` | String | 英文名称 | ⬜ | |
| `gpsContractCategoryCode` | String | 合同编码 | ⬜ | |
| `changeMethod` | ContractChangeSceneMethodType | 变更method | ⬜ | |
| `changeAllWithSameSapContractNo` | Boolean | 合同编号 | ⬜ | |
| `sapSyncStrategy` | ContractChangeSapSyncStrategyType | SAP同步策略 | ⬜ | |
| `customScript` | String | custom描述 | ⬜ | |
| `callbackScript` | String | 全部描述 | ⬜ | |
| `flowCode` | String | 流程编码 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `gpsContractCategoryCode` | String | 合同编码 | ⬜ | |
| `sequence` | Integer | 序列 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |

---

### 10. PurchaseOrderEntity

**标准化名称**: `purchaseorder`

**层级**: L1-Core

**类别**: 订单相关

**推理中文含义**: 采购订单

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.order.domain.purchaseorder`

**文件路径**: `com/nio/srm/gps/order/domain/purchaseorder/PurchaseOrderEntity.java`

**关系统计**:

- 总关系数: 60
- 出向关系: 43
- 入向关系: 17

**出向关系类型**:

- `involves_create`: 2
- `involves_delete`: 2
- `involves_other`: 3
- `involves_query`: 2
- `involves_update`: 4
- `publishes`: 4
- `queries_find`: 10
- `queries_findBy`: 6
- `queries_other`: 4
- `queries_select`: 2
- `triggers_unknown`: 4

**入向关系类型**:

- `involves_create`: 2
- `involves_delete`: 2
- `involves_other`: 3
- `involves_query`: 2
- `involves_update`: 4
- `queries_find`: 2
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `operator` | String | 操作人 | ⬜ | |
| `requestId` | String | 申请ID | ⬜ | |
| `contractTargetAmount` | BigDecimal | 合同金额 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `bizBu` | BizBuEnum | 业务BU | ⬜ | |
| `bizSource` | POBizSourceEnum | 业务来源 | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `applicantName` | String | 申请人名称 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `applyNo` | String | 申请编号 | ⬜ | |
| `applyDate` | LocalDateTime | 申请日期 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `companyName` | String | 公司名称 | ⬜ | |
| `demandDepartmentCode` | String | 需求编码 | ⬜ | |
| `demandDepartmentName` | String | 需求名称 | ⬜ | |
| `costCenterCode` | String | 成本中心编码 | ⬜ | |
| `createType` | POCreateTypeEnum | 创建类型 | ⬜ | |
| `orderType` | String | 订单类型 | ⬜ | |
| `orderTypeName` | String | 类型名称 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `contractType` | POContractTypeEnum | 合同类型 | ⬜ | |
| `gpsContractNo` | String | GPS合同编号 | ⬜ | |
| `gpsContractCategoryCode` | String | 合同编码 | ⬜ | |
| `gpsContractName` | String | 合同名称 | ⬜ | |
| `tradeType` | String | 贸易类型 | ⬜ | |
| `paymentPeriod` | String | 支付周期 | ⬜ | |
| `status` | POStatusEnum | 状态 | ⬜ | |
| `vendorStatus` | POVendorStatusEnum | 供应商状态 | ⬜ | |
| `purchaseTotalNetAmount` | BigDecimal | 采购净金额总计 | ⬜ | |
| `purchaseTotalIncludeTaxAmount` | BigDecimal | 采购含税金额总计 | ⬜ | |
| `domesticTotalNetAmount` | BigDecimal | 国内净金额总计 | ⬜ | |
| `domesticTotalIncludeTaxAmount` | BigDecimal | 国内含税金额总计 | ⬜ | |
| `purchaseTotalTaxAmount` | BigDecimal | 采购税额总计 | ⬜ | |
| `domesticTotalTaxAmount` | BigDecimal | 国内税额总计 | ⬜ | |
| `sapVoucherNo` | String | SAP编号 | ⬜ | |
| `receiptStatus` | POReceiptStatusEnum | 收货状态 | ⬜ | |
| `paymentStatus` | POPaymentStatusEnum | 支付状态 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `gpsCategoryId` | Long | GPS品类ID | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `needCreatePr` | Boolean | 是否需要创建 | ⬜ | |
| `workflowTaskEntity` | WorkflowTaskEntity | 工作流任务 | ⬜ | |
| `auditStatus` | WorkflowApproveStatusEnum | 审核状态 | ⬜ | |
| `wfProcessId` | String | 工作流流程ID | ⬜ | |
| `purchaseOrderRepository` | IPurchaseOrderRepository | 采购订单仓储 | ⬜ | |
| `workflowTaskRepository` | IWorkflowTaskRepository | 工作流任务仓储 | ⬜ | |
| `workflowServiceFacade` | WorkflowServiceFacade | 工作流服务门面 | ⬜ | |
| `workflowFactory` | WorkflowFactory | 工作流工厂 | ⬜ | |
| `fileDownloadAddress` | String | 文件下载地址 | ⬜ | |
| `goodsReceiptRepository` | GoodsReceiptRepository | 货物收货仓储 | ⬜ | |
| `fileRepository` | IFileRepository | 文件仓储 | ⬜ | |
| `sapServiceFacade` | SapServiceFacade | SAP服务门面 | ⬜ | |
| `sapAdapter` | SapAdapter | SAP适配器 | ⬜ | |
| `sapAcoFactory` | SapAcoFactory | SAPACO工厂 | ⬜ | |
| `generateSignUrlUtil` | GenerateSignUrlUtil | 生成签署URL工具 | ⬜ | |
| `eventPublisher` | DomainEventPublisher | 发布者 | ⬜ | |
| `operationLogServiceFacade` | OperationLogServiceFacade | operation日志服务门面 | ⬜ | |
| `emailSendingService` | EmailSendingService | 邮箱服务 | ⬜ | |
| `notifyFacade` | NotifyFacade | 通知门面 | ⬜ | |
| `messageFactory` | MessageFactory | 消息工厂 | ⬜ | |
| `purchaseOrderDetailConverter` | PurchaseOrderDetailConverter | 采购订单明细转换器 | ⬜ | |
| `purchaseContractServiceFacade` | PurchaseContractServiceFacade | 采购合同服务门面 | ⬜ | |
| `vendorServiceFacade` | VendorServiceFacade | 供应商服务门面 | ⬜ | |
| `purchaseRequestServiceFacade` | PurchaseRequestServiceFacade | 采购申请服务门面 | ⬜ | |
| `messageVOFactory` | OrderProjectEvaluationVOFactory | 消息凭证工厂 | ⬜ | |
| `goodsReceiptExtMapper` | GoodsReceiptExtMapper | 货物收货扩展映射器 | ⬜ | |
| `workflowTaskExtMapper` | WorkflowTaskExtMapper | 工作流任务扩展映射器 | ⬜ | |

---

### 11. GoodsReceiptEntity

**标准化名称**: `goodsreceipt`

**层级**: L1-Core

**类别**: 订单相关

**推理中文含义**: 收货单

**当前描述**: 是否删除

**包路径**: `com.nio.srm.gps.order.domain.goodsreceipt`

**文件路径**: `com/nio/srm/gps/order/domain/goodsreceipt/GoodsReceiptEntity.java`

**关系统计**:

- 总关系数: 58
- 出向关系: 37
- 入向关系: 21

**出向关系类型**:

- `involves_create`: 1
- `involves_delete`: 1
- `involves_other`: 2
- `involves_update`: 1
- `publishes`: 12
- `queries_find`: 2
- `queries_get`: 2
- `queries_getBy`: 2
- `queries_list`: 2
- `queries_other`: 12

**入向关系类型**:

- `involves_create`: 1
- `involves_delete`: 1
- `involves_other`: 2
- `involves_update`: 1
- `queries_find`: 2
- `queries_get`: 2
- `queries_list`: 2
- `queries_other`: 10

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `requestId` | String | 申请ID | ⬜ | |
| `operator` | String | 操作人 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `bizBu` | BizBuEnum | 业务BU | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `applicantName` | String | 申请人名称 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `applyNo` | String | 申请编号 | ⬜ | |
| `applyDate` | LocalDateTime | 申请日期 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `companyName` | String | 公司名称 | ⬜ | |
| `receiptDepartmentCode` | String | 收货部门编码 | ⬜ | |
| `receiptDepartmentName` | String | 收货部门名称 | ⬜ | |
| `costCenterCode` | String | 成本中心编码 | ⬜ | |
| `totalReceiptedNetAmount` | BigDecimal | 已收货净金额总计 | ⬜ | |
| `totalReceiptedTaxAmount` | BigDecimal | 已收货税额总计 | ⬜ | |
| `totalWithTaxReceiptedAmount` | BigDecimal | 已收货含税金额总计 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `purchaseOrderNo` | String | 订单编号 | ⬜ | |
| `purchaseOrderType` | String | 采购订单类型 | ⬜ | |
| `gpsContractNo` | String | GPS合同编号 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `tradeType` | String | 贸易类型 | ⬜ | |
| `paymentPeriod` | String | 支付周期 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `gpsCategoryId` | Long | GPS品类ID | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `domesticTotalNetAmount` | BigDecimal | 国内净金额总计 | ⬜ | |
| `domesticTotalTaxAmount` | BigDecimal | 国内税额总计 | ⬜ | |
| `domesticTotalIncludeTaxAmount` | BigDecimal | 国内含税金额总计 | ⬜ | |
| `sapReceiptVoucherCode` | String | SAP收货凭证编码 | ⬜ | |
| `sapPostingStatus` | String | SAP过账状态 | ⬜ | |
| `sapPostingDate` | LocalDate | SAP过账日期 | ⬜ | |
| `status` | GRStatusEnum | 状态 | ⬜ | |
| `receiptType` | GRReceiptTypeEnum | 收货类型 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `workflowTaskEntity` | WorkflowTaskEntity | 工作流任务 | ⬜ | |
| `auditStatus` | WorkflowApproveStatusEnum | 审核状态 | ⬜ | |
| `wfProcessId` | String | 工作流流程ID | ⬜ | |
| `requestLogEntity` | RequestLogEntity | 申请日志 | ⬜ | |
| `workflowServiceFacade` | WorkflowServiceFacade | 工作流服务门面 | ⬜ | |
| `workflowFactory` | WorkflowFactory | 工作流工厂 | ⬜ | |
| `messageFactory` | MessageFactory | 消息工厂 | ⬜ | |
| `workflowTaskRepository` | IWorkflowTaskRepository | 工作流任务仓储 | ⬜ | |
| `requestLogRepository` | IRequestLogRepository | 申请日志仓储 | ⬜ | |
| `workflowConverter` | WorkflowConverter | 工作流转换器 | ⬜ | |
| `goodsReceiptRepository` | IGoodsReceiptRepository | 货物收货仓储 | ⬜ | |
| `purchaseOrderRepository` | PurchaseOrderRepository | 采购订单仓储 | ⬜ | |
| `fileRepository` | IFileRepository | 文件仓储 | ⬜ | |
| `sapAcoFactory` | SapAcoFactory | SAPACO工厂 | ⬜ | |
| `sapServiceFacade` | SapServiceFacade | SAP服务门面 | ⬜ | |
| `eventPublisher` | DomainEventPublisher | 发布者 | ⬜ | |
| `operationLogServiceFacade` | OperationLogServiceFacade | operation日志服务门面 | ⬜ | |
| `generateSignUrlUtil` | GenerateSignUrlUtil | 生成签署URL工具 | ⬜ | |
| `mainDataFacade` | MainDataFacade | 主数据门面 | ⬜ | |
| `notifyFacade` | NotifyFacade | 通知门面 | ⬜ | |
| `purchaseOrderExtMapper` | PurchaseOrderExtMapper | 采购订单扩展映射器 | ⬜ | |

---

### 12. WorkflowTaskEntity

**标准化名称**: `workflowtask`

**层级**: L1-Core

**类别**: 审批流相关

**推理中文含义**: 工作流任务

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.order.domain.workflow`

**文件路径**: `com/nio/srm/gps/order/domain/workflow/WorkflowTaskEntity.java`

**关系统计**:

- 总关系数: 46
- 出向关系: 19
- 入向关系: 27

**出向关系类型**:

- `involves_other`: 1
- `queries_find`: 6
- `queries_findBy`: 2
- `queries_get`: 4
- `queries_list`: 2
- `queries_other`: 4

**入向关系类型**:

- `involves_other`: 3
- `involves_update`: 2
- `queries_get`: 4
- `queries_other`: 4
- `triggers_create`: 2
- `triggers_unknown`: 12

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `bizSourceId` | Long | 来源ID | ⬜ | |
| `requestId` | String | 申请ID | ⬜ | |
| `bizEventType` | RequestEventTypeEnum | 业务类型 | ⬜ | |
| `bizCode` | String | 业务编码 | ⬜ | |
| `subBizCode` | String | 业务编码 | ⬜ | |
| `processId` | String | 流程ID | ⬜ | |
| `auditStatus` | WorkflowApproveStatusEnum | 审核状态 | ⬜ | |
| `auditTime` | LocalDateTime | 审核时间 | ⬜ | |
| `legalProcessId` | String | 法务ID | ⬜ | |
| `legalAuditStatus` | WorkflowApproveStatusEnum | 法务审核状态 | ⬜ | |
| `legalAuditTime` | LocalDateTime | 审核时间 | ⬜ | |
| `operatorEnum` | OperatorEnum | 操作人 | ⬜ | |
| `workflowTaskRepository` | WorkflowTaskRepository | 工作流任务仓储 | ⬜ | |

---

### 13. DpMaterialEntity

**标准化名称**: `material`

**层级**: L1-Core

**类别**: 物料相关

**推理中文含义**: 物料

**当前描述**: 融合实体（合并了3个实体: DpMaterialEntity, BrMaterialEntity, MaterialCommonEntity）

**包路径**: `com.nio.srm.gps.material.domain.material.dp`

**文件路径**: `com/nio/srm/gps/material/domain/material/dp/DpMaterialEntity.java`

**关系统计**:

- 总关系数: 87
- 出向关系: 24
- 入向关系: 12

**出向关系类型**:

- `involves_compute`: 2
- `involves_convert`: 3
- `involves_create`: 10
- `involves_move`: 1
- `involves_other`: 6
- `involves_query`: 7
- `involves_update`: 2
- `queries_other`: 9
- `queries_queryBy`: 12
- `queries_select`: 2

**入向关系类型**:

- `involves_compute`: 2
- `involves_convert`: 2
- `involves_create`: 4
- `involves_move`: 1
- `involves_other`: 7
- `involves_query`: 6
- `queries_other`: 9
- `queries_select`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `accessoryFlag` | Boolean | 访问标志 | ⬜ | |
| `actualWeight` | BigDecimal | 实际weight | ⬜ | |
| `appliedMaterial` | String | applied物料 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `changeRelatedObject` | String | 变更相关object | ⬜ | |
| `colorCode` | String | color编码 | ⬜ | |
| `colorPartFlag` | Boolean | color部分标志 | ⬜ | |
| `criticalPart` | String | critical部分 | ⬜ | |
| `department` | String | 部门 | ⬜ | |
| `drawing` | String | drawing | ⬜ | |
| `enPartName` | String | 英文名称 | ⬜ | |
| `extInfoVO` | BrMaterialExtInfoVO | 扩展信息凭证 | ⬜ | |
| `extInfoVO` | DpMaterialExtInfoVO | 扩展信息凭证 | ⬜ | |
| `gauge` | String | gauge | ⬜ | |
| `gpsCategory` | String | GPS品类 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `hasConsignment` | String | 是否有签署 | ⬜ | |
| `hasDB` | Boolean | 是否有DB | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `initialProgram` | String | initial采购申请 | ⬜ | |
| `isColorPart` | Boolean | 是否部分 | ⬜ | |
| `jitJisPullFlag` | Boolean | jit是pull标志 | ⬜ | |
| `lifeCycleState` | String | lifecycleTA | ⬜ | |
| `longTermFlag` | Boolean | longterm标志 | ⬜ | |
| `manufacture` | String | manufacture | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `materialRepository` | IDpMaterialRepository | 物料仓储 | ⬜ | |
| `mpn` | String | mpn | ⬜ | |
| `organization` | String | organization | ⬜ | |
| `packaging` | String | packaging | ⬜ | |
| `partNumber` | String | 部分编号 | ⬜ | |
| `partitionCode` | String | 部分编码 | ⬜ | |
| `previousVersionMaterial` | DpMaterialEntity | 采购申请版本物料 | ⬜ | |
| `relatedMaterialCode` | String | 物料编码 | ⬜ | |
| `releaseDate` | LocalDateTime | release日期 | ⬜ | |
| `releasePhase` | String | release有 | ⬜ | |
| `responsibleEngineer` | String | 采购订单 | ⬜ | |
| `responsibleSte` | String | 采购订单ste | ⬜ | |
| `revision` | String | 是 | ⬜ | |
| `serviceBuyCode` | String | BU编码 | ⬜ | |
| `sesDataSource` | String | ses数据来源 | ⬜ | |
| `sesMaterialGroup` | String | ses物料分组 | ⬜ | |
| `status` | Boolean | 状态 | ⬜ | |
| `status` | MaterialStatus | 状态 | ⬜ | |
| `systemSource` | MaterialSystemSource | system来源 | ⬜ | |
| `systemSource` | String | system来源 | ⬜ | |
| `toolingLife` | Integer | 工具life | ⬜ | |
| `toolingType` | String | 工具类型 | ⬜ | |
| `typeOfTraceability` | String | 类型线下CE | ⬜ | |
| `unitOfMeasure` | String | 单位线下计量 | ⬜ | |
| `unitOfMeasureDesc` | String | 计量描述 | ⬜ | |
| `unitWeight` | BigDecimal | 单位weight | ⬜ | |
| `zhPartName` | String | 中文名称 | ⬜ | |

---

---

> 回到 → [[NIO|🚗 蔚来]]
