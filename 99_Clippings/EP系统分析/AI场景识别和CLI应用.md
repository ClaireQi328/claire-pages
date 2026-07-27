---
created: 2026-07-16
updated: 2026-06-11
tags:
  - Clippings
  - 采购
source: "https://mi.feishu.cn/wiki/DV8bddAFtoHsTgxE1itcUDwznMb"
status: draft
---

> [!summary] EP 系统 AI 场景识别与 CLI 指令集设计：覆盖供应商、寻源、价格、合同全业务域
> - **核心**：识别 EP 系统各业务域的 AI 应用场景，设计 CLI 指令集作为 AI 能力的数据调用基座
> - **要点**：CLI 覆盖供应商画像/变更履历、SOR 进度、预选供应商评审、询报价进度、台账管理、设计/颜色/商务/物流变更、合同电子签、框架协议、返利管理等模块；击穿场景包括报价进度全链路查询和自动生成定点申请单；建设路径分知识问答、单域查询、跨域协同、复杂推理四层

# AI场景识别和CLI应用

## 场景识别（粗略版）

## 供应商管理

<sheet sheet-id="9qyt5v" token="HOCZsDcxlhwJ3Vt8EuLcJAXGnme"></sheet>

## 寻源与询报价

<sheet sheet-id="SS3Lig" token="HOCZsDcxlhwJ3Vt8EuLcJAXGnme"></sheet>

## 合同管理

<sheet sheet-id="vznx1x" token="HOCZsDcxlhwJ3Vt8EuLcJAXGnme"></sheet>

## 订单与协同

<sheet sheet-id="rnvfm7" token="HOCZsDcxlhwJ3Vt8EuLcJAXGnme"></sheet>

## 绩效与对账

<sheet sheet-id="5toe5k" token="HOCZsDcxlhwJ3Vt8EuLcJAXGnme"></sheet>

## 采购员助手（横向）

这一层实现成本最低、用户感知最直接：

- **对话式查询**：采购员用自然语言查供应商状态、订单进度，后端接结构化数据库
- **操作引导**：在流程节点给出下一步建议（基于规则+历史行为）
- **知识库问答**：把采购政策、SOP文档做成RAG，减少人工答疑

## 在研CLI清单拆解（依据资源情况分wave1-2-3）：

