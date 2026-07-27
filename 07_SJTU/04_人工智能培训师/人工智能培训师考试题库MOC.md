---
created: 2026-07-27
updated: 2026-07-27
tags: [SJTU, AI, MOC]
---

# 人工智能培训师三级 — 考试题库 MOC

> [!info] 考试全景
> - **级别**：人工智能训练师（三级）
> - **题型**：Python 编程实操 + 答题卷，共 25 道
> - **时间**：每题 20~30 min
> - **技术栈**：pandas / scikit-learn / ONNX Runtime / PyTorch
> - **考试形式**：桌面端操作，结果截图 + 代码文件 + 答题卷
> - **参考资料**：[[AI课程操作答案整理.pdf]] | [[理论知识详解.pdf]] | [[人工智能培训师三级考试平台模拟界面–新.zip]]

---

## 一、模块总览

| 模块 | 编号 | 主题 | 核心能力 | 题型 |
|------|------|------|----------|------|
| 1.1 | 1.1.1–1.1.5 | 业务数据处理流程设计 | 数据统计、分组分析 | 编程+截图 |
| 1.2 | 1.2.1–1.2.5 | 业务模块效果优化 | 问题诊断、方案设计 | 纯文档 |
| 2.1 | 2.1.1–2.1.5 | 数据清洗与标注流程设计 | 数据预处理全链路 | 编程+文档 |
| 2.2 | 2.2.1–2.2.5 | 模型开发与测试 | 训练、评估、对比 | 编程+文档 |
| 3.2 | 3.2.1–3.2.5 | 人机交互流程设计 | ONNX推理、交互设计 | 编程+文档 |

---

## 二、1.1 业务数据处理流程设计（5 题 · 30 min）

> [!abstract] 模块共性
> **考什么**：读取 CSV → pandas 分组统计 → 截图保存结果
>
> **通用代码模式**：
> ```python
> data = pd.read_csv('xxx.csv')
> data['新列'] = np.where(条件, '是', '否')   # 条件标记
> data.groupby('分组列')['统计列'].agg(['mean', 'count'])  # 分组统计
> pd.cut(data['列'], bins=[...], labels=[...])  # 分箱
> data['列'].value_counts()  # 频次统计
> ```
>
> **得分关键**：代码补全 + 截图命名正确 + 文件夹命名"准考证号+身份证后六位"

### [[1.1.1 智能医疗系统中的业务数据处理流程设计|1.1.1 智能医疗系统]]

| 维度 | 内容 |
|------|------|
| 场景 | 医疗机构引入智能诊断系统 |
| 数据集 | patient_data.csv（PatientID, Age, BMI, BloodPressure, Cholesterol, DaysInHospital） |
| 核心操作 | `np.where` 高/低风险标记 → `value_counts` 统计 → `pd.cut` BMI 分箱 → `groupby` 年龄分组 |

> [!tip] 知识点
> - **风险分级**：住院天数 > 7 天 = 高风险（业务规则定义）
> - **分箱技巧**：`pd.cut(data['BMI'], bins=[0,18.5,24,28,inf], labels=['偏瘦','正常','超重','肥胖'], right=False)`
> - **占比计算**：`risk_counts['高风险患者'] / len(data)`

### [[1.1.2 智能农业系统中的业务数据采集和处理流程设计|1.1.2 智能农业系统]]

| 维度 | 内容 |
|------|------|
| 场景 | 农田传感器实时监控 |
| 数据集 | sensor_data.csv（SensorID, Timestamp, SensorType, Value, Location） |
| 核心操作 | 传感器类型统计 → 按位置分组温湿度 → 异常值标记（温度<-10/>50，湿度<0/>100）→ 缺失值前向填充 |

> [!tip] 知识点
> - **缺失值填充**：`data.fillna(method='ffill')`（用前面的值填），如果前面没有则 `bfill`（用后面的值）
> - **异常值处理**：先标记再统计，再删除或替换
> - **保存**：`cleaned_sensor_data.csv`，不含额外索引 `index=False`

### [[1.1.3 金融机构信用评估系统中的业务数据审核流程设计|1.1.3 信用评估系统]]

