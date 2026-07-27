---
created: '2026-07-24'
tags: [Xiaomi, 采购]
---

---**品类与 VPPS CLI 目标**

- **沉淀品类资源池查询能力**：将品类主数据、品类专家、材料品类、工艺品类、VPPS 节点关系等核心数据 CLI 化，支持业务、AI Agent、测试和开发快速查询品类资源池现状。

- **支撑 VPPS 绑定状态核验**：围绕 VPPS 的“待绑定 / 已绑定 / 无需绑定”三态模型，提供标准查询入口，便于快速定位未处理数据、误绑定数据和无需绑定数据。

- **统一变更追溯入口**：将品类属性、人员关系、VPPS 绑定关系、转派、解绑等关键变更 CLI 化，支持问题排查、数据审计和后续 AI 分析。

- **作为 AI 自动化任务分配的数据基座**：后续 SOR、EWO、CWO、SWO、样件、框架等任务可基于“VPPS → 品类 → 品类专家 / 采购工程师 / 财务CE”链路进行智能推荐和自动下发。
created: 2026-07-08
updated: 2026-07-22
status: draft
---

## 1\. 文档信息

|项目|内容|
|---|---|
|系统名称|EP|
|功能域|MVPS主数据管理 / 品类管理 / VPPS绑定品类|
|需求来源|EP\-20260629\-MVPS品类管理与VPPS绑定品类\-PRD|
|文档版本|v1\.1|
|状态|草案|
|目标用户|品类管理员、品类专家、ADMIN、业务系统开发、CLI开发、测试、AI Agent|
|接口状态|后端接口路径待开发确认，本文先定义 CLI 语义、入参、返回体和验收标准|

---

## 2\. CLI 设计原则

参考《EP CLI应用》文档，所有业务 CLI 统一采用四级命名空间：

```Bash
dx-ep <domain> <resource> <action> [flags] [args]
```

本期建议 domain 使用：

```Bash
dx-ep mvps ...
```

原因：

1. 当前能力归属 MVPS 主数据管理；

2. 品类与 VPPS 是该域下的资源对象；

### 2\.1 通用返回包装

所有命令建议统一返回 JSON：

```Java
{
  "success": true,
  "code": "SUCCESS",
  "message": "success",
  "data": {},
  "traceId": "string"
}
```

失败返回：

```Java
{
  "success": false,
  "code": "VALIDATION_ERROR",
  "message": "请传入品类编码",
  "data": null,
  "traceId": "string"
}
```

### 2\.2 通用分页参数

|参数|类型|必选|默认值|说明|
|---|---|---|---|---|
|`--page`|number|否|1|页码，从 1 开始|
|`--page-size`|number|否|50|每页条数|
|`--format`|string|否|json|输出格式，默认 json，后续可扩展 table|

---

## 3\. CLI 列表

> 优先级规则：**查询类 CLI 为 WAVE1，操作类 CLI 为 WAVE2**。

|功能分类|优先级|功能名称|CLI 指令|系统模块|功能说明|目标用户|
|---|---|---|---|---|---|---|
|品类管理|WAVE1<br>|查询品类列表|`dx-ep mvps category list`|新模块|按品类编码、名称、状态、品类专家、材料品类、工艺品类|品类管理员、品类专家、ADMIN、AI Agent|
|品类管理|WAVE1|查询品类详情|`dx-ep mvps category detail`<br>|新模块|根据品类编码查询品类基础信息、人员关系、VPPS关系|品类管理员、品类专家、ADMIN、AI Agent|
|VPPS绑定|WAVE1|查询VPPS绑定列表|`dx-ep mvps vpps list`|新模块|按绑定状态、VPPS编码、结构编码、中文描述查询 VPPS 数据，其中中文描述支持模糊查询|品类专家、品类管理员、ADMIN、AI Agent|
|定点供应商同步|WAVE1<br>|查询零件定点供应商<br>|`dx-ep supplier nominated query`|价格中心\-台账管理\(量产台账\&售后台账\)|根据零件号从价格中心查询定点供应商，定点供应商编码，定点名称|品类管理员、ADMIN、AI Agent、定时任务|
|定点供应商同步<br>|WAVE1|查询零件MBOM结构|`dx-ep mbom part-structure query`|m\_mbom|根据零件号从 MBOM 查询结构简码、位置码等结构信息|品类管理员、ADMIN、AI Agent、定时任务|
|定点供应商同步|WAVE1|解析VPPS绑定品类|`dx-ep mvps vpps resolve-category`|新模块|根据结构简码\+位置码解析 VPPS 及关联品类编码<br>|品类管理员、ADMIN、AI Agent、定时任务|
|定点供应商同步<br>|WAVE1<br>|同步定点供应商到品类<br>|`dx-ep mvps category supplier sync`|新模块|价格中心与 MBOM 查询结果，将零件定点供应商写入品类管理定点供应商并记录变更|品类管理员、ADMIN、定时任务<br>|
|变更记录<br>|WAVE1|查询品类变更记录|`dx-ep mvps category change-history`||查询品类字段、人员、VPPS关系、状态等变更记录|品类管理员、品类专家、ADMIN、AI Agent|

