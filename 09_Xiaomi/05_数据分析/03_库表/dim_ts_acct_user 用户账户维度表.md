---
created: '2026-07-24'
tags: [Xiaomi, 数据]
---

---created: 2026-07-16
updated: 2026-07-16
tags: [Xiaomi, 数据, 系统]
status: draft
---

> [!summary] dim_ts_acct_user 用户账户维度表
> - **核心**：EP 系统用户账户信息维度表，支撑权限管理、操作审计、人员关联
> - **要点**：主键 user_id（注意关联时用 id 字段而非 user_id）；包含用户身份、组织岗位、联系方式、认证安全、数据管理 5 大类字段；日增量 T+1 更新
> - **关联**：[[dim_md_supplier 供应商主数据维度表]] · [[ods_pp_rfq 询报价主表]] · [[供应商报价拆解进度查询]]

# dim_ts_acct_user 用户账户维度表

> **表名**: iceberg_nc4cloudprc_hadoop.ep.dim_ts_acct_user
> **表类型**: 维度表（Dimension Table）
> **用途**: 系统用户账户信息，支撑权限管理、操作审计、人员关联
> **更新频率**: 日增量 T+1

---

## 字段注释

### 一、用户身份信息

| 字段名             | 中文名  | 类型     | 说明             |
| --------------- | ---- | ------ | -------------- |
| id              | 记录ID | String | 内部记录标识         |
| user_id         | 用户ID | String | 用户唯一标识         |
| user_login_name | 登录名  | String | 用户登录账号         |
| password        | 密码   | String | 加密存储的密码（不可见）   |
| user_name       | 用户姓名 | String | 真实姓名           |
| staff_number    | 工号   | String | 企业工号           |
| user_type       | 用户类型 | String | 管理员/普通用户/供应商用户 |

### 二、组织与岗位

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| organization_id | 组织ID | String | 所属组织/部门 |
| position | 岗位 | String | 职位名称 |

### 三、联系方式

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| gender | 性别 | String | 男/女 |
| mobil | 手机号 | String | 移动电话 |
| telephone | 固话 | String | 办公电话 |
| fax | 传真 | String | 传真号码 |
| email | 邮箱 | String | 企业邮箱 |

### 四、认证与安全

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| picture_id | 头像ID | String | 用户头像图片标识 |
| sign_id | 签名ID | String | 电子签名标识 |
| is_lock | 是否锁定 | Boolean | Y/N，账户被锁定（多次登录失败） |
| is_initial_passwd | 是否初始密码 | Boolean | Y/N，是否仍使用初始密码 |
| update_pw_date | 密码更新日期 | String | 上次修改密码的时间 |
| last_login_date | 最后登录日期 | String | 最近一次成功登录时间 |
| login_err_date | 登录错误日期 | String | 最近一次登录失败时间 |
| login_err_number | 登录错误次数 | Integer | 连续登录失败次数 |

### 五、数据管理

| 字段名 | 中文名 | 类型 | 说明 |
|--------|--------|------|------|
| is_active | 是否有效 | Boolean | Y/N，当前是否激活 |
| is_deleted | 是否已删除 | Boolean | 软删除标记 |
| opt_counter | 操作计数器 | Integer | 变更版本号 |
| created_by | 创建人 | String | 创建操作人 |
| create_date | 创建日期 | String | 创建时间 |
| updated_by | 更新人 | String | 更新操作人 |
| update_date | 更新日期 | String | 更新时间 |
| deleted_by | 删除人 | String | 删除操作人 |
| delete_date | 删除日期 | String | 删除时间 |

---

## 主键与关系

| 类型 | 字段 | 关联表 | 说明 |
|------|------|--------|------|
| 主键 | user_id | — | 用户唯一标识 |
| 外键 | organization_id | dim_md_supplier.org_id | 关联组织/供应商 |

---

## 常用查询

| 场景 | 关键字段 | 示例 |
|------|----------|------|
| 查找有效用户 | is_active | WHERE is_active = 'Y' |
| 查找锁定账户 | is_lock | WHERE is_lock = 'Y' |
| 查找初始密码用户 | is_initial_passwd | WHERE is_initial_passwd = 'Y' |
| 按组织查用户 | organization_id | WHERE organization_id = 'XXX' |
| 查找近期登录的用户 | last_login_date | WHERE last_login_date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) |
| 查找采购员用户 | user_type | WHERE user_type = '采购员' |