| 维度 | 内容 |
|------|------|
| 场景 | 金融机构信用风险预测 |
| 数据集 | credit_data.csv（CustomerID, Name, Age, Income, LoanAmount, LoanTerm, CreditScore, Default, TransactionHistory） |
| 核心操作 | 完整性审核（缺失值+重复值）→ 合理性审核（年龄18-70、收入>2000、贷款<收入5倍、信用分300-850）→ 标记异常 → 删除 |

> [!tip] 知识点
> - **三步审核法**：完整性（缺失/重复）→ 合理性（业务规则）→ 一致性（类型/格式）
> - **条件筛选**：`data[data['Age'].between(18,70) & (data['Income']>2000)]`
> - **多条件标记**：逐列生成 `is_xxx_valid` 布尔列，合并为 `is_valid`

### [[1.1.4 电商平台用户行为分析系统的数据采集与处理流程设计|1.1.4 电商平台]]

| 维度 | 内容 |
|------|------|
| 场景 | 电商平台用户行为分析 |
| 数据集 | user_behavior_data.csv（UserID, UserName, Age, Gender, Location, LastLogin, PurchaseAmount, PurchaseCategory, ReviewScore, LoginFrequency） |
| 核心操作 | 数据加载 → 缺失值删除 → 类型转换 → 异常值过滤 → **Z-score 标准化** → 分组统计 |

> [!tip] 知识点
> - **手动标准化**：`data['PurchaseAmount'] = (data['PurchaseAmount'] - mean) / std`
> - **类型转换**：`.astype(int)` / `.astype(float)`
> - **分箱统计**：年龄段 18-25, 26-35, 36-45, 46-55, 56-65, 65+

### [[1.1.5 智能交通系统的数据采集、处理和审核流程设计|1.1.5 智能交通系统]]

| 维度 | 内容 |
|------|------|
| 场景 | 交通流量预测和拥堵预警 |
| 数据集 | vehicle_traffic_data.csv（VehicleID, DriverName, Age, Gender, Speed, TravelDistance, TravelTime, TrafficEvent） |
| 核心操作 | 采集 → 清洗（删除+类型转换+异常值）→ 合理性审核 → 统计（交通事件频次、性别分组、年龄分组） |

> [!tip] 知识点
> - **完整流程**：采集 → 清洗 → 审核 → 统计，四步缺一不可
> - **异常值范围**：年龄18-70、车速0-200、距离1-1000km、时间1-1440min
> - **多列分组聚合**：`data.groupby('Gender').agg({'Speed':'mean', 'TravelDistance':'mean', 'TravelTime':'mean'})`

---

## 三、1.2 业务模块效果优化（5 题 · 30 min）

> [!abstract] 模块共性
> **考什么**：纯文档作答，识别 AI 系统的用户痛点 → 设计优化方案
>
> **通用答题框架**：
> 1. **问题识别**：列 2-4 个用户最不满的问题 → 解释为什么不满 → 分析技术/流程原因
> 2. **优化方案**：技术优化 + 流程优化 + 交互优化 → 实施步骤 → 预期效果
>
> **得分关键**：问题要有「具体表现 + 用户影响 + 技术原因」三层，方案要有「步骤 + 团队协调 + 量化预期」

### [[1.2.1 顾客评价情感识别业务模块效果优化|1.2.1 情感识别优化]]

> [!note] 核心问题
> 1. **准确性不高**：误判导致商家错误调整策略 → 核心功能不可信
> 2. **响应速度慢**：实时场景延迟 → 用户放弃使用
>
> **优化方案**：BERT 微调 → Spark 分布式并行 → 缓存热门查询 → 轻量模型部署边缘端 → A/B 测试迭代

### [[1.2.2 老年人健康监测与管理服务业务模块效果优化|1.2.2 健康监测优化]]

> [!note] 核心问题
> 1. **心率数据不准**：运动伪影干扰 → 误诊/漏诊
> 2. **预警响应慢**：延迟 >10s + 高误报率 → 突发事件无法及时处理
> 3. **佩戴不适**：数据不连续 → 长期监测失效
>
> **优化方案**：多波长传感器+IMU → 自适应滤波(LMS)+小波变换 → LSTM+注意力机制 → 边缘计算本地预警 → 多级响应(弹窗/短信/紧急呼叫)

