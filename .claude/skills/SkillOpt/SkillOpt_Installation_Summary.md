# SkillOpt 安装完成报告

## ✅ 安装成功

**SkillOpt v0.1.0** 已成功安装

**安装位置**: `C:\Users\qi'yue\Desktop\Claire\Claire\SkillOpt`

**安装时间**: 2026年6月24日

---

## 🎯 什么是 SkillOpt？

SkillOpt 是微软开发的一个创新框架，用于优化 AI 代理的技能。它使用类似神经网络训练的方法（包括 epoch、batch size、learning rate 等概念）来训练 AI 代理的技能文档，而不是调整模型权重。

**核心理念**: 将技能文档视为"可训练状态"，通过优化器模型对技能进行 add/delete/replace 编辑，只有在验证分数提升时才接受编辑。

---

## 🛠️ 已安装组件

### 命令行工具
- **`skillopt-train`** - 训练技能优化模型
- **`skillopt-eval`** - 评估优化后的技能

### 依赖包
- Python 3.10+
- OpenAI SDK 2.43.0
- Azure Core 1.41.0
- Azure Identity 1.25.3
- Pydantic 2.13.4
- 其他必要依赖

---

## 📦 支持的后端

| 后端类型 | 描述 |
|---------|------|
| `azure_openai` | Azure OpenAI 服务 |
| `codex` / `codex_exec` | OpenAI Codex |
| `claude` / `claude_chat` / `claude_code_exec` | Claude AI |
| `qwen` / `qwen_chat` | 通义千问 |
| `minimax` / `minimax_chat` | MiniMax AI |

---

## 🚀 快速开始

### 基本训练命令
```bash
skillopt-train --config configs/your-config.yaml
```

### 使用 Claude 后端示例
```bash
skillopt-train \
    --config configs/alfworld/default.yaml \
    --backend claude_chat \
    --optimizer_model claude-3-5-sonnet \
    --target_model claude-3-5-sonnet \
    --num_epochs 2 \
    --batch_size 20
```

### 常用参数
- `--config` (必需) - YAML 配置文件路径
- `--backend` - 选择后端
- `--optimizer_model` - 优化器使用的模型
- `--target_model` - 要优化的目标模型
- `--num_epochs` - 训练轮数
- `--batch_size` - 批次大小
- `--seed` - 随机种子
- `--edit_budget` - 编辑预算

---

## 📚 内置基准

SkillOpt 包含 6 个内置基准用于评估：
1. ALFWorld
2. SearchQA
3. 等更多（详见官方文档）

---

## 🔧 环境变量配置

确保设置以下 API 密钥：

```bash
# OpenAI
export OPENAI_API_KEY="your-openai-key"

# Azure OpenAI
export AZURE_OPENAI_API_KEY="your-azure-key"
export AZURE_OPENAI_ENDPOINT="your-azure-endpoint"

# Claude
export ANTHROPIC_API_KEY="your-claude-key"
```

---

## 📖 文档与资源

- **项目主页**: https://microsoft.github.io/SkillOpt/
- **论文**: https://arxiv.org/abs/2605.23904
- **GitHub**: https://github.com/microsoft/SkillOpt
- **详细文档**: https://microsoft.github.io/SkillOpt/docs/guideline.html

---

## 🎓 使用场景

1. **技能优化** - 训练 AI 代理执行特定任务的能力
2. **基准测试** - 在多个基准上评估技能效果
3. **技能迁移** - 将优化后的技能应用到不同模型
4. **自进化代理** - 构建能够自我改进的代理系统

---

## ⚠️ 注意事项

1. 需要有效的 API 密钥才能使用
2. 首次运行可能需要下载依赖
3. 训练时间取决于配置参数
4. 建议从小规模测试开始

---

## 💡 下一步

1. 查看官方文档了解详细配置
2. 选择一个内置基准进行测试
3. 尝试不同的后端和模型组合
4. 根据需求调整训练参数

---

**安装验证**: ✅ 已成功运行 `import skillopt` 和版本检查
**命令可用性**: ✅ `skillopt-train` 和 `skillopt-eval` 已在 PATH 中