---

## 4\. 模块：品类管理

### 接口 1：查询品类列表

- **使用场景**：查询品类资源池主数据列表，支持按多条件筛选

- **接口路径：****/custom/category/list\.api**

- **请求方式：****POST**

- **CLI 指令**：

```Bash
dx-ep mvps category list \
  [--code <category-code>] \
  [--name <category-name>] \
  [--specialist-id <specialistId>] \
  [--group <group>] \
  [--vpps-codes <codes>] \
  [--sqe-id <sqeId>] \
  [--buyer-id <buyerId>] \
  [--ce-id <ceId>] \
  [--page-index <index>] \
  [--page-size <size>]
```

|参数名称|类型|说明|必选|
|---|---|---|---|
|\-\-code|string|品类编码，多个品类编码用逗号分隔|否|
|\-\-name|string|品类名称|否|
|\-\-specialist\-id|string|品类专家用户ID|否|
|\-\-group|string|专业组编码|否|
|\-\-vpps\-codes|string|VPPS节点编码，多个编码用逗号分隔|否|
|\-\-sqe\-id|string|SQE工程师用户ID|否|
|\-\-buyer\-id|string|采购工程师用户ID|否|
|\-\-ce\-id|string|财务CE用户ID|否|
|\-\-page\-index|number|数据起始下标|否|
|\-\-page\-size|number|每页条数|否|



#### 请求报文

```JSON
{
  "filterInfo": {
    "categoryCode": ["CAT-00001","CAT-00002"],
    "categoryName": "品类测试",
    "categorySpecialistId": "d9b18442e19b476e93de7ece62f71f39",
    "professionalGroup": null,
    "vppsCodes": [],
    "sqeId": null,
    "buyerId": null,
    "financeCeId": null
  },
  "pageInfo": {
    "beginIndex": 0,
    "pageSize": 10
  }
}
```

|字段名称|类型|说明|必选|
|---|---|---|---|
|categoryCode|list|品类编码|否|
|categoryName|string|品类名称|否|
|categorySpecialistId|string|品类专家用户ID|否|
|professionalGroup|string|专业组编码|否|
|vppsCodes|list|VPPS节点编码|否|
|sqeId|string|SQE工程师用户ID|否|
|buyerId|string|采购工程师用户ID|否|
|financeCeId|string|财务CE用户ID|否|
|beginIndex|number|数据起始下标|否|
|pageSize|number|每页条数|否|



#### 响应报文