### [[1.2.3 智慧金融服务业务模块效果优化|1.2.3 智慧金融优化]]

> [!note] 核心问题
> 1. **数据准确性低**：余额延迟、交易缺失 → 财务信任崩塌
> 2. **异常预警慢**：盗刷检测延迟 → 资金损失
> 3. **个性化不足**：模板化建议 → 用户流失
>
> **优化方案**：Kafka 秒级同步 → LSTM+Attention 检测频率突变 → GNN 团伙欺诈图谱 → 强化学习动态阈值 → 灰度发布5%用户验证

### [[1.2.4 智能卖点生成系统业务模块效果优化|1.2.4 卖点生成优化]]

> [!note] 核心问题
> 1. **生成不准确**：产品特性误标 → 法律风险
> 2. **缺乏个性化**：模板化严重 → 同质化
> 3. **创意不足**：参数罗列 → 低转化率
>
> **优化方案**：DeepSeek 领域微调 + FAB 法则 → 用户画像驱动 → 交互式标签选择 → A/B 测试闭环 → 多语言(XLM-R) → Reward Model 偏好优化

### [[1.2.5 腾讯云智能数智人系统业务模块效果优化|1.2.5 数智人优化]]

> [!note] 核心问题
> 1. **响应不准确**：复杂问题答非所问
> 2. **无个性化**：不记历史、风格单一
> 3. **多轮对话弱**：上下文丢失、不主动追问
> 4. **表情生硬**：TTS 机械、形象僵硬
>
> **优化方案**：BERT+知识图谱语义理解 → Dialogue State Tracking → Emotional TTS + Unity Mecanim 表情引擎 → 对比学习增强区分 → 强化学习优化回复 → 多级兜底策略

---

## 四、2.1 数据清洗与标注流程设计（5 题 · 20 min）

> [!abstract] 模块共性
> **考什么**：完整的数据预处理 Pipeline + 编写清洗/标注规范文档
>
> **通用代码模式**：
> ```python
> data = pd.read_csv('xxx.csv')
> data = data.dropna()                          # 缺失值
> data = data.drop_duplicates()                 # 重复值
> data[numerical] = StandardScaler().fit_transform(data[numerical])  # 标准化
> # 或 MinMaxScaler（归一化）
> X = data[selected_features]                   # 特征选择
> y = data['target']                            # 标注目标变量
> X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
> data.to_csv('xxx_cleaned_data.csv', index=False)
> ```
>
> **必写文档**：数据清洗规范 + 数据标注规范（答题卷 docx）

### [[2.1.1 智慧交通中燃油效率模型的数据清洗和标注流程设计|2.1.1 燃油效率模型]]

| 维度 | 内容 |
|------|------|
| 数据集 | auto-mpg.csv（经典 UCI 数据集） |
| 目标变量 | mpg（燃油效率） |
| 特征 | cylinders, displacement, horsepower, weight, acceleration, model year, origin |
| 关键步骤 | horsepower 类型转换 → StandardScaler 标准化 → 特征选择 → 8:2 划分 |

> [!tip] 知识点
> - **数据清洗规范 8 步**：检测分析 → 确定范围 → 定义规则 → 数据抽取 → 清洗转换 → 结果核验 → 数据标识 → 数据加载
> - **标注规范 3 阶段**：前期准备（定义数据+规则+人力）→ 中期执行（创建+分发+回收）→ 结果输出（质检+格式+验收）
> - **`pd.to_numeric(errors='coerce')`**：无法转换的值变 NaN，再 dropna

### [[2.1.2 低碳生活行为影响因素数据清洗和标注流程设计|2.1.2 低碳行为分析]]

| 维度 | 内容 |
|------|------|
| 数据集 | 大学生低碳生活行为的影响因素数据集.xlsx（问卷数据，300+ 自变量） |
| 目标变量 | 低碳行为积极性 |
| 特征 | 性别、年级、生源地、月生活费 + 5 道问卷题 |
| 关键步骤 | Excel 加载 → 缺失值删除(记录行数) → 重复值删除(记录行数) → StandardScaler → 特征选择 |

