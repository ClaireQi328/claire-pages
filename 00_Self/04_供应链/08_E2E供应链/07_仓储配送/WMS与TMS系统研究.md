---
created: '2026-07-24'
tags: [Self, 供应链, 物流]
---

---tags: [Self, 供应链]
created: 2026-07-08
updated: 2026-07-22
status: draft
---
> [!summary] WMS 与 TMS 系统研究
> - **核心**：📅 创建于 2026-07-02
> - **要点**：一、WMS（Warehouse Management System）仓储管理系统
> - **要点**：1.1 系统架构
> - **要点**：1.2 核心功能模块
> - **要点**：1.3 WMS 层级对比

# WMS 与 TMS 系统研究

> 📅 创建于 2026-07-02
> 🎯 目标：掌握 WMS/TMS 核心功能、架构、集成点、选型与实施
> 📌 关联：[[2026-07-02 端到端供应链功能研究]]、[[2026-07-02 供应链控制塔研究]]

---

## 一、WMS（Warehouse Management System）仓储管理系统

### 1.1 系统架构

```
┌─────────────────────────────────────────────────┐
│  表现层：Web 门户 / 移动端 App / 管理驾驶舱        │
├─────────────────────────────────────────────────┤
│  业务逻辑层：                                     │
│  ┌──────────┐ ┌───────────┐ ┌──────────────┐   │
│  │ 收货/上架 │ │ 库存管理  │ │ 订单执行引擎  │   │
│  └──────────┘ └───────────┘ └──────────────┘   │
│  ┌──────────┐ ┌───────────┐ ┌──────────────┐   │
│  │ 拣选引擎 │ │ 劳动力管理 │ │ 账单/结算     │   │
│  └──────────┘ └───────────┘ └──────────────┘   │
├─────────────────────────────────────────────────┤
│  集成层：RESTful API | EDI | Webhook | ESB/iPaaS │
├─────────────────────────────────────────────────┤
│  外部系统：ERP | TMS | OMS | 电商平台 | WCS/MHE   │
├─────────────────────────────────────────────────┤
│  数据层：数据库 | 数据湖 | AI/ML 模型 | 数字孪生    │
└─────────────────────────────────────────────────┘
```

### 1.2 核心功能模块

| 模块 | 功能描述 | 关键技术 |
|------|---------|---------|
| **Receiving & Putaway** | 入库处理、ASN 预到通知、质检、智能上架策略 | Barcode/RFID、AI 上架推荐 |
| **Inventory Management** | 实时库存追踪、Cycle Counting、批次/序列号管理、多仓协同 | 实时数据库、IoT 传感器 |
| **Order Management** | 订单处理、Wave Planning（波次规划）、优先级排序 | 规则引擎、AI 优先级算法 |
| **Picking** | 单件/批量/波次/无波次拣选、Pick-to-Light、Voice Picking | AMR/AGV、计算机视觉 |
| **Packing & Shipping** | 包装优化、承运商对接、面单生成 | 路径算法、自动化设备 |
| **Labor Management** | 任务分配、绩效追踪、Task Interleaving（任务穿插） | AI 调度、实时监控 |
| **Slotting Optimization** | AI 驱动的动态货位分配、基于需求预测的产品放置 | 机器学习、需求感知 |
| **Cross-docking** | 无存储直接转运、Flow-through Processing | 实时协调引擎 |
| **Returns / RMA** | 逆向物流、质检、重新上架 | 逆向流程引擎 |
| **Yard & Dock Management** | 月台/码头调度、3PL 费用结算 | GPS 定位、预约系统 |

### 1.3 WMS 层级对比