<table><colgroup><col/><col/><col/><col/><col/><col/></colgroup><thead><tr><th>模块</th><th>功能名称</th><th>功能说明</th><th>CLI/接口列表</th><th>目标用户</th><th>优先级</th></tr></thead><tbody><tr><td rowspan="2"><b>供应商</b></td><td><b>供应商画像</b></td><td><b>查询供应商的综合档案信息</b><ul><li><b>查询供应商基本信息：</b>公司注册资本、公司类型（大陆/外资）、资质认证、制造地址、股比构成、人员构成</li><li><b>查询供应商财务信息：</b>电汇银行、承兑银行、账期（量产、样件、售后）</li><li><b>查询供应商联系人信息</b>：供应商商务联系人</li><li><b>查询供应商主要产品、生产过程及工艺装备水平</b>：主要产品及客户、规划产品、生产过程及工艺装备水平、生产设备及生产过程检测设备</li><li><b>查询供应商商务数据</b>：近四年销售情况、近四年销售收入主要客户、拟引入零部件相关数据</li><li><b>查询供应商研发能力</b>：研发投入、近三年开发的产品情况、研发设备及能力、客户认可实验室相关证书、软件能力认证、资质证书信息、功能安全认证、已获得专利</li><li><b>查询供应商关键二级供应商</b>：关键二级供应商</li></ul></td><td><code>vendor profile</code></td><td rowspan="2">采购员、DRE、SQE等供应商管理相关角色</td><td></td></tr><tr><td><b>供应商变更履历</b></td><td><ul><li><b>查询供应商历史信息变更：历史更名、历史制造地变更</b></li></ul></td><td><code>vendor history</code></td><td></td></tr><tr><td rowspan="7"><b>寻源定点</b></td><td rowspan="2"><b>SOR任务进度</b></td><td><ul><li><b>查询SOR包基础信息</b>：关联项目，零件号，基础车型，用量，装配比例，审批进度</li></ul></td><td><code>sor info</code></td><td rowspan="7">采购/研发</td><td>一阶段</td></tr><tr><td><ul><li><b>SOR包维度</b>：定点完成时间，询报价，预选供应商审批进度，研发工程师，SQE工程师，预选供应商研发评审进度，预选供应商质量评审进度，物流工程师，物流信息表确认进度</li></ul></td><td><code>sor progress</code></td><td>一阶段</td></tr><tr><td><b>预选供应商进度</b></td><td><ul><li><b>预选供应商评审单：</b>预选供应商基本信息，供应商明细</li><li><b>预选供应商研发评审：</b>研发供应商评审意见，研发供应商评审审批进度</li><li><b>预选供应商质量评审：</b>质量供应商评审意见，质量供应商评审审批进度</li></ul></td><td><code>pre vendor review</code></td><td>一阶段</td></tr><tr><td rowspan="2"><b>询报价进度</b></td><td><ul><li><b>零件维度</b>：询报价编码，询报价类型，询报价轮次，询报价状态，采购员</li></ul></td><td rowspan="2"><code>inquiry progress</code></td><td>一阶段</td></tr><tr><td><ul><li><b>报价包维度</b>：查询询报价的轮次，预选供应商个数，预选单审批进度，</li><li>预选供应商研发评审进度，预选供应商质量评审进度，物流信息表确认进度</li></ul></td><td>一阶段</td></tr><tr><td><b>物流确认单</b></td><td><ul><li>物流确认单：物流信息表确认进度</li></ul></td><td><code>logistics confirm</code></td><td>一阶段</td></tr><tr><td><b>生成定点申请单</b></td><td><ul><li><b>预选供应商研发评审</b>完成</li><li><b>预选供应商质量评审</b></li><li><b>物流确认单</b>确认完成</li><li>生成定点单：校验预选供应商评审完成、校验物流确认单确认完成，生成定点通知单</li></ul></td><td><code>apply generate</code></td><td>二阶段</td></tr><tr><td rowspan="5"><b>价格</b></td><td><b>台账管理</b></td><td><ul><li>查询零件的定点供应商，定点的工厂</li><li>查询零件的具体时间的量产价格，返回价格的组成(到厂价，出厂价，物流费，小米物流费、模具分摊、研发分摊、一次性费用等)</li><li>查询零件的具体时间的售后价格，返回价格的组成(到厂价，出厂价，物流费，小米物流费等)</li><li>查询零件的样件价格，以及下过的样件订单</li><li>查询零件的框架协议，框架协议任务，框架协议审批进度，零件有哪些暂作价框架协议，零件是否可以转正(先确认零件是否有台账-&gt;台账时间段是否覆盖框架协议时间段-&gt;判断是否可以转正)</li></ul></td><td><code>price ledger</code><br/><code>price framework check</code></td><td>采购</td><td></td></tr><tr><td><b>设计变更</b></td><td><ul><li>查询零件 的设变任务进度(能否调用mibom的设计变更CLI？)，零件在EP的EWO任务进度，在哪些EWO里，EWO的任务状态，设计变更询报价，询报价进度，询报价截止时间，物流工程师，物流信息表确认进度</li></ul></td><td><code>change design</code></td><td>采购</td><td></td></tr><tr><td><b>颜色件变更</b></td><td><ul><li>查询零件 的颜色件任务进度(能否调用mibom的CWO变更CLI？)，零件在EP的任务进度，在哪些CWO里，CWO的任务状态，物流信息表确认进度</li></ul></td><td><code>change color</code></td><td>采购</td><td></td></tr><tr><td><b>商务价格变更</b></td><td><ul><li>查询零件 的商务价格变更审批进度，在这个变更单里面的价格(到厂价，出厂价，物流费，小米物流费等)</li></ul></td><td><code>change price</code></td><td>采购</td><td></td></tr><tr><td><b>物流价格变更</b></td><td><ul><li>查询零件 的物流价格变更申请单审批进度，物流信息表确认进度</li></ul></td><td><code>change logistics</code></td><td>采购</td><td></td></tr><tr><td rowspan="7"><b>合同</b></td><td rowspan="3"><b>合同电子签</b></td><td><ul><li>供应商维度：供应商已签署合同类型，合同数量，合同进度(供应商确认，小米内部审批中)<br/><em>是否可以调用集团的审批进度？</em></li></ul></td><td rowspan="3"><code>contract esign</code></td><td rowspan="7">采购</td><td></td></tr><tr><td><ul><li>零件维度：查询零件是否签署定点价格协议(先查询零件关联的定点申请单-&gt;在查询定点申请单关联的合同)</li></ul></td><td></td></tr><tr><td><ul><li>项目维度：查询该项目下签署的合同类型，合同数量</li></ul></td><td></td></tr><tr><td rowspan="2"><b>框架协议管理</b></td><td><ul><li>零件维度：查询零件的框架协议编号，供应商，协议类型(预批量/量产/售后)，价格类型，当前协议里的价格，有效期</li></ul></td><td rowspan="2"><code>framework agreement</code></td><td></td></tr><tr><td><ul><li>供应商维度：查询供应商签署的框架协议编号，协议类型，零件号，价格类型，零件有效期，以及价格</li></ul></td><td></td></tr><tr><td rowspan="2"><b>返利管理</b></td><td><ul><li>查询供应商签署的返利合同数量，返利单号，返利类型，谈判结果，返利车型，返利金额</li></ul></td><td><code>rebate_contract</code></td><td></td></tr><tr><td><ul><li>查询供应商返利结算的总金额</li></ul></td><td><code>rebate_settle</code></td><td></td></tr><tr><td><b>订单</b></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><b>PBOM</b></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td><b>权限</b></td><td><b>权限归属</b></td><td><ul><li>供应商维度：查询供应商所属采购员</li><li>询报价维度：查询询报价所属采购员</li><li>价格维度：查询零件所属采购员</li><li>合同维度：查询合同所属采购员</li><li>框架协议维度：查询框架所属采购员</li></ul></td><td><code>ownership buyer</code></td><td>采购</td><td></td></tr></tbody></table>

## 击穿场景举例

> 📋 白板：`EfQPwgLq1hAotgbTbVEcsgidnJe`（需在飞书中查看）
</whiteboard>

### 场景描述：

给定一个零件号 `P123456`，快速获取其 **报价进度** 并判断能否 **自动生成定点申请单**

该场景需串联多个原子查询。

### 拆解步骤

<table><colgroup><col/><col/><col/><col/></colgroup><tbody><tr><td><b>功能名称</b></td><td><b>功能说明</b></td><td><b>接口列表</b></td><td><b>目标用户</b></td></tr><tr><td>生成定点申请单</td><td><ul><li><b>校验是否具备生成定点申请单条件，如具备请用户确认后，生成定点申请单草稿</b><ul><li><b>预选供应商研发评审</b>完成</li><li><b>预选供应商质量评审</b></li><li><b>物流确认单</b>确认完成</li><li><b>生成定点单：</b>校验预选供应商评审完成、校验物流确认单确认完成，生成定点通知单</li></ul></li></ul></td><td><b>入参：</b><code>SOR包编号</code>、<code>零件号</code>、<code>RFQ包编号</code><br/><b>接口</b>：<code>SOR信息</code>-&gt;<code>询报价信息</code>-&gt;<code>询报价轮次信息</code>-&gt;<code>研发审批</code>-&gt;<code>质量审批</code>-&gt;<code>物流信息审批</code>-&gt;<code>生成定点申请单草稿</code><br/><b>出参</b>：零件XX在RFQXXX中，研发评审已完成，质量评审已完成，物流确认单已完成，轮次询价已完成，请确认是否生成定点通知单</td><td>采购员</td></tr></tbody></table>