> [!tip] 知识点
> - **`pd.read_excel()`** 读 xlsx，不是 read_csv
> - **记录处理行数**：`initial_row_count = data.shape[0]`，处理后对比
> - **问卷数据特点**：列名含中文长文本，特征选择时直接用列名字符串

### [[2.1.3 信用评分模型数据清洗和标注流程设计|2.1.3 信用评分模型]]

| 维度 | 内容 |
|------|------|
| 数据集 | Finance 数据集（15000 条，10 自变量 + 1 因变量 SeriousDlqin2yrs） |
| 目标变量 | SeriousDlqin2yrs（是否违约） |
| 关键步骤 | 箱线图异常值检测(IQR) → 重复值删除 → **归一化(MinMaxScaler)** → **特征工程**(IncomeToDebtRatio) |

> [!tip] 知识点
> - **IQR 异常值处理**：`Q1 - 1.5*IQR` 到 `Q3 + 1.5*IQR`，箱线图可视化 `matplotlib` 3行4列12子图
> - **MinMaxScaler vs StandardScaler**：前者归一化到 [0,1]，后者标准化到均值0方差1
> - **特征工程**：`data['IncomeToDebtRatio'] = data['LoanAmount'] / data['MonthlyIncome']`

### [[2.1.4 医疗研究数据清洗和标注设计|2.1.4 医疗研究数据]]

| 维度 | 内容 |
|------|------|
| 数据集 | medical_data.csv（GBK 编码，5441 条，含就诊/诊断日期） |
| 关键操作 | **日期格式规范化** → 列重命名 → 新增「诊断延迟」「病程」列 → MinMaxScaler → 柱状图+散点图 |

> [!tip] 知识点
> - **GBK 编码**：`pd.read_csv('xxx.csv', encoding='gbk')`，Windows 中文环境常见
> - **日期运算**：`(data['诊断日期'] - data['就诊日期']).dt.days`
> - **列重命名**：`data.rename(columns={'病人ID':'患者ID'}, inplace=True)`
> - **中文字体**：matplotlib 需指定 `fontproperties=fm.FontProperties(fname='simhei.ttf')`

### [[2.1.5 健康与营养咨询数据预处理与数据规范设计|2.1.5 健康咨询数据]]

| 维度 | 内容 |
|------|------|
| 数据集 | 健康咨询客户数据集.csv（英文列名，含空格） |
| 关键操作 | **列名去空格** → 缺失值处理 → 类型转换(to_numeric) → 重复值 → **LabelEncoder 归一化** → 饼图 → 训练测试划分 |

> [!tip] 知识点
> - **列名清洗**：`data.columns = data.columns.str.strip()`
> - **LabelEncoder**：将分类文本转为数值（如 fitness level → 0,1,2,3）
> - **饼图**：`exercise_frequency_counts.plot.pie(autopct='%1.1f%%', startangle=90)`
> - **缺失值填充**：`data.apply(lambda x: x.fillna(x.mode()[0]))`（用众数填充）

---

## 五、2.2 模型开发与测试（5 题 · 20 min）

> [!abstract] 模块共性
> **考什么**：加载数据 → 特征工程 → 模型训练 → 保存 pkl → 测试评估 → **对比优化模型** → 报告
>
> **通用代码模式**：
> ```python
> from sklearn.model_selection import train_test_split
> from sklearn.metrics import mean_squared_error, r2_score
> import pickle
>
> X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
> model.fit(X_train, y_train)
> pickle.dump(model, open('xxx_model.pkl', 'wb'))
> y_pred = model.predict(X_test)
> # 评估指标：MSE, R², MAE
> ```
>
> **必须输出**：模型 pkl + 结果 txt + 报告 txt + 优化后结果 txt + html

### [[2.2.1 智能信用评分Logistic回归模型开发与测试|2.2.1 Logistic 回归]]

| 维度 | 内容 |
|------|------|
| 数据集 | Finance 数据集（信用评分） |
| 模型 | **Logistic 回归** → 对比优化模型 |
| 评估 | 测试集得分 + 报告（性能评估+错误分析+改进建议） |