| 维度 | 基础 WMS（Tier 1） | 高级 WMS（Tier 2/3） |
|------|-------------------|---------------------|
| **库存追踪** | Barcode/RFID 基础定位 | 实时可视化、批次/序列号、循环盘点、多仓 |
| **收货上架** | 基础入库、简单上架规则 | 智能分配、Cross-docking、ASN 支持 |
| **拣选** | 基础拣选单、简单 Wave/Batch | 高级算法（Zone/Cluster/Wave Optimization） |
| **订单管理** | 简单履行流程 | 多渠道履行、复杂订单编排、优先级规则 |
| **报表分析** | 基础运营报表 | KPI 仪表盘、预测分析、劳动力管理 |
| **集成能力** | 有限 ERP/电商集成 | 深度 ERP/TMS/OMS/电商集成（EDI/API） |
| **劳动力管理** | 无或基础 | Task Interleaving、绩效追踪、人员优化 |
| **自动化** | 无 | 输送线/WCS 集成、Robotics、Voice Picking |
| **部署时间** | 天级到周级 | 月级到年级 |
| **成本** | 低 TCO，订阅制 | 高 TCO，定制授权 |

**代表产品**：

| 层级 | 产品 |
|------|------|
| 基础 WMS | Zoho Inventory、inFlow、Fishbowl |
| 中端 WMS | Cin7、NetSuite WMS、Korber (HighJump)、Snapfulfil |
| 企业级 WMS | Manhattan Active WM、Blue Yonder、SAP EWM、Oracle WMS Cloud |

---

## 二、TMS（Transportation Management System）运输管理系统

### 2.1 系统架构

```
┌─────────────────────────────────────────────────┐
│  用户界面：Web 门户 / 移动端 App / 管理仪表盘      │
├─────────────────────────────────────────────────┤
│  应用层：                                         │
│  ┌──────────┐ ┌───────────┐ ┌──────────────┐   │
│  │ 规划引擎 │ │ 执行引擎   │ │ 结算引擎      │   │
│  │ Planning │ │ Execution │ │ Settlement   │   │
│  └──────────┘ └───────────┘ └──────────────┘   │
├─────────────────────────────────────────────────┤
│  集成层：API | EDI | Webhook | ESB/MQ | Kafka     │
├─────────────────────────────────────────────────┤
│  外部系统：ERP | WMS | 承运商系统 | GPS/IoT | LSP  │
├─────────────────────────────────────────────────┤
│  数据层：数据库 | 数据湖 | ML/AI 模型              │
└─────────────────────────────────────────────────┘
```

### 2.2 核心功能模块

| 模块 | 功能描述 | 关键特性 |
|------|---------|---------|
| **Order Management** | 订单录入与追踪、BOL 创建、Freight Bill 生成、Shipment Consolidation | 自动化工作流 |
| **Route Planning & Optimization** | VRP 求解器、Multi-stop Planning、GIS 集成 | AI/ML 实时动态优化 |
| **Carrier Management** | 承运商选择与评级、合同与费率管理、Performance Scorecard | 自动化招标 |
| **Freight Audit & Payment** | Invoice 三方匹配、争议管理、成本分摊 | 自动化审计 |
| **Shipment Tracking** | 实时 GPS 追踪、Exception Management、ETA 预测、POD | IoT/ELD 集成 |
| **Rating & Optimization** | Mode Selection（LTL/FTL/Parcel/多式联运）、Spot vs Contract 费率 | 成本优化算法 |
| **Dock Scheduling** | 预约调度、Yard Management | 与 WMS 协同 |
| **Compliance** | 海关/贸易合规、危险品处理、审计追踪 | 法规引擎 |

### 2.3 TMS 优化能力详解

#### 路线规划（Route Planning）

| 能力 | 描述 |
|------|------|
| Dynamic Routing | 基于实时交通、天气、配送窗口的实时路线调整 |
| Multi-stop Optimization | 序列化站点以最小化里程和燃油成本 |
| Constraint-based Planning | 考虑司机 Hours-of-Service、车辆容量、客户时间窗口 |
| VRP Solvers | Vehicle Routing Problem 求解器，AI/ML 驱动 |
| Last-mile Optimization | 最后一公里配送优化 |
| EV Fleet Routing | 电动车辆充电/续航约束的路线规划 |

#### 装载优化（Load Optimization）