```JSON
{
  "state": "success",
  "data": {
    "currentIndex": 0,
    "totalCount": 2,
    "currentPage": 1,
    "totalPage": 1,
    "pageSize": 10,
    "countLimit": 0,
    "content": [
      {
        "optCounter": 10,
        "createdBy": "d9b18442e19b476e93de7ece62f71f39",
        "createDate": "2026-07-17 10:40:22",
        "updatedBy": "48b0290b66bf4159a969fd2250d13530",
        "updateDate": "2026-07-21 11:00:31",
        "isDeleted": false,
        "id": "8a405a839f6de99c019f6df246ee0001",
        "categoryCode": "CAT-00001",
        "categoryName": "品类测试2",
        "categoryStatus": "EFFECTIVE",
        "professionalGroup": "DZJG",
        "professionalGroupName": "电子架构",
        "materialCategory": "1.03,1.04",
        "materialCategoryName": "黑金属—POWDERED METAL/粉末金属,黑金属—STEEL TUBE/钢管",
        "processCategory": "3.03,3.04",
        "processCategoryName": "表面处理与特殊工艺—植绒,表面处理与特殊工艺—电镀",
        "categoryDesc": "品类描述说明2",
        "nominatedSupplier": "763815261602073,763826832724671",
        "nominatedSupplierName": "上海电机,上海电机厂",
        "categorySpecialistId": "d9b18442e19b476e93de7ece62f71f39",
        "categorySpecialist": "张宁",
        "transferReason": "组织调整",
        "changeLogCount": 1
      },
      {
        "optCounter": 1,
        "createdBy": "d9b18442e19b476e93de7ece62f71f39",
        "createDate": "2026-07-17 15:35:40",
        "updatedBy": "d9b18442e19b476e93de7ece62f71f39",
        "updateDate": "2026-07-17 16:38:15",
        "isDeleted": false,
        "id": "8a405a839f6efb5f019f6f00a3ed0000",
        "categoryCode": "CAT-00002",
        "categoryName": "品类测试222",
        "categoryStatus": "EFFECTIVE",
        "professionalGroup": "DZJG",
        "professionalGroupName": "电子架构",
        "materialCategory": "3.10,3.11",
        "materialCategoryName": "非金属—碳纤维专用,3.11",
        "processCategory": "1.03,1.04",
        "processCategoryName": "金属成型工艺—粉末冶金,金属成型工艺—高压铸造",
        "categoryDesc": "品类测试描述222",
        "nominatedSupplierName": "",
        "categorySpecialistId": "d9b18442e19b476e93de7ece62f71f39",
        "categorySpecialist": "张宁",
        "changeLogCount": 0
      }
    ]
  }
}
```

|字段名称|类型|说明|
|---|---|---|
|id|string|主键|
|categoryCode|string|品类编码|
|categoryName|string|品类名称|
|categoryStatus|string|品类状态|
|professionalGroup|string|专业组Code|
|professionalGroupName|string|专业组名称|
|materialCategory|string|材料品类code，逗号分隔|
|materialCategoryName|string|材料品类名称，逗号分隔|
|processCategory|string|工艺品类code，逗号分隔|
|processCategoryName|string|工艺品类名称，逗号分隔|
|categoryDesc|string|品类描述/说明|
|nominatedSupplier|string|定点供应商ID，逗号分隔|
|nominatedSupplierName|string|定点供应商名称，逗号分隔|
|categorySpecialistId|string|品类专家用户ID|
|categorySpecialist|string|品类专家用户姓名|
|changeLogCount|number|品类变更记录条数|
|createDate|date|创建时间|



#### 验收标准

- **Given** 未传任何筛选条件
**When** 执行 `dx-ep mvps category list`
**Then** 默认分页返回当前用户有权限查看的品类列表

- **Given** 传入品类名称筛选条件
**When** 执行 `dx-ep mvps category list --``name '品类测试'`
**Then** 返回品类名称包含'品类测试'的品类列表

- **Given** 某品类绑定了 VPPS 节点 `10.01.01`
**When** 执行 `dx-ep mvps category list --vpps-``codes`` 10.01.01`
**Then** 返回包含该 VPPS 节点关系的品类列表

---

### 接口 2：查询品类详情

- **使用场景**：根据品类编码查询品类详情，包含基础信息、人员关系、VPPS节点关系

- **接口路径：/custom/category/detail\.api**

- **请求方式：POST**

- **CLI 指令**：

```Bash
dx-ep mvps category detail --code <category-code>
```

|参数名称|类型|说明|必选|
|---|---|---|---|
|`--code`|string|品类编码，精准匹配|是|



#### 请求报文

```JSON
{
  "value": "CAT-00001"
}
```

|字段名称|类型|说明|必选|
|---|---|---|---|
|value|string|品类编码|是|



#### 响应报文

