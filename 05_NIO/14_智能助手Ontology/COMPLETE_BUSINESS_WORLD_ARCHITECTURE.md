---
created: '2026-07-24'
tags: [NIO, AI]
---

---tags: [NIO]
created: 2026-07-08
updated: 2026-07-22
status: draft
---
> [!summary] 完整的业务世界认知架构：超越三层架构
> - **核心**：**问题**：三层架构（Ontology、Evidence、Truth）是否足够让LLM完全理解核心的业务逻辑和业务世界？ **答案**：**三层架构是基础，但还不够完整**。需要扩展到**六层架构*


# 完整的业务世界认知架构：超越三层架构

## 一、问题分析

### 1.1 核心问题

**问题**：三层架构（Ontology、Evidence、Truth）是否足够让LLM完全理解核心的业务逻辑和业务世界？

**答案**：**三层架构是基础，但还不够完整**。需要扩展到**六层架构**才能让LLM真正理解业务世界。

### 1.2 三层架构的不足

**现有三层架构**：
1. **Ontology（本体层）** - "世界是什么样"（结构定义）
2. **Evidence（证据层）** - "发生了什么"（历史事件）
3. **Truth（真相层）** - "现在是什么"（当前状态）

**缺失的关键维度**：
- ❌ **业务规则** - "应该怎么做"（规则和约束）
- ❌ **业务流程** - "如何执行"（流程定义和执行）
- ❌ **业务意图** - "为什么这样做"（业务目标和意图）
- ❌ **业务知识** - "最佳实践是什么"（领域知识和经验）
- ❌ **业务决策** - "如何决策"（决策逻辑和历史）

## 二、完整的六层架构

### 2.1 架构全景

```
┌─────────────────────────────────────────────────────────┐
│              LLM认知层（Business Intelligence）          │
│         (基于六层数据进行推理、决策和行动)                  │
└─────────────────────────────────────────────────────────┘
                          ↑
                          │ 查询和推理
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ↓                 ↓                 ↓
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Ontology   │  │   Evidence   │  │    Truth     │
│  (本体层)   │  │   (证据层)   │  │   (真相层)   │
├──────────────┤  ├──────────────┤  ├──────────────┤
│ 世界结构定义  │  │ 世界事件流   │  │ 当前世界状态  │
└──────────────┘  └──────────────┘  └──────────────┘
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ↓                 ↓                 ↓
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Rules     │  │   Process    │  │   Intent     │
│  (规则层)   │  │  (流程层)    │  │  (意图层)   │
├──────────────┤  ├──────────────┤  ├──────────────┤
│ 业务规则约束  │  │ 业务流程定义  │  │ 业务目标意图  │
└──────────────┘  └──────────────┘  └──────────────┘
```

### 2.2 六层架构详细说明

#### Layer 1: Ontology（本体层）- "世界是什么样"

**定义**：业务世界的结构定义

**内容**：
- 实体（Entity）：PurchaseOrder, Supplier, Contract等
- 属性（Attribute）：订单金额、供应商名称等
- 关系（Relationship）：订单-供应商、订单-合同等
- 枚举（Enum）：订单状态、供应商类型等

**价值**：
- 定义业务概念和关系
- 提供结构化的业务模型

**示例**：
```yaml
PurchaseOrder:
  attributes:
    - orderNo: String
    - amount: BigDecimal
    - status: OrderStatusEnum
  relationships:
    - belongs_to: Supplier
    - contains: OrderDetail
    - triggers: Workflow
```

#### Layer 2: Evidence（证据层）- "发生了什么"

**定义**：业务世界的历史事件流

**内容**：
- Handler执行Evidence：记录Handler的执行情况
- 条件判断Evidence：记录if-else的判断结果
- 接口调用Evidence：记录外部服务调用
- 状态转换Evidence：记录状态机的状态转换

**价值**：
- 记录业务历史
- 支持历史查询和分析

**示例**：
```json
{
  "evidenceId": "evt-001",
  "entityType": "PurchaseOrder",
  "entityId": "PO-12345",
  "evidenceType": "HANDLER_EXECUTION",
  "handlerName": "OrderPriceAssembleHandler",
  "timestamp": "2024-01-15T10:30:05Z",
  "duration": 200,
  "success": true
}
```

#### Layer 3: Truth（真相层）- "现在是什么"

**定义**：业务世界的当前状态

**内容**：
- 当前状态事实：订单当前状态、供应商当前风险等级
- 流程执行事实：当前流程执行到哪一步
- 业务规则事实：规则是否激活、触发次数
- 外部依赖事实：外部服务可用性