| 能力 | 描述 |
|------|------|
| Cube/Weight Optimization | 最大化拖车利用率，目标 >85% |
| Load Building / Consolidation | 合并运输以降低总物流成本 |
| Load Tendering | 自动化承运商选择，基于成本/服务水平/绩效 |
| Multi-modal Optimization | 评估 LTL/FTL/Parcel/多式联运选项 |
| Mixed SKU Planning | 混合 SKU 装载优化 |

#### AI/ML 在 TMS 中的应用

| 应用场景 | 描述 |
|---------|------|
| 实时路线再优化 | AI/ML 驱动的实时路线重规划 |
| Digital Twin 仿真 | 装载规划的数字孪生模拟 |
| Carbon Footprint Tracking | 路线决策中的碳足迹追踪 |
| Predictive ETA | AI 预测到达时间 |
| 异常预测 | 提前识别潜在延误/问题 |

**典型优化效果**：运输成本降低 15-25%、燃油效率提升 10-20%、装载利用率提升至 85%+

---

## 三、WMS-TMS 集成

### 3.1 关键集成场景

| 集成场景 | 数据流向 | 集成方式 |
|---------|---------|---------|
| **Inbound（入库）** | ASN 匹配、预约调度、收货确认 | EDI 856 / API |
| **Outbound（出库）** | Wave Planning → Load Building → Carrier Assignment | API / 事件驱动 |
| **Inventory Sync** | 实时库存可用性 → TMS 装载规划 | API / 消息队列 |
| **Label & Documentation** | BOL、海关文件、标签生成 | API |
| **Track & Trace** | WMS 出库状态 + TMS 运输状态 → OMS → 客户 | Webhook / API |
| **Returns** | 退货授权与路由协调 | EDI / API |
| **Planning** | TMS 需求数据 → WMS 劳动力/空间规划 | 数据湖 / ETL |

### 3.2 常用 EDI 单据

| EDI 编号 | 用途 |
|----------|------|
| **850** | Purchase Order（采购订单） |
| **856** | Advance Ship Notice（ASN 预到通知） |
| **990** | Response to a Load Tender（装载响应） |
| **214** | Transportation Carrier Shipment Status（运输状态） |
| **210** | Carrier Freight Details & Invoice（运费详情与发票） |

### 3.3 集成技术方案

| 方法 | 描述 | 适用场景 |
|------|------|---------|
| EDI | 结构化文档交换（EDIFACT/X12） | 合规性要求、传统合作伙伴 |
| RESTful API | 实时 HTTP 调用 | 现代系统、事件驱动 |
| Message Queue | Kafka / RabbitMQ 异步流 | 高吞吐、解耦架构 |
| Middleware / iPaaS | MuleSoft、Dell Boomi、Cleo | 多系统编排与转换 |
| Event-Driven | 事件驱动 + Event Sourcing | 微服务架构 |

---

## 四、主要供应商与市场地位

### 4.1 第一梯队（Leaders）

| 供应商 | WMS 产品 | TMS 产品 | 核心优势 | 适用行业 |
|--------|---------|---------|---------|---------|
| **Manhattan Associates** | Manhattan Active WM | Manhattan Active TM | Cloud-native 微服务、Gartner MQ 持续领先 | 零售、3PL、服装 |
| **Blue Yonder** | Luminate Platform | Luminate TMS | AI 驱动优化、Panasonic 子公司 | 零售、快消、制造 |
| **SAP** | SAP EWM | SAP TM | ERP 深度集成、庞大装机量 | SAP 生态企业 |
| **Oracle** | Oracle WMS Cloud | Oracle OTM | Cloud-native、竞争性定价 | 中大型企业 |

### 4.2 第二梯队

| 供应商 | 核心优势 |
|--------|---------|
| Korber（HighJump） | 中端市场 WMS、3PL 领域 |
| MercuryGate | 3PL/多参与方优化 |
| Descartes | 全球贸易合规 + 路线规划 |
| project44 | 运输可视化 + 分析 |
| 3Gtms / Uber Freight | TMS 专业厂商、网络优化 |

---

## 五、核心 KPI

### 5.1 WMS KPI