> [!tip] 知识点
> - **Logistic 回归**：分类模型，适合二分类（违约/不违约）
> - **Pipeline**：`Pipeline([('scaler', StandardScaler()), ('linreg', LinearRegression())])`
> - **模型持久化**：`pickle.dump(model, open('model.pkl', 'wb'))` → `pickle.load(open('model.pkl', 'rb'))`

### [[2.2.2|2.2.2 线性回归+随机森林]]

| 维度 | 内容 |
|------|------|
| 数据集 | auto-mpg.csv |
| 模型 | **LinearRegression** → **RandomForestRegressor**(n_estimators=100) |
| 核心 | Pipeline 标准化+回归 → 随机森林对比 → 两套结果+报告 |

> [!tip] 知识点
> - **随机森林**：`RandomForestRegressor(n_estimators=100, random_state=42)`，集成学习，通常优于单棵决策树
> - **对比维度**：训练集得分 vs 测试集得分 → 判断过拟合/欠拟合

### [[2.2.3|2.2.3 随机森林+XGBoost]]

| 维度 | 内容 |
|------|------|
| 数据集 | fitness analysis.csv |
| 模型 | **RandomForestRegressor** → **XGBRegressor**(n_estimators=100) |
| 特殊操作 | `pd.get_dummies()` 独热编码 → 年龄段提取 `lambda x: int(x.split(' ')[0])` |

> [!tip] 知识点
> - **get_dummies 独热编码**：分类变量 → 二进制列，避免虚拟变量陷阱用 `drop_first=True`
> - **XGBoost**：`xgb.XGBRegressor(n_estimators=100, random_state=42)`
> - **评估指标**：MSE（均方误差）+ R²（决定系数）

### [[2.2.4|2.2.4 线性回归+XGBoost]]

| 维度 | 内容 |
|------|------|
| 数据集 | 大学生低碳生活行为的影响因素数据集.xlsx |
| 模型 | **LinearRegression** → **XGBRegressor**(n_estimators=1000, lr=0.05, max_depth=5) |
| 特殊操作 | 删除不必要列 → get_dummies → joblib 保存模型 |

> [!tip] 知识点
> - **joblib vs pickle**：joblib 更适合大型 numpy 数组的模型
> - **XGBoost 超参**：`subsample=0.8, colsample_bytree=0.8` 防过拟合
> - **结果保存**：`results.to_csv('xxx.txt', index=False, sep='\t')` 制表符分隔

### [[2.2.5|2.2.5 决策树回归]]

| 维度 | 内容 |
|------|------|
| 数据集 | fitness analysis.csv |
| 模型 | **DecisionTreeRegressor** |
| 目标变量 | daily_steps（日步数） |
| 评估 | MSE + MAE + R² |

> [!tip] 知识点
> - **决策树**：`DecisionTreeRegressor(random_state=42)`，最简单的基线模型
> - **MAE**：`mean_absolute_error(y_test, y_pred)`，比 MSE 对异常值更鲁棒
> - **文件保存规范**：模型 pkl + 结果 txt + 报告 txt，缺一扣分

---

## 六、3.2 人机交互流程设计（5 题 · 20 min）

> [!abstract] 模块共性
> **考什么**：加载 ONNX 模型 → 图像预处理 → 推理 → 输出结果 + 设计交互方案文档
>
> **通用代码模式**：
> ```python
> import onnxruntime as ort
> import numpy as np
> from PIL import Image
>
> session = ort.InferenceSession('model.onnx')
> labels = [line.strip() for line in open('labels.txt').readlines()]
> input_name = session.get_inputs()[0].name
>
> image = Image.open('test.jpg').convert('RGB')  # 或 'L' 灰度
> image = image.resize((H, W))
> image = np.array(image, dtype=np.float32)
> image = np.expand_dims(image, axis=0)  # 添加 batch 维度
>
> output = session.run(None, {input_name: image})[0]
> predicted = np.argmax(output)  # 或 softmax 后取 top5
> ```
>
> **必须输出**：识别截图 jpg + 交互方案 docx

### [[3.2.1 图像识别评估系统交互流程设计|3.2.1 ResNet 图像识别]]

