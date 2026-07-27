---
name: github-pages
description: 将 vault 中的 HTML 文件同步到 GitHub Pages 公开站点，自动清理孤儿文件并部署
user-invocable: true
---

# GitHub Pages 同步

## 触发词

- "同步到 Pages" / "发布到 GitHub Pages"
- "跑 sync-pages" / "更新 Pages"
- "HTML 发布"

## 做什么

1. 扫描 vault 所有 `.html`（排除 `.obsidian`/`.git`/`.claude`/`.trash`）
2. 增量复制到 `.claude/skills/github-pages/claire-pages/`
3. 删除 vault 中已不存在的文件 + 清理空目录
4. 生成 `.claude/skills/github-pages/HTML-LINKS.md` 映射表
5. 自动 commit + push → GitHub Actions 部署

## 调用

```
Skill("github-pages")
```

## 目录结构

```
.claude/skills/github-pages/
├── SKILL.md             ← skill 说明
├── scripts/
│   └── sync-pages.ps1   ← 同步脚本
├── claire-pages/        ← GitHub Pages 仓库（git 仓库）
└── HTML-LINKS.md        ← 自动生成的映射表
```

## 注意

- 重命名 HTML 文件后旧 URL 会 404（GitHub Pages 无原生重定向）
- 脚本：`.claude/skills/github-pages/scripts/sync-pages.ps1`