## CLI 参考

### 供应商模块

#### `vendor profile`

查询供应商的综合档案信息

```Bash
vendor profile --id <vendor_id> [--fields <field_list>]
```

| **参数** | **说明** | **必填** |
|-|-|-|
| `--id` | 供应商编码或名称（支持模糊匹配） | 是 |
| `--fields` | 指定返回字段，逗号分隔。可选：`basic`, `contact`, `product`, `business`, `rd`, `sub` | 否（默认全部） |

**返回数据说明：**

- `basic`：注册资本、公司类型、资质、制造地址、股比、人员构成
- `contact`：商务联系人信息
- `product`：主要产品、规划产品、工艺装备水平、设备清单
- `business`：近四年销售情况、主要客户、拟引入零部件数据
- `rd`：研发投入、开发产品、研发设备、实验室认证、专利
- `sub`：关键二级供应商清单

#### `vendor history`

查询供应商历史变更记录。

```Bash
vendor history --id <vendor_id> [--type <name|address>]
```

### 寻源定点模块

#### `sor info`

查询 SOR 包基础信息。

```Bash
sor info --part <part_no> [--project <project_code>]
```

#### `sor progress`

查询 SOR 包维度的整体进度，包括定点时间、研发/质量评审进度、物流确认进度等。

```Bash
sor progress --part <part_no>
```

#### `pre vendor review`

查询预选供应商评审单及研发/质量评审意见与进度。

```Bash
pre vendor review --part <part_no> [--type <rd|quality>]
```

#### `inquiry progress`

查询询报价进度（零件维度或报价包维度）。

```Bash
inquiry progress --part <part_no> [--round <round_number>]
inquiry progress --id <inquiry_id>
```

#### `logistics confirm`

查询物流确认单状态。

```Bash
logistics confirm --part <part_no>
```

#### `apply generate`

**生成定点申请单（写操作）**。执行前自动校验前置条件。

```Bash
apply generate --part <part_no> [--force]
```

前置校验项：

1. 预选供应商研发评审已完成
2. 预选供应商质量评审已完成
3. 物流确认单已确认完成

> `--force` 可跳过校验强制生成（需特殊权限）。

### 价格模块

#### `price ledger`

查询零件的量产价、售后价、样件价及其价格构成。

```Bash
price ledger --part <part_no> --type <mass|after|sample> [--date <yyyy-mm>]
```

返回字段示例：到厂价、出厂价、物流费、模具分摊、研发分摊、一次性费用等。

#### `price framework check`

判断零件是否可以转正（框架协议覆盖校验）。

```Bash
price framework check --part <part_no>
```

校验逻辑：

1. 零件是否存在价格台账
2. 台账有效期是否覆盖框架协议时间段

### 变更模块

#### `change design`

查询设计变更（EWO）任务进度及关联的询报价状态。

```Bash
change design --part <part_no> [--sync-mibom]
```

- `--sync-mibom`：尝试从 MIBOM 实时拉取最新 EWO 状态。

#### `change color`

查询颜色件变更（CWO）任务进度。

```Bash
change color --part <part_no> [--sync-mibom]
```

#### `change price`

查询商务价格变更审批进度及变更单中的价格详情。

```Bash
change price --part <part_no> --change-id <change_id>
```

#### `change logistics`

查询物流价格变更申请单审批进度。

```Bash
change logistics --part <part_no>
```

### 合同模块

#### `contract esign`

按维度查询电子签合同信息。

```Bash
contract esign --scope <vendor|part|project> --id <identifier>
```

| 维度 | 标识符示例 | 返回内容 |
|-|-|-|
| `vendor` | 供应商编码 | 已签署合同类型、数量、进度 |
| `part` | 零件号 | 是否签署定价市场协议 |
| `project` | 项目代号 | 项目下合同类型、数量 |

#### `framework agreement`

查询框架协议信息。

```Bash
framework agreement --scope <part|vendor> --id <identifier>
```

### 返利模块

#### `rebate contract`

查询供应商返利合同清单及谈判结果。

```Bash
rebate contract --vendor <vendor_id>
```

#### `rebate settle`

查询供应商返利总结算金额。

```Bash
rebate settle --vendor <vendor_id>
```

### 权限归属模块

#### **`ownership buyer`**

查询各业务对象的负责采购员。

```Bash
ownership buyer --type <vendor|inquiry|part|contract|framework> --id <identifier>
```

## CLI应用场景

### 报价进度查询

> 
**业务问题：**
零件定点全生命周期流程环节众多，**采购管理层及跨部门协同人员**难以从全链路视角查看实际进度、节点完成度，流程卡点、环节耗时等信息，整体协同管控效率**受限。**
通过封装CLI逐个模块完成状态校验，得出当前任务进展状态、当前环节停留时间、并给出操作指引
**解决思路&路线选择：**
围绕`SOR、供应商预选、RFQ、物流信息确认、定点申请单`全链路流程，通过各业务模块 CLI 指令遍历校验，智能识别各节点完成状态、统计环节滞留时长，并生成流程进度结论与下一步操作指引，实现定点全流程自动化进度核查。

