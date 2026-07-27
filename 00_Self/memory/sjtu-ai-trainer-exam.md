---
created: 2026-07-27
updated: 2026-07-27
tags: [Self, AI]
---

# 人工智能培训师三级 — 备考记忆

> 上海交大「人工智能训练师三级」考试备考资料，位于 `07_SJTU/04_人工智能培训师/`

## 题库结构

共 25 道实操题，分 5 个模块：

| 模块 | 编号 | 题数 | 时长 | 题型 | 核心能力 |
|------|------|------|------|------|----------|
| 1.1 | 1.1.1–1.1.5 | 5 | 30min | 编程+截图 | pandas 分组统计 |
| 1.2 | 1.2.1–1.2.5 | 5 | 30min | 纯文档 | 问题诊断+方案设计 |
| 2.1 | 2.1.1–2.1.5 | 5 | 20min | 编程+文档 | 数据清洗+标注规范 |
| 2.2 | 2.2.1–2.2.5 | 5 | 20min | 编程+文档 | 模型训练+评估对比 |
| 3.2 | 3.2.1–3.2.5 | 5 | 20min | 编程+文档 | ONNX 推理+交互设计 |

## 关键文件

- **MOC**：[[07_SJTU/04_人工智能培训师/人工智能培训师考试题库MOC]] — 25题全索引，含内容凝练+知识点+易错点
- **参考资料**：`AI课程操作答案整理.pdf`、`理论知识详解.pdf`、模拟平台 ZIP
- **题库文件夹**：`07_SJTU/04_人工智能培训师/考试题库/`

## 技术栈

- **数据处理**：pandas（read_csv/Excel, groupby, cut, value_counts, get_dummies）
- **预处理**：StandardScaler（标准化）/ MinMaxScaler（归一化）/ LabelEncoder
- **模型**：LinearRegression / LogisticRegression / RandomForest / XGBoost / DecisionTree
- **图像推理**：ONNX Runtime（ResNet, MNIST, 表情识别, 花朵检测, 人脸检测）
- **评估**：MSE, MAE, R², accuracy, softmax

## 易错点（实战总结）

1. `Image.ANTIALIAS` → Pillow 10.0+ 用 `Image.LANCZOS`
2. Excel 文件用 `pd.read_excel()`，不是 `read_csv()`
3. GBK 编码需加 `encoding='gbk'`
4. ONNX 输入必须 `float32`
5. 灰度图 `expand_dims` 两次，RGB 一次
6. `get_dummies` + 线性模型 → `drop_first=True`
7. CSV 保存永远 `index=False`
8. 文件夹命名：准考证号 + 身份证后六位

## MOC 需求备忘

> [!note] Claire 对 MOC 的要求（2026-07-27）
> MOC 不能只是索引列表，需要包含：
> - 每个下属文件/内容的**总结凝练**
> - Callout 形式的知识点、易错点、答题框架
> - 横向知识网络（API 速查、模型选型、评估指标）
> - 学习路径建议
