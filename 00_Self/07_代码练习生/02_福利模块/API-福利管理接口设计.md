---
created: '2026-07-24'
tags: [Self, AI, 业务]
---

---tags: [Self, AI]
created: 2026-07-08
updated: 2026-07-22
status: draft
---
> [!summary] 福利管理模块 — 接口设计文档
> - **核心**：文档版本：v1.0
> - **要点**：1. 概述
> - **要点**：1.1 通用约定
> - **要点**：1.2 通用响应结构
> - **要点**：1.3 分页响应结构

# 福利管理模块 — 接口设计文档

> **文档版本**：v1.0  
> **创建日期**：2026-06-22  
> **Base URL**：`/api/v1/welfare`

---

## 1. 概述

本文档定义福利管理模块全部 RESTful API 接口，包括请求格式、响应格式、字段说明及错误码。

### 1.1 通用约定

| 项目 | 说明 |
|------|------|
| 协议 | HTTPS |
| 数据格式 | JSON |
| 字符编码 | UTF-8 |
| 时间格式 | `yyyy-MM-dd HH:mm:ss` |
| 金额格式 | 字符串 "1000.00"（Decimal 传输推荐字符串防精度丢失） |
| 认证方式 | Bearer Token（Header: `Authorization: Bearer <token>`） |

### 1.2 通用响应结构

```json
{
  "code": 0,
  "message": "success",
  "data": {},
  "timestamp": "2026-06-22 18:00:00"
}
```

- `code`：0 表示成功，非 0 表示错误（见错误码表）
- `message`：友好提示信息
- `data`：业务数据，可能为对象、数组或 `null`
- `timestamp`：服务端响应时间

### 1.3 分页响应结构

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "records": [],
    "total": 8,
    "page": 1,
    "pageSize": 10,
    "totalPages": 1
  },
  "timestamp": "2026-06-22 18:00:00"
}
```

---

## 2. 接口列表

| 序号 | 方法 | 路径 | 功能 |
|------|------|------|------|
| 1 | GET | `/api/v1/welfare/list` | 分页查询福利列表 |
| 2 | GET | `/api/v1/welfare/detail` | 查询福利详情 |
| 3 | POST | `/api/v1/welfare/create` | 新增福利 |
| 4 | PUT | `/api/v1/welfare/update` | 编辑福利 |
| 5 | PUT | `/api/v1/welfare/disable` | 停用福利 |

---

## 3. 接口详细定义

### 3.1 分页查询福利列表

```
GET /api/v1/welfare/list
```

#### 请求参数（Query String）

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `page` | Integer | 否 | 页码，默认 1 |
| `pageSize` | Integer | 否 | 每页条数，默认 10，最大 100 |
| `year` | String | 否 | 年度筛选，如 "2026" |
| `name` | String | 否 | 福利名称筛选（模糊匹配） |
| `month` | String | 否 | 发放月份筛选，如 "6月" |
| `status` | String | 否 | 状态筛选：`pending` / `issued` / `disabled` |
| `sortField` | String | 否 | 排序字段，默认 `update_time` |
| `sortOrder` | String | 否 | 排序方向 `asc` / `desc`，默认 `desc` |

#### 请求示例

```
GET /api/v1/welfare/list?page=1&pageSize=10&year=2026&status=pending&sortField=update_time&sortOrder=desc
```

#### 响应字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `records[].id` | Long | 福利ID（主键） |
| `records[].year` | String | 年度 |
| `records[].name` | String | 福利名称 |
| `records[].amount` | String | 金额（元），字符串格式 "1000.00" |
| `records[].month` | String | 发放月份 |
| `records[].status` | String | 状态：`pending` / `issued` / `disabled` |
| `records[].statusLabel` | String | 状态中文名 |
| `records[].remark` | String | 备注 |
| `records[].updateTime` | String | 更新时间 yyyy-MM-dd HH:mm:ss |
| `records[].createTime` | String | 创建时间 |
| `total` | Integer | 总记录数 |
| `page` | Integer | 当前页码 |
| `pageSize` | Integer | 每页条数 |
| `totalPages` | Integer | 总页数 |

#### 响应示例

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "records": [
      {
        "id": 1,
        "year": "2026",
        "name": "春节红包",
        "amount": "1000.00",
        "month": "2月",
        "status": "pending",
        "statusLabel": "待发放",
        "remark": "春节节日福利",
        "updateTime": "2026-01-15 09:30:00",
        "createTime": "2026-01-15 09:30:00"
      }
    ],
    "total": 8,
    "page": 1,
    "pageSize": 10,
    "totalPages": 1
  },
  "timestamp": "2026-06-22 18:00:00"
}
```