> 📋 白板：`H89CwieQVhQ8B3bMNNWcYNvfnMJ`（需在飞书中查看）
</whiteboard>

| **序号** | **步骤** | **CLI** | **输出结果** |
|-|-|-|-|
| 1 | 根据自然语言输入的零件信息，查询SOR状态 | `sor_part_info`👉`sor_task_progress` | 状态1：该零件尚未进入SOR  <br/>状态2：该零件已进入SOR，SOR号XXX，创建人XXX，预计定点时间XX  <br/>状态3：该零件已进入SOR，SOR号XXX，当前状态XX,创建人XXX，  <br/>状态4：该零件已完成SOR审批，SOR号XXX，仍未创建询报价，请创建询报价 |
| 2 | 完成SOR状态查询后 ，检查是否已完成 供应商预选 | `pre_vendor_progress` | 状态1：该零件尚未完成供应商预选  <br/>状态2：该零件已进入供应商预选，当前审批人XX，停留时间XX/该零件供应商预选审批已完成 |
| 3 | 完成供应商预选后，检查是否已创建报价包，并检查轮次状态 | `inquiry_quote_info`  <br/>`inquiry_quote_detail` | 状态1：该零件尚未创建RFQ  <br/>状态2：该零件已进入RFQ，RFQ号XXX，创建人XXX，预计定点时间XX  <br/>状态3：  <br/>该零件已进入RFQ，RFQ号XXX，创建人XXX，预计定点时间XX  <br/>该零件已进入RFQ，当前在第X轮  <br/>该零件已完成RFQ |
| 4 | 完成轮次报价后，检查供应商物流信息确认是否完成 | `inquiry_quote_info`  <br/>`inquiry_quote_detail` | 该零件物流信息表审批人为XX，停留时间XX |
| 5 | 定点申请单是否已创建，是否已审批 | `inquiry_quote_info`  <br/>`inquiry_quote_detail` | 状态1：该零件定点审批单采购员xxx，当前状态  <br/>状态2：定点审批单审批人，停留XX |

### 自动生成定点单

> 
**业务问题：**现有定点业务流程高度依赖人工驱动，定点通知单需人工汇总校验全链路前置节点完成情况后手动创建。造成定点单据发起滞后、难以实现全流程高效自动化闭环管理。
**解决思路&路线选择：**依托CLI 指令集实现全链路前置条件自动遍历，当全量前置校验条件全部达成时，系统自动生成定点通知单草稿，实现流程节点智能触发、单据自动化生成，释放人工操作成本，提升定点效率。

#### `EP user` --查询用户权限(需要鉴权查询人有EP的权限且为buyer)

| 参数 | 中文名称 | 是否必填 | 说明 |
|-|-|-|-|
|  | 用户名 | 是 | 小米人ID |

#### `EP sor-nomination-task` 查询零件、SOR包、询报价的状态

**入参：**

> 零件号，SOR编号，询报价编号，预选单编码，必须输入一个

| **参数** | **中文名称** | **是否必填** | **说明** |
|-|-|-|-|
|  | 零件号 | 是 |  |
|  | SOR包编号 |  |  |
|  | 询报价编号 |  |  |
|  | 预选单编号 |  |  |

**返参**

| **参数** | **中文名称** | **是否必填** | **说明** |
|-|-|-|-|
|  | SOR编号 | 是 |  |
|  | SOR名称 | 否 |  |
|  | SOR审批状态 | 是 | 状态枚举值：  <br/>审批中  <br/>驳回  <br/>待采购项目经理下发 |
|  | SOR审批节点 | 否 |  |
|  | 询报价编号 | 是 |  |
|  | 询报价状态 | 否 | 状态枚举值：  <br/>草稿、预选供应商推荐中，待询价，询价中，询价结束 |
|  | 询报价截止时间 | 否 | 当前轮次的询报价截止时间 |
|  | 询报价轮次 |  | 当前轮次 |
|  | 询报价轮次状态 |  | 状态枚举值：询价中，询价结束 |
|  | 询报价供应商 |  |  |
|  | 询报价供应商状态 |  | 状态枚举值：未查看、已查看、已报价 |
|  | 预选单编号 | 是 |  |
|  | 预选单状态 | 否 | 状态枚举值：草稿、审批中、驳回、通过 |
|  | 预选单审批节点 | 否 | 当前审批人 |
|  | 预选供应商研发审核人 |  | 预选供应商研发评审待办接收人 |
|  | 预选供应商研发审核意见 |  | 意见枚举值：推荐，不推荐，带条件推荐 |
|  | 预选供应商研发审批状态 |  | 状态枚举值：审批中，驳回，通过 |
|  | 预选供应商研发审批节点 |  | 当前审批人 |
|  | 预选供应商质量审核人 |  | 预选供应商研发质量待办接收人 |
|  | 预选供应商质量审核意见 |  | 意见枚举值：推荐，不推荐，带条件推荐 |
|  | 预选供应商质量审批状态 |  | 状态枚举值：审批中，驳回，通过 |
|  | 预选供应商质量审批节点 |  | 当前审批人 |
|  | 物流工程师 |  | 物流信息表审核人 |
|  | 物流信息表状态 |  | 状态枚举值：待提交、已提交、驳回、已确认、已关闭 |
|  | 定点申请单是否可创建 |  | 当预选单编号=‘通过’且预选供应商研发审批状态=‘通过’且预选供应商质量审批状态=‘通过’且物流信息表状态=‘已确认’or‘已关闭’ 且询报价状态=‘询价结束’则 显示‘true’  ；否则为‘false’ |

#### `EP sor-nomination-reate` 创建SOR定点申请单

**入参：**

