---
created: '2026-07-24'
tags: [Xiaomi, AI, 系统]
---

---created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 系统, 采购]
status: draft
---

> [!summary] EP 系统本体知识图谱
> - **核心**：基于 EP 操作手册生成的领域本体模型，覆盖供应商管理、询报价、采购定点、订单框架、合同签署五大域
> - **要点**：7 大实体域 + 完整关系图谱 + 3 条核心流程（SOR报价/信息变更/通用审批）+ 8 条关键业务规则
> - **关联**：[[09_Xiaomi/07_项目与汇报/02_Q3立项/06_立项报告_体系运营部_生产采购系统_26YQ3]] · [[09_Xiaomi/07_项目与汇报/02_Q3立项/05_采购数字化方案]]

# 生产采购系统(EP) — 本体知识图谱

> 基于《生产采购系统(EP)操作手册（供应商端）》生成的领域本体模型

---

## 一、核心实体（Classes）

### 1.1 组织与参与者

```mermaid
classDiagram
    class 系统平台 {
        +string 供应商门户网址
        +string 采购端供应商网址
        +string 系统名称
    }
    class 供应商 {
        +string 供应商ID
        +string 公司名称
        +string 供应商状态
        +注册()
        +变更信息()
    }
    class 采购工程师 {
        +string 工程师ID
        +string 所属部门
        +发起询报价()
        +发起定点()
        +重开轮次()
    }
    class 小米汽车 {
        +string 企业主体
        +string 生产基地
    }

    系统平台 "1" --> "*" 供应商 : 管理
    系统平台 "1" --> "*" 采购工程师 : 管理
    采购工程师 --> 供应商 : 协作
    小米汽车 --> 采购工程师 : 隶属
```

### 1.2 供应商信息域

```mermaid
classDiagram
    class 供应商信息 {
        +8个页签
        +维护()
        +提交审批()
    }
    class 公司基本信息 {
        +string 公司名称
        +string 统一社会信用代码
    }
    class 财务信息 {
        +银行账户信息
        +结算方式
    }
    class 联系人信息 {
        +string 联系人姓名
        +string 联系电话
        +string 邮箱
    }
    class 银行信息 {
        +string 银行名称
        +string 账号
        +string 开户行
        +boolean 电汇结算
        +boolean 承兑结算
    }
    class 商务前提 {
        +string 结算类型
        +int 承兑月份
        +date 变更开始日期
    }

    供应商信息 --> 公司基本信息
    供应商信息 --> 财务信息
    供应商信息 --> 联系人信息
    财务信息 --> 银行信息
    供应商信息 --> 商务前提
```

### 1.3 询报价域

```mermaid
classDiagram
    class 询报价类型 {
        <<enumeration>>
        RFQ_标准SOR
        EWO_设变询
        CWO_颜色询
        LPC_物流价格变更
        RFQ_AS_售后SOR
        RFQ_SWO_售后设计变更
        RFQ_ASLPC_售后物流价格变更
        Q_RFQ_快速定点
    }
    class 报价包 {
        +string 报价包ID
        +询报价类型 类型
        +list~报价明细~ 零件报价
        +状态 状态
    }
    class 报价明细 {
        +string 零件号
        +string 工厂
        +价格明细 价格
    }
    class 报价前提 {
        +string RFQ基本信息
        +附件列表
        +确认参与()
    }
    class 商务条件 {
        +string 结算方式
        +string 量产条件
        +string 样件条件
    }
    class 报价提交 {
        +boolean 必填校验
        +提交()
        +撤回()
        +放弃()
    }

    询报价类型 --> 报价包 : 归类
    报价包 --> 报价明细 : 包含
    报价包 --> 报价前提 : 需确认
    报价前提 --> 商务条件 : 关联
    报价明细 --> 报价提交 : 流转
```

### 1.4 价格构成域

```mermaid
classDiagram
    class 出厂价 {
        +材料费
        +制造费
        +模具分摊
        +开发费分摊
        +物流费
        +样件费
        +管理费
    }
    class 材料费 {
        +float 原材料价格
        +float 外购件价格
        +calc() 原材料+外购件
    }
    class 制造费 {
        +float 设备费
        +float 人工费
        +float 报废费用
        +float 能耗费
        +float 耗材费
        +calc() 五项之和
    }
    class 模具分摊 {
        +float 分摊金额
        +list~模具清单~ 模具列表
        +string 支付明细
    }
    class 开发费分摊 {
        +float 分摊金额
        +int 分摊数量
        +float 人员费用
        +float 试验费用
        +float 标定费用
    }
    class 物流费 {
        +float 物流费用
    }
    class 样件费 {
        +string 填写方式_倍数
        +string 填写方式_价格
        +float 手工倍数
        +float 软模倍数
        +float 硬模倍数
    }
    class 管理费 {
        +float DB管理员费
        +float 利管费
        +float 其他管理费
    }
    class 一次性费用 {
        +float 模具费
        +float 开发费
        +float 软模费
    }

    出厂价 --> 材料费
    出厂价 --> 制造费
    出厂价 --> 模具分摊
    出厂价 --> 开发费分摊
    出厂价 --> 物流费
    出厂价 --> 样件费
    出厂价 --> 管理费
```

