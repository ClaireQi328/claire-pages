# 贡献指南

感谢你考虑为 Qiaomu X Article Publisher 做贡献！

## 如何贡献

### 报告 Bug

1. 在 [Issues](https://github.com/[your-username]/qiaomu-x-article-publisher/issues) 中搜索，确保问题未被报告
2. 创建新 Issue，包含：
   - 清晰的标题
   - 重现步骤
   - 预期行为 vs 实际行为
   - 环境信息（Python版本、macOS版本）
   - 相关日志或截图

### 提出功能建议

1. 检查 [路线图](README_FULL.md#路线图) 确认功能未在计划中
2. 创建 Issue，说明：
   - 功能描述
   - 使用场景
   - 为什么这个功能有用

### 提交 Pull Request

#### 开发流程

1. Fork 仓库
2. 创建特性分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. 进行你的改动
4. 测试你的改动
5. 提交改动：
   ```bash
   git commit -m "feat: add some feature"
   ```
6. 推送到你的 Fork：
   ```bash
   git push origin feature/your-feature-name
   ```
7. 创建 Pull Request

#### 提交信息规范

使用 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 格式：

- `feat:` - 新功能
- `fix:` - Bug 修复
- `docs:` - 文档更新
- `style:` - 代码格式（不影响功能）
- `refactor:` - 重构
- `test:` - 测试相关
- `chore:` - 构建/工具相关

示例：
```
feat: add automatic title generation
fix: handle image upload timeout
docs: update installation guide
```

#### 代码规范

- Python 代码遵循 PEP 8
- 添加必要的注释
- 更新相关文档
- 保持向后兼容

#### Pull Request 检查清单

- [ ] 代码已测试
- [ ] 文档已更新
- [ ] CHANGELOG.md 已更新
- [ ] 提交信息符合规范
- [ ] 无合并冲突

## 开发环境设置

```bash
# 克隆仓库
git clone https://github.com/[your-username]/qiaomu-x-article-publisher.git
cd qiaomu-x-article-publisher

# 安装依赖
pip install Pillow pyobjc-framework-Cocoa patchright

# 运行测试
cd scripts
python auth_manager.py status
```

## 测试

在提交 PR 前，请确保：

1. 认证流程正常：
   ```bash
   python auth_manager.py setup
   python auth_manager.py validate
   ```

2. 发布流程正常：
   ```bash
   python publish_article.py --file test-article.md --show-browser
   ```

3. 无明显错误或警告

## 行为准则

- 尊重他人
- 包容不同观点
- 专注于建设性反馈
- 保持专业

## 问题？

如有疑问，欢迎：
- 创建 Issue 询问
- 发邮件到 [your-email]

---

**感谢你的贡献！** 🎉