| **参数** | **中文名称** | **是否必填** | **说明** |
|-|-|-|-|
|  | 供应商编码 | 是 |  |
|  | 供应商名称 | 否 |  |
|  | 申请人 | 否 |  |
|  | 创建时间 | 否 |  |

## 历史材料参考

### 痛点、目标及解决路径

#### 当前痛点

> 
#### 运营问题解决痛点：
- 用户问题包含**流程咨询、系统操作操作咨询、异常问题排查、优化建议**等。每一类问题后都有对应的知识库及问题解决路径。
- 传统的 AI 客服基于语义相似度匹配，主要回答“是什么”和“怎么做”的问题。**解决“复杂运营问题”需要的是逻辑推理（Why & What if），需要实体关系。**对复杂问题需要跨域协同诊断，**合作伙伴、寻源、价格、成本、合同、PR、订单**各个模块间有复杂的链接及交互逻辑，需要跨域协同才能定位问题根因。而不仅仅是文本片段。

#### 建设策略及路径

> 
**MVP聚焦场景交付价值：**
- **第一期：** 

  - 完善基于知识平台的知识问答，解决业务流程咨询、系统操作咨询类问题。
  - 完善单域和跨域协同的基础查询功能，搭建所需的全部实体、关系和规则，探索自动建模路径。
- **第二期：**

  - 深度打磨 Usecase 1（寻源到合同）。集中力量构建此链路所需的全部实体、关系和规则。
  - 目标：让AI对此链路的诊断准确率达到或超过初级运营人员水平

> 
**建立“知识运营”角色与流程：**
- 设立专职或虚拟的“知识图谱运营”岗位，负责：

  - 审核由大模型自动从工单沉淀的知识。
  - 基于未解决问题和AI的“置信度低”反馈，持续优化和补充图谱。
  - 与业务专家协同，设计新的推理场景。
- 建立 “问题-答案-图谱节点” 的反馈闭环。在任何答案界面，增加“是否解决？”“纠错”按钮，反馈直接关联到背后的图谱节点或推理逻辑。

### 分层实现方案

#### 场景一：知识问答

场景简介：解决业务流程咨询、系统操作咨询类问题

数据来源：操作手册、流程文档、Q&A 问答对

知识图谱建模过程：基于已有知识建立知识检索库、基于平台能力自动搭建知识图谱

<table><colgroup><col/><col/><col/></colgroup><tbody><tr><td></td><td><b>基于 LLM +Prompt 的回答</b></td><td><b>基于知识平台的知识图谱的回答</b></td></tr><tr><td>优点</td><td><ul><li>回答结构化，结果可控</li></ul></td><td><ul><li><b>回答考虑的维度完整</b></li></ul></td></tr><tr><td>缺点</td><td><ul><li><b>依赖提示词</b></li><li><b>复杂推导问题无法解决</b></li></ul></td><td><ul><li>可能给了用户过多信息</li><li>每次生成的图谱和回答内容不同</li></ul></td></tr><tr><td>共性</td><td colspan="2">用户问题或提示词输入的越完整越明确，回答越精准<br/>如：<br/>“如何做补差”，回答包含流程说明、操作步骤、异常原因（如链路较长，失效原因过多）<br/>“用户如何发起补差”，回答包含真的用户这一角色的操作步骤</td></tr><tr><td>Input</td><td colspan="2">问答对、操作手册、异常问题处理记录、prd 等</td></tr><tr><td>示例</td><td></td><td></td></tr><tr><td>优化建议</td><td>流程类问题、操作类问题使用 LLM+Prompt 解决<br/>进一步支持多模态问答</td><td><ul><li>图谱+Prompt 约束的能力</li><li>实体抽取过程可视化可控化</li><li>实体关系的压缩、抽象、融合</li></ul></td></tr></tbody></table>

场景简介：解决单业务对象、跨业务对象及复杂问题

数据来源：操作手册、流程文档、Q&A 问答对、**数据库、代码**

知识图谱建模过程：基于已有知识建立知识检索库、基于平台能力自动搭建知识图谱

#### 场景二：基于本体主干的单一业务对象查询

> 
单域查询类，比如合作伙伴域、寻源域、订单域查业务单据的owner及转交记录、查业务单据的状态并给出下一步建议

> 
- **用户提问：** “为什么我不能查不到对应零件价格，明明我是经理？”
- **传统 AI：** 检索出一堆“如何查询价格”的操作文档。（无效）
- **KG + AI：**

  1. AI 识别意图为“权限诊断”。
  2. 在图谱中检索该用户的路径：`User(UserA) -> Role(Manager) -> Permission(?)`。
  3. **发现断点：** 图谱显示` 价格查询`控权于`owner `，而零件的 owner 为 `buyer_A`。
  4. **回答：** “虽然您是经理，但该零件价格归属 buyerA，建议联系buyerA 进行确认或申请单据转移”

##### 单一业务对象查询主体及场景识别