### 1.5 采购定点域

```mermaid
classDiagram
    class 采购定点单 {
        +string 定点单ID
        +date 有效期
        +float 价格
        +状态 状态
    }
    class 定点申请 {
        +boolean 同意价格
        +string 拒绝原因
        +确认()
    }
    class 商务价格变更 {
        +string 变更内容
        +string 意见说明
        +同意()
        +不同意()
    }
    class 移地生产 {
        +string 原生产基地
        +string 新生产基地
        +确认()
        +驳回()
    }
    class CWO沿用申请 {
        +string 颜色件零件号
        +string 本色件零件号
        +同意()
        +不同意()
    }

    采购定点单 --> 定点申请
    采购定点单 --> 商务价格变更
    采购定点单 --> 移地生产
    采购定点单 --> CWO沿用申请
```

### 1.6 订单与框架管理域

```mermaid
classDiagram
    class 订单管理 {
        <<abstract>>
        +string 订单ID
        +string 订单类型
        +状态 状态
    }
    class 样件订单 {
        +同意()
        +拒绝()
    }
    class 模具费订单 {
        +同意()
        +拒绝()
    }
    class 开发费订单 {
        +同意()
        +拒绝()
    }
    class 软模费订单 {
        +同意()
        +拒绝()
    }
    class 样件软模费订单 {
        +同意()
        +拒绝()
    }
    class 框架协议 {
        +string 协议ID
        +string 协议类型
        +同意()
        +不同意()
    }
    class 返利申请单 {
        +string 规则ID
        +同意()
        +不同意()
    }
    class 返利结算单 {
        +string 结算单ID
        +float 结算金额
        +推送到SRM()
        +同意()
        +不同意()
    }
    class 大宗申请单 {
        +string 规则ID
        +同意()
        +不同意()
    }
    class 供应商主体切换 {
        +string 老主体
        +string 新主体
        +同意()
        +不同意()
    }

    订单管理 <|-- 样件订单
    订单管理 <|-- 模具费订单
    订单管理 <|-- 开发费订单
    订单管理 <|-- 软模费订单
    订单管理 <|-- 样件软模费订单
```

### 1.7 合同签署域

```mermaid
classDiagram
    class 合同签署 {
        +string 合同ID
        +string 合同类型
        +确认()
        +电子签()
    }
```

---

## 二、关系图谱（Relationships）

```mermaid
graph TB
    subgraph 核心实体
        SYS[系统平台<br/>sp.ev.mi.com / ep.ev.mi.com]
        SUP[供应商]
        BUYER[采购工程师]
        XIAOMI[小米汽车]
    end

    subgraph 供应商信息域
        REG[供应商注册]
        CHG[信息变更]
        BANK[银行信息]
        BIZ[商务前提]
    end

    subgraph 询报价域
        RFQ_TYPE[询报价类型<br/>RFQ/EWO/CWO/LPC<br/>RFQ-AS/SWO/ASLPC/Q-RFQ]
        QUOTE[报价包]
        DETAIL[报价明细]
        PREMISE[报价前提]
        BIZ_COND[商务条件]
    end

    subgraph 价格构成域
        FOB[出厂价]
        MAT[材料费]
        MFG[制造费]
        MOLD[模具分摊]
        DEV[开发费分摊]
        LOG[物流费]
        SAMPLE[样件费]
        MGMT[管理费]
        ONEOFF[一次性费用]
    end

    subgraph 采购定点域
        SOR[定点申请单]
        PRICE_CHG[商务价格变更]
        RELOC[移地生产]
        CWO_USE[CWO沿用申请]
    end

    subgraph 订单与框架域
        ORDER[订单<br/>样件/模具费/开发费/软模费/样件软模费]
        FRAME[框架协议]
        REBATE_APP[返利申请单]
        REBATE_SETTLE[返利结算单]
        BULK[大宗申请单]
        SWITCH[供应商主体切换]
    end

    subgraph 合同域
        CONTRACT[合同签署]
    end

    SYS --> SUP
    SYS --> BUYER
    XIAOMI --> BUYER
    SUP --> REG
    SUP --> CHG
    CHG --> BANK
    CHG --> BIZ
    SUP --> QUOTE
    RFQ_TYPE --> QUOTE
    QUOTE --> DETAIL
    QUOTE --> PREMISE
    PREMISE --> BIZ_COND
    DETAIL --> FOB
    FOB --> MAT
    FOB --> MFG
    FOB --> MOLD
    FOB --> DEV
    FOB --> LOG
    FOB --> SAMPLE
    FOB --> MGMT
    DETAIL --> ONEOFF
    SUP --> SOR
    SUP --> PRICE_CHG
    SUP --> RELOC
    SUP --> CWO_USE
    SUP --> ORDER
    SUP --> FRAME
    SUP --> REBATE_APP
    SUP --> REBATE_SETTLE
    SUP --> BULK
    SUP --> SWITCH
    SUP --> CONTRACT
    REBATE_SETTLE -->|推送| SRM[SRM系统]
```

