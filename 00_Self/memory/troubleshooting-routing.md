---
created: 2026-07-08
updated: 2026-07-27
tags: [Self, 系统]
---

# 故障排查路由表

## 路由表：症状 → 动作

遇到 Obsidian AI 插件报错时，按此顺序判断，不要全盘排查：

```
报错含 "Unsupported model"
  ├─ model ID 缺版本号（如 mimo-v2-pro 而非 mimo-v2.5-pro）
  │    → 别名映射问题，跑 sync-ai-configs.ps1
  └─ model ID 含未知前缀（如 claude-code/...）
       → 插件更新污染，跑 sync-ai-configs.ps1

报错含 "auth" / "401" / "403" / "API key"
  → env 为空或过期，跑 sync-ai-configs.ps1 -DryRun 确认

JSON 解析失败 / 中文乱码
  → PowerShell 编码问题，sync 脚本已内置 -Encoding UTF8

WSL 相关错误 / 路径找不到
  → windowsWslMode 被重置，sync 脚本会自动修正
```

## 快速诊断命令

```powershell
# 一行判断：所有配置是否一致
powershell -ExecutionPolicy Bypass -Command "& { & (Join-Path $env:USERPROFILE '.claude\sync-ai-configs.ps1') -DryRun }"
```

输出 `[OK]` = 正常，`[FIX]` = 需要同步，`[ERROR]` = 需要手动处理。

## 三层防御

1. **启动文件夹**：登录时自动同步（被动）
2. **sync 脚本**：手动触发或脚本调用（主动）
3. **此路由表**：下次遇到类似报错时直接命中（记忆）

**Why:** 这次排查花了大量时间逐文件检查，其实核心就一个 sync 脚本能解决。
**How to apply:** 下次用户报告 AI 插件报错，先跑诊断命令，再根据输出决定动作。不重新探索文件结构。
