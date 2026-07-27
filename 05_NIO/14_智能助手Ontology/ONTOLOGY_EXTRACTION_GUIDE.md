---
created: '2026-07-24'
tags: [NIO, AI]
---

---tags: [NIO]
created: 2026-07-08
updated: 2026-07-22
status: draft
---
> [!summary] GPS 本体（Ontology）提取与知识图谱构建完整指南
> - **核心**：1. [概述](#概述) 2. [环境准备](#环境准备) 3. [完整工作流程](#完整工作流程) 4. [详细步骤说明](#详细步骤说明) 5. [输入输出文件说明](#输入输出文件说明) 6. 


# GPS 本体（Ontology）提取与知识图谱构建完整指南

## 📋 目录

1. [概述](#概述)
2. [环境准备](#环境准备)
3. [完整工作流程](#完整工作流程)
4. [详细步骤说明](#详细步骤说明)
5. [输入输出文件说明](#输入输出文件说明)
6. [常见问题与故障排除](#常见问题与故障排除)
7. [最佳实践建议](#最佳实践建议)

---

## 概述

本指南介绍如何从 GPS（Global Procurement System）代码库中提取实体（Entity）和业务关系，构建完整的本体（Ontology）结构，并导入到 Neo4j 图数据库中进行知识图谱构建。

### 主要目标

- 从 Java 代码中提取所有实体类及其属性
- 识别实体间的业务关系（领域事件、工作流触发、状态转换等）
- 融合数据库 DDL 信息，完善实体属性
- 构建层次化的实体分类（L1/L2/L3）
- 导入 Neo4j 图数据库，支持知识图谱查询和分析

---

## 环境准备

### 1. Python 环境

- **Python 版本**: >= 3.9
- **推荐**: Python 3.9+

### 2. 安装依赖

```bash
cd scripts
pip install -r requirements.txt
```

### 3. 依赖说明

主要依赖包：
- `mysql-connector-python>=8.0.0` - 用于连接 MySQL 数据库提取 DDL
- `neo4j>=5.0.0` - 用于连接 Neo4j 图数据库

可选依赖（用于可视化）：
- `networkx` - 图结构分析
- `pyvis` - 交互式 HTML 可视化
- `matplotlib` - 静态图片生成

```bash
# 安装可选依赖
pip install networkx pyvis matplotlib
```

### 4. Neo4j 数据库配置

确保已准备好 Neo4j 数据库实例，并获取以下信息：
- Neo4j URI（如：`bolt://neo4j-test.nioint.com:7687`）
- 用户名
- 密码

### 5. MySQL 数据库配置（可选）

如果需要提取数据库 DDL 信息，需要 MySQL 数据库连接信息：
- 主机地址
- 端口
- 数据库名
- 用户名
- 密码

---

## 完整工作流程

```
步骤1: 提取实体
    ↓
步骤2: 提取业务关系
    ↓
步骤3: [可选] 细化关系类型
    ↓
步骤4: 融合实体和关系
    ↓
步骤5: [可选但建议] 中文推理
    ↓
步骤6: 提取数据库 DDL
    ↓
步骤7: 融合数据库本体
    ↓
步骤8: 实体分类（L1/L2/L3）
    ↓
步骤9: 导入 Neo4j
    ↓
步骤10: 检查导入结果
    ↓
步骤11: [可选] 清理自环关系
    ↓
步骤12: 验证场景
```

---

## 详细步骤说明

### 步骤 1: 提取所有实体

**脚本**: `core/extract_all_modules.py`

**功能**: 批量扫描所有 GPS 模块，提取 Entity 和 Aggregate 类定义的实体及其属性。

**使用方法**:
```bash
cd scripts
python -m core.extract_all_modules \
  --root /path/to/GPS \
  --output all_entities.csv
```

**参数说明**:
- `--root`: GPS 代码库根目录路径（必须）
- `--output`: 输出 CSV 文件路径（默认：`all_entities.csv`）

**输出文件**:
- `all_entities.csv` - 包含所有实体的 CSV 文件，字段包括：
  - `name`: 实体名称
  - `normalizedName`: 标准化名称
  - `layer`: 实体层级
  - `package`: Java 包路径
  - `file`: 源文件路径
  - `description`: 实体描述
  - `attributes`: 属性列表（JSON 格式）

**注意事项**:
- 脚本会自动扫描所有 GPS 模块的 domain 目录
- 支持 Entity 和 Aggregate 两种类型的类
- 提取的属性包括字段名、类型、注释等信息

---

### 步骤 2: 提取业务关系

**脚本**: `core/extract_business_relationships_enhanced.py`

**功能**: 从代码中提取实体间的业务关系，包括：
- 领域事件（Domain Events）
- 工作流触发（Workflow Triggers）
- 状态转换（State Transitions）
- Service 方法调用
- Repository 查询

**使用方法**:
```bash
cd scripts
python -m core.extract_business_relationships_enhanced \
  --root /path/to/GPS \
  --output business_relationships.json
```

**参数说明**:
- `--root`: GPS 代码库根目录路径（必须）
- `--output`: 输出 JSON 文件路径（默认：`business_relationships.json`）

**输出文件**:
- `business_relationships.json` - 包含所有业务关系的 JSON 文件，格式：
  ```json
  [
    {
      "from": "purchaseorder",
      "to": "workflowtask",
      "type": "triggers_workflow",
      "source": "domain_events",
      "metadata": {...}
    }
  ]
  ```

**注意事项**:
- 关系提取基于代码模式匹配，可能存在误识别
- 建议后续通过人工审核或验证脚本进行校验

---

### 步骤 3: [可选] 细化关系类型

**脚本**: `processing/refine_relationship_types.py`

**功能**: 将步骤 2 提取的关系进一步细分，提供更精确的关系类型。

**使用方法**:
```bash
cd scripts
python -m processing.refine_relationship_types \
  --input business_relationships.json \
  --output business_relationships_refined.json
```

**参数说明**:
- `--input`: 输入关系 JSON 文件（默认：`business_relationships.json`）
- `--output`: 输出细化后的 JSON 文件（默认：`business_relationships_refined.json`）

**输出文件**:
- `business_relationships_refined.json` - 细化后的关系文件

**注意事项**:
- 此步骤为可选，但建议执行以获得更精确的关系类型
- 细化后的关系类型更有利于后续的知识图谱查询

---

### 步骤 4: 融合实体和关系

**脚本**: `processing/merge_entities_relationships.py`

**功能**: 将实体数据（CSV）和业务关系数据（JSON）进行融合，生成包含完整实体信息和关系信息的融合数据。

**使用方法**:
```bash
cd scripts
python -m processing.merge_entities_relationships \
  --entities all_entities.csv \
  --relationships business_relationships.json \
  --output-dir . \
  --format both
```

**参数说明**:
- `--entities`: 实体 CSV 文件路径（默认：`all_entities.csv`）
- `--relationships`: 关系 JSON 文件路径（默认：`business_relationships.json`）
- `--output-dir`: 输出目录（默认：当前目录）
- `--format`: 输出格式，可选值：
  - `json`: 仅输出 JSON 格式
  - `csv`: 仅输出 CSV 格式
  - `both`: 同时输出 JSON 和 CSV 格式（默认）

**输出文件**:
- `merged_entities_relationships.json` - 完整的融合数据（JSON 格式）
- `entities_with_business_relationships.csv` - 增强的实体 CSV 文件
- `business_relationships_enriched.csv` - 增强的关系 CSV 文件

**详细说明**: 参考 `MERGE_ENTITIES_RELATIONSHIPS.md`

**注意事项**:
- 融合过程会进行实体名称匹配，未匹配的实体会在统计信息中显示
- 建议检查统计信息，确认匹配率是否合理

---

### 步骤 5: [可选但建议] 中文推理

**功能**: 为实体和属性添加中文含义推理，方便中文环境下的知识图谱查询和分析。

#### 5.1 推理实体和属性的中文含义

**脚本**: `processing/infer_entity_attributes_meaning.py`

**使用方法**:
```bash
cd scripts
python -m processing.infer_entity_attributes_meaning \
  --input all_entities.csv \
  --output entity_attributes_chinese.json
```

**输出文件**:
- `entity_attributes_chinese.json` - 包含中文推理结果的 JSON 文件

#### 5.2 融合中文推理结果

**脚本**: `processing/merge_chinese_inference.py`

**使用方法**:
```bash
cd scripts
python -m processing.merge_chinese_inference \
  --entities all_entities.csv \
  --chinese entity_attributes_chinese.json \
  --output all_entities_with_chinese.csv
```

**输出文件**:
- `all_entities_with_chinese.csv` - 包含中文推理结果的实体 CSV 文件

**注意事项**:
- 中文推理基于命名模式和常见业务术语，可能存在偏差
- 建议人工审核关键实体的中文含义

---

### 步骤 6: 提取数据库 DDL

**脚本**: `import/batch_ddl_extractor.py`

**功能**: 批量提取核心数据库和表的关键信息，包括：
- 主键（Primary Key）
- 索引（Index）
- 外键（Foreign Key）
- 字段注释（Comments）

**使用方法**:
```bash
cd scripts
python -m import.batch_ddl_extractor \
  --host localhost \
  --port 3306 \
  --database gps_db \
  --user root \
  --password your_password \
  --output db_ontology.json
```

**参数说明**:
- `--host`: MySQL 主机地址
- `--port`: MySQL 端口（默认：3306）
- `--database`: 数据库名
- `--user`: 用户名
- `--password`: 密码
- `--output`: 输出 JSON 文件路径（默认：`db_ontology.json`）

**输出文件**:
- `db_ontology.json` - 包含数据库结构信息的 JSON 文件

**注意事项**:
- 需要数据库访问权限
- 建议只提取核心业务表，避免数据量过大

---

### 步骤 7: 融合数据库本体

**脚本**: `processing/merge_db_ontology.py`

**功能**: 利用关键词匹配和语义相似度推理，将提取的数据库实体和外键等信息融合进主实体 CSV 文件。

**使用方法**:
```bash
cd scripts
python -m processing.merge_db_ontology \
  --entities all_entities.csv \
  --db-ontology db_ontology.json \
  --output all_entities_merged.csv
```

**参数说明**:
- `--entities`: 实体 CSV 文件路径（默认：`all_entities.csv`）
- `--db-ontology`: 数据库本体 JSON 文件路径（默认：`db_ontology.json`）
- `--output`: 输出 CSV 文件路径（默认：`all_entities_merged.csv`）

**输出文件**:
- `all_entities_merged.csv` - 融合数据库信息后的实体 CSV 文件

**注意事项**:
- 匹配算法基于名称相似度，可能存在误匹配
- 建议检查匹配结果，手动调整关键实体的匹配

---

### 步骤 8: 实体分类（L1/L2/L3）

**脚本**: `processing/reclassify_l1_core_entities.py`

**功能**: 对实体进行 L1/L2/L3 分层分类，识别核心业务实体。

**使用方法**:
```bash
cd scripts
python -m processing.reclassify_l1_core_entities \
  --input all_entities_merged.csv \
  --output all_entities_reclassified.csv
```

**参数说明**:
- `--input`: 输入实体 CSV 文件路径
- `--output`: 输出分类后的 CSV 文件路径

**输出文件**:
- `all_entities_reclassified.csv` - 包含 L1/L2/L3 分类的实体 CSV 文件

**分类标准**:
- **L1-Core**: 核心业务实体（如：采购订单、合同、供应商等）
- **L2-Supporting**: 支撑实体（如：订单明细、合同条款等）
- **L3-Auxiliary**: 辅助实体（如：日志、配置等）

**注意事项**:
- 分类规则可能需要根据实际业务调整
- 建议根据业务重要性手动调整核心实体的分类

---

### 步骤 9: 导入 Neo4j

**脚本**: `import/import_ontology_to_neo4j.py`

**功能**: 将融合后的实体和关系数据导入到 Neo4j 图数据库。

**使用方法**:
```bash
cd scripts
python -m import.import_ontology_to_neo4j \
  --neo4j-uri bolt://neo4j-test.nioint.com:7687 \
  --neo4j-user gps_ontology_s \
  --neo4j-password your_password \
  --entities-csv all_entities_reclassified.csv \
  --relationships-json business_relationships.json
```

**参数说明**:
- `--neo4j-uri`: Neo4j 连接 URI（必须）
- `--neo4j-user`: Neo4j 用户名（必须）
- `--neo4j-password`: Neo4j 密码（必须）
- `--entities-csv`: 实体 CSV 文件路径（默认：`all_entities.csv`）
- `--relationships-json`: 关系 JSON 文件路径（默认：`business_relationships.json`）
- `--clear-db`: 是否清空数据库（可选，谨慎使用）

**注意事项**:
- 导入前建议备份 Neo4j 数据库
- 首次导入建议使用 `--clear-db` 清空旧数据
- 导入过程可能需要较长时间，取决于数据量

**详细说明**: 参考 `ONTOLOGY_IMPORT_TO_NEO4J_GUIDE.md`

---

### 步骤 10: 检查导入结果

**脚本**: `import/check_import_results.py`

**功能**: 检查 Neo4j 数据库中的导入结果，验证实体和关系的数量。

**使用方法**:
```bash
cd scripts
python -m import.check_import_results \
  --neo4j-uri bolt://neo4j-test.nioint.com:7687 \
  --neo4j-user gps_ontology_s \
  --neo4j-password your_password
```

**参数说明**:
- `--neo4j-uri`: Neo4j 连接 URI（必须）
- `--neo4j-user`: Neo4j 用户名（必须）
- `--neo4j-password`: Neo4j 密码（必须）

**输出**:
- 实体数量统计
- 关系数量统计
- 按类型分组统计
- 异常情况报告

---

### 步骤 11: [可选] 清理自环关系

**脚本**: `import/clean_self_relations.py`

**功能**: 清理 Neo4j 中可能存在的自环关系（实体指向自己的关系）。

**使用方法**:
```bash
cd scripts
python -m import.clean_self_relations \
  --neo4j-uri bolt://neo4j-test.nioint.com:7687 \
  --neo4j-user gps_ontology_s \
  --neo4j-password your_password \
  --dry-run  # 先预览，不实际删除
```

**参数说明**:
- `--neo4j-uri`: Neo4j 连接 URI（必须）
- `--neo4j-user`: Neo4j 用户名（必须）
- `--neo4j-password`: Neo4j 密码（必须）
- `--dry-run`: 预览模式，不实际删除（建议先使用）

**注意事项**:
- 某些自环关系可能是业务需要的（如：树形结构）
- 建议先使用 `--dry-run` 预览，确认后再删除

---

### 步骤 12: 验证场景

**脚本**: `utils/validate_scenarios.py`

**功能**: 验证导入结果是否符合各种业务场景预期，检查关键业务路径是否存在。

**使用方法**:
```bash
cd scripts
python -m utils.validate_scenarios \
  --neo4j-uri bolt://neo4j-test.nioint.com:7687 \
  --neo4j-user gps_ontology_s \
  --neo4j-password your_password \
  --scenarios scenarios.json
```

**参数说明**:
- `--neo4j-uri`: Neo4j 连接 URI（必须）
- `--neo4j-user`: Neo4j 用户名（必须）
- `--neo4j-password`: Neo4j 密码（必须）
- `--scenarios`: 场景定义 JSON 文件路径（默认：`scenarios.json`）

**输出文件**:
- 验证报告（控制台输出）
- 详细的验证结果（JSON 格式）

**场景定义示例** (`scenarios.json`):
```json
[
  {
    "name": "采购申请到采购订单",
    "description": "验证采购申请可以生成采购订单",
    "path": [
      {"from": "purchaserequest", "to": "purchaseorder", "type": "generates"}
    ]
  }
]
```

---

## 本地可视化工具

**脚本**: `utils/visualize_entities_with_relationships.py`

**功能**: 将本地融合后的 CSV 实体文件生成可视化的 HTML，用于感观验证。

**使用方法**:
```bash
cd scripts
python -m utils.visualize_entities_with_relationships \
  --csv all_entities_reclassified.csv \
  --output entities_visualization.html
```

**参数说明**:
- `--csv`: 实体 CSV 文件路径（默认：`all_entities.csv`）
- `--output`: 输出 HTML 文件路径（默认：`entities_visualization.html`）

**输出文件**:
- `entities_visualization.html` - 交互式可视化图表（可在浏览器中打开）

**注意事项**:
- 需要安装 `pyvis` 或 `networkx` 库
- 数据量较大时，可视化可能较慢

---

## 输入输出文件说明

### 核心输入文件

| 文件 | 说明 | 来源 |
|------|------|------|
| GPS 代码库 | Java 源代码 | 项目代码库 |
| MySQL 数据库 | 数据库结构 | 生产/测试数据库 |

### 中间文件

| 文件 | 说明 | 生成步骤 |
|------|------|----------|
| `all_entities.csv` | 所有实体列表 | 步骤 1 |
| `business_relationships.json` | 业务关系列表 | 步骤 2 |
| `business_relationships_refined.json` | 细化后的关系 | 步骤 3（可选） |
| `merged_entities_relationships.json` | 融合后的完整数据 | 步骤 4 |
| `entity_attributes_chinese.json` | 中文推理结果 | 步骤 5.1（可选） |
| `all_entities_with_chinese.csv` | 包含中文的实体 | 步骤 5.2（可选） |
| `db_ontology.json` | 数据库本体 | 步骤 6（可选） |
| `all_entities_merged.csv` | 融合数据库后的实体 | 步骤 7（可选） |
| `all_entities_reclassified.csv` | 分类后的实体 | 步骤 8 |

### 最终输出

- Neo4j 图数据库中的实体和关系节点
- 可视化 HTML 文件（可选）

---

## 常见问题与故障排除

### 1. 实体提取不完整

**问题**: 某些实体没有被提取到

**解决方案**:
- 检查实体类命名是否符合规范（以 `Entity` 或 `Aggregate` 结尾）
- 确认实体类位于正确的 domain 目录下
- 检查脚本中的模块路径配置是否正确

### 2. 关系提取误识别

**问题**: 提取的关系存在误识别

**解决方案**:
- 使用 `refine_relationship_types.py` 进行关系细化
- 手动审核关键业务关系
- 使用验证脚本检查关系合理性

### 3. Neo4j 导入失败

**问题**: 导入 Neo4j 时出现连接错误或超时

**解决方案**:
- 检查 Neo4j 连接信息是否正确
- 确认网络连接正常
- 检查 Neo4j 数据库是否可用
- 尝试分批导入（修改脚本支持分批）

### 4. 实体匹配率低

**问题**: 融合时实体匹配率较低

**解决方案**:
- 检查实体名称标准化规则
- 手动调整关键实体的名称
- 使用更灵活的匹配算法（修改脚本）

### 5. 数据库连接失败

**问题**: 连接 MySQL 数据库失败

**解决方案**:
- 检查数据库连接信息
- 确认数据库用户权限
- 检查网络连接和防火墙设置

---

## 最佳实践建议

### 1. 数据备份

- 在导入 Neo4j 前，备份现有数据
- 保留所有中间文件，方便问题排查和重新处理

### 2. 增量更新

- 对于大型项目，建议采用增量更新策略
- 只处理变更的模块，减少处理时间

### 3. 质量检查

- 在每个关键步骤后进行检查
- 使用验证脚本确保数据质量
- 人工审核核心业务实体和关系

### 4. 版本管理

- 对关键脚本和配置文件进行版本管理
- 记录每次处理的参数和结果

### 5. 性能优化

- 对于大数据量，考虑分批处理
- 使用多线程或异步处理提高效率
- 优化数据库查询和 Neo4j 导入

### 6. 文档维护

- 及时更新文档，记录变更和问题
- 记录业务规则和分类标准
- 维护常见问题清单

---

## 相关文档

- `guide.md` - 快速使用指南
- `MERGE_ENTITIES_RELATIONSHIPS.md` - 实体关系融合详细说明
- `ONTOLOGY_IMPORT_TO_NEO4J_GUIDE.md` - Neo4j 导入指南
- `README_DDL_EXTRACTOR.md` - DDL 提取器说明

---

## 技术支持

如有问题或建议，请联系项目维护团队。


---

> 回到 → [[NIO|🚗 蔚来]]