| 维度 | 内容 |
|------|------|
| 模型 | resnet.onnx（ResNet，ImageNet 1000 类） |
| 输入格式 | `[1, 3, 224, 224]` — RGB，224×224 |
| 预处理 | resize(256) → center crop(224) → /255 → (image-mean)/std → transpose → float32 |
| 输出 | Top5 类别 + 概率（softmax） |

> [!tip] 知识点
> - **ImageNet 标准化**：`mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]`
> - **Softmax**：`scipy.special.softmax(output, axis=-1)`，将 logits 转为概率分布
> - **Top5 取法**：`np.argsort(probs[0])[-5:][::-1]`（升序取后5个再反转=降序）
> - **维度变换**：(H,W,C) → (C,H,W) → (1,C,H,W)，即 HWC → CHW → NCHW

### [[3.2.2 手写数字识别系统交互流程设计|3.2.2 MNIST 手写数字]]

| 维度 | 内容 |
|------|------|
| 模型 | mnist.onnx（CNN，MNIST 数据集） |
| 输入格式 | `[1, 1, 28, 28]` — 灰度，28×28 |
| 预处理 | convert('L') 灰度 → resize(28,28) → float32 → expand_dims ×2 |
| 输出 | 直接 argmax，不需要 softmax |

> [!tip] 知识点
> - **MNIST**：手写数字 0-9，10 类，灰度图 28×28
> - **vs 3.2.1**：灰度单通道（1 channel）vs RGB 三通道（3 channels）
> - **argmax vs softmax**：只取类别不需要概率时，直接 `np.argmax(output)` 即可

### [[3.2.3 面部表情识别系统交互流程设计|3.2.3 表情识别]]

| 维度 | 内容 |
|------|------|
| 模型 | emotion-ferplus.onnx（表情识别） |
| 输入格式 | `[1, 1, 64, 64]` — 灰度，64×64 |
| 预处理 | convert('L') → resize(64,64) → float32 → expand_dims ×2 |
| 输出 | 8 类表情：neutral, happiness, surprise, sadness, anger, disgust, fear, contempt |

> [!tip] 知识点
> - **映射表**：`{'neutral':0, 'happiness':1, 'surprise':2, 'sadness':3, 'anger':4, 'disgust':5, 'fear':6, 'contempt':7}`
> - **Pillow 兼容性**：`Image.ANTIALIAS` 在 Pillow 10.0+ 被废弃 → 用 `Image.LANCZOS`
> - **decode**：`list(emotion_table.keys())[predicted_label]`（索引→名称）

### [[3.2.4 花朵智能识别系统交互流程设计|3.2.4 花朵识别]]

| 维度 | 内容 |
|------|------|
| 模型 | flower-detection.onnx（花朵检测+分类） |
| 标签 | labels.txt |
| 特殊点 | 既有**检测**（定位）又有**分类**（种类），输出类型+准确率 |

> [!tip] 知识点
> - **检测 vs 分类**：分类只输出类别，检测还输出边界框坐标
> - **PyTorch ONNX 导出**：模型训练用 PyTorch，推理用 ONNX Runtime，跨框架部署

### [[3.2.5 AI驱动的健身应用界面设计分析与优化|3.2.5 健身应用]]

| 维度 | 内容 |
|------|------|
| 模型 | version-RFB-320.onnx（人脸检测）+ labels.txt（VOC 类别） |
| 输入格式 | `[1, 3, 240, 320]` — RGB，320×240 |
| 预处理 | BGR→RGB → resize(320,240) → (image-127)/128 → transpose → expand_dims |
| 特殊操作 | NMS 后处理（hard_nms）→ 边界框绘制 → **界面设计分析文档** |

> [!tip] 知识点
> - **NMS（非极大值抑制）**：去除重叠边界框，保留最优 `iou_threshold=0.3`
> - **置信度阈值**：`threshold=0.7`，低于此值的检测结果被过滤
> - **BGR→RGB**：OpenCV 默认 BGR，模型需要 RGB，必须 `cv2.cvtColor`
> - **图像归一化**：`(image - 127) / 128`，不是标准的 ImageNet 归一化

---

## 七、横向知识网络

### 🔧 Pandas 核心 API 速查