<table><colgroup><col/><col/><col/><col/><col/><col/></colgroup><tbody><tr><td><b>序号</b></td><td><b>业务域 </b></td><td><b>业务场景 </b></td><td><b>业务实体 </b></td><td><b>用户问法举例</b></td><td><b>功能权限+数据权限</b></td></tr><tr><td>2.1.1</td><td><code>a.合作伙伴域</code></td><td><ol><li seq="1"><b>基础信息</b><ol><li seq="1">查询合作伙伴buyer 归属</li><li>查询合作伙伴制造地信息</li><li>主要合作对象</li><li>合作伙伴联系人</li></ol></li></ol></td><td><code>a.1 合作伙伴基础信息</code></td><td rowspan="4">
> <p>帮忙查一下这两家合作伙伴目前准入了哪些品类~</p><p>V55288</p><p>上海康琼信息科技有限公司</p><p>V65402</p><p>上海华讯网络系统有限公司</p>
</td><td>全员可见</td></tr><tr><td></td><td></td><td><ol><li seq="2"><b>准入</b><ol><li seq="1">查询<b>合作伙伴在各个品类下的准入情况</b></li><li>查询合作伙伴在特定品类下的准入状态</li><li>查询合作伙伴特定品类准入评估项目的评估人归属</li></ol></li></ol></td><td><code>a.2 合作伙伴准入</code></td><td>品类控权</td></tr><tr><td></td><td></td><td><ol><li seq="3"><b>电子签</b><ol><li seq="1">查询合作伙伴电子签状态</li></ol></li></ol></td><td><code>a.3 合作伙伴电子签</code></td><td>全员可见</td></tr><tr><td></td><td></td><td><ol><li seq="4"><b>支付条款</b><ol><li seq="1">查询合作伙伴当前账期</li><li>查询合作伙伴最优账期</li></ol></li></ol></td><td><code>a.4 合作伙伴支付条款</code></td><td>全员可见</td></tr><tr><td>2.1.2</td><td><code>b. 寻源域</code></td><td><ol><li seq="1"><b>报价包基础信息</b><ol><li seq="1">车型+品类的报价包buyer 归属</li><li>RFQ 号buyer 归属</li></ol></li></ol></td><td><code>b.1 报价包基本信息</code></td><td rowspan="3">
> <p>查询 RFQ 是否可以关联 SOR</p><p>查询 SOR 成熟度</p>
</td><td>owner 控权</td></tr><tr><td></td><td></td><td><ol><li seq="2"><b>报价包进度</b><ol><li seq="1">SOR是否已下发及成熟度</li><li>质量 SOR是否已下发</li><li>准入评估任务发起后是否完成，项目评估任务是否发起+是否完成</li><li>定点通知函是否发送</li></ol></li></ol></td><td><code>b.2 报价包协同任务状态</code><br/><code>b.3 报价包轮次</code><br/><code>b.4 报价包核价任务</code><br/><code>b.5 报价包财务目标价任务</code><br/><code>b.6 报价包内部物流价任务</code><br/><code>b.7 定点通知函</code></td><td>owner 控权</td></tr><tr><td></td><td></td><td><ol><li seq="3"><b>报价价格信息</b><ol><li seq="1">合作伙伴某轮次报价信息</li></ol></li></ol></td><td><code>b.8 报价包合作伙伴与价格</code></td><td>owner 控权</td></tr><tr><td>2.1.3</td><td><code>c. 价格</code></td><td><ol><li seq="1"><b>查询价格归属</b><ol><li seq="1">查询零件在 buyer 的归属</li></ol></li></ol></td><td><code>c.1 价格流水</code></td><td rowspan="5">
> <p>查询价格归属 buyer</p><p>查询 CUCO 进度</p>
</td><td>owner 控权</td></tr><tr><td></td><td></td><td><ol><li seq="2"><b>查询价格详情</b><ol><li seq="1">查询零件价格明细、价格有效期、价格来源</li></ol></li></ol></td><td><code>c.1 价格流水</code><br/><code>c.6 价格变更单</code><br/><code>c.7 LCR 变更单</code><br/><code>c.8 合作伙伴主体变更单</code></td><td>owner 控权</td></tr><tr><td></td><td></td><td><ol><li seq="3"><b>升版情况</b><ol><li seq="1">查询零件最高版本的有效价格，前八码是否有未提交的 CUCO 任务</li><li>查询零件 CUCO 的 buyer 归属</li></ol></li></ol></td><td><code>c.5 CUCO任务</code></td><td>owner 控权</td></tr><tr><td></td><td></td><td><ol><li seq="4"><b>价格确认情况</b><ol><li seq="1">查询零件的价格确认情况</li><li>查询零件新增合同的情况</li><li>查询零件价格确认同步合同情况</li></ol></li></ol></td><td><code>c.2 价格确认状态</code></td><td>owner 控权</td></tr><tr><td></td><td></td><td><ol><li seq="5"><b>查询物料的零供关系&amp;配额</b><ol><li seq="1">查询零件是否一品两点</li><li>查询零件是否有正在生效的配额，以及配额比例</li></ol></li></ol></td><td><code>c.3 配额</code><br/><code>c.4 零供关系</code></td><td>owner 控权<br/>+<br/>待定</td></tr><tr><td>2.1.4</td><td><code>d. 合同</code></td><td><ol><li seq="1"><b>合同整体情况</b><ol><li seq="1">合作伙伴合同数量统计</li><li>合作伙伴合同buyer归属</li><li>各合同签署情况</li></ol></li></ol></td><td><code>d.1 合同类型</code><br/><code>d.2 合同模板</code><br/><code>d.3 合同基础信息</code><br/><code>d.5 合同签署状态</code></td><td rowspan="2">
> <p>查询合同归属情况</p>
</td><td>owner 控权</td></tr><tr><td></td><td></td><td><ol><li seq="2"><b>合同详情查询</b><ol><li seq="1">查询零件在合同中的状态，是否存在，是否在有效期内</li></ol></li></ol></td><td><code>d.4 合同明细</code></td><td>owner 控权</td></tr><tr><td>2.1.4</td><td><code>e. PR</code></td><td><ol><li seq="1"><b>PR 详情查询</b><ol><li seq="1">根据 PR 号码查询buyer 归属</li><li>根据 PR 号码查询需求用户</li><li>根据 PR 号码查询剩余金额/总金额</li><li>根据 PR 号码查询关联订单</li><li>根据 PR 号码查询 PR 审批进度</li></ol></li></ol></td><td><code>e.1 PR 基础采购信息</code><br/><code>e.2 PR 状态</code></td><td rowspan="4">
> <p>PR 剩余金额查询</p><p>PO 定价错误如何处理</p>
</td><td>owner 控权</td></tr><tr><td>2.1.5</td><td><code>f. 需求</code></td><td><ol><li seq="1"><b>需求执行情况查询</b><ol><li seq="1">根据需求编码查询需求进度</li><li>根据需求编码查询是否存在报错及报错原因</li></ol></li></ol></td><td><code>f.1 需求基础信息</code><br/><code>f.2 需求 PR 关联关系</code></td><td>owner 控权</td></tr><tr><td>2.1.6</td><td><code>g. 定价</code></td><td><ol><li seq="1"><b>定价任务详情查询</b><ol><li seq="1">根据需求编码查询定价任务buyer 归属</li><li>根据零件号查询定价任务buyer 归属</li><li>查询定价任务单提交和审批状态</li></ol></li></ol></td><td><code>g.1 非量产定价任务</code><br/><code>g.2 非量产价格申请单</code><br/><code>g.3 非量产价格流水</code></td><td>owner 控权</td></tr><tr><td>2.1.7</td><td><code>h. PO</code></td><td><ol><li seq="1"><b>PO 下发情况查询</b><ol><li seq="1">根据需求编码查询 PO 执行情况</li><li>根据需求编码查询 PO 变更历史 </li></ol></li></ol></td><td><code>h.1 订单类型</code><br/><code>h.2 订单模板</code><br/><code>h.3 订单基础信息</code><br/><code>h.4 订单明细</code><br/><code>h.5 订单签署状态</code><br/><code>h.6 订单变更明细</code></td><td>owner 控权</td></tr><tr><td>2.1.8</td><td><code>i. 权限</code></td><td><ol><li seq="1"><b>权限查询</b><ol><li seq="1">查询用户当前角色</li><li>查询用户当前品类权限</li></ol></li></ol></td><td><code>i.1 用户管理</code><br/><code>i.2 角色管理</code><br/><code>i.3 品类权限</code><br/><code>i.4 权限时效</code></td><td>
> <p>查询人员角色和人员权限</p>
</td><td>owner 控权</td></tr></tbody></table>

