---
created: '2026-07-24'
tags: [NIO, AI]
---

---tags: [NIO]
created: 2026-07-08
updated: 2026-07-22
status: draft
---
> [!summary] GPS系统关系类型分析总结
> - **核心**：GPS知识图谱中目前包含**两类关系**： - **业务关系**（Business Relationships）：从业务逻辑代码中提取的动态关系 - **结构关系**（Structural Relat


# GPS系统关系类型分析总结

## 一、关系类型概览

GPS知识图谱中目前包含**两类关系**：
- **业务关系**（Business Relationships）：从业务逻辑代码中提取的动态关系
- **结构关系**（Structural Relationships）：从实体类结构定义中提取的静态关系

---

## 二、业务关系类型（Business Relationships）

业务关系从代码的业务逻辑中提取，反映实体间的动态交互行为。

### 2.1 `publishes` - 领域事件发布关系

**含义**：表示一个实体发布领域事件，通知其他实体或系统发生了某个业务事件。

**提取来源**：从Entity类中查找事件发布代码
- `eventPublisher.publish(XXXEvent.of(...))`
- `domainEventPublisher.publish(XXXEvent.of(...))`

**数量统计**：38条

**典型用例**：
1. **采购申请发布创建事件**
   ```
   purchaserequest --[publishes]--> prcreateddomain
   ```
   - 源实体：`purchaserequest`（采购申请）
   - 目标实体：`prcreateddomain`（采购申请创建领域事件）
   - 来源文件：`PurchaseRequestEntity.java`
   - 方法：`batchSaveOperationLog`
   - 事件：`PrCreatedDomainEvent`

2. **采购申请发布审核待处理事件**
   ```
   purchaserequest --[publishes]--> prauditpendingdomain
   ```
   - 事件：`PrAuditPendingDomainEvent`
   - 含义：当采购申请进入审核待处理状态时发布

3. **采购申请发布工作流同步事件**
   ```
   purchaserequest --[publishes]--> prsyncworkflowdomain
   ```
   - 事件：`PrSyncWorkflowDomainEvent`
   - 含义：当采购申请需要同步工作流状态时发布

**业务价值**：
- 识别领域事件驱动架构（Event-Driven Architecture）
- 追踪业务状态变更的传播路径
- 发现系统解耦点和集成点

---

### 2.2 `involves` - 服务方法涉及关系

**含义**：表示在同一个Service方法中，多个实体被同时操作或引用，说明这些实体在业务逻辑上有关联。

**提取来源**：从Service类的方法体中提取
- 查找方法体中引用的多个Entity类型
- 如果方法中涉及2个或更多实体，则建立它们之间的`involves`关系

**数量统计**：2139条（最多）

**典型用例**：
1. **Bundle和Task的关联操作**
   ```
   bundle --[involves]--> task
   task --[involves]--> bundle
   ```
   - 服务：`BundleCategorySimplificationService`
   - 方法：`deleteBundle`
   - 含义：删除Bundle时同时操作Task实体

2. **Bundle自身的关联操作**
   ```
   bundle --[involves]--> bundle
   ```
   - 方法：`resumeBundle`
   - 含义：恢复Bundle时可能涉及其他Bundle实体

**业务价值**：
- 识别业务操作的实体组合模式
- 发现跨实体的业务事务边界
- 理解复杂业务逻辑的实体协作关系

---

### 2.3 `queries` - Repository查询关系

**含义**：表示Repository通过查询方法访问某个实体，反映数据访问层的查询模式。

**提取来源**：从Repository接口中提取查询方法
- 方法名模式：`findByXXX`, `getByXXX`, `queryByXXX`
- 从方法名和返回类型推断目标实体

**数量统计**：1623条

**典型用例**：
1. **文件Repository查询文件实体**
   ```
   file --[queries]--> file
   ```
   - Repository：`FileRepository`
   - 方法：`getFileDate`
   - 含义：文件Repository查询文件实体本身

2. **通过UUID查询文件**
   ```
   file --[queries]--> byfileuuid
   ```
   - 方法：`findByFileUuid`
   - 含义：通过文件UUID查询文件

3. **批量查询文件**
   ```
   file --[queries]--> byfileuuids
   ```
   - 方法：`findByFileUuids`
   - 含义：通过多个UUID批量查询文件