```JSON
{
  "state": "success",
  "data": {
    "optCounter": 6,
    "createdBy": "d9b18442e19b476e93de7ece62f71f39",
    "createDate": "2026-07-17 10:40:22",
    "updatedBy": "d9b18442e19b476e93de7ece62f71f39",
    "updateDate": "2026-07-20 13:57:23",
    "isDeleted": false,
    "id": "8a405a839f6de99c019f6df246ee0001",
    "categoryCode": "CAT-00001",
    "categoryName": "品类测试11111",
    "categoryStatus": "EFFECTIVE",
    "professionalGroup": "XJDL",
    "professionalGroupName": "先进动力",
    "materialCategory": "1.03,1.04",
    "materialCategoryName": "黑金属—POWDERED METAL/粉末金属,黑金属—STEEL TUBE/钢管",
    "processCategory": "3.03,3.04",
    "processCategoryName": "表面处理与特殊工艺—植绒,表面处理与特殊工艺—电镀",
    "categoryDesc": "品类描述说明111",
    "nominatedSupplier": "763815261602073,763826832724671",
    "categorySpecialistId": "d9b18442e19b476e93de7ece62f71f39",
    "categorySpecialist": "张宁",
    "vppsList": [
      {
        "id": "56CA00FC1E8E5D81E06373A2260AF6D3",
        "vppsCode": "1001-FNA01",
        "categoryName": "品类测试11111"
      }
    ],
    "transferReason": "组织调整"
  }
}
```

|字段名称|类型|说明|
|---|---|---|
|id|string|主键|
|categoryCode|string|品类编码|
|categoryName|string|品类名称|
|categoryStatus|string|品类状态|
|professionalGroup|string|专业组Code|
|professionalGroupName|string|专业组名称|
|materialCategory|string|工艺品类code|
|processCategoryName|string|工艺品类名称|
|categoryDesc|string|品类描述/说明|
|nominatedSupplier|string|定点供应商ID|
|categorySpecialistId|string|品类专家用户ID|
|categorySpecialist|string|品类专家姓名|



#### 验收标准

- **Given** 未传 `--code`
**When** 执行命令
**Then** 返回参数校验错误提示品类编码不能为空

- **Given** 品类编码不存在
**When** 执行命令
**Then** 返回明确错误提示品类不存在

- **Given** 品类编码存在
**When** 执行命令
**Then** 返回品类基础信息、人员关系和 VPPS 节点关系

---

### 



## 5\. 模块：VPPS绑定品类

### 接口 6：查询 VPPS 绑定列表

- **使用场景**：查询 MiBOM / 总基线同步下来的 VPPS 数据及绑定状态

- **接口路径：/custom/vpps/find\.api**

- **请求方式：POST**

- **CLI 指令**：

```Bash
dx-ep mvps vpps list \
  [--status <待绑定|已绑定|无需绑定>] \
  [--active-status <生效|失效>] \
  [--vpps-code <code>] \
  [--mvpps-code <code>] \
  [--fnadesc-zh <keyword>] \
  [--page <page>] \
  [--page-size <size>]
```

|参数名称|类型|说明|必选|
|---|---|---|---|
|`--status`|string|绑定状态|否|
|`--``active``-status`|string|编码状态|否|
|`--vpps-code`|string|VPPS编码|否|
|`--``mvpps``-code`|string|结构编码|否|
|`--``fnadesc-zh` |string|中文描述|否|



#### 请求报文

```JSON
{
  "filterInfo": {
    "bindStatus": "TO_BIND",
    "activeStatus": "ACTIVE",
    "vppsCode": "1011",
    "mvppsCode": null,
    "fnadescZh": null
  },
  "pageInfo": {
    "beginIndex": 0,
    "pageSize": 10
  }
}
```

|字段名称|类型|说明|必选||
|---|---|---|---|---|
|bindStatus|string|绑定状态，精确匹配|否|TO\_BIND\-待绑定 BIND\-已绑定 NO\_BIND\-无需绑定|
|activeStatus|string|编码状态，精确匹配|否|ACTIVE\-生效 INACTIVE\-失效|
|vppsCode|string|VPPS编码，模糊匹配|否||
|mvppsCode|string|结构编码，模糊匹配|否||
|fnadescZh|string|中文描述，模糊匹配|否||



#### 响应报文

