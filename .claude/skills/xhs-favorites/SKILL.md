---
name: xhs-favorites
description: 全量拉取小红书收藏夹帖子，整合到 Obsidian vault 的 99_Clippings 中
user-invocable: true
argument-hint: [--limit N] [--skip-videos] [--force] [--phase list|extract|unfavorite|all]
allowed-tools: Bash, Read, Write, Edit, Glob, Grep, Agent
---

小红书收藏夹全量管理工具。自动拉取收藏列表、逐条提取详情到 Markdown、对已提取的帖子取消收藏。

## 常量定义
- Cookies 文件: `~/cookies.json`
- 输出目录: `99_Clippings/`
- 图片目录: `99_Clippings/img/`
- 收藏列表: `99_Clippings/xhs_favorites_list.json`
- 提取进度: `99_Clippings/xhs_extract_progress.json`
- 收藏列表脚本: `.claude/skills/xhs-favorites/scripts/xhs_favorites.py`
- 详情提取脚本: `.claude/skills/xhs-favorites/scripts/xhs_extract_details.py`

## 参数解析
- `$ARGUMENTS` 可包含：
  - `--phase list|extract|unfavorite|all`: 执行阶段（默认 all）
  - `--limit N`: 最多处理 N 条（测试用）
  - `--skip-videos`: 跳过视频帖子
  - `--force`: 忽略进度文件，从头开始

## Phase 1：拉取收藏列表

### 步骤 1：检查 Cookies
检查 `~/cookies.json` 是否存在且包含 `a1` cookie。如不存在，引导用户导出。

### 步骤 2：运行收藏列表拉取

```bash
python .claude/skills/xhs-favorites/scripts/xhs_favorites.py \
  --output 99_Clippings/xhs_favorites_list.json \
  [--limit N]
```

脚本使用 Playwright 浏览器自动化：
1. 启动 Chromium，注入 cookies
2. 访问用户收藏页（`?tab=fav&subTab=note`）
3. 拦截 `/api/sns/web/v2/note/collect/page` API 响应
4. 滚动加载全部内容（每页10条，自动分页）
5. 输出 JSON 列表（含 note_id、title、author、cover、xsec_token）

运行完成后报告：共发现多少条收藏、类型分布（图文/视频）。

## Phase 2：逐条提取帖子详情

### 步骤 3：运行详情提取

```bash
python .claude/skills/xhs-favorites/scripts/xhs_extract_details.py \
  [--limit N] [--skip-videos] [--force]
```

脚本流程：
1. 读取 `xhs_favorites_list.json` 收藏列表
2. 读取 `xhs_extract_progress.json` 跳过已提取的
3. 对每条新收藏：
   - 构造 URL：`https://www.xiaohongshu.com/explore/{note_id}?xsec_token={token}`
   - Playwright 加载详情页，解析 `window.__INITIAL_STATE__`
   - 提取：标题、正文、图片列表、视频URL、标签、互动数据
   - 下载图片到 `99_Clippings/img/xhs_{note_id}_{N}.jpg`
   - 生成 Peter Thiel 风格 Markdown → `99_Clippings/{YYYY-MM-DD} {短标题}.md`
   - 更新进度文件

**Markdown 输出格式**：
```markdown
# 一句话核心洞察（反直觉判断）

核心论点，2-3句话。

**与我的关联：** 一句话。
**值得深挖吗：** 是/否。一句话理由。

> [!tip]- 详情
> 结构化内容整理
> ![图N](img/xhs_xxx_N.jpg)

> [!info]- 笔记属性
> - **来源**: 小红书 · 作者名
> - **帖子ID**: xxx
> - **链接**: [标题](url)
> - **类型**: normal/video
> - **互动**: N赞
> - **标签**: tag1, tag2
```

**速率控制**：每条间隔3秒，每20条暂停10秒。

### 步骤 4：视频帖子处理

视频帖子（`type: video`）的处理策略：
- 基础模式（默认）：保存标题、描述、封面图，标记为视频帖子
- 转录模式（如用户要求）：下载视频 → ffmpeg 提取音频 → whisper 转录 → 整理转录文本

视频转录命令（仅在用户要求时执行）：
```bash
curl -L -o /tmp/xhs_{post_id}.mp4 -H "Referer: https://www.xiaohongshu.com/" {video_url}
ffmpeg -y -i /tmp/xhs_{post_id}.mp4 -vn -acodec pcm_s16le -ar 16000 -ac 1 /tmp/xhs_{post_id}.wav
# 然后用 mlx_whisper 转录
```

## Phase 3：取消已提取帖子的收藏

### 步骤 5：对已成功提取的帖子执行取消收藏

读取 `xhs_extract_progress.json` 中 `extracted` 列表，对每条已提取的帖子：
1. 通过 Playwright 在收藏页找到对应帖子
2. 调用取消收藏 API：`POST /api/sns/web/v1/note/uncollect`
3. 从 `xhs_favorites_list.json` 中移除已处理的条目
4. 更新进度文件

⚠️ 取消收藏前需确认：用户是否确定要取消？建议先完成全部提取，确认无误后再批量取消。

## Phase 4：汇总报告

全部完成后输出：

```
📊 小红书收藏夹管理报告
━━━━━━━━━━━━━━━━━━━━━━━
总收藏数: N 条
本次处理: N 条
  ✅ 提取成功: N 条
  ⏭️ 跳过（已存在）: N 条
  ❌ 提取失败: N 条
  🎬 视频帖子: N 条
已取消收藏: N 条
━━━━━━━━━━━━━━━━━━━━━━━
保存位置: 99_Clippings/
图片位置: 99_Clippings/img/
```

## 断点续传

如处理中途中断，重新运行即可：
- 脚本读取 `xhs_extract_progress.json`
- 自动跳过已提取的帖子
- 从上次中断处继续

## 增量模式

再次运行时自动识别新增收藏（不在 progress 文件中的），只处理新增部分。

## 定期执行建议

可配合 cron 定期执行：
```bash
# 每周日执行一次全量同步
python .claude/skills/xhs-favorites/scripts/xhs_favorites.py --output 99_Clippings/xhs_favorites_list.json
python .claude/skills/xhs-favorites/scripts/xhs_extract_details.py --skip-videos
```
