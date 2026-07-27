---
created: 2026-07-10
updated: 2026-07-27
tags: [Self, 系统]
---

# GitHub Pages 发布配置

**Public repo**: `ClaireQi328/claire-pages`
**Pages URL**: https://claireqi328.github.io/claire-pages/
**部署方式**: GitHub Action (`deploy.yml`) — push to `main` 自动部署

## 文件结构

- `claire-pages` repo 位于 `.claude/skills/github-pages/claire-pages/`
- 同步脚本位于 `.claude/skills/github-pages/scripts/sync-pages.ps1`
- 索引文件位于 `.claude/skills/github-pages/HTML-LINKS.md`
- URL 路径保持 vault 原始目录结构，如 `/09_Xiaomi/assets/web/文件名.html`

## 使用方法

```
Skill("github-pages")           # 推荐：Claude Code 内直接调用
```

## 自动同步

- **Git post-commit hook** 位于 `.git/hooks/post-commit`
- 每次 vault 提交时自动检测 `.html` 文件变更
- 有变更时自动运行 `sync-pages.ps1` 后台同步

## 映射表

- `HTML-LINKS.md` 位于 `.claude/skills/github-pages/HTML-LINKS.md`
- 每次 sync 自动生成，包含所有 HTML 文件名/vault路径/公开链接
- `generate-mapping.ps1` 可单独运行生成映射表

## 已知问题

- PowerShell 5.1 的 `git 2>&1` 会把 stderr 当 error — 脚本已用 `cmd /c` 规避
- `.git/index.lock` 残留时需手动删除
- 中文文件名在 URL 中会被 `EscapeDataString` 编码

**Why:** vault repo 是 private 的，GitHub Free 不支持 private repo 的 Pages，所以需要单独的 public repo。
**How to apply:** 以后需要发布 HTML 时，运行 `sync-pages.ps1` 即可。新增的 HTML 文件会自动被发现和同步。
