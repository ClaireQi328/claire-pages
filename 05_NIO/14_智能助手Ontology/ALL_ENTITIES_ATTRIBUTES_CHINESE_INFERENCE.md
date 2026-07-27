---
created: '2026-07-24'
tags: [NIO, AI]
---

---tags: [NIO]
created: 2026-07-08
updated: 2026-07-22
status: draft
---
> [!summary] GPS系统所有实体和属性中文含义推理文档
> - **核心**：1. 本文档包含实体的中文含义推理结果 2. 每个实体包含其所有属性的中文含义推理 3. 推理结果可能存在不准确之处，需要人工校验和修正 4. 修正后的结果可以用于更新实体描述和属性注释 5. 本文档


# GPS系统所有实体和属性中文含义推理文档

> 本文档包含所有实体（L1-Core、L2-Supporting、L3-ValueObject）和属性的中文含义推理结果，供人工校验和修正使用。

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

- **实体总数**: 300
- **L1-Core核心实体**: 13
- **L2-Supporting支撑实体**: 287
- **L3-ValueObject值对象**: 0


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

## 支撑实体 (L2-Supporting)

### 1. AccessDraftEntity

**标准化名称**: `accessdraft`

**层级**: L2-Supporting

**推理中文含义**: 访问

**当前描述**: @author kaeya.zhang

**包路径**: `com.nio.srm.gps.vendor.domain.access.draft.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/draft/entity/AccessDraftEntity.java`

**关系统计**:

- 总关系数: 6
- 出向关系: 3
- 入向关系: 3

**出向关系类型**:

- `involves_create`: 1
- `involves_validate`: 1
- `queries_get`: 1

**入向关系类型**:

- `involves_create`: 1
- `involves_validate`: 1
- `queries_get`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `accessTemplateId` | Long | 模板ID | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryLevel` | Integer | GPS品类level | ⬜ | |
| `gpsCategoryAffiliation` | String | GPS品类归属 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `accessType` | AccessTypeEnum | 访问类型 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `note` | String | 编号 | ⬜ | |
| `accessDraftRepository` | IAccessDraftRepository | 访问draft仓储 | ⬜ | |
| `accessTemplateRepository` | AccessTemplateRepository | 访问模板仓储 | ⬜ | |
| `vendorInfoFacade` | VendorInfoFacade | 供应商信息门面 | ⬜ | |
| `accessDraftConvertor` | AccessDraftConvertor | 访问draftconvertor | ⬜ | |
| `fileFacade` | FileFacade | 文件门面 | ⬜ | |
| `assessInfraService` | AssessInfraServiceImpl | assessinfra服务 | ⬜ | |
| `vendorWhiteListFacade` | VendorWhiteListFacade | 供应商white列表门面 | ⬜ | |

---

### 2. AccessMaterialTemplateEntity

**标准化名称**: `accessmaterialtemplate`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 准入资料模版

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/AccessMaterialTemplateEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 1
- 入向关系: 1

**出向关系类型**:

- `queries_other`: 1

**入向关系类型**:

- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |

---

### 3. AccessTemplateCategoryHistoryVersionDetailEntity

**标准化名称**: `accesstemplatecategoryhistoryversiondetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: 

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/AccessTemplateCategoryHistoryVersionDetailEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `level` | Integer | level | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `isDeleted` | Integer | 是否删除 | ⬜ | |

---

### 4. AccessTemplateHistoryVersionDetailEntity

**标准化名称**: `accesstemplatehistoryversiondetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: 

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/AccessTemplateHistoryVersionDetailEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `templateCode` | String | 模板编码 | ⬜ | |
| `templateName` | String | 模板名称 | ⬜ | |
| `templateId` | Long | 模板ID | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `applyRules` | VendorAccessTemplateApplyRulesEntity | 申请rules | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `isDeleted` | Integer | 是否删除 | ⬜ | |

---

### 5. AccessTemplateItemHistoryVersionDetailEntity

**标准化名称**: `accesstemplateitemhistoryversiondetail`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: 

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/AccessTemplateItemHistoryVersionDetailEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `assessName` | String | assess名称 | ⬜ | |
| `dimensionType` | String | 维度类型 | ⬜ | |
| `assessMode` | String | assess模式 | ⬜ | |
| `assessUserAccount` | String | 用户数量 | ⬜ | |
| `unqualifiedSetting` | String | unqualified设置 | ⬜ | |
| `resultPeriodValidity` | String | result周期ID | ⬜ | |
| `deviationPeriodValidity` | String | 偏差周期ID | ⬜ | |
| `uploadAttachLeastNum` | Integer | 已上传附件least编号 | ⬜ | |
| `note` | String | 编号 | ⬜ | |
| `accessMaterials` | String | 访问物料 | ⬜ | |
| `assessTemplateFileId` | Long | 文件ID | ⬜ | |
| `assessTemplateFileUuid` | String | 文件ID | ⬜ | |
| `assessTemplateFileName` | String | 文件名称 | ⬜ | |
| `isAffectAccessStatus` | Boolean | 是否状态 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `isDeleted` | Integer | 是否删除 | ⬜ | |

---

### 6. AccessVendorEntity

**标准化名称**: `accessvendor`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @description: 准入的合作伙伴清单

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/AccessVendorEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorId` | Long | 供应商ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `stage` | VendorStageEnum | 阶段 | ⬜ | |
| `status` | VendorStatusEnum | 状态 | ⬜ | |
| `assessManufactureInfo` | AssessManufacturerEntity | assessmanufacture信息 | ⬜ | |

---

### 7. AccountingVehicleUpdateEntity

**标准化名称**: `accountingvehicleupdate`

**层级**: L2-Supporting

**推理中文含义**: 日期

**当前描述**: 业务来源 RFQ/PDATA (定位需更新的单据)

**包路径**: `com.nio.srm.gps.cost.domain.estimation.dto`

**文件路径**: `com/nio/srm/gps/cost/domain/estimation/dto/AccountingVehicleUpdateEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `taskBizSource` | String | 任务业务来源 | ⬜ | |
| `taskSourceNo` | String | 任务编号 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |

---

### 8. AdBomConfigEntity

**标准化名称**: `adbomconfig`

**层级**: L2-Supporting

**推理中文含义**: 配置

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.bomconfig`

**文件路径**: `com/nio/srm/gps/material/domain/bomconfig/AdBomConfigEntity.java`

**关系统计**:

- 总关系数: 32
- 出向关系: 24
- 入向关系: 8

**出向关系类型**:

- `involves_create`: 4
- `involves_delete`: 1
- `involves_other`: 2
- `involves_update`: 1
- `queries_exists`: 2
- `queries_other`: 12
- `queries_queryBy`: 2

**入向关系类型**:

- `involves_create`: 2
- `involves_other`: 1
- `involves_update`: 1
- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `phase` | String | 有 | ⬜ | |
| `year` | Integer | year | ⬜ | |
| `versionId` | Integer | 版本ID | ⬜ | |
| `version` | String | 版本号 | ⬜ | |
| `releaseDate` | String | release日期 | ⬜ | |
| `status` | AdBomConfigStatus | 状态 | ⬜ | |

---

### 9. AdBomConfigDetailEntity

**标准化名称**: `adbomconfigdetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.bomconfig`

**文件路径**: `com/nio/srm/gps/material/domain/bomconfig/AdBomConfigDetailEntity.java`

**关系统计**:

- 总关系数: 11
- 出向关系: 2
- 入向关系: 9

**出向关系类型**:

- `involves_create`: 1
- `involves_update`: 1

**入向关系类型**:

- `involves_create`: 3
- `involves_delete`: 1
- `involves_other`: 1
- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `adBomId` | Long | DBID | ⬜ | |
| `gpsMaterialCode` | String | 物料编码 | ⬜ | |
| `year` | Integer | year | ⬜ | |

---

### 10. AfterSalesVendorWhiteListAggregate

**标准化名称**: `aftersalesvendorwhitelist`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 

**包路径**: `com.nio.srm.gps.contract.domain.aggregate`

**文件路径**: `com/nio/srm/gps/contract/domain/aggregate/AfterSalesVendorWhiteListAggregate.java`

**关系统计**:

- 总关系数: 10
- 出向关系: 5
- 入向关系: 5

**出向关系类型**:

- `involves_other`: 2
- `queries_other`: 3

**入向关系类型**:

- `involves_other`: 2
- `queries_other`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `available` | Boolean | available | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 11. AgreementContractPartEntity

**标准化名称**: `agreementcontractpart`

**层级**: L2-Supporting

**推理中文含义**: 合同

**当前描述**: 协议合同聚合根

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/AgreementContractPartEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `contractId` | Long | 合同ID | ⬜ | |
| `extInfo` | ExtInfo | 扩展信息 | ⬜ | |

---

### 12. AiMeetingEntity

**标准化名称**: `aimeeting`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: @Author Muhouer

**包路径**: `com.nio.srm.gps.meeting.domain.ai`

**文件路径**: `com/nio/srm/gps/meeting/domain/ai/AiMeetingEntity.java`

**关系统计**:

- 总关系数: 35
- 出向关系: 16
- 入向关系: 19

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 7
- `involves_update`: 3
- `involves_validate`: 1
- `queries_other`: 1
- `queries_queryBy`: 3

**入向关系类型**:

- `involves_create`: 2
- `involves_other`: 10
- `involves_update`: 5
- `involves_validate`: 1
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `meetingId` | String | 会议ID | ⬜ | |
| `meetingLink` | String | 会议link | ⬜ | |
| `appLink` | String | 申请link | ⬜ | |
| `meetingBizConfigCode` | String | 会议编码 | ⬜ | |
| `meetingLevel` | String | 会议level | ⬜ | |
| `promoter` | String | 采购申请 | ⬜ | |
| `registrationLink` | String | 是link | ⬜ | |
| `meetingName` | String | 会议名称 | ⬜ | |
| `meetingAddress` | String | 会议地址 | ⬜ | |
| `startTime` | LocalDateTime | 开始时间 | ⬜ | |
| `endingTime` | LocalDateTime | 英文时间 | ⬜ | |
| `registrationDeadlineTime` | LocalDateTime | 行时间 | ⬜ | |
| `aiMeetingStatus` | String | 明细会议状态 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `calendarDesc` | String | 英文描述 | ⬜ | |
| `locationName` | String | location名称 | ⬜ | |
| `espRecordId` | String | 采购申请ID | ⬜ | |
| `recordId` | String | recordID | ⬜ | |
| `eventId` | String | 英文ID | ⬜ | |
| `startTime` | LocalDateTime | 开始时间 | ⬜ | |
| `endTime` | LocalDateTime | 结束时间 | ⬜ | |
| `minutesType` | String | 分钟类型 | ⬜ | |
| `documentId` | String | 英文ID | ⬜ | |
| `meetingApplyNo` | String | 申请编号 | ⬜ | |
| `meetingConclusion` | MeetingConclusionEnum | 会议conclusion | ⬜ | |
| `meetingSummary` | String | 会议汇总 | ⬜ | |
| `exclusiveInFact` | String | exclusive提名工厂 | ⬜ | |
| `meetingOwner` | String | 会议所属人 | ⬜ | |
| `meetingResult` | String | 会议result | ⬜ | |
| `meetingTitle` | String | 会议title | ⬜ | |
| `invitationType` | String | TA类型 | ⬜ | |
| `lm` | String | PLM | ⬜ | |
| `order` | Integer | 订单 | ⬜ | |
| `recordId` | String | recordID | ⬜ | |
| `bundleNumber` | String | BU编号 | ⬜ | |
| `bundleName` | String | BU名称 | ⬜ | |
| `topic` | String | topic | ⬜ | |
| `meetingTime` | String | 会议时间 | ⬜ | |
| `meetingTopic` | String | 会议topic | ⬜ | |
| `proposer` | String | 采购申请 | ⬜ | |
| `reportTime` | LocalDateTime | 报告时间 | ⬜ | |

---

### 13. AiMeetingConfigEntity

**标准化名称**: `aimeetingconfig`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.meeting.domain.ai`

**文件路径**: `com/nio/srm/gps/meeting/domain/ai/AiMeetingConfigEntity.java`

**关系统计**:

- 总关系数: 19
- 出向关系: 13
- 入向关系: 6

**出向关系类型**:

- `involves_other`: 6
- `involves_update`: 4
- `queries_other`: 1
- `queries_queryBy`: 2

**入向关系类型**:

- `involves_other`: 3
- `involves_update`: 2
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `bizConfigCode` | String | 业务编码 | ⬜ | |
| `manager` | Manager | manager | ⬜ | |
| `bizDomain` | String | 业务主 | ⬜ | |
| `defaultRegistrationLink` | String | default是link | ⬜ | |
| `defaultMeetingAddress` | String | default会议地址 | ⬜ | |
| `defaultLocationName` | String | defaultLocation名称 | ⬜ | |
| `defaultMeetingName` | String | 会议名称 | ⬜ | |
| `defaultMeetingDesc` | String | 会议描述 | ⬜ | |
| `registrationMsgPushConfig` | RegistrationMsgPushConfig | 是msgpush配置 | ⬜ | |
| `meetingGroupConfig` | MeetingGroupConfig | 会议分组配置 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `deleted` | Integer | 是否删除 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `tableType` | String | TA类型 | ⬜ | |
| `tableToken` | String | TA英文 | ⬜ | |
| `tableId` | String | TAID | ⬜ | |
| `isPush` | Boolean | 是否Push | ⬜ | |
| `groupId` | String | 分组ID | ⬜ | |
| `invitationType` | String | TA类型 | ⬜ | |
| `isCreate` | Boolean | 是否创建 | ⬜ | |
| `groupName` | String | 分组名称 | ⬜ | |
| `needLm` | Boolean | 是否需要PLM | ⬜ | |

---

### 14. AlternativePartEntity

**标准化名称**: `alternativepart`

**层级**: L2-Supporting

**推理中文含义**: 部分

**当前描述**: 替代件是否生效

**包路径**: `com.nio.srm.gps.material.domain.alternativepart`

**文件路径**: `com/nio/srm/gps/material/domain/alternativepart/AlternativePartEntity.java`

**关系统计**:

- 总关系数: 9
- 出向关系: 8
- 入向关系: 1

**出向关系类型**:

- `queries_exists`: 1
- `queries_get`: 1
- `queries_other`: 2
- `queries_queryBy`: 4

**入向关系类型**:

- `queries_get`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `alternativePartKey` | String | alternative部分key | ⬜ | |
| `alternativeGroup` | String | alternative分组 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `model` | String | 模式 | ⬜ | |
| `primaryFlag` | Boolean | 采购申请标志 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `keyMaterialCode1` | String | key物料编码 | ⬜ | |
| `keyMaterialCode2` | String | key物料编码 | ⬜ | |
| `alternativePartEffectiveFlag` | Boolean | alternative部分生效标志 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |

---

### 15. ApvAndNpvEntity

**标准化名称**: `apvandnpv`

**层级**: L2-Supporting

**推理中文含义**: apv需求npv

**当前描述**: 车型列表

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/ApvAndNpvEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `yearDeclineType` | String | year行类型 | ⬜ | |
| `mouldCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `rdQuoteCostAmount` | BigDecimal | 报价金额 | ⬜ | |
| `firstYearDeclineAmount` | BigDecimal | 行金额 | ⬜ | |
| `secondYearDeclineAmount` | BigDecimal | 行金额 | ⬜ | |
| `thirdYearDeclineAmount` | BigDecimal | 行金额 | ⬜ | |
| `fourthYearDeclineAmount` | BigDecimal | 行金额 | ⬜ | |
| `fifthYearDeclineAmount` | BigDecimal | 行金额 | ⬜ | |
| `noApportionMaterialPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `materialLogisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `logisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `quickSavingAmount` | BigDecimal | quickSaving金额 | ⬜ | |
| `quickSavingYear` | String | quicksavingyear | ⬜ | |
| `apolloConfigHelper` | ApolloConfigHelper | 采购订单配置助手 | ⬜ | |

---

### 16. AssemblyDbItemEntity

**标准化名称**: `assemblydbitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: @Description 卷积DB明细行

**包路径**: `com.nio.srm.gps.price.domain.center.assembly`

**文件路径**: `com/nio/srm/gps/price/domain/center/assembly/AssemblyDbItemEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 0
- 入向关系: 2

**入向关系类型**:

- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `entityCode` | String | 英文编码 | ⬜ | |
| `entityVersion` | String | 版本 | ⬜ | |
| `assemblySummaryId` | Long | 汇总ID | ⬜ | |
| `gpsPriceConfirmNo` | String | GPS价格确认编号 | ⬜ | |
| `sourceGpsPriceFlowNo` | String | 价格编号 | ⬜ | |
| `mainDimension` | AssemblyMainDimensionVO | 主维度 | ⬜ | |
| `vendor` | VendorVO | 供应商 | ⬜ | |
| `validTimeRange` | ValidTimeRangeVO | ID时间range | ⬜ | |
| `purchaseInfo` | PurchaseInfoVO | 采购信息 | ⬜ | |
| `sourceInfo` | SourceInfoVO | 来源信息 | ⬜ | |
| `contractInfo` | ContractInfoVO | 合同信息 | ⬜ | |
| `assemblyBom` | AssemblyBomVO | 汇总bom | ⬜ | |
| `priceComposes` | AssemblyPriceComposeVO | 价格采购订单 | ⬜ | |
| `priceExt` | AssemblySummaryPriceExtVO | 价格扩展 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `bizStatus` | AssemblySummaryConfirmStatus | 业务状态 | ⬜ | |
| `status` | PriceCenterMainStatus | 状态 | ⬜ | |
| `extInfo` | AssemblySummaryExtInfo | 扩展信息 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `confirmTime` | LocalDateTime | confirm时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |

---

### 17. AssessManufacturerEntity

**标准化名称**: `assessmanufacturer`

**层级**: L2-Supporting

**推理中文含义**: assessmanufacturer

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.vendor.domain.assess.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/assess/entity/AssessManufacturerEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `manufacturerCode` | String | manufacturer编码 | ⬜ | |
| `address` | String | 地址 | ⬜ | |
| `nameCnLang` | String | 名称cnlang | ⬜ | |
| `nameEgLang` | String | 名称品类lang | ⬜ | |

---

### 18. AttachmentEntity

**标准化名称**: `attachment`

**层级**: L2-Supporting

**推理中文含义**: 附件

**当前描述**: 文件所属的业务单号

**包路径**: `com.nio.srm.gps.sourcing.domain.file`

**文件路径**: `com/nio/srm/gps/sourcing/domain/file/AttachmentEntity.java`

**关系统计**:

- 总关系数: 63
- 出向关系: 39
- 入向关系: 24

**出向关系类型**:

- `involves_create`: 13
- `involves_delete`: 5
- `involves_other`: 3
- `involves_query`: 3
- `involves_update`: 2
- `queries_find`: 2
- `queries_findBy`: 6
- `queries_getBy`: 2
- `queries_queryBy`: 3

**入向关系类型**:

- `involves_create`: 10
- `involves_delete`: 5
- `involves_other`: 2
- `involves_query`: 3
- `involves_update`: 2
- `queries_find`: 1
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `attachmentRepository` | IAttachmentRepository | 附件仓储 | ⬜ | |
| `bizCode` | String | 业务编码 | ⬜ | |
| `fileId` | Long | 文件ID | ⬜ | |
| `department` | String | 部门 | ⬜ | |
| `fileName` | String | 文件名称 | ⬜ | |
| `fileType` | String | 文件类型 | ⬜ | |
| `gpsCategoryId` | Long | GPS品类ID | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `startTime` | LocalDateTime | 开始时间 | ⬜ | |
| `fileUUID` | String | 文件ID | ⬜ | |
| `filePath` | String | 文件路径 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `effectiveTime` | LocalDateTime | 生效时间 | ⬜ | |
| `operator` | String | 操作人 | ⬜ | |
| `isAllCategory` | Boolean | 是否品类 | ⬜ | |
| `operationLogServiceFacade` | OperationLogServiceFacade | operation日志服务门面 | ⬜ | |
| `bizGroup` | String | 业务分组 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `bizSourceId` | Long | 来源ID | ⬜ | |
| `bizSourceCode` | String | 来源编码 | ⬜ | |
| `fileOwner` | String | 文件所属人 | ⬜ | |
| `fileStorageType` | String | 文件存储类型 | ⬜ | |
| `fileSize` | Long | 文件size | ⬜ | |
| `fileMd5` | String | 文件MD5 | ⬜ | |
| `fullFilePath` | String | full文件路径 | ⬜ | |
| `uuid` | String | UUIDID | ⬜ | |
| `inputStream` | InputStream | inputstream | ⬜ | |
| `fileRepository` | IAttachmentRepository | 文件仓储 | ⬜ | |
| `cosFactory` | CosFactory | 成本工厂 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `name` | String | 名称 | ⬜ | |
| `sourceType` | String | 来源类型 | ⬜ | |
| `sourceCode` | String | 来源编码 | ⬜ | |
| `size` | Long | size | ⬜ | |
| `md5` | String | MD5 | ⬜ | |
| `storageType` | String | 存储类型 | ⬜ | |
| `storagePath` | String | 存储路径 | ⬜ | |
| `fileUuid` | String | 文件ID | ⬜ | |
| `fileUrl` | String | 文件URL | ⬜ | |
| `isDelete` | Boolean | 是否删除 | ⬜ | |

---

### 19. AuditingHistoryEntity

**标准化名称**: `auditinghistory`

**层级**: L2-Supporting

**推理中文含义**: 审核

**当前描述**: @author d.heng

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/AuditingHistoryEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 0
- 入向关系: 3

**入向关系类型**:

- `involves_move`: 1
- `involves_update`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `contractId` | Long | 合同ID | ⬜ | |
| `wfInstanceId` | String | CEID | ⬜ | |
| `wfInstanceIdSource` | WfInstanceIdSource | 工作流CEID来源 | ⬜ | |
| `status` | AuditingStatus | 状态 | ⬜ | |
| `type` | AuditingType | 类型 | ⬜ | |
| `startTime` | LocalDateTime | 开始时间 | ⬜ | |
| `endTime` | LocalDateTime | 结束时间 | ⬜ | |
| `extInfo` | ExtInfo | 扩展信息 | ⬜ | |

---

### 20. AuthAuthorityApiConfigEntity

**标准化名称**: `authauthorityapiconfig`

**层级**: L2-Supporting

**推理中文含义**: 配置

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthAuthorityApiConfigEntity.java`

**关系统计**:

- 总关系数: 5
- 出向关系: 2
- 入向关系: 3

**出向关系类型**:

- `involves_convert`: 1
- `queries_get`: 1

**入向关系类型**:

- `involves_create`: 1
- `involves_query`: 1
- `queries_get`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `authorityCode` | String | authority编码 | ⬜ | |
| `apiPath` | String | api路径 | ⬜ | |
| `httpMethod` | RequestMethod | httpmethod | ⬜ | |
| `authorityName` | String | authority名称 | ⬜ | |
| `identifierOpt` | IdentifierOptEnum | IDopt | ⬜ | |

---

### 21. AuthAuthorityStrategyEntity

**标准化名称**: `authauthoritystrategy`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthAuthorityStrategyEntity.java`

**关系统计**:

- 总关系数: 8
- 出向关系: 2
- 入向关系: 6

**出向关系类型**:

- `involves_create`: 1
- `queries_other`: 1

**入向关系类型**:

- `involves_create`: 4
- `involves_other`: 1
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `appId` | Long | 申请ID | ⬜ | |
| `authorityId` | Long | authorityID | ⬜ | |
| `authorityCode` | String | authority编码 | ⬜ | |
| `roleId` | Long | roleID | ⬜ | |
| `roleCode` | String | role编码 | ⬜ | |
| `fieldCode` | String | field编码 | ⬜ | |
| `expression` | String | 采购申请 | ⬜ | |
| `strategyType` | AuthStrategyTypeEnum | 策略类型 | ⬜ | |

---

### 22. AuthAuthorityStructureEntity

**标准化名称**: `authauthoritystructure`

**层级**: L2-Supporting

**推理中文含义**: authauthoritystructure

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthAuthorityStructureEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 2
- 入向关系: 1

**出向关系类型**:

- `involves_other`: 1
- `queries_get`: 1

**入向关系类型**:

- `involves_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `authorityCode` | String | authority编码 | ⬜ | |
| `authorityName` | String | authority名称 | ⬜ | |
| `parentAuthorityCode` | String | 英文编码 | ⬜ | |
| `parentAuthorityName` | String | 英文名称 | ⬜ | |

---

### 23. AuthAuthorityTreeEntity

**标准化名称**: `authauthoritytree`

**层级**: L2-Supporting

**推理中文含义**: authauthoritytree

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthAuthorityTreeEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 1
- 入向关系: 2

**出向关系类型**:

- `involves_other`: 1

**入向关系类型**:

- `involves_other`: 1
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `appId` | Long | 申请ID | ⬜ | |
| `identifierId` | Long | IDID | ⬜ | |
| `identifierCode` | String | ID编码 | ⬜ | |
| `identifierName` | String | ID名称 | ⬜ | |
| `parentIdentifierId` | Long | IDID | ⬜ | |
| `priority` | Integer | 采购申请 | ⬜ | |
| `status` | Integer | 状态 | ⬜ | |
| `treeLevel` | Integer | treelevel | ⬜ | |
| `comment` | String | 备注 | ⬜ | |

---

### 24. AuthDbTableEntity

**标准化名称**: `authdbtable`

**层级**: L2-Supporting

**推理中文含义**: TA

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthDbTableEntity.java`

**关系统计**:

- 总关系数: 6
- 出向关系: 3
- 入向关系: 3

**出向关系类型**:

- `queries_other`: 3

**入向关系类型**:

- `queries_other`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `applicationName` | String | 申请名称 | ⬜ | |
| `tableName` | String | TA名称 | ⬜ | |
| `entityCode` | String | 英文编码 | ⬜ | |

---

### 25. AuthDbTableColumnEntity

**标准化名称**: `authdbtablecolumn`

**层级**: L2-Supporting

**推理中文含义**: TA

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthDbTableColumnEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `authTableId` | Long | TAID | ⬜ | |
| `columnName` | String | column名称 | ⬜ | |
| `fieldName` | String | field名称 | ⬜ | |
| `fieldCode` | String | field编码 | ⬜ | |
| `realFieldCode` | String | realField编码 | ⬜ | |
| `multiValueFlag` | Boolean | multivalue标志 | ⬜ | |
| `importMultiValueFlag` | Boolean | 采购订单multivalue标志 | ⬜ | |
| `dtoMultiValueFlag` | Boolean | dtomultivalue标志 | ⬜ | |
| `containsAnyFlag` | Boolean | TA公司标志 | ⬜ | |

---

### 26. AuthFieldConfigEntity

**标准化名称**: `authfieldconfig`

**层级**: L2-Supporting

**推理中文含义**: 配置

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthFieldConfigEntity.java`

**关系统计**:

- 总关系数: 15
- 出向关系: 11
- 入向关系: 4

**出向关系类型**:

- `involves_other`: 1
- `involves_validate`: 1
- `queries_get`: 8
- `queries_list`: 1

**入向关系类型**:

- `involves_other`: 1
- `involves_validate`: 1
- `queries_get`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `fieldCode` | String | field编码 | ⬜ | |
| `fieldName` | String | field名称 | ⬜ | |
| `enabled` | Boolean | enabled | ⬜ | |

---

### 27. AuthFieldConfigValueEntity

**标准化名称**: `authfieldconfigvalue`

**层级**: L2-Supporting

**推理中文含义**: 配置

**当前描述**: 字段编码

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthFieldConfigValueEntity.java`

**关系统计**:

- 总关系数: 7
- 出向关系: 0
- 入向关系: 7

**入向关系类型**:

- `queries_get`: 6
- `queries_list`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `fieldKey` | String | fieldkey | ⬜ | |
| `zhFieldValue` | String | 中文fieldvalue | ⬜ | |
| `enFieldValue` | String | fieldvalue | ⬜ | |
| `fieldValue` | String | fieldvalue | ⬜ | |
| `contractServiceFacade` | ContractServiceFacade | 合同服务门面 | ⬜ | |
| `peopleServiceFacade` | PeopleServiceFacade | people服务门面 | ⬜ | |
| `projectServiceFacade` | ProjectServiceFacade | 项目服务门面 | ⬜ | |

---

### 28. AuthFileEntity

**标准化名称**: `authfile`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: 文件存储云服务类型，腾讯云、阿里云

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthFileEntity.java`

**关系统计**:

- 总关系数: 5
- 出向关系: 2
- 入向关系: 3

**出向关系类型**:

- `queries_findBy`: 1
- `queries_other`: 1

**入向关系类型**:

- `involves_query`: 2
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `fileStorageType` | String | 文件存储类型 | ⬜ | |
| `fileName` | String | 文件名称 | ⬜ | |
| `fileSize` | Long | 文件size | ⬜ | |
| `fileMd5` | String | 文件MD5 | ⬜ | |
| `filePath` | String | 文件路径 | ⬜ | |
| `inputStream` | InputStream | inputstream | ⬜ | |
| `fileRepository` | AuthFileRepository | 文件仓储 | ⬜ | |
| `cosFactory` | CosFactory | 成本工厂 | ⬜ | |

---

### 29. AuthProfileEntity

**标准化名称**: `authprofile`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthProfileEntity.java`

**关系统计**:

- 总关系数: 35
- 出向关系: 22
- 入向关系: 13

**出向关系类型**:

- `involves_create`: 2
- `involves_other`: 5
- `involves_update`: 2
- `involves_validate`: 5
- `queries_get`: 1
- `queries_other`: 7

**入向关系类型**:

- `involves_update`: 1
- `involves_validate`: 2
- `queries_count`: 4
- `queries_get`: 1
- `queries_list`: 2
- `queries_other`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `authUserId` | Long | 用户ID | ⬜ | |
| `roleCode` | String | role编码 | ⬜ | |
| `roleId` | Long | roleID | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `updateExpireTime` | Boolean | 日期时间 | ⬜ | |

---

### 30. AuthProfileFieldContentEntity

**标准化名称**: `authprofilefieldcontent`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthProfileFieldContentEntity.java`

**关系统计**:

- 总关系数: 18
- 出向关系: 8
- 入向关系: 10

**出向关系类型**:

- `involves_other`: 6
- `involves_validate`: 2

**入向关系类型**:

- `involves_other`: 4
- `involves_validate`: 2
- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `profileId` | Long | 文件ID | ⬜ | |
| `fieldCode` | String | field编码 | ⬜ | |

---

### 31. AuthRoleEntity

**标准化名称**: `authrole`

**层级**: L2-Supporting

**推理中文含义**: authrole

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthRoleEntity.java`

**关系统计**:

- 总关系数: 12
- 出向关系: 7
- 入向关系: 5

**出向关系类型**:

- `involves_other`: 1
- `involves_query`: 2
- `queries_other`: 4

**入向关系类型**:

- `involves_other`: 1
- `involves_query`: 2
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `roleId` | Long | roleID | ⬜ | |
| `bindCount` | Long | bind数量 | ⬜ | |
| `roleCode` | String | role编码 | ⬜ | |
| `roleName` | String | role名称 | ⬜ | |
| `roleOwnerAccount` | String | 所属人数量 | ⬜ | |
| `status` | Boolean | 状态 | ⬜ | |
| `openApplication` | Boolean | 开放申请 | ⬜ | |
| `description` | String | 描述 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `sensitive` | Integer | sensitive | ⬜ | |

---

### 32. AuthRoleAdminInfoEntity

**标准化名称**: `authroleadmininfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthRoleAdminInfoEntity.java`

**关系统计**:

- 总关系数: 9
- 出向关系: 3
- 入向关系: 6

**出向关系类型**:

- `involves_other`: 1
- `involves_update`: 2

**入向关系类型**:

- `involves_other`: 1
- `involves_update`: 2
- `queries_get`: 2
- `queries_list`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `roleId` | Long | roleID | ⬜ | |
| `roleCode` | String | role编码 | ⬜ | |
| `roleOwnerAccount` | String | 所属人数量 | ⬜ | |

---

### 33. AuthUserEntity

**标准化名称**: `authuser`

**层级**: L2-Supporting

**推理中文含义**: 用户

**当前描述**: 该用户是否生效，同步自laputa。

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthUserEntity.java`

**关系统计**:

- 总关系数: 13
- 出向关系: 8
- 入向关系: 5

**出向关系类型**:

- `queries_count`: 1
- `queries_get`: 1
- `queries_other`: 6

**入向关系类型**:

- `involves_create`: 1
- `involves_other`: 2
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `userAccount` | String | 用户数量 | ⬜ | |
| `userName` | String | 用户名称 | ⬜ | |
| `leaderSource` | AuthLeaderSourceEnum | leader来源 | ⬜ | |
| `peopleLeaderLayer` | PeopleLeaderLayerEnum | peopleleaderlayer | ⬜ | |
| `effective` | Boolean | 生效 | ⬜ | |
| `leader` | Boolean | leader | ⬜ | |

---

### 34. AuthUserDetailEntity

**标准化名称**: `authuserdetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: 所有下属员工，包含people + 自定义

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthUserDetailEntity.java`

**关系统计**:

- 总关系数: 33
- 出向关系: 19
- 入向关系: 14

**出向关系类型**:

- `involves_create`: 8
- `involves_delete`: 1
- `involves_other`: 6
- `involves_query`: 2
- `involves_update`: 2

**入向关系类型**:

- `involves_create`: 4
- `involves_other`: 4
- `involves_update`: 2
- `involves_validate`: 1
- `queries_count`: 1
- `queries_get`: 1
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `userAccount` | String | 用户数量 | ⬜ | |
| `userName` | String | 用户名称 | ⬜ | |
| `leaderSource` | AuthLeaderSourceEnum | leader来源 | ⬜ | |
| `peopleLeaderLayer` | PeopleLeaderLayerEnum | peopleleaderlayer | ⬜ | |
| `effective` | Boolean | 生效 | ⬜ | |

---

### 35. AuthUserOrganizationEntity

**标准化名称**: `authuserorganization`

**层级**: L2-Supporting

**推理中文含义**: 用户

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/AuthUserOrganizationEntity.java`

**关系统计**:

- 总关系数: 5
- 出向关系: 4
- 入向关系: 1

**出向关系类型**:

- `queries_get`: 2
- `queries_list`: 1
- `queries_other`: 1

**入向关系类型**:

- `queries_list`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `userAccount` | String | 用户数量 | ⬜ | |
| `subordinateAccount` | String | subordinateAc数量 | ⬜ | |
| `visible` | Boolean | 可见 | ⬜ | |
| `leaderSource` | AuthLeaderSourceEnum | leader来源 | ⬜ | |

---

### 36. BaseEntity

**标准化名称**: `base`

**层级**: L2-Supporting

**推理中文含义**: base

**当前描述**: 基础领域对象

**包路径**: `com.nio.srm.gps.order.domain`

**文件路径**: `com/nio/srm/gps/order/domain/BaseEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 1
- 入向关系: 1

**出向关系类型**:

- `involves_validate`: 1

**入向关系类型**:

- `involves_delete`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `isDeleted` | Boolean | 是否删除 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `createdTime` | LocalDateTime | 创建时间 | ⬜ | |
| `createdBy` | String | 创建人 | ⬜ | |
| `updatedTime` | LocalDateTime | 更新时间 | ⬜ | |
| `updatedBy` | String | 更新人 | ⬜ | |

---

### 37. BaseAccountingEntity

**标准化名称**: `baseaccounting`

**层级**: L2-Supporting

**推理中文含义**: 数量

**当前描述**: 基础核价单聚合根

**包路径**: `com.nio.srm.gps.cost.domain.accounting.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/accounting/entity/BaseAccountingEntity.java`

**关系统计**:

- 总关系数: 9
- 出向关系: 0
- 入向关系: 9

**入向关系类型**:

- `queries_count`: 8
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `gpsCostAccountingTaskNo` | String | 数量编号 | ⬜ | |
| `accountingTaskStatus` | String | 账号任务状态 | ⬜ | |
| `accountingTaskDesc` | String | 数量描述 | ⬜ | |
| `source` | String | 来源 | ⬜ | |
| `sourceTaskNo` | String | 任务编号 | ⬜ | |
| `applyAccount` | String | 申请数量 | ⬜ | |
| `applyAccountName` | String | 数量名称 | ⬜ | |
| `applyTime` | LocalDateTime | 申请时间 | ⬜ | |
| `costAccountant` | String | 成本账号 | ⬜ | |
| `costAccountantName` | String | 数量名称 | ⬜ | |
| `accountingFinishTime` | LocalDateTime | 数量时间 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |

---

### 38. BaseBomEntity

**标准化名称**: `basebom`

**层级**: L2-Supporting

**推理中文含义**: basebom

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.base`

**文件路径**: `com/nio/srm/gps/material/domain/base/BaseBomEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |

---

### 39. BeanComparatorEntity

**标准化名称**: `beancomparator`

**层级**: L2-Supporting

**推理中文含义**: beancomparator

**当前描述**: 前后两个对象作比较

**包路径**: `com.nio.srm.gps.vendor.domain.changeinfo.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/changeinfo/entity/BeanComparatorEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| (无属性) | - | - | - | - |

---

### 40. BidderListEntity

**标准化名称**: `bidderlist`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: @author lei.zhang26

**包路径**: `com.nio.srm.gps.sourcing.domain.bidderlist`

**文件路径**: `com/nio/srm/gps/sourcing/domain/bidderlist/BidderListEntity.java`

**关系统计**:

- 总关系数: 33
- 出向关系: 19
- 入向关系: 14

**出向关系类型**:

- `involves_create`: 2
- `involves_delete`: 1
- `involves_other`: 3
- `involves_query`: 1
- `involves_update`: 2
- `queries_find`: 8
- `queries_findBy`: 2

**入向关系类型**:

- `involves_create`: 3
- `involves_delete`: 1
- `involves_other`: 4
- `involves_query`: 1
- `involves_update`: 2
- `queries_find`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `bidderListCode` | String | ID编码 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `materialType` | String | 物料类型 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `status` | BidderListStatus | 状态 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `enableFlag` | Boolean | 标志 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `bidderListRepository` | BidderListRepository | 投标人列表仓储 | ⬜ | |
| `workflowACO` | WorkflowACO | 工作流ACO | ⬜ | |

---

### 41. BidderListItemEntity

**标准化名称**: `bidderlistitem`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 关联bidder list的id

**包路径**: `com.nio.srm.gps.sourcing.domain.bidderlist`

**文件路径**: `com/nio/srm/gps/sourcing/domain/bidderlist/BidderListItemEntity.java`

**关系统计**:

- 总关系数: 11
- 出向关系: 6
- 入向关系: 5

**出向关系类型**:

- `involves_create`: 2
- `involves_other`: 4

**入向关系类型**:

- `involves_create`: 2
- `involves_other`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `bidderListId` | Long | IDID | ⬜ | |
| `seqNo` | Long | 序列编号 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `gpsReviewMeetingNo` | String | GPS编号 | ⬜ | |
| `status` | BidderListItemStatus | 状态 | ⬜ | |
| `oneTimeFlag` | Boolean | 电话时间标志 | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `qualityEval` | String | 质量eval | ⬜ | |
| `financeEval` | String | 财务eval | ⬜ | |
| `sustainabilityEval` | String | TAeval | ⬜ | |
| `logisticsEval` | String | 物流eval | ⬜ | |
| `projectEval` | String | 项目eval | ⬜ | |
| `commercialEval` | String | commercialeval | ⬜ | |
| `complianceEval` | String | CEeval | ⬜ | |
| `trEval` | String | 合同eval | ⬜ | |

---

### 42. BizSourceWfRelationEntity

**标准化名称**: `bizsourcewfrelation`

**层级**: L2-Supporting

**推理中文含义**: 来源

**当前描述**: 业务来源

**包路径**: `com.nio.srm.gps.meeting.domain.meeting`

**文件路径**: `com/nio/srm/gps/meeting/domain/meeting/BizSourceWfRelationEntity.java`

**关系统计**:

- 总关系数: 6
- 出向关系: 3
- 入向关系: 3

**出向关系类型**:

- `involves_create`: 1
- `queries_other`: 2

**入向关系类型**:

- `involves_create`: 1
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `wfBizSource` | WfBizSource | 工作流业务来源 | ⬜ | |
| `bizSourceId` | Long | 来源ID | ⬜ | |
| `wfProcessId` | String | 工作流流程ID | ⬜ | |
| `wfNextNodeId` | String | 编号ID | ⬜ | |

---

### 43. BomTrialProjectEntity

**标准化名称**: `bomtrialproject`

**层级**: L2-Supporting

**推理中文含义**: 项目

**当前描述**: 试制项目号

**包路径**: `com.nio.srm.gps.project.domain.vehicle`

**文件路径**: `com/nio/srm/gps/project/domain/vehicle/BomTrialProjectEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `trialProjectId` | String | 项目ID | ⬜ | |
| `trialProjectDescription` | String | trial项目描述 | ⬜ | |
| `model` | String | 模式 | ⬜ | |
| `modelYear` | String | 模式year | ⬜ | |
| `shop` | String | shop | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `phases` | String | 有 | ⬜ | |

---

### 44. BrandEntity

**标准化名称**: `brand`

**层级**: L2-Supporting

**推理中文含义**: 品牌

**当前描述**: 品牌

**包路径**: `com.nio.srm.gps.maindata.domain.brand`

**文件路径**: `com/nio/srm/gps/maindata/domain/brand/BrandEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_queryBy`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `brand` | String | 品牌 | ⬜ | |
| `keyCode` | String | key编码 | ⬜ | |
| `name` | String | 名称 | ⬜ | |
| `description` | String | 描述 | ⬜ | |

---

### 45. BrBaseEntity

**标准化名称**: `brbase`

**层级**: L2-Supporting

**推理中文含义**: 品牌base

**当前描述**: 

**包路径**: `com.nio.srm.gps.pr.br.domain`

**文件路径**: `com/nio/srm/gps/pr/br/domain/BrBaseEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | JSONObject | 扩展信息 | ⬜ | |

---

### 46. BrCategoryCeStrategyEntity

**标准化名称**: `brcategorycestrategy`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: @author zihao.zhai

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/BrCategoryCeStrategyEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 1
- 入向关系: 2

**出向关系类型**:

- `involves_update`: 1

**入向关系类型**:

- `involves_update`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `gpsCategoryAffiliation` | String | GPS品类归属 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `ceAccount` | String | CE数量 | ⬜ | |
| `injector` | BrCategoryCeInjector | 注入器 | ⬜ | |

---

### 47. BrPeMaterialEntity

**标准化名称**: `brpematerial`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: SES的物料数据，只需要更新 serviceVenderCode/sesMaterialGroup/serviceBuyCode/extInfo

**包路径**: `com.nio.srm.gps.material.domain.material.br`

**文件路径**: `com/nio/srm/gps/material/domain/material/br/BrPeMaterialEntity.java`

**关系统计**:

- 总关系数: 18
- 出向关系: 9
- 入向关系: 9

**出向关系类型**:

- `involves_other`: 1
- `involves_query`: 2
- `queries_list`: 2
- `queries_select`: 4

**入向关系类型**:

- `involves_other`: 1
- `involves_query`: 2
- `queries_list`: 2
- `queries_select`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `partitionCode` | String | 部分编码 | ⬜ | |
| `partNumber` | String | 部分编号 | ⬜ | |
| `revision` | String | 是 | ⬜ | |
| `zhPartName` | String | 中文名称 | ⬜ | |
| `enPartName` | String | 英文名称 | ⬜ | |
| `gpsMaterialName` | String | 物料名称 | ⬜ | |
| `responsibleEngineer` | String | 采购订单 | ⬜ | |
| `organization` | String | organization | ⬜ | |
| `initialProgram` | String | initial采购申请 | ⬜ | |
| `releasePhase` | String | release有 | ⬜ | |
| `releaseDate` | LocalDateTime | release日期 | ⬜ | |
| `changeRelatedObject` | String | 变更相关object | ⬜ | |
| `colorPartFlag` | Boolean | color部分标志 | ⬜ | |
| `colorCode` | String | color编码 | ⬜ | |
| `unitWeight` | BigDecimal | 单位weight | ⬜ | |
| `actualWeight` | BigDecimal | 实际weight | ⬜ | |
| `unitOfMeasure` | String | 单位线下计量 | ⬜ | |
| `typeOfTraceability` | String | 类型线下CE | ⬜ | |
| `accessoryFlag` | Boolean | 访问标志 | ⬜ | |
| `serviceVendorCode` | String | 供应商编码 | ⬜ | |
| `serviceBuyCode` | String | BU编码 | ⬜ | |
| `systemSource` | MaterialSystemSource | system来源 | ⬜ | |
| `sesMaterialGroup` | String | ses物料分组 | ⬜ | |
| `sesDataSource` | String | ses数据来源 | ⬜ | |
| `hasConsignment` | String | 是否有签署 | ⬜ | |
| `responsibleSte` | String | 采购订单ste | ⬜ | |
| `status` | MaterialStatus | 状态 | ⬜ | |
| `extInfo` | BrPeMaterialExtInfo | 扩展信息 | ⬜ | |
| `materialExtInfoEntity` | MaterialExtInfoEntity | 物料扩展信息 | ⬜ | |
| `brPeMaterialRepository` | BrPeMaterialRepository | 品牌类型物料仓储 | ⬜ | |

---

### 48. BrPurchaseOrderEntity

**标准化名称**: `brpurchaseorder`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: 考虑到未来订单会通过订单行关联多个合同，所以合同信息在行上也冗余一份。

**包路径**: `com.nio.srm.gps.order.domain.br.purchaseorder`

**文件路径**: `com/nio/srm/gps/order/domain/br/purchaseorder/BrPurchaseOrderEntity.java`

**关系统计**:

- 总关系数: 37
- 出向关系: 21
- 入向关系: 16

**出向关系类型**:

- `involves_compute`: 1
- `involves_create`: 2
- `involves_delete`: 2
- `involves_other`: 3
- `involves_update`: 3
- `involves_validate`: 1
- `queries_findBy`: 8
- `queries_other`: 1

**入向关系类型**:

- `involves_compute`: 1
- `involves_create`: 4
- `involves_delete`: 2
- `involves_other`: 3
- `involves_update`: 4
- `involves_validate`: 1
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `purchaseOrderId` | Long | 订单ID | ⬜ | |
| `bizBu` | String | 业务BU | ⬜ | |
| `poCreateType` | CreatePoTypeEnum | 采购订单创建类型 | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `applyNo` | String | 申请编号 | ⬜ | |
| `applyDate` | LocalDateTime | 申请日期 | ⬜ | |
| `createType` | String | 创建类型 | ⬜ | |
| `orderType` | String | 订单类型 | ⬜ | |
| `orderTypeName` | String | 类型名称 | ⬜ | |
| `sapVoucherNo` | String | SAP编号 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `poRuleRemark` | String | 采购订单rule备注 | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `needSignature` | boolean | 是否需要签署 | ⬜ | |
| `signatureStatus` | String | 签署状态 | ⬜ | |
| `isMultiCostCenter` | Boolean | 是否英文 | ⬜ | |
| `applicant` | BrPurchaseOrderApplicantVO | 申请人 | ⬜ | |
| `orderAmountVO` | BrPurchaseOrderAmountVO | 订单金额凭证 | ⬜ | |
| `orderContractVO` | BrPurchaseOrderContractVO | 订单合同凭证 | ⬜ | |
| `orderVendorVO` | BrPurchaseOrderVendorVO | 订单供应商凭证 | ⬜ | |
| `orderSignatureVO` | BrPurchaseOrderSignatureVO | 订单签署凭证 | ⬜ | |
| `purchaseOrderExtendVO` | BrPurchaseOrderExtendVO | 采购订单凭证 | ⬜ | |
| `orderInjector` | BrPurchaseOrderInjector | 订单注入器 | ⬜ | |

---

### 49. BrPurchaseOrderDetailEntity

**标准化名称**: `brpurchaseorderdetail`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.order.domain.br.purchaseorder`

**文件路径**: `com/nio/srm/gps/order/domain/br/purchaseorder/BrPurchaseOrderDetailEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 3
- 入向关系: 1

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 2

**入向关系类型**:

- `involves_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `orderDetailId` | Long | 订单ID | ⬜ | |
| `purchaseOrderId` | Long | 订单ID | ⬜ | |
| `lineNo` | Integer | 行编号 | ⬜ | |
| `gpsPrNo` | String | GPS采购申请编号 | ⬜ | |
| `prLineNo` | Integer | 行编号 | ⬜ | |
| `prBudgetCode` | String | 预算编码 | ⬜ | |
| `prCostCenterCode` | String | 英文编码 | ⬜ | |
| `contractLineNo` | Integer | 合同编号 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialDesc` | String | 物料描述 | ⬜ | |
| `prMaterialDesc` | String | 物料描述 | ⬜ | |
| `pcMaterialDesc` | String | 物料描述 | ⬜ | |
| `subjectType` | String | 科目类型 | ⬜ | |
| `purchaseCount` | BigDecimal | 采购数量 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `taxRate` | BigDecimal | 税比率 | ⬜ | |
| `taxAmount` | BigDecimal | 税金额 | ⬜ | |
| `measureUnit` | String | 计量单位 | ⬜ | |
| `priceUnit` | BigDecimal | 价格单位 | ⬜ | |
| `purchaseNetPriceAmount` | BigDecimal | 采购净价金额 | ⬜ | |
| `purchaseTotalNetPriceAmount` | BigDecimal | 采购净价金额总计 | ⬜ | |
| `purchaseTotalAmountIncludeTaxAmount` | BigDecimal | 金额金额 | ⬜ | |
| `orderType` | String | 订单类型 | ⬜ | |
| `expectedArrivalDate` | LocalDateTime | 预期到货日期 | ⬜ | |
| `globalAccountSubject` | String | 全球账号科目 | ⬜ | |
| `assetClass` | String | 资产类别 | ⬜ | |
| `assetNumber` | String | 资产编号 | ⬜ | |
| `subAssetNumber` | String | 科目资产编号 | ⬜ | |
| `isSyncSap` | Integer | 是否同步 | ⬜ | |
| `sapStatus` | String | SAP状态 | ⬜ | |
| `materialDescSource` | String | 物料描述来源 | ⬜ | |
| `materialRemark` | String | 物料备注 | ⬜ | |
| `openItem` | Boolean | 开放项 | ⬜ | |
| `isLadder` | Boolean | 是否阶梯 | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `ladderLevel` | Integer | 阶梯level | ⬜ | |
| `contractPriceType` | String | 合同价格类型 | ⬜ | |
| `previousCountOrAmount` | BigDecimal | 数量金额 | ⬜ | |
| `costCenterDepartmentName` | String | 部门名称 | ⬜ | |
| `activityId` | String | activityID | ⬜ | |
| `activityName` | String | activity名称 | ⬜ | |
| `activityType` | String | activity类型 | ⬜ | |
| `comment` | String | 备注 | ⬜ | |
| `detailContractVO` | BrPurchaseOrderDetailContractVO | 明细合同凭证 | ⬜ | |
| `orderDetailExtMapper` | PurchaseOrderDetailExtMapper | 订单明细扩展映射器 | ⬜ | |

---

### 50. BrPurchaseRequestDetailEntity

**标准化名称**: `brpurchaserequestdetail`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.pr.br.domain.purchaserequest.entity`

**文件路径**: `com/nio/srm/gps/pr/br/domain/purchaserequest/entity/BrPurchaseRequestDetailEntity.java`

**关系统计**:

- 总关系数: 22
- 出向关系: 15
- 入向关系: 7

**出向关系类型**:

- `involves_other`: 3
- `involves_update`: 2
- `queries_find`: 4
- `queries_findBy`: 4
- `queries_list`: 2

**入向关系类型**:

- `involves_other`: 3
- `involves_update`: 1
- `involves_validate`: 1
- `queries_list`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `purchaseRequestId` | Long | 采购ID | ⬜ | |
| `status` | ItemStatusEnum | 状态 | ⬜ | |
| `lineNo` | Integer | 行编号 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `factoryName` | String | 工厂名称 | ⬜ | |
| `sapPurchaseOrg` | String | SAP采购org | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialDescZh` | String | 物料中文 | ⬜ | |
| `materialDescEn` | String | 物料英文 | ⬜ | |
| `materialRemark` | String | 物料备注 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `description` | String | 描述 | ⬜ | |
| `costCenterCode` | String | 成本中心编码 | ⬜ | |
| `wbsProjectCode` | String | 项目编码 | ⬜ | |
| `wbsProjectName` | String | 项目名称 | ⬜ | |
| `budgetCode` | String | 预算编码 | ⬜ | |
| `wbsCompanyCode` | String | 公司编码 | ⬜ | |
| `wbsCompanyName` | String | 公司名称 | ⬜ | |
| `wbsCostCenterCode` | String | 英文编码 | ⬜ | |
| `quantity` | BigDecimal | quantity | ⬜ | |
| `measureUnit` | String | 计量单位 | ⬜ | |
| `netPriceAmount` | BigDecimal | 净金额 | ⬜ | |
| `priceUnit` | BigDecimal | 价格单位 | ⬜ | |
| `totalNetAmount` | BigDecimal | 总金额 | ⬜ | |
| `usedCount` | BigDecimal | used数量 | ⬜ | |
| `usedAmount` | BigDecimal | used金额 | ⬜ | |
| `freezeCount` | BigDecimal | freeze数量 | ⬜ | |
| `freezeAmount` | BigDecimal | freeze金额 | ⬜ | |
| `arrivalDate` | LocalDateTime | 到达日期 | ⬜ | |
| `globalAccountSubject` | String | 全球账号科目 | ⬜ | |
| `assetClass` | String | 资产类别 | ⬜ | |
| `assetNumber` | String | 资产编号 | ⬜ | |
| `subAssetNumber` | String | 科目资产编号 | ⬜ | |
| `purchaseRequestNo` | String | 采购编号 | ⬜ | |
| `sapApplyNo` | String | 申请编号 | ⬜ | |
| `syncSap` | Boolean | 同步SAP | ⬜ | |
| `cancelSap` | Boolean | 取消SAP | ⬜ | |
| `availableCount` | BigDecimal | available数量 | ⬜ | |
| `availableAmount` | BigDecimal | available金额 | ⬜ | |
| `costCenterCompanyCode` | String | 公司编码 | ⬜ | |
| `costCenterDepartmentCode` | String | 部门编码 | ⬜ | |
| `costCenterDepartmentName` | String | 部门名称 | ⬜ | |
| `costCenterDepartmentNameZh` | String | 名称中文 | ⬜ | |
| `costCenterDepartmentNameEn` | String | 名称英文 | ⬜ | |
| `contractLineNo` | Integer | 合同编号 | ⬜ | |
| `openItem` | Boolean | 开放项 | ⬜ | |
| `totalIncludeTaxAmount` | BigDecimal | 总金额 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `taxRate` | BigDecimal | 税比率 | ⬜ | |
| `taxAmount` | BigDecimal | 税金额 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `sourcingStatus` | TransformSourcingStatusEnum | sourcing状态 | ⬜ | |
| `extension` | PurchaseRequestDetailExtendVO | extension | ⬜ | |
| `sourcingStatistics` | SourcingStatistics | sourcing是 | ⬜ | |
| `purchaseRequestDetailRepository` | IBrPurchaseRequestDetailRepository | 采购申请明细仓储 | ⬜ | |
| `rfqAmount` | BigDecimal | 询价金额 | ⬜ | |
| `rfqQuantity` | BigDecimal | 询价quantity | ⬜ | |
| `nominationAmount` | BigDecimal | 提名金额 | ⬜ | |
| `nominationQuantity` | BigDecimal | 提名quantity | ⬜ | |
| `sourcingStatus` | TransformSourcingStatusEnum | sourcing状态 | ⬜ | |

---

### 51. BrRfqEntity

**标准化名称**: `brrfq`

**层级**: L2-Supporting

**推理中文含义**: 询价

**当前描述**: 业务分组：SD,BR

**包路径**: `com.nio.srm.gps.sourcing.domain.quote.br`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/br/BrRfqEntity.java`

**关系统计**:

- 总关系数: 6
- 出向关系: 4
- 入向关系: 2

**出向关系类型**:

- `involves_create`: 2
- `involves_update`: 2

**入向关系类型**:

- `involves_create`: 1
- `involves_update`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `bizGroup` | String | 业务分组 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `rfqName` | String | 询价名称 | ⬜ | |
| `gpsTicketCode` | String | GPS编码 | ⬜ | |
| `clmsContractCode` | String | 合同编码 | ⬜ | |
| `specialList` | String | special列表 | ⬜ | |
| `roundDeadlineTime` | LocalDateTime | 轮次时间 | ⬜ | |
| `gpsCategoryId` | Long | GPS品类ID | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `sapTaxRate` | BigDecimal | SAP税率 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `quoteType` | String | 报价类型 | ⬜ | |
| `quoteStatus` | BrRfqStatus | 报价状态 | ⬜ | |
| `quoteMethod` | BrQuoteMethod | 报价method | ⬜ | |
| `isNeedCe` | Boolean | 是否CE | ⬜ | |
| `ceAccount` | String | CE数量 | ⬜ | |
| `ceNo` | String | CE编号 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `isSealedBidding` | Boolean | 是否ID | ⬜ | |
| `sorInfo` | TicketSorVO | SOR信息 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `openBidRule` | BidRuleVO | 开放IDrule | ⬜ | |
| `brRfqRepository` | IBrRfqRepository | 品牌询价仓储 | ⬜ | |

---

### 52. BrSpecialListEntity

**标准化名称**: `brspeciallist`

**层级**: L2-Supporting

**推理中文含义**: 全部

**当前描述**: RFQ单号

**包路径**: `com.nio.srm.gps.sourcing.domain.quote.br`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/br/BrSpecialListEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `specialScene` | String | special场景 | ⬜ | |
| `specialListRepository` | IBrSpecialListRepository | special列表仓储 | ⬜ | |

---

### 53. BundleEntity

**标准化名称**: `bundle`

**层级**: L2-Supporting

**推理中文含义**: BU

**当前描述**: 项目

**包路径**: `com.nio.srm.gps.material.domain.bundle`

**文件路径**: `com/nio/srm/gps/material/domain/bundle/BundleEntity.java`

**关系统计**:

- 总关系数: 56
- 出向关系: 28
- 入向关系: 28

**出向关系类型**:

- `involves_compute`: 1
- `involves_create`: 3
- `involves_delete`: 5
- `involves_other`: 8
- `involves_query`: 3
- `queries_other`: 8

**入向关系类型**:

- `involves_compute`: 1
- `involves_create`: 3
- `involves_delete`: 4
- `involves_other`: 8
- `involves_query`: 4
- `queries_other`: 8

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `gpsBundleCode` | String | GPS编码 | ⬜ | |
| `type` | BundleType | 类型 | ⬜ | |
| `status` | BundleStatus | 状态 | ⬜ | |
| `delAuditStatus` | BundleDelAuditStatus | 删除审核状态 | ⬜ | |
| `gpsCategoryId` | Long | GPS品类ID | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryZhName` | String | 中文名称 | ⬜ | |
| `gpsCategoryEnName` | String | 英文名称 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `gpsProjectId` | Long | GPSID | ⬜ | |
| `gpsProjectCode` | String | GPS编码 | ⬜ | |
| `vehicleModel` | String | vehicle模式 | ⬜ | |
| `gpsProjectZhName` | String | 中文名称 | ⬜ | |
| `gpsProjectEnName` | String | 英文名称 | ⬜ | |
| `zhCusDesc` | String | 中文描述 | ⬜ | |
| `enCusDesc` | String | 英文描述 | ⬜ | |
| `bundleCusDesc` | String | BU描述 | ⬜ | |
| `bundleZhDesc` | String | 中文描述 | ⬜ | |
| `bundleEnDesc` | String | 英文描述 | ⬜ | |
| `bundleDesc` | String | BU描述 | ⬜ | |
| `bundleRepository` | IBundleRepository | BU仓储 | ⬜ | |
| `projectVO` | ProjectVO | 项目凭证 | ⬜ | |
| `categoryNodeEntity` | CategoryNodeEntity | 品类节点 | ⬜ | |

---

### 54. BundleConfigEntity

**标准化名称**: `bundleconfig`

**层级**: L2-Supporting

**推理中文含义**: BU

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.bundleconfig`

**文件路径**: `com/nio/srm/gps/material/domain/bundleconfig/BundleConfigEntity.java`

**关系统计**:

- 总关系数: 10
- 出向关系: 5
- 入向关系: 5

**出向关系类型**:

- `involves_create`: 1
- `involves_update`: 1
- `queries_other`: 3

**入向关系类型**:

- `involves_create`: 1
- `involves_update`: 1
- `queries_other`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `firstLevelGpsCategoryId` | Long | 品类ID | ⬜ | |
| `firstLevelGpsCategoryCode` | String | 品类编码 | ⬜ | |
| `firstLevelGpsCategoryZhName` | String | 中文名称 | ⬜ | |
| `firstLevelGpsCategoryEnName` | String | 英文名称 | ⬜ | |
| `firstLevelGpsCategoryName` | String | 品类名称 | ⬜ | |
| `gpsCategoryLevelConfig` | Integer | GPS品类level配置 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |

---

### 55. CategoryBuyerEntity

**标准化名称**: `categorybuyer`

**层级**: L2-Supporting

**推理中文含义**: 采购员

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/CategoryBuyerEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 0
- 入向关系: 4

**入向关系类型**:

- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryAffiliation` | String | GPS品类归属 | ⬜ | |
| `zhName` | String | 中文名称 | ⬜ | |
| `enName` | String | 英文名称 | ⬜ | |
| `categoryOpeningMode` | String | 品类模式 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |

---

### 56. CategoryBuyerMappingEntity

**标准化名称**: `categorybuyermapping`

**层级**: L2-Supporting

**推理中文含义**: 采购员

**当前描述**: 创建人

**包路径**: `com.nio.srm.gps.pr.domain.purchaserequest`

**文件路径**: `com/nio/srm/gps/pr/domain/purchaserequest/CategoryBuyerMappingEntity.java`

**关系统计**:

- 总关系数: 10
- 出向关系: 10
- 入向关系: 0

**出向关系类型**:

- `queries_get`: 6
- `queries_getBy`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `firstLevelCategoryCode` | String | 品类编码 | ⬜ | |
| `secondLevelCategoryCode` | String | 品类编码 | ⬜ | |
| `level` | int | level | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |

---

### 57. CategoryConfigEntity

**标准化名称**: `categoryconfig`

**层级**: L2-Supporting

**推理中文含义**: 品类

**当前描述**: 

**包路径**: `com.nio.srm.gps.pr.domain.categoryconfig`

**文件路径**: `com/nio/srm/gps/pr/domain/categoryconfig/CategoryConfigEntity.java`

**关系统计**:

- 总关系数: 14
- 出向关系: 10
- 入向关系: 4

**出向关系类型**:

- `involves_other`: 4
- `involves_query`: 1
- `involves_update`: 1
- `queries_other`: 3
- `queries_queryBy`: 1

**入向关系类型**:

- `involves_query`: 1
- `queries_other`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `firstLevelGpsCategoryId` | Long | 品类ID | ⬜ | |
| `firstLevelGpsCategoryCode` | String | 品类编码 | ⬜ | |
| `firstLevelGpsCategoryZhName` | String | 中文名称 | ⬜ | |
| `firstLevelGpsCategoryEnName` | String | 英文名称 | ⬜ | |
| `gpsCategoryLevelConfig` | Integer | GPS品类level配置 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |

---

### 58. CategoryNodeEntity

**标准化名称**: `categorynode`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/CategoryNodeEntity.java`

**关系统计**:

- 总关系数: 49
- 出向关系: 28
- 入向关系: 21

**出向关系类型**:

- `involves_create`: 8
- `involves_delete`: 3
- `involves_move`: 1
- `involves_other`: 7
- `involves_query`: 4
- `involves_update`: 5

**入向关系类型**:

- `involves_create`: 1
- `involves_update`: 1
- `queries_exists`: 2
- `queries_other`: 17

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `parentId` | Long | 英文ID | ⬜ | |
| `treeId` | Long | treeID | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `zhName` | String | 中文名称 | ⬜ | |
| `enName` | String | 英文名称 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `nodeVersion` | String | 节点版本 | ⬜ | |
| `level` | Integer | level | ⬜ | |
| `sapMaterialGroupNo` | String | 物料编号 | ⬜ | |
| `sort` | Integer | SOR | ⬜ | |
| `isLeaf` | Boolean | 是否Leaf | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `isLastLevel` | Boolean | 是否LastLevel | ⬜ | |
| `gpsCategoryAffiliation` | String | GPS品类归属 | ⬜ | |
| `tree` | CategoryTreeEntity | tree | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `treeVersion` | String | tree版本 | ⬜ | |
| `status` | CategoryStatus | 状态 | ⬜ | |
| `extInfo` | CategoryNodeExtInfoVO | 扩展信息 | ⬜ | |
| `parent` | CategoryNodeEntity | parent | ⬜ | |
| `comparedNodeEntity` | CategoryNodeEntity | compared节点 | ⬜ | |
| `nodeChangesCompared2TargetNode` | CategoryNodeChangeDescVO | 节点变更compared目标节点 | ⬜ | |
| `categoryRepository` | CategoryRepository | 品类仓储 | ⬜ | |

---

### 59. CategoryNodeLabelEntity

**标准化名称**: `categorynodelabel`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/CategoryNodeLabelEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 0
- 入向关系: 2

**入向关系类型**:

- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `categoryNodeId` | Long | 编号ID | ⬜ | |
| `categoryRepository` | ICategoryRepository | 品类仓储 | ⬜ | |

---

### 60. CategoryTreeEntity

**标准化名称**: `categorytree`

**层级**: L2-Supporting

**推理中文含义**: 品类

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/CategoryTreeEntity.java`

**关系统计**:

- 总关系数: 50
- 出向关系: 9
- 入向关系: 41

**出向关系类型**:

- `involves_create`: 2
- `involves_delete`: 3
- `involves_other`: 1
- `involves_query`: 1
- `involves_update`: 2

**入向关系类型**:

- `involves_create`: 5
- `involves_delete`: 6
- `involves_move`: 1
- `involves_other`: 4
- `involves_query`: 3
- `involves_update`: 3
- `queries_get`: 1
- `queries_other`: 18

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `treeVersion` | String | tree版本 | ⬜ | |
| `preTreeId` | Long | 采购申请ID | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `gpsCategoryAffiliation` | String | GPS品类归属 | ⬜ | |
| `status` | CategoryStatus | 状态 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `root` | CategoryNodeEntity | root | ⬜ | |
| `categoryTreeRepository` | ICategoryRepository | 品类tree仓储 | ⬜ | |
| `latestTreeEntity` | CategoryTreeEntity | 测试tree | ⬜ | |

---

### 61. CBPCategoryEntity

**标准化名称**: `cbpcategory`

**层级**: L2-Supporting

**推理中文含义**: 品类

**当前描述**: @author xuwen.huang

**包路径**: `com.nio.srm.gps.sourcing.domain.cbpcategory`

**文件路径**: `com/nio/srm/gps/sourcing/domain/cbpcategory/CBPCategoryEntity.java`

**关系统计**:

- 总关系数: 9
- 出向关系: 5
- 入向关系: 4

**出向关系类型**:

- `involves_update`: 3
- `queries_get`: 1
- `queries_other`: 1

**入向关系类型**:

- `involves_update`: 2
- `queries_get`: 1
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `businessUnit` | String | BU单位 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `categoryBizType` | String | 品类业务类型 | ⬜ | |
| `firstLevelGpsCategoryCode` | String | 品类编码 | ⬜ | |
| `firstLevelGpsCategoryName` | String | 品类名称 | ⬜ | |
| `categoryConfigLevel` | Integer | 品类配置level | ⬜ | |
| `cbpCategoryRepository` | CBPCategoryRepository | BP品类仓储 | ⬜ | |

---

### 62. ChangeTaskEntity

**标准化名称**: `changetask`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/ChangeTaskEntity.java`

**关系统计**:

- 总关系数: 20
- 出向关系: 11
- 入向关系: 9

**出向关系类型**:

- `involves_other`: 1
- `involves_update`: 2
- `queries_other`: 6
- `queries_queryBy`: 2

**入向关系类型**:

- `involves_other`: 1
- `involves_update`: 2
- `queries_other`: 6

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `bizSourceId` | Long | 来源ID | ⬜ | |
| `bizCode` | String | 业务编码 | ⬜ | |
| `bizChangeType` | String | 业务变更类型 | ⬜ | |
| `changeNo` | String | 变更编号 | ⬜ | |
| `changeStatus` | String | 变更状态 | ⬜ | |
| `changeTime` | LocalDateTime | 变更时间 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |

---

### 63. ChangeTaskDetailEntity

**标准化名称**: `changetaskdetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/ChangeTaskDetailEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `changeTaskId` | Long | 任务ID | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `bizSourceId` | Long | 来源ID | ⬜ | |
| `bizCode` | String | 业务编码 | ⬜ | |
| `changeProperty` | String | 变更采购申请 | ⬜ | |
| `changeBefore` | String | 变更之前 | ⬜ | |
| `changeAfter` | String | 变更后续 | ⬜ | |
| `bizChangeType` | String | 业务变更类型 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |

---

### 64. ChangeTaskSnapshotEntity

**标准化名称**: `changetasksnapshot`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/ChangeTaskSnapshotEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 4
- 入向关系: 0

**出向关系类型**:

- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `changeNo` | String | 变更编号 | ⬜ | |
| `changeTaskId` | Long | 任务ID | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `bizSourceId` | Long | 来源ID | ⬜ | |
| `bizCode` | String | 业务编码 | ⬜ | |
| `lineNo` | Integer | 行编号 | ⬜ | |
| `snapshot` | String | 快照 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |

---

### 65. ClmCategoryEntity

**标准化名称**: `clmcategory`

**层级**: L2-Supporting

**推理中文含义**: 品类

**当前描述**: 三级销售类目编码

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/ClmCategoryEntity.java`

**关系统计**:

- 总关系数: 8
- 出向关系: 4
- 入向关系: 4

**出向关系类型**:

- `queries_other`: 4

**入向关系类型**:

- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `clmCategoryThirdLevelCode` | String | 品类编码 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `clmCategoryFirstLevelCode` | String | 品类编码 | ⬜ | |
| `clmCategorySecondLevelCode` | String | 品类编码 | ⬜ | |
| `clmCategoryFirstLevelZhName` | String | 中文名称 | ⬜ | |
| `clmCategorySecondLevelZhName` | String | 中文名称 | ⬜ | |
| `clmCategoryThirdLevelZhName` | String | 中文名称 | ⬜ | |
| `clmCategoryFirstLevelEnName` | String | 英文名称 | ⬜ | |
| `clmCategorySecondLevelEnName` | String | 英文名称 | ⬜ | |
| `clmCategoryThirdLevelEnName` | String | 英文名称 | ⬜ | |

---

### 66. ContactPersonInfoEntity

**标准化名称**: `contactpersoninfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: @author reno.zeng

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/ContactPersonInfoEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorId` | Long | 供应商ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `name` | String | 名称 | ⬜ | |
| `position` | String | 采购订单 | ⬜ | |
| `duty` | String | duty | ⬜ | |
| `email` | String | 邮箱 | ⬜ | |
| `telephone` | String | 电话 | ⬜ | |
| `mobilePhone` | String | mobile电话 | ⬜ | |
| `telephoneExtension` | String | 电话 | ⬜ | |
| `isDefault` | Boolean | 是否Default | ⬜ | |

---

### 67. ContractAttachmentEntity

**标准化名称**: `contractattachment`

**层级**: L2-Supporting

**推理中文含义**: 合同

**当前描述**: 合同附件

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/ContractAttachmentEntity.java`

**关系统计**:

- 总关系数: 10
- 出向关系: 9
- 入向关系: 1

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 5
- `involves_query`: 2
- `involves_update`: 1

**入向关系类型**:

- `involves_move`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `contractId` | Long | 合同ID | ⬜ | |
| `contractAttachmentTypeCode` | String | 类型编码 | ⬜ | |
| `originalAttachmentFile` | ContractAttachmentFileVO | 原始附件文件 | ⬜ | |
| `unsignedAttachmentFile` | ContractAttachmentFileVO | 未签署附件文件 | ⬜ | |
| `signedAttachmentFile` | ContractAttachmentFileVO | 已签署附件文件 | ⬜ | |
| `description` | String | 描述 | ⬜ | |
| `clmsContractNo` | String | 合同编号 | ⬜ | |
| `requireSign` | Boolean | require签署 | ⬜ | |
| `requireSyncToNexus` | Boolean | require同步总计nexus | ⬜ | |
| `available` | Boolean | available | ⬜ | |
| `fileName` | String | 文件名称 | ⬜ | |
| `byteSize` | Long | 通过size | ⬜ | |
| `fileMd5` | String | 文件MD5 | ⬜ | |
| `storageKey` | String | 存储key | ⬜ | |
| `uploaderAccount` | String | uploaderAc数量 | ⬜ | |
| `uploaderName` | String | uploader名称 | ⬜ | |
| `uploadTime` | LocalDateTime | 已上传时间 | ⬜ | |
| `extInfo` | ExtInfo | 扩展信息 | ⬜ | |

---

### 68. ContractPartyEntity

**标准化名称**: `contractparty`

**层级**: L2-Supporting

**推理中文含义**: 合同

**当前描述**: @author d.heng

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/ContractPartyEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `contractId` | Long | 合同ID | ⬜ | |
| `code` | String | 编码 | ⬜ | |
| `creditCode` | String | credit编码 | ⬜ | |
| `creditCodeType` | CreditCodeType | credit编码类型 | ⬜ | |
| `legalPerson` | String | 法务person | ⬜ | |
| `companyName` | ContractLocaleString | 公司名称 | ⬜ | |
| `companyAddress` | ContractLocaleString | 公司地址 | ⬜ | |
| `zipCode` | String | IP编码 | ⬜ | |
| `contactName` | String | TA名称 | ⬜ | |
| `contactPhone` | String | TA电话 | ⬜ | |
| `contactEmail` | String | TA邮箱 | ⬜ | |
| `contactPosition` | String | TA采购订单 | ⬜ | |
| `onlineSign` | Boolean | 在线签署 | ⬜ | |
| `signMethod` | FrameworkSignMethodEnum | 签署method | ⬜ | |
| `signed` | Boolean | 已签署 | ⬜ | |
| `signaturePlatformUrl` | String | 签署platformURL | ⬜ | |
| `type` | PartyType | 类型 | ⬜ | |
| `description` | String | 描述 | ⬜ | |
| `countryId` | Long | 数量ID | ⬜ | |
| `country` | String | 账号 | ⬜ | |
| `countryCode` | String | 数量编码 | ⬜ | |
| `companyNameZh` | String | 名称中文 | ⬜ | |
| `companyNameEn` | String | 名称英文 | ⬜ | |

---

### 69. CostBomEntity

**标准化名称**: `costbom`

**层级**: L2-Supporting

**推理中文含义**: 成本

**当前描述**: 

**包路径**: `com.nio.srm.gps.cost.domain.costModel.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/costModel/entity/CostBomEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 1
- 入向关系: 2

**出向关系类型**:

- `queries_other`: 1

**入向关系类型**:

- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `parentMaterialCode` | String | 物料编码 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `quantity` | BigDecimal | quantity | ⬜ | |

---

### 70. CostEntityRelEntity

**标准化名称**: `costentityrel`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: 

**包路径**: `com.nio.srm.gps.price.domain.estimation.entity`

**文件路径**: `com/nio/srm/gps/price/domain/estimation/entity/CostEntityRelEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 1
- 入向关系: 0

**出向关系类型**:

- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `bizType` | String | 业务类型 | ⬜ | |
| `costEntityRelType` | CostEntityRelTypeEnum | 成本关系类型 | ⬜ | |
| `bizId` | Long | 业务ID | ⬜ | |
| `bizSourceCode` | String | 来源编码 | ⬜ | |
| `targetId` | String | 目标ID | ⬜ | |
| `effective` | Boolean | 生效 | ⬜ | |

---

### 71. CucoEntity

**标准化名称**: `cuco`

**层级**: L2-Supporting

**推理中文含义**: cuco

**当前描述**: @author joe.jiang

**包路径**: `com.nio.srm.gps.price.domain.cuco`

**文件路径**: `com/nio/srm/gps/price/domain/cuco/CucoEntity.java`

**关系统计**:

- 总关系数: 30
- 出向关系: 21
- 入向关系: 9

**出向关系类型**:

- `involves_move`: 1
- `involves_other`: 2
- `involves_query`: 3
- `involves_validate`: 5
- `queries_getBy`: 1
- `queries_other`: 1
- `queries_queryBy`: 8

**入向关系类型**:

- `involves_other`: 4
- `involves_query`: 1
- `involves_validate`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `plmCucoNo` | String | PLM编号 | ⬜ | |
| `plmCaNo` | String | PLM编号 | ⬜ | |
| `plmCrNo` | String | PLM编号 | ⬜ | |
| `plmProjectName` | String | 项目名称 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialRevision` | String | 物料是 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `plmVendorCode` | String | 供应商编码 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryZhName` | String | 中文名称 | ⬜ | |
| `gpsCategoryEnName` | String | 英文名称 | ⬜ | |
| `ppCurrency` | String | 供应商货币 | ⬜ | |
| `toolingCurrency` | String | 工具货币 | ⬜ | |
| `eddCurrency` | String | edd货币 | ⬜ | |
| `scrapCurrency` | String | scrap货币 | ⬜ | |
| `isNewMaterial` | String | 是否物料 | ⬜ | |
| `oldMaterialCode` | String | 物料编码 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `approveStatus` | String | 审批状态 | ⬜ | |
| `ppInitialAmount` | BigDecimal | ppInitial金额 | ⬜ | |
| `ppbInitialAmount` | BigDecimal | ppbInitial金额 | ⬜ | |
| `toolingInitialAmount` | BigDecimal | 工具金额 | ⬜ | |
| `eddInitialAmount` | BigDecimal | eddInitial金额 | ⬜ | |
| `scrapInitialAmount` | BigDecimal | scrapInitial金额 | ⬜ | |
| `ppDeltaAmount` | BigDecimal | TA金额 | ⬜ | |
| `ppbDeltaAmount` | BigDecimal | TA金额 | ⬜ | |
| `toolingDeltaAmount` | BigDecimal | 工具金额 | ⬜ | |
| `eddDeltaAmount` | BigDecimal | TA金额 | ⬜ | |
| `scrapDeltaAmount` | BigDecimal | TA金额 | ⬜ | |
| `submitPriceExtInfo` | CucoSubmitPriceExtInfo | submit价格扩展信息 | ⬜ | |
| `makeOrBuy` | String | make订单采购员 | ⬜ | |
| `consignmentOrDirectBuy` | String | 签署订单direct采购员 | ⬜ | |
| `cucoStatus` | CucoStatusEnum | cuco状态 | ⬜ | |
| `plmAuditBy` | String | PLM审核通过 | ⬜ | |
| `isUpdateBuyerAccount` | Boolean | 日期数量 | ⬜ | |
| `plmSyncInfo` | SyncCucoInfo | PLM同步信息 | ⬜ | |
| `reason` | String | reason | ⬜ | |
| `extInfo` | ExtInfo | 扩展信息 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `platformPartFlag` | Boolean | platform部分标志 | ⬜ | |
| `pendingPriceFlowStatus` | CucoPendingPriceFlowStatusEnum | 待处理价格流程状态 | ⬜ | |
| `toolingDemandCode` | String | 需求编码 | ⬜ | |
| `toolingDemandStatus` | String | 工具需求状态 | ⬜ | |
| `toolingDemandEditable` | Boolean | 工具需求TA | ⬜ | |
| `eddDemandCode` | String | 需求编码 | ⬜ | |
| `eddDemandStatus` | String | edd需求状态 | ⬜ | |
| `eddDemandEditable` | Boolean | edd需求TA | ⬜ | |
| `platformPartFlag` | Boolean | platform部分标志 | ⬜ | |
| `generatePriceFlowSource` | CucoGeneratePriceFlowSourceEnum | 生成价格流程来源 | ⬜ | |
| `pendingPriceFlowInfo` | PendingPriceFlowInfo | 待处理价格流程信息 | ⬜ | |
| `cucoPriceType` | CucoPriceTypeEnum | cuco价格类型 | ⬜ | |

---

### 72. CucoProjectInfoEntity

**标准化名称**: `cucoprojectinfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.cuco`

**文件路径**: `com/nio/srm/gps/price/domain/cuco/CucoProjectInfoEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `cucoProjectCode` | String | 项目编码 | ⬜ | |
| `gpsProjectCode` | String | GPS编码 | ⬜ | |
| `gpsProjectStatus` | GpsProjectStatus | GPS项目状态 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 73. CurrencyEntity

**标准化名称**: `currency`

**层级**: L2-Supporting

**推理中文含义**: 货币

**当前描述**: 

**包路径**: `com.nio.srm.gps.maindata.domain.currency`

**文件路径**: `com/nio/srm/gps/maindata/domain/currency/CurrencyEntity.java`

**关系统计**:

- 总关系数: 6
- 出向关系: 4
- 入向关系: 2

**出向关系类型**:

- `queries_other`: 2
- `queries_queryBy`: 2

**入向关系类型**:

- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `currencyCode` | String | 货币编码 | ⬜ | |
| `zhCurrencyDesc` | String | 货币描述 | ⬜ | |
| `enCurrencyDesc` | String | 货币描述 | ⬜ | |

---

### 74. DataDictEntity

**标准化名称**: `datadict`

**层级**: L2-Supporting

**推理中文含义**: 数据

**当前描述**: 

**包路径**: `com.nio.srm.gps.maindata.domain.dict`

**文件路径**: `com/nio/srm/gps/maindata/domain/dict/DataDictEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 2
- 入向关系: 0

**出向关系类型**:

- `queries_queryBy`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `dictType` | String | dict类型 | ⬜ | |
| `dictKey` | String | dictkey | ⬜ | |
| `keyCode` | String | key编码 | ⬜ | |
| `zhDictValue` | String | 中文dictvalue | ⬜ | |
| `enDictValue` | String | dictvalue | ⬜ | |
| `description` | String | 描述 | ⬜ | |
| `iDataDictRepository` | IDataDictRepository | ID数据dict仓储 | ⬜ | |

---

### 75. DeadLetterRecordAggregate

**标准化名称**: `deadletterrecord`

**层级**: L2-Supporting

**推理中文含义**: 信函

**当前描述**: 死信消息记录

**包路径**: `com.nio.srm.gps.contract.domain.aggregate`

**文件路径**: `com/nio/srm/gps/contract/domain/aggregate/DeadLetterRecordAggregate.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `uuid` | String | UUIDID | ⬜ | |
| `topic` | String | topic | ⬜ | |
| `content` | String | 内容 | ⬜ | |
| `exceptionStack` | String | CETA | ⬜ | |
| `recordTime` | LocalDateTime | record时间 | ⬜ | |

---

### 76. DemandItemEntity

**标准化名称**: `demanditem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: @author quan.liang

**包路径**: `com.nio.srm.gps.demand.domain.demand.entity`

**文件路径**: `com/nio/srm/gps/demand/domain/demand/entity/DemandItemEntity.java`

**关系统计**:

- 总关系数: 5
- 出向关系: 4
- 入向关系: 1

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 1
- `involves_update`: 2

**入向关系类型**:

- `queries_get`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `demandId` | Long | 需求ID | ⬜ | |
| `batchNo` | String | batch编号 | ⬜ | |
| `gpsDemandCode` | String | 需求编码 | ⬜ | |
| `gpsDemandItemCode` | String | 项编码 | ⬜ | |
| `sourceNo` | String | 来源编号 | ⬜ | |
| `lineNo` | Integer | 行编号 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `pilotProjectNo` | String | 项目编号 | ⬜ | |
| `pilotStage` | String | pilot阶段 | ⬜ | |
| `vehicleProject` | String | vehicle项目 | ⬜ | |
| `receiverInfo` | ReceiverInfo | CE信息 | ⬜ | |
| `prInfo` | PrInfo | 采购申请信息 | ⬜ | |
| `priceInfo` | PriceVO | 价格信息 | ⬜ | |
| `taxInfo` | TaxVO | 税信息 | ⬜ | |
| `purchaseInfo` | PurchaseInfo | 采购信息 | ⬜ | |
| `orderInfo` | OrderVO | 订单信息 | ⬜ | |
| `vendorInfo` | VendorVO | 供应商信息 | ⬜ | |
| `settlementInfo` | SettlementVO | 信息 | ⬜ | |
| `inventoryAddress` | String | 地址 | ⬜ | |
| `reason` | String | reason | ⬜ | |
| `failReason` | String | failreason | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `checkResult` | String | checkresult | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `displayStatus` | String | 是状态 | ⬜ | |
| `demandType` | String | 需求类型 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `compensationItemInfo` | CompensationItemVO | 项信息 | ⬜ | |
| `toolingEddChangeList` | ToolingEddChangeListVO | 工具edd变更列表 | ⬜ | |
| `demandLogicDecisionVO` | DemandLogicDecisionVO | 需求日志是凭证 | ⬜ | |
| `demandConfigHelper` | DemandConfigHelper | 需求配置助手 | ⬜ | |

---

### 77. DeviationApprovalEntity

**标准化名称**: `deviationapproval`

**层级**: L2-Supporting

**推理中文含义**: 偏差

**当前描述**: @Desc

**包路径**: `com.nio.srm.gps.vendor.domain.deviation.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/deviation/entity/DeviationApprovalEntity.java`

**关系统计**:

- 总关系数: 13
- 出向关系: 7
- 入向关系: 6

**出向关系类型**:

- `queries_get`: 6
- `queries_other`: 1

**入向关系类型**:

- `queries_get`: 6

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `deviationCode` | String | 偏差编码 | ⬜ | |
| `deviationType` | DeviationTypeEnum | 偏差类型 | ⬜ | |
| `sourceNo` | String | 来源编号 | ⬜ | |
| `assessName` | DeviationAssessEnum | assess名称 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `vehicleModel` | String | vehicle模式 | ⬜ | |
| `quoteRoundNo` | Integer | 报价编号 | ⬜ | |
| `rfqName` | String | 询价名称 | ⬜ | |
| `projectAssessResult` | String | 项目assessresult | ⬜ | |
| `causeOfDeviation` | String | cause线下偏差 | ⬜ | |
| `improvementMeasures` | String | 计量 | ⬜ | |
| `applyStatus` | DeviationStatusEnum | 申请状态 | ⬜ | |
| `flowInstanceStatus` | String | 流程CE状态 | ⬜ | |
| `flowInstanceId` | String | CEID | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `assessDetailId` | String | 明细ID | ⬜ | |
| `workFlowCode` | String | 工作流编码 | ⬜ | |
| `workFlowTest` | Boolean | 工作流流程测试 | ⬜ | |
| `deviationApprovalRepository` | DeviationApprovalRepository | 偏差采购申请仓储 | ⬜ | |
| `fileMapper` | FileMapper | 文件映射器 | ⬜ | |
| `workflowApiClient` | WorkflowApiClient | 工作流api | ⬜ | |
| `logRecordRepository` | LogRecordRepository | 日志record仓储 | ⬜ | |
| `impulseSenderFacade` | ImpulseSenderFacade | impulse门面 | ⬜ | |
| `assessInfraService` | AssessInfraService | assessinfra服务 | ⬜ | |
| `vendorGenerateSignUrlUtil` | VendorGenerateSignUrlUtil | 供应商生成签署URL工具 | ⬜ | |
| `deviationGenerateSignUrlUtil` | DeviationGenerateSignUrlUtil | 偏差生成签署URL工具 | ⬜ | |
| `vendorInfoGlobalizationExchangeUtils` | VendorInfoGlobalizationExchangeUtils | 供应商信息全球汇率工具 | ⬜ | |
| `sourcingFacade` | SourcingFacade | sourcing门面 | ⬜ | |
| `workflowService` | WorkflowService | 工作流服务 | ⬜ | |

---

### 78. DocumentTransferEntity

**标准化名称**: `documenttransfer`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: @author danny.shi

**包路径**: `com.nio.srm.gps.auth.domain.entity`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/DocumentTransferEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `batchNo` | String | batch编号 | ⬜ | |
| `documentType` | String | 类型 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `documentId` | Long | 英文ID | ⬜ | |
| `documentCode` | String | 英文编码 | ⬜ | |
| `status` | DocumentTransferStatusEnum | 状态 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `receiverAccount` | String | CE数量 | ⬜ | |
| `receiverCostCenterCode` | String | 英文编码 | ⬜ | |
| `errorMessage` | String | error消息 | ⬜ | |

---

### 79. DomainEventEntity

**标准化名称**: `domainevent`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: 领域事件 Entity

**包路径**: `com.nio.srm.gps.cost.domain.internal.event`

**文件路径**: `com/nio/srm/gps/cost/domain/internal/event/DomainEventEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `eventId` | String | 英文ID | ⬜ | |
| `eventType` | String | 类型 | ⬜ | |
| `eventData` | String | 数据 | ⬜ | |
| `eventSource` | String | 来源 | ⬜ | |
| `eventStatus` | String | 状态 | ⬜ | |
| `eventHandler` | String | handler | ⬜ | |
| `syncOrAsync` | Boolean | 同步订单同步 | ⬜ | |
| `msgId` | String | msgID | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 80. DomainModelDefinitionEntity

**标准化名称**: `domainmodeldefinition`

**层级**: L2-Supporting

**推理中文含义**: 主

**当前描述**: 模板定义改为叫【领域模型定义】

**包路径**: `com.nio.srm.gps.template.domain.model.template.explore`

**文件路径**: `com/nio/srm/gps/template/domain/model/template/explore/DomainModelDefinitionEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Integer | ID | ⬜ | |
| `modelCode` | String | 模式编码 | ⬜ | |
| `modelName` | String | 模式名称 | ⬜ | |
| `modelDesc` | String | 模式描述 | ⬜ | |
| `isMultiInstance` | Boolean | 是否CE | ⬜ | |
| `isAggregateRoot` | Boolean | 是否收货单 | ⬜ | |
| `wrapFieldName` | String | wrapField名称 | ⬜ | |
| `gpsPriceCode` | String | 价格编码 | ⬜ | |

---

### 81. DpBomEntity

**标准化名称**: `dpbom`

**层级**: L2-Supporting

**推理中文含义**: dpbom

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.assembly`

**文件路径**: `com/nio/srm/gps/price/domain/assembly/DpBomEntity.java`

**关系统计**:

- 总关系数: 61
- 出向关系: 27
- 入向关系: 34

**出向关系类型**:

- `involves_compute`: 5
- `involves_convert`: 2
- `involves_create`: 2
- `involves_other`: 3
- `involves_query`: 1
- `involves_update`: 3
- `queries_other`: 11

**入向关系类型**:

- `involves_compute`: 4
- `involves_convert`: 1
- `involves_create`: 2
- `involves_other`: 3
- `involves_query`: 1
- `involves_update`: 5
- `queries_other`: 18

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `materialZhName` | String | 物料名称 | ⬜ | |
| `materialEnName` | String | 物料名称 | ⬜ | |
| `parentMaterialCode` | String | 物料编码 | ⬜ | |
| `supplyStatus` | MaterialSupplyStatusEnum | supply状态 | ⬜ | |
| `consumptionCount` | BigDecimal | consumption数量 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `structType` | DpBomStructType | struct类型 | ⬜ | |
| `tierZeroPointFiveCoNo` | String | 采购订单编号 | ⬜ | |
| `makeOrBuy` | String | make订单采购员 | ⬜ | |
| `consignmentOrDirectBuy` | String | 签署订单direct采购员 | ⬜ | |
| `quantity` | BigDecimal | quantity | ⬜ | |
| `industry` | String | 行业 | ⬜ | |

---

### 82. DpCnvlBomEntity

**标准化名称**: `dpcnvlbom`

**层级**: L2-Supporting

**推理中文含义**: dpcnvlbom

**当前描述**: 子bom行

**包路径**: `com.nio.srm.gps.material.domain.bom`

**文件路径**: `com/nio/srm/gps/material/domain/bom/DpCnvlBomEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `parentMaterialCode` | String | 物料编码 | ⬜ | |
| `makeOrBuy` | String | make订单采购员 | ⬜ | |
| `consignmentOrDirectBuy` | String | 签署订单direct采购员 | ⬜ | |
| `quantity` | BigDecimal | quantity | ⬜ | |

---

### 83. DpEIPbomEntity

**标准化名称**: `dpeipbom`

**层级**: L2-Supporting

**推理中文含义**: IP

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.material.dp`

**文件路径**: `com/nio/srm/gps/material/domain/material/dp/DpEIPbomEntity.java`

**关系统计**:

- 总关系数: 5
- 出向关系: 0
- 入向关系: 5

**入向关系类型**:

- `involves_create`: 1
- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `rootMaterialCode` | String | 物料编码 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `partNumber` | String | 部分编号 | ⬜ | |
| `revision` | String | 是 | ⬜ | |
| `quantity` | BigDecimal | quantity | ⬜ | |
| `makeOrBuy` | String | make订单采购员 | ⬜ | |
| `consignmentOrDirectBuy` | String | 签署订单direct采购员 | ⬜ | |
| `unitOfMeasure` | String | 单位线下计量 | ⬜ | |
| `zhPartName` | String | 中文名称 | ⬜ | |
| `enPartName` | String | 英文名称 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |

---

### 84. DpFullBomEntity

**标准化名称**: `dpfullbom`

**层级**: L2-Supporting

**推理中文含义**: dpfullbom

**当前描述**: 子bom行

**包路径**: `com.nio.srm.gps.material.domain.bom`

**文件路径**: `com/nio/srm/gps/material/domain/bom/DpFullBomEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `parentMaterialCode` | String | 物料编码 | ⬜ | |
| `makeOrBuy` | String | make订单采购员 | ⬜ | |
| `consignmentOrDirectBuy` | String | 签署订单direct采购员 | ⬜ | |
| `quantity` | BigDecimal | quantity | ⬜ | |
| `tierZeroPointFiveCoNo` | String | 采购订单编号 | ⬜ | |

---

### 85. DpPbomEntity

**标准化名称**: `dppbom`

**层级**: L2-Supporting

**推理中文含义**: dppbom

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.material.dp`

**文件路径**: `com/nio/srm/gps/material/domain/material/dp/DpPbomEntity.java`

**关系统计**:

- 总关系数: 8
- 出向关系: 2
- 入向关系: 6

**出向关系类型**:

- `involves_create`: 2

**入向关系类型**:

- `involves_other`: 2
- `involves_query`: 1
- `queries_other`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `model` | String | 模式 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `svPartitionCode` | String | 部分编码 | ⬜ | |
| `fna` | String | fna | ⬜ | |
| `zhUsageName` | String | 中文名称 | ⬜ | |
| `enUsageName` | String | 英文名称 | ⬜ | |
| `region` | String | region | ⬜ | |
| `makeOrBuy` | String | make订单采购员 | ⬜ | |
| `consignmentOrDirectBuy` | String | 签署订单direct采购员 | ⬜ | |
| `dmodFlag` | Boolean | dmod标志 | ⬜ | |
| `maxQuantityPerVehicle` | BigDecimal | maxquantity百分比vehicle | ⬜ | |
| `shop` | String | shop | ⬜ | |
| `svProdReleaseFlag` | Boolean | sv采购申请release标志 | ⬜ | |
| `effectDate` | LocalDateTime | 生效日期 | ⬜ | |
| `expireDate` | LocalDateTime | 过期日期 | ⬜ | |
| `requestBatchNo` | String | 申请编号 | ⬜ | |
| `material` | DpMaterialEntity | 物料 | ⬜ | |

---

### 86. DropDemandItemListPriceExecLifecycleEntity

**标准化名称**: `dropdemanditemlistpriceexeclifecycle`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author quan.liang

**包路径**: `com.nio.srm.gps.demand.domain.demand.component.process`

**文件路径**: `com/nio/srm/gps/demand/domain/demand/component/process/DropDemandItemListPriceExecLifecycleEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `demandDomainService` | DemandDomainService | 需求主服务 | ⬜ | |

---

### 87. DropDemandItemPriceTaskLifecycleEntity

**标准化名称**: `dropdemanditempricetasklifecycle`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author quan.liang

**包路径**: `com.nio.srm.gps.demand.domain.demand.component.process`

**文件路径**: `com/nio/srm/gps/demand/domain/demand/component/process/DropDemandItemPriceTaskLifecycleEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| (无属性) | - | - | - | - |

---

### 88. EstimationEntity

**标准化名称**: `estimation`

**层级**: L2-Supporting

**推理中文含义**: 估算

**当前描述**: 

**包路径**: `com.nio.srm.gps.cost.domain.estimation.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/estimation/entity/EstimationEntity.java`

**关系统计**:

- 总关系数: 24
- 出向关系: 9
- 入向关系: 15

**出向关系类型**:

- `involves_compute`: 1
- `involves_other`: 3
- `involves_update`: 2
- `queries_other`: 1
- `queries_queryBy`: 2

**入向关系类型**:

- `involves_create`: 3
- `involves_other`: 5
- `involves_query`: 1
- `involves_update`: 3
- `involves_validate`: 1
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `ceCode` | String | CE编码 | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `source` | String | 来源 | ⬜ | |
| `sourceCode` | String | 来源编码 | ⬜ | |
| `sourceName` | String | 来源名称 | ⬜ | |
| `sourceStatus` | String | 来源状态 | ⬜ | |
| `applyAccount` | String | 申请数量 | ⬜ | |
| `applyName` | String | 申请名称 | ⬜ | |
| `applyTime` | ZonedDateTime | 申请时间 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `ceAccount` | String | CE数量 | ⬜ | |
| `ceName` | String | CE名称 | ⬜ | |
| `finishTime` | ZonedDateTime | 是时间 | ⬜ | |
| `finishTimeDeadline` | ZonedDateTime | 是时间截止 | ⬜ | |
| `categoryAffiliation` | String | 品类归属 | ⬜ | |
| `categoryCode` | String | 品类编码 | ⬜ | |
| `categoryName` | String | 品类名称 | ⬜ | |
| `quoteTemplateId` | Long | 报价ID | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `totalPrice` | BigDecimal | 总价格 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `urgent` | Boolean | urgent | ⬜ | |
| `costCommonConfigHelper` | CostCommonConfigHelper | 成本common配置助手 | ⬜ | |

---

### 89. EstimationCountEntity

**标准化名称**: `estimationcount`

**层级**: L2-Supporting

**推理中文含义**: 数量

**当前描述**: 

**包路径**: `com.nio.srm.gps.cost.domain.estimation.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/estimation/entity/EstimationCountEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 0
- 入向关系: 2

**入向关系类型**:

- `involves_compute`: 1
- `involves_update`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `count` | Long | 数量 | ⬜ | |
| `key` | EstimationCountKeyEnum | key | ⬜ | |

---

### 90. EstimationItemEntity

**标准化名称**: `estimationitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: @author joe.jiang

**包路径**: `com.nio.srm.gps.price.domain.estimation.entity`

**文件路径**: `com/nio/srm/gps/price/domain/estimation/entity/EstimationItemEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsPriceEstimationTaskId` | Long | 价格ID | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `salesArea` | String | salesarea | ⬜ | |
| `positionLevel` | String | 采购订单level | ⬜ | |
| `quantity` | Integer | quantity | ⬜ | |
| `perVehicleUsageCount` | BigDecimal | perVehicleUsage数量 | ⬜ | |
| `specifications` | String | specifications | ⬜ | |
| `placeOfDeparture` | String | 地点线下部分 | ⬜ | |
| `destination` | String | destination | ⬜ | |
| `transportMode` | String | 采购订单模式 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `materialMeasureUnit` | String | 物料计量单位 | ⬜ | |
| `materialPriceUnit` | String | 物料价格单位 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `effectDate` | LocalDateTime | 生效日期 | ⬜ | |
| `expireDate` | LocalDateTime | 过期日期 | ⬜ | |
| `materialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `logisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `mouldPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `rdPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `estimationPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `deleteTime` | LocalDateTime | 删除时间 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `itemTaskStatus` | EstimationItemTaskStatusEnum | 项任务状态 | ⬜ | |
| `costEntityRel` | CostEntityRelEntity | 成本关系 | ⬜ | |

---

### 91. EstimationMaterialEntity

**标准化名称**: `estimationmaterial`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 

**包路径**: `com.nio.srm.gps.cost.domain.estimation.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/estimation/entity/EstimationMaterialEntity.java`

**关系统计**:

- 总关系数: 5
- 出向关系: 2
- 入向关系: 3

**出向关系类型**:

- `involves_other`: 1
- `queries_queryBy`: 1

**入向关系类型**:

- `involves_other`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `ceCode` | String | CE编码 | ⬜ | |
| `bizMaterialCode` | String | 物料编码 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `sapTaxRate` | BigDecimal | SAP税率 | ⬜ | |
| `unitPriceWithTax` | BigDecimal | 单位价格含税 | ⬜ | |
| `unitPrice` | BigDecimal | 单位价格 | ⬜ | |

---

### 92. EstimationTaskEntity

**标准化名称**: `estimationtask`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: @author joe.jiang

**包路径**: `com.nio.srm.gps.price.domain.estimation.entity`

**文件路径**: `com/nio/srm/gps/price/domain/estimation/entity/EstimationTaskEntity.java`

**关系统计**:

- 总关系数: 24
- 出向关系: 18
- 入向关系: 6

**出向关系类型**:

- `involves_create`: 1
- `involves_move`: 1
- `involves_other`: 4
- `involves_update`: 3
- `involves_validate`: 1
- `queries_list`: 2
- `queries_other`: 6

**入向关系类型**:

- `queries_other`: 6

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsEstimationPriceTaskNo` | String | 价格编号 | ⬜ | |
| `taskDesc` | String | 任务描述 | ⬜ | |
| `taskSourceIdempotent` | String | 任务来源ID | ⬜ | |
| `taskBizSource` | BizSourceEnum | 任务业务来源 | ⬜ | |
| `taskSourceNo` | String | 任务编号 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `vehicleModel` | String | vehicle模式 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `applyTime` | LocalDateTime | 申请时间 | ⬜ | |
| `ceAccount` | String | CE数量 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `finishTime` | LocalDateTime | 是时间 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `preTaskId` | Long | 任务ID | ⬜ | |
| `taskSource` | String | 任务来源 | ⬜ | |
| `totalMaterialPriceAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalLogisticsPriceAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalMouldPriceAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalRdPriceAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalEstimationPriceAmount` | BigDecimal | 总金额 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `taskStatus` | EstimationTaskStatusEnum | 任务状态 | ⬜ | |
| `quotationType` | QuotationType | TA类型 | ⬜ | |
| `extInfo` | ExtInfo | 扩展信息 | ⬜ | |
| `submitted` | Boolean | submitted | ⬜ | |
| `rfqWithConfig` | Boolean | 询价含配置 | ⬜ | |
| `atcBizInfo` | AtcBizInfoVO | atc业务信息 | ⬜ | |
| `rfqName` | String | 询价名称 | ⬜ | |
| `bizMode` | String | 业务模式 | ⬜ | |

---

### 93. ExistedPriceEntity

**标准化名称**: `existedprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author: Tutu.Wang

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/ExistedPriceEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `supplyStatus` | MaterialSupplyStatusEnum | supply状态 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |

---

### 94. ExternalSystemMessageConversionConfigAggregate

**标准化名称**: `externalsystemmessageconversionconfig`

**层级**: L2-Supporting

**推理中文含义**: 版本

**当前描述**: @author devon.chen

**包路径**: `com.nio.srm.gps.contract.domain.aggregate`

**文件路径**: `com/nio/srm/gps/contract/domain/aggregate/ExternalSystemMessageConversionConfigAggregate.java`

**关系统计**:

- 总关系数: 5
- 出向关系: 3
- 入向关系: 2

**出向关系类型**:

- `queries_other`: 2
- `queries_queryBy`: 1

**入向关系类型**:

- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `externalSystem` | String | 扩展system | ⬜ | |
| `ruleCode` | String | rule编码 | ⬜ | |
| `ruleName` | String | rule名称 | ⬜ | |
| `convertedMessage` | ContractLocaleString | converted消息 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `lastUpdateBy` | String | last更新通过 | ⬜ | |
| `lastUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `sequence` | Integer | 序列 | ⬜ | |

---

### 95. FactoryStockLocationRelationEntity

**标准化名称**: `factorystocklocationrelation`

**层级**: L2-Supporting

**推理中文含义**: 工厂

**当前描述**: @author bunny.wang

**包路径**: `com.nio.srm.gps.maindata.domain.stocklocation`

**文件路径**: `com/nio/srm/gps/maindata/domain/stocklocation/FactoryStockLocationRelationEntity.java`

**关系统计**:

- 总关系数: 8
- 出向关系: 4
- 入向关系: 4

**出向关系类型**:

- `queries_other`: 4

**入向关系类型**:

- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `stockLocationCode` | String | stockLocation编码 | ⬜ | |
| `stockLocationCnDesc` | String | stockLocationCn描述 | ⬜ | |
| `stockLocationEnDesc` | String | 英文描述 | ⬜ | |
| `stockLocationCnAddress` | String | stocklocationcn地址 | ⬜ | |
| `stockLocationEnAddress` | String | stocklocation地址 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 96. FeiShuComponentEntity

**标准化名称**: `feishucomponent`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: 

**包路径**: `com.nio.srm.gps.sourcing.domain.feishu`

**文件路径**: `com/nio/srm/gps/sourcing/domain/feishu/FeiShuComponentEntity.java`

**关系统计**:

- 总关系数: 41
- 出向关系: 24
- 入向关系: 17

**出向关系类型**:

- `involves_create`: 2
- `involves_other`: 2
- `involves_query`: 12
- `involves_update`: 2
- `involves_validate`: 4
- `queries_getBy`: 1
- `queries_other`: 1

**入向关系类型**:

- `involves_create`: 2
- `involves_query`: 9
- `involves_update`: 3
- `involves_validate`: 2
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `docToken` | String | 文档英文 | ⬜ | |
| `componentType` | Integer | 类型 | ⬜ | |
| `data` | Object | 数据 | ⬜ | |
| `feiShuRepository` | FeiShuComponentRepository | 飞书飞书仓储 | ⬜ | |

---

### 97. FieldRecordEntity

**标准化名称**: `fieldrecord`

**层级**: L2-Supporting

**推理中文含义**: DRE

**当前描述**: 合作伙伴主数据信息变更记录

**包路径**: `com.nio.srm.gps.vendor.domain.changeinfo.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/changeinfo/entity/FieldRecordEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `group` | String | 分组 | ⬜ | |
| `itemId` | String | 项ID | ⬜ | |
| `updateType` | String | 更新类型 | ⬜ | |
| `field` | String | field | ⬜ | |
| `fieldValue` | String | fieldvalue | ⬜ | |
| `initialValue` | String | initialvalue | ⬜ | |

---

### 98. FileEntity

**标准化名称**: `file`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: 是否逻辑删除

**包路径**: `com.nio.srm.gps.order.domain.file`

**文件路径**: `com/nio/srm/gps/order/domain/file/FileEntity.java`

**关系统计**:

- 总关系数: 116
- 出向关系: 75
- 入向关系: 41

**出向关系类型**:

- `involves_create`: 2
- `involves_delete`: 4
- `involves_other`: 3
- `involves_query`: 16
- `queries_findBy`: 28
- `queries_get`: 6
- `queries_list`: 8
- `queries_other`: 8

**入向关系类型**:

- `involves_create`: 2
- `involves_delete`: 4
- `involves_other`: 3
- `involves_query`: 10
- `queries_get`: 6
- `queries_list`: 8
- `queries_other`: 8

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `bizSource` | BizSourceEnum | 业务来源 | ⬜ | |
| `bizSourceId` | Long | 来源ID | ⬜ | |
| `fileStorageType` | String | 文件存储类型 | ⬜ | |
| `fileName` | String | 文件名称 | ⬜ | |
| `fileSize` | Long | 文件size | ⬜ | |
| `fileMd5` | String | 文件MD5 | ⬜ | |
| `fileType` | String | 文件类型 | ⬜ | |
| `vendorDisplay` | boolean | 供应商是 | ⬜ | |
| `filePath` | String | 文件路径 | ⬜ | |
| `uuid` | String | UUIDID | ⬜ | |
| `fileSource` | String | 文件来源 | ⬜ | |
| `inputStream` | InputStream | inputstream | ⬜ | |
| `fileRepository` | IFileRepository | 文件仓储 | ⬜ | |
| `cosFactory` | CosFactory | 成本工厂 | ⬜ | |
| `purchaseOrderInjector` | PurchaseOrderInjector | 采购订单注入器 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `purpose` | FilePurposeEnum | 用途 | ⬜ | |
| `bizGroup` | String | 业务分组 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `fileUuid` | String | 文件ID | ⬜ | |
| `fileOwner` | String | 文件所属人 | ⬜ | |
| `fullFilePath` | String | full文件路径 | ⬜ | |
| `vendorVisible` | Boolean | 供应商可见 | ⬜ | |

---

### 99. FileRelationEntity

**标准化名称**: `filerelation`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: 

**包路径**: `com.nio.srm.gps.demand.file`

**文件路径**: `com/nio/srm/gps/demand/file/FileRelationEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `fileId` | String | 文件ID | ⬜ | |
| `bizSourceId` | String | 来源ID | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |

---

### 100. FinanceInfoEntity

**标准化名称**: `financeinfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: @author reno.zeng

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/FinanceInfoEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_select`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorId` | Long | 供应商ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `bankDetailIdentification` | String | bank明细ID | ⬜ | |
| `bankAccountName` | String | 数量名称 | ⬜ | |
| `bankAccountNo` | String | 数量编号 | ⬜ | |
| `iban` | String | iban | ⬜ | |
| `bankName` | String | bank名称 | ⬜ | |
| `interBankNo` | String | interBank编号 | ⬜ | |
| `bankCountryId` | Long | 数量ID | ⬜ | |
| `bankProvinceId` | Long | CEID | ⬜ | |
| `bankCityId` | Long | bankCityID | ⬜ | |
| `bankCountry` | String | bank账号 | ⬜ | |
| `sapBankCountryCode` | String | 数量编码 | ⬜ | |
| `bankProvince` | String | bankCE | ⬜ | |
| `sapBankProvinceCode` | String | SAP编码 | ⬜ | |
| `bankCity` | String | bankcity | ⬜ | |
| `sapBankCityCode` | String | SAP编码 | ⬜ | |
| `bankAddress` | String | bank地址 | ⬜ | |
| `bankZipcode` | String | IP编码 | ⬜ | |
| `swiftCode` | String | swift编码 | ⬜ | |

---

### 101. FinancialTargetEntity

**标准化名称**: `financialtarget`

**层级**: L2-Supporting

**推理中文含义**: 目标

**当前描述**: 财务目标价任务号; FT  + 生成日期 (yyyyMMdd) + 4 位流水号

**包路径**: `com.nio.srm.gps.cost.domain.financial.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/financial/entity/FinancialTargetEntity.java`

**关系统计**:

- 总关系数: 21
- 出向关系: 10
- 入向关系: 11

**出向关系类型**:

- `involves_create`: 1
- `involves_delete`: 1
- `involves_query`: 3
- `queries_queryBy`: 1
- `queries_select`: 4

**入向关系类型**:

- `involves_create`: 1
- `involves_delete`: 1
- `involves_other`: 2
- `involves_query`: 4
- `queries_select`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsFinancialTargetTaskNo` | String | 任务编号 | ⬜ | |
| `taskDesc` | String | 任务描述 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `taskBizSource` | String | 任务业务来源 | ⬜ | |
| `taskSourceNo` | String | 任务编号 | ⬜ | |
| `rfqName` | String | 询价名称 | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `applyTime` | LocalDateTime | 申请时间 | ⬜ | |
| `taskStatus` | FinancialTargetTaskStatusEnum | 任务状态 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `finishTime` | LocalDateTime | 是时间 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `sourceTaskWithConfig` | Boolean | 来源任务含配置 | ⬜ | |
| `quotationType` | String | TA类型 | ⬜ | |
| `taskSourceIdempotent` | String | 任务来源ID | ⬜ | |
| `deleteTime` | LocalDateTime | 删除时间 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |

---

### 102. FinancialTargetMaterialEntity

**标准化名称**: `financialtargetmaterial`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 财务标价主表任务编号

**包路径**: `com.nio.srm.gps.cost.domain.financial.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/financial/entity/FinancialTargetMaterialEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_select`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsFinancialTargetTaskNo` | String | 任务编号 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `salesArea` | String | salesarea | ⬜ | |
| `positionLevel` | String | 采购订单level | ⬜ | |
| `specifications` | String | specifications | ⬜ | |
| `placeOfDeparture` | String | 地点线下部分 | ⬜ | |
| `destination` | String | destination | ⬜ | |
| `transportMode` | String | 采购订单模式 | ⬜ | |
| `materialMeasureUnit` | String | 物料计量单位 | ⬜ | |
| `materialPriceUnit` | String | 物料价格单位 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `effectDate` | LocalDateTime | 生效日期 | ⬜ | |
| `expireDate` | LocalDateTime | 过期日期 | ⬜ | |
| `deleteTime` | LocalDateTime | 删除时间 | ⬜ | |

---

### 103. FinancialTargetTotalPriceEntity

**标准化名称**: `financialtargettotalprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: A + B 核算合计

**包路径**: `com.nio.srm.gps.cost.domain.financial.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/financial/entity/FinancialTargetTotalPriceEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `totalMaterialAndLogisticsPriceAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalMouldPriceAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalRdPriceAmount` | BigDecimal | 总金额 | ⬜ | |

---

### 104. FinancialUpdateEntity

**标准化名称**: `financialupdate`

**层级**: L2-Supporting

**推理中文含义**: 日期

**当前描述**: 业务来源 RFQ/PDATA (定位需更新的单据)

**包路径**: `com.nio.srm.gps.cost.domain.financial.entity`

**文件路径**: `com/nio/srm/gps/cost/domain/financial/entity/FinancialUpdateEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `taskBizSource` | String | 任务业务来源 | ⬜ | |
| `taskSourceNo` | String | 任务编号 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |

---

### 105. FrameworkContractTextEntity

**标准化名称**: `frameworkcontracttext`

**层级**: L2-Supporting

**推理中文含义**: 合同

**当前描述**: 框架合同文本

**包路径**: `com.nio.srm.gps.contract.framework.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/framework/domain/entity/FrameworkContractTextEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `contractId` | Long | 合同ID | ⬜ | |
| `gpsContractNo` | String | GPS合同编号 | ⬜ | |
| `standard` | Boolean | 标准 | ⬜ | |
| `commonContractCategoryCode` | String | 合同编码 | ⬜ | |
| `clmsTemplateCode` | String | 模板编码 | ⬜ | |
| `clmsBizType` | String | clms业务类型 | ⬜ | |
| `sealType` | String | 印章类型 | ⬜ | |
| `onlineSign` | Boolean | 在线签署 | ⬜ | |
| `allSigned` | Boolean | 全部已签署 | ⬜ | |
| `mainPartyDigitalStamp` | Boolean | 主参与方数字印章 | ⬜ | |
| `offlineSignedFileFulfilledStatus` | OfflineSignedFileFulfilledStatusEnum | 线下已签署文件fulfilled状态 | ⬜ | |
| `partySigningStrategy` | PartySigningStrategyEnum | 参与方签署策略 | ⬜ | |
| `originalText` | FrameworkContractTextFileVO | 原始文本 | ⬜ | |
| `unsignedText` | FrameworkContractTextFileVO | 未签署文本 | ⬜ | |
| `signedText` | FrameworkContractTextFileVO | 已签署文本 | ⬜ | |

---

### 106. FrameworkPurchaseItemEntity

**标准化名称**: `frameworkpurchaseitem`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: 框架合同采购行信息

**包路径**: `com.nio.srm.gps.contract.framework.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/framework/domain/entity/FrameworkPurchaseItemEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 2
- 入向关系: 0

**出向关系类型**:

- `involves_validate`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `contractId` | Long | 合同ID | ⬜ | |
| `sapContractNo` | String | 合同编号 | ⬜ | |
| `sapContractNoSource` | SapContractNoSource | SAP合同编号来源 | ⬜ | |
| `lineNo` | Integer | 行编号 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `taxRate` | BigDecimal | 税比率 | ⬜ | |
| `taxAmount` | BigDecimal | 税金额 | ⬜ | |
| `totalWithTaxAmount` | BigDecimal | 总金额 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialDesc` | ContractLocaleString | 物料描述 | ⬜ | |
| `materialPartNumber` | String | 物料部分编号 | ⬜ | |
| `materialRevision` | String | 物料是 | ⬜ | |
| `materialColorCode` | String | 物料编码 | ⬜ | |
| `materialUnit` | String | 物料单位 | ⬜ | |
| `materialUnitAmount` | BigDecimal | 物料金额 | ⬜ | |
| `priceUnit` | Long | 价格单位 | ⬜ | |
| `netAmount` | BigDecimal | 净金额 | ⬜ | |
| `arrivalDate` | LocalDate | 到达日期 | ⬜ | |
| `imported` | Boolean | 采购订单 | ⬜ | |
| `hasConsignment` | HasConsignmentEnum | 是否有签署 | ⬜ | |
| `available` | Boolean | available | ⬜ | |
| `extInfo` | ExtInfo | 扩展信息 | ⬜ | |

---

### 107. GoodsReceiptDetailEntity

**标准化名称**: `goodsreceiptdetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: 是否删除

**包路径**: `com.nio.srm.gps.order.domain.goodsreceipt`

**文件路径**: `com/nio/srm/gps/order/domain/goodsreceipt/GoodsReceiptDetailEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 0
- 入向关系: 2

**入向关系类型**:

- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `goodsReceiptId` | Long | 收货ID | ⬜ | |
| `poLineNo` | Integer | 行编号 | ⬜ | |
| `lineNo` | Integer | 行编号 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialDescZh` | String | 物料中文 | ⬜ | |
| `materialDescEn` | String | 物料英文 | ⬜ | |
| `receiveCount` | BigDecimal | CE数量 | ⬜ | |
| `receiveAmount` | BigDecimal | CE金额 | ⬜ | |
| `receivedAmount` | BigDecimal | CE金额 | ⬜ | |
| `poTotalAmount` | BigDecimal | 总计金额 | ⬜ | |
| `poTotalCount` | BigDecimal | 总计数量 | ⬜ | |
| `measureUnit` | String | 计量单位 | ⬜ | |
| `netPriceAmount` | BigDecimal | 净金额 | ⬜ | |
| `priceUnit` | BigDecimal | 价格单位 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `taxRate` | BigDecimal | 税比率 | ⬜ | |
| `taxAmount` | BigDecimal | 税金额 | ⬜ | |
| `totalIncludeTaxAmount` | BigDecimal | 总金额 | ⬜ | |
| `arrivalDate` | LocalDate | 到达日期 | ⬜ | |
| `chargeOff` | Boolean | charge线下 | ⬜ | |
| `chargeOffCount` | BigDecimal | chargeOff数量 | ⬜ | |
| `chargeOffAmount` | BigDecimal | chargeOff金额 | ⬜ | |
| `sapMaterialVoucherCode` | String | 物料编码 | ⬜ | |
| `sapMaterialVoucherProject` | String | SAP物料凭证项目 | ⬜ | |
| `sapOrderNo` | String | 订单编号 | ⬜ | |
| `sapVoucherProjectNo` | String | SAP编号 | ⬜ | |
| `sapDomesticTotalAmount` | BigDecimal | 总计金额 | ⬜ | |
| `sapTransactionCurrencyTotalAmount` | BigDecimal | 总计金额 | ⬜ | |
| `sapFinanceVoucherNo` | String | SAP编号 | ⬜ | |
| `sapFinanceVoucherCompanyNo` | String | 公司编号 | ⬜ | |
| `sapFinanceVoucherYear` | String | SAP财务凭证year | ⬜ | |
| `sapEntrysheetYear` | String | SAPyear | ⬜ | |
| `sapEntrysheetNo` | String | 英文编号 | ⬜ | |
| `sapEntrysheetItem` | String | SAP项 | ⬜ | |

---

### 108. GpsCategoryNodeBizTypeEntity

**标准化名称**: `gpscategorynodebiztype`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.category`

**文件路径**: `com/nio/srm/gps/material/domain/category/GpsCategoryNodeBizTypeEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `zhCategoryName` | String | 中文名称 | ⬜ | |
| `enCategoryName` | String | 英文名称 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `level` | Integer | level | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `gpsCategoryAffiliation` | String | GPS品类归属 | ⬜ | |

---

### 109. GrEntity

**标准化名称**: `gr`

**层级**: L2-Supporting

**推理中文含义**: 收货单

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/GrEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `purchaseOrderId` | Long | 订单ID | ⬜ | |
| `purchaseOrderNo` | String | 订单编号 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `totalReceiptedAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalReceiptedCount` | BigDecimal | 总数量 | ⬜ | |
| `totalRefundAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalRefundCount` | BigDecimal | 总数量 | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |

---

### 110. GrDetailEntity

**标准化名称**: `grdetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/GrDetailEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `grId` | Long | 收货单ID | ⬜ | |
| `grCode` | String | 收货单编码 | ⬜ | |
| `sapVoucherNo` | String | SAP编号 | ⬜ | |
| `purchaseOrderId` | Long | 订单ID | ⬜ | |
| `purchaseOrderNo` | String | 订单编号 | ⬜ | |
| `poLineNo` | Long | 行编号 | ⬜ | |
| `lineNo` | Integer | 行编号 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `grCount` | BigDecimal | 收货单数量 | ⬜ | |
| `grAmount` | BigDecimal | 收货单金额 | ⬜ | |
| `chargeOff` | Boolean | charge线下 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |

---

### 111. IdempotenceEntity

**标准化名称**: `idempotence`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.idempotence`

**文件路径**: `com/nio/srm/gps/price/domain/idempotence/IdempotenceEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `bizSource` | String | 业务来源 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `idempotentCode` | String | ID编码 | ⬜ | |
| `idempotenceRepository` | IdempotenceRepository | ID仓储 | ⬜ | |

---

### 112. IdempotentEntity

**标准化名称**: `idempotent`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.idempotent`

**文件路径**: `com/nio/srm/gps/material/domain/idempotent/IdempotentEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `requestId` | String | 申请ID | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `idempotentExtInfoVO` | IdempotentExtInfoVO | ID扩展信息凭证 | ⬜ | |
| `scene` | IdempotentBizScene | 场景 | ⬜ | |
| `bizId` | String | 业务ID | ⬜ | |

---

### 113. IndustryEntity

**标准化名称**: `industry`

**层级**: L2-Supporting

**推理中文含义**: 行业

**当前描述**: 品牌

**包路径**: `com.nio.srm.gps.maindata.domain.industry`

**文件路径**: `com/nio/srm/gps/maindata/domain/industry/IndustryEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `industry` | String | 行业 | ⬜ | |
| `keyCode` | String | key编码 | ⬜ | |
| `name` | String | 名称 | ⬜ | |
| `description` | String | 描述 | ⬜ | |

---

### 114. InvitationEntity

**标准化名称**: `invitation`

**层级**: L2-Supporting

**推理中文含义**: TA

**当前描述**: @author reno.zeng

**包路径**: `com.nio.srm.gps.vendor.domain.invitation.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/invitation/entity/InvitationEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `title` | String | title | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorContact` | String | 供应商TA | ⬜ | |
| `duns` | String | duns | ⬜ | |
| `creditCode` | String | credit编码 | ⬜ | |
| `contactPhone` | String | TA电话 | ⬜ | |
| `invitationCode` | String | TA编码 | ⬜ | |
| `contactEmail` | String | TA邮箱 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `buyerEmail` | String | 采购员邮箱 | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `vendorUuid` | String | 供应商ID | ⬜ | |
| `country` | String | 账号 | ⬜ | |
| `sapCountryCode` | String | 数量编码 | ⬜ | |
| `countryId` | Long | 数量ID | ⬜ | |
| `province` | String | CE | ⬜ | |
| `sapProvinceCode` | String | SAP编码 | ⬜ | |
| `provinceId` | Long | CEID | ⬜ | |
| `language` | String | language | ⬜ | |
| `source` | String | 来源 | ⬜ | |
| `sourceNumber` | String | 来源编号 | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `identityCardNo` | String | ID编号 | ⬜ | |
| `qiXinBaoBusinessInfoVO` | QiXinBaoBusinessInfoVO | qixinbaoBU信息凭证 | ⬜ | |
| `isInvited` | Boolean | 是否Invited | ⬜ | |
| `inviteFacade` | VendorInviteFacade | invite门面 | ⬜ | |
| `invitationRepository` | IInvitationRepository | TA仓储 | ⬜ | |
| `domainEventPublisher` | DomainEventPublisher | 主发布者 | ⬜ | |
| `commonService` | CommonService | common服务 | ⬜ | |
| `sequenceServiceFacade` | SequenceServiceFacade | 序列服务门面 | ⬜ | |
| `oldGpsFacade` | OldGpsFacade | oldGPS门面 | ⬜ | |
| `vendorInfoFacade` | VendorInfoFacade | 供应商信息门面 | ⬜ | |

---

### 115. IpMaterialEntity

**标准化名称**: `ipmaterial`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 物料号

**包路径**: `com.nio.srm.gps.material.domain.material.ip`

**文件路径**: `com/nio/srm/gps/material/domain/material/ip/IpMaterialEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 2
- 入向关系: 0

**出向关系类型**:

- `involves_create`: 1
- `involves_query`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `colorCode` | String | color编码 | ⬜ | |
| `partNumber` | String | 部分编号 | ⬜ | |
| `revision` | String | 是 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `status` | MaterialStatus | 状态 | ⬜ | |
| `materialType` | String | 物料类型 | ⬜ | |
| `enPartName` | String | 英文名称 | ⬜ | |
| `zhPartName` | String | 中文名称 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `materialGroup` | String | 物料分组 | ⬜ | |
| `materialGroupDesc` | String | 物料描述 | ⬜ | |
| `unitOfMeasure` | String | 单位线下计量 | ⬜ | |
| `unitOfMeasureDesc` | String | 计量描述 | ⬜ | |
| `materialCategory` | String | 物料品类 | ⬜ | |
| `technicalParam` | String | technicalparam | ⬜ | |
| `packaging` | String | packaging | ⬜ | |
| `fixedAssetFlag` | Boolean | fixed资产标志 | ⬜ | |
| `ownershipPlant` | String | 所属人计划 | ⬜ | |
| `specs` | String | specs | ⬜ | |
| `expireFlag` | Boolean | 过期标志 | ⬜ | |
| `manufacturer` | String | manufacturer | ⬜ | |
| `manufacturerMaterialCode` | String | 物料编码 | ⬜ | |
| `systemSource` | MaterialSystemSource | system来源 | ⬜ | |
| `materialBrand` | String | 物料品牌 | ⬜ | |
| `factoryRelatedAttributes` | String | 工厂相关BU | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `ipMaterialRepository` | IIpMaterialRepository | IP物料仓储 | ⬜ | |
| `materialExtInfoEntity` | MaterialExtInfoEntity | 物料扩展信息 | ⬜ | |

---

### 116. IpPriceFlowEntity

**标准化名称**: `ippriceflow`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author: Tutu.Wang

**包路径**: `com.nio.srm.gps.price.domain.ip`

**文件路径**: `com/nio/srm/gps/price/domain/ip/IpPriceFlowEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsPriceManageNo` | String | 价格编号 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `factoryName` | String | 工厂名称 | ⬜ | |
| `salesArea` | String | salesarea | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `companyName` | String | 公司名称 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `gpsCategoryZhName` | String | 中文名称 | ⬜ | |
| `gpsCategoryEnName` | String | 英文名称 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `model` | String | 模式 | ⬜ | |
| `nominationFlag` | Boolean | 提名标志 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `priceType` | PriceType | 价格类型 | ⬜ | |
| `priceSource` | String | 价格来源 | ⬜ | |
| `priceSourceNo` | String | 价格编号 | ⬜ | |
| `gpsPrCode` | String | GPS编码 | ⬜ | |
| `gpsPrLineNumber` | String | GPS采购申请行编号 | ⬜ | |
| `gpsPrMaterialInfo` | String | GPS采购申请物料信息 | ⬜ | |
| `gpsPrApplicantAccount` | String | 申请人数量 | ⬜ | |
| `gpsPrApplicantName` | String | 申请人名称 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `purchasingGroup` | String | 有分组 | ⬜ | |
| `tradeType` | String | 贸易类型 | ⬜ | |
| `paymentPeriod` | String | 支付周期 | ⬜ | |
| `paymentType` | String | 支付类型 | ⬜ | |
| `baseCurrency` | String | base货币 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `materialMeasureUnit` | String | 物料计量单位 | ⬜ | |
| `materialPriceUnit` | String | 物料价格单位 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `sapTaxRate` | BigDecimal | SAP税率 | ⬜ | |
| `noTaxPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `withTaxPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `recordTime` | LocalDateTime | record时间 | ⬜ | |
| `priceStatus` | PriceStatus | 价格状态 | ⬜ | |
| `stepPriceInfo` | String | step价格信息 | ⬜ | |
| `quotationType` | QuotationType | TA类型 | ⬜ | |
| `positionLevel` | String | 采购订单level | ⬜ | |
| `transportMode` | String | 采购订单模式 | ⬜ | |
| `startingPoint` | String | 开始采购订单 | ⬜ | |
| `endingPoint` | String | 采购订单 | ⬜ | |
| `flagDownAmount` | BigDecimal | 标志金额 | ⬜ | |
| `kilometerCount` | String | kilometer数量 | ⬜ | |
| `electricalMaterialAmount` | BigDecimal | 物料金额 | ⬜ | |
| `machineryMaterialAmount` | BigDecimal | 物料金额 | ⬜ | |
| `otherMaterialAmount` | BigDecimal | 物料金额 | ⬜ | |
| `designAmount` | BigDecimal | 签署金额 | ⬜ | |
| `packTransportAmount` | BigDecimal | 采购订单金额 | ⬜ | |
| `installTestAmount` | BigDecimal | 全部金额 | ⬜ | |
| `projectManageFeeAmount` | BigDecimal | 项目金额 | ⬜ | |
| `produceTrainAmount` | BigDecimal | CE金额 | ⬜ | |
| `spareParts` | String | spare部分 | ⬜ | |
| `tariffAmount` | BigDecimal | TA金额 | ⬜ | |
| `profitAmount` | BigDecimal | 采购申请金额 | ⬜ | |
| `depreciationChargeAmount` | BigDecimal | 采购申请金额 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `paymentInfo` | String | 支付信息 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `quoteRoundNo` | Integer | 报价编号 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |

---

### 117. IpPriceFlowSyncEntity

**标准化名称**: `ippriceflowsync`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author: Tutu.Wang

**包路径**: `com.nio.srm.gps.price.domain.ip`

**文件路径**: `com/nio/srm/gps/price/domain/ip/IpPriceFlowSyncEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 1
- 入向关系: 1

**出向关系类型**:

- `involves_create`: 1

**入向关系类型**:

- `involves_create`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `priceIpFlowRepository` | IIpPriceFlowRepository | 价格IP流程仓储 | ⬜ | |

---

### 118. IpPricePendingFlowEntity

**标准化名称**: `ippricependingflow`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author: Tutu.Wang

**包路径**: `com.nio.srm.gps.price.domain.ip`

**文件路径**: `com/nio/srm/gps/price/domain/ip/IpPricePendingFlowEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsPriceManageNo` | String | 价格编号 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `factoryName` | String | 工厂名称 | ⬜ | |
| `salesArea` | String | salesarea | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `companyName` | String | 公司名称 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryZhName` | String | 中文名称 | ⬜ | |
| `gpsCategoryEnName` | String | 英文名称 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `model` | String | 模式 | ⬜ | |
| `nominationFlag` | Boolean | 提名标志 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `priceType` | PriceType | 价格类型 | ⬜ | |
| `priceSource` | IpPriceSource | 价格来源 | ⬜ | |
| `priceSourceNo` | String | 价格编号 | ⬜ | |
| `gpsPrCode` | String | GPS编码 | ⬜ | |
| `gpsPrLineNumber` | String | GPS采购申请行编号 | ⬜ | |
| `gpsPrMaterialInfo` | String | GPS采购申请物料信息 | ⬜ | |
| `gpsPrApplicantAccount` | String | 申请人数量 | ⬜ | |
| `gpsPrApplicantName` | String | 申请人名称 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `purchasingGroup` | String | 有分组 | ⬜ | |
| `tradeType` | String | 贸易类型 | ⬜ | |
| `paymentPeriod` | String | 支付周期 | ⬜ | |
| `paymentType` | String | 支付类型 | ⬜ | |
| `baseCurrency` | String | base货币 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `materialMeasureUnit` | String | 物料计量单位 | ⬜ | |
| `materialPriceUnit` | String | 物料价格单位 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `sapTaxRate` | BigDecimal | SAP税率 | ⬜ | |
| `noTaxPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `withTaxPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `recordTime` | LocalDateTime | record时间 | ⬜ | |
| `priceStatus` | PriceStatus | 价格状态 | ⬜ | |
| `stepPriceInfo` | StepPriceInfo | step价格信息 | ⬜ | |
| `quotationType` | String | TA类型 | ⬜ | |
| `positionLevel` | String | 采购订单level | ⬜ | |
| `transportMode` | String | 采购订单模式 | ⬜ | |
| `startingPoint` | String | 开始采购订单 | ⬜ | |
| `endingPoint` | String | 采购订单 | ⬜ | |
| `flagDownAmount` | BigDecimal | 标志金额 | ⬜ | |
| `kilometerCount` | String | kilometer数量 | ⬜ | |
| `electricalMaterialAmount` | BigDecimal | 物料金额 | ⬜ | |
| `machineryMaterialAmount` | BigDecimal | 物料金额 | ⬜ | |
| `otherMaterialAmount` | BigDecimal | 物料金额 | ⬜ | |
| `designAmount` | BigDecimal | 签署金额 | ⬜ | |
| `packTransportAmount` | BigDecimal | 采购订单金额 | ⬜ | |
| `installTestAmount` | BigDecimal | 全部金额 | ⬜ | |
| `projectManageFeeAmount` | BigDecimal | 项目金额 | ⬜ | |
| `produceTrainAmount` | BigDecimal | CE金额 | ⬜ | |
| `spareParts` | String | spare部分 | ⬜ | |
| `tariffAmount` | BigDecimal | TA金额 | ⬜ | |
| `profitAmount` | BigDecimal | 采购申请金额 | ⬜ | |
| `depreciationChargeAmount` | BigDecimal | 采购申请金额 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `paymentInfo` | String | 支付信息 | ⬜ | |
| `changeReason` | String | 变更reason | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `startStep` | String | 开始step | ⬜ | |
| `endStep` | String | 结束step | ⬜ | |
| `materialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |

---

### 119. KafkaFailMsgEntity

**标准化名称**: `kafkafailmsg`

**层级**: L2-Supporting

**推理中文含义**: kafkafailmsg

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.failmsg`

**文件路径**: `com/nio/srm/gps/price/domain/failmsg/KafkaFailMsgEntity.java`

**关系统计**:

- 总关系数: 8
- 出向关系: 3
- 入向关系: 5

**出向关系类型**:

- `queries_other`: 3

**入向关系类型**:

- `queries_other`: 5

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `topic` | String | topic | ⬜ | |
| `partitionId` | Integer | 部分ID | ⬜ | |
| `offset` | Long | 设置 | ⬜ | |
| `msgKey` | String | msgkey | ⬜ | |
| `msgType` | String | msg类型 | ⬜ | |
| `msgValue` | String | msgvalue | ⬜ | |
| `msgHeader` | String | msgheader | ⬜ | |
| `reason` | String | reason | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `remainRetryTime` | Integer | 主时间 | ⬜ | |
| `maxRetryTime` | Integer | maxRetry时间 | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `kafkaFailMsgRepository` | KafkaFailMsgRepository | kafkafailmsg仓储 | ⬜ | |
| `kakfaFailMsgRepository` | IKakfaFailMsgRepository | kakfafailmsg仓储 | ⬜ | |

---

### 120. LadderPriceEntity

**标准化名称**: `ladderprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: (100, 100) same error

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/LadderPriceEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `ladderPriceType` | String | 阶梯价格类型 | ⬜ | |

---

### 121. LadderPriceItemEntity

**标准化名称**: `ladderpriceitem`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 阶梯起始金额

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/LadderPriceItemEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `ladderName` | String | 阶梯名称 | ⬜ | |
| `ladderPriceFrom` | BigDecimal | 阶梯价格from | ⬜ | |
| `ladderPriceTo` | BigDecimal | 阶梯价格总计 | ⬜ | |

---

### 122. LaputaUserEntity

**标准化名称**: `laputauser`

**层级**: L2-Supporting

**推理中文含义**: TA

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/LaputaUserEntity.java`

**关系统计**:

- 总关系数: 8
- 出向关系: 4
- 入向关系: 4

**出向关系类型**:

- `involves_other`: 2
- `involves_update`: 2

**入向关系类型**:

- `involves_other`: 2
- `involves_update`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `userId` | Long | 用户ID | ⬜ | |
| `userAccount` | String | 用户数量 | ⬜ | |
| `userName` | String | 用户名称 | ⬜ | |
| `userEmail` | String | 用户邮箱 | ⬜ | |
| `leaderFlag` | Boolean | leader标志 | ⬜ | |
| `leader` | Boolean | leader | ⬜ | |
| `status` | Boolean | 状态 | ⬜ | |
| `statusName` | String | 状态名称 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `userOrganizationRepository` | AuthUserOrganizationRepository | 用户organization仓储 | ⬜ | |

---

### 123. LaputaUserRoleEntity

**标准化名称**: `laputauserrole`

**层级**: L2-Supporting

**推理中文含义**: TA

**当前描述**: 

**包路径**: `com.nio.srm.gps.auth.domain.entity.v2`

**文件路径**: `com/nio/srm/gps/auth/domain/entity/v2/LaputaUserRoleEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `roleId` | Long | roleID | ⬜ | |
| `roleCode` | String | role编码 | ⬜ | |
| `roleName` | String | role名称 | ⬜ | |
| `roleType` | Integer | role类型 | ⬜ | |
| `status` | Boolean | 状态 | ⬜ | |
| `updateExpireTime` | Boolean | 日期时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `roleOwnerAccount` | String | 所属人数量 | ⬜ | |
| `openApplication` | Boolean | 开放申请 | ⬜ | |

---

### 124. LifeAccountingEntity

**标准化名称**: `lifeaccounting`

**层级**: L2-Supporting

**推理中文含义**: 数量

**当前描述**: Life 核价单聚合根

**包路径**: `com.nio.srm.gps.cost.domain.accounting.entity.life`

**文件路径**: `com/nio/srm/gps/cost/domain/accounting/entity/life/LifeAccountingEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `bizInfo` | LifeBizInfo | 业务信息 | ⬜ | |
| `accountingSummary` | LifeAccountingSummary | 账号汇总 | ⬜ | |

---

### 125. LogisticAccountingEntity

**标准化名称**: `logisticaccounting`

**层级**: L2-Supporting

**推理中文含义**: 数量

**当前描述**: @version 1.0

**包路径**: `com.nio.srm.gps.cost.domain.accounting.entity.logistic`

**文件路径**: `com/nio/srm/gps/cost/domain/accounting/entity/logistic/LogisticAccountingEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 1
- 入向关系: 1

**出向关系类型**:

- `involves_validate`: 1

**入向关系类型**:

- `involves_validate`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `bizInfo` | LogisticHeaderBizInfo | 业务信息 | ⬜ | |
| `accountingSummary` | LogisticAccountingSummary | 账号汇总 | ⬜ | |

---

### 126. ManufacturerInfoEntity

**标准化名称**: `manufacturerinfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: @author reno.zeng

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/ManufacturerInfoEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_select`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorId` | Long | 供应商ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `nameCnLang` | String | 名称cnlang | ⬜ | |
| `nameEgLang` | String | 名称品类lang | ⬜ | |
| `manufacturerCode` | String | manufacturer编码 | ⬜ | |
| `duns` | String | duns | ⬜ | |
| `creditCodeOrVat` | String | credit编码订单vat | ⬜ | |
| `countryId` | Long | 数量ID | ⬜ | |
| `provinceId` | Long | CEID | ⬜ | |
| `cityId` | Long | cityID | ⬜ | |
| `districtId` | Long | 是ID | ⬜ | |
| `sapCountryCode` | String | 数量编码 | ⬜ | |
| `sapProvinceCode` | String | SAP编码 | ⬜ | |
| `country` | String | 账号 | ⬜ | |
| `province` | String | CE | ⬜ | |
| `city` | String | city | ⬜ | |
| `district` | String | 是 | ⬜ | |
| `address` | String | 地址 | ⬜ | |
| `firstRelateVendorCode` | String | 供应商编码 | ⬜ | |
| `employeeCount` | Integer | employee数量 | ⬜ | |
| `yields` | BigDecimal | yields | ⬜ | |

---

### 127. MaterialAttributeEntity

**标准化名称**: `materialattribute`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.material.domain.material.rebuild`

**文件路径**: `com/nio/srm/gps/material/domain/material/rebuild/MaterialAttributeEntity.java`

**关系统计**:

- 总关系数: 6
- 出向关系: 3
- 入向关系: 3

**出向关系类型**:

- `involves_convert`: 2
- `queries_other`: 1

**入向关系类型**:

- `involves_convert`: 2
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `materialId` | Long | 物料ID | ⬜ | |
| `materialAttributeKey` | String | 物料BUkey | ⬜ | |
| `materialAttributeValue` | String | 物料BUvalue | ⬜ | |

---

### 128. MaterialExtInfoEntity

**标准化名称**: `materialextinfo`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.material.tag`

**文件路径**: `com/nio/srm/gps/material/domain/material/tag/MaterialExtInfoEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 0
- 入向关系: 2

**入向关系类型**:

- `involves_create`: 1
- `involves_query`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |

---

### 129. MaterialItemLimitPriceEntity

**标准化名称**: `materialitemlimitprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: TA评标为限价评标时，针对单个物料设定的限价信息

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/MaterialItemLimitPriceEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `materialLineNo` | Integer | 物料编号 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `bizMaterialCode` | String | 物料编码 | ⬜ | |
| `gpsPrCode` | String | GPS编码 | ⬜ | |
| `gpsPrLineNumber` | Integer | GPS采购申请行编号 | ⬜ | |
| `gpsPrMaterialDesc` | String | 物料描述 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `limitPrice` | Boolean | 限制价格 | ⬜ | |
| `gpsPrOrderType` | String | GPS采购申请订单类型 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `systemSource` | String | system来源 | ⬜ | |
| `limitedPriceWithoutTaxAmount` | BigDecimal | 价格金额 | ⬜ | |

---

### 130. MaterialLadderPriceEntity

**标准化名称**: `materialladderprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 物料名称

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/MaterialLadderPriceEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `materialLineNo` | Integer | 物料编号 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `bizMaterialCode` | String | 物料编码 | ⬜ | |

---

### 131. MaterialLimitPriceEntity

**标准化名称**: `materiallimitprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/MaterialLimitPriceEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `limitTotalAmount` | Boolean | 总计金额 | ⬜ | |
| `taLimitTotalAmount` | BigDecimal | 总计金额 | ⬜ | |

---

### 132. MeetingEntity

**标准化名称**: `meeting`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: @Classname MeetingEntity

**包路径**: `com.nio.srm.gps.sourcing.domain.meeting`

**文件路径**: `com/nio/srm/gps/sourcing/domain/meeting/MeetingEntity.java`

**关系统计**:

- 总关系数: 85
- 出向关系: 57
- 入向关系: 28

**出向关系类型**:

- `involves_create`: 3
- `involves_delete`: 1
- `involves_move`: 1
- `involves_other`: 7
- `involves_query`: 6
- `involves_update`: 1
- `involves_validate`: 2
- `queries_find`: 32
- `queries_queryBy`: 4

**入向关系类型**:

- `involves_create`: 3
- `involves_delete`: 1
- `involves_move`: 1
- `involves_other`: 6
- `involves_query`: 9
- `involves_update`: 3
- `involves_validate`: 2
- `queries_findBy`: 2
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `meetingName` | String | 会议名称 | ⬜ | |
| `meetingBizType` | MeetingBizType | 会议业务类型 | ⬜ | |
| `meetingLevel` | String | 会议level | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `meetingApplyNo` | String | 申请编号 | ⬜ | |
| `applyTime` | LocalDateTime | 申请时间 | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `srcBizNo` | String | 业务编号 | ⬜ | |
| `srcBizStatus` | String | src业务状态 | ⬜ | |
| `meetingConclusion` | MeetingConclusionEnum | 会议conclusion | ⬜ | |
| `meetingTime` | LocalDateTime | 会议时间 | ⬜ | |
| `meetingSummary` | String | 会议汇总 | ⬜ | |
| `feiShuDocVO` | FeiShuDocVO | 飞书飞书文档凭证 | ⬜ | |
| `attachmentFileType` | String | 附件文件类型 | ⬜ | |
| `bizInfo` | Object | 业务信息 | ⬜ | |
| `status` | MeetingStatus | 状态 | ⬜ | |
| `effectStatus` | MeetingStatus | 生效状态 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `categoryName` | String | 品类名称 | ⬜ | |
| `processId` | String | 流程ID | ⬜ | |
| `auditStatus` | String | 审核状态 | ⬜ | |
| `expectMeetingDate` | LocalDate | 会议日期 | ⬜ | |
| `confirmedMeetingDate` | Boolean | 会议日期 | ⬜ | |
| `meetingRepository` | IMeetingRepository | 会议仓储 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `departmentCode` | String | 部门编码 | ⬜ | |

---

### 133. MeetingDoclinkEntity

**标准化名称**: `meetingdoclink`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: 云文档存储表

**包路径**: `com.nio.srm.gps.sourcing.domain.meeting`

**文件路径**: `com/nio/srm/gps/sourcing/domain/meeting/MeetingDoclinkEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 3
- 入向关系: 1

**出向关系类型**:

- `involves_create`: 1
- `queries_getBy`: 2

**入向关系类型**:

- `involves_create`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `docToken` | String | 文档英文 | ⬜ | |
| `docName` | String | 文档名称 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `docUrl` | String | 文档URL | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `docRepository` | IMeetingDoclinkRepository | 文档仓储 | ⬜ | |

---

### 134. MeetingFeishuDocEntity

**标准化名称**: `meetingfeishudoc`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: 上会id

**包路径**: `com.nio.srm.gps.meeting.domain.meeting`

**文件路径**: `com/nio/srm/gps/meeting/domain/meeting/MeetingFeishuDocEntity.java`

**关系统计**:

- 总关系数: 7
- 出向关系: 0
- 入向关系: 7

**入向关系类型**:

- `involves_query`: 1
- `involves_validate`: 2
- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `meetingId` | Long | 会议ID | ⬜ | |
| `docId` | String | 文档ID | ⬜ | |
| `docSource` | String | 文档来源 | ⬜ | |
| `docUrl` | String | 文档URL | ⬜ | |
| `docType` | String | 文档类型 | ⬜ | |
| `docName` | String | 文档名称 | ⬜ | |
| `extInfo` | JSONObject | 扩展信息 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |

---

### 135. MeetingFeishuTaskEntity

**标准化名称**: `meetingfeishutask`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: 

**包路径**: `com.nio.srm.gps.meeting.domain.meeting`

**文件路径**: `com/nio/srm/gps/meeting/domain/meeting/MeetingFeishuTaskEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 1
- 入向关系: 2

**出向关系类型**:

- `involves_other`: 1

**入向关系类型**:

- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `taskId` | String | 任务ID | ⬜ | |
| `taskType` | String | 任务类型 | ⬜ | |
| `meetingApplyNo` | String | 申请编号 | ⬜ | |
| `meetingBizType` | String | 会议业务类型 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |

---

### 136. MeetingFeishuUserTokenEntity

**标准化名称**: `meetingfeishuusertoken`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: 用户ID（飞书邮箱前缀）

**包路径**: `com.nio.srm.gps.meeting.domain.meeting`

**文件路径**: `com/nio/srm/gps/meeting/domain/meeting/MeetingFeishuUserTokenEntity.java`

**关系统计**:

- 总关系数: 6
- 出向关系: 0
- 入向关系: 6

**入向关系类型**:

- `involves_other`: 2
- `involves_query`: 2
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `userId` | String | 用户ID | ⬜ | |
| `userAccessToken` | String | 访问英文 | ⬜ | |
| `userRefreshToken` | String | 用户英文 | ⬜ | |
| `expireIn` | Integer | 过期提名 | ⬜ | |
| `refreshExpireIn` | Integer | refresh过期提名 | ⬜ | |

---

### 137. MeetingRpcEntity

**标准化名称**: `meetingrpc`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: @Classname MeetingEntity

**包路径**: `com.nio.srm.gps.sourcing.domain.meeting`

**文件路径**: `com/nio/srm/gps/sourcing/domain/meeting/MeetingRpcEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `meetingName` | String | 会议名称 | ⬜ | |
| `meetingBizType` | String | 会议业务类型 | ⬜ | |
| `meetingLevel` | String | 会议level | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `meetingApplyNo` | String | 申请编号 | ⬜ | |
| `applyTime` | LocalDateTime | 申请时间 | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `srcBizNo` | String | 业务编号 | ⬜ | |
| `srcBizStatus` | String | src业务状态 | ⬜ | |
| `meetingConclusion` | MeetingConclusionEnum | 会议conclusion | ⬜ | |
| `meetingTime` | LocalDateTime | 会议时间 | ⬜ | |
| `meetingSummary` | String | 会议汇总 | ⬜ | |
| `feiShuDocVO` | FeiShuDocVO | 飞书飞书文档凭证 | ⬜ | |
| `attachmentFileType` | String | 附件文件类型 | ⬜ | |
| `bizInfo` | Object | 业务信息 | ⬜ | |
| `status` | MeetingStatus | 状态 | ⬜ | |
| `effectStatus` | MeetingStatus | 生效状态 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `categoryName` | String | 品类名称 | ⬜ | |
| `processId` | String | 流程ID | ⬜ | |
| `auditStatus` | String | 审核状态 | ⬜ | |
| `expectMeetingDate` | LocalDate | 会议日期 | ⬜ | |
| `confirmedMeetingDate` | Boolean | 会议日期 | ⬜ | |
| `meetingRepository` | IMeetingRepository | 会议仓储 | ⬜ | |

---

### 138. MeetingWorkflowTaskEntity

**标准化名称**: `meetingworkflowtask`

**层级**: L2-Supporting

**推理中文含义**: 工作流

**当前描述**: @author tim.ning

**包路径**: `com.nio.srm.gps.meeting.domain.meeting`

**文件路径**: `com/nio/srm/gps/meeting/domain/meeting/MeetingWorkflowTaskEntity.java`

**关系统计**:

- 总关系数: 6
- 出向关系: 6
- 入向关系: 0

**出向关系类型**:

- `queries_queryBy`: 6

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `meetingId` | Long | 会议ID | ⬜ | |
| `flowCode` | String | 流程编码 | ⬜ | |
| `processId` | String | 流程ID | ⬜ | |
| `auditStatus` | String | 审核状态 | ⬜ | |
| `auditTime` | LocalDateTime | 审核时间 | ⬜ | |
| `requestId` | String | 申请ID | ⬜ | |
| `meetingWorkflowTaskRepository` | IMeetingWorkflowTaskRepository | 会议工作流任务仓储 | ⬜ | |
| `apolloConfigHelper` | ApolloConfigHelper | 采购订单配置助手 | ⬜ | |
| `mainDataServiceFacade` | MainDataServiceFacade | 主数据服务门面 | ⬜ | |
| `categoryFacade` | CategoryFacade | 品类门面 | ⬜ | |

---

### 139. MGroupConfigEntity

**标准化名称**: `mgroupconfig`

**层级**: L2-Supporting

**推理中文含义**: 分组

**当前描述**: 业务类型

**包路径**: `com.nio.srm.gps.material.domain.mgroup.config`

**文件路径**: `com/nio/srm/gps/material/domain/mgroup/config/MGroupConfigEntity.java`

**关系统计**:

- 总关系数: 12
- 出向关系: 8
- 入向关系: 4

**出向关系类型**:

- `involves_create`: 1
- `involves_delete`: 1
- `involves_other`: 1
- `involves_update`: 1
- `queries_other`: 2
- `queries_queryBy`: 2

**入向关系类型**:

- `involves_create`: 1
- `involves_other`: 1
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `configType` | String | 配置类型 | ⬜ | |
| `materialGroup` | String | 物料分组 | ⬜ | |
| `instanceGroup` | String | CE分组 | ⬜ | |
| `gpsCategoryId` | Long | GPS品类ID | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `mGroupConfigRepository` | IMGroupConfigRepository | 名称分组配置仓储 | ⬜ | |

---

### 140. MgtBrOrderEntity

**标准化名称**: `mgtbrorder`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: @author zihao.zhai

**包路径**: `com.nio.srm.gps.order.domain.br.purchaseorder.mgt`

**文件路径**: `com/nio/srm/gps/order/domain/br/purchaseorder/mgt/MgtBrOrderEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `workflowTaskEntity` | WorkflowTaskEntity | 工作流任务 | ⬜ | |

---

### 141. MgtFileEntity

**标准化名称**: `mgtfile`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: @author zihao.zhai

**包路径**: `com.nio.srm.gps.order.domain.br.purchaseorder.valueobject`

**文件路径**: `com/nio/srm/gps/order/domain/br/purchaseorder/valueobject/MgtFileEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `fileUUID` | String | 文件ID | ⬜ | |

---

### 142. MigrateItemDetailEntity

**标准化名称**: `migrateitemdetail`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: migrate价格迁移详情表;

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/MigrateItemDetailEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `taskId` | Long | 任务ID | ⬜ | |
| `fixStatus` | String | fix状态 | ⬜ | |
| `sourceTableName` | String | 来源名称 | ⬜ | |
| `targetTableName` | String | 目标名称 | ⬜ | |
| `sourceId` | String | 来源ID | ⬜ | |
| `targetId` | String | 目标ID | ⬜ | |
| `targetContent` | String | 目标内容 | ⬜ | |
| `migrateStatus` | String | 率状态 | ⬜ | |
| `migrateMessage` | String | 率消息 | ⬜ | |
| `migrateDetail` | String | 率明细 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 143. MigrateMaterialRouteEntity

**标准化名称**: `migratematerialroute`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: @Description: 迁移的物料清单

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/MigrateMaterialRouteEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 2
- 入向关系: 2

**出向关系类型**:

- `queries_other`: 2

**入向关系类型**:

- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `partNumber` | String | 部分编号 | ⬜ | |
| `purchaseGroup` | String | 采购分组 | ⬜ | |
| `bizMode` | String | 业务模式 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `extInfo` | ExtInfo | 扩展信息 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |

---

### 144. MigrateMouldRdEntity

**标准化名称**: `migratemouldrd`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: 模具研发价格迁移详情

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/MigrateMouldRdEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `taskId` | Long | 任务ID | ⬜ | |
| `partCode` | String | 部分编码 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `content` | String | 内容 | ⬜ | |
| `migrateStatus` | String | 率状态 | ⬜ | |
| `fixStatus` | Integer | fix状态 | ⬜ | |
| `fixTime` | LocalDateTime | fix时间 | ⬜ | |
| `migrateDetail` | String | 率明细 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 145. MigratePriceFlowEntity

**标准化名称**: `migratepriceflow`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 直采价格流水迁移详情

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/MigratePriceFlowEntity.java`

**关系统计**:

- 总关系数: 8
- 出向关系: 5
- 入向关系: 3

**出向关系类型**:

- `queries_get`: 3
- `queries_list`: 2

**入向关系类型**:

- `queries_get`: 1
- `queries_list`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `taskId` | Long | 任务ID | ⬜ | |
| `sourceId` | String | 来源ID | ⬜ | |
| `manageId` | String | manageID | ⬜ | |
| `targetId` | String | 目标ID | ⬜ | |
| `manageStatus` | String | manage状态 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `partCode` | String | 部分编码 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `supplyStatus` | String | supply状态 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `content` | String | 内容 | ⬜ | |
| `migrateStatus` | String | 率状态 | ⬜ | |
| `migrateType` | String | 率类型 | ⬜ | |
| `fixStatus` | Integer | fix状态 | ⬜ | |
| `fixTime` | LocalDateTime | fix时间 | ⬜ | |
| `nominationStatus` | Integer | 提名状态 | ⬜ | |
| `migrateDetail` | String | 率明细 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 146. MigrateTaskEntity

**标准化名称**: `migratetask`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: 价格中心迁移任务表

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/MigrateTaskEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 2
- 入向关系: 2

**出向关系类型**:

- `queries_get`: 1
- `queries_other`: 1

**入向关系类型**:

- `queries_get`: 1
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `taskType` | MigrateTaskType | 任务类型 | ⬜ | |
| `taskParam` | String | 任务param | ⬜ | |
| `executeCount` | Long | execute数量 | ⬜ | |
| `startTime` | LocalDateTime | 开始时间 | ⬜ | |
| `finishTime` | LocalDateTime | 是时间 | ⬜ | |
| `taskStatus` | MigrateTaskStatus | 任务状态 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 147. MqMessageStoreEntity

**标准化名称**: `mqmessagestore`

**层级**: L2-Supporting

**推理中文含义**: 消息

**当前描述**: MQ 消息存储

**包路径**: `com.nio.srm.gps.cost.domain.internal.mq`

**文件路径**: `com/nio/srm/gps/cost/domain/internal/mq/MqMessageStoreEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `topic` | String | topic | ⬜ | |
| `tags` | String | TA | ⬜ | |
| `keys` | String | keys | ⬜ | |
| `body` | String | body | ⬜ | |
| `msgId` | String | msgID | ⬜ | |
| `bornHost` | String | bornhost | ⬜ | |
| `bornTime` | LocalDateTime | born时间 | ⬜ | |
| `storeHost` | String | storehost | ⬜ | |
| `storeTime` | LocalDateTime | store时间 | ⬜ | |
| `broker` | String | broker | ⬜ | |
| `reconsumeTimes` | Integer | reconsume时间 | ⬜ | |
| `consumeSuccess` | Boolean | consumeCE | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 148. NewFactoryChangeEntity

**标准化名称**: `newfactorychange`

**层级**: L2-Supporting

**推理中文含义**: 工厂

**当前描述**: 

**包路径**: `com.nio.srm.gps.pr.domain.purchaserequest`

**文件路径**: `com/nio/srm/gps/pr/domain/purchaserequest/NewFactoryChangeEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `purchaseRequestInjector` | PurchaseRequestInjector | 采购申请注入器 | ⬜ | |

---

### 149. NominationFileEntity

**标准化名称**: `nominationfile`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: @Classname NominationFileEntity

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationFileEntity.java`

**关系统计**:

- 总关系数: 74
- 出向关系: 46
- 入向关系: 28

**出向关系类型**:

- `involves_create`: 4
- `involves_other`: 9
- `involves_query`: 6
- `involves_update`: 3
- `queries_find`: 8
- `queries_findBy`: 6
- `queries_other`: 10

**入向关系类型**:

- `involves_create`: 4
- `involves_other`: 8
- `involves_query`: 7
- `involves_update`: 3
- `queries_other`: 6

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `nominationId` | Long | 提名ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `nominationResult` | NominationResult | 提名result | ⬜ | |
| `clmsContractNo` | String | 合同编号 | ⬜ | |
| `nominationFileStatus` | NominationFileStatus | 提名文件状态 | ⬜ | |
| `contractStatus` | String | 合同状态 | ⬜ | |
| `offlineNominationFileUploadStatus` | OfflineNominationFileUploadStatusEnum | 线下提名文件已上传状态 | ⬜ | |
| `gpsContractNo` | String | GPS合同编号 | ⬜ | |
| `nominationFileRepository` | INominationFileRepository | 提名文件仓储 | ⬜ | |

---

### 150. NominationFileDetailEntity

**标准化名称**: `nominationfiledetail`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: @author by devon.chen

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationFileDetailEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 0
- 入向关系: 4

**入向关系类型**:

- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `nominationId` | Long | 提名ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `nominationResult` | NominationResult | 提名result | ⬜ | |
| `clmsContractNo` | String | 合同编号 | ⬜ | |
| `gpsContractNo` | String | GPS合同编号 | ⬜ | |
| `nominationFileStatus` | NominationFileStatus | 提名文件状态 | ⬜ | |
| `contractStatus` | String | 合同状态 | ⬜ | |
| `offlineNominationFileUploadStatus` | OfflineNominationFileUploadStatusEnum | 线下提名文件已上传状态 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |

---

### 151. NominationFileExcelEntity

**标准化名称**: `nominationfileexcel`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: @author by devon.chen

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationFileExcelEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `nominationId` | Long | 提名ID | ⬜ | |
| `clmsContractNo` | String | 合同编号 | ⬜ | |
| `gpsContractNo` | String | GPS合同编号 | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `gpsRfqName` | String | GPS询价单名称 | ⬜ | |
| `quoteStage` | String | 报价阶段 | ⬜ | |
| `quoteStageI18nName` | String | 报价名称 | ⬜ | |
| `vehicleModel` | String | vehicle模式 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorI18nName` | String | 供应商名称 | ⬜ | |
| `nominationResult` | NominationResult | 提名result | ⬜ | |
| `nominationResultI18nDesc` | String | 编号描述 | ⬜ | |
| `nominationFileStatus` | NominationFileStatus | 提名文件状态 | ⬜ | |
| `nominationFileStatusI18nDesc` | String | 编号描述 | ⬜ | |
| `contractStatus` | NominationFileSignStatusEnum | 合同状态 | ⬜ | |
| `contractStatusI18nDesc` | String | 状态描述 | ⬜ | |
| `offlineNominationFileUploadStatus` | OfflineNominationFileUploadStatusEnum | 线下提名文件已上传状态 | ⬜ | |
| `offlineNominationFileUploadedStatusI18nDesc` | String | 编号描述 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryI18nName` | String | 品类名称 | ⬜ | |
| `factoryI18nNames` | String | 工厂名称名称 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerI18nName` | String | 采购员名称 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |

---

### 152. NominationLetterEntity

**标准化名称**: `nominationletter`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 定点表单 Id

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationLetterEntity.java`

**关系统计**:

- 总关系数: 35
- 出向关系: 20
- 入向关系: 15

**出向关系类型**:

- `involves_create`: 3
- `involves_other`: 7
- `involves_query`: 2
- `queries_get`: 2
- `queries_getBy`: 4
- `queries_other`: 2

**入向关系类型**:

- `involves_create`: 3
- `involves_other`: 6
- `involves_query`: 2
- `queries_get`: 2
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `nominationId` | Long | 提名ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `clmsCode` | String | clms编码 | ⬜ | |
| `clmsNo` | String | clms编号 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `contractId` | Long | 合同ID | ⬜ | |
| `contractStatus` | String | 合同状态 | ⬜ | |
| `contractNo` | String | 合同编号 | ⬜ | |
| `contractCompleteTime` | LocalDateTime | 合同时间 | ⬜ | |
| `nominated` | Boolean | 已提名 | ⬜ | |
| `parameters` | String | parameters | ⬜ | |
| `status` | NominationLetterStatus | 状态 | ⬜ | |
| `nominationTemplateType` | NominationTemplateType | 提名模板类型 | ⬜ | |
| `extInfo` | NominationLetterExtInfo | 扩展信息 | ⬜ | |
| `nominationLetterRepository` | INominationLetterRepository | 提名信函仓储 | ⬜ | |

---

### 153. NominationMaterialEntity

**标准化名称**: `nominationmaterial`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 定点申请表id

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationMaterialEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 2
- 入向关系: 1

**出向关系类型**:

- `involves_create`: 1
- `involves_validate`: 1

**入向关系类型**:

- `involves_validate`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `nominationId` | Long | 提名ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `bizMaterialCode` | String | 物料编码 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `gpsPrCode` | String | GPS编码 | ⬜ | |
| `gpsPrLineNumber` | Integer | GPS采购申请行编号 | ⬜ | |
| `gpsPrOrderType` | String | GPS采购申请订单类型 | ⬜ | |
| `material` | MaterialVO | 物料 | ⬜ | |
| `nominated` | Boolean | 已提名 | ⬜ | |

---

### 154. NominationRelationEntity

**标准化名称**: `nominationrelation`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.nomination`

**文件路径**: `com/nio/srm/gps/price/domain/nomination/NominationRelationEntity.java`

**关系统计**:

- 总关系数: 60
- 出向关系: 28
- 入向关系: 32

**出向关系类型**:

- `involves_create`: 2
- `involves_other`: 8
- `queries_find`: 12
- `queries_other`: 6

**入向关系类型**:

- `involves_compute`: 1
- `involves_create`: 6
- `involves_other`: 17
- `queries_find`: 2
- `queries_other`: 6

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorZhName` | String | 供应商名称 | ⬜ | |
| `vendorEnName` | String | 供应商名称 | ⬜ | |
| `vendorInfo` | String | 供应商信息 | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `brand` | BrandEnum | 品牌 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `factoryName` | String | 工厂名称 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryZhName` | String | 中文名称 | ⬜ | |
| `gpsCategoryEnName` | String | 英文名称 | ⬜ | |
| `partCode` | String | 部分编码 | ⬜ | |
| `partVersion` | String | 部分版本 | ⬜ | |
| `colorCode` | String | color编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `materialZhName` | String | 物料名称 | ⬜ | |
| `materialEnName` | String | 物料名称 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `imported` | Boolean | 采购订单 | ⬜ | |
| `existSamplePartPrice` | Boolean | 部分价格 | ⬜ | |
| `nominationSource` | PriceNominationSource | 提名来源 | ⬜ | |
| `nominationSourceNo` | String | 编号编号 | ⬜ | |
| `nominationStatus` | PriceNominationStatus | 提名状态 | ⬜ | |
| `nominationEffectStatus` | NominationEffectStatus | 提名生效状态 | ⬜ | |
| `nominationRelationRepository` | NominationRelationRepository | 提名关系仓储 | ⬜ | |
| `nominationId` | Long | 提名ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `newVendorCode` | String | 供应商编码 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialInfo` | MaterialVO | 物料信息 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `salesArea` | String | salesarea | ⬜ | |
| `quota` | BigDecimal | TA | ⬜ | |
| `gpsMeetingId` | Long | GPSID | ⬜ | |
| `multiNomination` | Boolean | multi提名 | ⬜ | |
| `isImportedPart` | Boolean | 是否部分 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `status` | NominationRelationStatus | 状态 | ⬜ | |
| `relationType` | NominationRelationType | 关系类型 | ⬜ | |
| `supplyStatus` | String | supply状态 | ⬜ | |
| `quoteRoundNo` | Integer | 报价编号 | ⬜ | |

---

### 155. NominationVendorEntity

**标准化名称**: `nominationvendor`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 定点表单 Id

**包路径**: `com.nio.srm.gps.sourcing.domain.nomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/nomination/NominationVendorEntity.java`

**关系统计**:

- 总关系数: 11
- 出向关系: 4
- 入向关系: 7

**出向关系类型**:

- `involves_query`: 1
- `involves_update`: 2
- `involves_validate`: 1

**入向关系类型**:

- `involves_create`: 1
- `involves_query`: 2
- `involves_update`: 2
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `nominationId` | Long | 提名ID | ⬜ | |
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `paymentPeriodStandard` | Boolean | 支付周期标准 | ⬜ | |
| `accountPeriodCode` | String | 数量编码 | ⬜ | |
| `accountPeriodDesc` | String | 数量描述 | ⬜ | |
| `nominationTemplateType` | NominationTemplateType | 提名模板类型 | ⬜ | |
| `totalNominationAmount` | BigDecimal | 总编号 | ⬜ | |
| `totalNominationWithTaxAmount` | BigDecimal | 总编号 | ⬜ | |
| `nominationCurrency` | String | 提名货币 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `recommendReason` | String | reason | ⬜ | |
| `extInfo` | NominationVendorExtInfo | 扩展信息 | ⬜ | |
| `attachmentRepository` | IAttachmentRepository | 附件仓储 | ⬜ | |
| `nominationRepository` | INominationRepository | 提名仓储 | ⬜ | |

---

### 156. NormalPriceComparisonEntity

**标准化名称**: `normalpricecomparison`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 合作伙伴状态

**包路径**: `com.nio.srm.gps.sourcing.domain.pricecomparison`

**文件路径**: `com/nio/srm/gps/sourcing/domain/pricecomparison/NormalPriceComparisonEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorStatus` | String | 供应商状态 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `vendorPaymentClause` | String | 供应商支付clause | ⬜ | |
| `quoteTradeClause` | String | 报价贸易clause | ⬜ | |
| `checkMaterialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `checkMouldPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `checkRdPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `vendorQuoteCurrency` | String | 供应商报价货币 | ⬜ | |
| `vendorQuoteExchangeRate` | BigDecimal | 供应商报价汇率率 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `configuration` | String | 配置 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `noApportionMaterialPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `ladderPriceCreateRequest` | LadderPriceCreateRequest | 阶梯价格创建申请 | ⬜ | |
| `logisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `noApportionMaterialLogisticsPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `withApportionMaterialLogisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `mouldPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `rdPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `purchasedPartCostAmount` | BigDecimal | 采购金额 | ⬜ | |
| `rawMaterialCostAmount` | BigDecimal | 物料金额 | ⬜ | |
| `manufactureCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `generalManageFeeAmount` | BigDecimal | 英文金额 | ⬜ | |
| `npvAmount` | BigDecimal | npv金额 | ⬜ | |
| `apvAmount` | BigDecimal | apv金额 | ⬜ | |
| `perVehicleUsageCount` | BigDecimal | perVehicleUsage数量 | ⬜ | |
| `perVehicleRatio` | BigDecimal | 百分比vehicle持续时间 | ⬜ | |
| `onlineBiddingHalls` | OnlineBiddingHallVO | 在线竞价全部 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `totalMouldAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalRdAmount` | BigDecimal | 总金额 | ⬜ | |
| `quoteStageSamplePiece` | QuoteStageSamplePieceRequest | 报价阶段sampleCE | ⬜ | |
| `quoteMaterialCostDecline` | QuoteMaterialCostDeclineCreateRequest | 报价物料成本行 | ⬜ | |
| `soABCoefficient` | BigDecimal | 来源ab | ⬜ | |
| `soABCoefficientAmount` | BigDecimal | 英文金额 | ⬜ | |

---

### 157. OnlineBiddingAttachmentEntity

**标准化名称**: `onlinebiddingattachment`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 所属的竞价单id

**包路径**: `com.nio.srm.gps.sourcing.domain.onlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/onlinebidding/buyer/OnlineBiddingAttachmentEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_select`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `onlineBiddingId` | Long | IDID | ⬜ | |
| `onlineBiddingFileType` | String | 在线竞价文件类型 | ⬜ | |
| `required` | Boolean | required | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `fileId` | Long | 文件ID | ⬜ | |
| `fileName` | String | 文件名称 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `gpsVendorName` | String | 供应商名称 | ⬜ | |
| `fileUUID` | String | 文件ID | ⬜ | |
| `confirmResult` | String | confirmresult | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `id` | Long | ID | ⬜ | |

---

### 158. OnlineBiddingItemEntity

**标准化名称**: `onlinebiddingitem`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 所属竞价单ID

**包路径**: `com.nio.srm.gps.sourcing.domain.onlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/onlinebidding/buyer/OnlineBiddingItemEntity.java`

**关系统计**:

- 总关系数: 5
- 出向关系: 2
- 入向关系: 3

**出向关系类型**:

- `involves_other`: 2

**入向关系类型**:

- `involves_other`: 2
- `queries_get`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `onlineBiddingId` | Long | IDID | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `startPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `biddingTimes` | Integer | 竞价时间 | ⬜ | |
| `onlineBiddingCode` | String | ID编码 | ⬜ | |
| `itemNumber` | Integer | 项编号 | ⬜ | |
| `vendorBiddingStatus` | OnlineBiddingVendorStatus | 供应商竞价状态 | ⬜ | |
| `biddingTime` | LocalDateTime | 竞价时间 | ⬜ | |
| `noTaxPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `ranking` | Integer | 排名 | ⬜ | |
| `isEffectivePrice` | Boolean | 是价格 | ⬜ | |
| `priceWithTaxAmount` | BigDecimal | 价格金额 | ⬜ | |
| `floorPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `onlineBiddingHallVO` | OnlineBiddingHallVO | 在线竞价全部凭证 | ⬜ | |
| `onlineBiddingMaterialVO` | OnlineBiddingMaterialVO | 在线竞价物料凭证 | ⬜ | |
| `onlineBiddingVendorVO` | OnlineBiddingVendorVO | 在线竞价供应商凭证 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |

---

### 159. OrderDetailEntity

**标准化名称**: `orderdetail`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: @author eason.wang

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/OrderDetailEntity.java`

**关系统计**:

- 总关系数: 15
- 出向关系: 4
- 入向关系: 11

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 1
- `involves_query`: 1
- `involves_update`: 1

**入向关系类型**:

- `involves_other`: 4
- `involves_query`: 3
- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `purchaseOrderId` | Long | 订单ID | ⬜ | |
| `purchaseOrderNo` | String | 订单编号 | ⬜ | |
| `id` | Long | ID | ⬜ | |
| `lineNo` | Integer | 行编号 | ⬜ | |
| `purchaseCount` | BigDecimal | 采购数量 | ⬜ | |
| `displayStatus` | DetailDisplayStatusEnum | 是状态 | ⬜ | |
| `status` | OrderDetailStatusEnum | 状态 | ⬜ | |
| `trialPhase` | TrialPhaseEnum | trial有 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `expectedArrivalDate` | String | 预期到货日期 | ⬜ | |
| `syncSap` | Boolean | 同步SAP | ⬜ | |
| `factory` | FactoryVO | 工厂 | ⬜ | |
| `detailAmount` | OrderDetailAmountVO | 明细金额 | ⬜ | |
| `detailPrice` | OrderDetailPriceVO | 明细价格 | ⬜ | |
| `detailReceipt` | OrderDetailReceiptVO | 明细收货 | ⬜ | |
| `delivery` | OrderDetailDeliveryVO | 交付 | ⬜ | |
| `purchaseObject` | OrderDetailPurchaseObjectVO | 采购object | ⬜ | |
| `budget` | OrderDetailBudgetVO | 预算 | ⬜ | |
| `asset` | OrderDetailAssetVO | 资产 | ⬜ | |
| `detailExtend` | OrderDetailExtendVO | 明细 | ⬜ | |
| `detailOtpContractPay` | OrderDetailOtpContractPayVO | 明细otp合同支付 | ⬜ | |
| `detailOtpContractAmount` | OrderDetailOtpContractAmountVO | 合同金额 | ⬜ | |
| `vehicleProject` | OrderVehicleProjectVO | vehicle项目 | ⬜ | |
| `orderPaymentManager` | OrderPaymentManagerVO | 订单支付manager | ⬜ | |
| `taxAmount` | BigDecimal | 税金额 | ⬜ | |
| `taxRate` | BigDecimal | 税比率 | ⬜ | |
| `gpsPrNo` | String | GPS采购申请编号 | ⬜ | |
| `prLineNo` | Integer | 行编号 | ⬜ | |
| `sapPaymentType` | String | SAP支付类型 | ⬜ | |
| `paymentIntervals` | String | 支付间隔 | ⬜ | |
| `installmentMonths` | Integer | months | ⬜ | |
| `needSyncSapCancel` | Boolean | 是否需要同步 | ⬜ | |

---

### 160. PackagePriceComparisonEntity

**标准化名称**: `packagepricecomparison`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 合作伙伴状态

**包路径**: `com.nio.srm.gps.sourcing.domain.pricecomparison`

**文件路径**: `com/nio/srm/gps/sourcing/domain/pricecomparison/PackagePriceComparisonEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorStatus` | String | 供应商状态 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `vendorPaymentClause` | String | 供应商支付clause | ⬜ | |
| `quoteTradeClause` | String | 报价贸易clause | ⬜ | |
| `pricingAmount` | BigDecimal | 采购申请金额 | ⬜ | |
| `noApportionMaterialPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `ladderPriceEntity` | LadderPriceEntity | 阶梯价格 | ⬜ | |
| `withApportionMaterialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `noApportionMaterialLogisticsUnitPriceCostAmount` | BigDecimal | 编号金额 | ⬜ | |
| `withApportionMaterialLogisticsUnitPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `npvAmount` | BigDecimal | npv金额 | ⬜ | |
| `apvAmount` | BigDecimal | apv金额 | ⬜ | |
| `effectDate` | LocalDateTime | 生效日期 | ⬜ | |

---

### 161. PartnerRelationEntity

**标准化名称**: `partnerrelation`

**层级**: L2-Supporting

**推理中文含义**: 部分

**当前描述**: 合作伙伴关系实体

**包路径**: `com.nio.srm.gps.price.domain.partner.relation`

**文件路径**: `com/nio/srm/gps/price/domain/partner/relation/PartnerRelationEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 1
- 入向关系: 1

**出向关系类型**:

- `involves_other`: 1

**入向关系类型**:

- `involves_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| (无属性) | - | - | - | - |

---

### 162. PdataRelationItemEntity

**标准化名称**: `pdatarelationitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: rfq id

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/PdataRelationItemEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `relatedNominatedMaterialCode` | String | 编号编码 | ⬜ | |
| `relatedNominatedMaterialName` | String | 编号名称 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |

---

### 163. PendingVendorQuotaEntity

**标准化名称**: `pendingvendorquota`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.quota`

**文件路径**: `com/nio/srm/gps/price/domain/quota/PendingVendorQuotaEntity.java`

**关系统计**:

- 总关系数: 9
- 出向关系: 6
- 入向关系: 3

**出向关系类型**:

- `involves_convert`: 1
- `involves_create`: 2
- `involves_move`: 1
- `queries_other`: 1
- `queries_queryBy`: 1

**入向关系类型**:

- `involves_create`: 2
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `applyCode` | String | 申请编码 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `factoryName` | String | 工厂名称 | ⬜ | |
| `supplyStatus` | String | supply状态 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `categoryName` | String | 品类名称 | ⬜ | |
| `partCode` | String | 部分编码 | ⬜ | |
| `partVersion` | String | 部分版本 | ⬜ | |
| `colorCode` | String | color编码 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialZhName` | String | 物料名称 | ⬜ | |
| `materialEnName` | String | 物料名称 | ⬜ | |
| `multiNomination` | Boolean | multi提名 | ⬜ | |
| `alternativeGroup` | String | alternative分组 | ⬜ | |
| `primaryFlag` | Boolean | 采购申请标志 | ⬜ | |
| `businessQuotaAlternativeGroup` | String | BUTAalternative分组 | ⬜ | |
| `key1MaterialCode` | String | 物料编码 | ⬜ | |
| `key2MaterialCode` | String | 物料编码 | ⬜ | |
| `quota` | BigDecimal | TA | ⬜ | |
| `categoryFlag` | Boolean | 品类标志 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `sourceQuotaConfirmCode` | String | 来源编码 | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `bizMode` | BizMode | 业务模式 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `pendingVendorQuotaRepository` | PendingVendorQuotaRepository | 待处理供应商TA仓储 | ⬜ | |
| `vendorQuotaRepository` | VendorQuotaRepository | 供应商TA仓储 | ⬜ | |
| `vendorQuotaConverter` | VendorQuotaConverter | 供应商TA转换器 | ⬜ | |

---

### 164. PriceApplicationEntity

**标准化名称**: `priceapplication`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 价格申请单

**包路径**: `com.nio.srm.gps.template.domain.model.price.app`

**文件路径**: `com/nio/srm/gps/template/domain/model/price/app/PriceApplicationEntity.java`

**关系统计**:

- 总关系数: 6
- 出向关系: 2
- 入向关系: 4

**出向关系类型**:

- `involves_other`: 1
- `queries_other`: 1

**入向关系类型**:

- `involves_other`: 3
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsPriceApplyNo` | String | GPS价格申请编号 | ⬜ | |
| `templateCode` | String | 模板编码 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `dpPriceApplyType` | DpPriceApplyTypeEnum | dp价格申请类型 | ⬜ | |
| `applicationStatus` | PriceApplicationStatus | 申请状态 | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `applyTime` | LocalDateTime | 申请时间 | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `brand` | BrandEnum | 品牌 | ⬜ | |
| `manuallyAddReason` | String | 全部地址reason | ⬜ | |
| `needConference` | Boolean | 是否需要英文 | ⬜ | |
| `needAudit` | Boolean | 是否需要审核 | ⬜ | |

---

### 165. PriceApportionMappingEntity

**标准化名称**: `priceapportionmapping`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriceApportionMappingEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 3
- 入向关系: 0

**出向关系类型**:

- `involves_other`: 1
- `involves_update`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `apportionType` | String | 分摊类型 | ⬜ | |
| `partCode` | String | 部分编码 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `apportionMappingKey` | String | 分摊mappingkey | ⬜ | |
| `apportionPartVendorCode` | String | 供应商编码 | ⬜ | |
| `apportionId` | Long | 分摊ID | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 166. PriceAssemblyDbConfigEntity

**标准化名称**: `priceassemblydbconfig`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @Author Muhouer

**包路径**: `com.nio.srm.gps.price.domain.assembly`

**文件路径**: `com/nio/srm/gps/price/domain/assembly/PriceAssemblyDbConfigEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `assemblyMaterialCode` | String | 物料编码 | ⬜ | |
| `assemblyPartCode` | String | 部分编码 | ⬜ | |
| `assemblyVendorCode` | String | 供应商编码 | ⬜ | |
| `dbMaterialCode` | String | 物料编码 | ⬜ | |
| `dbPartCode` | String | 部分编码 | ⬜ | |
| `dbVendorCode` | String | 供应商编码 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `assemblyBuyerAccount` | String | 采购员数量 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 167. PriceAttachmentDetailEntity

**标准化名称**: `priceattachmentdetail`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author: Tutu.Wang

**包路径**: `com.nio.srm.gps.price.domain.attachment`

**文件路径**: `com/nio/srm/gps/price/domain/attachment/PriceAttachmentDetailEntity.java`

**关系统计**:

- 总关系数: 7
- 出向关系: 3
- 入向关系: 4

**出向关系类型**:

- `involves_validate`: 3

**入向关系类型**:

- `involves_query`: 1
- `involves_validate`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `uuid` | String | UUIDID | ⬜ | |
| `attachmentName` | String | 附件名称 | ⬜ | |
| `attachmentType` | PriceApplicationAttachmentType | 附件类型 | ⬜ | |
| `storageType` | String | 存储类型 | ⬜ | |
| `archiveSize` | Long | archivesize | ⬜ | |
| `archiveMd5` | String | archiveMD5 | ⬜ | |
| `archivePath` | String | archive路径 | ⬜ | |
| `archiveName` | String | archive名称 | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `bizSourceId` | String | 来源ID | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `priceAttachmentRepository` | IPriceAttachmentRepository | 价格附件仓储 | ⬜ | |

---

### 168. PriceAuditTaskEntity

**标准化名称**: `priceaudittask`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author steven.sun

**包路径**: `com.nio.srm.gps.price.domain.audit`

**文件路径**: `com/nio/srm/gps/price/domain/audit/PriceAuditTaskEntity.java`

**关系统计**:

- 总关系数: 16
- 出向关系: 11
- 入向关系: 5

**出向关系类型**:

- `involves_create`: 3
- `involves_other`: 6
- `involves_query`: 2

**入向关系类型**:

- `involves_create`: 1
- `involves_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `auditType` | PriceAuditTaskType | 审核类型 | ⬜ | |
| `bizSource` | PriceAuditBizSource | 业务来源 | ⬜ | |
| `bizSourceNo` | String | 来源编号 | ⬜ | |
| `auditNo` | String | 审核编号 | ⬜ | |
| `status` | PriceAuditStatus | 状态 | ⬜ | |
| `nativeStatus` | String | native状态 | ⬜ | |
| `auditTime` | LocalDateTime | 审核时间 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |

---

### 169. PriceBizTaskEntity

**标准化名称**: `pricebiztask`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.biz.task`

**文件路径**: `com/nio/srm/gps/price/domain/biz/task/PriceBizTaskEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `mainTaskNo` | String | 任务编号 | ⬜ | |
| `taskNo` | String | 任务编号 | ⬜ | |
| `taskType` | PriceBizTaskType | 任务类型 | ⬜ | |
| `bizSource` | PriceCommonBizSource | 业务来源 | ⬜ | |
| `bizSourceNo` | String | 来源编号 | ⬜ | |
| `taskParam` | PriceSwitchFactoryTaskParam | 任务param | ⬜ | |
| `operator` | String | 操作人 | ⬜ | |
| `taskStatus` | PriceBizTaskStatus | 任务状态 | ⬜ | |
| `startTime` | LocalDateTime | 开始时间 | ⬜ | |
| `finishTime` | LocalDateTime | 是时间 | ⬜ | |
| `effectItemCount` | Long | 项数量 | ⬜ | |
| `failItemCount` | Long | 项数量 | ⬜ | |
| `successItemCount` | Long | 项数量 | ⬜ | |
| `failItemDetails` | PriceTaskFailItemDetailHolder | fail项明细 | ⬜ | |
| `taskStatistics` | PriceTaskStatisticsHolder | 任务是 | ⬜ | |
| `extInfo` | PriceBizTaskEntityExtInfo | 扩展信息 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `costMills` | Long | 成本mills | ⬜ | |
| `costSeconds` | Long | 成本seconds | ⬜ | |
| `costMinutes` | Long | 成本分钟 | ⬜ | |

---

### 170. PriceCenterFrameworkChangeTaskEntity

**标准化名称**: `pricecenterframeworkchangetask`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 

**包路径**: `com.nio.srm.gps.price.domain.center.framework.entity`

**文件路径**: `com/nio/srm/gps/price/domain/center/framework/entity/PriceCenterFrameworkChangeTaskEntity.java`

**关系统计**:

- 总关系数: 5
- 出向关系: 5
- 入向关系: 0

**出向关系类型**:

- `involves_other`: 1
- `involves_validate`: 1
- `queries_other`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `taskPackageId` | Long | 任务ID | ⬜ | |
| `taskStatus` | PriceCenterFrameworkChangeTaskStatus | 任务状态 | ⬜ | |

---

### 171. PriceCenterFrameworkChangeTaskPackageEntity

**标准化名称**: `pricecenterframeworkchangetaskpackage`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 

**包路径**: `com.nio.srm.gps.price.domain.center.framework.entity`

**文件路径**: `com/nio/srm/gps/price/domain/center/framework/entity/PriceCenterFrameworkChangeTaskPackageEntity.java`

**关系统计**:

- 总关系数: 5
- 出向关系: 0
- 入向关系: 5

**入向关系类型**:

- `involves_other`: 1
- `involves_validate`: 1
- `queries_other`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `handleCompleted` | boolean | handlecompleted | ⬜ | |
| `priceCenterFrameworkType` | PriceCenterFrameworkType | 价格中心框架类型 | ⬜ | |
| `priceCenterFrameworkTaskType` | PriceCenterFrameworkTaskType | 价格中心框架任务类型 | ⬜ | |
| `gpsMainContractId` | Long | 合同ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `latestChangeTask` | PriceCenterFrameworkChangeTaskEntity | 测试变更任务 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 172. PriceCenterFrameworkContractSnapshotEntity

**标准化名称**: `pricecenterframeworkcontractsnapshot`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 

**包路径**: `com.nio.srm.gps.price.domain.center.framework.entity`

**文件路径**: `com/nio/srm/gps/price/domain/center/framework/entity/PriceCenterFrameworkContractSnapshotEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsMainContractId` | Long | 合同ID | ⬜ | |
| `gpsContractId` | Long | 合同ID | ⬜ | |
| `gpsPriceFrameworkType` | String | GPS价格框架类型 | ⬜ | |
| `price` | PriceCenterFrameworkAgg | 价格 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |

---

### 173. PriceCenterFrameworkSyncTaskEntity

**标准化名称**: `pricecenterframeworksynctask`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 价格中心-价格框架同步任务表

**包路径**: `com.nio.srm.gps.price.domain.center.framework.entity`

**文件路径**: `com/nio/srm/gps/price/domain/center/framework/entity/PriceCenterFrameworkSyncTaskEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 1
- 入向关系: 1

**出向关系类型**:

- `involves_update`: 1

**入向关系类型**:

- `involves_update`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsPriceFrameworkId` | Long | 价格ID | ⬜ | |
| `sapTaskType` | PriceCenterFrameworkSyncType | SAP任务类型 | ⬜ | |
| `status` | PriceCenterFrameworkSyncStatus | 状态 | ⬜ | |
| `requestInfo` | String | 申请信息 | ⬜ | |
| `responseInfo` | String | 采购订单信息 | ⬜ | |
| `errorMsg` | String | errormsg | ⬜ | |
| `syncTime` | LocalDateTime | 同步时间 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |

---

### 174. PriceComparisonEntity

**标准化名称**: `pricecomparison`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 询价单编号

**包路径**: `com.nio.srm.gps.sourcing.domain.pricecomparison`

**文件路径**: `com/nio/srm/gps/sourcing/domain/pricecomparison/PriceComparisonEntity.java`

**关系统计**:

- 总关系数: 11
- 出向关系: 8
- 入向关系: 3

**出向关系类型**:

- `queries_find`: 1
- `queries_get`: 2
- `queries_other`: 2
- `queries_select`: 3

**入向关系类型**:

- `queries_find`: 1
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `bizGroup` | String | 业务分组 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `quoteStatus` | ReqForQuoteStatus | 报价状态 | ⬜ | |
| `hasNomination` | Boolean | 是否有提名 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `gpsCategoryId` | Long | GPS品类ID | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `quoteRoundNo` | Integer | 报价编号 | ⬜ | |
| `categoryName` | String | 品类名称 | ⬜ | |
| `rfqName` | String | 询价名称 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `taxRate` | BigDecimal | 税比率 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `sorInfo` | StatOfReqEntity | SOR信息 | ⬜ | |
| `isSorVisible` | Boolean | 是否是 | ⬜ | |
| `isQualityFileUploaded` | Boolean | 是否文件 | ⬜ | |
| `isQualityVisible` | Boolean | 是否是 | ⬜ | |
| `isLadderPrice` | Boolean | 是价格 | ⬜ | |
| `ladderPriceInfo` | LadderPriceEntity | 阶梯价格信息 | ⬜ | |
| `quoteType` | QuoteType | 报价类型 | ⬜ | |
| `quoteRound` | QuoteRoundEntity | 报价轮次 | ⬜ | |
| `dreAccount` | String | DRE数量 | ⬜ | |
| `qualityAccount` | String | 质量数量 | ⬜ | |
| `ceAccount` | String | CE数量 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `isApportion` | Boolean | 是否分摊 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `buyerGroup` | String | 采购员分组 | ⬜ | |
| `vendorQuoteStatus` | VendorReqForQuoteStatus | 供应商报价状态 | ⬜ | |
| `sealedBidding` | Boolean | 密封竞价 | ⬜ | |
| `roundDeadlineTime` | LocalDateTime | 轮次时间 | ⬜ | |
| `quoteMethod` | String | 报价method | ⬜ | |
| `isAutoSendMessage` | Boolean | 是否英文 | ⬜ | |
| `priceComparisonTypeVO` | PriceComparisonTypeVO | 价格是类型凭证 | ⬜ | |
| `priceComparisonRepository` | PriceComparisonRepository | 价格是仓储 | ⬜ | |
| `vendorFacade` | VendorFacade | 供应商门面 | ⬜ | |
| `apolloConfigHelper` | ApolloConfigHelper | 采购订单配置助手 | ⬜ | |
| `nominationRepository` | NominationRepository | 提名仓储 | ⬜ | |
| `quoteRoundRepository` | IQuoteRoundRepository | 报价轮次仓储 | ⬜ | |

---

### 175. PriceComparisonHistoryEntity

**标准化名称**: `pricecomparisonhistory`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 合作伙伴状态

**包路径**: `com.nio.srm.gps.sourcing.domain.pricecomparison`

**文件路径**: `com/nio/srm/gps/sourcing/domain/pricecomparison/PriceComparisonHistoryEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorStatus` | String | 供应商状态 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `vendorPaymentClause` | String | 供应商支付clause | ⬜ | |
| `quoteTradeClause` | String | 报价贸易clause | ⬜ | |
| `pricingAmount` | BigDecimal | 采购申请金额 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `configuration` | String | 配置 | ⬜ | |
| `noApportionMaterialPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `ladderPriceCreateRequest` | LadderPriceCreateRequest | 阶梯价格创建申请 | ⬜ | |
| `logisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `noApportionMaterialLogisticsPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `withApportionMaterialLogisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `mouldPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `rdPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `purchasedPartCostAmount` | BigDecimal | 采购金额 | ⬜ | |
| `rawMaterialCostAmount` | BigDecimal | 物料金额 | ⬜ | |
| `manufactureCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `generalManageFeeAmount` | BigDecimal | 英文金额 | ⬜ | |
| `npvAmount` | BigDecimal | npv金额 | ⬜ | |
| `apvAmount` | BigDecimal | apv金额 | ⬜ | |
| `effectDate` | LocalDateTime | 生效日期 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `salesArea` | String | salesarea | ⬜ | |
| `perVehicleUsageCount` | BigDecimal | perVehicleUsage数量 | ⬜ | |
| `perVehicleRatio` | BigDecimal | 百分比vehicle持续时间 | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `gpsRfqName` | String | GPS询价单名称 | ⬜ | |
| `categoryCode` | String | 品类编码 | ⬜ | |
| `categoryName` | String | 品类名称 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `vehicleModel` | String | vehicle模式 | ⬜ | |
| `totalDimensionCount` | Integer | 总数量 | ⬜ | |
| `bundleCode` | String | BU编码 | ⬜ | |

---

### 176. PriceComparisonReportEntity

**标准化名称**: `pricecomparisonreport`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 合作伙伴状态

**包路径**: `com.nio.srm.gps.sourcing.domain.pricecomparison`

**文件路径**: `com/nio/srm/gps/sourcing/domain/pricecomparison/PriceComparisonReportEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorStatus` | String | 供应商状态 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `vendorPaymentClause` | String | 供应商支付clause | ⬜ | |
| `quoteTradeClause` | String | 报价贸易clause | ⬜ | |
| `quoteRoundNo` | Integer | 报价编号 | ⬜ | |
| `pricingAmount` | BigDecimal | 采购申请金额 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `configuration` | String | 配置 | ⬜ | |
| `noApportionMaterialPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `ladderPriceCreateRequest` | LadderPriceCreateRequest | 阶梯价格创建申请 | ⬜ | |
| `withApportionMaterialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `logisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `noApportionMaterialLogisticsPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `withApportionMaterialLogisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `vendorQuoteCurrency` | String | 供应商报价货币 | ⬜ | |
| `vendorQuoteExchangeRate` | BigDecimal | 供应商报价汇率率 | ⬜ | |
| `mouldPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `rdPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `purchasedPartCostAmount` | BigDecimal | 采购金额 | ⬜ | |
| `rawMaterialCostAmount` | BigDecimal | 物料金额 | ⬜ | |
| `manufactureCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `generalManageFeeAmount` | BigDecimal | 英文金额 | ⬜ | |
| `npvAmount` | BigDecimal | npv金额 | ⬜ | |
| `apvAmount` | BigDecimal | apv金额 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `effectDate` | LocalDateTime | 生效日期 | ⬜ | |
| `priceComparisonMaterialVO` | PriceComparisonMaterialVO | 价格是物料凭证 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `onlineBiddingHalls` | OnlineBiddingHallVO | 在线竞价全部 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `totalMouldAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalRdAmount` | BigDecimal | 总金额 | ⬜ | |

---

### 177. PriceDefinitionEntity

**标准化名称**: `pricedefinition`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 价格的定义

**包路径**: `com.nio.srm.gps.template.domain.model.price.definition`

**文件路径**: `com/nio/srm/gps/template/domain/model/price/definition/PriceDefinitionEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 2
- 入向关系: 1

**出向关系类型**:

- `queries_other`: 2

**入向关系类型**:

- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Integer | ID | ⬜ | |
| `gpsPriceCode` | String | 价格编码 | ⬜ | |
| `priceName` | String | 价格名称 | ⬜ | |
| `productLine` | String | 采购申请行 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `priceCategory` | String | 价格品类 | ⬜ | |
| `priceType` | String | 价格类型 | ⬜ | |

---

### 178. PriceExternalApplyEntity

**标准化名称**: `priceexternalapply`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @Author Muhouer

**包路径**: `com.nio.srm.gps.price.domain.external.common`

**文件路径**: `com/nio/srm/gps/price/domain/external/common/PriceExternalApplyEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `bizSource` | ExternalApplyBizSourceEnum | 业务来源 | ⬜ | |
| `applyBizType` | ExternalApplyBizTypeEnum | 申请业务类型 | ⬜ | |
| `applyNo` | String | 申请编号 | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `applyTime` | LocalDateTime | 申请时间 | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `bizStatus` | String | 业务状态 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `auditFlowInfo` | ApplyAuditFlowInfo | 审核流程信息 | ⬜ | |
| `externalSyncInfo` | String | 扩展同步信息 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 179. PriceFieldConfigEntity

**标准化名称**: `pricefieldconfig`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author qichen.shi

**包路径**: `com.nio.srm.gps.price.domain.price.config`

**文件路径**: `com/nio/srm/gps/price/domain/price/config/PriceFieldConfigEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 2
- 入向关系: 2

**出向关系类型**:

- `involves_query`: 1
- `queries_other`: 1

**入向关系类型**:

- `involves_query`: 1
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 180. PriceFieldConfigDetailEntity

**标准化名称**: `pricefieldconfigdetail`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author qichen.shi

**包路径**: `com.nio.srm.gps.price.domain.price.config`

**文件路径**: `com/nio/srm/gps/price/domain/price/config/PriceFieldConfigDetailEntity.java`

**关系统计**:

- 总关系数: 5
- 出向关系: 4
- 入向关系: 1

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 1
- `involves_update`: 1
- `queries_queryBy`: 1

**入向关系类型**:

- `involves_update`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `fieldConfigId` | Long | 配置ID | ⬜ | |
| `orderNo` | Long | 订单编号 | ⬜ | |
| `fieldCode` | String | field编码 | ⬜ | |
| `fieldName` | String | field名称 | ⬜ | |
| `editable` | Boolean | TA | ⬜ | |
| `display` | Boolean | 是 | ⬜ | |
| `required` | Boolean | required | ⬜ | |
| `checkRule` | String | checkrule | ⬜ | |
| `customScript` | String | custom描述 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 181. PriceFlowEntity

**标准化名称**: `priceflow`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 价格流水Entity，聚合起各类价格。

**包路径**: `com.nio.srm.gps.template.domain.model.price.flow`

**文件路径**: `com/nio/srm/gps/template/domain/model/price/flow/PriceFlowEntity.java`

**关系统计**:

- 总关系数: 17
- 出向关系: 2
- 入向关系: 15

**出向关系类型**:

- `involves_create`: 1
- `involves_delete`: 1

**入向关系类型**:

- `involves_create`: 4
- `involves_delete`: 1
- `involves_other`: 5
- `involves_query`: 4
- `involves_update`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `templateCode` | String | 模板编码 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `priceSource` | PriceSourceEnum | 价格来源 | ⬜ | |
| `priceSourceNo` | String | 价格编号 | ⬜ | |
| `gpsPriceConfirmNo` | String | GPS价格确认编号 | ⬜ | |
| `sourceGpsPriceConfirmNo` | String | 价格编号 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `materialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `logisticPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `noApportionMaterialLogisticsPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `withApportionMaterialLogisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `mouldApportionPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `rdApportionPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `mouldPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `rdPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `supplyStatus` | SupplyStatusEnum | supply状态 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `tradeType` | String | 贸易类型 | ⬜ | |
| `paymentPeriod` | String | 支付周期 | ⬜ | |
| `paymentType` | String | 支付类型 | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `brand` | BrandEnum | 品牌 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |

---

### 182. PriceFlowItemEntity

**标准化名称**: `priceflowitem`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 一个价格项

**包路径**: `com.nio.srm.gps.template.domain.model.price.flow`

**文件路径**: `com/nio/srm/gps/template/domain/model/price/flow/PriceFlowItemEntity.java`

**关系统计**:

- 总关系数: 40
- 出向关系: 1
- 入向关系: 39

**出向关系类型**:

- `involves_update`: 1

**入向关系类型**:

- `involves_update`: 1
- `queries_other`: 38

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsPriceFlowNo` | String | 价格编号 | ⬜ | |
| `gpsPriceCode` | String | 价格编码 | ⬜ | |
| `priceSource` | PriceSourceEnum | 价格来源 | ⬜ | |
| `priceSourceNo` | String | 价格编号 | ⬜ | |
| `priceStatus` | PriceItemStatusEnum | 价格状态 | ⬜ | |
| `priceDimension` | PriceDimensionVO | 价格维度 | ⬜ | |
| `quotedPriceDetail` | QuotedPriceDetailVO | 报价价格明细 | ⬜ | |

---

### 183. PriceLcrApplyItemEntity

**标准化名称**: `pricelcrapplyitem`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @Author Muhouer

**包路径**: `com.nio.srm.gps.price.domain.external.lcr`

**文件路径**: `com/nio/srm/gps/price/domain/external/lcr/PriceLcrApplyItemEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 1
- 入向关系: 0

**出向关系类型**:

- `involves_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `applyId` | Long | 申请ID | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `brand` | BrandEnum | 品牌 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `purchaseTargetCode` | String | 采购编码 | ⬜ | |
| `purchaseInfo` | LcrPurchaseInfo | 采购信息 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `externalInfo` | LcrExternalInfo | 扩展信息 | ⬜ | |
| `priceInfo` | LcrPriceInfo | 价格信息 | ⬜ | |
| `settlementInfo` | PriceSettlementInfoVO | 信息 | ⬜ | |
| `sapTax` | SapTaxBO | SAP税 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `originalMaterialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `originalLogisticPriceInfo` | LogisticPriceSimpleInfo | 原始日志价格信息 | ⬜ | |
| `logisticPriceDeltaAmount` | BigDecimal | 价格金额 | ⬜ | |
| `logisticPriceInfo` | LogisticPriceSimpleInfo | 日志价格信息 | ⬜ | |
| `gpsPriceFlowNo` | String | 价格编号 | ⬜ | |
| `baseCurrency` | String | base货币 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `partNo` | String | 部分编号 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `measureUnit` | String | 计量单位 | ⬜ | |
| `perVehicleUsageCount` | BigDecimal | perVehicleUsage数量 | ⬜ | |
| `originalMaterialCode` | String | 物料编码 | ⬜ | |
| `supplyStatus` | MaterialSupplyStatusEnum | supply状态 | ⬜ | |
| `priceUnit` | String | 价格单位 | ⬜ | |
| `changeDesc` | String | 变更描述 | ⬜ | |
| `changeImpact` | String | 变更impact | ⬜ | |
| `switchDate` | LocalDateTime | switch日期 | ⬜ | |
| `switchLockFlag` | Boolean | switchlock标志 | ⬜ | |
| `externalItemId` | String | 项ID | ⬜ | |

---

### 184. PriceMeetingRelEntity

**标准化名称**: `pricemeetingrel`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: File Description: PriceMeetingRelEntity

**包路径**: `com.nio.srm.gps.price.domain.meeting`

**文件路径**: `com/nio/srm/gps/price/domain/meeting/PriceMeetingRelEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `bizNo` | String | 业务编号 | ⬜ | |
| `srcType` | SrcType4Meeting | src类型 | ⬜ | |
| `meetingApplyNo` | String | 申请编号 | ⬜ | |
| `meetingStatus` | MeetingStatus | 会议状态 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |

---

### 185. PriLogisticsPriceEntity

**标准化名称**: `prilogisticsprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriLogisticsPriceEntity.java`

**关系统计**:

- 总关系数: 6
- 出向关系: 4
- 入向关系: 2

**出向关系类型**:

- `involves_create`: 2
- `queries_queryBy`: 2

**入向关系类型**:

- `involves_create`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `gpsPriceConfirmNo` | String | GPS价格确认编号 | ⬜ | |
| `logisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `singlePackageCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `singleTransportCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `singleWarehouseCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `singleDeliveryCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `logisticsInfo` | LogisticsInfo | 物流信息 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `singleRate` | String | single率 | ⬜ | |
| `arrivalRule` | String | 到达rule | ⬜ | |
| `shippingAddress` | String | IP地址 | ⬜ | |
| `distance` | BigDecimal | CE | ⬜ | |
| `exFactoryPackageType` | String | 汇率工厂package类型 | ⬜ | |
| `exFactoryPackageLength` | BigDecimal | 汇率工厂package | ⬜ | |
| `exFactoryPackageWidth` | BigDecimal | 汇率工厂packageID | ⬜ | |
| `exFactoryPackageHeight` | BigDecimal | 汇率工厂packageheight | ⬜ | |
| `exFactorySnp` | Integer | 汇率工厂snp | ⬜ | |
| `palletSpecification` | String | 全部specification | ⬜ | |
| `exFactoryWorkBinPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `supplyFrequency` | String | supply | ⬜ | |
| `exFactoryTruckInsideDiameter` | String | 汇率工厂truckIDdiameter | ⬜ | |
| `exFactoryPackageInputDays` | BigDecimal | 汇率工厂packageinputdays | ⬜ | |
| `exFactoryPackageInputCount` | Integer | 工厂数量 | ⬜ | |
| `exFactoryPackageHasLining` | String | 汇率工厂package有lining | ⬜ | |
| `singleCartonLiningTotalPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `needBuildTransitWarehouse` | String | 是否需要BU | ⬜ | |
| `transitWarehouseArea` | BigDecimal | transitwarehousearea | ⬜ | |
| `needSortingTurnover` | Boolean | 是否需要编号 | ⬜ | |
| `enFactoryPackageType` | String | 工厂package类型 | ⬜ | |
| `enFactoryPackageLength` | BigDecimal | 工厂package | ⬜ | |
| `enFactoryPackageWidth` | BigDecimal | 工厂packageID | ⬜ | |
| `enFactoryPackageHeight` | BigDecimal | 工厂packageheight | ⬜ | |
| `enFactoryPackageDeterminedValue` | BigDecimal | 工厂package最小value | ⬜ | |
| `enFactoryWorkBinPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `enFactoryUtensilInputCount` | BigDecimal | 工厂数量 | ⬜ | |
| `enFactoryUtensilUnitPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `sortingTurnoverDays` | BigDecimal | SOR编号days | ⬜ | |
| `sortingTurnoverFeeAmount` | BigDecimal | 编号金额 | ⬜ | |
| `singleEnFactoryPackageCostAmount` | BigDecimal | 工厂金额 | ⬜ | |
| `singleLiningCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `priLogisticsPriceRepository` | PriLogisticsPriceRepository | 价格物流价格仓储 | ⬜ | |

---

### 186. PriMaterialApportionInfoEntity

**标准化名称**: `primaterialapportioninfo`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: @author: Tutu.Wang

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriMaterialApportionInfoEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 0
- 入向关系: 3

**入向关系类型**:

- `involves_query`: 1
- `queries_list`: 1
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `partCode` | String | 部分编码 | ⬜ | |
| `apportionType` | PriApportionType | 分摊类型 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `priceType` | PriceType | 价格类型 | ⬜ | |
| `priceSource` | PriceSource | 价格来源 | ⬜ | |
| `priceSourceNo` | String | 价格编号 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 187. PriMaterialBomInfoEntity

**标准化名称**: `primaterialbominfo`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.assembly`

**文件路径**: `com/nio/srm/gps/price/domain/assembly/PriMaterialBomInfoEntity.java`

**关系统计**:

- 总关系数: 10
- 出向关系: 5
- 入向关系: 5

**出向关系类型**:

- `involves_other`: 3
- `involves_query`: 2

**入向关系类型**:

- `involves_other`: 2
- `involves_query`: 2
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `bomKey` | String | bomkey | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `supplyStatus` | MaterialSupplyStatusEnum | supply状态 | ⬜ | |
| `dpBomInfo` | DpBomEntity | dpbom信息 | ⬜ | |
| `bomInfoVersion` | Integer | bom信息版本 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `bomStatus` | String | bom状态 | ⬜ | |

---

### 188. PriMaterialPriceEntity

**标准化名称**: `primaterialprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 明细参考: <a href="https://nio.feishu.cn/docs/doccnBsGmcqg8qGx4lThrfNsQUf#">DP07009_寻源定点_询报价PRD_产品采购_V0.1_罗聪</a>

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriMaterialPriceEntity.java`

**关系统计**:

- 总关系数: 28
- 出向关系: 18
- 入向关系: 10

**出向关系类型**:

- `involves_create`: 5
- `involves_other`: 11
- `queries_queryBy`: 2

**入向关系类型**:

- `involves_create`: 4
- `involves_other`: 6

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `gpsPriceConfirmNo` | String | GPS价格确认编号 | ⬜ | |
| `materialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `purchasePartCostAmount` | BigDecimal | 采购金额 | ⬜ | |
| `rawMaterialCostAmount` | BigDecimal | 物料金额 | ⬜ | |
| `manufactureCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `generalManageFeeAmount` | BigDecimal | 英文金额 | ⬜ | |
| `annualDeclineInfo` | AnnualDeclineInfo | annual行信息 | ⬜ | |
| `stepPriceInfo` | StepPriceInfo | step价格信息 | ⬜ | |
| `afterSalesPriceInfo` | MaterialAfterSalesPriceInfo | 后续sales价格信息 | ⬜ | |
| `purchasePartCostInfos` | PurchasePartCostInfos | 采购部分成本信息 | ⬜ | |
| `rawMaterialCostInfos` | RawMaterialCostInfos | raw物料成本信息 | ⬜ | |
| `manufactureCostInfos` | ManufactureCostInfos | manufacture成本信息 | ⬜ | |
| `generalManageFeeInfo` | GeneralManageFeeInfo | managefee信息 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `annualDeclineType` | MaterialAnnualDeclineType | annual行类型 | ⬜ | |
| `firstYearDeclineAmount` | BigDecimal | 行金额 | ⬜ | |
| `secondYearDeclineAmount` | BigDecimal | 行金额 | ⬜ | |
| `thirdYearDeclineAmount` | BigDecimal | 行金额 | ⬜ | |
| `fourthYearDeclineAmount` | BigDecimal | 行金额 | ⬜ | |
| `fifthYearDeclineAmount` | BigDecimal | 行金额 | ⬜ | |
| `stepPriceType` | MaterialStepPriceType | step价格类型 | ⬜ | |
| `startStep` | String | 开始step | ⬜ | |
| `endStep` | String | 结束step | ⬜ | |
| `materialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `afterSalesRate` | BigDecimal | 后续sales率 | ⬜ | |
| `afterSalesMaterialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `supplyLevel` | String | supplylevel | ⬜ | |
| `purchasedPartName` | String | 采购名称 | ⬜ | |
| `purchasePartModel` | String | 采购部分模式 | ⬜ | |
| `purchasePartType` | String | 采购部分类型 | ⬜ | |
| `purchasePartCategory` | String | 采购部分品类 | ⬜ | |
| `purchasePartMeasureUnit` | String | 采购部分计量单位 | ⬜ | |
| `purchasePartConsumptionCount` | BigDecimal | 采购数量 | ⬜ | |
| `purchasePartDeliveryType` | String | 采购部分交付类型 | ⬜ | |
| `purchasePartUnitPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `purchasePartImportTariffAmount` | BigDecimal | 采购金额 | ⬜ | |
| `purchasePartLogisticsUnitPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `purchasePartScrapRate` | BigDecimal | 采购部分scrap率 | ⬜ | |
| `purchasePartCostAmount` | BigDecimal | 采购金额 | ⬜ | |
| `rawMaterialSupplyLevel` | String | raw物料supplylevel | ⬜ | |
| `rawMaterialGeneralType` | String | raw物料类型 | ⬜ | |
| `rawMaterialDetailType` | String | raw物料明细类型 | ⬜ | |
| `rawMaterialModel` | String | raw物料模式 | ⬜ | |
| `rawMaterialVendor` | String | raw物料供应商 | ⬜ | |
| `rawMaterialMeasureUnit` | String | raw物料计量单位 | ⬜ | |
| `netConsumptionCount` | BigDecimal | 净数量 | ⬜ | |
| `grossConsumptionCount` | BigDecimal | 收货单数量 | ⬜ | |
| `rawMaterialConsumptionCount` | BigDecimal | 物料数量 | ⬜ | |
| `rawMaterialUnitPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `logisticsUnitPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `recycleUnitPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `scrapRate` | BigDecimal | scrap率 | ⬜ | |
| `rawMaterialCostAmount` | BigDecimal | 物料金额 | ⬜ | |
| `supplyLevel` | String | supplylevel | ⬜ | |
| `manufactureTechnique` | String | manufacturetechnique | ⬜ | |
| `manufactureFactoryCode` | String | 工厂编码 | ⬜ | |
| `manufactureFactoryAddress` | String | manufacture工厂地址 | ⬜ | |
| `manufactureFactoryZhName` | String | 工厂名称 | ⬜ | |
| `manufactureFactoryEnName` | String | 工厂名称 | ⬜ | |
| `manufactureDevice` | String | manufactureCE | ⬜ | |
| `manufactureModel` | String | manufacture模式 | ⬜ | |
| `deviceHourRate` | BigDecimal | CEhour率 | ⬜ | |
| `directLaborHourRate` | BigDecimal | directlaborhour率 | ⬜ | |
| `directProductLaborCount` | BigDecimal | 采购申请数量 | ⬜ | |
| `hourlyOutputCount` | BigDecimal | URL数量 | ⬜ | |
| `scrapRate` | BigDecimal | scrap率 | ⬜ | |
| `manufactureMaterialConsumptionCount` | BigDecimal | 物料数量 | ⬜ | |
| `deviceCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `laborCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `manufactureCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `sga` | BigDecimal | sga | ⬜ | |
| `profitMargin` | BigDecimal | 采购申请margin | ⬜ | |
| `purchaseManageRate` | BigDecimal | 采购manage率 | ⬜ | |
| `priMaterialPriceRepository` | PriMaterialPriceRepository | 价格物料价格仓储 | ⬜ | |

---

### 189. PriMouldPriceEntity

**标准化名称**: `primouldprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriMouldPriceEntity.java`

**关系统计**:

- 总关系数: 43
- 出向关系: 29
- 入向关系: 14

**出向关系类型**:

- `involves_create`: 7
- `involves_other`: 4
- `involves_query`: 1
- `involves_update`: 2
- `queries_get`: 2
- `queries_other`: 4
- `queries_queryBy`: 9

**入向关系类型**:

- `involves_create`: 2
- `involves_other`: 2
- `involves_query`: 2
- `involves_update`: 2
- `queries_get`: 2
- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `priceSource` | PriceSource | 价格来源 | ⬜ | |
| `priceSourceNo` | String | 价格编号 | ⬜ | |
| `priceType` | PriceType | 价格类型 | ⬜ | |
| `mouldCode` | String | mould编码 | ⬜ | |
| `mouldName` | String | mould名称 | ⬜ | |
| `mouldCategory` | MouldCategory | mould品类 | ⬜ | |
| `mouldPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `sapTaxRate` | BigDecimal | SAP税率 | ⬜ | |
| `maxPeakCapacity` | Integer | maxpeakcapacity | ⬜ | |
| `mouldLifeMonths` | Integer | mouldlifemonths | ⬜ | |
| `mouldCavityCount` | Integer | mouldCavity数量 | ⬜ | |
| `mouldCount` | Integer | mould数量 | ⬜ | |
| `mouldPaymentType` | PricePaymentType | mould支付类型 | ⬜ | |
| `totalMouldApportionPriceAmount` | BigDecimal | 总金额 | ⬜ | |
| `mouldApportionRatio` | BigDecimal | mould分摊持续时间 | ⬜ | |
| `apportionYears` | Integer | 分摊years | ⬜ | |
| `apportionVehicleCount` | Integer | 分摊数量 | ⬜ | |
| `apportionMaterialCount` | Integer | 物料数量 | ⬜ | |
| `mouldApportionPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `installmentCount` | Integer | 英文数量 | ⬜ | |
| `installmentAmount` | BigDecimal | 英文金额 | ⬜ | |
| `installmentRatio` | BigDecimal | 持续时间 | ⬜ | |
| `mouldPriceInfo` | MouldPriceInfo | mould价格信息 | ⬜ | |
| `mouldInfo` | MouldInfo | mould信息 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `sapUsed` | Boolean | SAPused | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `withTaxMouldPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `designCostAmount` | BigDecimal | 签署金额 | ⬜ | |
| `purchasePartCostAmount` | BigDecimal | 采购金额 | ⬜ | |
| `rawMaterialCostAmount` | BigDecimal | 物料金额 | ⬜ | |
| `manufactureCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `otherCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `profitAmount` | BigDecimal | 采购申请金额 | ⬜ | |
| `leadTimeMonthCount` | BigDecimal | 时间数量 | ⬜ | |
| `maxPerMonthCapacity` | BigDecimal | max百分比monthcapacity | ⬜ | |
| `mouldCount` | BigDecimal | mould数量 | ⬜ | |
| `mouldLength` | BigDecimal | mould | ⬜ | |
| `mouldWidth` | BigDecimal | mouldID | ⬜ | |
| `mouldHeight` | BigDecimal | mouldheight | ⬜ | |
| `mouldWeight` | BigDecimal | mouldweight | ⬜ | |
| `priMouldPriceRepository` | PriMouldPriceRepository | 价格mould价格仓储 | ⬜ | |

---

### 190. PriPaymentTypeEntity

**标准化名称**: `pripaymenttype`

**层级**: L2-Supporting

**推理中文含义**: 类型

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriPaymentTypeEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `cash` | BigDecimal | cash | ⬜ | |
| `acceptanceBill` | BigDecimal | CEbill | ⬜ | |
| `other` | BigDecimal | other | ⬜ | |
| `acceptanceBillPaymentPeriod` | BigDecimal | CEbill支付周期 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `otherZhRemark` | String | other中文备注 | ⬜ | |
| `otherEnRemark` | String | other备注 | ⬜ | |

---

### 191. PriPriceContractAssociationEntity

**标准化名称**: `pripricecontractassociation`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriPriceContractAssociationEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `gpsPriceConfirmNo` | String | GPS价格确认编号 | ⬜ | |
| `gpsContractNo` | String | GPS合同编号 | ⬜ | |
| `relationType` | PriceContractAssociationRelationType | 关系类型 | ⬜ | |
| `contractType` | ContractTypeEnum | 合同类型 | ⬜ | |
| `contractStatus` | ContractStatusEnum | 合同状态 | ⬜ | |
| `tradeType` | String | 贸易类型 | ⬜ | |
| `paymentPeriod` | String | 支付周期 | ⬜ | |
| `paymentType` | PriPaymentTypeEntity | 支付类型 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |

---

### 192. PriRdPriceEntity

**标准化名称**: `prirdprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriRdPriceEntity.java`

**关系统计**:

- 总关系数: 30
- 出向关系: 17
- 入向关系: 13

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 1
- `queries_get`: 2
- `queries_other`: 4
- `queries_queryBy`: 9

**入向关系类型**:

- `involves_create`: 1
- `involves_other`: 4
- `involves_update`: 2
- `queries_get`: 2
- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `priceSource` | PriceSource | 价格来源 | ⬜ | |
| `priceSourceNo` | String | 价格编号 | ⬜ | |
| `priceType` | PriceType | 价格类型 | ⬜ | |
| `rdCode` | String | 订单编码 | ⬜ | |
| `rdName` | String | 订单名称 | ⬜ | |
| `rdPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `sapTaxRate` | BigDecimal | SAP税率 | ⬜ | |
| `rdPaymentType` | PricePaymentType | 订单支付类型 | ⬜ | |
| `totalRdApportionPriceAmount` | BigDecimal | 总金额 | ⬜ | |
| `rdApportionRatio` | BigDecimal | 订单分摊持续时间 | ⬜ | |
| `rdApportionYears` | Integer | 订单分摊years | ⬜ | |
| `apportionVehicleCount` | Integer | 分摊数量 | ⬜ | |
| `apportionMaterialCount` | Integer | 物料数量 | ⬜ | |
| `rdApportionPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `installmentCount` | Integer | 英文数量 | ⬜ | |
| `installmentAmount` | BigDecimal | 英文金额 | ⬜ | |
| `installmentRatio` | BigDecimal | 持续时间 | ⬜ | |
| `rdPriceInfo` | RdPriceInfo | 订单价格信息 | ⬜ | |
| `rdInfo` | RdInfo | 订单信息 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `sapUsed` | Boolean | SAPused | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `laborCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `softToolCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `experimentCostAmount` | BigDecimal | 英文金额 | ⬜ | |
| `sampleCostAmount` | BigDecimal | 成本金额 | ⬜ | |
| `authenticationCostAmount` | BigDecimal | 英文金额 | ⬜ | |
| `priRdPriceRepository` | PriRdPriceRepository | 价格订单价格仓储 | ⬜ | |

---

### 193. PriSamplePriceEntity

**标准化名称**: `prisampleprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.price.flow`

**文件路径**: `com/nio/srm/gps/price/domain/price/flow/PriSamplePriceEntity.java`

**关系统计**:

- 总关系数: 16
- 出向关系: 7
- 入向关系: 9

**出向关系类型**:

- `involves_create`: 4
- `involves_other`: 1
- `queries_queryBy`: 2

**入向关系类型**:

- `involves_create`: 4
- `involves_other`: 5

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `gpsPriceConfirmNo` | String | GPS价格确认编号 | ⬜ | |
| `sampleType` | PriPriceSampleType | sample类型 | ⬜ | |
| `sampleRatio` | BigDecimal | sample持续时间 | ⬜ | |
| `sampleAmount` | BigDecimal | sample金额 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 194. ProjectAttachmentEntity

**标准化名称**: `projectattachment`

**层级**: L2-Supporting

**推理中文含义**: 附件

**当前描述**: 乐观锁版本号

**包路径**: `com.nio.srm.gps.project.domain.vehicle`

**文件路径**: `com/nio/srm/gps/project/domain/vehicle/ProjectAttachmentEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 1
- 入向关系: 3

**出向关系类型**:

- `queries_other`: 1

**入向关系类型**:

- `involves_create`: 2
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `isDeleted` | Boolean | 是否删除 | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `bizSourceId` | String | 来源ID | ⬜ | |
| `fileName` | String | 文件名称 | ⬜ | |
| `storageKey` | String | 存储key | ⬜ | |
| `fileMd5` | String | 文件MD5 | ⬜ | |
| `byteSize` | Long | 通过size | ⬜ | |
| `projectAttachmentRepository` | IProjectAttachmentRepository | 项目附件仓储 | ⬜ | |

---

### 195. ProjectCrossInfoEntity

**标准化名称**: `projectcrossinfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: @author feihuang.huang

**包路径**: `com.nio.srm.gps.project.domain.vehicle`

**文件路径**: `com/nio/srm/gps/project/domain/vehicle/ProjectCrossInfoEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 1
- 入向关系: 1

**出向关系类型**:

- `involves_query`: 1

**入向关系类型**:

- `involves_query`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `gpsProjectId` | Long | GPSID | ⬜ | |
| `viewCode` | String | view编码 | ⬜ | |
| `psUpdateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `injector` | CrossInfoInjector | 注入器 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `isDeleted` | Boolean | 是否删除 | ⬜ | |

---

### 196. ProjectCrossInfoDetailEntity

**标准化名称**: `projectcrossinfodetail`

**层级**: L2-Supporting

**推理中文含义**: 明细

**当前描述**: @author feihuang.huang

**包路径**: `com.nio.srm.gps.project.domain.vehicle`

**文件路径**: `com/nio/srm/gps/project/domain/vehicle/ProjectCrossInfoDetailEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 1
- 入向关系: 3

**出向关系类型**:

- `involves_query`: 1

**入向关系类型**:

- `involves_other`: 2
- `involves_query`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `crossInfoId` | Long | 信息ID | ⬜ | |
| `laneType` | PsCrossInfolaneTypeEnum | lane类型 | ⬜ | |
| `injector` | CrossInfoInjector | 注入器 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `isDeleted` | Boolean | 是否删除 | ⬜ | |

---

### 197. ProjectEstimateEntity

**标准化名称**: `projectestimate`

**层级**: L2-Supporting

**推理中文含义**: 项目

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.project.domain.estimate`

**文件路径**: `com/nio/srm/gps/project/domain/estimate/ProjectEstimateEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |

---

### 198. ProjectEstimateItemEntity

**标准化名称**: `projectestimateitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.project.domain.estimate`

**文件路径**: `com/nio/srm/gps/project/domain/estimate/ProjectEstimateItemEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| (无属性) | - | - | - | - |

---

### 199. ProjectEstimateTaskEntity

**标准化名称**: `projectestimatetask`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.project.domain.estimate`

**文件路径**: `com/nio/srm/gps/project/domain/estimate/ProjectEstimateTaskEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 1
- 入向关系: 1

**出向关系类型**:

- `queries_other`: 1

**入向关系类型**:

- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |

---

### 200. ProjectEstimateTemplateEntity

**标准化名称**: `projectestimatetemplate`

**层级**: L2-Supporting

**推理中文含义**: 模板

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.project.domain.estimate`

**文件路径**: `com/nio/srm/gps/project/domain/estimate/ProjectEstimateTemplateEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `createdBy` | String | 创建人 | ⬜ | |
| `updatedBy` | String | 更新人 | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |

---

### 201. PurchaseContractItemEntity

**标准化名称**: `purchasecontractitem`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: @author d.heng

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/PurchaseContractItemEntity.java`

**关系统计**:

- 总关系数: 24
- 出向关系: 2
- 入向关系: 22

**出向关系类型**:

- `involves_create`: 1
- `involves_validate`: 1

**入向关系类型**:

- `involves_create`: 11
- `involves_other`: 4
- `involves_update`: 3
- `involves_validate`: 3
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `contractId` | Long | 合同ID | ⬜ | |
| `sapContractNo` | String | 合同编号 | ⬜ | |
| `sapContractCode` | String | 合同编码 | ⬜ | |
| `sapContractNoSource` | SapContractNoSource | SAP合同编号来源 | ⬜ | |
| `lineNo` | Integer | 行编号 | ⬜ | |
| `sapMaterialGroupNo` | String | 物料编号 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialDesc` | ContractLocaleString | 物料描述 | ⬜ | |
| `materialPartNumber` | String | 物料部分编号 | ⬜ | |
| `materialRevision` | String | 物料是 | ⬜ | |
| `materialColorCode` | String | 物料编码 | ⬜ | |
| `count` | BigDecimal | 数量 | ⬜ | |
| `materialUnit` | String | 物料单位 | ⬜ | |
| `materialUnitAmount` | BigDecimal | 物料金额 | ⬜ | |
| `priceUnit` | Long | 价格单位 | ⬜ | |
| `netAmount` | BigDecimal | 净金额 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `taxRate` | BigDecimal | 税比率 | ⬜ | |
| `taxAmount` | BigDecimal | 税金额 | ⬜ | |
| `totalWithTaxAmount` | BigDecimal | 总金额 | ⬜ | |
| `arrivalDate` | LocalDate | 到达日期 | ⬜ | |
| `prSubjectType` | String | 采购申请科目类型 | ⬜ | |
| `prOrderType` | String | 采购申请订单类型 | ⬜ | |
| `prBudgetCode` | String | 预算编码 | ⬜ | |
| `sapPrNo` | String | SAP编号 | ⬜ | |
| `gpsPrNo` | String | GPS采购申请编号 | ⬜ | |
| `gpsPrLineNo` | Integer | 行编号 | ⬜ | |
| `imported` | Boolean | 采购订单 | ⬜ | |
| `hasConsignment` | HasConsignmentEnum | 是否有签署 | ⬜ | |
| `available` | Boolean | available | ⬜ | |
| `extInfo` | ExtInfo | 扩展信息 | ⬜ | |
| `materialDescZh` | String | 物料中文 | ⬜ | |
| `materialDescEn` | String | 物料英文 | ⬜ | |
| `openItem` | Boolean | 开放项 | ⬜ | |

---

### 202. PurchaseContractItemAmountEntity

**标准化名称**: `purchasecontractitemamount`

**层级**: L2-Supporting

**推理中文含义**: 金额

**当前描述**: @author danny.shi

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/PurchaseContractItemAmountEntity.java`

**关系统计**:

- 总关系数: 8
- 出向关系: 7
- 入向关系: 1

**出向关系类型**:

- `involves_create`: 3
- `involves_delete`: 1
- `involves_other`: 3

**入向关系类型**:

- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `purchaseContractItemId` | Long | 采购ID | ⬜ | |
| `gpsPriceConfirmNo` | String | GPS价格确认编号 | ⬜ | |
| `effectDate` | LocalDate | 生效日期 | ⬜ | |
| `expireDate` | LocalDate | 过期日期 | ⬜ | |
| `withoutLogisticSummaryPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `withApportionSummaryPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `summaryPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `materialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `logisticPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `mouldPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `rdPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `virtual` | Boolean | virtual | ⬜ | |
| `available` | Boolean | available | ⬜ | |
| `extInfo` | ExtInfo | 扩展信息 | ⬜ | |

---

### 203. PurchaseContractPartEntity

**标准化名称**: `purchasecontractpart`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: @author d.heng

**包路径**: `com.nio.srm.gps.contract.domain.entity`

**文件路径**: `com/nio/srm/gps/contract/domain/entity/PurchaseContractPartEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 1
- 入向关系: 3

**出向关系类型**:

- `involves_update`: 1

**入向关系类型**:

- `involves_update`: 1
- `involves_validate`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `contractId` | Long | 合同ID | ⬜ | |
| `deliveryLocation` | String | 交付location | ⬜ | |
| `deliveryDesc` | String | 交付描述 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `totalTaxAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalWithTaxAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalNetAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalDomesticTaxAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalDomesticWithTaxAmount` | BigDecimal | 总金额 | ⬜ | |
| `totalDomesticNetAmount` | BigDecimal | 总金额 | ⬜ | |
| `tradeType` | String | 贸易类型 | ⬜ | |
| `sapPaymentTermsCode` | String | 英文编码 | ⬜ | |
| `framework` | Boolean | 框架 | ⬜ | |
| `settleCompanyCode` | String | 公司编码 | ⬜ | |
| `sapContractNo` | String | 合同编号 | ⬜ | |
| `sapContractCode` | String | 合同编码 | ⬜ | |
| `sapContractNoSource` | SapContractNoSource | SAP合同编号来源 | ⬜ | |
| `purchaseOrderNo` | String | 订单编号 | ⬜ | |
| `prDemandName` | String | 需求名称 | ⬜ | |
| `prDemandAccount` | String | 需求数量 | ⬜ | |
| `prDemandDeptCode` | String | 需求编码 | ⬜ | |
| `prDemandDeptName` | ContractLocaleString | 需求名称 | ⬜ | |
| `prDemandCompanyCode` | String | 需求编码 | ⬜ | |
| `prDemandCompanyName` | ContractLocaleString | 需求名称 | ⬜ | |
| `prDemandCostCenterCode` | String | 需求编码 | ⬜ | |
| `aobTermPercentage` | BigDecimal | aobterm百分比 | ⬜ | |
| `cashTermPercentage` | BigDecimal | cashterm百分比 | ⬜ | |
| `otherTermPercentage` | BigDecimal | otherterm百分比 | ⬜ | |
| `otherTermRemark` | ContractLocaleString | otherterm备注 | ⬜ | |
| `otherTermRemarkEn` | String | 备注英文 | ⬜ | |
| `paymentDueDays` | Integer | 支付duedays | ⬜ | |
| `standardPayment` | Boolean | 标准支付 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryId` | Long | GPS品类ID | ⬜ | |
| `gpsCategoryName` | ContractLocaleString | GPS品类名称 | ⬜ | |
| `purchaseOrganizationCode` | String | 采购编码 | ⬜ | |
| `extInfo` | ExtInfo | 扩展信息 | ⬜ | |
| `otherTermRemarkZh` | String | 备注中文 | ⬜ | |
| `sapPurchaseGroupNo` | String | 采购编号 | ⬜ | |

---

### 204. PurchaseOrderDetailEntity

**标准化名称**: `purchaseorderdetail`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.order.domain.purchaseorder`

**文件路径**: `com/nio/srm/gps/order/domain/purchaseorder/PurchaseOrderDetailEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 0
- 入向关系: 2

**入向关系类型**:

- `queries_select`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `purchaseOrderId` | Long | 订单ID | ⬜ | |
| `lineNo` | Integer | 行编号 | ⬜ | |
| `gpsPrNo` | String | GPS采购申请编号 | ⬜ | |
| `prLineNo` | Integer | 行编号 | ⬜ | |
| `contractLineNo` | Integer | 合同编号 | ⬜ | |
| `budgetCode` | String | 预算编码 | ⬜ | |
| `costCenterCode` | String | 成本中心编码 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialDescZh` | String | 物料中文 | ⬜ | |
| `materialDescEn` | String | 物料英文 | ⬜ | |
| `subjectType` | SubjectTypeEnum | 科目类型 | ⬜ | |
| `purchaseCount` | BigDecimal | 采购数量 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `taxRate` | BigDecimal | 税比率 | ⬜ | |
| `taxAmount` | BigDecimal | 税金额 | ⬜ | |
| `measureUnit` | String | 计量单位 | ⬜ | |
| `priceUnit` | BigDecimal | 价格单位 | ⬜ | |
| `purchaseNetPriceAmount` | BigDecimal | 采购净价金额 | ⬜ | |
| `purchaseTotalNetPriceAmount` | BigDecimal | 采购净价金额总计 | ⬜ | |
| `purchaseTotalIncludeTaxAmount` | BigDecimal | 采购含税金额总计 | ⬜ | |
| `receiptedCount` | BigDecimal | 已收货数量 | ⬜ | |
| `receiptedAmount` | BigDecimal | 已收货金额 | ⬜ | |
| `expectedArrivalDate` | LocalDateTime | 预期到货日期 | ⬜ | |
| `status` | POItemStatusEnum | 状态 | ⬜ | |
| `receiptStatus` | POItemReceiptStatusEnum | 收货状态 | ⬜ | |
| `globalAccountSubject` | String | 全球账号科目 | ⬜ | |
| `assetClass` | String | 资产类别 | ⬜ | |
| `assetNumber` | String | 资产编号 | ⬜ | |
| `subAssetNumber` | String | 科目资产编号 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `syncSap` | Boolean | 同步SAP | ⬜ | |
| `purchaseOrderNo` | String | 订单编号 | ⬜ | |
| `orderType` | String | 订单类型 | ⬜ | |
| `refundOrder` | Boolean | 退款订单 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `factoryName` | String | 工厂名称 | ⬜ | |

---

### 205. PurchaseOrderDetailInfoEntity

**标准化名称**: `purchaseorderdetailinfo`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/PurchaseOrderDetailInfoEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `purchaseOrderDetailId` | Long | 订单ID | ⬜ | |
| `purchaseOrderId` | Long | 订单ID | ⬜ | |
| `purchaseOrderNo` | String | 订单编号 | ⬜ | |
| `entityType` | String | 类型 | ⬜ | |
| `entityValue` | String | value | ⬜ | |

---

### 206. PurchaseOrderDetailStatusLifecycleEntity

**标准化名称**: `purchaseorderdetailstatuslifecycle`

**层级**: L2-Supporting

**推理中文含义**: 状态

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/PurchaseOrderDetailStatusLifecycleEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `purchaseOrderId` | Long | 订单ID | ⬜ | |
| `purchaseOrderNo` | String | 订单编号 | ⬜ | |
| `purchaseOrderDetailId` | Long | 订单ID | ⬜ | |
| `statusKey` | String | 状态key | ⬜ | |
| `statusValue` | String | 状态value | ⬜ | |

---

### 207. PurchaseOrderInfoEntity

**标准化名称**: `purchaseorderinfo`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/PurchaseOrderInfoEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `purchaseOrderId` | Long | 订单ID | ⬜ | |
| `purchaseOrderNo` | String | 订单编号 | ⬜ | |
| `entityType` | String | 类型 | ⬜ | |
| `entityValue` | String | value | ⬜ | |

---

### 208. PurchaseOrderSignatureEntity

**标准化名称**: `purchaseordersignature`

**层级**: L2-Supporting

**推理中文含义**: 订单

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/PurchaseOrderSignatureEntity.java`

**关系统计**:

- 总关系数: 12
- 出向关系: 2
- 入向关系: 10

**出向关系类型**:

- `involves_other`: 2

**入向关系类型**:

- `involves_other`: 3
- `involves_update`: 1
- `queries_other`: 6

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `gpsContractNo` | String | GPS合同编号 | ⬜ | |
| `gpsContractVersion` | String | GPS合同版本 | ⬜ | |
| `gpsContractSignatureNo` | String | 合同编号 | ⬜ | |
| `purchaseOrderNo` | String | 订单编号 | ⬜ | |
| `purchaseOrderId` | Long | 订单ID | ⬜ | |
| `sapOrderNo` | String | 订单编号 | ⬜ | |
| `signatureType` | SignatureTypeEnum | 签署类型 | ⬜ | |
| `signatureStatus` | String | 签署状态 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `signatureLang` | String | 签署lang | ⬜ | |
| `legalAccount` | String | 法务数量 | ⬜ | |
| `standardContract` | Boolean | 标准合同 | ⬜ | |
| `nioSealType` | NIOSealTypeEnum | nio印章类型 | ⬜ | |
| `sealType` | SealTypeEnum | 印章类型 | ⬜ | |
| `orderContractSignStatus` | String | 订单合同签署状态 | ⬜ | |
| `orderSignatureBizType` | OrderSignatureBizTypeEnum | 订单签署业务类型 | ⬜ | |
| `orderSignatureBizSourceId` | Long | 订单ID | ⬜ | |
| `contractTemplateCode` | String | 合同编码 | ⬜ | |
| `expectSignatureDate` | LocalDateTime | 签署日期 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `fileId` | Long | 文件ID | ⬜ | |

---

### 209. PurchaseOrderStatusLifecycleEntity

**标准化名称**: `purchaseorderstatuslifecycle`

**层级**: L2-Supporting

**推理中文含义**: 状态

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.order.domain.general.entity`

**文件路径**: `com/nio/srm/gps/order/domain/general/entity/PurchaseOrderStatusLifecycleEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `purchaseOrderId` | Long | 订单ID | ⬜ | |
| `purchaseOrderNo` | String | 订单编号 | ⬜ | |
| `statusKey` | String | 状态key | ⬜ | |
| `statusValue` | String | 状态value | ⬜ | |

---

### 210. PurchaseRequestBuyerEntity

**标准化名称**: `purchaserequestbuyer`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: 申请单id

**包路径**: `com.nio.srm.gps.pr.domain.purchaserequest.entity`

**文件路径**: `com/nio/srm/gps/pr/domain/purchaserequest/entity/PurchaseRequestBuyerEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 2
- 入向关系: 2

**出向关系类型**:

- `involves_validate`: 2

**入向关系类型**:

- `involves_validate`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `purchaseRequestId` | String | 采购ID | ⬜ | |
| `purchaseRequestDetailId` | Long | 采购ID | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |

---

### 211. PurchaseRequestDetailEntity

**标准化名称**: `purchaserequestdetail`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.pr.domain.purchaserequest.entity`

**文件路径**: `com/nio/srm/gps/pr/domain/purchaserequest/entity/PurchaseRequestDetailEntity.java`

**关系统计**:

- 总关系数: 18
- 出向关系: 7
- 入向关系: 11

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 4
- `involves_update`: 1
- `involves_validate`: 1

**入向关系类型**:

- `involves_create`: 1
- `involves_other`: 3
- `involves_update`: 1
- `queries_other`: 6

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `purchaseRequestId` | Long | 采购ID | ⬜ | |
| `status` | ItemStatusEnum | 状态 | ⬜ | |
| `lineNo` | Integer | 行编号 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `factoryName` | String | 工厂名称 | ⬜ | |
| `sapPurchaseOrg` | String | SAP采购org | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialDescZh` | String | 物料中文 | ⬜ | |
| `materialDescEn` | String | 物料英文 | ⬜ | |
| `description` | String | 描述 | ⬜ | |
| `budgetCode` | String | 预算编码 | ⬜ | |
| `wbsCompanyCode` | String | 公司编码 | ⬜ | |
| `wbsCostCenterCode` | String | 英文编码 | ⬜ | |
| `quantity` | BigDecimal | quantity | ⬜ | |
| `measureUnit` | String | 计量单位 | ⬜ | |
| `netPriceAmount` | BigDecimal | 净金额 | ⬜ | |
| `priceUnit` | BigDecimal | 价格单位 | ⬜ | |
| `totalNetAmount` | BigDecimal | 总金额 | ⬜ | |
| `usedCount` | BigDecimal | used数量 | ⬜ | |
| `usedAmount` | BigDecimal | used金额 | ⬜ | |
| `freezeCount` | BigDecimal | freeze数量 | ⬜ | |
| `freezeAmount` | BigDecimal | freeze金额 | ⬜ | |
| `arrivalDate` | LocalDateTime | 到达日期 | ⬜ | |
| `globalAccountSubject` | String | 全球账号科目 | ⬜ | |
| `assetClass` | String | 资产类别 | ⬜ | |
| `assetNumber` | String | 资产编号 | ⬜ | |
| `subAssetNumber` | String | 科目资产编号 | ⬜ | |
| `priceEntity` | PurchaseRequestDetailPriceEntity | 价格 | ⬜ | |
| `purchaseRequestNo` | String | 采购编号 | ⬜ | |
| `sapApplyNo` | String | 申请编号 | ⬜ | |
| `syncSap` | Boolean | 同步SAP | ⬜ | |
| `cancelSap` | Boolean | 取消SAP | ⬜ | |
| `availableCount` | BigDecimal | available数量 | ⬜ | |
| `availableAmount` | BigDecimal | available金额 | ⬜ | |

---

### 212. PurchaseRequestDetailPriceEntity

**标准化名称**: `purchaserequestdetailprice`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.pr.domain.purchaserequest.entity`

**文件路径**: `com/nio/srm/gps/pr/domain/purchaserequest/entity/PurchaseRequestDetailPriceEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 0
- 入向关系: 4

**入向关系类型**:

- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `detailId` | Long | 明细ID | ⬜ | |
| `effectDate` | LocalDate | 生效日期 | ⬜ | |
| `expireDate` | LocalDate | 过期日期 | ⬜ | |
| `taxRate` | BigDecimal | 税比率 | ⬜ | |

---

### 213. PurchaseRequestVendorEntity

**标准化名称**: `purchaserequestvendor`

**层级**: L2-Supporting

**推理中文含义**: 采购

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.pr.domain.purchaserequest.entity`

**文件路径**: `com/nio/srm/gps/pr/domain/purchaserequest/entity/PurchaseRequestVendorEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `purchaseRequestId` | Long | 采购ID | ⬜ | |
| `nioComany` | String | niocomany | ⬜ | |
| `countryRegion` | String | 账号region | ⬜ | |
| `language` | String | language | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `newRegister` | Boolean | new是 | ⬜ | |
| `creditCode` | String | credit编码 | ⬜ | |
| `dunsCode` | String | duns编码 | ⬜ | |
| `email` | String | 邮箱 | ⬜ | |
| `contact` | String | TA | ⬜ | |
| `commitRfq` | Boolean | commit询价 | ⬜ | |
| `recommendReason` | String | reason | ⬜ | |
| `additionalComment` | String | additional备注 | ⬜ | |
| `phone` | String | 电话 | ⬜ | |
| `eventPublisher` | DomainEventPublisher | 发布者 | ⬜ | |

---

### 214. QualificationFileInfoEntity

**标准化名称**: `qualificationfileinfo`

**层级**: L2-Supporting

**推理中文含义**: 文件

**当前描述**: @author reno.zeng

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/QualificationFileInfoEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `sourceId` | Long | 来源ID | ⬜ | |
| `classifyName` | String | 类别名称 | ⬜ | |
| `subClassifyName` | String | 类别名称 | ⬜ | |
| `sort` | String | SOR | ⬜ | |
| `parentId` | Long | 英文ID | ⬜ | |
| `isRequired` | Boolean | 是否Required | ⬜ | |
| `isForever` | Boolean | 是否Forever | ⬜ | |
| `foreverSetup` | Boolean | forever设置 | ⬜ | |
| `effectDate` | LocalDate | 生效日期 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireDate` | LocalDate | 过期日期 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `uploadTime` | LocalDateTime | 已上传时间 | ⬜ | |
| `uploadBy` | String | 已上传通过 | ⬜ | |
| `fileVersion` | Integer | 文件版本 | ⬜ | |
| `englishTemplateId` | String | 英文ID | ⬜ | |
| `englishTemplateUuid` | String | 英文ID | ⬜ | |
| `englishTemplateName` | String | 英文名称 | ⬜ | |
| `chineseTemplateId` | String | 模板ID | ⬜ | |
| `chineseTemplateUuid` | String | 模板ID | ⬜ | |
| `chineseTemplateName` | String | 模板名称 | ⬜ | |
| `chEgTemplateId` | String | 模板ID | ⬜ | |
| `chEgTemplateUuid` | String | 模板ID | ⬜ | |
| `chEgTemplateName` | String | 模板名称 | ⬜ | |
| `englishTemplateFile` | EnglishTemplateFile | 模板文件 | ⬜ | |
| `chineseTemplateFile` | ChineseTemplateFile | chinese模板文件 | ⬜ | |
| `chEgTemplateFile` | ChEgTemplateFile | 采购品类模板文件 | ⬜ | |

---

### 215. QuoteNodeEntity

**标准化名称**: `quotenode`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: 逻辑删除字段

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/QuoteNodeEntity.java`

**关系统计**:

- 总关系数: 7
- 出向关系: 4
- 入向关系: 3

**出向关系类型**:

- `involves_create`: 2
- `queries_other`: 2

**入向关系类型**:

- `involves_create`: 1
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `nodeType` | QuoteNodeType | 节点类型 | ⬜ | |
| `nodeSubType` | String | 节点科目类型 | ⬜ | |
| `nodeDesc` | String | 节点描述 | ⬜ | |
| `dealTime` | LocalDateTime | deal时间 | ⬜ | |
| `nodeStatus` | QuoteNodeStatus | 节点状态 | ⬜ | |
| `currentStatusDesc` | String | 状态描述 | ⬜ | |
| `linkUrl` | String | linkURL | ⬜ | |
| `urlParams` | String | URLparams | ⬜ | |
| `quoteNodeRepository` | IQuoteNodeRepository | 报价节点仓储 | ⬜ | |

---

### 216. QuotePlanEntity

**标准化名称**: `quoteplan`

**层级**: L2-Supporting

**推理中文含义**: 报价

**当前描述**: 寻报价单号

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/QuotePlanEntity.java`

**关系统计**:

- 总关系数: 13
- 出向关系: 6
- 入向关系: 7

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 3
- `queries_other`: 2

**入向关系类型**:

- `involves_create`: 2
- `involves_other`: 3
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `planType` | QuotePlanType | 计划类型 | ⬜ | |
| `estimatedTime` | LocalDateTime | 估算时间 | ⬜ | |
| `completeTime` | LocalDateTime | complete时间 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |

---

### 217. QuoteTemplateEntity

**标准化名称**: `quotetemplate`

**层级**: L2-Supporting

**推理中文含义**: 报价

**当前描述**: @Desc

**包路径**: `com.nio.srm.gps.sourcing.domain.quotetemplate`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quotetemplate/QuoteTemplateEntity.java`

**关系统计**:

- 总关系数: 6
- 出向关系: 6
- 入向关系: 0

**出向关系类型**:

- `involves_create`: 1
- `involves_update`: 2
- `involves_validate`: 1
- `queries_select`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `templateCode` | String | 模板编码 | ⬜ | |
| `templateName` | String | 模板名称 | ⬜ | |
| `templateType` | String | 模板类型 | ⬜ | |
| `contractType` | String | 合同类型 | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `isLegacy` | Integer | 是否Legacy | ⬜ | |
| `quoteTemplateRepository` | QuoteTemplateRepository | 报价模板仓储 | ⬜ | |
| `categoryFacade` | CategoryFacade | 品类门面 | ⬜ | |
| `quoteTemplateConverter` | QuoteTemplateConverter | 报价模板转换器 | ⬜ | |
| `quoteTemplateItemConverter` | QuoteTemplateItemConverter | 报价模板项转换器 | ⬜ | |
| `redissonClient` | RedissonClient | 是 | ⬜ | |
| `lockLeaseTime` | int | lockLease时间 | ⬜ | |

---

### 218. RawMaterialAdjustEntity

**标准化名称**: `rawmaterialadjust`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: @author joe.jiang

**包路径**: `com.nio.srm.gps.price.domain.rawmaterial`

**文件路径**: `com/nio/srm/gps/price/domain/rawmaterial/RawMaterialAdjustEntity.java`

**关系统计**:

- 总关系数: 12
- 出向关系: 9
- 入向关系: 3

**出向关系类型**:

- `involves_create`: 2
- `involves_delete`: 1
- `involves_other`: 1
- `involves_validate`: 1
- `queries_other`: 4

**入向关系类型**:

- `queries_other`: 3

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `adjustSyncDwNo` | String | 同步编号 | ⬜ | |
| `syncVO` | AdjustSyncVO | 同步凭证 | ⬜ | |
| `confirmed` | Boolean | confirmed | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialZhName` | String | 物料名称 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `supplyStatus` | String | supply状态 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `gpsVendorName` | String | 供应商名称 | ⬜ | |
| `adjustYear` | Integer | adjustyear | ⬜ | |
| `adjustRate` | String | adjust率 | ⬜ | |
| `adjustAmount` | BigDecimal | adjust金额 | ⬜ | |
| `rawMaterialGrade` | String | raw物料收货单 | ⬜ | |
| `rawMaterialWeight` | BigDecimal | raw物料weight | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `currentYearBaseAmount` | BigDecimal | 英文金额 | ⬜ | |
| `lastYearBaseAmount` | BigDecimal | lastYearBase金额 | ⬜ | |
| `dwSyncInfo` | String | dw同步信息 | ⬜ | |
| `adjustStatus` | RawMaterialAdjustStatus | adjust状态 | ⬜ | |
| `sourceGpsPriceConfirmNo` | String | 价格编号 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `brand` | BrandEnum | 品牌 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `supplyStatus` | MaterialSupplyStatusEnum | supply状态 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `adjustAmount` | BigDecimal | adjust金额 | ⬜ | |
| `rawMaterialGrade` | String | raw物料收货单 | ⬜ | |
| `rawMaterialWeight` | BigDecimal | raw物料weight | ⬜ | |
| `adjustReason` | String | adjustreason | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `materialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `originalEffectTime` | LocalDateTime | 原始时间 | ⬜ | |
| `originalExpireTime` | LocalDateTime | 原始时间 | ⬜ | |
| `originalMaterialPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `gpsApplyNo` | String | GPS申请编号 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `extInfo` | ExtInfo | 扩展信息 | ⬜ | |
| `completeTip` | String | completeIP | ⬜ | |
| `rawMaterialGrade` | String | raw物料收货单 | ⬜ | |
| `originalEffectTime` | LocalDateTime | 原始时间 | ⬜ | |
| `originalExpireTime` | LocalDateTime | 原始时间 | ⬜ | |

---

### 219. RelatedMaterialEntity

**标准化名称**: `relatedmaterial`

**层级**: L2-Supporting

**推理中文含义**: 物料

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.material.domain.material.rebuild`

**文件路径**: `com/nio/srm/gps/material/domain/material/rebuild/RelatedMaterialEntity.java`

**关系统计**:

- 总关系数: 12
- 出向关系: 6
- 入向关系: 6

**出向关系类型**:

- `queries_other`: 6

**入向关系类型**:

- `queries_other`: 6

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `relatedMaterialCode` | String | 物料编码 | ⬜ | |
| `relatedMaterialZhName` | String | 物料名称 | ⬜ | |
| `relatedMaterialEnName` | String | 物料名称 | ⬜ | |
| `relatedMaterialType` | String | 相关物料类型 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `clmCategoryFirstLevelCode` | String | 品类编码 | ⬜ | |
| `clmCategorySecondLevelCode` | String | 品类编码 | ⬜ | |
| `clmCategoryThirdLevelCode` | String | 品类编码 | ⬜ | |
| `clmCategoryFirstLevelName` | String | 品类名称 | ⬜ | |
| `clmCategorySecondLevelName` | String | 品类名称 | ⬜ | |
| `clmCategoryThirdLevelName` | String | 品类名称 | ⬜ | |
| `projectNameCn` | String | 项目名称cn | ⬜ | |
| `projectNameEn` | String | 名称英文 | ⬜ | |

---

### 220. RequestLogEntity

**标准化名称**: `requestlog`

**层级**: L2-Supporting

**推理中文含义**: 申请

**当前描述**: 主键

**包路径**: `com.nio.srm.gps.order.domain.goodsreceipt`

**文件路径**: `com/nio/srm/gps/order/domain/goodsreceipt/RequestLogEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `bizBu` | BizBuEnum | 业务BU | ⬜ | |
| `requestId` | String | 申请ID | ⬜ | |
| `requestServiceType` | String | 申请服务类型 | ⬜ | |
| `requestEventType` | String | 申请类型 | ⬜ | |
| `bizCode` | String | 业务编码 | ⬜ | |
| `subBizCode` | String | 业务编码 | ⬜ | |
| `requestUrl` | String | 申请URL | ⬜ | |
| `requestParameters` | String | 申请parameters | ⬜ | |
| `requestResponse` | String | 申请采购订单 | ⬜ | |
| `requestStatus` | String | 申请状态 | ⬜ | |
| `errorCode` | String | error编码 | ⬜ | |
| `errorMessage` | String | error消息 | ⬜ | |
| `flowInstanceId` | String | CEID | ⬜ | |

---

### 221. RiskInfoEntity

**标准化名称**: `riskinfo`

**层级**: L2-Supporting

**推理中文含义**: 信息

**当前描述**: 合作伙伴风控实体;

**包路径**: `com.nio.srm.gps.vendor.domain.remote.risk`

**文件路径**: `com/nio/srm/gps/vendor/domain/remote/risk/RiskInfoEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 1
- 入向关系: 1

**出向关系类型**:

- `involves_other`: 1

**入向关系类型**:

- `involves_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorName` | String | 供应商名称 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `certificationType` | String | CE类型 | ⬜ | |
| `identityCardNo` | String | ID编号 | ⬜ | |
| `riskBizType` | String | 是业务类型 | ⬜ | |
| `duns` | String | duns | ⬜ | |
| `creditCode` | String | credit编码 | ⬜ | |
| `businessNo` | String | BU编号 | ⬜ | |
| `blackListFlag` | String | black列表标志 | ⬜ | |
| `caseNo` | String | case编号 | ⬜ | |
| `warningLevel` | String | warninglevel | ⬜ | |
| `auditResult` | String | 审核result | ⬜ | |
| `assessId` | String | assessID | ⬜ | |
| `content` | String | 内容 | ⬜ | |
| `type` | String | 类型 | ⬜ | |
| `riskFacade` | RiskFacade | 是门面 | ⬜ | |
| `vendorAssessDetailRepository` | VendorAssessDetailRepository | 供应商assess明细仓储 | ⬜ | |
| `request` | HttpServletRequest | 申请 | ⬜ | |
| `definedConvertingUtils` | DefinedConvertingUtils | definedconverting工具 | ⬜ | |
| `vendorAssessDetailMapper` | VendorAssessDetailMapper | 供应商assess明细映射器 | ⬜ | |
| `vendorAccessTemplateRepository` | VendorAccessTemplateRepository | 供应商访问模板仓储 | ⬜ | |
| `vendorAssessDetailEntity` | VendorAssessDetailEntity | 供应商assess明细 | ⬜ | |
| `qiXinFacade` | QiXinFacade | qixin门面 | ⬜ | |
| `us` | String | 状态 | ⬜ | |
| `yue` | String | yue | ⬜ | |
| `krw` | String | krw | ⬜ | |
| `eur` | String | eur | ⬜ | |
| `sterling` | String | sterling | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |

---

### 222. RoundApplyEntity

**标准化名称**: `roundapply`

**层级**: L2-Supporting

**推理中文含义**: 轮次

**当前描述**: @Classname LastCallApplyEntity

**包路径**: `com.nio.srm.gps.sourcing.domain.roundapply`

**文件路径**: `com/nio/srm/gps/sourcing/domain/roundapply/RoundApplyEntity.java`

**关系统计**:

- 总关系数: 34
- 出向关系: 21
- 入向关系: 13

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 4
- `involves_update`: 2
- `involves_validate`: 2
- `queries_find`: 12

**入向关系类型**:

- `involves_create`: 1
- `involves_other`: 7
- `involves_query`: 1
- `involves_update`: 1
- `involves_validate`: 1
- `queries_find`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `applyNo` | String | 申请编号 | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `categoryName` | String | 品类名称 | ⬜ | |
| `status` | RoundApplyStatus | 状态 | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `applyTime` | LocalDateTime | 申请时间 | ⬜ | |
| `roundInfo` | QuoteRoundVO | 轮次信息 | ⬜ | |
| `rfqInfo` | String | 询价信息 | ⬜ | |
| `rfqInfo` | RoundApplyRfqInfo | 询价信息 | ⬜ | |
| `lastCallEndTime` | LocalDateTime | 英文时间 | ⬜ | |
| `startLastCallReason` | String | 开始last全部reason | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `roundApplyType` | String | 轮次申请类型 | ⬜ | |
| `workflowACO` | WorkflowACO | 工作流ACO | ⬜ | |
| `errorMessage` | String | error消息 | ⬜ | |
| `roundApplyRepository` | IRoundApplyRepository | 轮次申请仓储 | ⬜ | |
| `roundApplyMapper` | RoundApplyMapper | 轮次申请映射器 | ⬜ | |

---

### 223. SaveDemandItemChangeEntity

**标准化名称**: `savedemanditemchange`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: @author quan.liang

**包路径**: `com.nio.srm.gps.demand.domain.demand.component.process`

**文件路径**: `com/nio/srm/gps/demand/domain/demand/component/process/SaveDemandItemChangeEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 1
- 入向关系: 1

**出向关系类型**:

- `involves_update`: 1

**入向关系类型**:

- `involves_update`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `demandDomainService` | DemandDomainService | 需求主服务 | ⬜ | |

---

### 224. SdMeetingEntity

**标准化名称**: `sdmeeting`

**层级**: L2-Supporting

**推理中文含义**: 会议

**当前描述**: 主键id

**包路径**: `com.nio.srm.gps.meeting.domain.meeting.sd`

**文件路径**: `com/nio/srm/gps/meeting/domain/meeting/sd/SdMeetingEntity.java`

**关系统计**:

- 总关系数: 32
- 出向关系: 14
- 入向关系: 18

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 2
- `involves_query`: 1
- `involves_validate`: 1
- `queries_other`: 9

**入向关系类型**:

- `involves_create`: 1
- `involves_other`: 7
- `involves_query`: 1
- `involves_update`: 1
- `involves_validate`: 1
- `queries_other`: 7

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `meetingName` | String | 会议名称 | ⬜ | |
| `meetingBizType` | String | 会议业务类型 | ⬜ | |
| `meetingBizTypeName` | String | 类型名称 | ⬜ | |
| `meetingLevel` | String | 会议level | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `meetingApplyNo` | String | 申请编号 | ⬜ | |
| `applyTime` | LocalDateTime | 申请时间 | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `srcBizNo` | String | 业务编号 | ⬜ | |
| `meetingConclusion` | MeetingConclusionEnum | 会议conclusion | ⬜ | |
| `meetingTime` | LocalDateTime | 会议时间 | ⬜ | |
| `meetingSummary` | String | 会议汇总 | ⬜ | |
| `attachmentFileType` | String | 附件文件类型 | ⬜ | |
| `bizInfo` | Object | 业务信息 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `invalidReason` | String | IDreason | ⬜ | |
| `meetingRecordAccount` | String | 会议数量 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `categoryName` | String | 品类名称 | ⬜ | |
| `processId` | String | 流程ID | ⬜ | |
| `auditStatus` | String | 审核状态 | ⬜ | |
| `expectMeetingDate` | LocalDate | 会议日期 | ⬜ | |
| `confirmedMeetingDate` | Boolean | 会议日期 | ⬜ | |
| `feiShuExtInfo` | String | 飞书飞书扩展信息 | ⬜ | |
| `sendMsgFLag` | Boolean | 发送msg工作流标志 | ⬜ | |
| `meetingDesc` | String | 会议描述 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |

---

### 225. SequenceEntity

**标准化名称**: `sequence`

**层级**: L2-Supporting

**推理中文含义**: 序列

**当前描述**: @author jian.he2

**包路径**: `com.nio.srm.gps.maindata.domain.sequence`

**文件路径**: `com/nio/srm/gps/maindata/domain/sequence/SequenceEntity.java`

**关系统计**:

- 总关系数: 16
- 出向关系: 10
- 入向关系: 6

**出向关系类型**:

- `involves_other`: 1
- `involves_update`: 1
- `queries_find`: 8

**入向关系类型**:

- `involves_other`: 1
- `involves_update`: 1
- `queries_find`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `sequenceId` | Long | 序列ID | ⬜ | |
| `sequenceCode` | String | 序列编码 | ⬜ | |
| `description` | String | 描述 | ⬜ | |
| `sequenceRepository` | ISequenceRepository | 序列仓储 | ⬜ | |
| `sequenceSerialFactory` | SequenceSerialFactory | 序列serial工厂 | ⬜ | |

---

### 226. SequenceRuleEntity

**标准化名称**: `sequencerule`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: @author jian.he2

**包路径**: `com.nio.srm.gps.maindata.domain.sequence`

**文件路径**: `com/nio/srm/gps/maindata/domain/sequence/SequenceRuleEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `sequenceId` | Long | 序列ID | ⬜ | |
| `configType` | SequenceRuleConfigTypeEnum | 配置类型 | ⬜ | |
| `configValue` | SequenceRuleConfigValueVO | 配置value | ⬜ | |
| `sort` | Integer | SOR | ⬜ | |

---

### 227. SequenceSerialEntity

**标准化名称**: `sequenceserial`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: @author jian.he2

**包路径**: `com.nio.srm.gps.maindata.domain.sequence`

**文件路径**: `com/nio/srm/gps/maindata/domain/sequence/SequenceSerialEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `sequenceId` | Long | 序列ID | ⬜ | |
| `bizTag` | String | 业务TA | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `value` | Long | value | ⬜ | |
| `valueMapper` | SequenceSerialMapper | value映射器 | ⬜ | |
| `sequenceSerialConverter` | SequenceSerialConverter | 序列serial转换器 | ⬜ | |

---

### 228. SerialSequenceEntity

**标准化名称**: `serialsequence`

**层级**: L2-Supporting

**推理中文含义**: 英文

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.vendor.base.domain.vendorinfo.entity`

**文件路径**: `com/nio/srm/gps/vendor/base/domain/vendorinfo/entity/SerialSequenceEntity.java`

**关系统计**:

- 总关系数: 14
- 出向关系: 7
- 入向关系: 7

**出向关系类型**:

- `involves_create`: 2
- `involves_other`: 1
- `involves_update`: 2
- `queries_other`: 2

**入向关系类型**:

- `involves_create`: 2
- `involves_other`: 1
- `involves_update`: 2
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| (无属性) | - | - | - | - |

---

### 229. SesNominationEntity

**标准化名称**: `sesnomination`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.sourcing.domain.sesnomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesnomination/SesNominationEntity.java`

**关系统计**:

- 总关系数: 29
- 出向关系: 17
- 入向关系: 12

**出向关系类型**:

- `involves_create`: 2
- `involves_move`: 2
- `involves_other`: 4
- `involves_query`: 2
- `involves_update`: 1
- `queries_find`: 1
- `queries_get`: 1
- `queries_getBy`: 3
- `queries_other`: 1

**入向关系类型**:

- `involves_create`: 2
- `involves_move`: 1
- `involves_other`: 4
- `involves_query`: 2
- `involves_update`: 1
- `queries_get`: 1
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `gpsMeetingId` | Long | GPSID | ⬜ | |
| `gpsMeetingCode` | String | GPS编码 | ⬜ | |
| `nominationRfq` | SesNominationRfq | 提名询价 | ⬜ | |
| `status` | SesNominationStatus | 状态 | ⬜ | |
| `effectFlag` | Boolean | 生效标志 | ⬜ | |
| `pcAmount` | String | pc金额 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `salesArea` | String | salesarea | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `ceTotalPrice` | BigDecimal | 总计价格 | ⬜ | |
| `workflowACO` | WorkflowACO | 工作流ACO | ⬜ | |
| `sesNominationRepository` | SesNominationRepository | ses提名仓储 | ⬜ | |

---

### 230. SesNominationRelationEntity

**标准化名称**: `sesnominationrelation`

**层级**: L2-Supporting

**推理中文含义**: 编号

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.sourcing.domain.sesnomination`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesnomination/SesNominationRelationEntity.java`

**关系统计**:

- 总关系数: 11
- 出向关系: 6
- 入向关系: 5

**出向关系类型**:

- `involves_other`: 1
- `queries_get`: 4
- `queries_getBy`: 1

**入向关系类型**:

- `involves_other`: 1
- `queries_get`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `gpsMeetingId` | Long | GPSID | ⬜ | |
| `nominationId` | Long | 提名ID | ⬜ | |
| `nominationPrice` | SesNominationPrice | 提名价格 | ⬜ | |
| `nominationVendor` | SesNominationVendor | 提名供应商 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `material` | SesMaterialVO | 物料 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `nominationMessageStatus` | NominationRelationStatus | 提名消息状态 | ⬜ | |
| `sesNominationRelationRepository` | SesNominationRelationRepository | ses提名关系仓储 | ⬜ | |

---

### 231. SesOnlineBiddingEntity

**标准化名称**: `sesonlinebidding`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 竞价单号

**包路径**: `com.nio.srm.gps.sourcing.domain.sesonlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesonlinebidding/buyer/SesOnlineBiddingEntity.java`

**关系统计**:

- 总关系数: 31
- 出向关系: 20
- 入向关系: 11

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 7
- `involves_query`: 5
- `involves_update`: 1
- `involves_validate`: 1
- `queries_find`: 4
- `queries_findBy`: 1

**入向关系类型**:

- `involves_other`: 6
- `involves_query`: 3
- `involves_validate`: 1
- `queries_find`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `onlineBiddingCode` | String | ID编码 | ⬜ | |
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `gpsQuoteRoundId` | Long | 报价ID | ⬜ | |
| `onlineBiddingType` | OnlineBiddingType | 在线竞价类型 | ⬜ | |
| `testFlag` | Boolean | 测试标志 | ⬜ | |
| `publishTime` | LocalDateTime | 发布时间 | ⬜ | |
| `startTime` | LocalDateTime | 开始时间 | ⬜ | |
| `startingMode` | OnlineBiddingStartMode | 开始模式 | ⬜ | |
| `beginTime` | LocalDateTime | 开始时间 | ⬜ | |
| `endTime` | LocalDateTime | 结束时间 | ⬜ | |
| `needEchoFlag` | Boolean | 是否需要标志 | ⬜ | |
| `echoEndTime` | LocalDateTime | 英文时间 | ⬜ | |
| `minEchoVendorCount` | Integer | 供应商数量 | ⬜ | |
| `onlineBiddingStatus` | OnlineBiddingStatus | 在线竞价状态 | ⬜ | |
| `durationMinutes` | BigDecimal | 持续时间分钟 | ⬜ | |
| `afterBiddingIntervalMinutes` | BigDecimal | 后续竞价间隔分钟 | ⬜ | |
| `eachBiddingDurationMinutes` | BigDecimal | 每个竞价持续时间分钟 | ⬜ | |
| `delayRule` | OnlineBiddingDelayRule | 延迟rule | ⬜ | |
| `delayMinutes` | BigDecimal | 延迟分钟 | ⬜ | |
| `delayCount` | Integer | 延迟数量 | ⬜ | |
| `currentDelayCount` | Integer | 英文数量 | ⬜ | |
| `setFloorPriceFlag` | Boolean | 设置底价价格标志 | ⬜ | |
| `rankMode` | RankModeType | 排名模式 | ⬜ | |
| `echoCount` | Integer | 回音数量 | ⬜ | |
| `setIntervalTimeFlag` | Boolean | 设置间隔时间标志 | ⬜ | |
| `sealedBiddingFlag` | Boolean | 密封竞价标志 | ⬜ | |
| `apportionFlag` | Boolean | 分摊标志 | ⬜ | |
| `roundDeadlineTime` | LocalDateTime | 轮次时间 | ⬜ | |
| `lowestQuoteTimes` | Integer | 最低报价时间 | ⬜ | |
| `canDelayBeforeEndMinutes` | BigDecimal | 可以延迟之前结束分钟 | ⬜ | |
| `quoteTemplate` | SesQuoteTemplate | 报价模板 | ⬜ | |
| `sesOnlineBiddingRepository` | SesOnlineBiddingRepository | ses在线竞价仓储 | ⬜ | |
| `delayTaskService` | DelayTaskService | 延迟任务服务 | ⬜ | |

---

### 232. SesOnlineBiddingAttachmentEntity

**标准化名称**: `sesonlinebiddingattachment`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 所属的竞价单id

**包路径**: `com.nio.srm.gps.sourcing.domain.sesonlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesonlinebidding/buyer/SesOnlineBiddingAttachmentEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `onlineBiddingId` | Long | IDID | ⬜ | |
| `fileType` | OnlineBiddingFileType | 文件类型 | ⬜ | |
| `requireFlag` | Boolean | require标志 | ⬜ | |
| `fileId` | Long | 文件ID | ⬜ | |
| `fileName` | String | 文件名称 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `gpsVendorName` | String | 供应商名称 | ⬜ | |
| `confirmResult` | OnlineBiddingConfirmResult | confirmresult | ⬜ | |
| `remark` | String | 备注 | ⬜ | |

---

### 233. SesOnlineBiddingItemEntity

**标准化名称**: `sesonlinebiddingitem`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 所属竞价单ID

**包路径**: `com.nio.srm.gps.sourcing.domain.sesonlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesonlinebidding/buyer/SesOnlineBiddingItemEntity.java`

**关系统计**:

- 总关系数: 9
- 出向关系: 0
- 入向关系: 9

**入向关系类型**:

- `involves_other`: 5
- `involves_query`: 3
- `involves_validate`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsOnlineBiddingId` | Long | IDID | ⬜ | |
| `gpsOnlineBiddingCode` | String | ID编码 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `floorPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `vendorBiddingStatus` | OnlineBiddingVendorStatus | 供应商竞价状态 | ⬜ | |
| `biddingTime` | LocalDateTime | 竞价时间 | ⬜ | |
| `priceWithoutTaxAmount` | BigDecimal | 价格金额 | ⬜ | |
| `taxRate` | BigDecimal | 税比率 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `priceWithTaxAmount` | BigDecimal | 价格金额 | ⬜ | |
| `material` | SesOnlineBiddingMaterialVO | 物料 | ⬜ | |
| `vendor` | SesOnlineBiddingVendorVO | 供应商 | ⬜ | |
| `quoteInfo` | SesOnlineBiddingQuoteInfoVO | 报价信息 | ⬜ | |
| `biddingTimes` | Integer | 竞价时间 | ⬜ | |
| `effectivePriceFlag` | Boolean | 生效价格标志 | ⬜ | |
| `ranking` | Integer | 排名 | ⬜ | |

---

### 234. SesOnlineBiddingQuoteRecordEntity

**标准化名称**: `sesonlinebiddingquoterecord`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: <p>

**包路径**: `com.nio.srm.gps.sourcing.domain.sesonlinebidding.buyer`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesonlinebidding/buyer/SesOnlineBiddingQuoteRecordEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsOnlineBiddingId` | Long | IDID | ⬜ | |
| `gpsOnlineBiddingCode` | String | ID编码 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `floorPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `vendorBiddingStatus` | OnlineBiddingVendorStatus | 供应商竞价状态 | ⬜ | |
| `biddingTime` | LocalDateTime | 竞价时间 | ⬜ | |
| `material` | SesOnlineBiddingMaterialVO | 物料 | ⬜ | |
| `vendor` | SesOnlineBiddingVendorVO | 供应商 | ⬜ | |
| `quoteInfo` | SesOnlineBiddingQuoteInfoVO | 报价信息 | ⬜ | |
| `biddingTimes` | Integer | 竞价时间 | ⬜ | |
| `ranking` | Integer | 排名 | ⬜ | |

---

### 235. SesQuoteItemEntity

**标准化名称**: `sesquoteitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: 所属报价单id

**包路径**: `com.nio.srm.gps.sourcing.domain.sesquote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesquote/SesQuoteItemEntity.java`

**关系统计**:

- 总关系数: 24
- 出向关系: 13
- 入向关系: 11

**出向关系类型**:

- `involves_create`: 2
- `involves_other`: 5
- `involves_query`: 6

**入向关系类型**:

- `involves_create`: 1
- `involves_other`: 3
- `involves_query`: 3
- `queries_get`: 1
- `queries_list`: 1
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `gpsQuoteRoundId` | Long | 报价ID | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `gpsPrCode` | String | GPS编码 | ⬜ | |
| `gpsPrLineNumber` | Integer | GPS采购申请行编号 | ⬜ | |
| `gpsPrMaterialDesc` | String | 物料描述 | ⬜ | |
| `purchaseProcess` | String | 采购流程 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `quoteTemplate` | String | 报价模板 | ⬜ | |
| `quoteTemplateCode` | String | 报价编码 | ⬜ | |
| `vendorQuoteStatus` | QuoteItemStatus | 供应商报价状态 | ⬜ | |
| `priceWithoutTaxAmount` | BigDecimal | 价格金额 | ⬜ | |
| `priceWithTaxAmount` | BigDecimal | 价格金额 | ⬜ | |
| `quoteRoundNo` | Integer | 报价编号 | ⬜ | |
| `subRoundNo` | Integer | 轮次编号 | ⬜ | |
| `material` | SesMaterialVO | 物料 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `vendor` | SesVendorVO | 供应商 | ⬜ | |
| `quoteInfo` | SesQuoteInfoVO | 报价信息 | ⬜ | |
| `ladderPriceObj` | SesLadderPriceVO | 阶梯价格obj | ⬜ | |
| `sesQuoteItemRepository` | SesQuoteItemRepository | ses报价项仓储 | ⬜ | |

---

### 236. SesQuoteRoundEntity

**标准化名称**: `sesquoteround`

**层级**: L2-Supporting

**推理中文含义**: 报价

**当前描述**: 是否封标

**包路径**: `com.nio.srm.gps.sourcing.domain.sesquote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesquote/SesQuoteRoundEntity.java`

**关系统计**:

- 总关系数: 22
- 出向关系: 17
- 入向关系: 5

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 1
- `involves_query`: 3
- `queries_find`: 9
- `queries_get`: 2
- `queries_other`: 1

**入向关系类型**:

- `involves_create`: 1
- `involves_query`: 3
- `queries_get`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `sealedBidding` | Boolean | 密封竞价 | ⬜ | |
| `quoteMethod` | QuoteMethod | 报价method | ⬜ | |
| `comment` | String | 备注 | ⬜ | |
| `roundNo` | Integer | 轮次编号 | ⬜ | |
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `roundDeadlineTime` | LocalDateTime | 轮次时间 | ⬜ | |
| `prevRoundId` | Long | 轮次ID | ⬜ | |
| `status` | QuoteRoundStatusEnum | 状态 | ⬜ | |
| `roundType` | QuoteRoundTypeEnum | 轮次类型 | ⬜ | |
| `openBidding` | Boolean | 开放竞价 | ⬜ | |

---

### 237. SesRfqEntity

**标准化名称**: `sesrfq`

**层级**: L2-Supporting

**推理中文含义**: 询价

**当前描述**: 寻报价单号

**包路径**: `com.nio.srm.gps.sourcing.domain.sesquote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesquote/SesRfqEntity.java`

**关系统计**:

- 总关系数: 103
- 出向关系: 47
- 入向关系: 56

**出向关系类型**:

- `involves_create`: 9
- `involves_delete`: 1
- `involves_move`: 1
- `involves_other`: 12
- `involves_query`: 9
- `involves_update`: 7
- `involves_validate`: 1
- `queries_find`: 4
- `queries_other`: 3

**入向关系类型**:

- `involves_create`: 11
- `involves_delete`: 2
- `involves_move`: 2
- `involves_other`: 14
- `involves_query`: 12
- `involves_update`: 9
- `involves_validate`: 1
- `queries_find`: 2
- `queries_get`: 1
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `quoteTemplate` | SesQuoteTemplate | 报价模板 | ⬜ | |
| `quoteType` | SesQuoteType | 报价类型 | ⬜ | |
| `rfqType` | SesRfqType | 询价类型 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `salesArea` | String | salesarea | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryId` | Long | GPS品类ID | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `rfqName` | String | 询价名称 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `sealedBidding` | Boolean | 密封竞价 | ⬜ | |
| `quoteTemplateCode` | String | 报价编码 | ⬜ | |
| `quoteTemplateVersion` | Integer | 报价模板版本 | ⬜ | |
| `quoteMethod` | QuoteMethod | 报价method | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `ceAccount` | String | CE数量 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `quoteStatus` | ReqForQuoteStatus | 报价状态 | ⬜ | |
| `exchangeRate` | BigDecimal | 汇率 | ⬜ | |
| `roundDeadlineTime` | LocalDateTime | 轮次时间 | ⬜ | |
| `isLadderPrice` | Boolean | 是价格 | ⬜ | |
| `ladderPriceObj` | SesLadderPriceVO | 阶梯价格obj | ⬜ | |
| `isAutoSendMessage` | Boolean | 是否英文 | ⬜ | |
| `cancelMessage` | String | 取消消息 | ⬜ | |
| `taxRate` | BigDecimal | 税比率 | ⬜ | |
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `publishTime` | LocalDateTime | 发布时间 | ⬜ | |
| `priceEffectTime` | LocalDateTime | 价格时间 | ⬜ | |
| `priceExpireTime` | LocalDateTime | 价格时间 | ⬜ | |
| `sesRfqRepository` | SesRfqRepository | ses询价仓储 | ⬜ | |
| `currentRound` | SesQuoteRoundEntity | 当前轮次 | ⬜ | |
| `delayTaskService` | DelayTaskService | 延迟任务服务 | ⬜ | |
| `bidderListRepository` | BidderListRepository | 投标人列表仓储 | ⬜ | |
| `priceEstimationFacade` | PriceEstimationFacade | 价格估算门面 | ⬜ | |
| `sesOnlineBiddingEntity` | SesOnlineBiddingEntity | ses在线竞价 | ⬜ | |
| `materialFacade` | MaterialFacade | 物料门面 | ⬜ | |
| `vendorFacade` | VendorFacade | 供应商门面 | ⬜ | |
| `meetingRepository` | IMeetingRepository | 会议仓储 | ⬜ | |
| `workflowLogRepository` | WorkflowLogRepository | 工作流日志仓储 | ⬜ | |
| `sesQuoteRoundRepository` | SesQuoteRoundRepository | ses报价轮次仓储 | ⬜ | |
| `prFacade` | PrFacade | 采购申请门面 | ⬜ | |

---

### 238. SesRoundApplyEntity

**标准化名称**: `sesroundapply`

**层级**: L2-Supporting

**推理中文含义**: 轮次

**当前描述**: 间采last call申请单

**包路径**: `com.nio.srm.gps.sourcing.domain.sesroundapply`

**文件路径**: `com/nio/srm/gps/sourcing/domain/sesroundapply/SesRoundApplyEntity.java`

**关系统计**:

- 总关系数: 28
- 出向关系: 14
- 入向关系: 14

**出向关系类型**:

- `involves_create`: 1
- `involves_delete`: 2
- `involves_other`: 2
- `involves_query`: 2
- `involves_update`: 2
- `queries_find`: 2
- `queries_getBy`: 3

**入向关系类型**:

- `involves_create`: 2
- `involves_delete`: 4
- `involves_other`: 4
- `involves_query`: 3
- `involves_update`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `applyNo` | String | 申请编号 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `status` | RoundApplyStatus | 状态 | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `applyTime` | LocalDateTime | 申请时间 | ⬜ | |
| `round` | SesQuoteRoundVO | 轮次 | ⬜ | |
| `lastCallEndTime` | LocalDateTime | 英文时间 | ⬜ | |
| `startLastCallReason` | String | 开始last全部reason | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `workflowACO` | WorkflowACO | 工作流ACO | ⬜ | |
| `sesRoundApplyRepository` | SesRoundApplyRepository | ses轮次申请仓储 | ⬜ | |

---

### 239. StandardAccountPeriodEntity

**标准化名称**: `standardaccountperiod`

**层级**: L2-Supporting

**推理中文含义**: 数量

**当前描述**: @author kaeya.zhang

**包路径**: `com.nio.srm.gps.vendor.domain.account.period.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/account/period/entity/StandardAccountPeriodEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 1
- 入向关系: 0

**出向关系类型**:

- `queries_queryBy`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `accountPeriodCode` | String | 数量编码 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `accountPeriod` | String | 账号周期 | ⬜ | |
| `accountPeriodRepository` | IStandardAccountPeriodRepository | 账号周期仓储 | ⬜ | |
| `converter` | StandardAccountPeriodConverter | 转换器 | ⬜ | |
| `termsOfPaymentFacade` | TermsOfPaymentFacade | terms线下支付门面 | ⬜ | |

---

### 240. StatOfReqEntity

**标准化名称**: `statofreq`

**层级**: L2-Supporting

**推理中文含义**: TA

**当前描述**: SOR全局唯一id

**包路径**: `com.nio.srm.gps.sourcing.domain.quote`

**文件路径**: `com/nio/srm/gps/sourcing/domain/quote/StatOfReqEntity.java`

**关系统计**:

- 总关系数: 8
- 出向关系: 4
- 入向关系: 4

**出向关系类型**:

- `involves_other`: 2
- `involves_query`: 2

**入向关系类型**:

- `involves_query`: 2
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `plmGuid` | String | PLMID | ⬜ | |
| `plmSorCode` | String | PLM编码 | ⬜ | |
| `releaseStatus` | String | release状态 | ⬜ | |
| `releaseDate` | LocalDateTime | release日期 | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |

---

### 241. StrategyTemplateEntity

**标准化名称**: `strategytemplate`

**层级**: L2-Supporting

**推理中文含义**: 比率

**当前描述**: @author tim.ning

**包路径**: `com.nio.srm.gps.sourcing.domain.strategy.template.valueobject`

**文件路径**: `com/nio/srm/gps/sourcing/domain/strategy/template/valueobject/StrategyTemplateEntity.java`

**关系统计**:

- 总关系数: 16
- 出向关系: 8
- 入向关系: 8

**出向关系类型**:

- `involves_create`: 1
- `involves_update`: 1
- `queries_other`: 2
- `queries_select`: 4

**入向关系类型**:

- `involves_create`: 1
- `involves_update`: 1
- `queries_other`: 2
- `queries_select`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `templateName` | String | 模板名称 | ⬜ | |
| `purchaseStrategy` | PurchaseStrategyType | 采购策略 | ⬜ | |
| `status` | StrategyTemplateStatus | 状态 | ⬜ | |
| `vendorMinQuantity` | Integer | 供应商最小quantity | ⬜ | |
| `quotedVendorMinQuantity` | Integer | 报价供应商最小quantity | ⬜ | |
| `taRequirement` | TaRequirementEnum | TA | ⬜ | |
| `ceRequirement` | CeRequirementEnum | CE | ⬜ | |
| `strategyTemplateRepository` | IStrategyTemplateRepository | 策略模板仓储 | ⬜ | |

---

### 242. SupplyRelationshipEntity

**标准化名称**: `supplyrelationship`

**层级**: L2-Supporting

**推理中文含义**: 关系

**当前描述**: 合作伙伴中文名称

**包路径**: `com.nio.srm.gps.price.domain.supply.relationship`

**文件路径**: `com/nio/srm/gps/price/domain/supply/relationship/SupplyRelationshipEntity.java`

**关系统计**:

- 总关系数: 18
- 出向关系: 10
- 入向关系: 8

**出向关系类型**:

- `involves_other`: 5
- `queries_other`: 5

**入向关系类型**:

- `involves_create`: 1
- `involves_other`: 2
- `queries_other`: 5

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorZhName` | String | 供应商名称 | ⬜ | |
| `vendorEnName` | String | 供应商名称 | ⬜ | |
| `vendorInfo` | String | 供应商信息 | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `brand` | BrandEnum | 品牌 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `factoryName` | String | 工厂名称 | ⬜ | |
| `partCode` | String | 部分编码 | ⬜ | |
| `partVersion` | String | 部分版本 | ⬜ | |
| `colorCode` | String | color编码 | ⬜ | |
| `materialZhName` | String | 物料名称 | ⬜ | |
| `materialEnName` | String | 物料名称 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `imported` | Boolean | 采购订单 | ⬜ | |
| `existSamplePartPrice` | Boolean | 部分价格 | ⬜ | |
| `nominationSource` | PriceNominationSource | 提名来源 | ⬜ | |
| `nominationSourceNo` | String | 编号编号 | ⬜ | |
| `nominationStatus` | PriceNominationStatus | 提名状态 | ⬜ | |
| `effectStatus` | NominationEffectStatus | 生效状态 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `isDB` | Boolean | 是否DB | ⬜ | |

---

### 243. SupplyRelationshipApplyItemEntity

**标准化名称**: `supplyrelationshipapplyitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: @project srm-gps-price

**包路径**: `com.nio.srm.gps.price.domain.supply.relationship.apply`

**文件路径**: `com/nio/srm/gps/price/domain/supply/relationship/apply/SupplyRelationshipApplyItemEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 0
- 入向关系: 3

**入向关系类型**:

- `involves_other`: 2
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `applyId` | Long | 申请ID | ⬜ | |
| `applyNo` | String | 申请编号 | ⬜ | |
| `originalGpsVendorCode` | String | 供应商编码 | ⬜ | |
| `newGpsVendorCode` | String | 供应商编码 | ⬜ | |
| `switchTime` | LocalDateTime | switch时间 | ⬜ | |
| `switchStatus` | SupplyRelationshipSwitchStatus | switch状态 | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `brand` | BrandEnum | 品牌 | ⬜ | |
| `supplyStatus` | MaterialSupplyStatusEnum | supply状态 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `partCode` | String | 部分编码 | ⬜ | |
| `partVersion` | String | 部分版本 | ⬜ | |
| `colorCode` | String | color编码 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `multiNomination` | Boolean | multi提名 | ⬜ | |
| `imported` | Boolean | 采购订单 | ⬜ | |
| `existSamplePartPrice` | Boolean | 部分价格 | ⬜ | |
| `nominationSource` | PriceNominationSource | 提名来源 | ⬜ | |
| `nominationSourceNo` | String | 编号编号 | ⬜ | |
| `nominationStatus` | PriceNominationStatus | 提名状态 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `priceInfo` | SupplyRelationshipApplyPriceInfo | 价格信息 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `itemId` | Long | 项ID | ⬜ | |
| `applyNo` | String | 申请编号 | ⬜ | |
| `newGpsVendorCode` | String | 供应商编码 | ⬜ | |
| `originalGpsVendorCode` | String | 供应商编码 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `switchTime` | LocalDateTime | switch时间 | ⬜ | |
| `requestTime` | LocalDateTime | 申请时间 | ⬜ | |
| `optUser` | String | opt用户 | ⬜ | |

---

### 244. SupplyRelationshipApplyRfqItemEntity

**标准化名称**: `supplyrelationshipapplyrfqitem`

**层级**: L2-Supporting

**推理中文含义**: 项

**当前描述**: ID

**包路径**: `com.nio.srm.gps.price.domain.supply.relationship.apply`

**文件路径**: `com/nio/srm/gps/price/domain/supply/relationship/apply/SupplyRelationshipApplyRfqItemEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `applyId` | Long | 申请ID | ⬜ | |
| `applyNo` | String | 申请编号 | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `gpsRfqName` | String | GPS询价单名称 | ⬜ | |
| `bizType` | BizTypeEnum | 业务类型 | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |

---

### 245. TaAttachmentEntity

**标准化名称**: `taattachment`

**层级**: L2-Supporting

**推理中文含义**: 附件

**当前描述**: 

**包路径**: `com.nio.srm.gps.meeting.domain.ta`

**文件路径**: `com/nio/srm/gps/meeting/domain/ta/TaAttachmentEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 0
- 入向关系: 2

**入向关系类型**:

- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `canDelete` | Boolean | 可以删除 | ⬜ | |

---

### 246. TaskEntity

**标准化名称**: `task`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: 

**包路径**: `com.nio.srm.gps.material.domain.task`

**文件路径**: `com/nio/srm/gps/material/domain/task/TaskEntity.java`

**关系统计**:

- 总关系数: 34
- 出向关系: 15
- 入向关系: 19

**出向关系类型**:

- `involves_create`: 5
- `involves_delete`: 2
- `involves_other`: 2
- `involves_update`: 2
- `queries_get`: 2
- `queries_other`: 2

**入向关系类型**:

- `involves_create`: 7
- `involves_delete`: 3
- `involves_other`: 3
- `involves_update`: 2
- `queries_get`: 2
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `taskId` | String | 任务ID | ⬜ | |
| `itemId` | String | 项ID | ⬜ | |
| `taskParam` | String | 任务param | ⬜ | |
| `taskResult` | String | 任务result | ⬜ | |
| `taskType` | TaskType | 任务类型 | ⬜ | |
| `taskStatus` | TaskStatus | 任务状态 | ⬜ | |
| `iTaskRepository` | ITaskRepository | ID任务仓储 | ⬜ | |
| `bizId` | Long | 业务ID | ⬜ | |
| `taskRepository` | ITaskRepository | 任务仓储 | ⬜ | |

---

### 247. TaskFailMsgEntity

**标准化名称**: `taskfailmsg`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: 业务单号

**包路径**: `com.nio.srm.gps.sourcing.domain.task`

**文件路径**: `com/nio/srm/gps/sourcing/domain/task/TaskFailMsgEntity.java`

**关系统计**:

- 总关系数: 13
- 出向关系: 7
- 入向关系: 6

**出向关系类型**:

- `involves_other`: 1
- `involves_update`: 2
- `queries_find`: 4

**入向关系类型**:

- `involves_other`: 2
- `involves_update`: 2
- `queries_find`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `bizNo` | String | 业务编号 | ⬜ | |
| `bizId` | Long | 业务ID | ⬜ | |
| `taskType` | String | 任务类型 | ⬜ | |
| `bizScene` | String | 业务场景 | ⬜ | |
| `operateType` | String | 率类型 | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `failMsg` | String | failmsg | ⬜ | |
| `taskFailMsgRepository` | ITaskFailMsgRepository | 任务failmsg仓储 | ⬜ | |

---

### 248. TaTaskEntity

**标准化名称**: `tatask`

**层级**: L2-Supporting

**推理中文含义**: 任务

**当前描述**: 商务评标 备注

**包路径**: `com.nio.srm.gps.meeting.domain.ta`

**文件路径**: `com/nio/srm/gps/meeting/domain/ta/TaTaskEntity.java`

**关系统计**:

- 总关系数: 22
- 出向关系: 7
- 入向关系: 15

**出向关系类型**:

- `involves_create`: 1
- `involves_delete`: 1
- `involves_other`: 1
- `involves_query`: 3
- `involves_update`: 1

**入向关系类型**:

- `involves_create`: 1
- `involves_delete`: 1
- `involves_other`: 1
- `involves_query`: 3
- `involves_update`: 1
- `queries_other`: 8

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `userAccount` | String | 用户数量 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `bizSourceCode` | String | 来源编码 | ⬜ | |
| `strategyType` | String | 策略类型 | ⬜ | |
| `taUserStatus` | String | TA用户状态 | ⬜ | |
| `taBuyerStatus` | String | TA采购员状态 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `bizSourceName` | String | 来源名称 | ⬜ | |
| `taExpectedTime` | LocalDateTime | 预期时间 | ⬜ | |
| `taTechnicalTime` | LocalDateTime | TA时间 | ⬜ | |
| `taBusinessTime` | LocalDateTime | BU时间 | ⬜ | |
| `taComprehensiveTime` | LocalDateTime | 英文时间 | ⬜ | |
| `taTechnicalRemark` | String | TAtechnical备注 | ⬜ | |
| `taBusinessRemark` | String | TABU备注 | ⬜ | |
| `taComprehensiveRemark` | String | TA备注 | ⬜ | |
| `taRepository` | ITaRepository | TA仓储 | ⬜ | |

---

### 249. TaVendorRecordEntity

**标准化名称**: `tavendorrecord`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 

**包路径**: `com.nio.srm.gps.meeting.domain.ta`

**文件路径**: `com/nio/srm/gps/meeting/domain/ta/TaVendorRecordEntity.java`

**关系统计**:

- 总关系数: 5
- 出向关系: 0
- 入向关系: 5

**入向关系类型**:

- `involves_other`: 3
- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `score` | BigDecimal | score | ⬜ | |
| `vendorAssessResult` | String | 供应商assessresult | ⬜ | |
| `taskId` | Long | 任务ID | ⬜ | |
| `scoreType` | String | score类型 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |

---

### 250. TaxEntity

**标准化名称**: `tax`

**层级**: L2-Supporting

**推理中文含义**: 税

**当前描述**: 

**包路径**: `com.nio.srm.gps.maindata.domain.tax`

**文件路径**: `com/nio/srm/gps/maindata/domain/tax/TaxEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 2
- 入向关系: 2

**出向关系类型**:

- `queries_other`: 2

**入向关系类型**:

- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `sapTaxCode` | String | 税编码 | ⬜ | |
| `taxType` | String | 税类型 | ⬜ | |
| `countryCode` | String | 数量编码 | ⬜ | |
| `taxDesc` | String | 税描述 | ⬜ | |
| `taxRate` | String | 税比率 | ⬜ | |

---

### 251. TblActionplanAmortzEntity

**标准化名称**: `tblactionplanamortz`

**层级**: L2-Supporting

**推理中文含义**: 计划

**当前描述**: @author MybatisPlusGenerator

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/TblActionplanAmortzEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 1
- 入向关系: 0

**出向关系类型**:

- `queries_getBy`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `actionplanAmortzID` | Integer | 计划ID | ⬜ | |
| `actionPlanID` | Integer | 计划ID | ⬜ | |
| `bundleNo` | String | BU编号 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `eDNDAmortzAmountD` | String | 名称dndamortz金额ID | ⬜ | |
| `toolingAmortzAmountC` | String | 工具amortz金额编码 | ⬜ | |
| `amortzYear` | String | amortzyear | ⬜ | |
| `amortzStartTime` | LocalDateTime | 开始时间 | ⬜ | |
| `amortzEndTime` | LocalDateTime | 英文时间 | ⬜ | |
| `toolingContractNo` | String | 合同编号 | ⬜ | |
| `eDDContractNo` | String | 合同编号 | ⬜ | |
| `sUDContractNo` | String | 合同编号 | ⬜ | |
| `buyerID` | String | 采购员ID | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `sendToSAP` | String | 发送总计SAP | ⬜ | |
| `status` | String | 状态 | ⬜ | |

---

### 252. TblDBOnlinePriceManangeEntity

**标准化名称**: `tbldbonlinepricemanange`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author MybatisPlusGenerator

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/TblDBOnlinePriceManangeEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_list`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `priceManangeNo` | String | 价格编号 | ⬜ | |
| `sAPContractNO` | String | 合同编号 | ⬜ | |
| `buyer` | String | 采购员 | ⬜ | |
| `buyerEmail` | String | 采购员邮箱 | ⬜ | |
| `department` | String | 部门 | ⬜ | |
| `departmentEN` | String | 部门英文 | ⬜ | |
| `requestDate` | LocalDateTime | 申请日期 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `companyCurrency` | String | 公司货币 | ⬜ | |
| `applicant` | String | 申请人 | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `applicantDepartment` | String | 申请人部门 | ⬜ | |
| `costCenter` | String | 成本中心 | ⬜ | |
| `priceManangeName` | String | 价格名称 | ⬜ | |
| `priceManangeStartDate` | LocalDateTime | 价格日期 | ⬜ | |
| `priceManangeEndDate` | LocalDateTime | 价格日期 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `exchangeRate` | String | 汇率 | ⬜ | |
| `priceTotalPrice` | Double | 价格价格 | ⬜ | |
| `taxRatePrice` | Double | 税价格 | ⬜ | |
| `vATAmountPrice` | Double | 金额价格 | ⬜ | |
| `domesticPriceTotalPrice` | Double | 价格价格 | ⬜ | |
| `domesticTaxRatePrice` | Double | 税价格 | ⬜ | |
| `domesticVATAmountPrice` | Double | 金额价格 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `venderName` | String | 英文名称 | ⬜ | |
| `venderAddress` | String | 地址 | ⬜ | |
| `zipCode` | String | IP编码 | ⬜ | |
| `contactPersonName` | String | TA名称 | ⬜ | |
| `contactPEmail` | String | TA类型邮箱 | ⬜ | |
| `paymentTerms` | String | 支付terms | ⬜ | |
| `incoterms` | String | incoterms | ⬜ | |
| `payment` | String | 支付 | ⬜ | |
| `completeDate` | LocalDateTime | complete日期 | ⬜ | |
| `createDate` | LocalDateTime | 创建日期 | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `processSign` | String | 流程签署 | ⬜ | |
| `purchaseOrganize` | String | 采购organize | ⬜ | |
| `purchaseGroup` | String | 采购分组 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `updateUser` | String | 更新用户 | ⬜ | |
| `updateDate` | LocalDateTime | 更新日期 | ⬜ | |
| `stampDuty` | String | 印章duty | ⬜ | |
| `buyerId` | String | 采购员ID | ⬜ | |
| `buyerDepartmentCode` | String | 部门编码 | ⬜ | |
| `buyerCompanyNameCN` | String | 采购员公司名称cn | ⬜ | |
| `buyerCompanyNameEN` | String | 名称英文 | ⬜ | |
| `userCompanyCode` | String | 公司编码 | ⬜ | |
| `userCompanyNameCN` | String | 用户公司名称cn | ⬜ | |
| `userCompanyNameEN` | String | 名称英文 | ⬜ | |
| `userDepartmentCode` | String | 部门编码 | ⬜ | |
| `dataFrom` | String | 数据from | ⬜ | |
| `dataFromDateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `priceManangeCategoryEN` | String | 价格英文 | ⬜ | |
| `priceManangeCategoryCN` | String | 价格manange品类cn | ⬜ | |
| `fileUUID` | String | 文件ID | ⬜ | |
| `fileUUIDEN` | String | ID英文 | ⬜ | |
| `sAPNoForNWF` | String | 状态申请编号之前工作流 | ⬜ | |
| `isUpgrade` | Integer | 是否收货单 | ⬜ | |
| `signLanguage` | String | 签署language | ⬜ | |
| `dBTypeCode` | String | 类型编码 | ⬜ | |
| `createPDFOrNot` | String | 创建pdf订单编号 | ⬜ | |
| `isHaveUpdate` | String | 是日期 | ⬜ | |
| `wFStatus` | String | 工作流工作流状态 | ⬜ | |
| `cAChangeStatus` | Integer | 编码名称变更状态 | ⬜ | |
| `dBOnlinePriceManangeID` | String | 价格ID | ⬜ | |
| `fileName` | String | 文件名称 | ⬜ | |
| `alternateField2` | String | alternatefield | ⬜ | |
| `keyInformationUpdate` | String | 信息日期 | ⬜ | |
| `cAChangeCount` | Integer | 变更数量 | ⬜ | |
| `taskID` | String | 任务ID | ⬜ | |
| `alternateField3` | String | alternatefield | ⬜ | |
| `cAStatus` | String | 编码名称状态 | ⬜ | |
| `processCode` | String | 流程编码 | ⬜ | |
| `alternateField4` | String | alternatefield | ⬜ | |
| `alternateField` | String | alternatefield | ⬜ | |

---

### 253. TblDBOnlinePriceManangeItemEntity

**标准化名称**: `tbldbonlinepricemanangeitem`

**层级**: L2-Supporting

**推理中文含义**: 价格

**当前描述**: @author MybatisPlusGenerator

**包路径**: `com.nio.srm.gps.price.domain.migration`

**文件路径**: `com/nio/srm/gps/price/domain/migration/TblDBOnlinePriceManangeItemEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_list`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `rowID` | Integer | rowID | ⬜ | |
| `productNo` | String | 采购申请编号 | ⬜ | |
| `purcharsDesc` | String | purchars描述 | ⬜ | |
| `amount` | String | 金额 | ⬜ | |
| `productUnit` | String | 采购申请单位 | ⬜ | |
| `productPrice` | String | 采购申请价格 | ⬜ | |
| `priceUnit` | Double | 价格单位 | ⬜ | |
| `amountPrice` | Double | 金额价格 | ⬜ | |
| `rate` | String | 率 | ⬜ | |
| `ratePrice` | String | 比率价格 | ⬜ | |
| `rateAmountPrice` | Double | 金额价格 | ⬜ | |
| `gLAccount` | String | gLAc数量 | ⬜ | |
| `costCenter` | String | 成本中心 | ⬜ | |
| `wFCostCenter` | String | 工作流工作流成本中心 | ⬜ | |
| `factory` | String | 工厂 | ⬜ | |
| `exchageRate` | String | exchage率 | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `createUser` | String | 创建用户 | ⬜ | |
| `updateUser` | String | 更新用户 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `unitPriceUnit` | String | 单位价格单位 | ⬜ | |
| `unitPriceUnitAmount` | String | 价格金额 | ⬜ | |
| `dataFrom` | String | 数据from | ⬜ | |
| `dataFromDateTime` | LocalDateTime | 日期时间 | ⬜ | |
| `projectType` | String | 项目类型 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `startDate` | LocalDateTime | 开始日期 | ⬜ | |
| `endDate` | LocalDateTime | 结束日期 | ⬜ | |
| `rFQNumber` | String | 编号询价编号 | ⬜ | |
| `isDelete` | Integer | 是否删除 | ⬜ | |
| `accountClassification` | String | 账号类别 | ⬜ | |
| `madeIn` | String | made提名 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `minOrderNumer` | String | 最小订单numer | ⬜ | |
| `groupRowID` | Integer | 分组ID | ⬜ | |
| `upgradeKey` | String | 收货单key | ⬜ | |
| `toolingAmortzAmountC` | String | 工具amortz金额编码 | ⬜ | |
| `eDNDAmortzAmountD` | String | 名称dndamortz金额ID | ⬜ | |
| `toolingContractNo` | String | 合同编号 | ⬜ | |
| `eDDContractNo` | String | 合同编号 | ⬜ | |
| `dBPriceManangePriceRate` | String | ID编号价格manange价格率 | ⬜ | |
| `dBPriceManangePriceABS` | Double | ID编号价格manange价格abs | ⬜ | |
| `estimate` | String | 估算 | ⬜ | |
| `sAPContractNo` | String | 合同编号 | ⬜ | |
| `sortOrder` | Integer | SOR订单 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `alternateField3` | String | alternatefield | ⬜ | |
| `changeStatus` | Integer | 变更状态 | ⬜ | |
| `dBOnlinePriceManangeItemID` | String | 价格ID | ⬜ | |
| `alternateField` | String | alternatefield | ⬜ | |
| `alternateField4` | String | alternatefield | ⬜ | |
| `createUserId` | String | 创建ID | ⬜ | |
| `dBOnlinePriceManangeID` | String | 价格ID | ⬜ | |
| `toolEDNDCode` | String | 工具编码 | ⬜ | |
| `alternateField2` | String | alternatefield | ⬜ | |

---

### 254. TradeTypeEntity

**标准化名称**: `tradetype`

**层级**: L2-Supporting

**推理中文含义**: 类型

**当前描述**: 

**包路径**: `com.nio.srm.gps.maindata.domain.trade`

**文件路径**: `com/nio/srm/gps/maindata/domain/trade/TradeTypeEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 2
- 入向关系: 2

**出向关系类型**:

- `queries_other`: 2

**入向关系类型**:

- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `tradeCode` | String | 贸易编码 | ⬜ | |
| `zhDesc` | String | 中文描述 | ⬜ | |
| `enDesc` | String | 英文描述 | ⬜ | |

---

### 255. UomEntity

**标准化名称**: `uom`

**层级**: L2-Supporting

**推理中文含义**: uom

**当前描述**: 单位 unitOfMeasure

**包路径**: `com.nio.srm.gps.maindata.domain.uom`

**文件路径**: `com/nio/srm/gps/maindata/domain/uom/UomEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 2
- 入向关系: 2

**出向关系类型**:

- `queries_other`: 2

**入向关系类型**:

- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `uom` | String | uom | ⬜ | |
| `zhUomDesc` | String | 中文描述 | ⬜ | |
| `enUomDesc` | String | 英文描述 | ⬜ | |

---

### 256. VehicleProjectEntity

**标准化名称**: `vehicleproject`

**层级**: L2-Supporting

**推理中文含义**: 项目

**当前描述**: @author jun.zou2.o

**包路径**: `com.nio.srm.gps.project.domain.vehicle`

**文件路径**: `com/nio/srm/gps/project/domain/vehicle/VehicleProjectEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 3
- 入向关系: 0

**出向关系类型**:

- `queries_other`: 1
- `queries_select`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `version` | Integer | 版本号 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `isDeleted` | Boolean | 是否删除 | ⬜ | |
| `projectType` | String | 项目类型 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `status` | ProjectStatusEnum | 状态 | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `gpsProjectCode` | String | GPS编码 | ⬜ | |
| `psProjectCode` | String | 项目编码 | ⬜ | |
| `vehicleProjectName` | String | 项目名称 | ⬜ | |
| `vehicleProjectCode` | String | 项目编码 | ⬜ | |
| `vsmAccount` | String | vsmAc数量 | ⬜ | |
| `lifeCycle` | String | lifecycle | ⬜ | |
| `vehicleModel` | String | vehicle模式 | ⬜ | |
| `nameCn` | String | 名称cn | ⬜ | |
| `nameEn` | String | 名称英文 | ⬜ | |
| `gpsProjectName` | String | GPS名称 | ⬜ | |
| `npPlatform` | String | npplatform | ⬜ | |
| `ntPlatform` | String | 金额platform | ⬜ | |
| `firstModelFlag` | Boolean | first模式标志 | ⬜ | |
| `mainlyUsedModel` | String | 主used模式 | ⬜ | |
| `jph` | Integer | jph | ⬜ | |
| `estimateBatchProductionDate` | LocalDateTime | 估算日期 | ⬜ | |
| `gateTwoDate` | LocalDateTime | gateTwo日期 | ⬜ | |
| `gateFourDate` | LocalDateTime | gateFour日期 | ⬜ | |
| `gateSevenDate` | LocalDateTime | 英文日期 | ⬜ | |
| `eopDate` | LocalDateTime | eop日期 | ⬜ | |
| `salesArea` | String | salesarea | ⬜ | |
| `kZeroDate` | LocalDateTime | kZero日期 | ⬜ | |
| `gateZeroDate` | LocalDateTime | gateZero日期 | ⬜ | |
| `gateOneDate` | LocalDateTime | gateOne日期 | ⬜ | |
| `gateThreeDate` | LocalDateTime | gateThree日期 | ⬜ | |
| `gateFiveDate` | LocalDateTime | gateFive日期 | ⬜ | |
| `gateFivePointFiveDate` | LocalDateTime | 采购订单日期 | ⬜ | |
| `gateSixDate` | LocalDateTime | gateSix日期 | ⬜ | |
| `gateSixPointFiveDate` | LocalDateTime | 采购订单日期 | ⬜ | |
| `gateEightDate` | LocalDateTime | gateEight日期 | ⬜ | |
| `gateNineDate` | LocalDateTime | 英文日期 | ⬜ | |
| `sudDate` | LocalDateTime | sud日期 | ⬜ | |
| `assemblyPartCode` | String | 部分编码 | ⬜ | |
| `vehicleProjectRepository` | VehicleProjectRepository | vehicle项目仓储 | ⬜ | |

---

### 257. VendorAccessDraftInfoEntity

**标准化名称**: `vendoraccessdraftinfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴准入信息草稿表;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessDraftInfoEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorId` | Long | 供应商ID | ⬜ | |
| `accessTemplateId` | Long | 模板ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `gpsCategoryId` | Long | GPS品类ID | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `level` | Integer | level | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `templateItemTips` | String | 模板项IP | ⬜ | |
| `logRecordRepository` | LogRecordRepository | 日志record仓储 | ⬜ | |
| `whiteListFacade` | VendorWhiteListFacade | white列表门面 | ⬜ | |
| `vendorAccessInfoRepository` | VendorAccessInfoRepository | 供应商访问信息仓储 | ⬜ | |
| `vendorAccessTemplateRepository` | VendorAccessTemplateRepository | 供应商访问模板仓储 | ⬜ | |
| `vendorAccessDraftInfoRepository` | VendorAccessDraftInfoRepository | 供应商访问draft信息仓储 | ⬜ | |
| `assessDetailRelationRepositoryImpl` | AssessDetailRelationRepositoryImpl | assess明细关系仓储impl | ⬜ | |
| `vendorAccessDraftInfoConverter` | VendorAccessDraftInfoConverter | 供应商访问draft信息转换器 | ⬜ | |
| `vendorInfoFacade` | VendorInfoFacade | 供应商信息门面 | ⬜ | |
| `vendorAssessDetailRepository` | VendorAssessDetailRepository | 供应商assess明细仓储 | ⬜ | |
| `riskFacade` | RiskFacade | 是门面 | ⬜ | |
| `pimsFacade` | PimsFacade | PIMS门面 | ⬜ | |
| `impulseSenderFacade` | ImpulseSenderFacade | impulse门面 | ⬜ | |
| `maindataFacade` | MaindataFacade | 主数据门面 | ⬜ | |
| `accessTemplateItemRepository` | AccessTemplateItemRepositoryImpl | 访问模板项仓储 | ⬜ | |
| `vendorAccessFactoryConverter` | VendorAccessFactoryConverter | 供应商访问工厂转换器 | ⬜ | |
| `messageService` | MessageService | 消息服务 | ⬜ | |
| `websiteUrl` | String | websiteURL | ⬜ | |
| `executor` | Executor | executor | ⬜ | |
| `sapFacade` | SapFacade | SAP门面 | ⬜ | |
| `accessTemplateContact` | String | 访问模板TA | ⬜ | |
| `applicationEventPublisher` | ApplicationEventPublisher | 申请发布者 | ⬜ | |
| `vendorAccessTemplateConverter` | VendorAccessTemplateConverter | 供应商访问模板转换器 | ⬜ | |
| `vendorInfoConverter` | VendorInfoConverter | 供应商信息转换器 | ⬜ | |
| `vendorInfoGlobalizationExchangeUtils` | VendorInfoGlobalizationExchangeUtils | 供应商信息全球汇率工具 | ⬜ | |

---

### 258. VendorAccessFactoryEntity

**标准化名称**: `vendoraccessfactory`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessFactoryEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `factoryNameCnDes` | String | 工厂名称cn描述 | ⬜ | |
| `factoryNameEnDes` | String | 工厂名称描述 | ⬜ | |
| `tradeType` | String | 贸易类型 | ⬜ | |
| `paymentPeriod` | String | 支付周期 | ⬜ | |
| `paymentType` | PaymentTypeDTO | 支付类型 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |

---

### 259. VendorAccessInfoEntity

**标准化名称**: `vendoraccessinfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴准入信息实体;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessInfoEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 0
- 入向关系: 3

**入向关系类型**:

- `queries_get`: 1
- `queries_select`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorId` | Long | 供应商ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `accessTemplateId` | Long | 模板ID | ⬜ | |
| `accessCode` | String | 访问编码 | ⬜ | |
| `vendorStatus` | VendorStatusEnum | 供应商状态 | ⬜ | |
| `gpsCategoryId` | Long | GPS品类ID | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `level` | Integer | level | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `status` | String | 状态 | ⬜ | |
| `stage` | VendorStageEnum | 阶段 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `publishTime` | LocalDateTime | 发布时间 | ⬜ | |
| `accessResultCode` | String | 访问编码 | ⬜ | |
| `vendorAccessInfoRepository` | VendorAccessInfoRepository | 供应商访问信息仓储 | ⬜ | |
| `vendorInfoFacade` | VendorInfoFacade | 供应商信息门面 | ⬜ | |
| `vendorAccessMaterialRepository` | VendorAccessMaterialRepository | 供应商访问物料仓储 | ⬜ | |
| `accessFactoryRepository` | AccessFactoryRepository | 访问工厂仓储 | ⬜ | |
| `vendorAssessDetail` | VendorAssessDetailEntity | 供应商assess明细 | ⬜ | |
| `vendorAccessInfoConverter` | VendorAccessInfoConverter | 供应商访问信息转换器 | ⬜ | |
| `vendorGlobalizationConvert` | VendorGlobalizationConvert | 供应商全球转换器 | ⬜ | |

---

### 260. VendorAccessMaterialEntity

**标准化名称**: `vendoraccessmaterial`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴上传的准入资料;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessMaterialEntity.java`

**关系统计**:

- 总关系数: 10
- 出向关系: 5
- 入向关系: 5

**出向关系类型**:

- `queries_get`: 4
- `queries_other`: 1

**入向关系类型**:

- `queries_get`: 4
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `id` | Long | ID | ⬜ | |
| `vendorId` | Long | 供应商ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `accessId` | Long | 访问ID | ⬜ | |
| `assessDetailId` | Long | 明细ID | ⬜ | |
| `assessDetailCode` | String | 明细编码 | ⬜ | |
| `materialTemplateId` | Long | 物料ID | ⬜ | |
| `materialTemplateFileId` | Long | 物料ID | ⬜ | |
| `materialTemplateFileUuid` | String | 物料ID | ⬜ | |
| `materialTemplateFileName` | String | 物料名称 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `required` | Boolean | required | ⬜ | |
| `explanation` | String | 计划 | ⬜ | |
| `status` | AccessMaterialStatusEnum | 状态 | ⬜ | |
| `effectStartDate` | LocalDateTime | 开始日期 | ⬜ | |
| `effectEndDate` | LocalDateTime | 英文日期 | ⬜ | |
| `vendorAccessMaterialRepository` | VendorAccessMaterialRepository | 供应商访问物料仓储 | ⬜ | |
| `accessMaterialAttachRelatoinRepository` | AccessMaterialAttachRelatoinRepository | 访问物料附件relatoin仓储 | ⬜ | |
| `assessInfraService` | AssessInfraService | assessinfra服务 | ⬜ | |
| `assessMessageHelper` | AssessMessageHelper | assess消息助手 | ⬜ | |
| `assessFactory` | AssessFactory | assess工厂 | ⬜ | |
| `maindataFacade` | MaindataFacade | 主数据门面 | ⬜ | |
| `messageService` | MessageService | 消息服务 | ⬜ | |
| `accessAssessDetailRelationService` | AccessAssessDetailRelationService | 访问assess明细关系服务 | ⬜ | |

---

### 261. VendorAccessMaterialTemplateEntity

**标准化名称**: `vendoraccessmaterialtemplate`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @author minghao.bai1

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessMaterialTemplateEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| (无属性) | - | - | - | - |

---

### 262. VendorAccessTemplateEntity

**标准化名称**: `vendoraccesstemplate`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴准入模版实体实体;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessTemplateEntity.java`

**关系统计**:

- 总关系数: 16
- 出向关系: 13
- 入向关系: 3

**出向关系类型**:

- `queries_get`: 1
- `queries_other`: 9
- `queries_select`: 3

**入向关系类型**:

- `queries_other`: 2
- `queries_select`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `logRecordRepository` | LogRecordRepository | 日志record仓储 | ⬜ | |
| `vendorAccessTemplateCategoryInfraService` | AccessTemplateCategoryInfraService | 供应商访问模板品类infra服务 | ⬜ | |
| `templateName` | String | 模板名称 | ⬜ | |
| `templateCode` | String | 模板编码 | ⬜ | |
| `status` | AccessTemplateStatusEnum | 状态 | ⬜ | |
| `applyRules` | VendorAccessTemplateApplyRulesEntity | 申请rules | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `isDeleted` | Integer | 是否删除 | ⬜ | |
| `vendorAccessTemplateRepository` | VendorAccessTemplateRepository | 供应商访问模板仓储 | ⬜ | |
| `impulseSenderFacade` | ImpulseSenderFacade | impulse门面 | ⬜ | |
| `accessTemplateItemRepositoryImpl` | AccessTemplateItemRepositoryImpl | 访问模板项仓储impl | ⬜ | |
| `templateCategoryRepositoryImpl` | AccessTemplateCategoryRepositoryImpl | 模板品类仓储impl | ⬜ | |
| `vendorAccessTemplateConverter` | VendorAccessTemplateConverter | 供应商访问模板转换器 | ⬜ | |
| `accessTemplateInfraService` | AccessTemplateInfraService | 访问模板infra服务 | ⬜ | |
| `templateOperationLogInfraService` | VendorAccessTemplateOperationLogInfraService | 模板operation日志infra服务 | ⬜ | |

---

### 263. VendorAccessTemplateApplyRulesEntity

**标准化名称**: `vendoraccesstemplateapplyrules`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessTemplateApplyRulesEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `existsAccessApplyRange` | String | 是访问申请range | ⬜ | |
| `calculateRule` | String | calculaterule | ⬜ | |

---

### 264. VendorAccessTemplateCategoryEntity

**标准化名称**: `vendoraccesstemplatecategory`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 准入模版关联品类实体;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessTemplateCategoryEntity.java`

**关系统计**:

- 总关系数: 3
- 出向关系: 0
- 入向关系: 3

**入向关系类型**:

- `queries_get`: 1
- `queries_other`: 1
- `queries_select`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `accessTemplateId` | Long | 模板ID | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `level` | Integer | level | ⬜ | |
| `categoryBizType` | String | 品类业务类型 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `isDeleted` | Integer | 是否删除 | ⬜ | |

---

### 265. VendorAccessTemplateItemEntity

**标准化名称**: `vendoraccesstemplateitem`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 准入模版评估项实体;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessTemplateItemEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 0
- 入向关系: 2

**入向关系类型**:

- `queries_other`: 1
- `queries_select`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `accessTemplateId` | Long | 模板ID | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `assessName` | String | assess名称 | ⬜ | |
| `dimensionType` | AccessTemplateTypeEnum | 维度类型 | ⬜ | |
| `assessMode` | AccessTemplateModeEnum | assess模式 | ⬜ | |
| `assessUserAccount` | String | 用户数量 | ⬜ | |
| `resultPeriodValidity` | JSONObject | result周期ID | ⬜ | |
| `assessResult` | AssessResultEnum | assessresult | ⬜ | |
| `deviationPeriodValidity` | String | 偏差周期ID | ⬜ | |
| `unqualifiedSetting` | AssessResultEnum | unqualified设置 | ⬜ | |
| `assessTemplateFileName` | String | 文件名称 | ⬜ | |
| `assessTemplateFileId` | Long | 文件ID | ⬜ | |
| `assessTemplateFileUuid` | String | 文件ID | ⬜ | |
| `uploadAttachLeastNum` | Integer | 已上传附件least编号 | ⬜ | |
| `note` | String | 编号 | ⬜ | |
| `isAffectAccessStatus` | Boolean | 是否状态 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `isDeleted` | Integer | 是否删除 | ⬜ | |

---

### 266. VendorAccessTemplateOperationLogEntity

**标准化名称**: `vendoraccesstemplateoperationlog`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 初始化文件生成状态

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessTemplateOperationLogEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `accessTemplateId` | Long | 模板ID | ⬜ | |
| `accessTemplateCode` | String | 模板编码 | ⬜ | |
| `accessTemplateVersion` | Long | 访问模板版本 | ⬜ | |
| `operationType` | AccessTemplateOperationTypeEnum | operation类型 | ⬜ | |
| `accessTemplateDetail` | AccessTemplateHistoryVersionDetailEntity | 访问模板明细 | ⬜ | |
| `fileGenerateStatus` | FileGenerateStatusEnum | 文件生成状态 | ⬜ | |
| `operationTime` | LocalDateTime | operation时间 | ⬜ | |
| `operator` | String | 操作人 | ⬜ | |
| `logInfraService` | VendorAccessTemplateOperationLogInfraService | 日志infra服务 | ⬜ | |
| `logConverter` | VendorAccessTemplateOperationLogConverter | 日志转换器 | ⬜ | |

---

### 267. VendorAccessTemplateRulesEntity

**标准化名称**: `vendoraccesstemplaterules`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorAccessTemplateRulesEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `existsAccessApplyRange` | String | 是访问申请range | ⬜ | |
| `calculateRule` | String | calculaterule | ⬜ | |

---

### 268. VendorAssessDetailEntity

**标准化名称**: `vendorassessdetail`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴评估细节实体;

**包路径**: `com.nio.srm.gps.vendor.domain.assess.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/assess/entity/VendorAssessDetailEntity.java`

**关系统计**:

- 总关系数: 2
- 出向关系: 2
- 入向关系: 0

**出向关系类型**:

- `queries_other`: 2

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorId` | Long | 供应商ID | ⬜ | |
| `assessCode` | String | assess编码 | ⬜ | |
| `deviationCode` | String | 偏差编码 | ⬜ | |
| `assessName` | String | assess名称 | ⬜ | |
| `gpsCategoryName` | String | GPS品类名称 | ⬜ | |
| `accessInfoId` | Long | 信息ID | ⬜ | |
| `dimensionType` | AccessTemplateTypeEnum | 维度类型 | ⬜ | |
| `assessUserAccount` | String | 用户数量 | ⬜ | |
| `assessMode` | AccessTemplateModeEnum | assess模式 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `assessResult` | AssessResultEnum | assessresult | ⬜ | |
| `unqualifiedSetting` | AssessResultEnum | unqualified设置 | ⬜ | |
| `periodValidity` | LocalDateTime | 周期ID | ⬜ | |
| `assessTime` | LocalDateTime | assess时间 | ⬜ | |
| `receiptsGenerateTime` | LocalDateTime | 比率时间 | ⬜ | |
| `status` | AssessStatusEnum | 状态 | ⬜ | |
| `isDeviation` | Integer | 是否偏差 | ⬜ | |
| `note` | String | 编号 | ⬜ | |
| `assessTemplateFile` | String | assess模板文件 | ⬜ | |
| `assessDeviationFile` | String | assess偏差文件 | ⬜ | |
| `deviationReason` | String | 偏差reason | ⬜ | |
| `improvement` | String | improvement | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `industry` | String | 行业 | ⬜ | |
| `brand` | String | 品牌 | ⬜ | |
| `categoryBizType` | String | 品类业务类型 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `accessTemplateId` | Long | 模板ID | ⬜ | |
| `vendorStatus` | VendorStatusEnum | 供应商状态 | ⬜ | |
| `assessVersion` | Integer | assess版本 | ⬜ | |
| `gpsCategoryId` | String | GPS品类ID | ⬜ | |
| `templateItemId` | Long | 项ID | ⬜ | |
| `isExpired` | Integer | 是否过期 | ⬜ | |
| `deviationStatus` | String | 偏差状态 | ⬜ | |
| `rollbackMessage` | String | rollback消息 | ⬜ | |
| `resultPeriodValidity` | JSONObject | result周期ID | ⬜ | |
| `uploadAttachLeastNum` | Integer | 已上传附件least编号 | ⬜ | |
| `assessTemplateFileName` | String | 文件名称 | ⬜ | |
| `assessTemplateFileId` | Long | 文件ID | ⬜ | |
| `assessTemplateFileUuid` | String | 文件ID | ⬜ | |
| `assessManufactureInfo` | AssessManufacturerEntity | assessmanufacture信息 | ⬜ | |
| `reassessFlag` | Boolean | reassess标志 | ⬜ | |
| `vendorAccessTemplateRepository` | VendorAccessTemplateRepository | 供应商访问模板仓储 | ⬜ | |
| `vendorAssessDetailRepository` | VendorAssessDetailRepository | 供应商assess明细仓储 | ⬜ | |
| `definedConvertingUtils` | DefinedConvertingUtils | definedconverting工具 | ⬜ | |
| `vendorAccessInfoRepository` | VendorAccessInfoRepository | 供应商访问信息仓储 | ⬜ | |
| `vendorInfoFacade` | VendorInfoFacade | 供应商信息门面 | ⬜ | |
| `vendorAccessInfo` | VendorAccessInfoEntity | 供应商访问信息 | ⬜ | |
| `accessAssessDetailRelationMapper` | AccessAssessDetailRelationMapper | 访问assess明细关系映射器 | ⬜ | |
| `vendorAssessDetailMapper` | VendorAssessDetailMapper | 供应商assess明细映射器 | ⬜ | |
| `vendorAccessInfoMapper` | VendorAccessInfoMapper | 供应商访问信息映射器 | ⬜ | |
| `accessInfoInfraService` | AccessInfoInfraService | 访问信息infra服务 | ⬜ | |
| `sapFacade` | SapFacade | SAP门面 | ⬜ | |
| `vendorAccessTemplateItemMapper` | VendorAccessTemplateItemMapper | 供应商访问模板项映射器 | ⬜ | |
| `vendorAccessMaterialMapper` | VendorAccessMaterialMapper | 供应商访问物料映射器 | ⬜ | |
| `vendorAccessMaterialfraServiceImpl` | VendorAccessMaterialfraServiceImpl | 供应商访问物料服务impl | ⬜ | |
| `accessMaterialAttachRelationServiceImpl` | AccessMaterialAttachRelationServiceImpl | 访问物料附件关系服务impl | ⬜ | |
| `assessDetailRelationRepositoryImpl` | AssessDetailRelationRepositoryImpl | assess明细关系仓储impl | ⬜ | |
| `vendorAccessMaterialEntity` | VendorAccessMaterialEntity | 供应商访问物料 | ⬜ | |
| `messageService` | MessageService | 消息服务 | ⬜ | |
| `assessDetailInfraService` | AssessDetailInfraService | assess明细infra服务 | ⬜ | |
| `accessMaterialTemplateMapper` | AccessMaterialTemplateMapper | 访问物料模板映射器 | ⬜ | |
| `accessAssessDetailRelationServiceImpl` | AccessAssessDetailRelationServiceImpl | 访问assess明细关系服务impl | ⬜ | |
| `vendorAccessTemplateCategoryMapper` | VendorAccessTemplateCategoryMapper | 供应商访问模板品类映射器 | ⬜ | |
| `vendorAccessMaterialRepository` | VendorAccessMaterialRepository | 供应商访问物料仓储 | ⬜ | |
| `pimsFacade` | PimsFacade | PIMS门面 | ⬜ | |
| `riskFacade` | RiskFacade | 是门面 | ⬜ | |
| `executor` | Executor | executor | ⬜ | |
| `websiteUrl` | String | websiteURL | ⬜ | |
| `maindataFacade` | MaindataFacade | 主数据门面 | ⬜ | |

---

### 269. VendorChangeInfoEntity

**标准化名称**: `vendorchangeinfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴变更领域对象 完成 application层 委托的功能  (与领域服务不是同一概念)

**包路径**: `com.nio.srm.gps.vendor.domain.changeinfo.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/changeinfo/entity/VendorChangeInfoEntity.java`

**关系统计**:

- 总关系数: 31
- 出向关系: 14
- 入向关系: 17

**出向关系类型**:

- `involves_create`: 1
- `involves_other`: 3
- `involves_update`: 2
- `publishes`: 8

**入向关系类型**:

- `involves_create`: 1
- `involves_other`: 7
- `involves_query`: 1
- `involves_update`: 4
- `queries_get`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `changeCode` | String | 变更编码 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorId` | Long | 供应商ID | ⬜ | |
| `vendorUuid` | String | 供应商ID | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `status` | VendorChangeStatusEnum | 状态 | ⬜ | |
| `initiator` | String | initiator | ⬜ | |
| `initiatorAccount` | String | initiatorAc数量 | ⬜ | |
| `initiatorNameCn` | String | initiator名称cn | ⬜ | |
| `message` | String | 消息 | ⬜ | |
| `logRecordRepository` | LogRecordRepository | 日志record仓储 | ⬜ | |
| `impulseSenderFacade` | ImpulseSenderFacade | impulse门面 | ⬜ | |
| `sapFacade` | SapFacade | SAP门面 | ⬜ | |
| `executor` | Executor | executor | ⬜ | |
| `vendorChangeFacade` | VendorChangeFacade | 供应商变更门面 | ⬜ | |
| `vendorInfo` | VendorInfoEntity | 供应商信息 | ⬜ | |
| `vendorInfoBefore` | VendorInfoEntity | 供应商信息之前 | ⬜ | |
| `updateDiffData` | String | 更新diff数据 | ⬜ | |
| `beforeUpdateData` | String | 之前更新数据 | ⬜ | |
| `updateData` | String | 更新数据 | ⬜ | |
| `updateFieldData` | String | 更新field数据 | ⬜ | |
| `vendorInfoFacade` | VendorInfoFacade | 供应商信息门面 | ⬜ | |
| `messageService` | MessageService | 消息服务 | ⬜ | |
| `vendorInfoConverter` | VendorInfoConverter | 供应商信息转换器 | ⬜ | |
| `vendorChangInfoConverter` | VendorChangInfoConverter | 供应商汇率信息转换器 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `type` | String | 类型 | ⬜ | |
| `auditTime` | LocalDateTime | 审核时间 | ⬜ | |
| `vendorInfoOld` | ChangeInfoVO | 供应商信息old | ⬜ | |
| `vendorCodeSequenceId` | Long | 编码ID | ⬜ | |

---

### 270. VendorChangeInfoReserveEntity

**标准化名称**: `vendorchangeinforeserve`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 变更单号

**包路径**: `com.nio.srm.gps.vendor.domain.changeinfo.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/changeinfo/entity/VendorChangeInfoReserveEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 1
- 入向关系: 0

**出向关系类型**:

- `involves_query`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `executor` | Executor | executor | ⬜ | |
| `changeCode` | String | 变更编码 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorId` | Long | 供应商ID | ⬜ | |
| `vendorUuid` | String | 供应商ID | ⬜ | |
| `initiator` | String | initiator | ⬜ | |
| `initiatorAccount` | String | initiatorAc数量 | ⬜ | |
| `initiatorNameCn` | String | initiator名称cn | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `nameEgLang` | String | 名称品类lang | ⬜ | |
| `status` | VendorChangeStatusEnum | 状态 | ⬜ | |
| `message` | String | 消息 | ⬜ | |
| `vendorInfo` | VendorInfoEntity | 供应商信息 | ⬜ | |
| `vendorInfoOld` | VendorInfoEntity | 供应商信息old | ⬜ | |
| `beforeUpdateData` | String | 之前更新数据 | ⬜ | |
| `updateData` | String | 更新数据 | ⬜ | |
| `updateFieldData` | String | 更新field数据 | ⬜ | |
| `updateDiffData` | String | 更新diff数据 | ⬜ | |
| `vendorInfoConverter` | VendorInfoConverter | 供应商信息转换器 | ⬜ | |
| `vendorChangInfoConverter` | VendorChangInfoConverter | 供应商汇率信息转换器 | ⬜ | |
| `vendorInfoGlobalizationExchangeUtils` | VendorInfoGlobalizationExchangeUtils | 供应商信息全球汇率工具 | ⬜ | |
| `vendorMainDataCheckHelper` | VendorMainDataCheckHelper | 供应商主数据check助手 | ⬜ | |
| `vendorBizTagHelper` | VendorBizTagHelper | 供应商业务TA助手 | ⬜ | |

---

### 271. VendorContactPersonEntity

**标准化名称**: `vendorcontactperson`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴联系人实体;

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorContactPersonEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorId` | Long | 供应商ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `name` | String | 名称 | ⬜ | |
| `position` | String | 采购订单 | ⬜ | |
| `duty` | String | duty | ⬜ | |
| `email` | String | 邮箱 | ⬜ | |
| `telephone` | String | 电话 | ⬜ | |
| `mobilePhone` | String | mobile电话 | ⬜ | |
| `telephoneExtension` | String | 电话 | ⬜ | |
| `isDefault` | Boolean | 是否Default | ⬜ | |

---

### 272. VendorExtInfoEntity

**标准化名称**: `vendorextinfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴关联的基本信息扩展表;

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorExtInfoEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorId` | Long | 供应商ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |

---

### 273. VendorFactoryEntity

**标准化名称**: `vendorfactory`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴关联工厂信息;

**包路径**: `com.nio.srm.gps.vendor.domain.access.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/access/entity/VendorFactoryEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 0
- 入向关系: 1

**入向关系类型**:

- `queries_get`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorId` | Long | 供应商ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `factoryName` | String | 工厂名称 | ⬜ | |
| `factoryCnName` | String | 工厂名称 | ⬜ | |
| `factoryEnName` | String | 工厂名称 | ⬜ | |
| `factoryAddress` | String | 工厂地址 | ⬜ | |
| `tradeType` | String | 贸易类型 | ⬜ | |
| `paymentPeriod` | String | 支付周期 | ⬜ | |
| `paymentType` | PaymentTypeDTO | 支付类型 | ⬜ | |
| `currency` | String | 货币 | ⬜ | |
| `companyCode` | String | 公司编码 | ⬜ | |
| `companyCnName` | String | 公司名称 | ⬜ | |
| `sources` | String | 来源 | ⬜ | |

---

### 274. VendorFiledJointAssistEntity

**标准化名称**: `vendorfiledjointassist`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 获取合作伙伴信息变化字段拼接辅助类

**包路径**: `com.nio.srm.gps.vendor.domain.changeinfo.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/changeinfo/entity/VendorFiledJointAssistEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| (无属性) | - | - | - | - |

---

### 275. VendorFinanceInfoEntity

**标准化名称**: `vendorfinanceinfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴财务信息实体;

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorFinanceInfoEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorId` | Long | 供应商ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `bankDetailIdentification` | String | bank明细ID | ⬜ | |
| `bankAccountName` | String | 数量名称 | ⬜ | |
| `bankAccountNo` | String | 数量编号 | ⬜ | |
| `iban` | String | iban | ⬜ | |
| `bankName` | String | bank名称 | ⬜ | |
| `interBankNo` | String | interBank编号 | ⬜ | |
| `bankCountryId` | Long | 数量ID | ⬜ | |
| `bankProvinceId` | Long | CEID | ⬜ | |
| `bankCityId` | Long | bankCityID | ⬜ | |
| `bankCountry` | String | bank账号 | ⬜ | |
| `sapBankCountryCode` | String | 数量编码 | ⬜ | |
| `bankProvince` | String | bankCE | ⬜ | |
| `sapBankProvinceCode` | String | SAP编码 | ⬜ | |
| `bankCity` | String | bankcity | ⬜ | |
| `sapBankCityCode` | String | SAP编码 | ⬜ | |
| `swiftCode` | String | swift编码 | ⬜ | |

---

### 276. VendorInfoEntity

**标准化名称**: `vendorinfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴领域对象 完成 application层 委托的功能  (与领域服务不是同一概念)

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorInfoEntity.java`

**关系统计**:

- 总关系数: 41
- 出向关系: 23
- 入向关系: 18

**出向关系类型**:

- `involves_create`: 3
- `involves_other`: 7
- `involves_query`: 2
- `involves_update`: 5
- `publishes`: 6

**入向关系类型**:

- `involves_create`: 3
- `involves_other`: 4
- `involves_query`: 1
- `involves_update`: 4
- `involves_validate`: 1
- `queries_exists`: 1
- `queries_get`: 3
- `queries_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorUuid` | String | 供应商ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `stage` | VendorStageEnum | 阶段 | ⬜ | |
| `duns` | String | duns | ⬜ | |
| `creditCode` | String | credit编码 | ⬜ | |
| `identityCardNo` | String | ID编号 | ⬜ | |
| `nameEgLang` | String | 名称品类lang | ⬜ | |
| `source` | RegisterSourceEnum | 来源 | ⬜ | |
| `nioCompany` | String | nio公司 | ⬜ | |
| `nioCompanyEn` | String | 公司英文 | ⬜ | |
| `enterpriseNature` | String | nature | ⬜ | |
| `countryId` | Long | 数量ID | ⬜ | |
| `provinceId` | Long | CEID | ⬜ | |
| `cityId` | Long | cityID | ⬜ | |
| `districtId` | Long | 是ID | ⬜ | |
| `country` | String | 账号 | ⬜ | |
| `sapCountryCode` | String | 数量编码 | ⬜ | |
| `province` | String | CE | ⬜ | |
| `sapProvinceCode` | String | SAP编码 | ⬜ | |
| `city` | String | city | ⬜ | |
| `sapCityCode` | String | SAP编码 | ⬜ | |
| `address` | String | 地址 | ⬜ | |
| `addressEgLang` | String | 地址品类lang | ⬜ | |
| `registerAddress` | String | 是地址 | ⬜ | |
| `registerAddressEgLang` | String | 是地址品类lang | ⬜ | |
| `district` | String | 是 | ⬜ | |
| `region` | String | region | ⬜ | |
| `zipcode` | String | IP编码 | ⬜ | |
| `website` | String | website | ⬜ | |
| `vat` | String | vat | ⬜ | |
| `vatRate` | String | vat率 | ⬜ | |
| `gtc` | String | gtc | ⬜ | |
| `gtcUnsignedReason` | String | gtc未签署reason | ⬜ | |
| `legalPerson` | String | 法务person | ⬜ | |
| `registrationCode` | String | 是编码 | ⬜ | |
| `businessScope` | String | BUscope | ⬜ | |
| `vendorIntroduction` | String | 供应商introduction | ⬜ | |
| `registeredCapital` | String | 是TA | ⬜ | |
| `paidInCapital` | String | ID提名TA | ⬜ | |
| `certificationStatus` | CertificationStatusEnum | CE状态 | ⬜ | |
| `certificationType` | CertificationEnum | CE类型 | ⬜ | |
| `changeStatus` | VendorChangeStatusEnum | 变更状态 | ⬜ | |
| `vendorSource` | String | 供应商来源 | ⬜ | |
| `title` | String | title | ⬜ | |
| `isSubmit` | Boolean | 是否Submit | ⬜ | |
| `buyerEmail` | String | 采购员邮箱 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `auditPassTime` | LocalDateTime | 审核时间 | ⬜ | |
| `language` | String | language | ⬜ | |
| `vendorExtInfo` | VendorExtInfoEntity | 供应商扩展信息 | ⬜ | |
| `status` | VendorStatusEnum | 状态 | ⬜ | |
| `message` | String | 消息 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `multiLangVendorName` | String | 供应商名称 | ⬜ | |
| `logRecordRepository` | LogRecordRepository | 日志record仓储 | ⬜ | |
| `vendorInfoFacade` | VendorInfoFacade | 供应商信息门面 | ⬜ | |
| `certificationInfoRepository` | CertificationInfoRepository | CE信息仓储 | ⬜ | |
| `attachRelationrepository` | VendorQualificationAttachRelationRepository | 附件关系 | ⬜ | |
| `purchaseFacade` | PurchaseFacade | 采购门面 | ⬜ | |
| `fileFacade` | FileFacade | 文件门面 | ⬜ | |
| `qiXinFacade` | QiXinFacade | qixin门面 | ⬜ | |
| `messageService` | MessageService | 消息服务 | ⬜ | |
| `vendorInviteFacade` | VendorInviteFacade | 供应商invite门面 | ⬜ | |
| `clmsFacade` | ClmsFacade | clms门面 | ⬜ | |
| `serialSequenceFacade` | SerialSequenceFacade | serial序列门面 | ⬜ | |
| `vendorInfoConverter` | VendorInfoConverter | 供应商信息转换器 | ⬜ | |
| `vendorInfoGlobalizationExchangeUtils` | VendorInfoGlobalizationExchangeUtils | 供应商信息全球汇率工具 | ⬜ | |
| `gpsFacade` | GpsFacade | GPS门面 | ⬜ | |
| `vendorCertificationFacade` | VendorCertificationFacade | 供应商CE门面 | ⬜ | |
| `vendorChangeFacade` | VendorChangeFacade | 供应商变更门面 | ⬜ | |
| `impulseSenderFacade` | ImpulseSenderFacade | impulse门面 | ⬜ | |
| `websiteUrl` | String | websiteURL | ⬜ | |
| `vendorCodeSequenceId` | Long | 编码ID | ⬜ | |
| `maindataFacade` | MaindataFacade | 主数据门面 | ⬜ | |
| `vendorBizInfoFacade` | VendorBizInfoFacade | 供应商业务信息门面 | ⬜ | |
| `vendorMainDataCheckHelper` | VendorMainDataCheckHelper | 供应商主数据check助手 | ⬜ | |
| `vendorBizTagHelper` | VendorBizTagHelper | 供应商业务TA助手 | ⬜ | |
| `nioCompanyId` | Long | 公司ID | ⬜ | |
| `contractStatusList` | String | 合同状态列表 | ⬜ | |
| `vendorType` | String | 供应商类型 | ⬜ | |
| `isInvited` | Boolean | 是否Invited | ⬜ | |
| `isManufacturerInfoSubmit` | Boolean | 是否信息 | ⬜ | |
| `bizInfoVO` | BizInfoVO | 业务信息凭证 | ⬜ | |
| `qiXinBaoBusinessInfoVO` | QiXinBaoBusinessInfoVO | qixinbaoBU信息凭证 | ⬜ | |
| `vendorInfoRepository` | IVendorInfoRepository | 供应商信息仓储 | ⬜ | |
| `oldGpsFacade` | OldGpsFacade | oldGPS门面 | ⬜ | |
| `sequenceFacade` | SerialSequenceFacade | 序列门面 | ⬜ | |
| `domainEventPublisher` | DomainEventPublisher | 主发布者 | ⬜ | |
| `bizInfoFacade` | VendorBizInfoFacade | 业务信息门面 | ⬜ | |
| `commonService` | CommonService | common服务 | ⬜ | |
| `sequenceServiceFacade` | SequenceServiceFacade | 序列服务门面 | ⬜ | |
| `certificationInfoFacade` | CertificationInfoFacade | CE信息门面 | ⬜ | |
| `certificationConverter` | CertificationConverter | CE转换器 | ⬜ | |
| `invitationRepository` | IInvitationRepository | TA仓储 | ⬜ | |

---

### 277. VendorInternalPartnerEntity

**标准化名称**: `vendorinternalpartner`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @author reno.zeng

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorInternalPartnerEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `nameEgLang` | String | 名称品类lang | ⬜ | |
| `bankDetailIdentification` | String | bank明细ID | ⬜ | |
| `bankAccountName` | String | 数量名称 | ⬜ | |
| `bankAccountNo` | String | 数量编号 | ⬜ | |
| `iban` | String | iban | ⬜ | |
| `bankName` | String | bank名称 | ⬜ | |
| `interBankNo` | String | interBank编号 | ⬜ | |
| `bankCountry` | String | bank账号 | ⬜ | |
| `bankProvince` | String | bankCE | ⬜ | |
| `bankCity` | String | bankcity | ⬜ | |
| `country` | String | 账号 | ⬜ | |
| `swiftCode` | String | swift编码 | ⬜ | |
| `sapFacade` | SapFacade | SAP门面 | ⬜ | |

---

### 278. VendorInviteEntity

**标准化名称**: `vendorinvite`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴邀请链接实体;

**包路径**: `com.nio.srm.gps.vendor.domain.invitation.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/invitation/entity/VendorInviteEntity.java`

**关系统计**:

- 总关系数: 1
- 出向关系: 1
- 入向关系: 0

**出向关系类型**:

- `involves_validate`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `logRecordRepository` | LogRecordRepository | 日志record仓储 | ⬜ | |
| `impulseSenderFacade` | ImpulseSenderFacade | impulse门面 | ⬜ | |
| `vendorInviteFacade` | VendorInviteFacade | 供应商invite门面 | ⬜ | |
| `gpsFacade` | GpsFacade | GPS门面 | ⬜ | |
| `vendorInfoFacade` | VendorInfoFacade | 供应商信息门面 | ⬜ | |
| `maindataFacade` | MaindataFacade | 主数据门面 | ⬜ | |
| `vendorInfoGlobalizationExchangeUtils` | VendorInfoGlobalizationExchangeUtils | 供应商信息全球汇率工具 | ⬜ | |
| `vendorBizTagHelper` | VendorBizTagHelper | 供应商业务TA助手 | ⬜ | |
| `invitationCode` | String | TA编码 | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `vendorContact` | String | 供应商TA | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `duns` | String | duns | ⬜ | |
| `creditCode` | String | credit编码 | ⬜ | |
| `title` | String | title | ⬜ | |
| `identityCardNo` | String | ID编号 | ⬜ | |
| `contactPhone` | String | TA电话 | ⬜ | |
| `contactEmail` | String | TA邮箱 | ⬜ | |
| `buyerAccount` | String | 采购员账号 | ⬜ | |
| `buyerEmail` | String | 采购员邮箱 | ⬜ | |
| `buyerName` | String | 采购员名称 | ⬜ | |
| `status` | VendorInviteStatusEnum | 状态 | ⬜ | |
| `vendorUuid` | String | 供应商ID | ⬜ | |
| `country` | String | 账号 | ⬜ | |
| `sapCountryCode` | String | 数量编码 | ⬜ | |
| `province` | String | CE | ⬜ | |
| `sapProvinceCode` | String | SAP编码 | ⬜ | |
| `countryId` | Long | 数量ID | ⬜ | |
| `provinceId` | Long | CEID | ⬜ | |
| `language` | String | language | ⬜ | |
| `source` | String | 来源 | ⬜ | |
| `sourceNumber` | String | 来源编号 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `messageService` | MessageService | 消息服务 | ⬜ | |
| `qiXinFacade` | QiXinFacade | qixin门面 | ⬜ | |
| `vendorMainDataCheckHelper` | VendorMainDataCheckHelper | 供应商主数据check助手 | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |

---

### 279. VendorManufacturerEntity

**标准化名称**: `vendormanufacturer`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴制造主体实体;

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorManufacturerEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorId` | Long | 供应商ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `nameCnLang` | String | 名称cnlang | ⬜ | |
| `nameEgLang` | String | 名称品类lang | ⬜ | |
| `manufacturerCode` | String | manufacturer编码 | ⬜ | |
| `duns` | String | duns | ⬜ | |
| `creditCodeOrVat` | String | credit编码订单vat | ⬜ | |
| `countryId` | Long | 数量ID | ⬜ | |
| `provinceId` | Long | CEID | ⬜ | |
| `sapCountryCode` | String | 数量编码 | ⬜ | |
| `sapProvinceCode` | String | SAP编码 | ⬜ | |
| `cityId` | Long | cityID | ⬜ | |
| `districtId` | Long | 是ID | ⬜ | |
| `country` | String | 账号 | ⬜ | |
| `province` | String | CE | ⬜ | |
| `city` | String | city | ⬜ | |
| `district` | String | 是 | ⬜ | |
| `address` | String | 地址 | ⬜ | |
| `firstRelateVendorCode` | String | 供应商编码 | ⬜ | |
| `employeeCount` | Integer | employee数量 | ⬜ | |
| `yields` | BigDecimal | yields | ⬜ | |

---

### 280. VendorOnlineBiddingEntity

**标准化名称**: `vendoronlinebidding`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 竞价单号

**包路径**: `com.nio.srm.gps.sourcing.domain.onlinebidding.vendor`

**文件路径**: `com/nio/srm/gps/sourcing/domain/onlinebidding/vendor/VendorOnlineBiddingEntity.java`

**关系统计**:

- 总关系数: 25
- 出向关系: 16
- 入向关系: 9

**出向关系类型**:

- `involves_other`: 9
- `involves_query`: 3
- `queries_find`: 2
- `queries_select`: 2

**入向关系类型**:

- `involves_other`: 5
- `involves_query`: 2
- `queries_find`: 1
- `queries_select`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `onlineBiddingCode` | String | ID编码 | ⬜ | |
| `gpsRfqId` | Long | GPS询价单ID | ⬜ | |
| `gpsRfqCode` | String | GPS询价单编码 | ⬜ | |
| `onlineBiddingId` | Long | IDID | ⬜ | |
| `quoteRoundId` | Long | 报价ID | ⬜ | |
| `quoteRoundNo` | Integer | 报价编号 | ⬜ | |
| `onlineBiddingType` | String | 在线竞价类型 | ⬜ | |
| `test` | Boolean | 测试 | ⬜ | |
| `publishTime` | LocalDateTime | 发布时间 | ⬜ | |
| `startTime` | LocalDateTime | 开始时间 | ⬜ | |
| `startingMode` | OnlineBiddingStartMode | 开始模式 | ⬜ | |
| `endTime` | LocalDateTime | 结束时间 | ⬜ | |
| `needEcho` | Boolean | 是否需要回音 | ⬜ | |
| `echoEndTime` | LocalDateTime | 英文时间 | ⬜ | |
| `minEchoVendorCount` | Integer | 供应商数量 | ⬜ | |
| `onlineBiddingStatus` | OnlineBiddingVendorStatus | 在线竞价状态 | ⬜ | |
| `durationMinutes` | Integer | 持续时间分钟 | ⬜ | |
| `intervalMinutes` | Integer | 间隔分钟 | ⬜ | |
| `setIntervalTime` | Boolean | 间隔时间 | ⬜ | |
| `eachBiddingDurationMinutes` | Integer | 每个竞价持续时间分钟 | ⬜ | |
| `delayRule` | String | 延迟rule | ⬜ | |
| `delayMinutes` | Integer | 延迟分钟 | ⬜ | |
| `delayCount` | Integer | 延迟数量 | ⬜ | |
| `currentDelayCount` | Integer | 英文数量 | ⬜ | |
| `setStartPrice` | Boolean | 开始价格 | ⬜ | |
| `setFloorPrice` | Boolean | 设置价格 | ⬜ | |
| `rankMode` | RankModeType | 排名模式 | ⬜ | |
| `deleted` | Boolean | 是否删除 | ⬜ | |
| `sealedBidding` | Boolean | 密封竞价 | ⬜ | |
| `roundDeadlineTime` | LocalDateTime | 轮次时间 | ⬜ | |
| `apportionFlag` | Boolean | 分摊标志 | ⬜ | |
| `beginBiddingTime` | LocalDateTime | ID时间 | ⬜ | |
| `lowestQuoteTimes` | Integer | 最低报价时间 | ⬜ | |
| `canDelayBeforeEndMinutes` | Integer | 可以延迟之前结束分钟 | ⬜ | |
| `onlineBiddingVendorStatus` | String | 在线竞价供应商状态 | ⬜ | |
| `biddingTimes` | Integer | 竞价时间 | ⬜ | |
| `materialLogisticsPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `vendorOnlineBiddingRepository` | VendorOnlineBiddingRepository | 供应商在线竞价仓储 | ⬜ | |
| `apolloConfigHelper` | ApolloConfigHelper | 采购订单配置助手 | ⬜ | |

---

### 281. VendorOnlineBiddingAttachmentEntity

**标准化名称**: `vendoronlinebiddingattachment`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 所属的竞价单id

**包路径**: `com.nio.srm.gps.sourcing.domain.onlinebidding.vendor`

**文件路径**: `com/nio/srm/gps/sourcing/domain/onlinebidding/vendor/VendorOnlineBiddingAttachmentEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `onlineBiddingId` | Long | IDID | ⬜ | |
| `onlineBiddingFileType` | String | 在线竞价文件类型 | ⬜ | |
| `required` | Boolean | required | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `fileId` | Long | 文件ID | ⬜ | |
| `fileName` | String | 文件名称 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `gpsVendorName` | String | 供应商名称 | ⬜ | |
| `confirmResult` | String | confirmresult | ⬜ | |
| `uploaded` | Boolean | 已上传 | ⬜ | |
| `createTime` | LocalDateTime | 创建时间 | ⬜ | |
| `createBy` | String | 创建人 | ⬜ | |
| `updateTime` | LocalDateTime | 更新时间 | ⬜ | |
| `updateBy` | String | 更新人 | ⬜ | |
| `version` | Long | 版本号 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `id` | Long | ID | ⬜ | |

---

### 282. VendorOnlineBiddingItemEntity

**标准化名称**: `vendoronlinebiddingitem`

**层级**: L2-Supporting

**推理中文含义**: ID

**当前描述**: 所属竞价单ID

**包路径**: `com.nio.srm.gps.sourcing.domain.onlinebidding.vendor`

**文件路径**: `com/nio/srm/gps/sourcing/domain/onlinebidding/vendor/VendorOnlineBiddingItemEntity.java`

**关系统计**:

- 总关系数: 4
- 出向关系: 0
- 入向关系: 4

**入向关系类型**:

- `involves_other`: 3
- `involves_query`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `onlineBiddingId` | Long | IDID | ⬜ | |
| `gpsMaterialId` | Long | 物料ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `onlineBiddingCode` | String | ID编码 | ⬜ | |
| `itemNumber` | Integer | 项编号 | ⬜ | |
| `startPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `vendorBiddingStatus` | OnlineBiddingVendorStatus | 供应商竞价状态 | ⬜ | |
| `biddingTime` | LocalDateTime | 竞价时间 | ⬜ | |
| `noTaxPriceAmount` | BigDecimal | 编号金额 | ⬜ | |
| `taxRate` | BigDecimal | 税比率 | ⬜ | |
| `priceWithTaxAmount` | String | 价格金额 | ⬜ | |
| `floorPriceAmount` | BigDecimal | 价格金额 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialVersion` | String | 物料版本 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `biddingTimes` | Integer | 竞价时间 | ⬜ | |
| `ranking` | Integer | 排名 | ⬜ | |
| `isEffectivePrice` | Boolean | 是价格 | ⬜ | |
| `onlineBiddingHall` | OnlineBiddingHallVO | 在线竞价全部 | ⬜ | |
| `onlineBiddingMaterial` | OnlineBiddingMaterialVO | 在线竞价物料 | ⬜ | |
| `onlineBiddingVendor` | OnlineBiddingVendorVO | 在线竞价供应商 | ⬜ | |

---

### 283. VendorOtherQualificationEntity

**标准化名称**: `vendorotherqualification`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴其他资质实体;

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorOtherQualificationEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `vendorId` | Long | 供应商ID | ⬜ | |
| `sourceId` | Long | 来源ID | ⬜ | |
| `vendorCode` | String | 供应商编码 | ⬜ | |
| `classifyName` | String | 类别名称 | ⬜ | |
| `sort` | String | SOR | ⬜ | |
| `parentId` | Long | 英文ID | ⬜ | |
| `subClassifyName` | String | 类别名称 | ⬜ | |
| `isRequired` | Boolean | 是否Required | ⬜ | |
| `effectDate` | LocalDate | 生效日期 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireDate` | LocalDate | 过期日期 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `uploadTime` | LocalDateTime | 已上传时间 | ⬜ | |
| `uploadBy` | String | 已上传通过 | ⬜ | |
| `fileVersion` | Integer | 文件版本 | ⬜ | |
| `englishTemplateId` | String | 英文ID | ⬜ | |
| `englishTemplateUuid` | String | 英文ID | ⬜ | |
| `englishTemplateName` | String | 英文名称 | ⬜ | |
| `chineseTemplateId` | String | 模板ID | ⬜ | |
| `chineseTemplateUuid` | String | 模板ID | ⬜ | |
| `chineseTemplateName` | String | 模板名称 | ⬜ | |
| `chEgTemplateId` | String | 模板ID | ⬜ | |
| `chEgTemplateUuid` | String | 模板ID | ⬜ | |
| `chEgTemplateName` | String | 模板名称 | ⬜ | |
| `englishTemplateFile` | EnglishTemplateFile | 模板文件 | ⬜ | |
| `chineseTemplateFile` | ChineseTemplateFile | chinese模板文件 | ⬜ | |
| `chEgTemplateFile` | ChEgTemplateFile | 采购品类模板文件 | ⬜ | |

---

### 284. VendorQualificationFileConfigInfoEntity

**标准化名称**: `vendorqualificationfileconfiginfo`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: 合作伙伴文件配置;

**包路径**: `com.nio.srm.gps.vendor.domain.vendor.entity`

**文件路径**: `com/nio/srm/gps/vendor/domain/vendor/entity/VendorQualificationFileConfigInfoEntity.java`

**关系统计**:

- 总关系数: 0
- 出向关系: 0
- 入向关系: 0

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `qualificationFileConfigFacade` | VendorQualificationFileConfigFacade | qualification文件配置门面 | ⬜ | |
| `fileFacade` | FileFacade | 文件门面 | ⬜ | |
| `classifyName` | String | 类别名称 | ⬜ | |
| `sort` | Integer | SOR | ⬜ | |
| `parentId` | Long | 英文ID | ⬜ | |
| `subClassifyName` | String | 类别名称 | ⬜ | |
| `isRequired` | Boolean | 是否Required | ⬜ | |
| `englishTemplateId` | String | 英文ID | ⬜ | |
| `englishTemplateUuid` | String | 英文ID | ⬜ | |
| `englishTemplateName` | String | 英文名称 | ⬜ | |
| `chineseTemplateId` | String | 模板ID | ⬜ | |
| `chineseTemplateUuid` | String | 模板ID | ⬜ | |
| `chineseTemplateName` | String | 模板名称 | ⬜ | |
| `chEgTemplateId` | String | 模板ID | ⬜ | |
| `chEgTemplateUuid` | String | 模板ID | ⬜ | |
| `chEgTemplateName` | String | 模板名称 | ⬜ | |

---

### 285. VendorQuotaEntity

**标准化名称**: `vendorquota`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.quota`

**文件路径**: `com/nio/srm/gps/price/domain/quota/VendorQuotaEntity.java`

**关系统计**:

- 总关系数: 17
- 出向关系: 10
- 入向关系: 7

**出向关系类型**:

- `involves_convert`: 1
- `involves_create`: 1
- `involves_delete`: 2
- `involves_query`: 1
- `queries_other`: 4
- `queries_queryBy`: 1

**入向关系类型**:

- `involves_convert`: 1
- `involves_create`: 1
- `involves_delete`: 1
- `queries_other`: 4

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `quotaConfirmCode` | String | TA编码 | ⬜ | |
| `gpsVendorCode` | String | GPS供应商编码 | ⬜ | |
| `vendorName` | String | 供应商名称 | ⬜ | |
| `factoryCode` | String | 工厂编码 | ⬜ | |
| `factoryName` | String | 工厂名称 | ⬜ | |
| `gpsCategoryCode` | String | GPS品类编码 | ⬜ | |
| `categoryName` | String | 品类名称 | ⬜ | |
| `supplyStatus` | String | supply状态 | ⬜ | |
| `vehicleYear` | String | vehicleyear | ⬜ | |
| `partCode` | String | 部分编码 | ⬜ | |
| `partVersion` | String | 部分版本 | ⬜ | |
| `colorCode` | String | color编码 | ⬜ | |
| `materialCode` | String | 物料编码 | ⬜ | |
| `materialName` | String | 物料名称 | ⬜ | |
| `materialZhName` | String | 物料名称 | ⬜ | |
| `materialEnName` | String | 物料名称 | ⬜ | |
| `alternativeGroup` | String | alternative分组 | ⬜ | |
| `alternativeRelation` | String | alternative关系 | ⬜ | |
| `alternativeMaterialCode` | String | 物料编码 | ⬜ | |
| `alternativeMaterialName` | String | 物料名称 | ⬜ | |
| `primaryFlag` | Boolean | 采购申请标志 | ⬜ | |
| `businessQuotaAlternativeGroup` | String | BUTAalternative分组 | ⬜ | |
| `key1MaterialCode` | String | 物料编码 | ⬜ | |
| `key2MaterialCode` | String | 物料编码 | ⬜ | |
| `multiNomination` | Boolean | multi提名 | ⬜ | |
| `quota` | BigDecimal | TA | ⬜ | |
| `quotaStatus` | VendorQuotaStatus | TA状态 | ⬜ | |
| `quotaSource` | VendorQuotaSource | TA来源 | ⬜ | |
| `quotaSourceNo` | String | 来源编号 | ⬜ | |
| `quotaSourceItemId` | String | 项ID | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `sourceQuotaConfirmCode` | String | 来源编码 | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `bizMode` | BizMode | 业务模式 | ⬜ | |
| `extInfo` | VendorQuotaExtInfo | 扩展信息 | ⬜ | |

---

### 286. VendorQuotaApplicationEntity

**标准化名称**: `vendorquotaapplication`

**层级**: L2-Supporting

**推理中文含义**: 供应商

**当前描述**: @author zhongcheng.li

**包路径**: `com.nio.srm.gps.price.domain.quota.application`

**文件路径**: `com/nio/srm/gps/price/domain/quota/application/VendorQuotaApplicationEntity.java`

**关系统计**:

- 总关系数: 11
- 出向关系: 7
- 入向关系: 4

**出向关系类型**:

- `involves_convert`: 1
- `involves_create`: 2
- `involves_delete`: 1
- `involves_other`: 1
- `queries_queryBy`: 2

**入向关系类型**:

- `involves_convert`: 1
- `involves_create`: 1
- `involves_move`: 1
- `involves_other`: 1

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `applyCode` | String | 申请编码 | ⬜ | |
| `applicationBizType` | VendorQuotaApplicationBizType | 申请业务类型 | ⬜ | |
| `applyTime` | LocalDateTime | 申请时间 | ⬜ | |
| `effectTime` | LocalDateTime | 生效时间 | ⬜ | |
| `expireTime` | LocalDateTime | 过期时间 | ⬜ | |
| `applicantAccount` | String | 申请人账号 | ⬜ | |
| `applicantName` | String | 申请人名称 | ⬜ | |
| `applicationStatus` | VendorQuotaApplicationStatus | 申请状态 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |
| `ownerAccount` | String | 所属人账号 | ⬜ | |
| `industry` | IndustryEnum | 行业 | ⬜ | |
| `bizMode` | BizMode | 业务模式 | ⬜ | |
| `applyReason` | String | 申请reason | ⬜ | |
| `remark` | String | 备注 | ⬜ | |
| `vendorQuotaApplicationRepository` | VendorQuotaApplicationRepository | 供应商TA申请仓储 | ⬜ | |

---

### 287. WorkflowLogEntity

**标准化名称**: `workflowlog`

**层级**: L2-Supporting

**推理中文含义**: 工作流

**当前描述**: 是否删除

**包路径**: `com.nio.srm.gps.sourcing.domain.workflow`

**文件路径**: `com/nio/srm/gps/sourcing/domain/workflow/WorkflowLogEntity.java`

**关系统计**:

- 总关系数: 86
- 出向关系: 47
- 入向关系: 39

**出向关系类型**:

- `involves_create`: 3
- `involves_delete`: 1
- `involves_move`: 5
- `involves_other`: 8
- `involves_query`: 3
- `involves_update`: 3
- `involves_validate`: 2
- `queries_other`: 12
- `queries_queryBy`: 10

**入向关系类型**:

- `involves_create`: 3
- `involves_delete`: 1
- `involves_move`: 5
- `involves_other`: 9
- `involves_query`: 4
- `involves_update`: 3
- `involves_validate`: 2
- `queries_other`: 12

**校验状态**: ⬜ 待校验 | ✅ 已确认 | ❌ 需修正

**修正建议**: 

**属性列表**:

| 属性名 | 类型 | 推理中文含义 | 校验状态 | 修正建议 |
|--------|------|-------------|---------|---------|
| `isDeleted` | Boolean | 是否删除 | ⬜ | |
| `bizGroup` | String | 业务分组 | ⬜ | |
| `bizType` | String | 业务类型 | ⬜ | |
| `bizSource` | String | 业务来源 | ⬜ | |
| `bizSourceId` | Long | 来源ID | ⬜ | |
| `processId` | String | 流程ID | ⬜ | |
| `requestId` | String | 申请ID | ⬜ | |
| `auditStatus` | AuditStatusEnum | 审核状态 | ⬜ | |
| `workflowLogRepository` | WorkflowLogRepository | 工作流日志仓储 | ⬜ | |
| `extInfo` | String | 扩展信息 | ⬜ | |

---

---

> 回到 → [[NIO|🚗 蔚来]]