**价值**：
- 提供当前业务状态
- 支持实时查询和决策

**示例**：
```json
{
  "truthId": "truth-001",
  "entityType": "PurchaseOrder",
  "entityId": "PO-12345",
  "factType": "CurrentState",
  "value": "APPROVED",
  "confidence": 1.0,
  "computedAt": "2024-01-15T11:30:00Z"
}
```

#### Layer 4: Rules（规则层）- "应该怎么做" ⭐新增

**定义**：业务规则和约束

**内容**：
- **业务规则**：订单金额超过阈值需要审批、高风险供应商需要额外审核
- **数据约束**：订单金额必须>0、供应商必须有效
- **流程规则**：订单创建前必须关联合同或采购申请
- **权限规则**：只有采购员可以创建订单
- **计算规则**：订单金额 = 明细金额之和

**价值**：
- 显式定义业务规则
- 支持规则查询和验证
- 支持规则变更管理

**数据结构**：
```java
public class BusinessRule {
    private String ruleId;
    private String ruleName;
    private String ruleType; // CONSTRAINT, VALIDATION, CALCULATION, PERMISSION
    private String condition; // 规则条件（SpEL表达式）
    private String action; // 规则动作
    private String errorMessage; // 违反规则的错误信息
    private int priority; // 规则优先级
    private boolean isActive; // 是否激活
    private LocalDateTime validFrom; // 生效时间
    private LocalDateTime validTo; // 失效时间
    private Map<String, Object> ruleContext; // 规则上下文
}
```

**示例**：
```json
{
  "ruleId": "rule-order-amount-validation",
  "ruleName": "订单金额验证",
  "ruleType": "VALIDATION",
  "condition": "order.amount > 0",
  "action": "REJECT",
  "errorMessage": "订单金额必须大于0",
  "priority": 100,
  "isActive": true
}

{
  "ruleId": "rule-order-approval-threshold",
  "ruleName": "订单审批阈值",
  "ruleType": "BUSINESS_RULE",
  "condition": "order.amount > 100000",
  "action": "REQUIRE_APPROVAL",
  "errorMessage": "订单金额超过10万，需要审批",
  "priority": 200,
  "isActive": true
}
```

**提取来源**：
- 代码中的if-else条件判断
- 规则引擎配置（LiteFlow）
- 数据验证注解
- 业务文档中的规则描述

#### Layer 5: Process（流程层）- "如何执行" ⭐新增

**定义**：业务流程的定义和执行

**内容**：
- **流程定义**：订单创建流程、供应商准入流程
- **流程步骤**：Handler调用序列、条件分支
- **流程实例**：当前流程执行到哪一步
- **流程规则**：流程的触发条件、执行顺序
- **流程异常**：流程失败的原因和处理方式

**价值**：
- 显式定义业务流程
- 支持流程查询和监控
- 支持流程优化和分析

**数据结构**：
```java
public class BusinessProcess {
    private String processId;
    private String processName;
    private String processType; // ORDER_CREATION, SUPPLIER_APPROVAL
    private List<ProcessStep> steps; // 流程步骤
    private Map<String, Object> processContext; // 流程上下文
    private ProcessStatus status; // RUNNING, COMPLETED, FAILED
    private String currentStep; // 当前步骤
    private LocalDateTime startTime; // 开始时间
    private LocalDateTime endTime; // 结束时间
}

public class ProcessStep {
    private String stepId;
    private String stepName;
    private String handlerName; // Handler名称
    private int order; // 执行顺序
    private String condition; // 执行条件（可选）
    private boolean required; // 是否必需
    private ProcessStepStatus status; // PENDING, RUNNING, COMPLETED, FAILED
}
```

**示例**：
```json
{
  "processId": "process-order-creation",
  "processName": "订单创建流程",
  "processType": "ORDER_CREATION",
  "steps": [
    {
      "stepId": "step-001",
      "stepName": "加锁",
      "handlerName": "OrderAggLockHandler",
      "order": 1,
      "required": true,
      "status": "COMPLETED"
    },
    {
      "stepId": "step-002",
      "stepName": "校验",
      "handlerName": "OrderAggUpdateHandler",
      "order": 2,
      "required": true,
      "status": "COMPLETED"
    },
    {
      "stepId": "step-003",
      "stepName": "填充价格",
      "handlerName": "OrderPriceAssembleHandler",
      "order": 3,
      "required": true,
      "status": "RUNNING"
    },
    {
      "stepId": "step-004",
      "stepName": "创建ERP订单",
      "handlerName": "OrderCreateErpOrderHandler",
      "order": 4,
      "condition": "!orderContext.isDraft()",
      "required": false,
      "status": "PENDING"
    }
  ],
  "status": "RUNNING",
  "currentStep": "step-003",
  "startTime": "2024-01-15T10:30:00Z"
}
```

