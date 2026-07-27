#!/usr/bin/env python3
"""
小红书收藏夹 - 逐条提取帖子详情
从 xhs_favorites_list.json 读取收藏列表，逐条访问详情页提取完整内容。

用法:
  python xhs_extract_details.py                       # 提取所有新帖子
  python xhs_extract_details.py --limit 3             # 只提取前3条（测试）
  python xhs_extract_details.py --force               # 强制重新提取所有
  python xhs_extract_details.py --skip-videos         # 跳过视频帖子
"""

import json
import os
import re
import sys
import time
import asyncio
import argparse
import hashlib
import urllib.request
import ssl
from pathlib import Path
from datetime import datetime

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")

# ============================================================
# 配置
# ============================================================

VAULT_ROOT = Path(os.environ.get("VAULT_ROOT", r"C:\Users\qi'yue\Desktop\Claire"))
FAVORITES_JSON = VAULT_ROOT / "99_Clippings" / "xhs_favorites_list.json"
OUTPUT_DIR = VAULT_ROOT / "99_Clippings"
IMG_DIR = VAULT_ROOT / "99_Clippings" / "img"
PROGRESS_FILE = VAULT_ROOT / "99_Clippings" / "xhs_extract_progress.json"
COOKIE_FILE = os.path.expanduser("~/cookies.json")

# 请求间隔（秒）
REQUEST_DELAY = 3
BATCH_DELAY = 10      # 每20条暂停
BATCH_SIZE = 20

# ============================================================
# Cookie 加载
# ============================================================

def load_cookies(path):
    with open(path, 'r', encoding='utf-8') as f:
        raw = json.load(f)
    cookies = []
    for c in raw:
        cookie = {
            "name": c["name"],
            "value": c["value"],
            "domain": c.get("domain", ".xiaohongshu.com"),
            "path": c.get("path", "/"),
        }
        if c.get("expires") and c["expires"] > 0:
            cookie["expires"] = int(c["expires"])
        cookies.append(cookie)
    return cookies


# ============================================================
# 进度管理
# ============================================================