#### 场景三：复杂本体主干的跨业务对象协同

> 
跨域协同类，比如合作伙伴+寻源域联动，查询报价包进行状态+评估任务状态+SOR 状态，并给出下一步建议

##### 复杂本体主体及场景识别

<table><colgroup><col/><col/><col/><col/><col/></colgroup><tbody><tr><td><b>序号</b></td><td><b>产品域</b></td><td><b>业务场景/规则</b></td><td><b>用户问法举例</b></td><td><b>用户问答记录</b></td></tr><tr><td>2.2.1</td><td><code>合作伙伴</code>+<code>寻源</code></td><td><b>准入限制规则在寻源的应用：</b><ol><li seq="1">合作伙伴需要发起对应品类的准入评估才可以发第一轮报价</li><li>准入评估和项目评估结果均回收才可以上会</li></ol></td><td>
> <p>报价包中选不到合作伙伴</p><p>👉（因为没有发起准入）</p><p>准入过期</p><p>👉（发起重新评估）</p><p>准入选不到人</p><p>👉（角色申请权限）</p>
</td><td></td></tr><tr><td>2.2.2</td><td><code>PR</code>+<code>需求</code>+<code>定价</code>+<code>订单</code></td><td><b>PR-PO 链路上的依赖关系</b><ul><li>PR申请审批成功</li><li>用户需求是否导入成功</li><li>标准需求是否有价格流水，是否生成定价任务，定价任务在何人名下，定价任务是否完成</li><li>非标需求是否生成定价任务，定价任务在何人名下，定价任务是否完成</li><li>订单不超过预算（数量+金额）</li><li>订单中零件主数据存在</li><li>订单中零件主数据一致</li><li>订单确认完成</li></ul></td><td>
> <p>查询定价任务归属的采购员</p><p>查询定价进度</p><p>变更采购员</p><p>变更订单详情</p>
</td><td></td></tr></tbody></table>

#### 场景四：复杂问题推理

##### 寻源到合同执行链路诊断

> 
> 问题：某个物料，是否可拉料？
> 
> 答案： 
> 
> 检查有效量产合同：即查询物料是否存在于有效的GPS量产合同中，并且该合同的状态是否为：生效中（其他枚举：待生效、已过期）
> 
> 如果满足上述条件，则可以直接拉料。
> 
> 若不满足上述条件，则继续查询物料的价格确认状态：
> 
> 如果价格确认状态是“已确认”，则也可以直接拉料。
> 
> 如果价格确认状态是“待确认”，则不可拉料，并提示需要采购员完成确认。
> 
> 如果价格确认状态是“待生成”，继续下一步。
> 
> 检查总成BOM结构校验状态：
> 
> 如果价格确认状态是“待生成”，查询总成BOM结构校验状态。
> 
> 如果总成BOM结构校验状态是通过，查找BOM中的子件，输出不在价格有效期内的零件。
> 
> 如果总成BOM结构校验状态是不通过，查找BOM中的子件，输出需要修正BOM结构。
> 
> 检查物料是否存在有效的价格流水：
> 
> 查询物料是否存在“生效中”的价格流水状态，用以提示或者辅助判断。