**提取来源**：
- LiteFlow流程配置
- Handler调用序列
- 状态机定义
- 工作流配置

#### Layer 6: Intent（意图层）- "为什么这样做" ⭐新增

**定义**：业务目标和意图

**内容**：
- **业务目标**：提高采购效率、降低采购成本、保证供应商质量
- **业务意图**：创建订单的意图、审批订单的意图
- **业务价值**：每个操作的业务价值
- **业务约束**：业务约束和目标冲突

**价值**：
- 理解业务目标和意图
- 支持目标驱动的决策
- 支持业务优化建议

**数据结构**：
```java
public class BusinessIntent {
    private String intentId;
    private String intentName;
    private String intentType; // GOAL, CONSTRAINT, VALUE
    private String description; // 意图描述
    private String entityType; // 关联的实体类型
    private String entityId; // 关联的实体ID
    private IntentPriority priority; // 意图优先级
    private Map<String, Object> intentContext; // 意图上下文
    private LocalDateTime createTime; // 创建时间
}

public enum IntentPriority {
    CRITICAL, // 关键意图（必须满足）
    HIGH, // 高优先级
    MEDIUM, // 中等优先级
    LOW // 低优先级
}
```

**示例**：
```json
{
  "intentId": "intent-order-creation",
  "intentName": "创建订单",
  "intentType": "GOAL",
  "description": "快速创建采购订单，满足生产需求",
  "entityType": "PurchaseOrder",
  "entityId": "PO-12345",
  "priority": "HIGH",
  "constraints": [
    "订单金额不能超过预算",
    "供应商必须有效",
    "物料必须有库存"
  ],
  "values": [
    "提高采购效率",
    "保证采购质量",
    "控制采购成本"
  ]
}

{
  "intentId": "intent-supplier-risk-control",
  "intentName": "供应商风险控制",
  "intentType": "CONSTRAINT",
  "description": "控制供应商风险，避免采购风险",
  "entityType": "Supplier",
  "priority": "CRITICAL",
  "rules": [
    "高风险供应商需要额外审核",
    "供应商风险等级必须定期评估"
  ]
}
```

**提取来源**：
- 业务文档和需求文档
- 代码注释中的业务说明
- 业务专家的知识
- 历史决策记录

## 三、六层架构的协作关系

### 3.1 层次关系

```
Intent（意图层）
    ↓ 驱动
Process（流程层）
    ↓ 执行
Rules（规则层）
    ↓ 约束
Ontology（本体层）
    ↓ 实例化
Evidence（证据层）
    ↓ 推导
Truth（真相层）
```

### 3.2 完整查询示例

**场景**：LLM需要回答"为什么订单PO-12345创建失败了？"

```java
// 1. 查询Ontology：理解订单的概念
Ontology ontology = ontologyService.getOntology("PurchaseOrder");

// 2. 查询Evidence：获取订单创建过程中的事件
List<Evidence> evidence = evidenceStore.queryEvidence(
    EvidenceQuery.builder()
        .entityType("PurchaseOrder")
        .entityId("PO-12345")
        .build()
);

// 3. 查询Truth：获取订单当前状态
Truth truth = truthStore.getTruth("PurchaseOrder", "PO-12345", "CurrentState");

// 4. 查询Rules：获取订单创建相关的规则
List<BusinessRule> rules = ruleStore.getRules("PurchaseOrder", "CREATE");

// 5. 查询Process：获取订单创建流程的执行情况
BusinessProcess process = processStore.getProcess("PO-12345", "ORDER_CREATION");

// 6. 查询Intent：获取订单创建的意图和约束
List<BusinessIntent> intents = intentStore.getIntents("PurchaseOrder", "CREATE");

// 7. LLM综合六层信息进行推理
String answer = llmService.reason(
    question: "为什么订单PO-12345创建失败了？",
    ontology: ontology,
    evidence: evidence,
    truth: truth,
    rules: rules,
    process: process,
    intents: intents
);

// 返回：
// "订单PO-12345创建失败，原因如下：
//  1. 【Rules】违反了规则'订单金额验证'：订单金额为0，不符合规则'订单金额必须大于0'
//  2. 【Process】流程执行到'OrderAmountCalcHandler'步骤时失败
//  3. 【Evidence】Handler执行失败，错误信息：'订单金额计算失败'
//  4. 【Intent】订单创建的目标是'快速创建采购订单'，但由于数据验证失败无法完成
//  建议：检查订单明细数据，确保订单金额正确计算。"
```