def load_progress():
    if PROGRESS_FILE.exists():
        with open(PROGRESS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {"extracted": [], "failed": [], "skipped": []}

def save_progress(progress):
    with open(PROGRESS_FILE, 'w', encoding='utf-8') as f:
        json.dump(progress, f, ensure_ascii=False, indent=2)


# ============================================================
# 图片下载
# ============================================================

def download_image(url, save_path):
    """下载图片到本地"""
    try:
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        req = urllib.request.Request(url)
        req.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
        req.add_header('Referer', 'https://www.xiaohongshu.com/')
        resp = urllib.request.urlopen(req, timeout=15, context=ctx)
        data = resp.read()
        with open(save_path, 'wb') as f:
            f.write(data)
        return True
    except Exception as e:
        print(f"      ⚠️  图片下载失败: {e}")
        return False


# ============================================================
# Markdown 生成（Peter Thiel 风格）
# ============================================================

def generate_markdown(note, detail):
    """生成 Peter Thiel 风格的 Markdown 文件"""
    title = detail.get("title", note.get("title", "无标题"))
    desc = detail.get("desc", "")
    note_type = note.get("type", "normal")
    author = note.get("author", detail.get("author", "未知"))
    note_id = note.get("note_id", "")
    cover_url = note.get("cover_url", "")
    liked = note.get("liked_count", "0")
    xsec_token = note.get("xsec_token", "")
    tags = detail.get("tags", [])

    # 图片列表
    images = detail.get("images", [])
    video_url = detail.get("video_url", "")

    # 清理 desc 中的话题标签
    desc_clean = re.sub(r'#[^#\[]*\[([^\]]+)\]#', '', desc or "")
    desc_clean = re.sub(r'#\[话题\](\[话题\])*#?', '', desc_clean)
    desc_clean = re.sub(r'#[^#\n\[]*\[[^\]]+\]#?', '', desc_clean)
    desc_clean = re.sub(r'@\w+\s*', '', desc_clean).strip()

    # 日期
    date_str = note.get("date", "")
    if not date_str:
        date_str = datetime.now().strftime("%Y-%m-%d")

    # 文件名：{日期} {短标题}.md
    short_title = re.sub(r'[\\/:*?"<>|\n\r]', '', title)[:15].strip()
    if not short_title:
        short_title = note_id[:8]
    filename = f"{date_str} {short_title}.md"

    # 图片 markdown
    img_md = ""
    if images:
        for i, img_url in enumerate(images):
            # 下载图片
            img_name = f"xhs_{note_id}_{i+1}.jpg"
            img_path = IMG_DIR / img_name
            if not img_path.exists():
                download_image(img_url, str(img_path))
            img_md += f"![图{i+1}](img/{img_name})\n"

    # 视频标记
    video_md = ""
    if note_type == "video" and video_url:
        video_md = f"\n🎬 **视频帖子** [点击查看原视频]({note.get('url', '')})\n"

    # 标签
    tag_str = ", ".join(tags) if tags else "无"

    # 摘要：取前2句
    sentences = re.split(r'[。！？\.\n]', desc_clean)
    sentences = [s.strip() for s in sentences if s.strip()]
    summary = '。'.join(sentences[:2])
    if summary and not summary.endswith(('。', '！', '？', '.', '!', '?')):
        summary += '。'

    # 组装 markdown（简洁格式：标题 + 摘要 + 折叠详情 + 属性）
    md = f"""# {title}

{summary}

**与我的关联：** （待补充）

**值得深挖吗：** （待判断）

> [!tip]- 详情
> {desc_clean}
>
{img_md}
{video_md}
> [!info]- 笔记属性
> - **来源**: 小红书 · {author}
> - **帖子ID**: {note_id}
> - **链接**: [{title}]({note.get('url', '')})
> - **日期**: {date_str}
> - **类型**: {note_type}
> - **互动**: {liked} 赞
> - **标签**: {tag_str}
"""
    return filename, md


# ============================================================
# 主流程
# ============================================================

async def main():
    parser = argparse.ArgumentParser(description="小红书收藏夹详情提取")
    parser.add_argument("--limit", type=int, help="最多提取条数")
    parser.add_argument("--force", action="store_true", help="强制重新提取")
    parser.add_argument("--skip-videos", action="store_true", help="跳过视频帖子")
    parser.add_argument("--cookie-file", default=COOKIE_FILE)
    parser.add_argument("--headless", action="store_true", default=False)
    args = parser.parse_args()

    print("=" * 60)
    print("📝 小红书收藏夹详情提取")
    print("=" * 60)

    # 1. 加载收藏列表
    if not FAVORITES_JSON.exists():
        print(f"❌ 收藏列表不存在: {FAVORITES_JSON}")
        print("请先运行 xhs_favorites.py 拉取收藏列表")
        sys.exit(1)

    with open(FAVORITES_JSON, 'r', encoding='utf-8') as f:
        favorites = json.load(f)
    print(f"📋 收藏列表: {len(favorites)} 条")

    # 2. 加载进度
    progress = load_progress()
    extracted_ids = set(progress.get("extracted", []))
    print(f"📦 已提取: {len(extracted_ids)} 条")

    # 3. 确定待处理列表
    to_process = []
    for note in favorites:
        nid = note.get("note_id", "")
        if not nid:
            continue
        if not args.force and nid in extracted_ids:
            continue
        if args.skip_videos and note.get("type") == "video":
            continue
        to_process.append(note)

    if args.limit:
        to_process = to_process[:args.limit]

    print(f"🆕 待提取: {len(to_process)} 条")
    if not to_process:
        print("✅ 无需提取，全部已完成")
        return

    # 4. 确保输出目录存在
    IMG_DIR.mkdir(parents=True, exist_ok=True)

    # 5. 加载 cookies
    cookies = load_cookies(args.cookie_file)

    # 6. 启动 Playwright
    print("\n🚀 启动浏览器...")
    from playwright.async_api import async_playwright
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=args.headless,
            args=["--disable-blink-features=AutomationControlled", "--no-first-run", "--disable-gpu"]
        )
        context = await browser.new_context(
            viewport={"width": 1440, "height": 900},
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
            locale="zh-CN",
        )
        try:
            await context.add_cookies(cookies)
        except Exception:
            pass

        page = await context.new_page()
        await page.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
            window.chrome = { runtime: {} };
        """)

        # 7. 逐条提取
        success = 0
        failed = 0
        skipped = 0

        for i, note in enumerate(to_process):
            nid = note.get("note_id", "")
            token = note.get("xsec_token", "")
            title = note.get("title", nid[:8])
            note_type = note.get("type", "normal")

            print(f"\n[{i+1}/{len(to_process)}] {title[:40]}...")

            # 视频帖子处理
            if note_type == "video":
                print(f"   🎬 视频帖子，提取基础信息...")

            # 构造带 xsec_token 的 URL
            url = f"https://www.xiaohongshu.com/explore/{nid}?xsec_token={token}"

            try:
                await page.goto(url, wait_until="domcontentloaded", timeout=15000)
                await asyncio.sleep(3)

                # 解析 __INITIAL_STATE__
                detail = await page.evaluate("""() => {
                    const state = window.__INITIAL_STATE__ || {};
                    const noteMap = state.note?.noteDetailMap || {};
                    for (const [key, val] of Object.entries(noteMap)) {
                        const note = val.note || {};
                        if (note.title || note.display_title || note.noteId) {
                            // 提取图片 URL
                            const images = (note.imageList || []).map(img => {
                                return img.urlDefault || img.urlPre || (img.infoList && img.infoList[0]?.url) || '';
                            }).filter(Boolean);

                            // 提取视频 URL
                            let videoUrl = '';
                            if (note.video) {
                                const stream = note.video.media?.stream;
                                if (stream) {
                                    // 优先 h264 > h265 > av1
                                    const h264 = stream.h264 || [];
                                    const h265 = stream.h265 || [];
                                    const av1 = stream.av1 || [];
                                    const all = [...h264, ...h265, ...av1];
                                    if (all.length > 0) {
                                        videoUrl = all[0].masterUrl || '';
                                    }
                                }
                            }

                            // 提取标签
                            const tags = (note.tagList || note.tags || [])
                                .map(t => t.name || t)
                                .filter(Boolean);

                            return {
                                title: note.title || note.display_title || '',
                                desc: note.desc || '',
                                type: note.type || '',
                                author: note.user?.nickname || '',
                                images: images,
                                videoUrl: videoUrl,
                                tags: tags,
                                interactInfo: note.interactInfo || {},
                                time: note.time || 0,
                                ipLocation: note.ipLocation || '',
                            };
                        }
                    }
                    return null;
                }""")

                if not detail:
                    print(f"   ❌ 未找到笔记数据（可能被限制）")
                    progress["failed"].append({"note_id": nid, "title": title, "reason": "no_data"})
                    failed += 1
                    save_progress(progress)
                    continue

                # 生成 Markdown
                filename, md_content = generate_markdown(note, detail)
                filepath = OUTPUT_DIR / filename

                # 写入文件
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(md_content)

                print(f"   ✅ 已保存: {filename}")
                success += 1

                # 更新进度
                progress["extracted"].append(nid)
                save_progress(progress)

                # 批次暂停
                if (i + 1) % BATCH_SIZE == 0 and i + 1 < len(to_process):
                    print(f"\n   ⏸️  已处理 {i+1} 条，暂停 {BATCH_DELAY} 秒...")
                    await asyncio.sleep(BATCH_DELAY)
                else:
                    await asyncio.sleep(REQUEST_DELAY)

            except Exception as e:
                print(f"   ❌ 提取失败: {e}")
                progress["failed"].append({"note_id": nid, "title": title, "reason": str(e)})
                failed += 1
                save_progress(progress)
                await asyncio.sleep(REQUEST_DELAY)

        await browser.close()

    # 8. 汇总报告
    print(f"\n{'=' * 60}")
    print(f"📊 提取完成")
    print(f"{'=' * 60}")
    print(f"  ✅ 成功: {success}")
    print(f"  ❌ 失败: {failed}")
    print(f"  ⏭️  跳过: {skipped}")
    print(f"  📦 累计已提取: {len(progress['extracted'])}")
    print(f"{'=' * 60}")

    if progress["failed"]:
        print(f"\n失败列表:")
        for f_item in progress["failed"][-10:]:
            print(f"  - {f_item['title'][:30]} ({f_item['reason'][:30]})")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\n\n⏹️  用户中断")
    except Exception as e:
        print(f"\n❌ 运行出错: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
