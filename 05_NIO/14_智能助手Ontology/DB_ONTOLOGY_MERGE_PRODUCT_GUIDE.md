---
created: '2026-07-24'
tags: [NIO, AI]
---

---tags: [NIO]
created: 2026-07-08
updated: 2026-07-22
status: draft
---
> [!summary] 基于数据库表补充 Ontology 的实现说明（产品视角）
> - **核心**：整个流程可以理解成两步： 1. **从数据库里，把所有表和字段的结构信息“抓出来”**，整理成一份统一的“数据库结构说明书”（JSON）。 2. **把这份“数据库结构说明书”和我们的“代码实体清单（


# 基于数据库表补充 Ontology 的实现说明（产品视角）

> 目标：在原来“只看代码”的 Ontology 基础上，把“数据库表”的信息也融合进来，让每个业务实体既有代码视角，又有数据库视角。

---

## 一句话概览

整个流程可以理解成两步：

1. **从数据库里，把所有表和字段的结构信息“抓出来”**，整理成一份统一的“数据库结构说明书”（JSON）。
2. **把这份“数据库结构说明书”和我们的“代码实体清单（Ontology CSV）对齐、合并”**，给每个实体补上它对应的数据库表、字段、外键信息。

对应脚本：

- 第一步：`scripts/import/batch_ddl_extractor.py`
- 第二步：`scripts/processing/merge_db_ontology.py`

---

## 第一步：从数据库里“抓”出所有表结构

对应脚本：`batch_ddl_extractor.py`  
可以理解为一个“数据库勘探机器人”。

### 它做了什么？

- 连接到指定的 MySQL 数据库集群（例如所有以 `gps_%`、`srm_gps_%` 开头的库）。
- 扫描这些库里的所有业务表。
- 对每张表记录下：
  - 表名（例如 `gps_order_purchase_order`）
  - 表的中文注释
  - 每一列的：
    - 字段名（如 `material_code`、`factory_code`）
    - 类型（字符串 / 数字 / 时间等）
    - 是否主键、是否唯一
    - 字段注释
  - 表上的索引（用于加速查询）
  - 表之间的外键关系（谁引用了谁）

### 它产出的东西长什么样？

- 最终输出一个 JSON 文件，比如：

  ```bash
  DB-Ontology/gps_ontology.json
  ```

- 你可以把它理解为：**“所有数据库表 + 字段 + 外键 的结构化说明书”**。
- 后续所有“基于数据库的补充”都只依赖这份 JSON，不需要每次都连数据库。

### 如何运行？

```bash
cd scripts

python import/batch_ddl_extractor.py \ 
  --host <db_host> \ 
  --port 3306 \ 
  --user <db_user> \ 
  --password <db_password> \ 
  --output DB-Ontology/gps_ontology.json
```

> 运行之后，就会在 `DB-Ontology/` 目录下生成包含所有库和表结构的 JSON 文件。

---

## 第二步：把“数据库结构”补充进“代码实体 Ontology”

对应脚本：`processing/merge_db_ontology.py`  
可以理解为一个“实体 ↔ 数据库表 对齐与融合”的工具。

### 输入有两份“清单”

1. **清单 A：代码实体清单（来自代码扫描）**
   
   - 文件：`all_entities.csv`
   - 内容：
     - 每一行代表一个实体，比如 `PurchaseOrderEntity`、`TtSapBomEntity` 等。
     - 字段包括：实体名、描述、包名、属性列表、分层信息（L1/L2/L3）等。

2. **清单 B：数据库结构清单（来自上一步 JSON）**
   
   - 文件夹：`DB-Ontology/` 下的一批 JSON 文件。
   - 内容：
     - 每个数据库（如 `srm_gps_order_test`）有哪些表。
     - 每张表有哪些字段、索引、外键、注释等。

> 这一步的任务，就是：**帮每个实体，找到它“最像”的那张数据库表，并把表的信息补充到实体里**。

---

## 实体是如何和表“对上号”的？

脚本内部做的是一种“多维度打分”的匹配逻辑，可以类比为：**像人肉对表，但更机械、更一致**。

### 1. 名字是否相似

- 先对名字做“净化”：
  - 表名：去掉前缀（如 `gps_`, `gps_order_`），去掉下划线，再转小写。
    - 例：`gps_order_purchase_order` → `purchaseorder`
  - 实体名：去掉 `Entity`、`Aggregate` 等后缀，再转小写。
    - 例：`PurchaseOrderEntity` → `purchaseorder`
- 如果净化后刚好一样，就认为非常可能是一对，给最高分。

### 2. 拆分关键词，看是否在说同一件事

- 把名字按驼峰 / 下划线拆成单词：
  - `PurchaseOrderEntity` → `purchase` + `order`
  - `gps_order_purchase_order` → `order` + `purchase`
- 关键词交集越多，说明越像，分数越高。

### 3. 描述和注释是否匹配