```JSON
{
  "state": "success",
  "data": {
    "currentIndex": 0,
    "totalCount": 25,
    "currentPage": 1,
    "totalPage": 13,
    "pageSize": 2,
    "countLimit": 0,
    "content": [
      {
        "id": "570633E7CACD1277E06373A2260AB26F",
        "vppsCode": "1022-Z1011",
        "mvppsCode": "10.02.02.01.19",
        "upc": "1022",
        "fna": "Z1011",
        "fnadescZh": "波形弹簧",
        "fnadescEn": "BOXINGTH",
        "activeStatus": "ACTIVE",
        "effectiveFrom": "2025-11-13 09:55:44",
        "bindStatus": "TO_BIND",
        "mdPartDescId": "8a45f0bc9a784866019a7aecd51e0000"
      },
      {
        "id": "570633E7CAE41277E06373A2260AB26F",
        "vppsCode": "1011-1",
        "mvppsCode": "10.01.01",
        "upc": "1011",
        "fna": "1",
        "fnadescZh": "电机驱动器",
        "fnadescEn": "3",
        "activeStatus": "ACTIVE",
        "effectiveFrom": "2025-09-28 16:35:12",
        "bindStatus": "TO_BIND",
        "mdPartDescId": "0000000097e7fbbd0197e90700c00026"
      }
    ]
  }
}
```

|字段名称|类型|说明|
|---|---|---|
|id|string|主键|
|vppsCode|string|VPPS编码|
|mvppsCode|string|结构编码|
|upc|string|结构简码|
|fna|string|位置码|
|fnadescZh|string|中文描述|
|fnadescEn|string|英文描述|
|activeStatus|string|编码状态：ACTIVE\-生效 INACTIVE\-失效|
|effectiveFrom|string|编码生效日期|
|bindStatus|string|绑定状态：TO\_BIND\-待绑定 BIND\-已绑定 NO\_BIND\-无需绑定|
|mdPartDescId|string|MiBOM零件描述库ID|



#### 验收标准

- **Given** 存在待绑定 VPPS
**When** 执行 `dx-ep mvps vpps list --status 待绑定`
**Then** 返回待绑定 VPPS 列表

- **Given** VPPS 编码状态为失效
**When** 执行 `dx-ep mvps vpps list --``active``-status 失效`
**Then** 返回失效 VPPS 列表

- **Given** 存在中文描述为“前保险杠左侧安装结构”的 VPPS
**When** 执行 `dx-ep mvps vpps list --``fnadesc-zh`` 保险杠`
**Then** 返回中文描述包含“保险杠”的 VPPS 列表

---

### 

## 

## 7\. 模块：变更记录

### 接口 9：查询品类变更记录

- **使用场景**：查询品类属性、人员、VPPS关系、冻结、转派、绑定、解绑等变更记录

- **接口路径：/custom/categoryChangeLog/list\.api**

- **请求方式：POST**

- **CLI 指令**：

```Bash
dx-ep mvps category change-history \
  [--code <code>] \
  [--operation-type <type>] \
  [--start-time <yyyy-MM-dd HH:mm:ss>] \
  [--page <page>] \
  [--page-size <size>]
```

|参数名称|类型|说明|必选|
|---|---|---|---|
|`--code`|string|品类编码|是|
|`--operation-type`|string|操作类型|否|
|`--start-time`|date|起始时间|否|
|`--page`|number|页码|否|
|`--page-size` |number|页数|否|



#### 请求报文

```JSON
{
  "filterInfo": {
    "categoryCode": "PL20260716001",
    "operationType": "STATUS_CHANGE",
    "beginTime": "2026-07-16 16:15:10"
  },
  "pageInfo": {
    "beginIndex": 0,
    "pageSize": 10
  }
}
```

|参数名称|类型|说明|必选|校验规则|
|---|---|---|---|---|
|categoryCode|string|品类编码|是|品类编码必填|
|operationType|enum<br>|变更类型|否<br>|SPECIALIST\_CHANGE\-品类专家变更<br>VPPS\_CHANGE\-VPPS节点/人员变更<br>STATUS\_CHANGE\-品类状态变更|
|beginTime|date|查询的开始时间|否|YYYY\-MM\-DD HH:mm:ss|
|beginIndex|number|分页查询的起始下标|否||
|pageSize|number|每页条数|否||



#### 响应报文