**业务价值**：
- 识别数据访问模式
- 发现实体间的查询依赖关系
- 优化数据库查询性能

---

### 2.4 `triggers_create` - 创建工作流任务关系

**含义**：表示实体触发创建工作流任务，反映业务流程的自动化触发机制。

**提取来源**：从Entity类中查找工作流触发代码
- 查找工作流API调用：`workflowService.create(...)`
- 识别触发动作类型：`create`

**数量统计**：2条

**典型用例**：
1. **采购申请触发创建工作流任务**
   ```
   purchaserequest --[triggers_create]--> workflowtask
   ```
   - 源实体：`purchaserequest`（采购申请）
   - 目标实体：`workflowtask`（工作流任务）
   - 来源文件：`PurchaseRequestEntity.java`
   - 方法：`batchSaveOperationLog`
   - 动作：`create`

**业务价值**：
- 识别业务流程的自动化触发点
- 追踪工作流任务的创建来源
- 理解业务流程的自动化机制

---

### 2.5 `triggers_unknown` - 未知类型工作流触发关系

**含义**：表示实体触发了工作流，但无法确定具体的触发动作类型。

**提取来源**：从Entity类中查找工作流相关代码，但无法明确识别动作类型

**数量统计**：12条

**典型用例**：
1. **BR采购申请触发工作流任务**
   ```
   brpurchaserequest --[triggers_unknown]--> workflowtask
   ```
   - 源实体：`brpurchaserequest`（BR采购申请）
   - 目标实体：`workflowtask`（工作流任务）
   - 来源文件：`BrPurchaseRequestEntity.java`
   - 方法：`getInjector`
   - 动作：`unknown`（无法识别）

**业务价值**：
- 识别可能的工作流触发点
- 标记需要进一步分析的业务流程
- 发现代码中隐式的工作流调用

---

## 三、结构关系类型（Structural Relationships）

结构关系从实体类的字段定义中提取，反映实体间的静态结构关系。

### 3.1 `contains` - 包含关系

**含义**：表示一个实体包含另一个实体的集合，通常是"一对多"的聚合关系。

**提取来源**：从Entity类的字段定义中提取
- 模式：`private List<SomeEntity> fieldName;`
- 表示父实体包含多个子实体

**数量统计**：168条

**典型用例**：
1. **采购订单包含订单明细**
   ```
   purchaseorder --[contains]--> purchaseorderdetail
   ```
   - 源实体：`purchaseorder`（采购订单）
   - 目标实体：`purchaseorderdetail`（采购订单明细）
   - 字段：`purchaseOrderDetailEntityList`
   - 含义：一个采购订单包含多个订单明细

2. **BR采购申请包含文件**
   ```
   brpurchaserequest --[contains]--> FileEntity
   ```
   - 字段：文件列表字段
   - 含义：BR采购申请包含多个文件

3. **管理BR订单包含文件**
   ```
   mgtbrorder --[contains]--> mgtfile
   ```
   - 字段：`fileEntityList`
   - 含义：管理BR订单包含多个文件

**业务价值**：
- 识别聚合根和聚合内实体
- 理解实体的层次结构
- 设计数据一致性边界

---

### 3.2 `has` - 拥有关系

**含义**：表示一个实体拥有另一个实体，通常是"一对一"或"多对一"的关联关系。

**提取来源**：从Entity类的字段定义中提取
- 模式：`private SomeEntity fieldName;`
- 表示实体间的引用关系

**数量统计**：110条

**典型用例**：
1. **采购订单拥有工作流任务**
   ```
   purchaseorder --[has]--> workflowtask
   ```
   - 源实体：`purchaseorder`（采购订单）
   - 目标实体：`workflowtask`（工作流任务）
   - 字段：`workflowTaskEntity`
   - 含义：一个采购订单关联一个工作流任务

2. **管理BR订单拥有工作流任务**
   ```
   mgtbrorder --[has]--> workflowtask
   ```
   - 字段：`workflowTaskEntity`
   - 含义：管理BR订单关联工作流任务

3. **收货单拥有请求日志**
   ```
   goodsreceipt --[has]--> requestlog
   ```
   - 字段：`requestLogEntity`
   - 含义：收货单关联请求日志

