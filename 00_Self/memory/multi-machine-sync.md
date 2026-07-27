---
created: 2026-07-09
updated: 2026-07-27
tags: [Self, 系统]
---

# 多机同步方案

## 架构

Vault (Desktop/Claire) 是 source of truth，通过 obsidian-git 同步到 GitHub。

仓库：https://github.com/ClaireQi328/Claire （私有）
本地：`Desktop/Claire/`
同步插件：obsidian-git（auto-push 5min, auto-pull on open）

## 关键路径

```
Vault/.claude/settings.json       ← source of truth（gitignore，含 token）
Vault/.claude/config-sync.ps1     ← 同步脚本（tracked）
Vault/.claudian/                   ← Claudian 配置（gitignore）
Vault/.env                         ← token 存储（gitignore）
~/.claude → D:\Obsidian\Obsidian\.claude  ← symlink
```

## 命令

```powershell
# 修复所有配置（vault → system）
config-sync.ps1 sync

# 推送 vault 到 GitHub（token 自动脱敏）
config-sync.ps1 push

# 拉取 + 同步
config-sync.ps1 pull

# 新电脑首次配置
config-sync.ps1 setup
```

## 新电脑流程

1. Clone vault: `git clone https://github.com/ClaireQi328/Claire.git ~/Desktop/Claire`
2. 创建 `.env` 文件: `ANTHROPIC_AUTH_TOKEN=sk-xxx`
3. 运行: `config-sync.ps1 setup`

## 注意

- `~/.claude` 是 symlink 到 D: 盘，文件符号链接跨盘需要管理员权限
- sync 脚本直接写入 `~/.claude/`（通过 symlink 到 D: 盘）
- obsidian-git 自动处理 vault 同步，不需要手动 push/pull
- `claire-config` 仓库已废弃，所有配置在 Claire vault 中

**Why:** 用户要求所有 Obsidian 配置集中在 vault 内，通过 obsidian-git 统一同步。
**How to apply:** 改配置 → 编辑 vault 内文件 → obsidian-git 自动同步。跨机同步靠 obsidian-git。