---

### 3.2 查询福利详情

```
GET /api/v1/welfare/detail
```

#### 请求参数（Query String）

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | Long | 是 | 福利ID |

#### 请求示例

```
GET /api/v1/welfare/detail?id=1
```

#### 响应字段

同 3.1 中 `records[]` 的 single 对象结构。

#### 响应示例

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "id": 1,
    "year": "2026",
    "name": "春节红包",
    "amount": "1000.00",
    "month": "2月",
    "status": "pending",
    "statusLabel": "待发放",
    "remark": "春节节日福利",
    "updateTime": "2026-01-15 09:30:00",
    "createTime": "2026-01-15 09:30:00"
  },
  "timestamp": "2026-06-22 18:00:00"
}
```

#### 错误场景

| 错误码 | 场景 |
|--------|------|
| 1001 | id 参数缺失 |
| 1002 | 记录不存在 |

---

### 3.3 新增福利

```
POST /api/v1/welfare/create
```

#### 请求体（JSON Body）

| 字段 | 类型 | 必填 | 校验规则 |
|------|------|------|----------|
| `year` | String | 是 | 格式 "YYYY"，枚举 2023-2026 |
| `name` | String | 是 | 最长 30 字，不可与同年已有记录重名 |
| `amount` | String | 是 | 正数，最多2位小数，如 "1000.00"，范围 (0, 99999999.99] |
| `month` | String | 是 | 枚举：1月～12月、"生日当月" |
| `remark` | String | 否 | 最长 200 字 |

#### 请求示例

```json
{
  "year": "2026",
  "name": "春节红包",
  "amount": "1000.00",
  "month": "2月",
  "remark": "春节节日福利"
}
```

#### 响应字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `data.id` | Long | 新创建记录的ID |

#### 响应示例

```json
{
  "code": 0,
  "message": "新增成功",
  "data": {
    "id": 9
  },
  "timestamp": "2026-06-22 18:00:00"
}
```

#### 错误场景

| 错误码 | 场景 |
|--------|------|
| 2001 | 必填字段缺失 |
| 2002 | 福利名称超过 30 字 |
| 2003 | 同年已存在同名福利 |
| 2004 | 金额格式不合法或超出范围 |
| 2005 | 发放月份不在枚举中 |
| 2006 | 备注超过 200 字 |

#### 后端处理逻辑

1. 校验参数合法性
2. 检查同年是否存在同名记录
3. `status` 强制设为 `pending`
4. `createTime`、`updateTime` 取服务端时间
5. 写入数据库并返回新 ID

---

### 3.4 编辑福利

```
PUT /api/v1/welfare/update
```

#### 请求体（JSON Body）

| 字段 | 类型 | 必填 | 校验规则 |
|------|------|------|----------|
| `id` | Long | 是 | 福利ID |
| `year` | String | 是 | 同新增 |
| `name` | String | 是 | 同新增 |
| `amount` | String | 是 | 同新增 |
| `month` | String | 是 | 同新增 |
| `remark` | String | 否 | 同新增 |

> ⚠️ `status` 字段**不在编辑接口入参中**，后端自动保持原状态不变。

#### 请求示例

```json
{
  "id": 1,
  "year": "2026",
  "name": "春节红包（升级版）",
  "amount": "1500.00",
  "month": "2月",
  "remark": "金额上调至1500元"
}
```

#### 响应示例

```json
{
  "code": 0,
  "message": "修改已保存",
  "data": null,
  "timestamp": "2026-06-22 18:00:00"
}
```

#### 错误场景

| 错误码 | 场景 |
|--------|------|
| 3001 | id 参数缺失 |
| 3002 | 记录不存在 |
| 3003 | 记录状态非"待发放"，不可编辑 |
| 2001～2006 | 同新增字段校验错误 |

#### 后端处理逻辑

1. 根据 id 查询记录
2. **校验 `status === 'pending'`**，不满足则返回 3003
3. 校验入参字段合法性
4. 同年重名校验（排除自身）
5. 更新记录，刷新 `updateTime`
6. 返回成功

---

### 3.5 停用福利

```
PUT /api/v1/welfare/disable
```

#### 请求体（JSON Body）

| 字段 | 类型 | 必填 | 校验规则 |
|------|------|------|----------|
| `id` | Long | 是 | 福利ID |

#### 请求示例

```json
{
  "id": 1
}
```

#### 响应示例

```json
{
  "code": 0,
  "message": "已停用该福利",
  "data": null,
  "timestamp": "2026-06-22 18:00:00"
}
```

#### 错误场景

| 错误码 | 场景 |
|--------|------|
| 4001 | id 参数缺失 |
| 4002 | 记录不存在 |
| 4003 | 记录状态非"待发放"，不可停用 |
| 4004 | 记录已被停用（幂等性保护） |

#### 后端处理逻辑

1. 根据 id 查询记录
2. **校验 `status === 'pending'`**，不满足则返回 4003
3. 如已是 `disabled`，返回 4004
4. 更新 `status = 'disabled'`，刷新 `updateTime`
5. 返回成功

---

## 4. 数据库表设计（参考）

### 4.1 welfare 表

```sql
CREATE TABLE `welfare` (
  `id`           BIGINT        NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `year`         VARCHAR(4)    NOT NULL              COMMENT '年度',
  `name`         VARCHAR(30)   NOT NULL              COMMENT '福利名称',
  `amount`       DECIMAL(10,2) NOT NULL              COMMENT '金额（元）',
  `month`        VARCHAR(10)   NOT NULL              COMMENT '发放月份',
  `status`       VARCHAR(20)   NOT NULL DEFAULT 'pending' COMMENT '状态: pending/issued/disabled',
  `remark`       VARCHAR(200)  DEFAULT ''            COMMENT '备注',
  `create_time`  DATETIME      NOT NULL              COMMENT '创建时间',
  `update_time`  DATETIME      NOT NULL              COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_year_name` (`year`, `name`),
  KEY `idx_status` (`status`),
  KEY `idx_update_time` (`update_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='福利管理表';
```

### 4.2 索引说明

| 索引名 | 类型 | 字段 | 用途 |
|--------|------|------|------|
| PRIMARY | 主键 | id | 唯一标识 |
| uk_year_name | 唯一索引 | year, name | 同年福利名称唯一性约束 |
| idx_status | 普通索引 | status | 按状态筛选/统计 |
| idx_update_time | 普通索引 | update_time | 按时间排序查询 |

---

## 5. 错误码表

### 5.1 通用错误码

| 错误码 | HTTP状态码 | 说明 |
|--------|-----------|------|
| 0 | 200 | 成功 |
| 401 | 401 | 未认证 / Token 无效 |
| 403 | 403 | 无操作权限 |
| 500 | 500 | 服务器内部错误 |

### 5.2 业务错误码

| 错误码 | HTTP状态码 | 说明 | 关联接口 |
|--------|-----------|------|----------|
| 1001 | 400 | id 参数缺失 | detail |
| 1002 | 404 | 记录不存在 | detail |
| 2001 | 400 | 必填字段缺失 | create |
| 2002 | 400 | 福利名称超过30字 | create |
| 2003 | 409 | 同年已存在同名福利 | create |
| 2004 | 400 | 金额格式不合法或超出范围 | create |
| 2005 | 400 | 发放月份不在枚举范围内 | create |
| 2006 | 400 | 备注超过200字 | create |
| 3001 | 400 | id 参数缺失 | update |
| 3002 | 404 | 记录不存在 | update |
| 3003 | 422 | 仅"待发放"状态可编辑 | update |
| 4001 | 400 | id 参数缺失 | disable |
| 4002 | 404 | 记录不存在 | disable |
| 4003 | 422 | 仅"待发放"状态可停用 | disable |
| 4004 | 422 | 记录已被停用（幂等性保护） | disable |

### 5.3 错误响应示例

```json
{
  "code": 3003,
  "message": "仅"待发放"状态的记录可编辑",
  "data": null,
  "timestamp": "2026-06-22 18:00:00"
}
```

---

## 6. 前端调用示例

### 6.1 请求封装（伪代码）

```javascript
const BASE_URL = '/api/v1/welfare';

async function api(path, method = 'GET', body = null) {
  const opts = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    }
  };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(`${BASE_URL}${path}`, opts);
  const json = await res.json();

  if (json.code !== 0) {
    // 业务错误
    throw new ApiError(json.code, json.message);
  }
  return json.data;
}
```

### 6.2 安全校验清单

| 位置 | 校验内容 |
|------|----------|
| 前端按钮 | 根据 status 渲染可点击/置灰 |
| 前端弹窗 | 打开编辑前校验 status === 'pending' |
| 后端 update | 再次校验 status === 'pending' |
| 后端 disable | 再次校验 status === 'pending' |
| 数据库 | uk_year_name 唯一索引兜底 |

---

> 回到 → [[代码练习生|💻 代码练习生]]