```JSON
{
  "state": "success",
  "data": {
    "currentIndex": 0,
    "totalCount": 1,
    "currentPage": 1,
    "totalPage": 1,
    "pageSize": 10,
    "countLimit": 0,
    "content": [
      {
        "categoryCode": "PL20260716001",
        "operationType": "STATUS_CHANGE",
        "changeContentBefore": "[{\"status\":\"FROZEN\"}]",
        "changeContentAfter": "[{\"status\":\"EFFECTIVE\"}]",
        "operatorId": "d8d7752dde4a492f826efa258345f36d",
        "operatorName": "陈亚奇",
        "operateTime": "2026-07-16 16:30:09",
        "source": "MANUAL"
      }
    ]
  }
}
```

|参数名称|类型|说明|
|---|---|---|
|categoryCode|string|品类编码|
|operationType|enum|变更类型|
|changeContentBefore|string|变更前|
|changeContentAfter|string|变更后|
|operatorId|string|操作人ID|
|operatorName|string|操作人姓名|
|operateTime|date|操作时间|
|source|enum|操作来源|



#### 验收标准

- **Given** 未传品类编码
**When** 执行命令 dx\-ep mvps category change\-history
**Then** 返回参数校验错误，提示品类编码不能为空

- **Given** 传入存在的品类编码
**When** 执行命令 dx\-ep mvps category change\-history \-\-code 'PL20260716001'
**Then** 返回该品类编码对应的变更记录，变更记录按操作时间倒序排列

- **Given** 传入指定品类编码与操作类型参数
**When** 执行命令 dx\-ep mvps category change\-history \-\-code 'PL20260716001' \-\-operation\-type 'STATUS\_CHANGE'
**Then** 返回该品类编码在该操作类型下的变更记录，变更记录按操作时间倒序排列

---

### 

## 8\. 模块：定点供应商同步

> **用途说明**：本模块用于支持“期初导入定点供应商”之后的定时/手动更新。完整链路为：零件号 → 价格中心定点供应商；零件号 → MBOM结构简码\+位置码；结构简码\+位置码 → VPPS/品类编码；最后写入品类管理中的定点供应商字段。价格中心、MBOM 的接口名称与字段口径均待开发确认。

### 接口 10：根据零件号查询价格中心定点供应商

- **使用场景**：根据零件号从价格中心查询该零件的定点供应商，供同步前校验或问题排查使用

- **接口路径：/custom/categoryChangeLog/list\.api**

- **请求方式：POST**

- **CLI 指令**：

```Bash
dx-ep supplier nominated query \
  --part-no <part-no>
```

#### 输入参数

|参数名称|类型|必选|默认值|校验规则|说明|
|---|---|---|---|---|---|
|`--part-no`|string|是|\-|非空|零件号|



#### 请求报文

```JSON
{
  "filterInfo": {
    "categoryCode": "PL20260716001",
    "operationType": "STATUS_CHANGE",
    "beginTime": "2026-07-16 16:15:10"
  },
  "pageInfo": {
    "beginIndex": 0,
    "pageSize": 10
  }
}
```

|参数名称|类型|说明|必选|校验规则|
|---|---|---|---|---|
|categoryCode|string|品类编码|是|品类编码必填|
|operationType|enum<br>|变更类型|否<br>|SPECIALIST\_CHANGE\-品类专家变更<br>VPPS\_CHANGE\-VPPS节点/人员变更<br>STATUS\_CHANGE\-品类状态变更|
|beginTime|date|查询的开始时间|否|YYYY\-MM\-DD HH:mm:ss|
|beginIndex|number|分页查询的起始下标|否||
|pageSize|number|每页条数|否||



#### 响应报文

```JSON
{
  "state": "success",
  "data": {
    "currentIndex": 0,
    "totalCount": 1,
    "currentPage": 1,
    "totalPage": 1,
    "pageSize": 10,
    "countLimit": 0,
    "content": [
      {
        "categoryCode": "PL20260716001",
        "operationType": "STATUS_CHANGE",
        "changeContentBefore": "[{\"status\":\"FROZEN\"}]",
        "changeContentAfter": "[{\"status\":\"EFFECTIVE\"}]",
        "operatorId": "d8d7752dde4a492f826efa258345f36d",
        "operatorName": "陈亚奇",
        "operateTime": "2026-07-16 16:30:09",
        "source": "MANUAL"
      }
    ]
  }
}
```

|参数名称|类型|说明|
|---|---|---|
|categoryCode|string|品类编码|
|operationType|enum|变更类型|
|changeContentBefore|string|变更前|
|changeContentAfter|string|变更后|
|operatorId|string|操作人ID|
|operatorName|string|操作人姓名|
|operateTime|date|操作时间|
|source|enum|操作来源|



