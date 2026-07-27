---
name: supplier-profile
description: 供应商画像生成 - 输入供应商名称，自动聚合EP系统信息、企查查工商数据、绩效表现、在询项目、历史采购额，输出结构化供应商画像卡片。
argument-hint: "<供应商名称>"
version: "1.0.0"
user-invocable: true
allowed-tools: Bash
---

# 供应商画像生成

当用户提供供应商名称时，自动执行多源数据聚合查询，输出结构化供应商画像卡片，帮助采购人员快速全面了解供应商。

## 触发方式

- `/supplier-profile 得力`
- `/supplier-profile 博世`
- 自然语言：「查一下得力的供应商画像」「这家供应商什么情况」

## 数据源架构

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  EP CLI     │    │  企查查     │    │  内部系统   │
│  供应商模块 │    │  工商信息   │    │  绩效/采购  │
└──────┬──────┘    └──────┬──────┘    └──────┬──────┘
       │                  │                  │
       └──────────┬───────┴──────────────────┘
                  ▼
         ┌────────────────┐
         │  画像聚合引擎  │
         └────────┬───────┘
                  ▼
         ┌────────────────┐
         │  画像输出卡片  │
         └────────────────┘
```

## 执行链路（六步串行）

### Step 1: 供应商模糊搜索

**CLI 命令：**

```bash
dx-ep supplier info list --name <供应商名称> -f json
```

**返回值解析：**

```json
{
  "ok": true,
  "data": {
    "totalCount": 1,
    "content": [
      {
        "id": "263903637306785",
        "orgName": "上海得力电机",
        "orgCode": "0000102187",
        "supplierType": "OFFICIAL"
      }
    ]
  }
}
```

**处理逻辑：**

- `totalCount == 0` → 标记「EP系统无此供应商」，尝试 Step 1b
- `totalCount == 1` → 直接进入 Step 2
- `totalCount > 1` → 列出候选，让用户选择

**Step 1b: 企查查兜底搜索**

如果 EP 系统无结果，通过企查查搜索供应商信息。

### Step 2: 供应商详细信息

**CLI 命令：**

```bash
dx-ep supplier info query --id <supplier-id> -f json
```

**提取字段：**

| 字段 | 用途 |
|------|------|
| orgName / orgCode | 基本标识 |
| legalPerson | 法人代表 |
| registeredCapital | 注册资本 |
| registeredDate | 成立日期 |
| numberOfEmployees | 员工规模 |
| income | 年营收 |
| certificate | 资质认证 |
| address | 注册地址 |
| buyerName | 对接采购员 |
| supNomiType | 定点类型（L/S/K） |
| ndaSignStatus | NDA状态 |
| operatePeriodStart/Stop | 营业期限 |
| settlementBank | 结算银行信息 |
| supplierBusinessPremises | 经营场所 |

### Step 3: 变更历史

**CLI 命令：**

```bash
dx-ep supplier change list --code <orgCode> -f json
```

**提取字段：**

- 变更次数
- 最近一次变更时间和内容
- 是否有名称/法人/地址等关键变更

### Step 4: 企查查工商信息

**查询方式：** WebSearch + WebFetch

**查询内容：**

| 维度 | 查询关键词 | 用途 |
|------|-----------|------|
| 工商信息 | `<供应商名称> 企查查` | 经营状态、股东结构 |
| 财务风险 | `<供应商名称> 风险信息` | 司法风险、行政处罚 |
| 诉讼风险 | `<供应商名称> 裁判文书` | 涉诉情况 |
| 经营异常 | `<供应商名称> 经营异常` | 是否列入异常名录 |

**异常处理：**

- 企查查无法访问 → 标记「外部数据源暂不可用」，跳过
- 查询超时 → 标记「查询超时」，继续下一步

### Step 5: 绩效表现（最近半年）

**CLI 命令：**

```bash
dx-ep sor info list --code <供应商编码> -f json
```

**或通过 SOR 模块查询：**

```bash
dx-ep sor part list --supplier-id <supplier-id> -f json
```

**绩效维度：**

| 维度 | 数据来源 | 说明 |
|------|---------|------|
| 交付准时率 | SOR 交期数据 | 按时交付比例 |
| 质量合格率 | SOR 质检数据 | 来料合格率 |
| 响应速度 | RFQ 响应时间 | 报价响应时效 |
| 配合度 | 综合评价 | 采购员主观评分 |

**异常处理：**

- 无绩效数据 → 标记「暂无绩效记录」
- 数据不足半年 → 标记「数据覆盖期不足」

### Step 6: 在询项目 & 历史采购额

**在询项目查询：**

```bash
dx-ep rfq info list --delay-status all -f json
```

筛选包含该供应商的 RFQ 项目。

**历史采购额查询：**

通过 EP 系统的采购数据模块获取历史交易记录。

**异常处理：**

- 无在询项目 → 标记「当前无在询报价项目」
- 无采购记录 → 标记「暂无历史采购数据」

## 输出格式

### 画像卡片

```
## 供应商画像：{供应商名称}

