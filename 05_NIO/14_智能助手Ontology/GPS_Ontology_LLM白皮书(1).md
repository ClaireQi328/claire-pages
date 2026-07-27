# GPS系统Neo4j Ontology LLM使用白皮书

**版本**: v2.0  
**生成时间**: 2024-12-11  
**Neo4j平台**: http://neo4j-test.nioint.com:7474/  
**数据源**: all_entities.csv (315个实体)  
**架构**: 六层架构（Ontology + Evidence + Truth + Rules + Process + Intent）

---

## 📋 目录

1. [概述](#概述)
2. [架构设计](#架构设计)
3. [六层架构详解](#六层架构详解)
4. [实体体系](#实体体系)
5. [关系体系](#关系体系)
6. [查询模式](#查询模式)
7. [业务场景](#业务场景)
8. [LLM使用指南](#llm使用指南)
9. [最佳实践](#最佳实践)
10. [常见问题](#常见问题)

---

## 一、概述

### 1.1 什么是Ontology？

**Ontology（本体）**是知识图谱的"骨架"，定义了业务世界的结构：

- **实体（Entity）**：业务对象类型（如"采购订单"、"供应商"）
- **关系（Relation）**：实体间的连接（如"订单包含订单明细"）
- **属性（Attribute）**：实体的特征（如"订单号"、"创建时间"）

**重要**：Ontology只定义"结构"，不包含真实的业务数据。真实的业务数据存储在Instance（实例）层。

### 1.2 GPS系统Ontology规模

- **实体总数**: 315个
- **核心实体（L1-Core）**: 8个
- **支撑实体（L2-Supporting）**: 307个
- **Instance节点**: 51,898+条（优先级1数据）
- **INSTANCE_OF关系**: 30,964+条
- **Rules节点**: 422个
- **Processes节点**: 80个
- **Intents节点**: 274个

### 1.3 核心价值

1. **语义理解**: LLM可以理解业务概念和关系
2. **智能查询**: 基于语义而非字段名进行查询
3. **链路追踪**: 自动发现业务对象之间的关联
4. **根因分析**: 通过图遍历找到问题根源
5. **规则理解**: 理解业务规则和约束条件
6. **流程理解**: 理解业务流程和执行步骤
7. **意图理解**: 理解业务目标和意图
8. **历史分析**: 通过Evidence分析历史事件
9. **状态诊断**: 通过Truth分析当前状态

---

## 二、架构设计

### 2.1 六层架构全景

GPS系统采用**六层架构**设计，全面描述业务世界：

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

### 2.2 双层架构（Entity + Instance）

GPS系统的基础是**双层架构**：

```
┌─────────────────────────────────────────┐
│         Entity层（实体定义层）           │
│  - CoreEntity（核心实体）               │
│  - SupportingEntity（支撑实体）         │
│  - ValueObject（值对象）                │
│  定义"是什么"（What）                   │
└─────────────────────────────────────────┘
              ↑ INSTANCE_OF
              │
┌─────────────────────────────────────────┐
│         Instance层（实例数据层）         │
│  - Instance（业务数据实例）              │
│  存储"具体数据"（Data）                  │
│  - tableName: 表名                      │
│  - instanceId: 实例ID                   │
│  - 业务字段: 实际数据值                 │
│  - Evidence属性: 历史事件信息          │
│  - Truth属性: 当前状态信息              │
└─────────────────────────────────────────┘
```

### 2.2 设计理念

#### ✅ 分离关注点

- **Entity层**：定义业务概念的结构和语义
- **Instance层**：存储具体的业务数据

#### ✅ 支持类型查询

```cypher
// 查询所有"采购订单"类型的实例
MATCH (e:CoreEntity {normalizedName: 'purchaseorder'})
<-[:INSTANCE_OF]-(i:Instance)
RETURN i
```

#### ✅ 支持语义推理

- LLM理解实体定义（Entity）
- 然后查询具体的实例数据（Instance）
- 实现"理解概念 → 查询数据"的智能查询

### 2.3 关键关系：INSTANCE_OF

```
(Instance) -[:INSTANCE_OF]-> (Entity)
```

**含义**：这个实例是某个实体类型的实例

**示例**：
```
PR实例 (Instance)
  - instanceId: "315"
  - gps_apply_no: "PR20221000389"
  - status: "APPROVED"
  - tableName: "gps_pr_purchase_request"
  -[:INSTANCE_OF]->
采购申请实体 (CoreEntity)
  - normalizedName: "purchaserequest"
  - name: "BrPurchaseRequestEntity"
  - layer: "L1-Core"
  - description: "采购申请实体"
```

---

## 三、六层架构详解

### 3.1 Layer 1: Ontology（本体层）- "世界是什么样"

**定义**：业务世界的结构定义

**内容**：
- 实体（Entity）：PurchaseOrder, Supplier, Contract等
- 属性（Attribute）：订单金额、供应商名称等
- 关系（Relationship）：订单-供应商、订单-合同等
- 枚举（Enum）：订单状态、供应商类型等

**Neo4j表示**：
- 节点：`CoreEntity`、`SupportingEntity`
- 关系：实体间的关系（如`GENERATES`、`CONTAINS`等）

**查询示例**：
```cypher
// 查询实体定义
MATCH (e:CoreEntity {normalizedName: 'purchaseorder'})
RETURN e

// 查询实体的所有实例
MATCH (e:CoreEntity {normalizedName: 'purchaseorder'})
<-[:INSTANCE_OF]-(i:Instance)
RETURN i
LIMIT 10
```

---

### 3.2 Layer 2: Evidence（证据层）- "发生了什么"

**定义**：业务世界的历史事件流

**内容**：
- Handler执行Evidence：记录Handler的执行情况
- 条件判断Evidence：记录if-else的判断结果
- 接口调用Evidence：记录外部服务调用
- 状态转换Evidence：记录状态机的状态转换

**Neo4j表示**：
- **重要**：Evidence作为Instance节点的属性存储（避免节点爆炸）
- Evidence属性包括：
  - `lastOperation`: 最新操作
  - `lastOperationTime`: 最新操作时间
  - `lastOperator`: 最新操作人
  - `lastError`: 最新错误信息
  - `lastErrorTime`: 最新错误时间
  - `errorCount`: 错误次数
  - `operationCount`: 操作次数
  - `hasError`: 是否有错误

**查询示例**：
```cypher
// 查询有错误的订单实例
MATCH (i:Instance {tableName: 'gps_order_purchase_order'})
WHERE i.hasError = true OR i.lastError IS NOT NULL
RETURN i.apply_no as po_no,
       i.lastError as lastError,
       i.lastErrorTime as lastErrorTime,
       i.errorCount as errorCount
LIMIT 10

// 查询订单的操作历史
MATCH (i:Instance {tableName: 'gps_order_purchase_order'})
WHERE i.apply_no = 'PO-12345'
RETURN i.apply_no as po_no,
       i.lastOperation as lastOperation,
       i.lastOperationTime as lastOperationTime,
       i.lastOperator as lastOperator,
       i.operationCount as operationCount
```

---

### 3.3 Layer 3: Truth（真相层）- "现在是什么"

**定义**：业务世界的当前状态

**内容**：
- 当前状态事实：订单当前状态、供应商当前风险等级
- 流程执行事实：当前流程执行到哪一步
- 业务规则事实：规则是否激活、触发次数
- 外部依赖事实：外部服务可用性

**Neo4j表示**：
- **重要**：Truth作为Instance节点的属性存储（避免节点爆炸）
- Truth属性包括：
  - `currentStatus`: 当前状态
  - `processStatus`: 流程状态
  - `totalAmount`: 总金额（计算值）
  - `vendorCode`: 供应商代码
  - `contractNo`: 合同号
  - `isDelayed`: 是否延迟
  - `errorMessage`: 错误信息

**查询示例**：
```cypher
// 查询订单的当前状态
MATCH (i:Instance {tableName: 'gps_order_purchase_order'})
WHERE i.apply_no = 'PO-12345'
RETURN i.apply_no as po_no,
       i.currentStatus as currentStatus,
       i.processStatus as processStatus,
       i.isDelayed as isDelayed,
       i.totalAmount as totalAmount

// 查询所有延迟的订单
MATCH (i:Instance {tableName: 'gps_order_purchase_order'})
WHERE i.isDelayed = true
RETURN i.apply_no as po_no,
       i.currentStatus as currentStatus,
       i.processStatus as processStatus
LIMIT 10
```

---

### 3.4 Layer 4: Rules（规则层）- "应该怎么做" ⭐新增

**定义**：业务规则和约束

**内容**：
- **业务规则**：订单金额超过阈值需要审批、高风险供应商需要额外审核
- **数据约束**：订单金额必须>0、供应商必须有效
- **流程规则**：订单创建前必须关联合同或采购申请
- **权限规则**：只有采购员可以创建订单
- **计算规则**：订单金额 = 明细金额之和

**Neo4j表示**：
- 节点：`Rule`（规则节点）
- 关系：`(Entity)-[:HAS_RULE]->(Rule)`
- Rule节点属性：
  - `ruleId`: 规则ID（唯一标识）
  - `ruleName`: 规则名称
  - `ruleType`: 规则类型（VALIDATION、PROCESS_CHAIN等）
  - `condition`: 规则条件（SpEL表达式）
  - `action`: 规则动作
  - `errorMessage`: 违反规则的错误信息
  - `priority`: 规则优先级
  - `isActive`: 是否激活
  - `source`: 规则来源（代码文件、行号等）

**查询示例**：
```cypher
// 查询订单相关的所有规则
MATCH (e:CoreEntity)-[:HAS_RULE]->(r:Rule)
WHERE e.normalizedName CONTAINS 'purchaseorder' OR e.name CONTAINS 'PurchaseOrder'
RETURN r.ruleId, r.ruleName, r.ruleType, r.condition, r.action, r.errorMessage
LIMIT 10

// 查询特定类型的规则
MATCH (e:CoreEntity)-[:HAS_RULE]->(r:Rule)
WHERE e.normalizedName CONTAINS 'purchaseorder' AND r.ruleType = 'VALIDATION'
RETURN r.ruleId, r.ruleName, r.condition, r.errorMessage
LIMIT 5

// 查询实体的规则统计
MATCH (e:CoreEntity)-[:HAS_RULE]->(r:Rule)
RETURN e.name as entityName, 
       count(r) as ruleCount,
       collect(DISTINCT r.ruleType) as ruleTypes
ORDER BY ruleCount DESC
LIMIT 20
```

---

### 3.5 Layer 5: Process（流程层）- "如何执行" ⭐新增

**定义**：业务流程的定义和执行

**内容**：
- **流程定义**：订单创建流程、供应商准入流程
- **流程步骤**：Handler调用序列、条件分支
- **流程实例**：当前流程执行到哪一步
- **流程规则**：流程的触发条件、执行顺序
- **流程异常**：流程失败的原因和处理方式

**Neo4j表示**：
- 节点：`Process`（流程节点）
- 关系：`(Entity)-[:HAS_PROCESS {processType: 'CREATE'}]->(Process)`
- Process节点属性：
  - `processId`: 流程ID（唯一标识）
  - `processName`: 流程名称
  - `processType`: 流程类型（CREATE、CREATE_DRAFT、SUBMIT等）
  - `chainId`: LiteFlow链ID
  - `steps`: 流程步骤列表（JSON数组）
  - `stepCount`: 步骤数量
  - `source`: 流程来源（LiteFlow配置文件等）

**查询示例**：
```cypher
// 查询订单创建流程
MATCH (e:CoreEntity)-[:HAS_PROCESS]->(p:Process)
WHERE (e.normalizedName CONTAINS 'purchaseorder' OR e.name CONTAINS 'PurchaseOrder')
  AND p.processType = 'CREATE'
RETURN p.processId, p.processName, p.steps, p.chainId
LIMIT 5

// 查询包含特定Handler的流程
MATCH (e:CoreEntity)-[:HAS_PROCESS]->(p:Process)
WHERE p.steps CONTAINS 'OrderPriceAssembleHandler' 
   OR p.steps CONTAINS 'orderPriceAssembleComponent'
RETURN p.processId, p.processName, p.processType, p.steps, e.name as entityName
LIMIT 10

// 查询实体的流程统计
MATCH (e:CoreEntity)-[:HAS_PROCESS]->(p:Process)
RETURN e.name as entityName,
       count(p) as processCount,
       collect(DISTINCT p.processType) as processTypes
ORDER BY processCount DESC
LIMIT 20
```

---

### 3.6 Layer 6: Intent（意图层）- "为什么这样做" ⭐新增

**定义**：业务目标和意图

**内容**：
- **业务目标**：提高采购效率、降低采购成本、保证供应商质量
- **业务意图**：创建订单的意图、审批订单的意图
- **业务价值**：每个操作的业务价值
- **业务约束**：业务约束和目标冲突

**Neo4j表示**：
- 节点：`Intent`（意图节点）
- 关系：`(Entity)-[:HAS_INTENT {intentType: 'GOAL', priority: 'HIGH'}]->(Intent)`
- Intent节点属性：
  - `intentId`: 意图ID（唯一标识）
  - `intentName`: 意图名称
  - `intentType`: 意图类型（GOAL、CONSTRAINT、VALUE）
  - `description`: 意图描述
  - `priority`: 意图优先级（CRITICAL、HIGH、MEDIUM、LOW）
  - `operation`: 关联的操作（CREATE、UPDATE等）
  - `constraints`: 约束列表（JSON数组）
  - `source`: 意图来源（代码注释、业务文档等）

**查询示例**：
```cypher
// 查询订单创建相关的意图
MATCH (e:CoreEntity)-[:HAS_INTENT]->(i:Intent)
WHERE (e.normalizedName CONTAINS 'purchaseorder' OR e.name CONTAINS 'PurchaseOrder')
  AND (i.operation = 'CREATE' OR i.intentName CONTAINS '创建')
RETURN i.intentId, i.intentName, i.intentType, i.description, i.priority, i.constraints
LIMIT 5

// 查询高优先级意图
MATCH (e:CoreEntity)-[:HAS_INTENT]->(i:Intent)
WHERE i.priority IN ['HIGH', 'CRITICAL']
RETURN i.intentId, i.intentName, i.intentType, i.priority, e.name as entityName
LIMIT 10

// 查询实体的意图统计
MATCH (e:CoreEntity)-[:HAS_INTENT]->(i:Intent)
RETURN e.name as entityName,
       count(i) as intentCount,
       collect(DISTINCT i.intentType) as intentTypes
ORDER BY intentCount DESC
LIMIT 20
```

---

### 3.7 六层架构的协作关系

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

**完整查询示例**：
```cypher
// 查询订单的完整业务逻辑（Rules + Process + Intent）
MATCH (e:CoreEntity)
WHERE e.normalizedName CONTAINS 'purchaseorder' OR e.name CONTAINS 'PurchaseOrder'
OPTIONAL MATCH (e)-[:HAS_RULE]->(r:Rule)
OPTIONAL MATCH (e)-[:HAS_PROCESS {processType: 'CREATE'}]->(p:Process)
OPTIONAL MATCH (e)-[:HAS_INTENT]->(i:Intent)
WHERE i.operation = 'CREATE' OR i.intentName CONTAINS '创建'
RETURN 
  e.name as entityName,
  count(DISTINCT r) as ruleCount,
  count(DISTINCT p) as processCount,
  count(DISTINCT i) as intentCount,
  collect(DISTINCT r.ruleType) as ruleTypes,
  collect(DISTINCT p.processType) as processTypes,
  collect(DISTINCT i.intentType) as intentTypes
LIMIT 1
```

---

## 三、实体体系

### 3.1 实体分层

#### L1-Core（核心实体）- 8个

这些是业务的核心概念，生命周期长，需要推理链路：

| 实体名 | normalizedName | 说明 | 数据库表 |
|--------|---------------|------|---------|
| PurchaseRequest | purchaserequest | 采购申请 | gps_pr_purchase_request |
| PurchaseOrder | purchaseorder | 采购订单 | gps_order_purchase_order |
| Contract | contract | 合同 | gps_cont_contract_base |
| Vendor | vendor | 供应商 | gps_vendor_info |
| Material | material | 物料 | gps_mtl_dp_material |
| Price | price | 价格 | gps_price_center_pricing_task |
| WorkflowTask | workflowtask | 工作流任务 | gps_pr_workflow_task |
| GoodsReceipt | goodsreceipt | 收货单 | gps_order_goods_receipt |

#### L2-Supporting（支撑实体）- 307个

这些是支撑核心业务的实体，包括：
- 明细实体（如PurchaseOrderDetail）
- 配置实体（如ContractCategoryConfig）
- 值对象（如FileEntity）
- 聚合实体（如ContractAggregate）

### 3.2 实体属性

每个实体包含以下关键属性：

#### Entity层属性

```cypher
{
  normalizedName: "purchaserequest",  // 标准化名称（用于查询）
  name: "BrPurchaseRequestEntity",    // 类名
  layer: "L1-Core",                   // 层级
  package: "com.nio.srm.gps...",      // 包路径
  description: "采购申请实体",          // 描述
  db_table_name: "gps_pr_purchase_request",  // 数据库表名
  db_database_name: "gps_purchase_request_test",  // 数据库名
  attributes: [...],                   // 属性列表
  relationships: [...]                 // 关系列表
}
```

#### Instance层属性

```cypher
{
  tableName: "gps_pr_purchase_request",  // 表名（用于查询）
  instanceId: "315",                     // 实例ID（主键值）
  gps_apply_no: "PR20221000389",        // PR号（业务字段）
  status: "APPROVED",                   // 状态（业务字段）
  // ... 其他业务字段
}
```

### 3.3 实体查询

#### 查询实体定义

```cypher
// 查询采购申请实体定义
MATCH (e:CoreEntity {normalizedName: 'purchaserequest'})
RETURN e
```

#### 查询实体的所有实例

```cypher
// 查询采购申请的所有实例
MATCH (e:CoreEntity {normalizedName: 'purchaserequest'})
<-[:INSTANCE_OF]-(i:Instance)
RETURN i
LIMIT 10
```

#### 统计实体实例数量

```cypher
MATCH (e:CoreEntity)
<-[:INSTANCE_OF]-(i:Instance)
RETURN e.normalizedName as entity, 
       count(i) as instanceCount
ORDER BY instanceCount DESC
LIMIT 20
```

---

## 四、关系体系

### 4.1 关系类型

#### 1. INSTANCE_OF（实例关系）

**含义**：Instance是Entity的实例

```cypher
(Instance) -[:INSTANCE_OF]-> (Entity)
```

**用途**：
- 类型查询
- 元数据查询
- 语义推理

#### 2. 业务关系（基于外键）

**优先级1核心关系**：

| 关系名 | 含义 | 示例 |
|--------|------|------|
| HAS_REQUIREMENT | PR有Requirement | `(pr:Instance)-[:HAS_REQUIREMENT]->(req:Instance)` |
| REFERENCES_MATERIAL | Requirement引用Material | `(req:Instance)-[:REFERENCES_MATERIAL]->(mat:Instance)` |
| HAS_PRICING_TASK | Material有Pricing Task | `(mat:Instance)-[:HAS_PRICING_TASK]->(pt:Instance)` |
| HAS_PO_DETAIL | PR有PO明细 | `(pr:Instance)-[:HAS_PO_DETAIL]->(po_detail:Instance)` |
| HAS_DETAIL | PO有明细 | `(po:Instance)-[:HAS_DETAIL]->(po_detail:Instance)` |
| HAS_BUYER | PR有Buyer | `(pr:Instance)-[:HAS_BUYER]->(buyer:Instance)` |
| HAS_BOM_CONFIG | Material有BOM配置 | `(mat:Instance)-[:HAS_BOM_CONFIG]->(bom:Instance)` |

#### 3. 实体间关系（Ontology层）

```cypher
// 实体定义之间的关系（从代码提取）
(CoreEntity {normalizedName: 'purchaserequest'})
-[:GENERATES]->
(CoreEntity {normalizedName: 'purchaseorder'})
```

#### 4. Rules关系（规则层）⭐新增

```cypher
// Entity到Rule的关系
(CoreEntity {normalizedName: 'purchaseorder'})
-[:HAS_RULE]->
(Rule {ruleId: 'rule-order-amount-validation'})
```

**用途**：
- 查询实体相关的业务规则
- 规则验证和诊断

#### 5. Process关系（流程层）⭐新增

```cypher
// Entity到Process的关系（带流程类型）
(CoreEntity {normalizedName: 'purchaseorder'})
-[:HAS_PROCESS {processType: 'CREATE'}]->
(Process {processId: 'process-purchaseorder-create-0001'})
```

**用途**：
- 查询实体相关的业务流程
- 流程执行和诊断

#### 6. Intent关系（意图层）⭐新增

```cypher
// Entity到Intent的关系（带意图类型和优先级）
(CoreEntity {normalizedName: 'purchaseorder'})
-[:HAS_INTENT {intentType: 'GOAL', priority: 'HIGH'}]->
(Intent {intentId: 'intent-purchaseorder-goal-0001'})
```

**用途**：
- 查询实体相关的业务意图
- 意图分析和目标理解

### 4.2 关系查询

#### 查询实例的业务关系

```cypher
// 查询PR的完整链路
MATCH (pr:Instance {tableName: 'gps_pr_purchase_request'})
-[:HAS_REQUIREMENT]->
(req:Instance {tableName: 'gps_dmd_demand_item_purchase_info'})
-[:REFERENCES_ITEM]->
(req_item:Instance {tableName: 'gps_dmd_demand_item'})
-[:REFERENCES_MATERIAL]->
(mat:Instance)
-[:HAS_PRICING_TASK]->
(pt:Instance {tableName: 'gps_price_center_pricing_task'})
RETURN pr, req, req_item, mat, pt
LIMIT 10
```

#### 查询实体定义的关系

```cypher
// 查询采购申请实体定义的关系
MATCH (e:CoreEntity {normalizedName: 'purchaserequest'})-[r]->(related)
RETURN type(r) as relationType, related.normalizedName as relatedEntity
```

#### 查询实体的Rules、Process、Intent ⭐新增

```cypher
// 查询订单的完整业务逻辑
MATCH (e:CoreEntity {normalizedName: 'purchaseorder'})
OPTIONAL MATCH (e)-[:HAS_RULE]->(r:Rule)
OPTIONAL MATCH (e)-[:HAS_PROCESS]->(p:Process)
OPTIONAL MATCH (e)-[:HAS_INTENT]->(i:Intent)
RETURN 
  e.name as entityName,
  collect(DISTINCT r.ruleId) as rules,
  collect(DISTINCT p.processId) as processes,
  collect(DISTINCT i.intentId) as intents
```

---

## 五、查询模式

### 5.1 基础查询模式

#### 模式1：通过实体查询实例

```cypher
// 查询所有采购订单实例
MATCH (e:CoreEntity {normalizedName: 'purchaseorder'})
<-[:INSTANCE_OF]-(i:Instance)
RETURN i
LIMIT 10
```

#### 模式2：通过表名查询实例

```cypher
// 查询PR实例
MATCH (i:Instance {tableName: 'gps_pr_purchase_request'})
RETURN i
LIMIT 10
```

#### 模式3：通过业务字段查询

```cypher
// 查询特定PR号的实例
MATCH (i:Instance {tableName: 'gps_pr_purchase_request'})
WHERE i.gps_apply_no = 'PR20221000389'
RETURN i
```

### 5.2 链路查询模式

#### 模式1：完整链路查询（使用关系）

```cypher
// PR → Requirement → Material → Pricing Task → PO
MATCH (pr:Instance {tableName: 'gps_pr_purchase_request'})
-[:HAS_REQUIREMENT]->
(req_info:Instance {tableName: 'gps_dmd_demand_item_purchase_info'})
-[:REFERENCES_ITEM]->
(req_item:Instance {tableName: 'gps_dmd_demand_item'})
-[:REFERENCES_MATERIAL]->
(mat:Instance)
-[:HAS_PRICING_TASK]->
(pt:Instance {tableName: 'gps_price_center_pricing_task'})
RETURN pr, req_info, req_item, mat, pt
LIMIT 10
```

#### 模式2：属性值关联查询（无关系时）

```cypher
// 通过属性值关联（如果没有关系边）
MATCH (pr:Instance {tableName: 'gps_pr_purchase_request'})
MATCH (req_info:Instance {tableName: 'gps_dmd_demand_item_purchase_info'})
WHERE req_info.pr_no = pr.gps_apply_no
RETURN pr, req_info
LIMIT 10
```

**注意**：属性值匹配查询较慢，建议创建关系边。

### 5.3 批量查询模式

#### 模式1：批量查询多个PR

```cypher
MATCH (pr:Instance {tableName: 'gps_pr_purchase_request'})
WHERE pr.gps_apply_no IN $pr_nos
OPTIONAL MATCH (req_info:Instance {tableName: 'gps_dmd_demand_item_purchase_info'})
WHERE req_info.pr_no = pr.gps_apply_no
RETURN pr.gps_apply_no as pr_no,
       count(DISTINCT req_info) as req_count
```

#### 模式2：使用WITH分步查询

```cypher
MATCH (pr:Instance {tableName: 'gps_pr_purchase_request'})
WHERE pr.gps_apply_no IN $pr_nos
WITH pr
OPTIONAL MATCH (req_info:Instance {tableName: 'gps_dmd_demand_item_purchase_info'})
WHERE req_info.pr_no = pr.gps_apply_no
WITH pr, count(DISTINCT req_info) as req_count
OPTIONAL MATCH (po_detail:Instance {tableName: 'gps_order_purchase_order_detail'})
WHERE po_detail.gps_pr_no = pr.gps_apply_no
RETURN pr.gps_apply_no as pr_no,
       req_count,
       count(DISTINCT po_detail) as po_count
```

### 5.4 性能优化模式

#### ✅ 使用关系查询（快）

```cypher
MATCH (pr:Instance)-[:HAS_REQUIREMENT]->(req:Instance)
RETURN pr, req
```

#### ❌ 避免属性值匹配（慢）

```cypher
MATCH (pr:Instance), (req:Instance)
WHERE req.pr_no = pr.gps_apply_no
RETURN pr, req
```

#### ✅ 使用LIMIT限制结果

```cypher
MATCH (pr:Instance)
RETURN pr
LIMIT 10
```

#### ✅ 使用WHERE条件限制范围

```cypher
MATCH (pr:Instance {tableName: 'gps_pr_purchase_request'})
WHERE pr.status = 'APPROVED'
RETURN pr
LIMIT 10
```

### 5.5 Rules查询模式 ⭐新增

#### 模式1：查询实体的所有规则

```cypher
// 查询订单相关的所有规则
MATCH (e:CoreEntity)-[:HAS_RULE]->(r:Rule)
WHERE e.normalizedName CONTAINS 'purchaseorder'
RETURN r.ruleId, r.ruleName, r.ruleType, r.condition, r.action
LIMIT 10
```

#### 模式2：查询特定类型的规则

```cypher
// 查询验证类规则
MATCH (e:CoreEntity)-[:HAS_RULE]->(r:Rule)
WHERE e.normalizedName CONTAINS 'purchaseorder' 
  AND r.ruleType = 'VALIDATION'
RETURN r.ruleId, r.ruleName, r.condition, r.errorMessage
```

#### 模式3：规则违反诊断

```cypher
// 查询订单实例，关联规则，分析是否违反规则
MATCH (po:Instance {tableName: 'gps_order_purchase_order'})
WHERE po.apply_no = 'PO-12345'
WITH po
MATCH (e:CoreEntity)-[:HAS_RULE]->(r:Rule)
WHERE e.normalizedName CONTAINS 'purchaseorder'
RETURN po.apply_no as po_no,
       po.status as status,
       po.lastError as lastError,
       collect(r) as rules
LIMIT 1
```

### 5.6 Process查询模式 ⭐新增

#### 模式1：查询实体的流程

```cypher
// 查询订单创建流程
MATCH (e:CoreEntity)-[:HAS_PROCESS]->(p:Process)
WHERE e.normalizedName CONTAINS 'purchaseorder'
  AND p.processType = 'CREATE'
RETURN p.processId, p.processName, p.steps, p.stepCount
LIMIT 5
```

#### 模式2：查询流程步骤详情

```cypher
// 查询流程的所有步骤
MATCH (e:CoreEntity)-[:HAS_PROCESS]->(p:Process)
WHERE p.processId = 'process-purchaseorder-create-0001'
RETURN p.processName, p.steps
```

#### 模式3：流程执行诊断

```cypher
// 查询订单实例，关联流程，分析流程执行状态
MATCH (po:Instance {tableName: 'gps_order_purchase_order'})
WHERE po.apply_no = 'PO-12345'
WITH po
MATCH (e:CoreEntity)-[:HAS_PROCESS {processType: 'CREATE'}]->(p:Process)
WHERE e.normalizedName CONTAINS 'purchaseorder'
RETURN po.apply_no as po_no,
       po.processStatus as processStatus,
       po.currentStatus as currentStatus,
       p.processName as processName,
       p.steps as steps
LIMIT 1
```

### 5.7 Intent查询模式 ⭐新增

#### 模式1：查询实体的意图

```cypher
// 查询订单创建相关的意图
MATCH (e:CoreEntity)-[:HAS_INTENT]->(i:Intent)
WHERE e.normalizedName CONTAINS 'purchaseorder'
  AND i.operation = 'CREATE'
RETURN i.intentId, i.intentName, i.intentType, i.description, i.priority
LIMIT 5
```

#### 模式2：查询高优先级意图

```cypher
// 查询关键业务意图
MATCH (e:CoreEntity)-[:HAS_INTENT]->(i:Intent)
WHERE i.priority IN ['HIGH', 'CRITICAL']
RETURN i.intentId, i.intentName, i.intentType, i.priority, e.name as entityName
LIMIT 10
```

#### 模式3：意图实现诊断

```cypher
// 查询订单实例，关联意图，分析意图是否实现
MATCH (po:Instance {tableName: 'gps_order_purchase_order'})
WHERE po.apply_no = 'PO-12345'
WITH po
MATCH (e:CoreEntity)-[:HAS_INTENT]->(i:Intent)
WHERE e.normalizedName CONTAINS 'purchaseorder'
  AND i.operation = 'CREATE'
RETURN po.apply_no as po_no,
       po.status as status,
       i.intentName as intentName,
       i.description as intentDescription,
       i.constraints as constraints
LIMIT 1
```

### 5.8 综合查询模式（六层架构）⭐新增

#### 模式1：完整业务逻辑查询

```cypher
// 查询订单的完整业务逻辑（Rules + Process + Intent）
MATCH (e:CoreEntity)
WHERE e.normalizedName CONTAINS 'purchaseorder'
OPTIONAL MATCH (e)-[:HAS_RULE]->(r:Rule)
OPTIONAL MATCH (e)-[:HAS_PROCESS]->(p:Process)
OPTIONAL MATCH (e)-[:HAS_INTENT]->(i:Intent)
RETURN 
  e.name as entityName,
  count(DISTINCT r) as ruleCount,
  count(DISTINCT p) as processCount,
  count(DISTINCT i) as intentCount
LIMIT 1
```

#### 模式2：诊断查询（结合Instance + Evidence + Truth + Rules + Process + Intent）

```cypher
// 诊断订单创建失败原因
MATCH (po:Instance {tableName: 'gps_order_purchase_order'})
WHERE po.apply_no = 'PO-12345'
WITH po
MATCH (e:CoreEntity)
WHERE e.normalizedName CONTAINS 'purchaseorder'
OPTIONAL MATCH (e)-[:HAS_RULE]->(r:Rule)
OPTIONAL MATCH (e)-[:HAS_PROCESS {processType: 'CREATE'}]->(p:Process)
OPTIONAL MATCH (e)-[:HAS_INTENT]->(i:Intent)
WHERE i.operation = 'CREATE'
RETURN 
  po.apply_no as po_no,
  po.status as status,
  po.lastError as lastError,
  po.currentStatus as currentStatus,
  po.processStatus as processStatus,
  collect(DISTINCT r) as rules,
  collect(DISTINCT p) as processes,
  collect(DISTINCT i) as intents
LIMIT 1
```

---

## 六、业务场景

### 6.1 优先级1核心场景

#### Case A: PR → Requirement → Pricing → PO 链路诊断

**问题**: "这几单为什么没有收到定价任务？"

**查询路径**:
```cypher
MATCH (pr:Instance {tableName: 'gps_pr_purchase_request'})
WHERE pr.gps_apply_no IN $pr_nos
OPTIONAL MATCH (req_info:Instance {tableName: 'gps_dmd_demand_item_purchase_info'})
WHERE req_info.pr_no = pr.gps_apply_no
OPTIONAL MATCH (req_item:Instance {tableName: 'gps_dmd_demand_item'})
WHERE req_item.gps_demand_item_code = req_info.gps_demand_item_code
OPTIONAL MATCH (pt:Instance {tableName: 'gps_price_center_pricing_task'})
WHERE pt.material_code = req_item.material_code
RETURN pr.gps_apply_no as pr_no,
       collect(DISTINCT req_item) as requirements,
       collect(DISTINCT pt) as pricing_tasks
```

**可能根因**:
- 历史定价任务占住 → 要转单
- 同一零件类 buyer 权限错误
- 非标需求没有生成定价任务
- 需求状态未导入成功（如create_failed）

#### Case B: BOM缺失诊断

**问题**: "这个物料为什么下不了单？"

**查询路径**:
```cypher
MATCH (material:Instance)
WHERE material.material_code IN $material_codes
  AND material.tableName IN ['gps_mtl_material_base', 'gps_mtl_dp_material', 'gps_mtl_br_material']
OPTIONAL MATCH (bom_config:Instance {tableName: 'gps_ad_bom_config'})
WHERE bom_config.material_code = material.material_code
OPTIONAL MATCH (cnvl_bom:Instance {tableName: 'gps_mtl_dp_cnvl_bom'})
WHERE cnvl_bom.material_code = material.material_code
OPTIONAL MATCH (full_bom:Instance {tableName: 'gps_mtl_dp_full_bom'})
WHERE full_bom.material_code = material.material_code
RETURN material.material_code as material_code,
       count(DISTINCT bom_config) as bom_config_count,
       count(DISTINCT cnvl_bom) as cnvl_bom_count,
       count(DISTINCT full_bom) as full_bom_count
```

**可能根因**:
- 物料缺 BOM 导致下单失败
- 委外总成，没有对应的 BOM
- 物料分类不一致导致 PO 失败

#### Case C: 权限诊断

**问题**: "为什么我不能审批采购单？"

**查询路径**:
```cypher
MATCH (po:Instance {tableName: 'gps_order_purchase_order'})
WHERE po.apply_no IN $po_nos
OPTIONAL MATCH (po_detail:Instance {tableName: 'gps_order_purchase_order_detail'})
WHERE po_detail.gps_pr_no IS NOT NULL
OPTIONAL MATCH (pr:Instance {tableName: 'gps_pr_purchase_request'})
WHERE pr.gps_apply_no = po_detail.gps_pr_no
OPTIONAL MATCH (pr_buyer:Instance {tableName: 'gps_pr_purchase_request_buyer'})
WHERE pr_buyer.purchase_request_id = pr.instanceId
RETURN po.apply_no as po_no,
       po.applicant_account as applicant_account,
       collect(DISTINCT {
           buyer_account: pr_buyer.buyer_account,
           buyer_name: pr_buyer.buyer_name
       }) as buyers
```

**权限诊断路径**:
```
User → Role → Permission → Domain → PO所属部门
```

### 6.2 完整链路查询示例

#### PR完整链路

```cypher
// 查询PR的完整链路：PR → Requirement → Material → Pricing → PO
MATCH (pr:Instance {tableName: 'gps_pr_purchase_request'})
WHERE pr.gps_apply_no = $pr_no
OPTIONAL MATCH (req_info:Instance {tableName: 'gps_dmd_demand_item_purchase_info'})
WHERE req_info.pr_no = pr.gps_apply_no
OPTIONAL MATCH (req_item:Instance {tableName: 'gps_dmd_demand_item'})
WHERE req_item.gps_demand_item_code = req_info.gps_demand_item_code
OPTIONAL MATCH (mat:Instance)
WHERE mat.material_code = req_item.material_code
  AND mat.tableName IN ['gps_mtl_material_base', 'gps_mtl_dp_material', 'gps_mtl_br_material']
OPTIONAL MATCH (pt:Instance {tableName: 'gps_price_center_pricing_task'})
WHERE pt.material_code = mat.material_code
OPTIONAL MATCH (po_detail:Instance {tableName: 'gps_order_purchase_order_detail'})
WHERE po_detail.gps_pr_no = pr.gps_apply_no
RETURN pr.gps_apply_no as pr_no,
       collect(DISTINCT req_item) as requirements,
       collect(DISTINCT mat) as materials,
       collect(DISTINCT pt) as pricing_tasks,
       collect(DISTINCT po_detail) as po_details
```

---

## 七、LLM使用指南

### 7.1 LLM理解Ontology的步骤

#### 步骤1：理解实体定义

```cypher
// LLM应该先查询实体定义，理解业务概念
MATCH (e:CoreEntity)
RETURN e.normalizedName as entity, 
       e.description as description,
       e.layer as layer
ORDER BY e.layer, e.normalizedName
```

#### 步骤2：理解实体关系

```cypher
// LLM应该查询实体之间的关系
MATCH (e1:CoreEntity)-[r]->(e2:CoreEntity)
RETURN e1.normalizedName as fromEntity,
       type(r) as relationType,
       e2.normalizedName as toEntity
LIMIT 50
```

#### 步骤3：查询实例数据

```cypher
// LLM基于理解的实体，查询实例数据
MATCH (e:CoreEntity {normalizedName: 'purchaserequest'})
<-[:INSTANCE_OF]-(i:Instance)
RETURN i
LIMIT 10
```

### 7.2 LLM查询策略

#### 策略1：语义查询

**用户问题**: "查询所有采购订单"

**LLM理解**:
1. 识别实体：`purchaseorder`
2. 查询实体定义确认
3. 查询所有实例

**Cypher查询**:
```cypher
MATCH (e:CoreEntity {normalizedName: 'purchaseorder'})
<-[:INSTANCE_OF]-(i:Instance)
RETURN i
LIMIT 10
```

#### 策略2：链路查询

**用户问题**: "PR20221000389为什么没有生成PO？"

**LLM理解**:
1. 识别实体：`purchaserequest` → `purchaseorder`
2. 查询链路：PR → Requirement → Pricing → PO
3. 找到断点

**Cypher查询**:
```cypher
MATCH (pr:Instance {tableName: 'gps_pr_purchase_request'})
WHERE pr.gps_apply_no = 'PR20221000389'
OPTIONAL MATCH (req_info:Instance {tableName: 'gps_dmd_demand_item_purchase_info'})
WHERE req_info.pr_no = pr.gps_apply_no
OPTIONAL MATCH (po_detail:Instance {tableName: 'gps_order_purchase_order_detail'})
WHERE po_detail.gps_pr_no = pr.gps_apply_no
RETURN pr.gps_apply_no as pr_no,
       count(DISTINCT req_info) as req_count,
       count(DISTINCT po_detail) as po_count
```

#### 策略3：根因分析

**用户问题**: "物料P0248493AD为什么下不了单？"

**LLM理解**:
1. 识别实体：`material`
2. 查询BOM信息
3. 分析缺失原因

**Cypher查询**:
```cypher
MATCH (mat:Instance)
WHERE mat.material_code = 'P0248493AD'
  AND mat.tableName IN ['gps_mtl_material_base', 'gps_mtl_dp_material', 'gps_mtl_br_material']
OPTIONAL MATCH (bom_config:Instance {tableName: 'gps_ad_bom_config'})
WHERE bom_config.material_code = mat.material_code
OPTIONAL MATCH (cnvl_bom:Instance {tableName: 'gps_mtl_dp_cnvl_bom'})
WHERE cnvl_bom.material_code = mat.material_code
RETURN mat.material_code as material_code,
       count(DISTINCT bom_config) as bom_config_count,
       count(DISTINCT cnvl_bom) as cnvl_bom_count
```

#### 策略4：规则查询 ⭐新增

**用户问题**: "订单创建有哪些业务规则？"

**LLM理解**:
1. 识别实体：`purchaseorder`
2. 查询实体关联的Rules
3. 返回规则详情

**Cypher查询**:
```cypher
MATCH (e:CoreEntity)-[:HAS_RULE]->(r:Rule)
WHERE e.normalizedName CONTAINS 'purchaseorder' OR e.name CONTAINS 'PurchaseOrder'
RETURN r.ruleId, r.ruleName, r.ruleType, r.condition, r.action, r.errorMessage
LIMIT 10
```

#### 策略5：流程查询 ⭐新增

**用户问题**: "订单创建流程有哪些步骤？"

**LLM理解**:
1. 识别实体：`purchaseorder`
2. 查询CREATE类型的Process
3. 返回流程步骤

**Cypher查询**:
```cypher
MATCH (e:CoreEntity)-[:HAS_PROCESS]->(p:Process)
WHERE (e.normalizedName CONTAINS 'purchaseorder' OR e.name CONTAINS 'PurchaseOrder')
  AND p.processType = 'CREATE'
RETURN p.processId, p.processName, p.steps, p.stepCount
LIMIT 5
```

#### 策略6：意图查询 ⭐新增

**用户问题**: "创建订单的业务意图是什么？"

**LLM理解**:
1. 识别实体：`purchaseorder`
2. 查询CREATE相关的Intent
3. 返回意图描述和约束

**Cypher查询**:
```cypher
MATCH (e:CoreEntity)-[:HAS_INTENT]->(i:Intent)
WHERE (e.normalizedName CONTAINS 'purchaseorder' OR e.name CONTAINS 'PurchaseOrder')
  AND (i.operation = 'CREATE' OR i.intentName CONTAINS '创建')
RETURN i.intentId, i.intentName, i.intentType, i.description, i.priority, i.constraints
LIMIT 5
```

#### 策略7：综合诊断（六层架构）⭐新增

**用户问题**: "为什么订单PO-12345创建失败了？请分析相关的规则、流程和意图"

**LLM理解**:
1. 查询订单实例（Ontology + Instance）
2. 查询Evidence属性（历史事件）
3. 查询Truth属性（当前状态）
4. 查询相关Rules（规则约束）
5. 查询相关Process（流程定义）
6. 查询相关Intent（业务意图）
7. 综合分析

**Cypher查询**:
```cypher
MATCH (po:Instance {tableName: 'gps_order_purchase_order'})
WHERE po.apply_no = 'PO-12345'
WITH po
MATCH (e:CoreEntity)
WHERE e.normalizedName CONTAINS 'purchaseorder'
OPTIONAL MATCH (e)-[:HAS_RULE]->(r:Rule)
OPTIONAL MATCH (e)-[:HAS_PROCESS {processType: 'CREATE'}]->(p:Process)
OPTIONAL MATCH (e)-[:HAS_INTENT]->(i:Intent)
WHERE i.operation = 'CREATE'
RETURN 
  po.apply_no as po_no,
  po.status as status,
  po.lastError as lastError,
  po.currentStatus as currentStatus,
  po.processStatus as processStatus,
  po.hasError as hasError,
  po.errorCount as errorCount,
  collect(DISTINCT r) as rules,
  collect(DISTINCT p) as processes,
  collect(DISTINCT i) as intents
LIMIT 1
```

### 7.3 LLM提示词模板

#### 模板1：实体查询

```
你是一个Neo4j查询专家。用户想要查询{实体描述}。

GPS系统Ontology信息：
- 实体名：{normalizedName}
- 表名：{tableName}
- 层级：{layer}

请生成Cypher查询语句：
1. 先查询实体定义确认
2. 然后查询实例数据
3. 使用LIMIT限制结果数量
```

#### 模板2：链路查询

```
你是一个业务链路诊断专家。用户想要诊断{业务问题}。

GPS系统业务链路：
{链路描述}

请生成Cypher查询语句：
1. 查询完整链路
2. 使用OPTIONAL MATCH处理缺失环节
3. 返回链路各环节的数据
4. 识别断点
```

#### 模板3：根因分析

```
你是一个根因分析专家。用户遇到了{问题描述}。

GPS系统Ontology信息：
- 相关实体：{实体列表}
- 可能根因：{根因列表}

请：
1. 查询相关数据
2. 分析可能原因
3. 给出诊断结论
```

#### 模板4：规则查询 ⭐新增

```
你是一个业务规则专家。用户想要查询{实体描述}的业务规则。

GPS系统Rules信息：
- 实体名：{normalizedName}
- 规则类型：{ruleType}（可选）

请生成Cypher查询语句：
1. 查询实体关联的Rules
2. 返回规则的详细信息（ruleId、ruleName、ruleType、condition、action、errorMessage）
3. 使用LIMIT限制结果数量
```

#### 模板5：流程查询 ⭐新增

```
你是一个业务流程专家。用户想要查询{实体描述}的{流程类型}流程。

GPS系统Process信息：
- 实体名：{normalizedName}
- 流程类型：{processType}（CREATE、CREATE_DRAFT、SUBMIT等）

请生成Cypher查询语句：
1. 查询实体关联的Processes
2. 返回流程的详细信息（processId、processName、steps、stepCount）
3. 如果查询流程步骤，返回steps数组的详细信息
```

#### 模板6：意图查询 ⭐新增

```
你是一个业务意图专家。用户想要查询{实体描述}的{操作类型}意图。

GPS系统Intent信息：
- 实体名：{normalizedName}
- 操作类型：{operation}（CREATE、UPDATE等）

请生成Cypher查询语句：
1. 查询实体关联的Intents
2. 返回意图的详细信息（intentId、intentName、intentType、description、priority、constraints）
3. 优先返回高优先级意图
```

#### 模板7：综合诊断（六层架构）⭐新增

```
你是一个业务诊断专家。用户遇到了{问题描述}。

GPS系统六层架构信息：
- Ontology层：实体定义
- Evidence层：历史事件（Instance的Evidence属性）
- Truth层：当前状态（Instance的Truth属性）
- Rules层：业务规则（Entity-HAS_RULE->Rule）
- Process层：业务流程（Entity-HAS_PROCESS->Process）
- Intent层：业务意图（Entity-HAS_INTENT->Intent）

请生成Cypher查询语句：
1. 查询Instance数据（Ontology层）
2. 查询Evidence属性（历史事件）
3. 查询Truth属性（当前状态）
4. 查询相关Rules（规则约束）
5. 查询相关Process（流程定义）
6. 查询相关Intent（业务意图）
7. 综合分析，给出诊断结论
```

### 7.4 LLM查询优化建议

#### ✅ 先查询实体定义

```cypher
// 先确认实体存在
MATCH (e:CoreEntity {normalizedName: 'purchaserequest'})
RETURN e
```

#### ✅ 使用批量查询

```cypher
// 批量查询多个PR
MATCH (pr:Instance {tableName: 'gps_pr_purchase_request'})
WHERE pr.gps_apply_no IN $pr_nos
RETURN pr
```

#### ✅ 使用关系查询

```cypher
// 优先使用关系查询
MATCH (pr:Instance)-[:HAS_REQUIREMENT]->(req:Instance)
RETURN pr, req
```

#### ✅ 限制查询范围

```cypher
// 使用WHERE和LIMIT限制
MATCH (pr:Instance {tableName: 'gps_pr_purchase_request'})
WHERE pr.status = 'APPROVED'
RETURN pr
LIMIT 10
```

#### ✅ 查询Rules、Process、Intent ⭐新增

```cypher
// 查询实体的业务逻辑（Rules + Process + Intent）
MATCH (e:CoreEntity {normalizedName: 'purchaseorder'})
OPTIONAL MATCH (e)-[:HAS_RULE]->(r:Rule)
OPTIONAL MATCH (e)-[:HAS_PROCESS]->(p:Process)
OPTIONAL MATCH (e)-[:HAS_INTENT]->(i:Intent)
RETURN e.name, count(DISTINCT r) as rules, count(DISTINCT p) as processes, count(DISTINCT i) as intents
```

#### ✅ 查询Evidence和Truth属性 ⭐新增

```cypher
// 查询Instance的Evidence和Truth属性
MATCH (i:Instance {tableName: 'gps_order_purchase_order'})
WHERE i.apply_no = 'PO-12345'
RETURN 
  i.apply_no as po_no,
  i.lastError as lastError,
  i.hasError as hasError,
  i.currentStatus as currentStatus,
  i.processStatus as processStatus
```

---

## 八、最佳实践

### 8.1 查询最佳实践

#### ✅ 使用关系查询

```cypher
// 推荐：使用关系查询（快）
MATCH (pr:Instance)-[:HAS_REQUIREMENT]->(req:Instance)
RETURN pr, req
```

#### ❌ 避免笛卡尔积

```cypher
// 不推荐：多个OPTIONAL MATCH没有关联条件
MATCH (pr:Instance)
OPTIONAL MATCH (req:Instance)  // ❌ 没有WHERE关联
OPTIONAL MATCH (pt:Instance)   // ❌ 没有WHERE关联
RETURN pr, req, pt
```

#### ✅ 使用WITH分步查询

```cypher
// 推荐：使用WITH分步查询
MATCH (pr:Instance)
WITH pr
OPTIONAL MATCH (req:Instance)
WHERE req.pr_no = pr.gps_apply_no
WITH pr, req
OPTIONAL MATCH (pt:Instance)
WHERE pt.material_code = req.material_code
RETURN pr, req, pt
```

### 8.2 性能优化

#### 1. 创建外键关系

运行 `create_foreign_key_relationships.py` 创建关系边，性能提升10-100倍。

#### 2. 使用索引

确保查询字段有索引（如`tableName`、`material_code`）。

#### 3. 限制结果集

使用`LIMIT`避免返回过多数据。

#### 4. 批量查询

使用`IN`操作符批量查询，避免N+1问题。

### 8.3 LLM集成最佳实践

#### 1. 先理解再查询

- 先查询实体定义，理解业务概念
- 再查询实例数据

#### 2. 结构化提示词

- 提供清晰的业务背景
- 包含实体和关系信息
- 指定输出格式

#### 3. 错误处理

- 处理查询失败情况
- 提供友好的错误信息
- 建议替代查询方案

---

## 九、常见问题

### Q1: 如何查询某个实体的所有实例？

```cypher
MATCH (e:CoreEntity {normalizedName: 'purchaserequest'})
<-[:INSTANCE_OF]-(i:Instance)
RETURN i
LIMIT 10
```

### Q2: 如何查询实例的实体定义？

```cypher
MATCH (i:Instance {instanceId: '315'})
-[:INSTANCE_OF]->(e:CoreEntity)
RETURN i, e
```

### Q3: 如何查询两个实例之间的关联？

**方法1：使用关系查询（推荐）**
```cypher
MATCH (pr:Instance)-[:HAS_REQUIREMENT]->(req:Instance)
RETURN pr, req
```

**方法2：使用属性值匹配**
```cypher
MATCH (pr:Instance {tableName: 'gps_pr_purchase_request'})
MATCH (req:Instance {tableName: 'gps_dmd_demand_item_purchase_info'})
WHERE req.pr_no = pr.gps_apply_no
RETURN pr, req
```

### Q4: 查询很慢怎么办？

1. **创建外键关系**：运行`create_foreign_key_relationships.py`
2. **使用关系查询**：避免属性值匹配
3. **限制查询范围**：使用WHERE和LIMIT
4. **批量查询**：避免N+1问题

### Q5: 如何理解实体之间的关系？

```cypher
// 查询实体定义之间的关系
MATCH (e1:CoreEntity)-[r]->(e2:CoreEntity)
RETURN e1.normalizedName as fromEntity,
       type(r) as relationType,
       e2.normalizedName as toEntity
LIMIT 50
```

### Q6: Instance和Entity有什么区别？

- **Entity（实体）**：业务概念的定义，如"采购订单是什么"
- **Instance（实例）**：具体的业务数据，如"PR20221000389这个采购申请"

关系：`(Instance) -[:INSTANCE_OF]-> (Entity)`

### Q7: 如何查询实体的业务规则？⭐新增

```cypher
// 查询订单相关的所有规则
MATCH (e:CoreEntity)-[:HAS_RULE]->(r:Rule)
WHERE e.normalizedName CONTAINS 'purchaseorder'
RETURN r.ruleId, r.ruleName, r.ruleType, r.condition, r.action
LIMIT 10
```

### Q8: 如何查询实体的业务流程？⭐新增

```cypher
// 查询订单创建流程
MATCH (e:CoreEntity)-[:HAS_PROCESS]->(p:Process)
WHERE e.normalizedName CONTAINS 'purchaseorder' AND p.processType = 'CREATE'
RETURN p.processId, p.processName, p.steps
LIMIT 5
```

### Q9: 如何查询实体的业务意图？⭐新增

```cypher
// 查询订单创建相关的意图
MATCH (e:CoreEntity)-[:HAS_INTENT]->(i:Intent)
WHERE e.normalizedName CONTAINS 'purchaseorder' AND i.operation = 'CREATE'
RETURN i.intentId, i.intentName, i.intentType, i.description, i.priority
LIMIT 5
```

### Q10: Evidence和Truth在哪里？⭐新增

**重要**：Evidence和Truth作为Instance节点的属性存储（避免节点爆炸），不是独立的节点。

**查询Evidence属性**：
```cypher
MATCH (i:Instance {tableName: 'gps_order_purchase_order'})
WHERE i.hasError = true OR i.lastError IS NOT NULL
RETURN i.apply_no, i.lastError, i.lastErrorTime, i.errorCount
```

**查询Truth属性**：
```cypher
MATCH (i:Instance {tableName: 'gps_order_purchase_order'})
WHERE i.currentStatus IS NOT NULL OR i.processStatus IS NOT NULL
RETURN i.apply_no, i.currentStatus, i.processStatus, i.isDelayed
```

### Q11: 如何综合查询六层架构数据？⭐新增

```cypher
// 查询订单的完整业务逻辑（Rules + Process + Intent）
MATCH (e:CoreEntity {normalizedName: 'purchaseorder'})
OPTIONAL MATCH (e)-[:HAS_RULE]->(r:Rule)
OPTIONAL MATCH (e)-[:HAS_PROCESS]->(p:Process)
OPTIONAL MATCH (e)-[:HAS_INTENT]->(i:Intent)
RETURN 
  e.name as entityName,
  count(DISTINCT r) as ruleCount,
  count(DISTINCT p) as processCount,
  count(DISTINCT i) as intentCount
```

---

## 十、参考资源

### 10.1 相关文档

- [优先级1场景测试报告.md](优先级1场景测试报告.md)
- [INSTANCE_ENTITY_ARCHITECTURE.md](INSTANCE_ENTITY_ARCHITECTURE.md)
- [外键关系优化指南.md](外键关系优化指南.md)
- [性能优化说明.md](性能优化说明.md)

### 10.2 查询脚本

- `test_priority1_scenario.py` - 优先级1场景测试
- `llm_priority1_validator.py` - LLM验证脚本
- `create_foreign_key_relationships.py` - 创建外键关系

### 10.3 Neo4j平台

- **Web界面**: http://neo4j-test.nioint.com:7474/
- **用户名**: gps_ontology_s
- **密码**: 请从 `scripts/neo4j_acc.md` 配置文件中获取

---

## 十一、附录

### 11.1 核心实体列表

| normalizedName | 中文名 | 层级 | 表名 |
|---------------|--------|------|------|
| purchaserequest | 采购申请 | L1-Core | gps_pr_purchase_request |
| purchaseorder | 采购订单 | L1-Core | gps_order_purchase_order |
| contract | 合同 | L1-Core | gps_cont_contract_base |
| vendor | 供应商 | L1-Core | gps_vendor_info |
| material | 物料 | L1-Core | gps_mtl_dp_material |
| price | 价格 | L1-Core | gps_price_center_pricing_task |
| workflowtask | 工作流任务 | L1-Core | gps_pr_workflow_task |
| goodsreceipt | 收货单 | L1-Core | gps_order_goods_receipt |

### 11.2 常用查询模板

#### 模板1：查询实体定义

```cypher
MATCH (e:CoreEntity {normalizedName: $entityName})
RETURN e
```

#### 模板2：查询实体实例

```cypher
MATCH (e:CoreEntity {normalizedName: $entityName})
<-[:INSTANCE_OF]-(i:Instance)
RETURN i
LIMIT $limit
```

#### 模板3：查询实例链路

```cypher
MATCH (i1:Instance {tableName: $table1})
-[:$relation]->
(i2:Instance {tableName: $table2})
RETURN i1, i2
LIMIT $limit
```

### 11.3 字段映射表

| 业务概念 | Entity属性 | Instance属性 | 说明 |
|---------|-----------|-------------|------|
| 实体名 | normalizedName | - | 标准化实体名 |
| 表名 | db_table_name | tableName | 数据库表名 |
| 实例ID | - | instanceId | 主键值 |
| PR号 | - | gps_apply_no | PR业务编号 |
| PO号 | - | apply_no | PO业务编号 |
| 物料代码 | - | material_code | 物料编号 |

### 11.4 六层架构统计 ⭐新增

#### Rules层统计
- **Rule节点总数**: 422个
- **规则类型分布**:
  - VALIDATION: 323条
  - PROCESS_CHAIN: 99条
- **Entity-Rule关系**: 422个

#### Process层统计
- **Process节点总数**: 80个
- **流程类型分布**:
  - CREATE: 17个
  - CREATE_DRAFT: 5个
  - UPDATE_DRAFT: 7个
  - SUBMIT: 5个
  - CANCEL: 7个
  - QUERY: 10个
  - 其他: 29个
- **Entity-Process关系**: 80个

#### Intent层统计
- **Intent节点总数**: 274个
- **意图类型分布**:
  - CONSTRAINT: 252个
  - GOAL: 21个
  - VALUE: 1个
- **Entity-Intent关系**: 274个

#### PurchaseOrder实体示例
- **规则数量**: 110个
- **流程数量**: 27个
- **意图数量**: 58个

### 11.5 六层架构查询模板 ⭐新增

#### 模板1：查询实体的Rules

```cypher
MATCH (e:CoreEntity)-[:HAS_RULE]->(r:Rule)
WHERE e.normalizedName = $entityName
RETURN r.ruleId, r.ruleName, r.ruleType, r.condition, r.action
LIMIT $limit
```

#### 模板2：查询实体的Processes

```cypher
MATCH (e:CoreEntity)-[:HAS_PROCESS]->(p:Process)
WHERE e.normalizedName = $entityName AND p.processType = $processType
RETURN p.processId, p.processName, p.steps, p.stepCount
LIMIT $limit
```

#### 模板3：查询实体的Intents

```cypher
MATCH (e:CoreEntity)-[:HAS_INTENT]->(i:Intent)
WHERE e.normalizedName = $entityName AND i.operation = $operation
RETURN i.intentId, i.intentName, i.intentType, i.description, i.priority
LIMIT $limit
```

#### 模板4：查询Instance的Evidence和Truth

```cypher
MATCH (i:Instance {tableName: $tableName})
WHERE i.instanceId = $instanceId OR i.apply_no = $businessId
RETURN 
  i.*,
  i.lastError as evidence_lastError,
  i.hasError as evidence_hasError,
  i.currentStatus as truth_currentStatus,
  i.processStatus as truth_processStatus
LIMIT 1
```

#### 模板5：综合诊断查询

```cypher
MATCH (i:Instance {tableName: $tableName})
WHERE i.instanceId = $instanceId OR i.apply_no = $businessId
WITH i
MATCH (e:CoreEntity)
WHERE e.normalizedName = $entityName
OPTIONAL MATCH (e)-[:HAS_RULE]->(r:Rule)
OPTIONAL MATCH (e)-[:HAS_PROCESS]->(p:Process)
OPTIONAL MATCH (e)-[:HAS_INTENT]->(i:Intent)
RETURN 
  i.*,
  collect(DISTINCT r) as rules,
  collect(DISTINCT p) as processes,
  collect(DISTINCT i) as intents
LIMIT 1
```

---

**文档版本**: v2.0  
**最后更新**: 2024-12-11  
**维护者**: GPS Ontology Team  
**更新内容**: 添加六层架构（Evidence、Truth、Rules、Process、Intent）说明