---

## 三、流程本体（Process Ontology）

### 3.1 SOR报价完整流程

```mermaid
flowchart TD
    A[收到待办/邮件提醒] --> B[确认参与报价]
    B -->|放弃| C[放弃报价-不可逆]
    B -->|确认| D[确认报价前提<br/>RFQ基本信息&附件]
    D --> E[填写商务条件<br/>量产/样件]
    E --> F{零件结构信息}
    F -->|SVC已提供| G[从SVC同步BOM/工艺信息]
    F -->|SVC未提供| H[EP在线拆解BOM结构]
    G --> I[填写价格信息]
    H --> I
    I --> I1[材料费]
    I --> I2[制造费]
    I --> I3[模具分摊费用]
    I --> I4[开发费分摊]
    I --> I5[物流费]
    I --> I6[样件费&管理费]
    I --> I7[一次性费用]
    I1 & I2 & I3 & I4 & I5 & I6 & I7 --> J[上传附件<br/>物流信息表+其他附件]
    J --> K[提交报价]
    K --> L{必填校验}
    L -->|通过| M[报价完成]
    L -->|未通过| N[系统提示未填项]
    N --> I
```

### 3.2 信息变更流程

```mermaid
flowchart TD
    A[进入供应商变更申请页面] --> B[创建变更申请]
    B --> C[维护8个页签信息]
    C --> C1[公司基本信息]
    C --> C2[财务信息/银行信息]
    C --> C3[联系人信息]
    C --> C4[量产/样件/售后商务前提]
    C2 --> D{结算方式}
    D -->|现金| E[电汇结算银行信息必填]
    D -->|承兑| F[承兑结算银行信息必填]
    D -->|现金+承兑| G[两项银行信息都必填]
    C4 --> H{商务前提变更}
    H -->|100%现金| I[承兑月份无需填写]
    H -->|承兑| J[承兑月份必填]
    E & F & G --> K[保存]
    I & J --> K
    K --> L[启动审批]
    L --> M[小米内部审批]
    M --> N[单据状态:审批中]
```

### 3.3 通用审批模式

```mermaid
flowchart TD
    A[收到待办/邮件提醒] --> B[查看详情]
    B --> C{供应商决策}
    C -->|同意| D[点击同意<br/>意见说明不必填]
    C -->|不同意| E[点击不同意<br/>意见说明必填]
    D --> F[审批流转到采购端]
    E --> F
    F --> G[采购内部确认]

    style E fill:#ffcccc
    style D fill:#ccffcc
```

---

## 四、本体层次总结

| 层次 | 内容 | 实体数 |
|------|------|--------|
| **顶层域** | 供应商管理 / 询报价 / 采购定点 / 订单框架 / 合同 | 5 |
| **核心实体** | 供应商、采购工程师、系统平台、小米汽车 | 4 |
| **业务对象** | 报价包、定点申请单、框架协议、订单、合同等 | 12+ |
| **价格构成** | 出厂价、材料费、制造费、模具/开发分摊、物流、样件、管理费 | 8 |
| **流程动作** | 确认/提交/审批/同意/拒绝/撤回/终止 | 10+ |
| **外部系统** | SVC系统（BOM/工艺）、SRM系统（对账） | 2 |

---

## 五、关键业务规则（Constraints）

1. **商务条件唯一性**：一家供应商零件量产/样件结算只能有一种商务条件
2. **银行信息必填规则**：首次定点时银行信息必填，按结算方式（现金/承兑/混合）决定哪些银行信息必填
3. **承兑月份联动**：商务前提为现金时承兑月份无需填写；为承兑时承兑月份必填
4. **放弃报价不可逆**：放弃报价后不可逆转，需联系采购工程师重开轮次
5. **样件费计算**：样件价格 =（出厂价 + 物流费）× 倍数
6. **价格汇总逻辑**：零件层级>1时汇总下级第一层零件的细项费用
7. **同意按钮限制**：返利申请单、返利结算单、大宗申请单的同意按钮只能从首页待办进入
8. **主体切换双重确认**：新主体同意后，老主体也需进入系统点击同意