<table><colgroup><col/><col/><col/><col/><col/><col/></colgroup><tbody><tr><td><b>规则编码</b></td><td><b>业务规则</b></td><td><b>校验点</b></td><td><b>运营操作步骤</b></td><td><b>业务对象</b></td><td><b>相关系统</b></td></tr><tr><td>01</td><td>有效期内价格流水完成<ul><li>本体</li><li>DB</li><li>CS</li></ul></td><td>基于零件查询，是否存在有效期内的价格价格流水<ul><li>寻源定点完成</li><li>手动新增价格审批完成</li><li>CUCO 升版完成</li><li>价格变更完成</li></ul></td><td>【价格查询-直采】中查询是否有该零件有效价格存在</td><td>价格流水</td><td>GPS</td></tr><tr><td>02</td><td>总成价格确认完成</td><td>基于总成结构，由总成采购员完成总成价格确认<ul><li>有效期内本体+DB价格流水完成</li><li>完成总成价格确认</li></ul></td><td>【价格确认】中查询该零件价格确认是否完成</td><td>价格确认</td><td>GPS<br/>BOM 中台</td></tr><tr><td>03</td><td>量产合同创建/同步完成</td><td><ul><li>如该零件前八码曾经有合同，自动更新加入已有合同</li><li>如该零件前八码未有合同<ul><li>手动新增合同</li><li>手动追加合同</li></ul></li></ul></td><td>【价格确认】中查询是否新增合同，及同步合同状态是否为已完成</td><td>价格确认<br/>框架合同</td><td>GPS</td></tr><tr><td>04</td><td> 量产合同双签完成</td><td><ul><li>量产合同（主合同）完成签署</li><li>量产价格变更协议（子合同）完成签署</li></ul></td><td>【合同管理】中查询主合同及子合同的签署状态是否为已签署</td><td>框架合同</td><td>GPS<br/>SAP<br/>Portal</td></tr></tbody></table>

#### 场景五：供应商360画像

- 基本信息（基础层）

  - 基础资质：注册信息、注册资本、成立年限、经营范围、资质认证（ISO、行业专项认证等）、股权结构、核心团队背景；
  - 财务状况：营收规模、净利润、资产负债率、现金流、偿债能力、信用评级、税务合规情况，支持上传财务报表自动解析；
  - 商务风险：诉讼纠纷、行政处罚、失信记录、关联企业风险、供应链上下游风险（如核心原材料依赖、产能稳定性）。
- 合作概况（合作层）

  - 历史定点：定点项目名称、定点时间、定点数量/份额、合作周期、项目交付进度；
  - 采购金额：近1-3年累计采购额、月度/季度采购波动、核心产品采购占比、付款周期及履约情况；
  - 合作粘性：合作续约率、新增合作品类、配合度评分（如响应速度、问题解决效率）。
- 风险情况（风险层）

  - 历史评级：过往季度/年度供应商评级结果、评级变动趋势、评级扣分点及整改情况；
  - 历史绩效问题：质量缺陷、交付延迟、价格异常、服务投诉等问题记录、处理结果及整改闭环情况；
  - 潜在风险：AI基于历史数据+行业趋势预测，识别供应商产能不足、价格波动、合规风险、合作中断等潜在隐患，标注风险等级（高/中/低）及预警阈值。

#### 场景六：基于VPPS的的定点价格对比

核心目标：解决新项目定点价格不透明、缺乏参考依据的问题，通过AI调用历史VPPS（零件编码/规格标准）数据，实现同类零件价格交叉对比，降低采购成本，确保定价合理合规。

- “淘宝购物车”式对比：新项目定点时，将目标VPPS零件加入“价格对比池”，AI自动匹配系统内相同/相似VPPS编码的零件，调取其历史定点价格、供应商、采购批量、交付周期等信息，生成对比清单；
- 多维度对比维度：支持按“VPPS编码精准匹配”“规格参数相似匹配”“采购批量梯度对比”“供应商类型对比”（如自有供应商、外部供应商），确保对比结果具有参考性；
- 价格异常识别：AI自动计算同类零件价格区间、平均价格，标注目标零件报价高于/低于区间的比例，识别价格异常（如报价过高、过低），推送异常原因分析（如批量差异、材质差异、市场行情波动）；
- 历史数据追溯：支持查看每条对比价格的历史合作详情（如项目名称、交付质量、付款条件），辅助判断价格合理性，避免单纯比价忽略合作风险；
- 市场行情补充(待补充、爬取公开数据源)：~~AI同步抓取行业同类零件市场价格、原材料价格波动数据，结合历史定点价，给出目标零件的合理定价建议区间。~~

#### 场景七：AI 生成上会报告（已实现，待推广和优化）

- 个性化模板定制：支持用户自定义报告模板（如添加部门专属模块、调整数据展示形式），适配不同部门的个性化需求；
- AI智能润色：优化AI语言逻辑，提升报告专业性、流畅度，自动修正语法错误、调整表述方式，减少人工修改工作量；
- 数据可视化升级：增加更多图表类型（折线图、饼图、热力图等），让报告数据更直观，辅助管理层快速决策；
- 异常数据校验：AI自动校验报告中的数据逻辑（如采购金额与批量匹配度、风险等级与处置建议一致性），提醒人工修正异常；
- 多格式导出：支持导出PDF、Excel、Word等多种格式，适配不同上会展示场景（如线上汇报、纸质存档）。

#### 场景八：待办事项汇总和智能提醒

- SOR任务：SOR编制、审核、修订、归档，以及SOR变更后的同步更新任务，标注任务截止时间、关联项目/供应商；
- 变更任务：零件规格变更、供应商信息变更、采购合同变更、定点价格变更等，明确变更发起方、变更要求、完成节点；
- 框架任务：框架协议签订、续签、审核，框架额度管控、框架供应商管理等相关任务；
- 配额任务：供应商配额分配、配额调整、配额执行监控、配额完成统计等任务；
- 补充任务：供应商评级任务、风险整改跟进任务、上会报告撰写任务、采购对账任务等，覆盖供应商管理全流程。