---

### 一、基本信息

| 项目 | 信息 |
|------|------|
| 供应商编码 | {orgCode} |
| 供应商类型 | {supplierType} |
| 法人代表 | {legalPerson} |
| 成立日期 | {registeredDate} |
| 注册资本 | {registeredCapital} 万元 |
| 员工规模 | {numberOfEmployees} 人 |
| 年营收 | {income} 万元 |
| 资质认证 | {certificate} |
| 注册地址 | {address} |
| 营业期限 | {operatePeriodStart} ~ {operatePeriodStop} |
| 对接采购员 | {buyerName} |
| 定点类型 | {supNomiType} |
| NDA状态 | {ndaSignStatus} |

---

### 二、经营概况（企查查）

| 项目 | 信息 |
|------|------|
| 经营状态 | {businessStatus} |
| 统一社会信用代码 | {creditCode} |
| 实缴资本 | {paidCapital} |
| 参保人数 | {insuredCount} |
| 曾用名 | {formerName} |
| 主要股东 | {shareholders} |

---

### 三、风险提示

| 风险类型 | 状态 | 详情 |
|----------|------|------|
| 司法风险 | ✅ 无 / ⚠️ 有 | {riskDetail} |
| 行政处罚 | ✅ 无 / ⚠️ 有 | {penaltyDetail} |
| 经营异常 | ✅ 无 / ⚠️ 有 | {abnormalDetail} |
| 严重违法 | ✅ 无 / ⚠️ 有 | {violationDetail} |

---

### 四、变更记录

| 变更单号 | 日期 | 主要内容 | 审批状态 |
|----------|------|----------|----------|
| {changeCode} | {changeDate} | {changeContent} | {status} |

---

### 五、绩效表现（近6个月）

| 维度 | 表现 | 评级 |
|------|------|------|
| 交付准时率 | {onTimeRate}% | ✅/⚠️/❌ |
| 质量合格率 | {qualityRate}% | ✅/⚠️/❌ |
| 响应速度 | {avgResponseTime} | ✅/⚠️/❌ |
| 配合度评分 | {cooperationScore}/5 | ✅/⚠️/❌ |

---

### 六、在询项目

| RFQ编号 | 项目名称 | 轮次 | 报价状态 |
|---------|----------|------|----------|
| {rfqCode} | {rfqName} | 第{roundNo}轮 | {quoteStatus} |

---

### 七、历史采购额

| 年度 | 采购额（万元） | 同比变化 |
|------|---------------|----------|
| 2024 | {amount2024} | {yoy2024} |
| 2025 | {amount2025} | {yoy2025} |

---

### ⚠️ 风险提示

- {风险项及建议}
```

## 异常状态识别

| 状态 | 标记 | 说明 |
|------|------|------|
| 不存在 / 未找到 | ❌ | 数据缺失 |
| 待审批 / 审批中 | ⚠️ | 需要关注 |
| 已过期 / 已失效 | ⚠️ | 需要续期 |
| null / 空值 | ⚠️ | 未填写 |
| 经营异常 / 被执行人 | ❌ | 高风险 |

## 风险评级规则

| 风险等级 | 条件 | 建议操作 |
|----------|------|----------|
| 🟢 低风险 | 无司法风险、无行政处罚、无经营异常 | 正常合作 |
| 🟡 中风险 | 有少量诉讼或行政处罚 | 关注跟进 |
| 🔴 高风险 | 被执行人/失信人/经营异常/严重违法 | 建议暂停合作评估 |

## 聚合输出规则

1. **优先级**：EP 系统数据 > 企查查数据 > 缺省值
2. **数据冲突**：以 EP 系统数据为准
3. **缺失处理**：缺失字段标记为「—」，不阻断流程
4. **时效性**：企查查数据标注查询时间，EP 数据取最新版本

## 安全边界

- 仅执行查询操作，不修改任何数据
- 企查查信息仅用于辅助判断，不作为正式业务凭证
- 敏感财务数据（营收、采购额）仅展示汇总值，不展示明细
- 查询结果不导出或持久化，会话结束即失效

## 飞书机器人适配

### 消息卡片格式

```json
{
  "config": {
    "wide_screen_mode": true
  },
  "header": {
    "title": {
      "tag": "plain_text",
      "content": "供应商画像：{供应商名称}"
    },
    "template": "{risk_color}"
  },
  "elements": [
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "**基本信息**\n编码：{orgCode}\n法人：{legalPerson}\n成立：{registeredDate}\n..."
      }
    },
    {
      "tag": "hr"
    },
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "**风险提示**\n{risk_summary}"
      }
    }
  ]
}
```

### 飞书交互流程

```
用户发送: "查一下得力的供应商画像"
    │
    ▼
机器人回复: "正在查询供应商信息..."
    │
    ▼
机器人回复: 供应商画像卡片
    │
    ▼
用户可点击卡片按钮:
  [查看详情] [查看变更历史] [导出PDF]
```