**业务价值**：
- 识别实体间的引用关系
- 理解数据模型的外键关系
- 设计实体间的导航路径

---

## 四、关系类型对比总结

| 关系类型 | 类别 | 数量 | 方向性 | 提取来源 | 业务含义 |
|---------|------|------|--------|---------|---------|
| `publishes` | 业务关系 | 38 | 单向 | 领域事件发布 | 实体发布业务事件 |
| `involves` | 业务关系 | 2139 | 双向 | Service方法 | 业务操作涉及多个实体 |
| `queries` | 业务关系 | 1623 | 单向 | Repository查询 | 数据访问查询关系 |
| `triggers_create` | 业务关系 | 2 | 单向 | 工作流触发 | 创建工作流任务 |
| `triggers_unknown` | 业务关系 | 12 | 单向 | 工作流触发 | 未知类型工作流触发 |
| `contains` | 结构关系 | 168 | 单向 | 实体字段（List） | 一对多聚合关系 |
| `has` | 结构关系 | 110 | 单向 | 实体字段（单个） | 一对一/多对一关联关系 |

---

## 五、关系使用建议

### 5.1 业务关系使用场景

1. **业务流程分析**
   - 使用`publishes`关系追踪事件驱动的业务流程
   - 使用`triggers_create`关系理解工作流自动化

2. **服务依赖分析**
   - 使用`involves`关系识别服务方法的实体依赖
   - 使用`queries`关系分析数据访问模式

3. **系统集成分析**
   - 使用`publishes`关系发现系统解耦点
   - 使用`triggers_*`关系理解工作流集成

### 5.2 结构关系使用场景

1. **数据模型设计**
   - 使用`contains`关系设计聚合边界
   - 使用`has`关系设计实体关联

2. **数据一致性分析**
   - 使用`contains`关系确定事务边界
   - 使用`has`关系分析引用完整性

3. **API设计**
   - 使用结构关系设计实体导航路径
   - 使用结构关系优化查询性能

---

## 六、知识图谱查询示例

### 6.1 查询所有业务关系

```cypher
MATCH (a)-[r]->(b)
WHERE r.type IN ['publishes', 'involves', 'queries', 'triggers_create', 'triggers_unknown']
RETURN a.name, r.type, b.name
LIMIT 20
```

### 6.2 查询采购申请的所有关系

```cypher
MATCH (pr:Entity {normalizedName: 'purchaserequest'})-[r]->(target)
RETURN pr.name, r.type, target.name
```

### 6.3 查询包含关系（聚合关系）

```cypher
MATCH (parent)-[r:contains]->(child)
RETURN parent.name, child.name
LIMIT 20
```

### 6.4 查询事件发布关系

```cypher
MATCH (source)-[r:publishes]->(event)
RETURN source.name, event.name
```

### 6.5 查询工作流触发关系

```cypher
MATCH (entity)-[r]->(wt:Entity {normalizedName: 'workflowtask'})
WHERE r.type STARTS WITH 'triggers'
RETURN entity.name, r.type
```

---

## 七、关系提取改进建议

### 7.1 业务关系改进

1. **`triggers_unknown`关系优化**
   - 改进工作流触发动作的识别逻辑
   - 支持更多工作流API模式识别

2. **`queries`关系优化**
   - 改进目标实体的推断逻辑
   - 支持更复杂的查询方法名模式

3. **新增关系类型**
   - `calls`：Service之间的调用关系
   - `depends_on`：实体间的依赖关系
   - `validates`：实体间的验证关系

### 7.2 结构关系改进

1. **新增关系类型**
   - `extends`：继承关系
   - `implements`：实现关系
   - `references`：引用关系（更细粒度）

2. **关系方向性**
   - 明确关系的方向性语义
   - 支持双向关系的表示

---

## 八、关系类型统计汇总

### 8.1 业务关系统计