#### 验收标准

- **Given** 未传品类编码
**When** 执行命令 dx\-ep mvps category change\-history
**Then** 返回参数校验错误，提示品类编码不能为空

- **Given** 传入存在的品类编码
**When** 执行命令 dx\-ep mvps category change\-history \-\-code 'PL20260716001'
**Then** 返回该品类编码对应的变更记录，变更记录按操作时间倒序排列

- **Given** 传入指定品类编码与操作类型参数
**When** 执行命令 dx\-ep mvps category change\-history \-\-code 'PL20260716001' \-\-operation\-type 'STATUS\_CHANGE'
**Then** 返回该品类编码在该操作类型下的变更记录，变更记录按操作时间倒序排列

---

### 接口 11：根据零件号查询 MBOM 结构简码与位置码

- **优先级**：WAVE1

- **使用场景**：根据零件号从 MBOM 查询结构简码、位置码，用于后续解析品类编码。

- **CLI 指令**：

```Bash
dx-ep mbom part-structure query \
  --part-no <part-no>
```

#### 输入参数

|参数名称|类型|必选|默认值|校验规则|说明|
|---|---|---|---|---|---|
|`--part-no`|string|是|\-|非空|零件号|

#### 返回参数

```Java
{
  "success": true,
  "data": {
    "partNo": "P123456789",
    "structShort": "FRT-BPR",
    "positionCode": "FR-L",
    "structCode": "STR-MBOM-1001",
    "codeStatus": "生效",
    "sourceSystem": "MBOM",
    "sourceInterface": "待开发确认"
  }
}
```

#### 业务规则

1. 仅查询 MBOM 结构信息，不写入 EP 品类数据。

2. 若同一零件号返回多条结构简码\+位置码，需要全部返回，后续同步时逐条解析。

3. MBOM 接口名称、结构简码/位置码字段来源待开发确认。

---

### 接口 12：根据结构简码与位置码解析品类编码

- **优先级**：WAVE1

- **使用场景**：根据 MBOM 返回的结构简码与位置码，查询 VPPS 绑定关系并解析到品类编码。

- **CLI 指令**：

```Bash
dx-ep mvps vpps resolve-category \
  --struct-short <struct-short> \
  --position-code <position-code>
```

#### 输入参数

|参数名称|类型|必选|默认值|校验规则|说明|
|---|---|---|---|---|---|
|`--struct-short`|string|是|\-|非空|结构简码|
|`--position-code`|string|是|\-|非空|位置码|

#### 返回参数

```Java
{
  "success": true,
  "data": {
    "structShort": "FRT-BPR",
    "positionCode": "FR-L",
    "vppsCode": "10.11.01",
    "categoryCode": "CAT-00001",
    "categoryName": "前保险杠总成"
  }
}
```

#### 业务规则

1. 根据结构简码\+位置码查询 VPPS 绑定关系。

2. 未匹配到品类时返回空结果，并明确原因。

3. 匹配到多个 VPPS 或多个品类时返回冲突错误，不自动任选。

4. 仅允许解析到生效品类；品类状态规则待开发确认。

---

### 接口 13：同步零件定点供应商到品类管理

- **优先级**：WAVE2

- **使用场景**：根据零件号编排完整链路，将价格中心的零件定点供应商写入品类管理中的定点供应商字段。可供手动补数、AI Agent 调用或定时任务调用。

- **CLI 指令**：

```Bash
dx-ep mvps category supplier sync \
  --part-no <part-no> \
  [--dry-run true] \
  [--source price-center]
```

#### 输入参数

|参数名称|类型|必选|默认值|校验规则|说明|
|---|---|---|---|---|---|
|`--part-no`|string|是|\-|非空|零件号|
|`--dry-run`|boolean|否|true|true / false|仅预演不写入|
|`--source`|string|否|price\-center|当前仅支持 price\-center|定点供应商来源|

#### 返回参数

