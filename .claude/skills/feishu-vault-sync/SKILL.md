---
name: feishu-vault-sync
version: 1.0.0
description: "Obsidian Vault ↔ 飞书文档同步：全量/增量同步、变更检测、定时任务管理。当用户要求将 vault 笔记同步到飞书、查看同步状态、或管理同步任务时使用。"
user-invocable: true
argument-hint: "[full|incremental|status|dry-run|force|setup-cron]"
allowed-tools: Bash
---

# Obsidian Vault ↔ 飞书文档同步

将 Obsidian vault 中的 Markdown 笔记同步到飞书云文档（Docx），支持全量同步、增量同步（只处理新建/变更文件）、定时任务。

**依赖：`lark-cli`（已安装）、`lark-shared` skill（认证）。**

## 前置检查

```bash
lark-cli --version          # 确认 lark-cli 已安装
lark-cli auth status --json # 确认认证有效（user identity）
```

## 调用方式

| 命令 | 说明 |
|------|------|
| `Skill("feishu-vault-sync")` | 默认：增量同步（只处理新建/变更） |
| `Skill("feishu-vault-sync") full` | 全量同步（650+ 篇，首次使用） |
| `Skill("feishu-vault-sync") incremental` | 增量同步（默认行为） |
| `Skill("feishu-vault-sync") dry-run` | 试运行（不实际创建文档） |
| `Skill("feishu-vault-sync") force` | 强制覆盖所有已映射文件 |
| `Skill("feishu-vault-sync") setup-cron` | 注册/更新 Windows 定时任务 |
| `Skill("feishu-vault-sync") status` | 查看同步状态和统计 |
| `Skill("feishu-vault-sync") build-map` | 从全量日志生成映射文件 |

## 执行

根据用户指定的子命令，执行对应脚本。未指定时默认 `incremental`。

### 全量同步（full）

```bash
cd "$VAULT_ROOT" && bash "$(skill_dir)/scripts/sync-full.sh"
```

首次使用或需要重建时执行。扫描 vault 所有 .md 文件（排除 templates/assets/config），逐篇创建飞书文档。

- 日志：`.claude/scripts/sync-feishu.log`
- 耗时：约 30-50 分钟（630+ 篇）

### 增量同步（incremental / 默认）

```bash
cd "$VAULT_ROOT" && bash "$(skill_dir)/scripts/sync-incremental.sh"
```

基于映射文件判断：无记录 → 新建，mtime 更新 → 覆盖，无变更 → 跳过。

- 映射：`.claude/scripts/sync-feishu-map.tsv`
- 日志：`.claude/scripts/sync-feishu-incremental.log`
- 耗时：取决于变更数量（通常 < 1 分钟）

### 试运行（dry-run）

```bash
cd "$VAULT_ROOT" && bash "$(skill_dir)/scripts/sync-incremental.sh" --dry-run
```

列出将同步的文件，不实际调用飞书 API。

### 强制覆盖（force）

```bash
cd "$VAULT_ROOT" && bash "$(skill_dir)/scripts/sync-incremental.sh" --force
```

忽略 mtime 检查，覆盖所有已映射文件的内容。

### 定时任务（setup-cron）

```bash
powershell -ExecutionPolicy Bypass -Command "schtasks /create /tn 'Claire-Feishu-Sync' /tr '\"$VAULT_ROOT\.claude\skills\feishu-vault-sync\scripts\run-sync.bat\"' /sc daily /st 02:00 /f"
```

注册 Windows Task Scheduler，每天凌晨 02:00 自动执行增量同步。

查看状态：`schtasks /query /tn "Claire-Feishu-Sync" /v /fo list`

### 状态查看（status）

```bash
# 映射文件记录数
wc -l "$VAULT_ROOT/.claude/scripts/sync-feishu-map.tsv" 2>/dev/null || echo "映射文件不存在"

# 最近一次同步日志
tail -20 "$VAULT_ROOT/.claude/scripts/sync-feishu-incremental.log" 2>/dev/null || echo "暂无日志"

# 定时任务状态
schtasks /query /tn "Claire-Feishu-Sync" 2>/dev/null || echo "定时任务未注册"
```

### 生成映射文件（build-map）

全量同步完成后，从日志提取 vault路径→docId 映射：

```bash
cd "$VAULT_ROOT" && bash "$(skill_dir)/scripts/build-map.sh"
```

## 转换规则

| Obsidian 语法 | 飞书转换 |
|--------------|---------|
| YAML frontmatter | 剥离 |
| `#Tag1 #Tag2` 独立行 | 移除 |
| `[[wikilink\|文本]]` | `文本` |
| `[[wikilink]]` | `链接名` |
| `> [!tip] 标题` | `> **标题**** |
| `![[image.png]]` | 移除（飞书不支持本地图片） |
| ` ```mermaid ` | ` ``` `（保留代码块） |

## 排除规则

以下文件不同步到飞书：
- `.obsidian/` `.git/` `.agents/` `.claude/` `.workbuddy/` `node_modules/`
- `templates/`（Obsidian 模板文件）
- `assets/`（图片/附件）
- 空文件（< 10 字节）

## 文件结构

```
.claude/skills/feishu-vault-sync/
├── SKILL.md                    # 本文件
└── scripts/
    ├── sync-full.sh            # 全量同步
    ├── sync-incremental.sh     # 增量同步（核心）
    ├── build-map.sh            # 从日志生成映射
    └── run-sync.bat            # Windows 定时任务入口

# 运行时生成的数据文件（vault 根）：
.claude/scripts/
├── sync-feishu.log             # 全量同步日志
├── sync-feishu-incremental.log # 增量同步日志
└── sync-feishu-map.tsv         # 映射文件（vault路径 → docId）
```

## 注意事项

1. **首次使用**：先执行 `full` 全量同步，再执行 `build-map` 生成映射
2. **映射文件是核心**：增量同步依赖映射文件判断新旧，丢失映射会导致重复创建
3. **飞书限流**：大量同步时 lark-cli 有内置限流，脚本顺序执行不会触发
4. **文档位置**：文档创建在飞书**个人知识库**（`--parent-position my_library`），不在云盘根目录
5. **lark-cli 更新**：建议保持 lark-cli 最新版本（`lark-cli update`）