| 关系类型 | 数量 | 占比 | 说明 |
|---------|------|------|------|
| `involves` | 2,139 | 56.1% | 业务操作涉及多个实体，是最常见的关系 |
| `queries` | 1,623 | 42.6% | Repository查询关系，反映数据访问模式 |
| `publishes` | 38 | 1.0% | 领域事件发布，事件驱动架构的关键 |
| `triggers_unknown` | 12 | 0.3% | 未知类型工作流触发 |
| `triggers_create` | 2 | 0.1% | 创建工作流任务 |
| **总计** | **3,814** | **100%** | |

### 8.2 结构关系统计

| 关系类型 | 数量 | 占比 | 说明 |
|---------|------|------|------|
| `contains` | 168 | 60.4% | 一对多聚合关系 |
| `has` | 110 | 39.6% | 一对一/多对一关联关系 |
| **总计** | **278** | **100%** | |

### 8.3 总体统计

- **关系总数**：4,092条
- **业务关系占比**：93.2%（3,814条）
- **结构关系占比**：6.8%（278条）

### 8.4 最常见的实体对

#### `involves`关系最常见的实体对：
1. `nomination -> nomination`（出现62次）- 报价提名实体自身的操作
2. `reqforquote -> reqforquote`（出现59次）- 询价请求实体自身的操作
3. `reqforquote -> create`（出现45次）- 询价请求创建操作
4. `reqforquote -> nomination`（出现32次）- 询价请求涉及报价提名
5. `nomination -> create`（出现32次）- 报价提名创建操作

#### `publishes`关系最常见的实体对：
1. `vendorinfo -> nmpmessagedomain`（出现6次）- 供应商信息发布NMP消息
2. `vendorchangeinfo -> nmpmessagedomain`（出现6次）- 供应商变更信息发布NMP消息
3. `goodsreceipt -> grordersaprevokeddomain`（出现4次）- 收货单发布订单SAP撤销事件
4. `purchaserequest -> prcreateddomain`（出现2次）- 采购申请发布创建事件
5. `purchaserequest -> prauditpendingdomain`（出现2次）- 采购申请发布审核待处理事件

#### `queries`关系最常见的实体对：
1. `reqforquote -> reqforquote`（出现36次）- 询价请求Repository查询自身
2. `pricecenterflowquery -> priceflowitem`（出现33次）- 价格中心流程查询价格流程项
3. `file -> file`（出现22次）- 文件Repository查询文件实体
4. `category -> categorynode`（出现19次）- 分类查询分类节点
5. `category -> categorytree`（出现19次）- 分类查询分类树

#### `triggers_*`关系最常见的实体对：
1. `purchaserequest -> workflowtask`（`triggers_create`出现2次，`triggers_unknown`出现6次）
2. `purchaseorder -> workflowtask`（`triggers_unknown`出现4次）
3. `brpurchaserequest -> workflowtask`（`triggers_unknown`出现2次）

---

## 九、总结

GPS知识图谱目前包含**7种关系类型**：
- **5种业务关系**：反映动态的业务逻辑交互（共3,814条，占93.2%）
- **2种结构关系**：反映静态的数据模型结构（共278条，占6.8%）

这些关系类型共同构成了GPS系统的完整知识图谱，为系统分析、架构优化和业务理解提供了重要支撑。

**关键洞察**：
1. **`involves`关系数量最多**（2,139条，占56.1%），说明业务逻辑中实体协作非常频繁，特别是询价请求（reqforquote）和报价提名（nomination）相关的业务操作
2. **`queries`关系数量次之**（1,623条，占42.6%），说明数据访问模式复杂，询价请求、价格流程、文件管理等实体的查询操作频繁
3. **`publishes`关系较少**（38条，占1.0%），但非常重要，反映了事件驱动架构的关键节点，主要集中在供应商信息、采购申请、收货单等核心业务实体
4. **工作流触发关系较少**（14条），主要集中在采购申请、采购订单等核心业务流程实体
5. **结构关系**（`contains`和`has`）共278条，构成了系统的核心数据模型骨架，其中`contains`关系（168条）略多于`has`关系（110条）

**业务价值**：
- 通过关系分析可以识别核心业务流程（如采购申请、询价请求）
- 可以发现高频操作的实体组合（如reqforquote + nomination）
- 可以理解事件驱动的集成点（如供应商信息发布NMP消息）
- 可以优化数据访问模式（如文件、分类的查询操作）


---

> 回到 → [[NIO|🚗 蔚来]]
