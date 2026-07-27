---
created: 2026-07-22
updated: 2026-07-22
tags: [Xiaomi, 系统]
source: https://mi.feishu.cn/wiki/C6kOwerUqipFXTkoJZRc3b7NnPf
status: draft
---

# EP CLI应用

> 📌 来源：[飞书云文档](https://mi.feishu.cn/wiki/C6kOwerUqipFXTkoJZRc3b7NnPf)

<title>EP CLI应用</title>

<callout emoji="🎨">
**采购业务视角 CLI 目标**
- **破解数据孤岛，提升全链路全景核验能力：**零件定点全流程涉及 SOR、预选、询报价、物流确认、定点签约等多个分散节点，链条冗长、状态难追踪。CLI 将跨域数据统一收敛，为业务管理者及协同方提供一站式的全流程进度与状态总览能力。
- **响应多角色差异，建立标准化查询入口：**采购、DRE 研发、SQE、物流等不同岗位对数据维度的关注点各不相同。CLI 提供统一的标准化查询入口，使各角色能按需精准获取所需信息。
- **奠定 AI 分析能力的数据基座：**CLI 指令具备原子化设计：统一入参规范、标准化出参结构、模块间独立解耦，CLI指令集可作为后续智能应用的统一数据调用基座，支撑流程智能研判、节点滞留分析、风险预警、智能操作指引及自动化督办等 AI 上层能力建设。
</callout>

<whiteboard token="FbC4w6IILh2ur8bxX8BcETt5nJk"></whiteboard>

# 文档信息

<grid><column width-ratio="0.515686"><table><colgroup><col/><col/></colgroup><thead><tr><th>角色</th><th>输出内容</th></tr></thead><tbody><tr><td>产品</td><td>场景、功能说明</td></tr><tr><td>业务系统开发</td><td>CLI命令定义，入参返回体验证标准等</td></tr><tr><td>CLI开发</td><td>需求评审、使用说明、最终命令发布</td></tr><tr><td>业务系统测试</td><td>CLI功能场景验收</td></tr></tbody></table><p><cite doc-id="SpW4dGZcvoGlYWx1VWkcYPhxn2J" file-type="docx" title="接口 CLI 化需求文档模板" type="doc"></cite></p><p></p></column><column width-ratio="0.484314"><table><colgroup><col/><col/></colgroup><thead><tr><th>项目</th><th>内容</th></tr></thead><tbody><tr><td>系统名称</td><td>EP</td></tr><tr><td>功能域</td><td>EP全域（<b>供应商|寻源定点|</b>价格|合同|权限）</td></tr><tr><td>需求提出人</td><td><cite type="user" user-id="ou_26de189aaa9275d0b285a8c60eb09168" user-name="刘冬梅 Jane"></cite><cite type="user" user-id="ou_1e7c76dddda36326651f9fd6c92c4df0" user-name="孟启迪"></cite><cite type="user" user-id="ou_c7f56bca5172885bcb7e4eebef572541" user-name="吕晶源"></cite></td></tr><tr><td>产品负责人</td><td><cite type="user" user-id="ou_8bd836b860b0a5114ca0d4ce831d2644" user-name="齐岳"></cite><cite type="user" user-id="ou_dcdb82cfc0b28a15cae1ba4a583e2340" user-name="李文俊"></cite></td></tr><tr><td>开发负责人</td><td><cite type="user" user-id="ou_5b2b0aaf0423a515540dbc510edcba3e" user-name="刘文飞"></cite><cite type="user" user-id="ou_f32a62aed8be275479cdaf32aeba33e7" user-name="方良"></cite></td></tr><tr><td>文档版本</td><td>v1.0</td></tr><tr><td>状态</td><td>草稿</td></tr></tbody></table></column></grid>

## CLI 列表

<table><colgroup><col/><col/><col/><col/><col/><col/></colgroup><thead><tr><th>功能分类</th><th>优先级</th><th>功能名称</th><th>功能说明</th><th>接口列表</th><th>目标用户</th></tr></thead><tbody><tr><td><b>供应商</b></td><td><b>WAVE1</b></td><td><b>查询供应商信息列表</b></td><td>根据供应商名称或者供应商编码，分页查询供应商列表</td><td>/custom/custSupplierManager/findAllSupplierList.api</td><td rowspan="4">采购员、DRE、SQE等供应商管理相关角色</td></tr><tr><td><b>供应商</b></td><td><b>WAVE1</b></td><td><b>查询供应商详细信息</b></td><td>根据供应商编码查询供应商完整基本信息</td><td>/custom/custSupplierManager/findAllSupplierList.api </td></tr><tr><td><b>供应商</b></td><td><b>WAVE1</b></td><td><b>查询供应商变更申请单</b></td><td>根据供应商名称或供应商编码查询供应商信息变更申请单</td><td>/custom/suplChgKeyAf/find.api</td></tr><tr><td><b>供应商</b></td><td><b>WAVE1</b></td><td><b>查询供应商变更记录列表</b></td><td>根据供应商名称或供应商编码查询供应商信息变更申请单</td><td>/custom/suplNoncriticalChg/compareSupplier.api  </td></tr><tr><td><b>SOR</b></td><td><b>WAVE1</b></td><td><b>查询SOR基本信息</b></td><td>根据零件号或SOR号查询所在SOR的基本信息</td><td>/custom/designReq/find.api</td><td rowspan="13">采购员</td></tr><tr><td><b>SOR</b></td><td><b>WAVE1</b></td><td><b>查询SOR车型信息</b></td><td>根据SOR号查询三级车型树</td><td>/custom/designReqItem/findBicycleMapByProjectSor.api</td></tr><tr><td><b>SOR</b></td><td><b>WAVE1</b></td><td><b>查询SOR零件装配比例</b></td><td>根据SOR号查询零件在SOR中的装配比例、单车用量信息</td><td>/custom/designReqItem/findDesignReqItems.api</td></tr><tr><td><b>SOR</b></td><td><b>WAVE1</b></td><td><b>查询SOR审批历史</b></td><td>根据SOR号查询SOR的EP审批历史</td><td> /custom/custWorkFlow/findHistoryTasks.api</td></tr><tr><td><b>RFQ</b></td><td><b>WAVE1</b></td><td><b>查询零件所在RFQ及RFQ基本信息</b></td><td>根据零件号、SOR号或RFQ号查询所在RFQ的基本信息</td><td>/custom/rfq/find.api</td></tr><tr><td><b>RFQ</b></td><td><b>WAVE1</b></td><td><b>查询询报价条目</b></td><td>根据RFQ 号和轮次号查询报价详情，如发包日期、供应商报价日期等</td><td>/custom/rfqQuotesInfo/findQuotesByRfqIdAndRoundNo.api</td></tr><tr><td><b>RFQ</b></td><td><b>WAVE1</b></td><td><b>查询参与询报价供应商</b></td><td>根据报价条目ID查询供应商发放和报价状态详情，含联系人信息和时间线</td><td>/custom/rfqReleaseInfo/doFindByRfqQuotesInfoId.api</td></tr><tr><td><b>RFQ</b></td><td><b>WAVE1</b></td><td><b>查询预选供应商信息</b></td><td>根据SOR号或RFQ号查询最新预选供应商推荐申请单，含SQE/研发审核状态和供应商列表</td><td>/custom/rfqBidderAf/findLatestBySorCode.api</td></tr><tr><td><b>RFQ</b></td><td><b>WAVE1</b></td><td><b>查询预选供应商申请单</b></td><td>根据 RFQ 号码查询最新预选供应商推荐申请单审批状态，含SQE/研发审核状态。</td><td>/custom/rfqBidderAf/find.api</td></tr><tr><td><b>RFQ</b></td><td><b>WAVE1</b></td><td><b>查询物流信息</b></td><td>根据SOR号或RFQ号查询物流信息和产能调查状态</td><td>/custom/rfqQuotesInfo/findRfqRoundSupplierFile.api</td></tr><tr><td><b>RFQ</b></td><td><b>WAVE1</b></td><td><b>查询当前轮次信息</b></td><td>根据RFQ号查询当前轮次完成报价的供应商列表</td><td> /custom/rfqQuotesInfo/findSupplierByCurrentRoundNo.api</td></tr><tr><td><b>RFQ</b></td><td><b>WAVE1</b></td><td><b>查询定点申请单</b></td><td>根据SOR号、RFQ号查询定点申请单</td><td>/custom/nominationAf/find.api</td></tr><tr><td><b>RFQ</b></td><td><b>WAVE1</b></td><td><b>创建定点申请单</b></td><td>根据RFQ号创建定点申请单草稿</td><td>/custom/nominationAf/create.api</td></tr></tbody></table>

## 3. 接口清单

所有业务 CLI 统一采用 **cliname:domain:resource:action** 四级命名空间：

```Plain Text
<cli-name> <domain> <resource> <action> [flags] [args]

示例：
  dx-ep supplier profile query        --id SUP001
  dx-ep supplier info list            --name "电子" --type 正式
  dx-ep sor info list                 --status 进行中 --page 1
  dx-ep rfq quote list                --rfq-id RFQ001 --round-no 1
  dx-ep nomi nomiaf create            --rfq-id RFQ001 --supplier-id SUP001

```

> 统一的返回参数包装格式，非success的是接口报错，需要解析message并展示

```Plain Text
{
  "state": "success",
  "message": "success",
  "data": {}
}

```

### 模块：供应商

#### 接口 1：供应商基本信息查询

- **使用场景**：根据供应商ID查询供应商完整基本信息
- **请求方式**: POST
- **接口路径**: /custom/supplier/getById.api
- **CLI 指令**: `dx-ep supplier info query --id <id>`

**输入参数**

| 参数名称 | 类型 | 必选 | 默认值 | 校验规则 | 说明 |
|-|-|-|-|-|-|
| --id | string | 是 | - | NotBlank | 供应商ID |

- **输入参数依赖关系**

| 参数名称 | 获取来源命令 | 获取来源参数 |
|-|-|-|
|  |  |  |

**输入示例**

```Bash
# 场景 1：查询指定供应商的完整信息
dx-ep supplier profile query --id 963833799075766
```

**输入json**

```Plain Text
{"id":"963833799075766"}
```

**返回参数**

 (data) =`SupplierDto`

| 字段 | 类型 | 说明 |
|-|-|-|
| id | string | 供应商主键 ID |
| orgCode | string | 供应商编码 |
| orgName | string | 供应商名称 |
| orgNameEn | string | 供应商英文名称 |
| enterpriseType | string | 公司类型（需翻译） |
| certificate | string | 资质认证 |
| addressStrng | string | 制造地址 |
| buyerName | string | 采购员姓名 |
| accountingPeriodDay | string | 量产账期天数 |
| paymentCashRatio | string | 量产-现金比例(%) |
| paymentChitRatio | string | 量产-承兑比例(%) |
| accountingPeriodDaySample | string | 样件账期天数 |
| accountingPeriodDayAfterSales | string | 售后账期天数 |
| settlementBank | object | 财务信息：电汇银行（嵌套对象） |
| acceptingBank | object | 财务信息：承兑银行（嵌套对象） |

返回参数（`data.settlementBank`）`SettlementBankDto`

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| bankName | string | 电汇银行名称 | "中国工商银行苏州分行" |
| bankAccount | string | 电汇银行账号 | "6222021001002233445" |

返回参数（`data.acceptingBank`）`AcceptingBankDto`

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| bankName | string | 承兑银行名称 | "招商银行苏州市支行" |
| bankAccount | string | 承兑银行账号 | "121900012345678" |

返回参数（`data.supplierBusinessPremises[]`） SupplierBusinessPremiseDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| supplierBusinessPremises[] | array | 商务前提列表 | [] |
| type | string | 前提类型 | "MASS" |
| accountingPeriod | string | 账期代码 | "90_DAYS" |

映射/枚举/翻译（接口 1）

| 字段 | 映射/规则 | 备注 |
|-|-|-|
| type | MASS | 量产 |
| type | SAMPLE | 样件 |
| type | AFTERSALES | 售后 |

| 字段 | 映射/规则 | 备注 |
|-|-|-|
| accountingPeriod | V001 | 发票入账后30天付款：100%现金 |
| accountingPeriod | V002 | 发票入账后60天付款：100%现金 |
| accountingPeriod | V003 | 发票入账后60天付款：100%承兑 |
| accountingPeriod | V004 | 发票入账后60天付款：70%现金，30%承兑 |
| accountingPeriod | V005 | 发票入账后60天付款：50%现金，50%承兑 |
| accountingPeriod | V014 | 发票入账后120天付款：100%承兑 |
| accountingPeriod | V015 | 发票入账后180天付款：100%承兑 |

- **输出示例**

```JSON
{
  "status": "success",
  "data": {
    "id": "8a27a9ae9db56321019db911db280001", // 供应商主键ID
    "orgCode": "V10001", // 供应商编码
    "orgName": "苏州智选电子有限公司", // 供应商名称
    "orgNameEn": "Shenzhen Longhorn Automotive Electronic Equipment Co., Ltd.", // 供应商英文名称
    "enterpriseType": "FOREIGN_INVESTED", // 公司类型 (功能要求: 大陆/外资，需翻译)
    "certificate": "IATF16949,ISO9001", // 资质认证
    "addressStrng": "江苏省苏州市工业园区顺风路88号", // 制造地址
    "buyerName": "张采购", // 采购员姓名
    "accountingPeriodDay": "90", // 量产账期天数 (功能要求: 账期)
    "paymentCashRatio": "50", // 量产-现金比例 (%)
    "paymentChitRatio": "50", // 量产-承兑比例 (%)
    "accountingPeriodDaySample": "60", // 样件账期天数
    "accountingPeriodDayAfterSales": "120", // 售后账期天数
    "settlementBank": { // 财务信息: 电汇银行
      "bankName": "中国工商银行苏州分行",
      "bankAccount": "6222021001002233445"
    },
    "acceptingBank": { // 财务信息: 承兑银行
      "bankName": "招商银行苏州市支行",
      "bankAccount": "121900012345678"
    },
    "supplierBusinessPremises": [ // 商务前提列表
            {
                "id": "8a621d9e9ca263fa019cb6691eea012d",
                "supplierId": "764329453351131",
                "type": "SAMPLE",
                "versionNo": 10002,
                "accountingPeriod": "V002",
                "suplChgKeyAfId": "8a621d9e9ca263fa019cb6691ee70127",
                "suplChgKeyAfCode": "SC20260300005",
                "startDate": "2026-03-04 00:00:00",
                "endDate": "2099-12-31 23:59:59",
                "isDeleted": false,
                "createdBy": "364214662723561",
                "createDate": "2026-03-03 19:34:47",
                "updatedBy": "364214662723561",
                "updateDate": "2026-03-06 15:55:54",
                "optCounter": 3
            },
            {
                "id": "8a621d9e9ca263fa019cb6691eea012c",
                "supplierId": "764329453351131",
                "type": "MASS",
                "versionNo": 20002,
                "accountingPeriod": "V005",
                "chitAccountingPeriod": "3",
                "suplChgKeyAfId": "8a621d9e9ca263fa019cb6691ee70127",
                "suplChgKeyAfCode": "SC20260300005",
                "startDate": "2026-03-04 00:00:00",
                "endDate": "2099-12-31 23:59:59",
                "isDeleted": false,
                "createdBy": "364214662723561",
                "createDate": "2026-03-03 19:34:47",
                "updatedBy": "364214662723561",
                "updateDate": "2026-03-06 15:55:54",
                "optCounter": 3
            }
        ]
  }
}
```

**验收标准**

- Given 有效的供应商ID When 执行 dx-ep supplier info query --id 963833799075766 Then 返回供应商完整基本信息  
- Given 不存在的供应商ID When 执行同上 Then 返回错误提示
- Given 未传 --id When 执行命令 Then 返回参数校验错误提示

---

#### 接口 2：供应商列表查询

- **使用场景**：分页查询供应商列表，按供应商名称、编码
- **请求方式**: POST
- **接口路径**: /custom/custSupplierManager/findAllSupplierList.api
- **CLI 指令**: `dx-ep supplier info list [--name <name>] [--code <code>]  [--page <page>] [--page-size <size>]`

**输入参数**

| 参数名称 | 类型 | 必选 | 默认值 | 说明 |
|-|-|-|-|-|
| --name | string | 否 | - | 供应商名称，模糊查询 |
| --code | string | 否 | - | 供应商编码，模糊查询 |
| --page | int | 否 | 1 | 页码 |
| --page-size | int | 否 | 50 | 每页条数 |

- **输入参数依赖关系**

| 参数名称 | 获取来源命令 | 获取来源参数 |
|-|-|-|
|  |  |  |

**输入示例**

```Bash
dx-ep supplier info  list --name "电子"
dx-ep supplier info  list --page-size 100
```

**输入json**

```JSON
{"filterInfo":{"orgCode":"code","orgName":"name"},"pageInfo":{"beginIndex":0,"pageSize":100}}
```



- **返回参数**

分页结构 (data)

| 字段 | 类型 | 说明 |
|-|-|-|
| content[] | array | 供应商数据列表（分页） |
| currentPage | int | 当前页码 |
| pageSize | int | 每页条数 |
| totalCount | int | 总数据条数 |
| totalPage | int | 总页数 |

返回参数（`data.content[]`）SupplierListItemDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| id | string | 供应商主键 ID | "8a27a9ae9db56321019db911db280001" |
| orgCode | string | 供应商编码 | "V10001" |
| orgName | string | 供应商名称 | "苏州智选电子有限公司" |
| supplierType | string | 供应商类型代码（需翻译） | "OFFICIAL" |

映射/枚举/翻译（接口 2）

| 字段 | 映射/规则 | 备注 |
|-|-|-|
| supplierType | `TEMPORARY` | 临时 |
| supplierType | `POTENTIAL` | 预选 |
| supplierType | `OFFICIAL` | 正式 |

- **输出示例**

```JSON
{
  "status": "success",
  "data": {
    "content": [
      {
        "id": "8a27a9ae9db56321019db911db280001", // 供应商主键ID (接力给接口 1)
        "orgCode": "V10001", // 供应商编码
        "orgName": "苏州智选电子有限公司", // 供应商名称
        "supplierType": "OFFICIAL" // 供应商类型代码 (需翻译)
      }
    ],
    "currentPage": 1, // 当前页码 (功能要求: pageNum)
    "pageSize": 50,
    "totalCount": 1,
    "totalPage": 1
  }
}
```

**验收标准**

- Given 存在供应商数据 When 执行 dx-ep supplier info  list --name "电子" Then 返回名称包含"电子"的供应商分页列表
- Given 后端返回 > 50 条 When 未指定 --page-size Then 默认返回 50 条

---



#### 接口 3：供应商信息变更单查询

- **使用场景**：分页查询供应商关键信息变更单，含审批流程状态和承诺内容。
- **请求方式**: POST
- **接口路径**: /custom/suplChgKeyAf/find.api
- **CLI 指令**: `dx-ep supplier change list [--name <name>] [--code <code>]  [--page <page>] [--page-size <size>]`
- **输入参数**

| 参数名称 | 类型 | 必选 | 默认值 | 校验规则 | 说明 |
|-|-|-|-|-|-|
| --name | string | 否 | - | - | 供应商名称（模糊查询） |
| --code | string | 否 | - | - | 供应商编码（精确查询） |
| --page | int | 否 | 1 | >0 | 页码 |
| --page-size | int | 否 | 50 | 1\~100 | 每页条数 |

- **输入参数依赖关系**

| 参数名称 | 获取来源命令 | 获取来源参数 |
|-|-|-|
|  |  |  |

- **输入示例**

```Plain Text
# 场景 1：查询供应商变更单
dx-ep supplier change list --name "XX电子"

# 场景 2：按状态过滤
dx-ep supplier change list --risk-status 已通过 --ppap-status 已批准

# 场景 3：AI Agent 拉取 JSON
dx-ep supplier change list --code "100001" -f json

```

**输入json**

```JSON
{"filterInfo":{"supplierCode":"code","supplierName":"name"},"pageInfo":{"beginIndex":0,"pageSize":100}}
```

- **返回参数**

分页结构 (data)

| 字段 | 类型 | 说明 |
|-|-|-|
| `currentIndex` | Integer | 当前索引 |
| `totalCount` | Integer | 总记录数 |
| `currentPage` | Integer | 当前页码 |
| `totalPage` | Integer | 总页数 |
| `pageSize` | Integer | 每页条数 |
| `countLimit` | Integer | 数量限制 |
| `content` | Array<`SuplChgKeyAfDto`> | 数据列表 |



`SuplChgKeyAfDto`

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| id | string | 变更申请单主键ID | "8a27a9ae9db56321019db911db28055a" |
| appFormId | string | 关联表单ID | "AF_UUID_101" |
| oldHisId | string | 变更前快照/历史 ID | "HIS_OLD_001" |
| newHisId | string | 变更后快照/历史 ID | "HIS_NEW_002" |
| supplierId | string | 供应商ID | "SUP_001" |
| changeContentTypes | string | 变更要素描述 | "供应商名称,注册地址,电汇银行账号" |
| appForm | AppFormDto | 关联表单对象（嵌套对象） | {"code":"...","status":"PASS"} |
| supplier | SupplierDto | 供应商对象（嵌套对象） | {"orgName":"...","orgCode":"..."} |

返回参数（`data.content[].appForm`） AppFormDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| code | string | 变更申请单号 | "SC2024040001" |
| name | string | 申请单名称 | "苏州智选电子 - 信息变更申请" |
| status | string | 状态 | "PASS" |
| auditDate | string | 变更生效时间 | "2024-04-20 10:00:00" |

返回参数（`data.content[].supplier`）SupplierBriefDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| orgName | string | 供应商名称 | "苏州智选电子有限公司" |
| orgCode | string | 供应商编码 | "100001" |

映射/枚举/翻译（接口 3）

| 字段 | 映射/规则 | 备注 |
|-|-|-|
| status | `DRAFT` | 草稿 |
| status | `SUBMIT` | 审批中 |
| status | `PASS` | 通过 |
| status | `REJECT` | 否决 |
| status | `FINISHED` | 完成 |
| status | `CANCELLED` | 废弃 |
| status | `WITHDRAW` | 撤回 |
| status | `PENDING` | 待审批 |

- **输出示例**

```JSON
{
  "status": "success",
  "data": {
    "content": [
      {
        "id": "8a27a9ae9db56321019db911db28055a", // 变更申请单主键ID
        "appFormId": "AF_UUID_101", // 关联表单ID
        "oldHisId": "HIS_OLD_001", // 【关键】变更前记录ID (接力给接口 4)
        "newHisId": "HIS_NEW_002", // 【关键】变更后记录ID (接力给接口 4)
        "supplierId": "SUP_001", // 供应商ID
        "changeContentTypes": "供应商名称,注册地址,电汇银行账号", // 变更要素描述
        "appForm": {
          "code": "SC2024040001", // 变更申请单号
          "name": "苏州智选电子 - 信息变更申请", // 申请单名称
          "status": "PASS", // 状态: 已通过
          "auditDate": "2024-04-20 10:00:00" // 变更生效时间
        },
        "supplier": {
          "orgName": "苏州智选电子有限公司", // 供应商名称
          "orgCode": "100001" // 供应商编码
        }
      }
    ],
    "currentPage": 1,
    "totalCount": 1
  }
}
```

- **验收标准（Given / When / Then）**

  - **Given** 存在变更单数据 **When** 执行 `dx-ep supplier change list --code 0133 ` **Then** 返回分页变更单列表，含变更要素和审批状态 
  - **Given** 指定 `--name "甘棠软件系统（上海）有限公司12"` **When** 执行命令 **Then** 仅返回该供应商的变更单

---

#### 接口 4：供应商信息变更详情

- **使用场景**：对比供应商变更前后的差异，返回每个字段的旧值、新值和变化标识。大模型通过此接口了解供应商变更的具体内容。
- **请求方式**: POST
- **接口路径**: /custom/suplNoncriticalChg/compareSupplier.api
- **CLI 指令**: `dx-ep supplier ``changecompare ``detail --old-his-id <old-his-id> --new-his-id <new-his-id> `
- **输入参数**

| 参数名称 | 类型 | 必选 | 默认值 | 校验规则 | 说明 |
|-|-|-|-|-|-|
| --old-his-id | string | 是 | - | NotBlank | 变更前历史记录ID |
| --new-his-id | string | 是 | - | NotBlank | 变更后历史记录ID |

- **输入参数依赖关系**

| 参数名称 | 获取来源命令 | 获取来源参数 |
|-|-|-|
| old-his-id | dx-ep supplier change list | oldHisId |
| new-his-id | dx-ep supplier change list | newHisId |

- **输入示例**

```Plain Text
# 场景 1：对比供应商变更详情
dx-ep supplier changecompare detail --old-his-id HIS001 --new-his-id HIS002

# 场景 2：指定供应商ID对比
dx-ep supplier changecompare detail --old-his-id HIS001 --new-his-id HIS002 --supplier-id SUP001 -f json

```

- **返回参数**

返回 Map 结构，

返回参数（`data` 顶层固定字段）

| 字段 | 类型 | 说明 |
|-|-|-|
| newChangeHis | SupplierChangeHis | 变更后的信息 |
| oldChangeHis | SupplierChangeHis | 变更前的信息 |
| differentSameEmp | boolean | 联系人信息是否有变（快捷标识） |
| differentSameCertification | boolean | 认证体系是否变化 |
| differentSameAddress | boolean | 生产工厂/制造地是否有变（快捷标识） |
| differentSameCaps | boolean | 公司股比是否变化 |
| differentSameCompostion | boolean | 人员构成是否变化 |
| differentRegisterAddress | boolean | 注册地址是否有变（快捷标识） |

SupplierChangeHis  对象

| 字段 | 类型 | 数据库列名 | 说明 | 示例值 |
|-|-|-|-|-|
| `id` | String | `SUP_SUPPLIER_CHANGE_HIS_ID` | 主键ID（UUID 生成） | `"8a87f6e198843070019898cdf6140093"` |
| `orgName` | String | `ORG_NAME` | 供应商名称 | `"某某科技有限公司"` |
| `orgNameEn` | String | `ORG_NAME_EN` | 供应商英文名称 | `"XX Technology Co., Ltd."` |
| `orgSimpleName` | String | `ORG_SIMPLE_NAME` | 供应商简称 | `"某某科技"` |
| `orgSimpleNameEn` | String | `ORG_SIMPLE_NAME_EN` | 供应商简称英文 | `"XX Tech"` |
| `orgSimpleCode` | String | `ORG_SIMPLE_CODE` | 供应商简码 | `"MOUMOU"` |
| `orgCode` | String | `ORG_CODE` | 供应商编码（正式供应商编码） | `"SUP20260001"` |
| `orgTempCode` | String | `ORG_TEMP_CODE` | 供应商临时编码（注册时生成） | `"TEMP001"` |
| `suplChgKeyAfId` | String | `SU_SUPL_CHG_KEY_AF_ID` | 关键信息变更申请单ID | `"8a87f6e198843070019898cdf6140094"` |
| `supplierId` | String | `SUPPLIER_ID` | 供应商ID | `"8a87f6e198843070019898cdf6140001"` |
| `inDate` | Date | `IN_DATE` | 生效时间 | `2026-01-01 00:00:00` |
| `outDate` | Date | `OUT_DATE` | 失效时间 | `null` |
| `addressId` | String | `MD_ADDRESS_ID` | 地址ID | `"8a87f6e198843070019898cdf6140200"` |
| address | object |  | 地址对象 |  |
| `settlementBankId` | String | `MD_SETTLEMENT_BANK_ID` | 结算银行ID | `"8a87f6e198843070019898cdf6140100"` |
| settlementBank | object |  | 结算账户 |  |
| `acceptingBankId` | String | `MD_ACCEPTING_BANK_ID` | 承兑银行ID | `"8a87f6e198843070019898cdf6140101"` |
| `acceptingBank` | object |  | 承兑银行 |  |
| massBusinessPremise | object |  | 量产商务前提 |  |
| sampleBusinessPremise | object |  | 样件商务前提 |  |
| afterSalesBusinessPremise | object |  | 售后商务前提 |  |

关联对象 - address（公司地址）

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 地址ID | `"8a87f6e198843070019898cdf6140200"` |
| `country` | String | 国家 | `"CN"` |
| `provinces` | String | 省份 | `"北京市"` |
| `city` | String | 城市 | `"北京市"` |
| `county` | String | 区县 | `"朝阳区"` |
| `address` | String | 详细地址 | `"某某路123号"` |
| `addressEn` | String | 英文地址 | `"No.123 XX Road"` |

关联对象 - settlementBank（结算银行）

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 结算银行ID | `"8a87f6e198843070019898cdf6140100"` |
| `bankName` | String | 银行名称 | `"中国银行"` |
| `accountName` | String | 账户名称 | `"某某科技有限公司"` |
| `accountNo` | String | 账号 | `"1234567890123456"` |

关联对象 - acceptingBank（承兑银行）

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 承兑银行ID | `"8a87f6e198843070019898cdf6140101"` |
| `bankName` | String | 银行名称 | `"中国工商银行"` |
| `accountName` | String | 账户名称 | `"某某科技有限公司"` |
| `accountNo` | String | 账号 | `"9876543210123456"` |

关联对象 - massBusinessPremise（量产）

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 量产商务前提ID | `"8a87f6e198843070019898cdf6140102"` |
| `type` | String | 类型 | `"MASS"` |
| `accountingPeriod` | String | 账期 | `"60"` |
| `chitAccountingPeriod` | String | 承兑汇票账期 | `"3"` |
| `startDate` | Date | 生效日期 | `2026-01-01` |

关联对象 - sampleBusinessPremise（样件）

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 量产商务前提ID | `"8a87f6e198843070019898cdf6140102"` |
| `type` | String | 类型 | `"SAMPLE"` |
| `accountingPeriod` | String | 账期 | `"60"` |
| `chitAccountingPeriod` | String | 承兑汇票账期 | `"3"` |
| `startDate` | Date | 生效日期 | `2026-01-01` |



关联对象 - afterSalesBusinessPremise（售后）

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 量产商务前提ID | `"8a87f6e198843070019898cdf6140102"` |
| `type` | String | 类型 | `"AFTERSALES"` |
| `accountingPeriod` | String | 账期 | `"60"` |
| `chitAccountingPeriod` | String | 承兑汇票账期 | `"3"` |
| `startDate` | Date | 生效日期 | `2026-01-01` |





**常见对比字段（fieldName）**：orgName（供应商名称）、legalPerson（法定代表人）、taxCode（税号）、bank/bankAccount（银行/账号）、address（地址）、telephone/email（电话/邮箱）、registeredCapital（注册资本）、income（收入）、numberOfEmployees（员工人数）、certificate（证书）、accountingPeriod（账期）、paymentCashRatio/paymentChitRatio（现金/承兑比例）

映射/枚举/翻译（接口 4）



- **输出示例**

```JSON
{
    "state": "success",
    "data": {
        "differentSameAddress": false,
        "differentSameCaps": false,
         "differentSameCertification": false,
        "differentSameCompostion": false,
        "differentRegisterAddress": false,
        "newChangeHis": {
            "optCounter": 1,
            "createdBy": "364871773543993",
            "createDate": "2026-04-23 10:57:45",
            "updatedBy": "364871773543993",
            "updateDate": "2026-04-23 10:57:46",
            "isDeleted": false,
            "suplChgKeyAfId": "8a872e169db563b6019db845a6460002",
            "suplChgKeyAf": null,
            "supplierId": "864602829837685",
            "inDate": "2026-04-23 10:58:44",
            "isActive": true,
            "id": "8a872e169db563b6019db845a837000a",
            "orgName": "甘棠软件系统（上海）有限公司12",
            "orgNameEn": "Hubei zhongke co., LTD01",
            "orgSimpleName": "湖北中科1201",
            "orgSimpleNamePy": "wertewts",
            "orgCode": "0000000133",
            "orgTempCode": "SUPT00048",
            "businessScope": "主营汽车娱乐app，软件，其他零部件。",
            "isEidt": true,
            "income": 47000,
            "numberOfEmployees": 312,
            "ifSendIDMBaseInfo": false,
            "ifSendIDMUserInfo": false,
            "registerType": "INVITE",
            "supplierType": "POTENTIAL",
            "isSpecialSupplier": false,
            "duns": "202112217413381134",
            "enterpriseType": "3",
            "registeredCapital": 1122,
            "legalPerson": "张某某",
            "registeredDate": "2008-12-04 00:00:00",
            "occupy": 5702,
            "fixedAssets": 100001,
            "recomUserName": "周某",
            "settlementBank": {
                "optCounter": 1,
                "createdBy": "364871773543993",
                "createDate": "2023-01-31 11:28:58",
                "updatedBy": "d8d7752dde4a492f826efa258345f36d",
                "updateDate": "2026-04-23 10:58:46",
                "isDeleted": false,
                "id": "8a872e169db563b6019db845a8360005",
                "bankCode": "dm202112217413381135",
                "bankName": "mc2021122174133811358",
                "bankAccount": "202112217413381135",
                "countryCode": "CN",
                "accountOwner": "11111122",
                "moneyType": "CNY",
                "banker": "123456",
                "inDate": "2026-04-23 10:58:44"
            },
            "settlementBankId": "8a872e169db563b6019db845a8360005",
            "acceptingBank": {
                "optCounter": 1,
                "createdBy": "364871773543993",
                "createDate": "2026-04-21 10:36:32",
                "updatedBy": "d8d7752dde4a492f826efa258345f36d",
                "updateDate": "2026-04-23 10:58:46",
                "isDeleted": false,
                "id": "8a872e169db563b6019db845a8360006",
                "bankCode": "1111",
                "bankName": "111",
                "bankAccount": "11111",
                "countryCode": "CN",
                "accountOwner": "111111111111",
                "moneyType": "CNY",
                "banker": "11111",
                "inDate": "2026-04-23 10:58:44"
            },
            "acceptingBankId": "8a872e169db563b6019db845a8360006",
            "addressId": "8a872e169db563b6019db845a8350004",
            "address": {
                "optCounter": 0,
                "createdBy": "364871773543993",
                "createDate": "2022-02-28 14:04:58",
                "updatedBy": "364871773543993",
                "updateDate": "2026-04-23 10:57:46",
                "isDeleted": false,
                "id": "8a872e169db563b6019db845a8350004",
                "country": "CN",
                "provinces": "020",
                "city": "02001",
                "address": "870弄",
                "addressEn": "Shanghai, China, Shanghai 871"
            },
            "merchantsCode": "SUPT00048",
            "businessType": "1",
            "documentType": "1",
            "documentNumber": "202112217413381134",
            "isAgentSupplier": false,
            "producerName": "111",
            "merchantsShortName": "湖北中科",
            "operatePeriodStart": "2009-12-16 00:00:00",
            "operatePeriodStop": "2057-11-30 00:00:00",
            "dunsCode": "202112217413381134",
            "listedCompany": false,
            "enterFutonDate": "2022-01-12 00:00:00",
            "officialWebsite": "https://www.hubeizhongke.com",
            "domesticSupplier": "1",
            "leaf": false,
            "expanded": false,
            "receiveDate": "2023-02-14 10:00:29",
            "monetaryUnit": "CNY",
            "certificate": "ISO9001,IATF16949",
            "accountingPeriod": "V003",
            "paymentCashRatio": "12",
            "paymentChitRatio": "88",
            "chitAccountingPeriod": "3",
            "accountingPeriodAfterSales": "V001",
            "supNomiType": "L,S,K",
            "massBusinessPremiseId": "8a872e169db563b6019db845a8360007",
            "sampleBusinessPremiseId": "8a872e169db563b6019db845a8370008",
            "afterSalesBusinessPremiseId": "8a872e169db563b6019db845a8370009",
            "massBusinessPremise": {
                "optCounter": 2,
                "createdBy": "364871773543993",
                "createDate": "2025-07-02 18:46:41",
                "updatedBy": "364871773543993",
                "updateDate": "2026-04-23 10:58:11",
                "isDeleted": false,
                "id": "8a872e169db563b6019db845a8360007",
                "type": "MASS",
                "accountingPeriod": "V005",
                "chitAccountingPeriod": "1",
                "suplChgKeyAfId": "8a872e169db563b6019db845a6460002",
                "endDate": "2099-12-31 23:59:59"
            },
            "sampleBusinessPremise": {
                "optCounter": 3,
                "createdBy": "364871773543993",
                "createDate": "2025-07-09 10:38:14",
                "updatedBy": "d8d7752dde4a492f826efa258345f36d",
                "updateDate": "2026-04-23 10:58:46",
                "isDeleted": false,
                "id": "8a872e169db563b6019db845a8370008",
                "supplierId": "864602829837685",
                "type": "SAMPLE",
                "versionNo": 10004,
                "accountingPeriod": "V012",
                "chitAccountingPeriod": "12",
                "suplChgKeyAfId": "8a872e169db563b6019db845a6460002",
                "startDate": "2026-04-23 00:00:00",
                "endDate": "2099-12-31 23:59:59"
            },
            "afterSalesBusinessPremise": {
                "optCounter": 2,
                "createdBy": "364871773543993",
                "createDate": "2025-07-02 18:46:41",
                "updatedBy": "364871773543993",
                "updateDate": "2026-04-23 10:58:11",
                "isDeleted": false,
                "id": "8a872e169db563b6019db845a8370009",
                "type": "AFTERSALES",
                "accountingPeriod": "X051",
                "suplChgKeyAfId": "8a872e169db563b6019db845a6460002",
                "endDate": "2099-12-31 23:59:59"
            }
        },
        "oldChangeHis": {
            "optCounter": 1,
            "createdBy": "364871773543993",
            "createDate": "2026-04-23 10:57:45",
            "updatedBy": "364871773543993",
            "updateDate": "2026-04-23 10:57:45",
            "isDeleted": false,
            "suplChgKeyAfId": "8a872e169db563b6019db845a6460002",
            "suplChgKeyAf": null,
            "supplierId": "864602829837685",
            "outDate": "2026-04-23 10:58:44",
            "isActive": true,
            "id": "8a872e169db563b6019db845a75e0003",
            "orgName": "甘棠软件系统（上海）有限公司12",
            "orgNameEn": "Hubei zhongke co., LTD01",
            "orgSimpleName": "湖北中科1201",
            "orgSimpleNamePy": "wertewts",
            "orgCode": "0000000133",
            "orgTempCode": "SUPT00048",
            "businessScope": "主营汽车娱乐app，软件，其他零部件。",
            "isEidt": true,
            "income": 47000,
            "numberOfEmployees": 312,
            "ifSendIDMBaseInfo": false,
            "ifSendIDMUserInfo": false,
            "registerType": "INVITE",
            "supplierType": "POTENTIAL",
            "isSpecialSupplier": false,
            "duns": "202112217413381134",
            "enterpriseType": "3",
            "registeredCapital": 1122,
            "legalPerson": "张某某",
            "registeredDate": "2008-12-04 00:00:00",
            "occupy": 5702,
            "fixedAssets": 100001,
            "recomUserName": "周某",
            "settlementBank": {
                "optCounter": 3,
                "createdBy": "364871773543993",
                "createDate": "2023-01-31 11:28:58",
                "updatedBy": "d8d7752dde4a492f826efa258345f36d",
                "updateDate": "2026-04-23 10:58:46",
                "isDeleted": false,
                "id": "8a27b12d9daefc68019daf041e630004",
                "bankCode": "dm202112217413381135",
                "bankName": "mc2021122174133811358",
                "bankAccount": "202112217413381135",
                "countryCode": "CN",
                "accountOwner": "11111122",
                "moneyType": "CNY",
                "banker": "123456",
                "inDate": "2026-04-21 15:51:52",
                "outDate": "2026-04-23 10:58:44"
            },
            "settlementBankId": "8a27b12d9daefc68019daf041e630004",
            "acceptingBank": {
                "optCounter": 3,
                "createdBy": "364871773543993",
                "createDate": "2026-04-21 10:36:32",
                "updatedBy": "d8d7752dde4a492f826efa258345f36d",
                "updateDate": "2026-04-23 10:58:46",
                "isDeleted": false,
                "id": "8a27b12d9daefc68019daf041e640005",
                "bankCode": "1111",
                "bankName": "111",
                "bankAccount": "11111",
                "countryCode": "CN",
                "accountOwner": "111111111111",
                "moneyType": "CNY",
                "banker": "11111",
                "inDate": "2026-04-21 15:51:52",
                "outDate": "2026-04-23 10:58:44"
            },
            "acceptingBankId": "8a27b12d9daefc68019daf041e640005",
            "addressId": "8a27b12d9daefc68019daf041e630003",
            "address": {
                "optCounter": 1,
                "createdBy": "364871773543993",
                "createDate": "2022-02-28 14:04:58",
                "updatedBy": "364871773543993",
                "updateDate": "2026-04-23 10:57:45",
                "isDeleted": false,
                "id": "8a27b12d9daefc68019daf041e630003",
                "country": "CN",
                "provinces": "020",
                "city": "02001",
                "address": "870弄",
                "addressEn": "Shanghai, China, Shanghai 871"
            },
            "merchantsCode": "SUPT00048",
            "businessType": "1",
            "documentType": "1",
            "documentNumber": "202112217413381134",
            "isAgentSupplier": false,
            "producerName": "111",
            "merchantsShortName": "湖北中科",
            "operatePeriodStart": "2009-12-16 00:00:00",
            "operatePeriodStop": "2057-11-30 00:00:00",
            "dunsCode": "202112217413381134",
            "listedCompany": false,
            "enterFutonDate": "2022-01-12 00:00:00",
            "officialWebsite": "https://www.hubeizhongke.com",
            "domesticSupplier": "1",
            "leaf": false,
            "expanded": false,
            "receiveDate": "2023-02-14 10:00:29",
            "monetaryUnit": "CNY",
            "certificate": "ISO9001,IATF16949",
            "accountingPeriod": "V003",
            "paymentCashRatio": "12",
            "paymentChitRatio": "88",
            "chitAccountingPeriod": "3",
            "accountingPeriodAfterSales": "V001",
            "supNomiType": "L,S,K",
            "massBusinessPremiseId": "8a8754dc9dadcdbe019dadea21c40093",
            "sampleBusinessPremiseId": "8a8754dc9dadcdbe019dadea21c40094",
            "afterSalesBusinessPremiseId": "8a27b12d9daefc68019daf041e640008",
            "massBusinessPremise": {
                "optCounter": 3,
                "createdBy": "364871773543993",
                "createDate": "2025-07-02 18:46:41",
                "updatedBy": "364871773543993",
                "updateDate": "2026-04-23 10:57:45",
                "isDeleted": false,
                "id": "8a8754dc9dadcdbe019dadea21c40093",
                "supplierId": "864602829837685",
                "type": "MASS",
                "versionNo": 20006,
                "accountingPeriod": "V005",
                "chitAccountingPeriod": "1",
                "suplChgKeyAfId": "8a8754dc9dadcdbe019dadea2198008e",
                "startDate": "2026-04-22 00:00:00",
                "endDate": "2099-12-31 23:59:59"
            },
            "sampleBusinessPremise": {
                "optCounter": 4,
                "createdBy": "364871773543993",
                "createDate": "2025-07-09 10:38:14",
                "updatedBy": "d8d7752dde4a492f826efa258345f36d",
                "updateDate": "2026-04-23 10:58:46",
                "isDeleted": false,
                "id": "8a8754dc9dadcdbe019dadea21c40094",
                "supplierId": "864602829837685",
                "type": "SAMPLE",
                "versionNo": 10003,
                "accountingPeriod": "V007",
                "chitAccountingPeriod": "7",
                "suplChgKeyAfId": "8a8754dc9dadcdbe019dadea2198008e",
                "startDate": "2026-04-22 00:00:00",
                "endDate": "2026-04-22 23:59:59"
            },
            "afterSalesBusinessPremise": {
                "optCounter": 3,
                "createdBy": "364871773543993",
                "createDate": "2025-07-02 18:46:41",
                "updatedBy": "364871773543993",
                "updateDate": "2026-04-23 10:57:45",
                "isDeleted": false,
                "id": "8a27b12d9daefc68019daf041e640008",
                "supplierId": "864602829837685",
                "type": "AFTERSALES",
                "versionNo": 30005,
                "accountingPeriod": "X051",
                "suplChgKeyAfId": "8a27b12d9daefc68019daf041d600001",
                "startDate": "2026-04-21 00:00:00",
                "endDate": "2099-12-31 23:59:59"
            }
        }
    }
}
```

- **验收标准（Given / When / Then）**

  - **Given** 有效的 oldHisId 和 newHisId **When** 执行 `dx-ep supplier change compare --old-his-id ``8a27ef418229543c01823d6383d9005a`` --new-his-id ``8a27ef418229543c01823d6383da005d` **Then** 返回变更前后的差异对比结果，每个字段含 old/new/changed
  - **Given** ID不存在 **When** 执行同上 **Then** 返回错误提示



---



### 模块：SOR管理

#### 接口 5：SOR信息查询

- **使用场景**：分页查询SOR列表，支持按零件号、SOR编号
- **请求方式**: POST
- **接口路径**: /custom/designReq/find.api
- **CLI 指令**: `dx-ep sor info list [--code <code>] [--material-num <num>]  [--latest] [--page <page>]`

**输入参数**

| 参数名称 | 类型 | 必选 | 默认值 | 说明 |
|-|-|-|-|-|
| --code | string | 否 | - | SOR编号 |
| --material-num | string | 否 | - | 零件号 |
| --latest | boolean | 否 | true | 仅查最新版本 |
| --page | int | 否 | 1 | 页码 |
| --page-size | int | 否 | 50 | 每页条数 |

**输入示例**

```Bash
# 场景 1：按零件号查询SOR
dx-ep sor info list --material-num "P-001"

# 场景 2：查询sorCode的 sor
dx-ep sor info list --code "2026-0421-001" --latest

```

输入json

```JSON
{"pageInfo":{"beginIndex":0,"pageSize":100},"filterInfo":{"code":"sorCode","materialNum":"materilal-num","isLatest":true}}
```

- **返回参数**

返回参数（`data`）

| 字段 | 类型 | 说明 |
|-|-|-|
| content[] | array<`DesignReqDto`> | SOR 数据列表（分页） |
| currentPage | int | 当前页码 |
| totalCount | long / int | 总记录数 |

返回参数（`data.content[]`）`DesignReqDto`

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | SOR ID | `dr_001` |
| `code` | String | SOR 编码 | `SOR_CL2_0811` |
| `name` | String | SOR 名称 | 前副车架设计需求 |
| `status` | String | SOR 状态 | ACTIVE |
| `versionNo` | String | 版本号 | V1.0 |
| `classifyCode` | String | 分类编码 | A1 |
| `taskStatus` | String | 任务状态 | ISSUED |
| `isLatest` | Boolean | 是否最新版本 | true |
| `submitBy` | userDto | 研发工程师 |  |
| productProjects | List<productProject> | 关联的采购项目信息 |  |



返回参数（`data.content[].submitBy`）productProject

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| id | string | 主键 |  |
| code | string | 采购项目编码 | Modena(8041) |

返回参数（`data.content[].submitBy`）userDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| userName | string | 研发工程师姓名 | "王研发" |

映射/枚举/翻译（接口 5）

| 字段 | 映射/规则 | 含义 |
|-|-|-|
| status | `DRAFT` | 草稿 |
| status | `REJECT` | 驳回 |
| status | `SUBMIT` | 审批中 |
| status | `PASS` | 已发布 |
| status | `ABANDON` | 废弃 |
| status | `WITHDRAW` | 撤回 |
| status | `DELETE` | 已取消 |
| status | `RETURN_TO_DEV` | 退回 |

- **输出示例**

```JSON
{
  "status": "success",
  "data": {
    "content": [
      {
        "id": "SOR_8899_UUID", // SOR主键ID (接力给接口 6 & 7)
        "code": "SOR-2024-EV-001", // SOR编号 (功能要求: 零件所在SOR)
        "name": "小米SU7前围模块SOR", // SOR名称 (功能要求: 直观辨认)
        "projectId": "PRJ_SU7_01", // 关联项目ID (接力给接口 6)
        "status": "AUDITING", // SOR审批状态 (需翻译)
        "submitBy": {
          "userName": "王研发" // 功能要求: 研发工程师姓名
        }
      }
    ],
    "currentPage": 1,
    "totalCount": 1
  }
}
```

- **输出示例 — table**

```Plain Text
ID     CODE            NAME          VERSION  STATUS  STAGE      BUYER  TARGET_PRICE
SOR001 SOR-2024-001    前大灯总成SOR  V2.0     进行中   采购经理审批  张三    1500.00
SOR002 SOR-2024-002    电池包SOR     V1.0     草稿     -          李四    -

```

- **验收标准（Given / When / Then）**

  - **Given** 存在SOR数据 **When** 执行 `dx-ep sor info list --code "SOR-MP-PWT-015" `  **Then** 返回分页SOR列表，含编号、名称、版本、状态等核心字段
  - **Given** 指定 `--material-num "001"` **When** 执行命令 **Then** 仅返回包含该零件号的SOR



---

#### 接口 6：SOR车型查询

- **使用场景**：根据SOR ID和项目ID查询三级车型树
- **请求方式**: POST
- **接口路径**: /custom/designReqItem/findBicycleMapByProjectSor.api
- **CLI 指令**: `dx-ep sor vehicle query --sor-id <id> --projectId <projectId>  `

**输入参数**

| 参数名称 | 类型 | 必选 | 说明 |
|-|-|-|-|
| --sor-id | string | 是 | SOR主键ID |
| `--projectId` | string | 是 | sor关联的采购项目id ，多个用逗号分隔 |

**输入示例**

```Bash
dx-ep sor vehicle query --sor-id SOR001 
dx-ep sor vehicle query --sor-id SOR001  -f json
```

输入json

```JSON
{"id":"8a27a9ae9db56321019db911db28011f","projectId":"8a27e5cc957dcd5e01957dde55030054,8a27e5cc957dcd5e01957dd441290015"}
```

- **返回参数**

返回三级树形结构：

返回参数（`data[]` 根列表）List<`PlatFormLevelNode`>

`PlatFormLevelNode`(二级平台节点)

| 字段 | 类型 | 说明 |
|-|-|-|
| platFormNode | object ProductNode | 平台级节点对象 |
| projectLevelNodes[] | array< ProjectLevelNode> | 项目级节点列表 |

返回参数（`platFormNode`）ProductNode

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| id | string | 平台节点ID | "plat_001" |
| nodeCode | string | 平台编码 | "MS11" |
| nodeName | string | 平台名称 | "MS11平台" |
| nodeType | string | 平台节点类型 | "PLATFORM" |
| bomLevel | int | BOM层级（2） | 2 |

返回参数（`projectLevelNodes[]`）ProjectLevelNode(三级车型节点）

| 字段 | 类型 | 说明 |
|-|-|-|
| `projectNode` | ProductNode | 三级车型节点对象 |
| `baseNodes` | List<ProductNode> | 四级基础车型节点列表 |

`projectNode` 的对象实体 ProductNode

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| id | string | 项目节点ID | "prj_001" |
| nodeCode | string | 项目编码 | "SU7" |
| nodeName | string | 项目名称 | "小米SU7" |
| nodeType | string | 项目节点类型 | "PROJECT" |
| bomLevel | int | BOM层级（3） | 3 |

返回参数（`baseNodes[]`）ProductNode （4级基础车型节点）

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| id | string | 车型节点ID | "base_001" |
| nodeCode | string | 车型编码 | "SU7-STD" |
| nodeName | string | 车型名称 | "基础车型-标准版" |
| nodeType | string | 节点类型 | "BASE_MODEL" |
| bomLevel | int | BOM层级（4） | 4 |
| isBomNode | boolean | 是否BOM节点 | TRUE |
| isForSale | boolean | 是否可销售 | TRUE |
| status | string | 节点状态 | "ACTIVE" |

- **输出示例**

```JSON
{
  "state": "success",
  "data": [
    {
      "platFormNode": {
        "id": "a1b2c3d4e5f60001",
        "nodeCode": "PF01",
        "nodeName": "Xiaomi SU7 平台",
        "nodeType": "PLATFORM",
        "bomLevel": 1,
        "parentCode": "ROOT",
        "status": "ACTIVE"
      },
      "projectLevelNodes": [
        {
          "projectNode": {
            "id": "a1b2c3d4e5f60002",
            "nodeCode": "PJ01",
            "nodeName": "SU7 标准版",
            "nodeType": "PROJECT",
            "bomLevel": 2,
            "parentCode": "PF01"
          },
          "baseNodes": [
            {
              "id": "a1b2c3d4e5f60003",
              "nodeCode": "BC01",
              "nodeName": "SU7 标准版-后驱",
              "nodeType": "BASE",
              "bomLevel": 3,
              "parentCode": "PJ01"
            },
            {
              "id": "a1b2c3d4e5f60004",
              "nodeCode": "BC02",
              "nodeName": "SU7 标准版-四驱",
              "nodeType": "BASE",
              "bomLevel": 3,
              "parentCode": "PJ01"
            }
          ]
        }
      ]
    }
  ]
}

```

- **验收标准（Given / When / Then）**

  - **Given** 有效的SOR ID和项目ID **When** 执行 `dx-ep sor vehicle query --sor-id ``8a27a9ae9db56321019db911db28011f`` --projectId 8a27e5cc957dcd5e01957dde55030054,8a27e5cc957dcd5e01957dd441290015 ` **Then** 返回三级车型树，每级含核心字段
  - **Given** SOR ID不存在 **When** 执行同上 **Then** 返回空数据
  - **Given** 未传 --id **When** 执行命令 **Then** 返回参数校验错误提示

---

#### 接口 7：SOR零件列表查询

- **使用场景**：根据SOR ID查询所有零件条目
- **请求方式**: POST
- **接口路径**: /custom/designReqItem/findDesignReqItems.api
- **CLI 指令**: `dx-ep sor part list --sor-id <sor-id>[--page <page>] [--page-size <size>] `

**输入参数**

| 参数名称 | 类型 | 必选 | 示例 | 说明 |
|-|-|-|-|-|
| --sor-id | string | 是 | 8a27a9ae9db56321019db911db28011f | SOR主键ID |
| --page | int | 否 | 1 | 页码 |
| --page-size | int | 否 | 50 | 每页条数 |

**输入示例**

```Bash
dx-ep sor part list --sor-id SOR001 
dx-ep sor part list --sor-id SOR001 -f json
```

输入json

```JSON
{"filterInfo":{"designReqId":"8a27a9ae9db56321019db911db28011f"},"pageInfo":{"pageSize":50,"beginIndex":0}}
```

- **返回参数**

返回参数（`data[]` 根列表）List<Map<string,object>>

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | SOR 行项目 ID（主键） | `"8a87f6e198843070019898cdf6140093"` |
| `pdId` | String | 产品经理 ID | `"pd_20250801_001"` |
| `operationType` | String | 操作类型：`NEW`（新增）/ `UPDATE`（更新）/ `DELETE`（删除） | `"NEW"` |
| `devType` | String | 开发类型 | `"DEV_NEW"` |
| `partTechDesc` | String | 零件技术描述 | `"前保险杠总成 - 高配版本"` |
| `isChange` | String | 是否变更 | `"0"` |
| `partId` | String | 零件 ID | `"part_001"` |
| `materialNum` | String | 物料号 | `"MX11-BUMPER-001"` |
| `materialName` | String | 物料名称 | `"前保险杠总成"` |
| `measurementUnit` | String | 计量单位 | `"EA"` |
| `subDataType` | String | 子数据类型 | `"PURCHASED"` |
| `qualityId` | String | 质量工程师 ID | `"quality_001"` |
| `designReqId` | String | sorID | `"dr_20250801_001"` |
| `applyTo` | String | 适用范围 | `"ALL"` |
| 动态字段： | object | node+4级基础车型的ID拼接成的车型节点，内容是装配比例和用量 |  |

动态字段示例：

| 字段格式 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `count` | BigDecimal | 单车用量 | 10 |
| `percent` | BigDecimal | 装配比例 | 100 |



- **输出示例**

```JSON
{
      "state": "success",
      "data": [
            {
                  "id": "8a87f6e198843070019898cdf6140094",
                  "pdId": "pd_20250801_001",
                  "operationType": "UPDATE",
                  "devType": "DEV_EXISTING",
                  "isOptional": "0",
                  "partTechDesc": "后保险杠总成",
                  "isChange": "1",
                  "partId": "part_002",
                  "materialNum": "MX11-BUMPER-002",
                  "materialName": "后保险杠总成",
                  "measurementUnit": "EA",
                  "subDataType": "PURCHASED",
                  "qualityId": "quality_002",
                  "designReqId": "dr_20250801_001",
                  "applyTo": "MX11",
                  "node1001": {
                        "count": 1,
                        "percent": 100
                  },
                  "node1002": {
                        "count": 1,
                        "percent": 100
                  },
                  "node1003": {
                        "count": 1,
                        "percent": 100
                  }
            }
      ]
}
```



**验收标准**

- **Given** 有效的SOR ID **When** 执行 `dx-ep sor part list --sor-id 8a27a9ae9db56321019db911db28011f ``8a27a9ae9db56321019db911db28011f` **Then** 返回所有零件条目，含PART_NO、PART_NAME等核心字段
- **Given** SOR ID不存在 **When** 执行同上 **Then** 返回空列表
- **Given** 已删除的零件 **When** 执行同上 **Then** 不出现在结果中

---

#### 接口 8：SOR审批历史查询

- **使用场景**：查询SOR的EP流程+BPM审批历史
- **请求方式**: POST
- **接口路径**: /custom/custWorkFlow/findHistoryTasks.api
- **CLI 指令**: `dx-ep sor process-history query  --rec-id <rec-id> `

**输入参数**



| 参数名称 | 类型 | 必选 | 说明 |
|-|-|-|-|
| --rec-id | string | 是 | 业务记录ID（SOR主键） |
| --rec-type-id | long | 否 | 业务记录类型ID（固定值：995001） |
| --controller-name | string | 否 | 控制名（固定值：gantang.custom.sourcing.task.designreqitem.controller.DesignReqItem2） |
| --view-name | string | 否 | 视图名（固定值：gantang.custom.common.view.GantDetailMultWindow） |

**输入示例**

```Bash
dx-ep sor process-history query --rec-id SOR001 

```

**输入json**

```JSON
{"processResourceUrls":[{"recTypeId":995001,"recId":"8a871a359be3dbc6019be4828ca10050","controllerName":"gantang.custom.sourcing.task.designreqitem.controller.DesignReqItem2","viewName":"gantang.custom.common.view.GantDetailMultWindow"}]}
```



- **返回参数**

返回参数（`data`）

| 字段 | 类型 | 说明 |
|-|-|-|
| list[] | array<HistoryTasksResponseDto> | 流程任务列表 |

返回参数（`list[]`）

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| id | string | 任务ID | "TASK001" |
| processId | string | 流程ID | "PROC001" |
| resourceName | string | 资源名称 | "前大灯总成SOR" |
| processDetail | string | 流程描述 | "SOR审批流程" |
| createBy | string | 创建人ID | "USER001" |
| createByName | string | 创建人姓名 | "张三" |
| taskName | string | 环节名称 | "采购工程师审批" |
| startDate | string | 开始时间 | "2024-06-01 10:00:00" |
| finishDate | string / null | 完成时间（为空表示进行中） | "2024-06-02 14:30:00" |
| actionName | string | 动作/结果 | "通过" |
| caller | string | 处理人ID | "USER001" |
| callerName | string | 处理人姓名 | "张三" |
| approveComment | string | 审批意见 | "同意，供应商资质符合要求" |
| taskType | string | 任务类型 | "H" |
| statusCode | int | 状态码 | 2 |
| statusName | string | 状态名称 | "已完成" |

映射/枚举/翻译（接口 9）

| 字段 | 映射/规则 | 备注 |
|-|-|-|
| taskType | `S` | 开始步骤 |
| taskType | `H` | 历史步骤 |
| taskType | `E` | 结束步骤 |

- **输出示例**

```JSON
{
  "code": 200,
  "message": "success",
  "data": {
    "list": [
      {
        "id": "TASK001",
        "processId": "PROC001",
        "resourceName": "前大灯总成SOR",
        "processDetail": "SOR审批流程",
        "createBy": "USER001",
        "createByName": "张三",
        "taskName": "采购工程师审批", // 功能要求: 审批进度环节
        "startDate": "2024-06-01 10:00:00",
        "finishDate": "2024-06-02 14:30:00", // 结束时间 (null表示进行中，功能要求: 进度判定)
        "actionName": "通过",
        "caller": "USER001",
        "callerName": "张三", // 功能要求: 当前审批人/处理人姓名
        "approveComment": "同意，供应商资质符合要求", // 审批意见
        "taskType": "H",
        "statusCode": 2,
        "statusName": "已完成"
      }
    ]
  }
}

```

- **验收标准（Given / When / Then）**

  - **Given** 有效的SOR ID **When** 执行 `dx-ep sor process-history query --rec-id "8a27a9ae9db56321019db911db28011f"` **Then** 返回EP审批历史列表
  - **Given** 未传任何参数 **When** 执行命令 **Then** 返回参数校验错误提示

---





### 模块：通用接口

#### 接口 9：根据用户id查用户信息

- **使用场景**：根据用户id查用户信息
- **请求方式**: POST
- **接口路径**: /fwSecurity/security/getUserById.api
- **CLI 指令**: `dx-ep user info query --id <id>`

**输入参数**

| 参数名称 | 类型 | 必选 | 默认值 | 校验规则 | 说明 |
|-|-|-|-|-|-|
| --id | string | 是 | - | NotBlank | 用户主键 ID (UUID) |

**输入json**

```Plain Text
{"id":"763792248794046"}
```

**返回参数**

返回参数（`data`）UserDto

| 字段 | 类型 | 说明 |
|-|-|-|
| id | string | 用户主键 ID |
| userName | string | 用户真实姓名 |
| userLoginName | string | 用户登录账号 |
| email | string | 电子邮箱 |
| userType | string | 用户类型（需翻译） |
| organizationName | string | 所属部门 |
| isActive | boolean | 是否启用 |

映射/枚举/翻译（接口 8）

| 字段 | 映射/规则 | 备注 |  |
|-|-|-|-|
| userType | `EMPLOYEE` | 员工 | `CustWorkFlowController` 中显式判断 `"EMPLOYEE"` |
| userType | 非 `EMPLOYEE` | 非员工（如供应商侧账号） | `CustWorkFlowController` 用 `!"EMPLOYEE"` 分支处理 |

| 字段 | 映射/规则 | 备注 |  |
|-|-|-|-|
| isActive | `false` | CLI 建议姓名标注“(离职/停用)” |  |
| isActive | `true` | 有效人员，不做特殊处理 |  |

**输出示例**

```JSON
{
  "status": "success",
  "data": {
    "id": "b1c6df265edd4b34a114666584e53588", // 用户主键ID (系统唯一标识)
    "userName": "张三", // 用户姓名 (功能要求: 研发/SQE/物流工程师姓名)
    "userLoginName": "chuhuo",
    "email": "zhangsan@xiaomi.com", // 用户电子邮箱
    "userType": "EMPLOYEE", // 用户类型 (EMPLOYEE: 内部员工, SUPPLIER: 供应商)
    "mobile": "13800000000", // 用户联系电话
    "organizationName": "汽车部-采购组", // 归属组织/部门名称
    "isActive": true // 账号状态 (true: 启用, false: 停用)
  }
}
```



- **验收标准（Given / When / Then）**

  - **Given** 有效的用户id **When** 执行 `dx-ep user info query --id "1" ` **Then** 返回用户信息
  - **Given** 用户ID不存在 **When** 执行同上 **Then** 返回空数据
  - **Given** 未传 --id **When** 执行命令 **Then** 返回参数校验错误提示



### 模块：RFQ

#### 接口 10：RFQ列表查询

- **使用场景**：分页查询RFQ列表，`SOR包编号`or`零件号`or`RFQ包`编码
- **请求方式**: POST
- **接口路径**: /custom/rfq/find.api
- **CLI 指令**: `dx-ep rfq info list [--rfq-code <code>] [--rfq-name <name>] [--material-num <material-num>] [--delay-status <delayStatus>] [--page <page>] [--page-size <page-size>]`

**输入参数**

| 参数名称 | 类型 | 必选 | 说明 |
|-|-|-|-|
| --rfq-code | string | 否 | RFQ编号（模糊） |
| --rfq-name | string | 否 | RFQ名称（模糊） |
| --material-num | string | 否 | 零件号（模糊） |
| --sor-code | string | 否 | SOR编码（模糊） |
| --delay-status | string | 否 | 枚举：all 和mine ，不传时默认是mine，查自己名下，all则是查所有（同时会进行角色权限校验，只有有查看所有的权限的人可以用all） |
| --page | int | 否 | 页码（默认1） |
| --page-size | int | 否 | 每页条数（默认50） |

**输入示例**

```Bash

dx-ep rfq info list --sor-code "SOR-2024-001"
dx-ep rfq info list -f json --page-size 100
```

- 输入json

```JSON
{"filterInfo":{"delayStatus":"all"，"rfqCode":"001","rfqName":"测试","materialNum":"1","delayStatus":"all"},"pageInfo":{"beginIndex":0,"pageSize":100}}
```

- **返回参数**

分页结构 (data)

| 字段 | 类型 | 说明 |
|-|-|-|
| `currentIndex` | Integer | 当前索引 |
| `totalCount` | Integer | 总记录数 |
| `currentPage` | Integer | 当前页码 |
| `totalPage` | Integer | 总页数 |
| `pageSize` | Integer | 每页条数 |
| `countLimit` | Integer | 数量限制 |
| `content` | Array<RfqDto> | 数据列表 |

rfqDto

| 字段 | 类型 | 说明 | 示例值 |  |
|-|-|-|-|-|
| `id` | String | RFQ ID | `"8a87f6e198843070019898cdf6140093"` |  |
| `rfqCode` | String | RFQ 编码 | `"RFQ-20250811-002"` |  |
| `rfqName` | String | RFQ 名称 | `"SOR_CL2_0811"` |  |
| `rfqType` | String | RFQ 类型 | `"RFQ_TYPE_FIXED_PLANT"` |  |
| `rfqStatus` | String | RFQ 状态 | `"PRICED"` |  |
| `rfqDesc` | String | RFQ 描述 | — |  |
| `rfqCurrency` | String | 货币 | `"CNY"` |  |
| `remarks` | String | 备注 | — |  |
| `isIssueTargetPrice` | Boolean | 是否发放目标价 | `true` |  |
| `isTaskComplete` | Boolean | 是否任务完成 | `false` |  |
| `isFree` | Boolean | 是否允许供应商自由报价 | `false` |  |
| `needTechnicalReview` | Boolean | 是否需要技术评审 | `false` |  |
| `reviewReason` | String | 技术评审原因 | — |  |
| `cancelDate` | Date | 取消时间 | `null` |  |
| `cancelReason` | String | 取消原因 | `null` |  |
| `endDate` | Date | 结束时间 | — |  |
| `currentRoundId` | String | 当前轮次ID | `"round_001"` |  |
| `buyerId` | String | 采购工程师ID | `"6bc9deb933424c45a9ce29547ee1e5ba"` |  |
| `planEngId` | String | 体系工程师ID | `"eng_001"` |  |
| `costEngId` | String | 成本工程师ID | `"eng_002"` |  |
| `sqeId` | String | SQE ID | `"sqe_001"` |  |
| `pdId` | String | 研发工程师ID | `"pd_001"` |  |
| `logisticsEngId` | String | 物流工程师ID | `"lg_001"` |  |
| `afterSalesEngId` | String | 售后工程师ID | `"as_001"` |  |
| `asOrdererId` | String | 售后订单员ID | `"ao_001"` |  |
| `buyerName` | String | 采购工程师姓名 | `"张三"` |  |
| `pdName` | String | 研发工程师姓名 | `"李四"` |  |
| `lgName` | String | 物流工程师姓名 | `"王五"` |  |
| `afterSalesEngName` | String | 售后工程师姓名 | — |  |
| currentRound | rfqRoundDto | 轮次对象 |  |  |
| `designReqId` | String | SOR/设计需求ID | `"dr_001"` |  |
| `sorCode` | String | SOR 编码 | `"SOR_CL2_0811"` |  |
| `versionNo` | String | sor版本号 | `"V1.0"` |  |
| `projectCode` | String | 采购项目编码（逗号分隔） | `"P20260001,P20260002"` |  |
| `projectName` | String | 采购项目名称（逗号分隔） | `"MX11项目,MX12项目"` |  |
| `plantInfo` | String | 工厂信息（逗号分隔） | `"北京工厂(BJ001)"` |  |
| `partCodes` | String | RFQ 所有零件编码（逗号分隔） | `"MX11-FCS-001,MX11-FCS-002"` |  |
| `partNames` | String | RFQ 所有零件名称（逗号分隔） | `"前副车架总成,后副车架总成"` |  |
| `supQuoteStatus` | String | 供应商报价状态（HTML 格式，每个供应商一行） | `"SUP001 某某公司 \| 已报价\</br\>SUP002 另一公司 \| 待报价"`
| `nomiStatus` | String | 首次定点状态（来自最新定点申请单的审批状态，无定点单时为 `TOCREATE`） | `"PASS"` |  |

rfqRoundDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 轮次ID | `"round_001"` |
| `rfqId` | String | RFQ ID | — |
| `roundNo` | String | 轮次号 | `"1"` |
| `status` | String | 轮次状态 | `"FINISHED"` |



- **输出示例**

```JSON
{
    "state": "success",
    "data": {
        "currentIndex": 0,
        "totalCount": 9739,
        "currentPage": 1,
        "totalPage": 98,
        "pageSize": 100,
        "countLimit": 0,
        "content": [
            {
                "id": "8a87e0da9d6d09b2019d70dd57580008",
                "currentRoundId": "8a87e0da9d6d09b2019d71594d5c0057",
                "currentRound": {
                    "id": "8a87e0da9d6d09b2019d71594d5c0057",
                    "roundNo": "2",
                    "isIssuePurchaseTargetPrice": false,
                    "isViewPrice": true,
                    "isIssueQuote": true,
                    "quoteMethod": "EASY",
                    "status": "ENQUIRING",
                    "issueDate": "2026-04-09 16:30:30",
                    "endDate": "2027-04-30 14:10:47",
                    "isSealedQuote": false,
                    "reason": "NORMAL",
                    "sendForecast": false,
                    "needClassifyFile": false,
                    "needCbd": "EASY",
                    "rfqId": "8a87e0da9d6d09b2019d70dd57580008",
                    "rfqReleaseInfos": null,
                    "rfqQuotesInfos": null,
                    "isQuoteByPackage": true,
                    "createdBy": "8ee221777ed945959ba927be5815e82d",
                    "createDate": "2026-04-09 16:26:11",
                    "updatedBy": "6bc9deb933424c45a9ce29547ee1e5ba",
                    "updateDate": "2026-04-20 17:14:29",
                    "isDeleted": false,
                    "designReqId": "8a279dd69d6d06bb019d70d6b4c50006",
                    "adjustLogistics": false,
                    "auditStatus": "PASS"
                },
                "buyerId": "8ee221777ed945959ba927be5815e82d",
                "buyer": {
                    "optCounter": 0,
                    "id": "8ee221777ed945959ba927be5815e82d",
                    "userLoginName": "v-chenyaqi3",
                    "userName": "陈亚奇",
                    "userType": "EMPLOYEE",
                    "isActive": true,
                    "isDeleted": false
                },
                "sqeId": "8ee221777ed945959ba927be5815e82d",
                "sqe": {
                    "optCounter": 0,
                    "id": "8ee221777ed945959ba927be5815e82d",
                    "userLoginName": "v-chenyaqi3",
                    "userName": "陈亚奇",
                    "userType": "EMPLOYEE",
                    "isActive": true,
                    "isDeleted": false
                },
                "pdId": "8ee221777ed945959ba927be5815e82d",
                "pd": {
                    "optCounter": 0,
                    "id": "8ee221777ed945959ba927be5815e82d",
                    "userLoginName": "v-chenyaqi3",
                    "userName": "陈亚奇",
                    "userType": "EMPLOYEE",
                    "isActive": true,
                    "isDeleted": false
                },
                "rfqCode": "RFQ-20260409-001",
                "rfqName": "测试测试",
                "rfqType": "RFQ_TYPE_FIXED_PLANT",
                "rfqStatus": "ENQUIRING",
                "classifyCode": "HVC",
                "rfqItems": null,
                "rfqBidders": null,
                "rfqRounds": null,
                "plants": null,
                "createdBy": "8ee221777ed945959ba927be5815e82d",
                "createDate": "2026-04-09 14:10:47",
                "updatedBy": "8ee221777ed945959ba927be5815e82d",
                "updateDate": "2026-04-09 16:30:33",
                "isDeleted": false,
                "companyId": "10005001",
                "buyerName": "陈亚奇",
                "projectCode": "20251027(8041),Modena(8801),Mann(8043),MS11(8041),2026dongjiyijiducaigou(8041)",
                "projectName": "Door3(8041),Modena(8801),曼岛(8043),23(8041),2026冬季一季度采购(8041)",
                "partCodes": "P000000519002",
                "partNames": "弧焊焊接螺柱",
                "roundNoPage": "2",
                "supQuoteStatus": "0000000133 湖北中科 | 参与报价</br>0000102187 上海得力电机 | 参与报价</br>0000102226 上海天成有限公司 | 参与报价</br>SUPT00177 秦皇岛威卡 | 未查看</br>SUPT00185 c1 | 未查看",
                "planEndDates": "2026-04-25",
                "designReqId": "8a279dd69d6d06bb019d70d6b4c50006",
                "sorCode": "SOR-MP-HVC-0126",
                "designReqAuditDate": "2026-04-09 14:08:22",
                "targetPrice": 0,
                "preSelectPlanEndDate": "2026-04-25 00:00:00",
                "roundPlanEndDate": "2026-04-25 00:00:00",
                "pdName": "陈亚奇",
                "nomiStatus": "TOCREATE",
                "versionNo": "1.0",
                "lgName": "陈亚奇",
                "logisticsEngId": "8ee221777ed945959ba927be5815e82d",
                "plantInfo": "北京整车工厂(8041),小米景明售后工厂(8801),北京小米汽车B2(8043)"
            }
        ]
    }
}            
```

- **输出示例 — table**

```Plain Text
ID     RFQ_CODE        NAME              TYPE      STATUS       BUYER  BIDDER  TARGET
RFQ001 RFQ-2024-001    前大灯总成询价     STANDARD  IN_PROGRESS  张三    3       3000.00
RFQ002 RFQ-2024-002    电池包询价        STANDARD  DRAFT        李四    0       -

```

- **验收标准（Given / When / Then）**

  - **Given** 存在RFQ数据 **When** 执行 `dx-ep rfq info list` **Then** 返回自己名下的分页RFQ列表，含编号、名称、状态、轮次等核心字段
  - **Given** 存在RFQ数据 **When** 执行 `dx-ep rfq info list --delay-status all`  **Then** 返回所有的分页RFQ列表，含编号、名称、状态、轮次等核心字段（仅登录人有查看所有RFQ的权限时）
  - **Given** 指定 `--sor-code "001"` **When** 执行命令 **Then** 仅返回关联该SOR的RFQ

---

#### 接口 11：询报价条目查询

- **使用场景**：根据RFQ ID和轮次号查询报价条目列表
- **请求方式**: POST
- **接口路径**: /custom/rfqQuotesInfo/findQuotesByRfqIdAndRoundNo.api
- **CLI 指令**: `dx-ep rfq quote list --rfq-id <rfq-id> --round-no <round-no> `

**输入参数**

| 参数名称 | 类型 | 必选 | 说明 |  |
|-|-|-|-|-|
| --rfq-id | string | 是 | RFQ ID |  |
| --round-no | string | 是 | 轮次号 1,2,3 |  |
| --page | int | 否 | 1 | 页码 |
| --page-size | int | 否 | 50 | 每页条数 |

**输入示例**

```Bash
dx-ep rfq quote list --rfq-id 8a198ea49d492539019d6625eb5c23e4 --round-no 1
```

- 输入json

```JSON
{"filterInfo":{"rfqId":"8a198ea49d492539019d6625eb5c23e4","roundNo":"3"},"pageInfo":{"beginIndex":0,"pageSize":100}}
```

- **返回参数**

分页结构 (data)

| 字段 | 类型 | 说明 |
|-|-|-|
| `currentIndex` | Integer | 当前索引 |
| `totalCount` | Integer | 总记录数 |
| `currentPage` | Integer | 当前页码 |
| `totalPage` | Integer | 总页数 |
| `pageSize` | Integer | 每页条数 |
| `countLimit` | Integer | 数量限制 |
| `content` | Array<`RfqQuotesInfoDto`> | 数据列表 |

`RfqQuotesInfoDto`

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 报价信息ID | `"8a87f6e198843070019898cdf6140093"` |
| `status` | String | 报价状态 | `"QUOTED"` |
| `rfqRoundId` | String | RFQ轮次ID | `"round_001"` |
| rfqRound | rfqRoundDto | 轮次对象 |  |
| `supplierId` | String | 供应商ID | `"sup_001"` |
| supplier | supplierDto | 供应商对象 |  |
| `rfqItemId` | String | 零件清单ID | `"item_001"` |
| rfqItem | rfqItemDto | rfqItem对象 |  |
| part | partDto | 零件对象 |  |
| `priceId` | String | 价格ID | `"price_001"` |
| `fileId` | String | 报价文件ID | `"file_001"` |
| `partybPlantId` | String | 供应商工厂ID | `"plant_001"` |
| `plantId` | String | 小米工厂ID | `"mi_plant_001"` |
| plant | plantDto | 小米工厂对象 |  |
| `isReachTargetPrice` | Boolean | 是否达成目标价 | `true` |
| `totalPrice` | BigDecimal | 零件报价总额 | `150.00` |
| `issueQuoteDate` | Date | 发放询价日期 | `"2025-08-01 10:00:00"` |
| `supplierReceiveDate` | Date | 供应商接收询价日期 | `"2025-08-02 09:00:00"` |
| `supplierSubmitDate` | Date | 供应商提交反馈日期 | `"2025-08-05 17:00:00"` |
| `currency` | String | 报价货币 | `"CNY"` |
| `exchangeRate` | BigDecimal | 汇率 | `1.000000` |
| `accountingPeriod` | String | 账期 | `"NET30"` |
| `paymentCashRatio` | String | 现金比例 | `"100"` |
| `paymentChitRatio` | String | 承兑比例 | `"0"` |

rfqRoundDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 轮次ID | `"round_001"` |
| `rfqId` | String | RFQ ID | `"8a87f6e198843070019898cdf6140093"` |
| `roundNo` | String | 轮次号 | `"1"` |
| `status` | String | 轮次状态 | `"FINISHED"` |

supplierDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 供应商ID | `"sup_001"` |
| `orgCode` | String | 供应商编码 | `"SUP20260001"` |
| `orgName` | String | 供应商名称 | `"某某汽车零部件有限公司"` |

partDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 零件ID | `"part_001"` |
| `materialNum` | String | 零件号 | `"MX11-FCS-001"` |
| `materialName` | String | 零件名称 | `"前副车架总成"` |

rfqItemDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 零件清单ID | `"item_001"` |
| `partId` | String | 零件ID | `"part_001"` |
| `requiredQuantity` | BigDecimal | 需求数量（来自 saPrItem） | `10000` |

plantDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `plant.id` | String | 小米工厂ID | `"mi_plant_001"` |
| `plant.orgCode` | String | 工厂编码 | `"BJ001"` |
| `plant.orgName` | String | 工厂名称 | `"北京工厂"` |



- **输出示例**

```JSON
{
    "state": "success",
    "data": {
        "currentIndex": 0,
        "totalCount": 10,
        "currentPage": 1,
        "totalPage": 1,
        "pageSize": 100,
        "countLimit": 0,
        "content": [
            {
                "num": "1",
                "plantName": "北京整车工厂(8041)",
                "id": "b0b65b3613024d72b17607c9ea11cd51",
                "status": "QUOTESED",
                "rfqRoundId": "8a19b2669d946c5b019d9a78f6b10ace",
                "rfqRound": {
                    "id": "8a19b2669d946c5b019d9a78f6b10ace",
                    "roundNo": "3",
                    "isIssuePurchaseTargetPrice": false,
                    "isViewPrice": true,
                    "isIssueQuote": true,
                    "quoteMethod": "EASY",
                    "status": "FINISHED",
                    "issueDate": "2026-04-17 18:48:33",
                    "endDate": "2026-04-24 12:14:14",
                    "closeDate": "2026-04-24 14:05:46",
                    "isSealedQuote": false,
                    "reason": "NORMAL",
                    "sendForecast": false,
                    "needClassifyFile": false,
                    "needCbd": "EASY",
                    "rfqId": "8a198ea49d492539019d6625eb5c23e4",
                    "rfqReleaseInfos": null,
                    "rfqQuotesInfos": null,
                    "isQuoteByPackage": true,
                    "createdBy": "864880305163061",
                    "createDate": "2026-04-17 16:05:11",
                    "updatedBy": "864880305163061",
                    "updateDate": "2026-04-24 14:05:46",
                    "isDeleted": false,
                    "designReqId": "8a6223309bedf59c019c22c4ffdc19d9",
                    "adjustLogistics": false,
                    "auditStatus": "PASS"
                },
                "supplier": {
                    "id": "364932230074118",
                    "orgName": "重庆渝江压铸股份有限公司",
                    "orgNameEn": "chongqing yujiang die casting co.,ltd",
                    "orgSimpleName": "重庆渝江压铸",
                    "orgSimpleNamePy": "zqyjyz",
                    "orgCode": "0000177090",
                    "orgTempCode": "SUPT00618",
                    "businessScope": "铝合金压铸件、镁合金压铸",
                    "isEidt": true,
                    "income": 23.2,
                    "numberOfEmployees": 3000,
                    "businessType": "1",
                    "ifSendIDMBaseInfo": false,
                    "ifSendIDMUserInfo": false,
                    "isPassOfficialApprove": true,
                    "receiveDate": "2025-01-10 11:19:47",
                    "isActive": true,
                    "registerType": "INVITE",
                    "supplierType": "OFFICIAL",
                    "isSpecialSupplier": false,
                    "enterpriseType": "3",
                    "registeredCapital": 10000,
                    "legalPerson": "周道伦",
                    "registeredDate": "1992-12-24 00:00:00",
                    "occupy": 20,
                    "fixedAssets": 120000,
                    "buyerId": "864880305163061",
                    "buyer": null,
                    "supplierCompanys": null,
                    "supplierEmployees": null,
                    "settlementBankId": "8a621c2e942f01f20194f2b5f1200f3d",
                    "merchantsCode": "SUPT00618",
                    "documentType": "5",
                    "documentNumber": "915000006220961669",
                    "isAgentSupplier": false,
                    "merchantsShortName": "重庆渝江压铸",
                    "operatePeriodStart": "1992-12-31 00:00:00",
                    "operatePeriodStop": "2101-12-01 00:00:00",
                    "listedCompany": false,
                    "enterFutonDate": "2022-03-03 15:36:30",
                    "officialWebsite": "www.cq-yj.com",
                    "domesticSupplier": "1",
                    "addressId": "8a621c2e942f01f20194f2b5f1200f3c",
                    "leaf": false,
                    "expanded": false,
                    "supplierMaterialGroups": null,
                    "createdBy": "b27f893398d14c9c80b56d009dc73f0a",
                    "createDate": "2022-04-07 17:05:00",
                    "updatedBy": "66725177e8a4471ca71f0a3e8f5e8ab3",
                    "updateDate": "2025-07-10 19:17:18",
                    "isDeleted": false,
                    "monetaryUnit": "CNY",
                    "supplierFormalType": "SUPL_FOMARL_TYPE",
                    "ndaSignStatus": "CONFIRMED",
                    "srmStatus": "sended",
                    "certificate": "IATF16949,ISO9001,NA",
                    "optCounter": 11,
                    "reviewDate": "2022-03-03 15:36:30",
                    "accountingPeriod": "V003",
                    "chitAccountingPeriod": "6",
                    "supNomiType": "L",
                    "supplierBusinessPremises": null
                },
                "supplierId": "364932230074118",
                "rfqItemId": "8a19b2669d946c5b019d9a78f6e50acf",
                "rfqItem": {
                    "id": "8a19b2669d946c5b019d9a78f6e50acf",
                    "partId": "125470",
                    "rfqId": "8a198ea49d492539019d6625eb5c23e4",
                    "rfqRoundId": "8a19b2669d946c5b019d9a78f6b10ace",
                    "purchaseTaskId": "8a19b3939d4926e4019d6625e6161536",
                    "designReqId": "8a6223309bedf59c019c22c4ffdc19d9",
                    "roundNo": "3",
                    "status": "HAVE_NOT_ENQUIRED",
                    "createdBy": "864880305163061",
                    "createDate": "2026-04-07 12:14:14",
                    "updatedBy": "864880305163061",
                    "updateDate": "2026-04-17 16:05:12",
                    "isDeleted": false,
                    "designReqItemId": "8a19ab699cc8a0e5019cd140f2a20346"
                },
                "issueQuoteDate": "2026-04-17 16:07:08",
                "supplierReceiveDate": "2026-04-20 19:16:30",
                "supplierSubmitDate": "2026-04-23 20:11:44",
                "partybPlant": {
                    "id": "8a620b108abb4efb018afdd583610cd0",
                    "orgName": "重庆渝江压铸股份有限公司",
                    "isActive": true,
                    "parentOrganizationId": "364932230074118",
                    "addressId": "8a620b108abb4efb018afdd583610ccf",
                    "address": {
                        "id": "8a620b108abb4efb018afdd583610ccf",
                        "country": "CN",
                        "provinces": "320",
                        "city": "32001",
                        "address": "大竹林",
                        "optCounter": 2
                    },
                    "leaf": false,
                    "expanded": false,
                    "inDate": "2024-02-04 13:38:06",
                    "createdBy": "264629299003329",
                    "createDate": "2022-04-07 17:05:02",
                    "updatedBy": "464923916080843",
                    "updateDate": "2024-02-04 13:38:07",
                    "optCounter": 2,
                    "company": null
                },
                "partybPlantId": "8a620b108abb4efb018afdd583610cd0",
                "createdBy": "864880305163061",
                "createDate": "2026-04-17 16:07:08",
                "updatedBy": "264629299003329",
                "updateDate": "2026-04-23 20:11:45",
                "isDeleted": false,
                "part": {
                    "id": "125470",
                    "materialNum": "P000055977001",
                    "dataType": "ZS",
                    "subDataType": "ZSA",
                    "materialName": "中控屏幕支架",
                    "materialNameEn": "BRACKET - CTR SCREEN",
                    "measurementUnit": "EA",
                    "createDate": "2026-02-04 09:05:33",
                    "updateDate": "2026-03-01 21:12:36",
                    "isDeleted": false,
                    "isProduct": false,
                    "isPart": true,
                    "lifeCycleState": "ENGINEERING",
                    "engineerId": "b061372effe8487ba2e2b50cc92de6cc",
                    "isColor": false,
                    "partSource": "M",
                    "partTypeName": "零件",
                    "engineerName": "luxiyu",
                    "vppsCode": "4011",
                    "firstVehicle": "Modena-L",
                    "isSpecialAfterSales": true
                },
                "priceId": "3f3dbe582bf9413d86a5afc8657fcb81",
                "price": {
                    "id": "3f3dbe582bf9413d86a5afc8657fcb81",
                    "costBreakDownId": null,
                    "startDate": null,
                    "endDate": null,
                    "unit": "EA",
                    "priceUnit": 1,
                    "unitPriceNoTax": null,
                    "currency": "CNY",
                    "taxRate": null,
                    "toolSharePercent": null,
                    "sop1": null,
                    "sop2": null,
                    "sop3": null,
                    "createdBy": "864880305163061",
                    "createDate": "2026-04-17",
                    "updatedBy": null,
                    "updateDate": null,
                    "isDeleted": false,
                    "deleteDate": null,
                    "deletedBy": null,
                    "operationFee": null,
                    "unitPrice": 45.431,
                    "factoryPrice": 34.999,
                    "factoryPriceDiff": null,
                    "logisticsFee": 8.4,
                    "packPrice": 3.2,
                    "transportPrice": 5.2,
                    "sortingPrice": null,
                    "storagePrice": null,
                    "otherLogisticPrice": null,
                    "devFeeTotal": null,
                    "devPaymentType": null,
                    "developmentFee": null,
                    "devShareTotal": 0,
                    "devShareQuantity": 0,
                    "devShareUnitPrice": 0,
                    "toolFeeTotal": null,
                    "toolingPaymentType": null,
                    "toolTotalPrice": null,
                    "toolShareTotal": 467360,
                    "toolShareQuantity": 230000,
                    "toolShareUnitPrice": 2.032,
                    "softMouldShare": null,
                    "sampleTotalPrice": null,
                    "sampleUnitPrice": null,
                    "exchangeRate": 1,
                    "xmLogisticsFee": null,
                    "xmPackPrice": null,
                    "xmTransportPrice": null,
                    "devPaymentTypeDiff": null,
                    "developmentFeeDiff": null,
                    "devShareTotalDiff": null,
                    "devShareQuantityDiff": null,
                    "devShareUnitPriceDiff": null,
                    "toolPaymentTypeDiff": null,
                    "toolTotalPriceDiff": null,
                    "toolShareTotalDiff": null,
                    "toolShareQuantityDiff": null,
                    "toolShareUnitPriceDiff": null,
                    "oldPriceId": null,
                    "manualSamplePrice": 1301.97,
                    "softMouldSamplePrice": 86.798,
                    "hardMouldSamplePrice": 43.399,
                    "softMouldTotalPrice": null,
                    "softMouldTotalPriceDiff": null
                },
                "rfqReleaseInfoId": "8a198d1a9d94690c019d9b0e860c0ade",
                "needQuotation": true,
                "fileCount": 1,
                "logisticsEngId": "48d725c498e24fb7acdf34804ce51114",
                "plantId": "2290",
                "plant": {
                    "id": "2290",
                    "orgName": "北京整车工厂",
                    "orgNameEn": "Beijing Vehicle Factory",
                    "orgCode": "8041",
                    "isActive": true,
                    "orgType": 210,
                    "leaf": false,
                    "expanded": false,
                    "isDeleted": false,
                    "optCounter": 0
                },
                "plantInfo": "北京整车工厂 (8041)",
                "currency": "CNY",
                "fullAddress": "重庆重庆市大竹林",
                "unit": "EA",
                "originPrice": {
                    "id": "76d92080d802462da7f834effff66d0c",
                    "costBreakDownId": null,
                    "startDate": null,
                    "endDate": null,
                    "unit": "EA",
                    "priceUnit": 1,
                    "unitPriceNoTax": null,
                    "currency": "CNY",
                    "taxRate": null,
                    "toolSharePercent": null,
                    "sop1": null,
                    "sop2": null,
                    "sop3": null,
                    "createdBy": "864880305163061",
                    "createDate": "2026-04-14",
                    "updatedBy": null,
                    "updateDate": null,
                    "isDeleted": false,
                    "deleteDate": null,
                    "deletedBy": null,
                    "operationFee": null,
                    "unitPrice": 41.425,
                    "factoryPrice": 35.153,
                    "factoryPriceDiff": null,
                    "logisticsFee": 4.24,
                    "packPrice": 3.2,
                    "transportPrice": 1.04,
                    "sortingPrice": null,
                    "storagePrice": null,
                    "otherLogisticPrice": null,
                    "devFeeTotal": null,
                    "devPaymentType": null,
                    "developmentFee": null,
                    "devShareTotal": 0,
                    "devShareQuantity": 0,
                    "devShareUnitPrice": 0,
                    "toolFeeTotal": null,
                    "toolingPaymentType": null,
                    "toolTotalPrice": null,
                    "toolShareTotal": 467360,
                    "toolShareQuantity": 230000,
                    "toolShareUnitPrice": 2.032,
                    "softMouldShare": null,
                    "sampleTotalPrice": null,
                    "sampleUnitPrice": null,
                    "exchangeRate": 1,
                    "xmLogisticsFee": null,
                    "xmPackPrice": null,
                    "xmTransportPrice": null,
                    "devPaymentTypeDiff": null,
                    "developmentFeeDiff": null,
                    "devShareTotalDiff": null,
                    "devShareQuantityDiff": null,
                    "devShareUnitPriceDiff": null,
                    "toolPaymentTypeDiff": null,
                    "toolTotalPriceDiff": null,
                    "toolShareTotalDiff": null,
                    "toolShareQuantityDiff": null,
                    "toolShareUnitPriceDiff": null,
                    "oldPriceId": null,
                    "manualSamplePrice": 1181.79,
                    "softMouldSamplePrice": 78.786,
                    "hardMouldSamplePrice": 39.393,
                    "softMouldTotalPrice": null,
                    "softMouldTotalPriceDiff": null
                },
                "effectCost": true,
                "originPriceId": "76d92080d802462da7f834effff66d0c",
                "useOrigin": false,
                "continueToUse": false,
                "continueToUseSur": false,
                "continueToUsePrice": false,
                "priceStrategyId": "5530cd68999d4df1ac700d77ab33aabc",
                "priceStrategy": {
                    "id": "5530cd68999d4df1ac700d77ab33aabc",
                    "manualSample": "30",
                    "softMouldSample": "2",
                    "hardMouldSample": "1",
                    "createdBy": "864880305163061",
                    "createDate": "2026-04-17 16:07:08",
                    "updatedBy": "264629299003329",
                    "updateDate": "2026-04-23 20:09:49",
                    "currency": "CNY",
                    "exchangeRate": 1,
                    "other": "镁锭基准参考上海有色网2026年第一季度镁锭9990（上海）均价，未税15574元/吨",
                    "accountingPeriod": "V003",
                    "chitAccountingPeriod": "6",
                    "accountingPeriodSample": "V002",
                    "deleted": false
                },
                "originPriceStrategy": {
                    "id": "5fd96fde76ea46f7aadbbe83fa72a1bd",
                    "manualSample": "30",
                    "softMouldSample": "2",
                    "hardMouldSample": "1",
                    "createdBy": "864880305163061",
                    "createDate": "2026-04-14 15:09:30",
                    "updatedBy": "264629299003329",
                    "updateDate": "2026-04-17 11:11:03",
                    "currency": "CNY",
                    "exchangeRate": 1,
                    "other": "镁锭基准参考上海有色网2026年第一季度镁锭9990（上海）均价，未税15574元/吨",
                    "accountingPeriod": "V003",
                    "chitAccountingPeriod": "6",
                    "accountingPeriodSample": "V002",
                    "deleted": false
                },
                "originPriceStrategyId": "5fd96fde76ea46f7aadbbe83fa72a1bd",
                "sampleShowList": [
                    {
                        "type": "01",
                        "version": 2,
                        "price": 1301.97,
                        "multiple": 30,
                        "multipleChange": 0,
                        "color": 0
                    },
                    {
                        "type": "02",
                        "version": 2,
                        "price": 86.798,
                        "multiple": 2,
                        "multipleChange": 0,
                        "color": 0
                    },
                    {
                        "type": "03",
                        "version": 2,
                        "price": 43.399,
                        "multiple": 1,
                        "multipleChange": 0,
                        "color": 0
                    }
                ]
            }
        ]
    }
}
```

- **验收标准（Given / When / Then）**

  - **Given** 有效的RFQ ID和轮次号 **When** 执行 `dx-ep rfq quote list --rfq-id ``8a27a9ae9db56321019db917e8b20159`` --round-no 1` **Then** 返回报价条目列表，含价格、商务前提
  - **Given** 指定 `--supplier-id SUP001` **When** 执行命令 **Then** 仅返回该供应商的报价条目
  - **Given** RFQ ID不存在 **When** 执行同上 **Then** 返回空列表

---

#### 接口 12：参与供应商信息查询

- **使用场景**：根据报价条目ID查询供应商发放和报价状态详情，含联系人信息和时间线。
- **请求方式**: POST
- **接口路径**: /custom/rfqReleaseInfo/doFindByRfqQuotesInfoId.api
- **CLI 指令**: `dx-ep rfq quotesupplier query`` --quotes-info-id <id>`
- **输入参数**

| 参数名称 | 类型 | 必选 | 默认值 | 校验规则 | 说明 |
|-|-|-|-|-|-|
| --quotes-info-id | string | 是 | - | NotBlank | 报价条目ID |

- **输入参数依赖关系**

| 参数名称 | 获取来源命令 | 获取来源参数 |
|-|-|-|
|  |  |  |

- **输入示例**

```Plain Text
# 场景 1：查询报价条目的供应商详情
dx-ep rfq quote supplier query --quotes-info-id QI001


```

- 输入json

```JSON
 {
    "id": "rfqQuotesInfo的ID"  // 注意：传入的是报价信息ID，不是发放信息ID
  }
```

- **返回参数**

| 字段 | 类型 | 说明 |
|-|-|-|
| id | string | 发放信息ID |
| supplierId | string | 供应商ID |
| supplier | supplierDto | 供应商信息（id/orgName/orgCode/orgSimpleName） |
| supplierEmployeeId | string | 供应商联系人ID |
| rfqRoundId | string | 轮次ID |
| supplierRoundNo | int | 供应商轮次 |
| supplierQuoteStatus | string | 报价状态（枚举） |
| issueQuoteDate | datetime | 发放时间 |
| supplierReceiveDate | datetime | 供应商接收时间 |
| supplierViewDate | datetime | 供应商查看时间 |
| supplierSubmitDate | datetime | 供应商提交报价时间 |
| supplierCedeDate | datetime | 供应商放弃报价时间 |
| isSpecialSupplier | boolean | 是否特殊供应商 |

supplierDto

| 字段 | 类型 | 说明 |
|-|-|-|
| id | string | 供应商Id |
| orgName | string | 供应商名称 |
| orgCode | string | 供应商编码 |

报价状态枚举：

<sheet sheet-id="vVyK9q" token="IIhjsiMBnhX196t5N3hc9q7RnXb"></sheet>

- **输出示例**

```Plain Text
{
  "state": "success",
  "message": "success",
  "data": {
      "id": "8a8728f49a10cc48019a10d955860024",
      "supplierEmployeeId": "emp_001",
      "supplierId": "sup_001",
      "supplier": {
        "id": "sup_001",
        "orgName": "某某汽车零部件有限公司",
        "orgCode": "SUP20260001"
      },
      "rfqRoundId": "round_001",
      "supplierRoundNo": 1,
      "issueQuoteDate": "2026-04-01 10:00:00",
      "supplierQuoteStatus": "QUOTESED",
      "supplierReceiveDate": "2026-04-01 14:30:00",
      "supplierViewDate": "2026-04-02 09:15:00",
      "supplierSubmitDate": "2026-04-05 16:45:00",
      "supplierCedeDate": null,
      "isSpecialSupplier": false,
      "changeFlag": false,
      "createdBy": "admin",
      "createDate": "2026-04-01 10:00:00"
    }
}

```

- **验收标准（Given / When / Then）**

  - **Given** 有效的报价条目ID **When** 执行 `dx-ep rfq quote supplier query --quotes-info-id ``000ec5dc4f8e4bbfae0307bed48f46b0` **Then** 返回供应商发放和报价状态详情
  - **Given** 有效的报价条目ID **When** 执行 `dx-ep rfq quote supplier query --quotes-info-id 13b309528a7447fdb2d3cb814468dc7c ` **Then** 返回供应商发放和报价状态详情
  - **Given** 报价条目ID不存在 **When** 执行同上 **Then** 返回 null

---

#### 接口 13：最新预选供应商申请单查询

- **使用场景**：根据SOR编码查询最新预选供应商推荐申请单，含SQE/研发审核状态和供应商列表。
- **请求方式**: POST
- **接口路径**: /custom/rfqBidderAf/findLatestBySorCode.api
- **CLI 指令**: `dx-ep sor ``bidderaf ``query --sor-code <sor-code>` 
- **输入参数**

| 参数名称 | 类型 | 必选 | 默认值 | 校验规则 | 说明 |
|-|-|-|-|-|-|
| --sor-code | string | 否 | - | NotBlank | SOR包编码 |

- **输入参数依赖关系**

| 参数名称 | 获取来源命令 | 获取来源参数 |
|-|-|-|
|  |  |  |

- **输入示例**

```Plain Text
# 场景 1：查询SOR的预选供应商申请单
dx-ep sor bidderaf  query --sor-code "SOR-2024-001"

# 场景 2：AI Agent 拉取 JSON
dx-ep sor prbidderaf  eselect query --sor-code "SOR-2024-001" -f json

```

- 输入json

```JSON
{"value":"sor-code"}
```

- **返回参数**

RfqBidderAfDto

| 字段 | 类型 | 说明 |  |
|-|-|-|-|
| `id` | String | 预选供应商推荐单ID | `"8a87f6e198843070019898cdf6140093"` |
| `appFormId` | String | 关联的审批表单ID | `"8a87f6e198843070019898cdf8f00099"` |
| appForm | appFormDto | 关联审批表单对象 |  |
| `rfqId` | String | 关联的 RFQ ID | `"8a87f6e198843070019898cdf6140093"` |
| rfq | rfqDto | 关联的rfq对象 |  |
| currentRoundId | String | 当前轮次id |  |
| currentRound | rfqRoundDto | 当前轮次对象 |  |
| `sorCode` | String | SOR 编码 | `"SOR_CL2_0811"` |
| `projectId` | String | 采购项目ID | `"proj_001"` |
| `isSqeApprove` | Boolean | 质量工程师是否已评审 | `true` |
| `sqeAuditDate` | Date | 质量工程师评审日期 | `"2025-08-10 14:30:00"` |
| `sqeStatus` | String | 质量评审状态 | `"PASS"` |
| `isDevApprove` | Boolean | 研发工程师是否已评审 | `true` |
| `devAuditDate` | Date | 研发工程师评审日期 | `"2025-08-10 15:00:00"` |
| `devStatus` | String | 研发评审状态 | `"PASS"` |

AppFormDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 表单ID | `"8a87f6e198843070019898cdf8f00099"` |
| `code` | String | 表单编码 | `"BDL-20250811-002"` |
| `name` | String | 表单名称 | `"预选供应商名单审批表"` |
| `status` | String | 表单状态 | `"PASS"` |
| `auditDate` | Date | 审批日期 | `"2025-08-11 19:05:53"` |
| `isDeleted` | Boolean | 是否删除 | `false` |

RfqDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | RFQ ID | `"8a87f6e198843070019898cdf6140093"` |
| `currentRoundId` | String | 当前轮次ID | `"8a87f6e198843070019898cdf62f0094"` |
| `buyerId` | String | 采购员ID | `"6bc9deb933424c45a9ce29547ee1e5ba"` |
| `rfqCode` | String | RFQ编码 | `"RFQ-20250811-002"` |
| `rfqName` | String | RFQ名称 | `"SOR_CL2_0811"` |
| `rfqType` | String | RFQ类型 | `"RFQ_TYPE_FIXED_PLANT"` |
| `rfqStatus` | String | RFQ状态 | `"NOMINATED"` |
| `productProjects` | Array | 采购项目列表 | `[]` |

RfqRoundDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 轮次ID | `"8a87f6e198843070019898cdf62f0094"` |
| `roundNo` | String | 轮次编号 | `"1"` |

- **输出示例**

```Plain Text
{
    "state": "success",
    "data": {
 
                "id": "8a87f6e198843070019898cdf916009a",
                "appFormId": "8a87f6e198843070019898cdf8f00099",
                "appForm": {
                    "id": "8a87f6e198843070019898cdf8f00099",
                    "code": "BDL-20250811-002",
                    "name": "预选供应商名单审批表",
                    "status": "PASS",
                    "auditDate": "2025-08-11 19:05:53",
                    "isDeleted": false
                },
                "rfq": {
                    "id": "8a87f6e198843070019898cdf6140093",
                    "currentRoundId": "8a87f6e198843070019898cdf62f0094",
                    "buyerId": "6bc9deb933424c45a9ce29547ee1e5ba",
                    "rfqCode": "RFQ-20250811-002",
                    "rfqName": "SOR_CL2_0811",
                    "rfqType": "RFQ_TYPE_FIXED_PLANT",
                    "rfqStatus": "NOMINATED",
                    "productProjects": []
                },
                "currentRoundId": "8a87f6e198843070019898cdf62f0094",
                "currentRound": {
                    "id": "8a87f6e198843070019898cdf62f0094",
                    "roundNo": "1"
                },
                "rfqId": "8a87f6e198843070019898cdf6140093",
                "sorId": "8a87e25c98843367019898c6a06700a2",
                "sorCode": "SOR-MP-PWT-0114",
                "sorVersionNo": "1.0",
                "isSqeApprove": false,
                "sqeStatus": "PASS",
                "isDevApprove": true,
                "createdBy": "6bc9deb933424c45a9ce29547ee1e5ba",
                "createDate": "2025-08-11 19:04:52",
                "updatedBy": "b27f893398d14c9c80b56d009dc73f0a",
                "updateDate": "2025-08-11 19:08:23",
                "isDeleted": false
    }
}              
```



| 字段 | 类型 | 说明 |
|-|-|-|
| id | string | 申请单ID |
| appFormId | string | 表单ID |
| rfqId | string | RFQ ID |
| sorId | string | SOR ID |
| sorCode | string | SOR编码 |
| sorName | string | SOR名称 |
| sorVersionNo | string | SOR版本号 |
| projectId | string | 采购项目ID |
| projectCode | string | 采购项目编码 |
| projectName | string | 采购项目名称 |
| status | string | 申请单状态 |
| appStatus | string | 审批状态 |
| appCode | string | 申请单编码 |
| appName | string | 申请单名称 |
| isSqeApprove | boolean | 是否需要SQE审核 |
| sqeStatus | string | SQE审核状态 |
| sqeAuditDate | datetime | SQE审核日期 |
| isDevApprove | boolean | 是否需要研发审核 |
| devStatus | string | 研发审核状态 |
| devAuditDate | datetime | 研发审核日期 |
| brandNames | string | 品牌名称 |
| plantNames | string | 工厂名称 |
| productLineNames | string | 产品线名称 |
| devBatch | string | 开发批次 |
| haveSourceList | boolean | 是否关联长清单 |
| sourceListId | string | 长清单ID |
| bidders | set | 询价供应商集合（id/supplierId/supplierName） |

- **输出示例**

```Plain Text
{
    "state": "success",
    "data": {
        "currentIndex": 0,
        "totalCount": 2,
        "currentPage": 1,
        "totalPage": 1,
        "pageSize": 100,
        "countLimit": 0,
        "content": [
            {
                "id": "8a87f6e198843070019898cdf916009a",
                "appFormId": "8a87f6e198843070019898cdf8f00099",
                "appForm": {
                    "id": "8a87f6e198843070019898cdf8f00099",
                    "code": "BDL-20250811-002",
                    "name": "预选供应商名单审批表",
                    "status": "PASS",
                    "auditDate": "2025-08-11 19:05:53",
                    "isDeleted": false
                },
                "rfq": {
                    "id": "8a87f6e198843070019898cdf6140093",
                    "currentRoundId": "8a87f6e198843070019898cdf62f0094",
                    "buyerId": "6bc9deb933424c45a9ce29547ee1e5ba",
                    "rfqCode": "RFQ-20250811-002",
                    "rfqName": "SOR_CL2_0811",
                    "rfqType": "RFQ_TYPE_FIXED_PLANT",
                    "rfqStatus": "NOMINATED",
                    "productProjects": []
                },
                "currentRoundId": "8a87f6e198843070019898cdf62f0094",
                "currentRound": {
                    "id": "8a87f6e198843070019898cdf62f0094",
                    "roundNo": "1"
                },
                "rfqId": "8a87f6e198843070019898cdf6140093",
                "sorId": "8a87e25c98843367019898c6a06700a2",
                "sorCode": "SOR-MP-PWT-0114",
                "sorVersionNo": "1.0",
                "isSqeApprove": false,
                "sqeStatus": "PASS",
                "isDevApprove": true,
                "createdBy": "6bc9deb933424c45a9ce29547ee1e5ba",
                "createDate": "2025-08-11 19:04:52",
                "updatedBy": "b27f893398d14c9c80b56d009dc73f0a",
                "updateDate": "2025-08-11 19:08:23",
                "isDeleted": false,
                "productProjects": []
            }
        ]
    }
}             
```

- **验收标准（Given / When / Then）**

  - **Given** 有效的SOR编码 **When** 执行 `dx-ep sor bidderaf query --sor-code "``SOR-XMTEST011-CHS-0007``"` **Then** 返回最新预选供应商申请单，含审核状态和供应商列表
  - **Given** SOR编码不存在 **When** 执行同上 **Then** 返回 null

---

#### 接口 14：预选供应商申请单查询

- **使用场景**：根据 RFQ 号码查询最新预选供应商推荐申请单审批状态，含SQE/研发审核状态。
- **请求方式**: POST
- **接口路径**: /custom/rfqBidderAf/find.api
- **CLI 指令**: `dx-ep sor bidderaf list  --rfq-code <rfq-code>  --rfq-name <rfq-name> --sor-code <sor-code>` 
- **输入参数**

| 参数名称 | 类型 | 必选 | 默认值 | 校验规则 | 说明 |
|-|-|-|-|-|-|
| --sor-code | string | 否 | - | NotBlank | SOR包编码（模糊） |
| --rfq-code | string | 否 | - | NotBlank | rfq编码（模糊） |
| --rfq-name | string | 否 | - | NotBlank | rfq名称（模糊） |
| --page | int | 否 | 1 | 页码 |  |
| --page-size | int | 否 | 50 | 每页条数 |  |

- **输入参数依赖关系**

| 参数名称 | 获取来源命令 | 获取来源参数 |
|-|-|-|
|  |  |  |

- **输入示例**

```Plain Text
# 场景 1：查询SOR的预选供应商申请单
dx-ep sor bidderaf list --sor-code "SOR-2024-001"


```

- 输入json

```JSON
{"filterInfo":{"status":"ALL","rfqCode":"11","rfqName":"11","sorCode":"11"},"pageInfo":{"beginIndex":0,"pageSize":100}}
```

- **返回参数**

分页结构 (data)

| 字段 | 类型 | 说明 |
|-|-|-|
| `currentIndex` | Integer | 当前索引 |
| `totalCount` | Integer | 总记录数 |
| `currentPage` | Integer | 当前页码 |
| `totalPage` | Integer | 总页数 |
| `pageSize` | Integer | 每页条数 |
| `countLimit` | Integer | 数量限制 |
| `content` | Array<RfqBidderAfDto> | 数据列表 |

RfqBidderAfDto

| 字段 | 类型 | 说明 |
|-|-|-|
| id | string | 申请单ID |
| appFormId | string | 表单ID |
| appForm | AppFormDto | 申请单对象 |
| rfqId | string | RFQ ID |
| rfq | RfqDto | rfq对象 |
| currentRoundId | string | RFQ 轮次 ID |
| round | rfqRoundDto | 轮次对象 |
| sorId | string | SOR ID |
| sorCode | string | SOR编码 |
| sorVersionNo | string | SOR版本号 |
| isSqeApprove | boolean | 是否需要SQE审核 |
| sqeStatus | string | SQE审核状态 |
| sqeAuditDate | datetime | SQE审核日期 |
| isDevApprove | boolean | 是否需要研发审核 |
| devStatus | string | 研发审核状态 |
| devAuditDate | datetime | 研发审核日期 |

AppFormDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 表单ID | `"8a87f6e198843070019898cdf8f00099"` |
| `code` | String | 表单编码 | `"BDL-20250811-002"` |
| `name` | String | 表单名称 | `"预选供应商名单审批表"` |
| `status` | String | 表单状态 | `"PASS"` |
| `auditDate` | Date | 审批日期 | `"2025-08-11 19:05:53"` |
| `isDeleted` | Boolean | 是否删除 | `false` |

RfqDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | RFQ ID | `"8a87f6e198843070019898cdf6140093"` |
| `currentRoundId` | String | 当前轮次ID | `"8a87f6e198843070019898cdf62f0094"` |
| `buyerId` | String | 采购员ID | `"6bc9deb933424c45a9ce29547ee1e5ba"` |
| `rfqCode` | String | RFQ编码 | `"RFQ-20250811-002"` |
| `rfqName` | String | RFQ名称 | `"SOR_CL2_0811"` |
| `rfqType` | String | RFQ类型 | `"RFQ_TYPE_FIXED_PLANT"` |
| `rfqStatus` | String | RFQ状态 | `"NOMINATED"` |
| `productProjects` | Array | 采购项目列表 | `[]` |

RfqRoundDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 轮次ID | `"8a87f6e198843070019898cdf62f0094"` |
| `roundNo` | String | 轮次编号 | `"1"` |

- **输出示例**

```Plain Text
{
    "state": "success",
    "data": {
        "currentIndex": 0,
        "totalCount": 2,
        "currentPage": 1,
        "totalPage": 1,
        "pageSize": 100,
        "countLimit": 0,
        "content": [
            {
                "id": "8a87f6e198843070019898cdf916009a",
                "appFormId": "8a87f6e198843070019898cdf8f00099",
                "appForm": {
                    "id": "8a87f6e198843070019898cdf8f00099",
                    "code": "BDL-20250811-002",
                    "name": "预选供应商名单审批表",
                    "status": "PASS",
                    "auditDate": "2025-08-11 19:05:53",
                    "isDeleted": false
                },
                "rfq": {
                    "id": "8a87f6e198843070019898cdf6140093",
                    "currentRoundId": "8a87f6e198843070019898cdf62f0094",
                    "buyerId": "6bc9deb933424c45a9ce29547ee1e5ba",
                    "rfqCode": "RFQ-20250811-002",
                    "rfqName": "SOR_CL2_0811",
                    "rfqType": "RFQ_TYPE_FIXED_PLANT",
                    "rfqStatus": "NOMINATED",
                    "productProjects": []
                },
                "currentRoundId": "8a87f6e198843070019898cdf62f0094",
                "currentRound": {
                    "id": "8a87f6e198843070019898cdf62f0094",
                    "roundNo": "1"
                },
                "rfqId": "8a87f6e198843070019898cdf6140093",
                "sorId": "8a87e25c98843367019898c6a06700a2",
                "sorCode": "SOR-MP-PWT-0114",
                "sorVersionNo": "1.0",
                "isSqeApprove": false,
                "sqeStatus": "PASS",
                "isDevApprove": true,
                "createdBy": "6bc9deb933424c45a9ce29547ee1e5ba",
                "createDate": "2025-08-11 19:04:52",
                "updatedBy": "b27f893398d14c9c80b56d009dc73f0a",
                "updateDate": "2025-08-11 19:08:23",
                "isDeleted": false,
                "productProjects": []
            }
        ]
    }
}              
```

- **验收标准（Given / When / Then）**

  - **Given** 有效的SOR编码 **When** 执行 `dx-ep sor preselect query --sor-code "``SOR-Modena" ` **Then** 返回最新预选供应商申请单，含审核状态和供应商列表
  - **Given** SOR编码不存在 **When** 执行同上 **Then** 返回 null

---

#### 接口 15：物流信息查询

- **使用场景**：查询物流信息和产能调查状态.
- **请求方式**: POST
- **接口路径**: /custom/rfqQuotesInfo/findRfqRoundSupplierFile.api
- **CLI 指令**: `dx-ep rfq logistics list [--sor-code <code>] [--rfq-code <code>]  [--material-num <num>] [--page <page>] [--page-size <size>]`
- **输入参数**

| 参数名称 | 类型 | 必选 | 默认值 | 校验规则 | 说明 |
|-|-|-|-|-|-|
| --sor-code | string | 否 | - | - | SOR编码（模糊） |
| --rfq-code | string | 否 | - | - | RFQ编码（模糊） |
| --material-num | string | 否 | - | - | 零件编码 |
| --page | int | 否 | 1 | >0 | 页码 |
| --page-size | int | 否 | 50 | 1\~100 | 每页条数 |

- **输入参数依赖关系**

| 参数名称 | 获取来源命令 | 获取来源参数 |
|-|-|-|
|  |  |  |
|  |  |  |
|  |  |  |

- **输入示例**

```Plain Text
# 场景 1：查询SOR关联的物流信息
dx-ep rfq logistics list --sor-code "SOR-2024-001"


```

输入json

```JSON
{"filterInfo":{"sorCode":"1","logicFileStatus":"SUBMITTED","isCurrentRoundNo":true,"rfqCode":"1","scope":"all","keywords":null},"pageInfo":{"beginIndex":0,"pageSize":100}}
```

- **返回参数**

分页结构 (data)

| 字段 | 类型 | 说明 |
|-|-|-|
| `currentIndex` | Integer | 当前索引 |
| `totalCount` | Integer | 总记录数 |
| `currentPage` | Integer | 当前页码 |
| `totalPage` | Integer | 总页数 |
| `pageSize` | Integer | 每页条数 |
| `countLimit` | Integer | 数量限制 |
| `content` | Array<RfqQuotesInfosDto> | 数据列表 |

RfqQuotesInfosDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 主键ID（发放信息ID） | `"8a87f6e198843070019898cdf916009a"` |
| `projectCode` | String | 采购项目编码 | `"P20260001"` |
| `sorId` | String | SOR ID | `"8a87e25c98843367019898c6a06700a2"` |
| `sorCode` | String | SOR包编码 | `"SOR-MP-PWT-0114"` |
| `sorName` | String | SOR包名称 | `"前副车架总成"` |
| `rfqId` | String | RFQ ID | `"8a87f6e198843070019898cdf6140093"` |
| `rfqCode` | String | RFQ编码 | `"RFQ-20250811-002"` |
| `rfqType` | String | RFQ类型 | `"RFQ_TYPE_FIXED_PLANT"` |
| `roundId` | String | 轮次ID | `"8a87f6e198843070019898cdf62f0094"` |
| `roundNo` | String | 轮次编号 | `"1"` |
| `roundStatus` | String | 轮次状态 | `"FINISHED"` |
| `planEndDate` | Date | 计划定点完成时间 | `"2025-09-01 00:00:00"` |
| `issueQuoteDate` | Date | 发放询价时间 | `"2025-08-11 19:00:00"` |
| `endDate` | Date | 轮次结束时间 | `"2025-08-20 18:00:00"` |
| `supplierId` | String | 供应商ID | `"sup_001"` |
| `supplierCode` | String | 供应商编码 | `"SUP20260001"` |
| `supplierName` | String | 供应商名称 | `"某某汽车零部件有限公司"` |
| `supplierSimpleName` | String | 供应商简称 | `"某某零部件"` |
| `supplierSubmitDate` | Date | 报价时间 | `"2025-08-15 16:45:00"` |
| buyerId | String | 采购员ID |  |
| pdId | String | 研发ID |  |
| logisticsEngId | String | 物流工程师ID |  |
| logicFileStatus | String | 物流信息审批状态 |  |
| rejectReason | String | 物流驳回原因 |  |





- **输出示例**

```Plain Text
{
    "state": "success",
    "data": {
        "currentIndex": 0,
        "totalCount": 1,
        "currentPage": 1,
        "totalPage": 1,
        "pageSize": 100,
        "countLimit": 0,
        "content": [
            {
                "id": "8a879dbf99e31b270199ebe8be7400dc",
                "projectCode": "xiaomibeijing2025chunjicaigouxiang(8801)",
                "sorCode": "SOR-xiaomibeijing2025chunjicaigouxiang(8801)-PWT-0015",
                "sorName": "SORAUTOTEST0001",
                "classifyCode": "PWT",
                "rfqCode": "RFQ-20251016-001",
                "roundNo": "1",
                "roundId": "8a879dbf99e31b270199ebe248b800b0",
                "supplierId": "864602829837685",
                "supplierCode": "0000000133",
                "supplierName": "湖北中科有限公司",
                "supplierSimpleName": "湖北中科",
                "supplierType": false,
                "supplierSubmitDate": "2025-10-16 15:29:30",
                "pdId": "9017226fb8bb4752a95e8b78d4f26364",
                "buyerId": "9017226fb8bb4752a95e8b78d4f26364",
                "logicFileId": "8a879dbf99e31b270199ebe8be8a00dd",
                "logicFileCount": 0,
                "logicFileStatus": "SUBMITTED",
                "logisticsEngId": "9017226fb8bb4752a95e8b78d4f26364",
                "rfqId": "8a879dbf99e31b270199ebe248a700af",
                "sorId": "8a878e5798d07fa80198d0a256410017",
                "roundStatus": "FINISHED",
                "planEndDate": "2026-02-03 00:00:00",
                "issueQuoteDate": "2025-10-16 15:25:22",
                "endDate": "2025-10-23 15:18:19",
                "rfqType": "RFQ_TYPE_FIXED_PLANT"
            }
        ]
    }
}
```

- **验收标准（Given / When / Then）**

  - **Given** 存在物流信息数据 **When** 执行 `dx-ep rfq logistics list --sor-code "``SOR-``"` **Then** 返回物流信息和产能调查状态
  - **Given** 指定 `--supplier-id SUP001` **When** 执行命令 **Then** 仅返回该供应商的物流信息

---

#### 接口 16：当前轮次完成报价的供应商列表

- **使用场景**：根据RFQ ID查询当前轮次完成报价的供应商列表，不分页的列表。**提供给定点申请单创建使用**
- **请求方式**: POST
- **接口路径**: /custom/rfqQuotesInfo/findSupplierByCurrentRoundNo.api
- **CLI 指令**: `dx-ep rfq supplier list --rfq-id <rfq-id>`
- **输入参数**

| 参数名称 | 类型 | 必选 | 默认值 | 校验规则 | 说明 |
|-|-|-|-|-|-|
| --rfq-id | string | 是 | - | NotBlank | RFQ主键ID |
|  |  |  |  |  |  |

- **输入参数依赖关系**

| 参数名称 | 获取来源命令 | 获取来源参数 |
|-|-|-|
|  |  |  |

- **输入示例**

```Plain Text
# 场景 1：查询RFQ当前轮次的供应商
dx-ep rfq supplier list --rfq-id RFQ001


```

- **返回参数**

| 字段 | 类型 | 说明 |
|-|-|-|
| id | string | 供应商ID |
| orgName | string | 供应商名称 |
| orgCode | string | 供应商编码 |

- **输出示例**

```Plain Text
{
  "state": "success",
  "message": "success",
  "data":  [
              {
                "id": "SUP001",
                "orgName": "XX电子有限公司",
                "orgCode": "100001"
              }
          ]
  }
}

```

- **验收标准（Given / When / Then）**

  - **Given** 有效的RFQ ID **When** 执行 `dx-ep rfq supplier list --rfq-id ``"``8a272ea9965803cc0196586c2e470050``"` **Then** 返回当前轮次供应商列表，含完整基本信息
  - **Given** RFQ ID不存在 **When** 执行同上 **Then** 返回空列表



---





#### 接口 17：根据轮次ID查询供应商的商务前提列表（5.11新增）

- **使用场景**：根据RFQround ID查询当前轮次的供应商商务前提列表
- **请求方式**: POST
- **接口路径**: /custom/ppQuoteSupplierPremise/findByRoundId.api
- **CLI 指令**: `dx-ep rfq supplier-premiss query --rfq-round-id <rfq-round-id>`
- **输入参数**

| 参数名称 | 类型 | 必选 | 默认值 | 校验规则 | 说明 |
|-|-|-|-|-|-|
| --rfq-`round`-id | string | 是 | - | NotBlank | RFQround主键ID |
|  |  |  |  |  |  |

- **输入参数依赖关系**

| 参数名称 | 获取来源命令 | 获取来源参数 |
|-|-|-|
|  |  |  |

- **输入示例**

```Plain Text
# 场景 1：查询RFQ当前轮次的供应商
dx-ep rfq supplier-premiss query --rfq-round-id 8a8793c59dcf4113019dd1d616bc0008


```

输入json

```JSON
{"id":"8a8793c59dcf4113019dd1d616bc0008"}
```

- **返回参数 data是一个List<SupplierPremiseDto>**

| 字段 | 类型 | 说明 | mark |
|-|-|-|-|
| id | string | 供应商ID |  |
| ppRfqRoundId | string | 轮次id |  |
| mdSupplierId | string | 供应商id |  |
| supplierName | string | 供应商名称 |  |
| supplierCode | string | 供应商编码 |  |
| currency | string | 币种（一般默认CNY） |  |
| exchangeRate | double | 汇率（一般1） |  |
| accountingPeriod | string | 量产账期 |  |
| chitAccountingPeriod | string | 量产承兑汇票账期（月） |  |
| accountingPeriodSample | string | 样件账期 |  |
| chitAccountingPeriodSample | string | 样件承兑汇票账期（月） |  |

- **输出示例**

```Plain Text
{
    "state": "success",
    "data": [
        {
            "id": "5acbd8c85c674dd28ea73e7dc371c0f7",
            "ppRfqRoundId": "8a8793c59dcf4113019dd1d616bc0008",
            "mdSupplierId": "364205391062046",
            "supplierName": "河南艾力刹车制动器有限公司",
            "supplierCode": "0000102215",
            "currency": "CNY",
            "exchangeRate": 1,
            "accountingPeriod": "V005",
            "chitAccountingPeriod": "3",
            "accountingPeriodSample": "V002",
            "isNomi": false
        }
    ]
}
```

- **验收标准（Given / When / Then）**

  - **Given** 有效的RFQ ID **When** 执行 `dx-ep rfq supplier-premiss query --rfq-round-id 8a8793c59dcf4113019dd1d616bc0008` **Then** 返回当前轮次供应商列表，含完整基本信息
  - **Given** RFQ ID不存在 **When** 执行同上 **Then** 返回空列表



---





### 模块：定点管理

#### 接口 18：定点申请单查询

- **使用场景**：分页查询定点申请单列表
- **请求方式**: POST
- **接口路径**: /custom/nominationAf/find.api
- **CLI 指令**: `dx-ep nomi af list [--rfq-code <code>] [--rfq-name <name>] [--sor-code <sorcode>] [--supplier-name <name>] [--supplier-code <code>] [--page <page>] [--page-size <page-size>]`

**输入参数**

| 参数名称 | 类型 | 必选 | 说明 |
|-|-|-|-|
| --rfq-code | string | 否 | RFQ编码（模糊） |
| --rfq-name | string | 否 | RFQ名称（模糊） |
| --sor-code | string | 否 | sor编码（模糊） |
| --supplier-name | string | 否 | 供应商名称（模糊） |
| --supplier-code | string | 否 | 供应商编码（模糊） |
| --page | int | 否 | 页码 |
| --page-size | int | 否 | 每页条数 |

**输入示例**

```Bash
dx-ep nomi af list --rfq-code "RFQ-2024-001"
```

输入json

```JSON
{"filterInfo":{"projectIds":[],"scope":"all","rfqCode":"111","rfqName":"111","supplierName":"湖北","supplierCode":"011","sorCode":"111"},"pageInfo":{"beginIndex":0,"pageSize":100}}
```

- **返回参数**

分页结构 (data)

| 字段 | 类型 | 说明 |
|-|-|-|
| `currentIndex` | Integer | 当前索引 |
| `totalCount` | Integer | 总记录数 |
| `currentPage` | Integer | 当前页码 |
| `totalPage` | Integer | 总页数 |
| `pageSize` | Integer | 每页条数 |
| `countLimit` | Integer | 数量限制 |
| `content` | Array<nominationAfDto> | 数据列表 |

nominationAfDto

| 字段 | 类型 | 说明 | 示例值 |
|-|-|-|-|
| `id` | String | 复合主键（rfq_id  + \| + nomi_id） 如果rfq已经创建nomiAf，则是两个，如果没创建，则只有rfqId | `"8a87f6e1...\
| `rfqId` | String | RFQ ID | `"8a87f6e198843070019898cdf6140093"` |
| `nomiId` | String | 定点申请单ID | `"8a87f6e198843070019898cdf916009a"` |
| `code` | String | 定点申请单编码 | `"NOM-20250811-001"` |
| `status` | String | 审批状态 | `"PASS"` |
| `auditDate` | Date | 审批日期 | `"2025-08-11 19:05:53"` |
| `createDate` | Date | 创建日期 | `"2025-08-11 19:04:52"` |
| `rfqCode` | String | RFQ编码 | `"RFQ-20250811-002"` |
| `rfqName` | String | RFQ名称 | `"SOR_CL2_0811"` |
| `buyerId` | String | 采购员ID | `"6bc9deb933424c45a9ce29547ee1e5ba"` |
| `rfqType` | String | RFQ类型 | `"RFQ_TYPE_FIXED_PLANT"` |
| `supplierId` | String | 供应商ID(有nomi才会有） | `"sup_001"` |
| `orgCode` | String | 供应商编码(有nomi才会有） | `"SUP20260001"` |
| `orgName` | String | 供应商名称(有nomi才会有） | `"某某汽车零部件有限公司"` |
| `supplier` | String | 供应商汇总信息(有nomi才会有） | `"sup_001\|SUP20260001\
| `taskOwnerNames` | String | BPM流程当前审批人（有nomi才会有） | `"张三,李四"` |
| disableCreateMsg | String | rfq不能创建RFQ时的信息提示 |  |

- **输出示例**

```Plain Text
{
    "state": "success",
    "data": {
        "currentIndex": 0,
        "totalCount": 12,
        "currentPage": 1,
        "totalPage": 1,
        "pageSize": 100,
        "countLimit": 0,
        "content": [
            {
                "id": "8a8712b79a7b347c019a7c46bffb00f5|8a87fe269a7d36bb019a8004fce70001",
                "appFormId": "8a87fe269a7d36bb019a8004fb830000",
                "rfqId": "8a8712b79a7b347c019a7c46bffb00f5",
                "productProjects": [],
                "createDate": "2025-11-14 09:40:01",
                "isDeleted": false,
                "rfqCode": "RFQ-20251113-001",
                "rfqName": "验证ESI_CL_1113",
                "buyerId": "6bc9deb933424c45a9ce29547ee1e5ba",
                "nomiId": "8a87fe269a7d36bb019a8004fce70001",
                "code": "ESI-20251114-0009",
                "status": "PASS",
                "auditDate": "2025-11-14 09:44:28",
                "disableCreateMsg": "",
                "rfqType": "RFQ_TYPE_ESI",
                "supplierId": "864602829837685",
                "supplier": "864602829837685|0000000133|湖北中科有限公司",
                "orgCode": "0000000133",
                "orgName": "湖北中科有限公司"
            }, {
                "id": "8a870bf79c32e1fd019c418e38f20051|",
                "rfqId": "8a870bf79c32e1fd019c418e38f20051",
                "productProjects": [],
                "isDeleted": false,
                "rfqCode": "RFQ-20260209-003",
                "rfqName": "ceshi",
                "buyerId": "6bc9deb933424c45a9ce29547ee1e5ba",
                "status": "TOCREATE",
                "disableCreateMsg": "当前轮次未结束，不能创建定点申请单<br/>当前轮次无参与报价的供应商<br/>RFQ状态不正确，只能在[询价结束]或[预选供应商推荐完成]或[定点完成]或[定点申请中]状态下才能创建<br/>",
                "rfqType": "RFQ_TYPE_FIXED_PLANT",
                "supplier": ""
            }
         ]
    }
}         
```

- **验收标准（Given / When / Then）**

  - **Given** 存在定点申请单数据 **When** 执行 `dx-ep nomi af list` **Then** 返回分页定点申请单列表
  - **Given** 指定 `--rfq-code "001"` **When** 执行命令 **Then** 仅返回该RFQ关联的定点申请单
  - **Given** 指定 `--status DRAFT` **When** 执行命令 **Then** 仅返回草稿状态的申请单

---

#### 接口 19：创建定点申请单

- **使用场景**：根据RFQ ID创建定点申请单草稿
- **请求方式**: POST
- **接口路径**: /custom/nominationAf/create.api
- **CLI 指令**: `dx-ep nomi af create --rfq-id <rfq-id> [--supplier-id <id>] [--dry-run]`
- **幂等：**接口中支持根据入参的校验

**输入参数**

| 参数名称 | 类型 | 必选 | 说明 |
|-|-|-|-|
| --rfq-id | string | 是 | RFQ ID |
| --supplier-id | string | 是 | 供应商ID |
| --name | string | 否 | 申请单名称 |
| --remark | string | 否 | 定点说明 |
| --dry-run | boolean | 否 | 预览模式，不实际执行 |

**输入示例**

```Bash
dx-ep nomi af create --rfq-id RFQ001 --supplier-id SUP001
dx-ep nomi af create --rfq-id RFQ001 --supplier-id SUP001 --dry-run
```

输入json

```JSON
{
  "rfqId": "8a87f6e198843070019898cdf6140093",
  "supplierId": "sup_001",
  "remark": "MX11项目前副车架定点申请"
}
```

- **返回参数**

| 字段 | 类型 | 说明 |
|-|-|-|
| id | string | 定点申请单ID |
| appFormId | string | 定点申请单表单ID |
| rfqId | string | RFQ ID |
| rfqCode | string | RFQ编码 |
| rfqName | string | RFQ名称 |
| rfqType | string | RFQ类型 |
| status | string | 状态（DRAFT-新建/SUBMITTED-已存在） |
| code | string | 申请单编码 |
| name | string | 申请单名称 |
| supplierId | string | 供应商ID |
| supplierName | string | 供应商名称 |
| supplierCode | string | 供应商编码 |
| buyerId | string | 采购员ID |
| source | string | 来源 |
| planFinishDate | datetime | 计划完成时间 |

- **输出示例**

```JSON
{
  "state": "success",
  "data": {
    "id": "8a87f6e198843070019898cdf916009a",
    "code": "SCM-20250811-001",
    "name": "SOR_CL2_0811",
    "status": "DRAFT",
    "rfqId": "8a87f6e198843070019898cdf6140093",
    "rfqCode": "RFQ-20250811-002",
    "rfqName": "SOR_CL2_0811",
    "rfqType": "RFQ_TYPE_FIXED_PLANT",
    "type": "SOURCING",
    "supType": "NOMINATION",
    "source": "RFQ",
    "approvalType": "GENERAL",
    "appFormId": "8a87f6e198843070019898cdf8f00099",
    "supplierId": "sup_001",
    "remark": "MX11项目前副车架定点申请",
    "createdBy": "6bc9deb933424c45a9ce29547ee1e5ba",
    "createDate": "2025-08-11 19:04:52",
    "isDeleted": false
  }
}

```

- **验收标准（Given / When / Then）**

  - **Given** 有效的RFQ ID和供应商ID **When** 执行 `dx-ep nomination create --rfq-id ``"``8a272ea9965803cc0196586c2e470050``" ``--supplier-id`` "``263903637306785``" `**Then** 创建定点申请单草稿，返回完整信息
  - **Given** 已存在进行中的申请单（单供应商定点RFQ） **When** 执行同上 **Then** 返回已存在的申请单，status 为 SUBMITTED
  - **Given** 指定 `--dry-run` **When** 执行命令 **Then** 仅打印请求参数，不实际创建
  - **Given** 未传 --rfq-id **When** 执行命令 **Then** 返回参数校验错误提示

---

## 4. 接口文档来源

- EP 后端代码仓库: [https://git.n.xiaomi.com/car-dx-isc/evep](https://git.n.xiaomi.com/car-dx-isc/evep)

方式二: 提供已有的接口 Markdown 文档链接

# 评审结果

| 角色 | 评审结果 | 评审意见 | 负责人签字 |
|-|-|-|-|
| 产品 | GO | -- | xxx |
| 业务开发 | GO | -- | yyy |
| CLI开发 | GO |  | zzz |

# <cite doc-id="P2U4wgtwNigu9mksl8icnPORnef" file-type="wiki" title="AI场景识别和CLI应用" type="doc"></cite>