## 四、六层架构的实施

### 4.1 实施优先级

**第一阶段（已完成/进行中）**：
1. ✅ Ontology层 - 实体和关系定义
2. ✅ Evidence层 - 事件收集和存储
3. ✅ Truth层 - 事实计算和存储

**第二阶段（新增）**：
4. ⭐ Rules层 - 业务规则提取和存储
5. ⭐ Process层 - 业务流程提取和存储

**第三阶段（新增）**：
6. ⭐ Intent层 - 业务意图提取和存储

### 4.2 Rules层实施

#### 4.2.1 规则提取方法

**方法1：代码静态分析**
```java
// 从代码中提取if-else规则
if (order.getAmount() > 100000) {
    // 需要审批
    requireApproval(order);
}

// 提取结果
{
  "ruleId": "rule-order-approval-threshold",
  "condition": "order.amount > 100000",
  "action": "REQUIRE_APPROVAL"
}
```

**方法2：规则引擎配置解析**
```xml
<!-- LiteFlow配置 -->
<chain name="orderValidationChain">
    <then value="amountValidationHandler"/>
    <then value="supplierValidationHandler"/>
</chain>

<!-- 提取结果 -->
{
  "ruleId": "rule-order-validation-chain",
  "steps": ["amountValidationHandler", "supplierValidationHandler"]
}
```

**方法3：注解提取**
```java
@BusinessRule(
    id = "order-amount-validation",
    condition = "order.amount > 0",
    errorMessage = "订单金额必须大于0"
)
public void validateOrderAmount(Order order) {
    // ...
}
```

#### 4.2.2 规则存储设计