```Java
{
  "success": true,
  "data": {
    "partNo": "P123456789",
    "structShort": "FRT-BPR",
    "positionCode": "FR-L",
    "vppsCode": "10.11.01",
    "categoryCode": "CAT-00001",
    "categoryName": "前保险杠总成",
    "dryRun": false,
    "syncedSuppliers": [
      {
        "supplierCode": "S000001",
        "supplierName": "延锋汽车内饰系统"
      }
    ],
    "changeRecord": {
      "field": "定点供应商",
      "source": "价格中心同步",
      "beforeValue": [],
      "afterValue": ["延锋汽车内饰系统"]
    }
  }
}
```

#### 编排逻辑

1. 根据 `--part-no` 调用价格中心查询定点供应商。

2. 根据 `--part-no` 调用 MBOM 查询结构简码\+位置码。

3. 根据结构简码\+位置码解析 VPPS 及品类编码。

4. 将零件定点供应商写入对应品类的定点供应商字段。

5. 若 `--dry-run true`，仅返回预期影响，不落库。

6. 写入成功后记录变更记录，来源建议为 `价格中心同步` 或 `定时同步`。

#### 业务规则

1. 同一供应商已存在时不重复写入。

2. 供应商集合无变化时不写变更记录。

3. 未查到定点供应商、未查到结构简码/位置码、未解析到品类编码时，返回失败原因，不写入。

4. 结构简码\+位置码解析出多个品类时，返回冲突错误，不自动写入。

5. 定时任务触发时间、待同步零件范围、失败重试策略均待开发确认。

---

### 

## 9\. 权限规则汇总

|CLI能力|品类管理员|当前品类专家|ADMIN|其他品类专家|普通用户|
|---|---|---|---|---|---|
|查询品类列表|是|是|是|是|否|
|查询品类详情|是|是|是|是|否|
|新增品类|是|否|是|否|否|
|编辑品类|否|是|是|否|否|
|转派品类|否|是|是|否|否|
|查询VPPS列表|是|是|是|是|否|
|绑定VPPS到自己负责品类|否|是|是|否|否|
|绑定VPPS到他人负责品类|否|否|是|否|否|
|解绑已绑定VPPS|否|是|是|否|否|
|查询变更记录|是|是|是|是|否|
|查询零件定点供应商|是|是|是|是|否|
|查询零件MBOM结构|是|是|是|是|否|
|解析VPPS绑定品类|是|是|是|是|否|
|同步定点供应商到品类|是|否|是|否|否|

---

## 11\. 备注

根据零件号先查询MSTDATA\.MD\_MATERIAL的 零件ID, 然后根据零件ID 查询台账表\(cstmgmt\.CST\_MATERIAL\_COST\)的供应商ID，

去重之后查询供应商主表\(MSTDATA\.MD\_SUPPLIER\)，返参COST\_TYPE，供应商ID,供应商编码，供应商名称，零件ID,零件号，零件名称

SELECT \* FROM cstmgmt\.CST\_MATERIAL\_COST cmc 

INNER JOIN MSTDATA\.MD\_SUPPLIER ms ON ms\.MD\_SUPPLIER\_ID = cmc\.MD\_SUPPLIER\_ID 

INNER JOIN MSTDATA\.MD\_MATERIAL mm ON mm\.MD\_MATERIAL\_ID = cmc\.MD\_MATERIAL\_ID 

WHERE cmc\.IS\_ACTIVE = '1' AND MATERIAL\_MUN='P000000630001';



根据零件号查询MSTDATA\.MD\_M\_BOM 的 UPC/FFA 组合去重处理，返回零件ID,零件名，零件名称，结构简码\+位置码

SELECT \* FROM MSTDATA\.MD\_M\_BOM mmb  WHERE MATERIAL\_MUN='P000000630001';





根据VPPScode 查询 品类编码，品类名称，状态，品类专家

SELECT \* FROM MSTDATA\.MD\_VPPS\_DESC mvd

INNER JOIN mstdata\.MD\_CATEGORY mc ON mc\.MD\_CATEGORY\_ID = mvd\.CATEGORY\_ID 

WHERE mvd\.VPPS\_CODE = ''



同步定点供应商到品类管理

入参：品类编码

UPDATE mstdata\.MD\_CATEGORY mc SET mc\.NOMINATED\_SUPPLIER = '11111,22222' WHERE mc\.CATEGORY\_CODE = 'CAT\-00001';


---

> 回到 → [[Xiaomi|📱 小米 EP 采购系统]]
