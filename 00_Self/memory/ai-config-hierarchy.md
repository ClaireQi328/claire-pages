---
created: 2026-07-09
updated: 2026-07-27
tags: [Self, 系统]
---

# AI 配置层级

## 配置层级（Source of Truth → 派生）

```
~/.claude/settings.json          ← 手动编辑，唯一入口
  ├─→ ~/.claudian/claudian-settings.json         (全局)
  ├─→ Desktop/Claire/.claudian/...               (vault 级别)
  └─→ Desktop/Claire/.obsidian/plugins/agent-client/data.json
```

Source of truth 的 `env` 字段包含所有 `ANTHROPIC_*` 变量。派生文件的 env 必须与此一致。

## 常见漂移模式

| 模式 | 原因 | 表现 |
|------|------|------|
| model 变成 `haiku` 别名 | 插件 UI 切换模型 | `Unsupported model xiaomi/mimo-v2-pro`（少了 .5） |
| model 加 `claude-code/` 前缀 | Claudian 插件更新 | API 报未知模型 |
| env 为空 | Agent-Client 新装或重置 | API 无认证 |
| `windowsWslMode: true` | Agent-Client 默认值 | Windows 路径不兼容 |
| 中文乱码 | PowerShell 不加 `-Encoding UTF8` | JSON 解析失败 |

## 自动修复

同步脚本：`~/.claude/sync-ai-configs.ps1`
- `-DryRun`：只检查不修改
- 无参数：自动修复
- 已放入 Windows 启动文件夹，登录时自动执行

**Why:** 4 个配置文件分散维护，插件更新/用户操作会导致漂移。
**How to apply:** 遇到模型报错或 API 认证失败，先跑 `sync-ai-configs.ps1 -DryRun` 定位哪个文件漂移了，再执行修复。不要手动逐个文件排查。