```sql
CREATE TABLE `gps_business_rule` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `rule_id` VARCHAR(64) NOT NULL UNIQUE,
    `rule_name` VARCHAR(256) NOT NULL,
    `rule_type` VARCHAR(32) NOT NULL, -- CONSTRAINT, VALIDATION, CALCULATION, PERMISSION
    `entity_type` VARCHAR(64) NOT NULL,
    `condition` TEXT NOT NULL, -- SpEL表达式
    `action` VARCHAR(128), -- 规则动作
    `error_message` TEXT, -- 错误信息
    `priority` INT NOT NULL DEFAULT 100,
    `is_active` TINYINT(1) NOT NULL DEFAULT 1,
    `valid_from` DATETIME NOT NULL,
    `valid_to` DATETIME,
    `rule_context` JSON,
    `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `update_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_entity_type` (`entity_type`, `is_active`),
    KEY `idx_rule_type` (`rule_type`, `is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### 4.3 Process层实施

#### 4.3.1 流程提取方法

**方法1：LiteFlow配置解析**
```xml
<chain name="orderCreateChain">
    <then value="orderAggLockHandler"/>
    <then value="orderAggUpdateHandler"/>
    <when value="!orderContext.isDraft()">
        <then value="orderCreateErpOrderHandler"/>
    </when>
</chain>
```

**方法2：Handler调用序列分析**
```java
// 从代码中提取Handler调用序列
public void process(OrderAgg orderAgg, OrderContext orderContext) {
    orderAggLockHandler.process(orderAgg, orderContext); // step-001
    orderAggUpdateHandler.process(orderAgg, orderContext); // step-002
    orderPriceAssembleHandler.process(orderAgg, orderContext); // step-003
    if(!orderContext.isDraft()) {
        orderCreateErpOrderHandler.process(orderAgg, orderContext); // step-004 (conditional)
    }
}
```

#### 4.3.2 流程存储设计

```sql
CREATE TABLE `gps_business_process` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `process_id` VARCHAR(64) NOT NULL UNIQUE,
    `process_name` VARCHAR(256) NOT NULL,
    `process_type` VARCHAR(64) NOT NULL,
    `entity_type` VARCHAR(64) NOT NULL,
    `entity_id` VARCHAR(64) NOT NULL,
    `status` VARCHAR(32) NOT NULL, -- RUNNING, COMPLETED, FAILED
    `current_step` VARCHAR(128),
    `start_time` DATETIME NOT NULL,
    `end_time` DATETIME,
    `process_context` JSON,
    `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `update_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_entity` (`entity_type`, `entity_id`),
    KEY `idx_status` (`status`, `start_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `gps_business_process_step` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `process_id` VARCHAR(64) NOT NULL,
    `step_id` VARCHAR(64) NOT NULL,
    `step_name` VARCHAR(256) NOT NULL,
    `handler_name` VARCHAR(128) NOT NULL,
    `order` INT NOT NULL,
    `condition` TEXT, -- 执行条件
    `required` TINYINT(1) NOT NULL DEFAULT 1,
    `status` VARCHAR(32) NOT NULL, -- PENDING, RUNNING, COMPLETED, FAILED
    `start_time` DATETIME,
    `end_time` DATETIME,
    `error_message` TEXT,
    PRIMARY KEY (`id`),
    KEY `idx_process_id` (`process_id`, `order`),
    FOREIGN KEY (`process_id`) REFERENCES `gps_business_process`(`process_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### 4.4 Intent层实施

#### 4.4.1 意图提取方法

**方法1：业务文档分析**
- 需求文档
- 业务规范文档
- 业务流程文档

**方法2：代码注释提取**
```java
/**
 * 创建订单
 * 业务目标：快速创建采购订单，满足生产需求
 * 业务约束：订单金额不能超过预算，供应商必须有效
 */
public void createOrder(Order order) {
    // ...
}
```

**方法3：历史决策分析**
- 分析历史决策记录
- 提取决策背后的业务意图

#### 4.4.2 意图存储设计

```sql
CREATE TABLE `gps_business_intent` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `intent_id` VARCHAR(64) NOT NULL UNIQUE,
    `intent_name` VARCHAR(256) NOT NULL,
    `intent_type` VARCHAR(32) NOT NULL, -- GOAL, CONSTRAINT, VALUE
    `description` TEXT NOT NULL,
    `entity_type` VARCHAR(64),
    `entity_id` VARCHAR(64),
    `priority` VARCHAR(32) NOT NULL, -- CRITICAL, HIGH, MEDIUM, LOW
    `intent_context` JSON,
    `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `update_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `idx_entity` (`entity_type`, `entity_id`),
    KEY `idx_priority` (`priority`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## 五、六层架构的价值

### 5.1 完整理解业务世界

**三层架构**：
- ✅ 知道"是什么"（Ontology）
- ✅ 知道"发生了什么"（Evidence）
- ✅ 知道"现在是什么"（Truth）
- ❌ 不知道"应该怎么做"（Rules）
- ❌ 不知道"如何执行"（Process）
- ❌ 不知道"为什么这样做"（Intent）

**六层架构**：
- ✅ 知道"是什么"（Ontology）
- ✅ 知道"发生了什么"（Evidence）
- ✅ 知道"现在是什么"（Truth）
- ✅ 知道"应该怎么做"（Rules）
- ✅ 知道"如何执行"（Process）
- ✅ 知道"为什么这样做"（Intent）

### 5.2 支持更复杂的查询

**示例1：为什么订单创建失败？**
- Rules层：提供违反的规则
- Process层：提供流程执行情况
- Intent层：提供业务目标和约束

**示例2：如何优化订单创建流程？**
- Process层：分析流程执行历史
- Rules层：分析规则执行情况
- Intent层：理解业务目标
- Evidence层：分析性能瓶颈

**示例3：供应商风险评估**
- Ontology层：理解供应商和风险的概念
- Evidence层：获取历史事件
- Truth层：获取当前风险等级
- Rules层：获取风险评估规则
- Intent层：理解风险控制目标

## 六、总结

### 6.1 核心观点

**三层架构是基础，六层架构是完整方案**：

1. **Ontology + Evidence + Truth** - 基础三层，描述业务世界的结构和状态
2. **Rules + Process + Intent** - 扩展三层，描述业务世界的规则、流程和意图

### 6.2 实施建议

**渐进式实施**：
1. **第一阶段**：完成Ontology、Evidence、Truth三层（基础）
2. **第二阶段**：增加Rules和Process两层（核心业务逻辑）
3. **第三阶段**：增加Intent层（业务目标和意图）

### 6.3 最终目标

**让LLM完全理解业务世界**：
- ✅ 理解业务结构（Ontology）
- ✅ 理解业务历史（Evidence）
- ✅ 理解业务状态（Truth）
- ✅ 理解业务规则（Rules）
- ✅ 理解业务流程（Process）
- ✅ 理解业务意图（Intent）

**只有这样，LLM才能真正成为业务世界的"专家"，而不仅仅是"代码阅读器"。**


---

> 回到 → [[NIO|🚗 蔚来]]