| KPI | 计算方式 | 行业基准 |
|-----|---------|---------|
| 订单准确率 | (总订单-错误订单)/总订单 | >99% |
| 库存周转率 | 销货成本/平均库存 | 因行业而异 |
| 订单周期时间 | 接单到发运总时间 | 取决于客户期望 |
| 收货上架时间 | 到货到上架完成 | <24 小时优秀 |
| 拣选准确率 | 正确拣选件数/总拣选件数 | >99.5% |
| 仓库利用率 | 已使用空间/容量 | 85-90% 理想 |
| 劳动生产率 | 每人每小时处理件数 | 行业差异大 |
| 库存持有成本 | 总持有成本/库存价值 | 通常 15-30%/年 |
| 订单满足率 | 从现有库存满足客户需求的百分比 | >95% |
| 缺货率 | 无法即时履行的订单百分比 | <2% |

### 5.2 TMS KPI

| KPI | 行业基准 |
|-----|---------|
| 每英里运输成本 | 因运输模式而异 |
| 准时交付率 | >95% |
| 运输成本节约 | 通常可实现 15-25% 降幅 |
| 燃油效率 | 改善 10-20% |
| 空驶里程 | 越低越好 |
| 装载率 | 目标 >85% |
| 承运商准时率 | >95% |
| 运费审计准确率 | >99% |
| 异常处理时间 | <2 小时 |
| POD 获取率 | >98% |

---

## 六、实施要点

### 6.1 WMS 实施

| 维度 | 详情 |
|------|------|
| 实施周期 | 中小型：3-12 个月；大型：12-36 个月 |
| 成本范围 | 基础：$25K-$75K；中端：$75K-$500K；企业级：$500K-$5M+；SaaS 年费：$5K-$50K/年 |
| 典型阶段 | Planning → Configuration → Integration → Testing → Go-Live → Optimization |

### 6.2 TMS 实施

| 维度 | 详情 |
|------|------|
| 实施周期 | 一般：6-18 个月；简单 SaaS：2-4 个月 |
| 成本范围 | 中小企业：$5K-$25K；中端：$50K-$500K；企业级：$500K-$3M+ |
| 年度 SaaS 费用 | 通常为 License 费用的 15-25% |

### 6.3 常见挑战

- **WMS**：数据迁移（库存/SKU/库位）、ERP/OMS/TMS 集成、条码/RFID 基础设施搭建
- **TMS**：承运商 Onboarding 与费率管理、多式联运复杂性、实时可视化需求、法规合规

### 6.4 实施最佳实践

1. **需求定义**：选型前彻底定义业务需求
2. **流程先行**：不要自动化糟糕的流程，先做 Process Re-engineering
3. **集成先行**：提前规划 API/EDI/Middleware 集成方案
4. **预留余量**：预算通常超支 20-30%
5. **分阶段上线**：先在单一仓库/区域 Pilot，再推广
6. **变革管理**：Change Management 是实施失败的首要原因

---

## 七、与你现有工作的关联

### 7.1 NIO 经验映射

你在 NIO 的"备调退计划"（备货/调拨/退货）本质上就是 WMS 的核心场景：
- **备货计划** → WMS 的库存计划 + Receiving & Putaway
- **调拨计划** → WMS 的跨仓调拨 + TMS 的运输规划
- **退货计划** → WMS 的 Returns Processing + TMS 的逆向物流

### 7.2 小米 EP 经验映射

- **样件订单** → TMS 的 Order Management + 承运商选择
- **框架协议** → TMS 的 Carrier Management + 合同与费率管理
- **供应商协同** → WMS-TMS 集成中的 ASN/GRN 数据流

### 7.3 知识缺口

| 已有经验 | 待拓展 | 价值 |
|----------|--------|------|
| 备调退计划（计划侧） | WMS 系统功能与实施 | 理解执行侧如何承接计划 |
| 样件订单（采购侧） | TMS 路线优化与装载规划 | 理解物流成本优化逻辑 |
| 单系统视角 | WMS-TMS 集成方案 | 端到端交付可视化 |

---

*参考来源：Gartner WMS/TMS Magic Quadrant、Manhattan Associates、Blue Yonder、SAP EWM/TM 官方文档*