| API | 用途 | 出现频率 |
|-----|------|----------|
| `pd.read_csv()` | 加载 CSV | ⭐⭐⭐⭐⭐ |
| `pd.read_excel()` | 加载 xlsx | ⭐⭐ |
| `data.head()` | 查看前5行 | ⭐⭐⭐⭐⭐ |
| `data.describe()` | 描述性统计 | ⭐⭐⭐ |
| `data.info()` | 数据类型+缺失值 | ⭐⭐⭐ |
| `data.isnull().sum()` | 缺失值统计 | ⭐⭐⭐⭐ |
| `data.dropna()` | 删除缺失值 | ⭐⭐⭐⭐ |
| `data.drop_duplicates()` | 删除重复值 | ⭐⭐⭐ |
| `data.groupby().agg()` | 分组聚合 | ⭐⭐⭐⭐ |
| `pd.cut()` | 等宽分箱 | ⭐⭐⭐ |
| `data['列'].value_counts()` | 频次统计 | ⭐⭐⭐⭐ |
| `data.to_csv()` | 保存 CSV | ⭐⭐⭐⭐⭐ |
| `pd.get_dummies()` | 独热编码 | ⭐⭐⭐ |
| `data.rename()` | 列重命名 | ⭐⭐ |

### 🧠 模型选型速查

| 场景 | 模型 | sklearn 类 |
|------|------|-----------|
| 二分类 | Logistic 回归 | `LogisticRegression` |
| 回归（基线） | 线性回归 | `LinearRegression` |
| 回归（强） | 随机森林 | `RandomForestRegressor` |
| 回归（更强） | XGBoost | `XGBRegressor` |
| 回归（简单） | 决策树 | `DecisionTreeRegressor` |
| 图像分类 | ResNet / CNN | ONNX Runtime |
| 目标检测 | RFB-320 | ONNX Runtime |

### 📊 评估指标速查

| 指标 | 公式含义 | 适用 |
|------|----------|------|
| MSE | 均方误差 | 回归 |
| MAE | 平均绝对误差 | 回归（鲁棒） |
| R² | 决定系数（越接近1越好） | 回归 |
| accuracy | 准确率 | 分类 |
| softmax | logits→概率分布 | 分类输出 |

---

## 八、学习路径

```
第一阶段：理论（1天）
└── 📖 理论知识详解.pdf → 建立知识框架

第二阶段：数据处理（2天）
├── 1.1.1 智能医疗 → 掌握 pandas 分组统计
├── 1.1.3 信用评估 → 掌握多条件审核
└── 1.1.4 电商平台 → 掌握标准化+完整流程

第三阶段：数据清洗（2天）
├── 2.1.1 燃油效率 → 掌握 StandardScaler + 规范文档
├── 2.1.3 信用评分 → 掌握 IQR + MinMaxScaler + 特征工程
└── 2.1.4 医疗数据 → 掌握日期处理 + 可视化

第四阶段：模型训练（2天）
├── 2.2.1 Logistic → 掌握分类模型全流程
├── 2.2.2 线性+森林 → 掌握 Pipeline + 模型对比
└── 2.2.3/2.2.4 XGBoost → 掌握集成学习 + get_dummies

第五阶段：模型推理（2天）
├── 3.2.1 ResNet → 掌握 ONNX 推理 + Softmax + Top5
├── 3.2.2 MNIST → 掌握灰度图处理
└── 3.2.5 健身应用 → 掌握 NMS + 目标检测

第六阶段：业务优化（1天）
└── 1.2.x 全部 → 万能答题框架：问题→原因→方案→步骤→预期
```

> [!warning] 易错点清单
> 1. `Image.ANTIALIAS` → Pillow 10.0+ 改用 `Image.LANCZOS`
> 2. `pd.read_csv('xxx.xlsx')` → Excel 要用 `pd.read_excel()`
> 3. GBK 编码文件需加 `encoding='gbk'`
> 4. ONNX 输入必须是 `float32`，不能是 `float64`
> 5. 灰度图 `expand_dims` 两次（通道+batch），RGB 图只需一次（batch）
> 6. `get_dummies` 线性模型建议 `drop_first=True` 避免虚拟变量陷阱
> 7. 保存 CSV 永远加 `index=False`
> 8. 文件夹命名必须是「准考证号+身份证后六位」