- 如果：
  - 实体有中文描述（类注释），比如“采购订单主表”；
  - 表有中文注释；
- 脚本会计算两段文字的相似度，相似度越高，分数越高。

### 4. 字段是否对得上

- 使用实体的属性名和表的字段名做一次“交集”：
  - 例如实体有 `materialCode`，表有 `material_code`，这类会被认为是同一含义。
- 字段对得上的越多，分数越高。

### 5. 是否命中一些“常见业务词”

- 脚本内置了一些业务同义词，例如：
  - `po` ↔ `purchaseorder`
  - `pr` ↔ `purchaserequest`
  - `vendor` ↔ `supplier`
  - `material` ↔ `item`
- 如果实体名和表名都涉及这些关键词，会额外加分。

### 6. 最终选取规则

- 对每个实体，遍历所有表，算出一个“匹配分数”。
- 选出**分数最高的那张表**作为“候选匹配对象”。
- 同时设置了**最低分数门槛**（例如 8 分）：
  - 分数不够，就宁可不匹配，也不乱连，避免脏数据。

---

## 给实体补充了哪些数据库信息？

一旦某个实体找到了对应的表，脚本会在实体那一行补充一批以 `db_` 开头的新字段。主要包括：

### 1. 表级别信息

- `db_table_name`：对应的表名。
- `db_database_name`：表所在的数据库名。
- `db_columns_count`：表的列数量。
- `db_indexes_count`：表上索引的数量。
- `db_foreign_keys_count`：表的外键数量。
- `db_table_comment`：表的中文注释。
- `db_source_file`：这张表来自哪个 JSON 文件（方便追溯数据源）。

### 2. 字段级别摘要

- `db_columns`：
  - 把前 10 个字段做成简短描述串，例如：
  - `material_code:varchar(物料编码); factory_code:varchar(工厂代码); ...`

- `db_foreign_keys`：
  - 把前 5 条外键关系列出来，例如：
  - `gps_order_purchase_order(purchase_order_id); gps_pr_purchase_request(purchase_request_id)`

如果某个实体暂时没有匹配到任何表，这些字段会留空，便于后续人工检查和补充。

---

## 输出结果与可视化

### 1. 融合后的实体 CSV

- 输出文件示例：`all_entities_merged.csv`
- 和原来的 `all_entities.csv` 类似，只是多出了几列 `db_...` 字段。
- 产品 / 数据同事可以用 Excel 打开，做一些典型分析：
  - 按 `db_table_name` 是否为空，筛选“已经对上号”的实体。
  - 从实体反查它落在哪个库、哪张表。
  - 看哪些实体目前还没有数据库映射，作为后续优化点。

### 2. 实体–表映射报告（Markdown）

- 输出文件示例：`entity_table_mapping_report.md`
- 内容包括：
  - 总实体数、总表数、成功匹配的“实体–表”对数；
  - 按表格列出每一对匹配：实体名、表名、所在数据库、列数、索引数、外键数；
  - 列出前若干个“未匹配的实体”和“未匹配的表”，便于人工补充业务知识。

---

## 端到端使用流程（从数据库到增强后的 Ontology）

### 第一步：从数据库抽取表结构

```bash
cd scripts

python import/batch_ddl_extractor.py \ 
  --host <db_host> \ 
  --port 3306 \ 
  --user <db_user> \ 
  --password <db_password> \ 
  --output DB-Ontology/gps_ontology.json
```

> 产出：一份描述所有相关数据库和表结构的 JSON 文件，存放在 `DB-Ontology/` 目录下。

### 第二步：从代码侧生成实体清单（已存在的能力）

- 由代码扫描工具生成 `all_entities.csv`，其中每一行代表一个业务实体。
- 这部分你已经在使用，不需要改动。

### 第三步：用数据库信息补充实体 Ontology

```bash
cd scripts

python processing/merge_db_ontology.py \ 
  --db-ontology-dir ../DB-Ontology \ 
  --entities-csv all_entities.csv \ 
  --output all_entities_merged.csv \ 
  --report entity_table_mapping_report.md
```

> 产出：
> - `all_entities_merged.csv`：实体 + 数据库信息的融合版本；
> - `entity_table_mapping_report.md`：实体与表之间的匹配报告。

---

## 对产品/业务的价值总结

- **打通“代码实体”和“数据库表”**
  - 过去只有“代码视角”的 Ontology，现在补齐了“数据库视角”。
  - 可以从一个业务实体，直接看到它落在哪个数据库、哪张表。

- **支持跨层分析和排查**
  - 从业务概念 → 对应表 → 真实数据，形成完整链路。
  - 方便做“某个业务实体在不同系统/库里的落地情况”对比分析。

- **为后续优化打基础**
  - 可以结合外键信息，进一步自动识别表之间的业务链路。
  - 结合字段、索引、数据量，可以评估某些查询场景的性能风险。


---

> 回到 → [[NIO|🚗 蔚来]]
