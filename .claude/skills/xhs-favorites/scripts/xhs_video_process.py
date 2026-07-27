#!/usr/bin/env python3
"""
小红书视频帖子处理脚本
从 xhs_favorites_list.json 中筛选视频帖子，提取转录文本。

处理流程：
1. 检查 __INITIAL_STATE__ 中是否有内嵌字幕（方案C）
2. 如无字幕：下载视频 → 提取音频 → whisper 转录（方案A）
3. 如 whisper 不可用：抽取关键帧 → 用 AI 视觉理解（方案B）

用法:
  python xhs_video_process.py                     # 处理所有视频帖子
  python xhs_video_process.py --limit 3           # 只处理前3条（测试）
  python xhs_video_process.py --force             # 强制重新处理
  python xhs_video_process.py --method whisper    # 强制使用 whisper
  python xhs_video_process.py --method vision     # 强制使用视觉
"""

import json
import os
import re
import sys
import time
import asyncio
import argparse
import subprocess
import tempfile
from pathlib import Path

# OpenAI API（用于 Whisper 云端转录）
try:
    import openai
except ImportError:
    openai = None

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
VIDEO_PROGRESS_FILE = VAULT_ROOT / "99_Clippings" / "xhs_video_progress.json"
COOKIE_FILE = os.path.expanduser("~/cookies.json")

# ffmpeg 路径（优先 imageio-ffmpeg 自带的，其次系统安装的）
def get_ffmpeg_path():
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        pass
    # 尝试系统 PATH
    import shutil
    path = shutil.which("ffmpeg")
    if path:
        return path
    return None

FFMPEG_PATH = get_ffmpeg_path()

# whisper 模型
WHISPER_MODEL = "base"  # base 平衡速度和质量；small 更准但更慢；tiny 最快但质量一般
REQUEST_DELAY = 5


# ============================================================
# 工具函数
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


def load_progress():
    if VIDEO_PROGRESS_FILE.exists():
        with open(VIDEO_PROGRESS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {"transcribed": [], "vision_processed": [], "failed": []}


def save_progress(progress):
    with open(VIDEO_PROGRESS_FILE, 'w', encoding='utf-8') as f:
        json.dump(progress, f, ensure_ascii=False, indent=2)


# ============================================================
# 方案 A：Whisper 转录
# ============================================================

def check_whisper():
    """检查是否有可用的转录方案"""
    # 检查 ffmpeg
    if not FFMPEG_PATH:
        return False
    # 检查 AI API（用于视觉分析）
    api_key = os.environ.get("OPENAI_API_KEY") or os.environ.get("ANTHROPIC_AUTH_TOKEN", "")
    if api_key:
        return True
    return False


def analyze_video_frames(frame_paths, desc="", title=""):
    """使用 Anthropic SDK + mimo-v2.5 视觉分析视频关键帧"""
    import base64
    api_key = os.environ.get("ANTHROPIC_AUTH_TOKEN", "")
    base_url = os.environ.get("ANTHROPIC_BASE_URL", "")

    if not api_key or not base_url:
        return ""

    try:
        import anthropic
        client = anthropic.Anthropic(api_key=api_key, base_url=base_url)

        # 构建多模态内容
        content = []
        for i, fp in enumerate(frame_paths[:6]):
            with open(fp, "rb") as f:
                img_b64 = base64.b64encode(f.read()).decode()
            content.append({
                "type": "image",
                "source": {"type": "base64", "media_type": "image/jpeg", "data": img_b64}
            })

        content.append({
            "type": "text",
            "text": f"这是一个小红书视频帖子的关键帧截图（共{len(frame_paths[:6])}帧）。帖子标题：{title}。帖子描述：{desc}。请根据这些关键帧画面，提炼这个视频的核心内容要点（300字以内）。直接输出要点，不要说\"根据图片\"之类的开头。"
        })

        response = client.messages.create(
            model="xiaomi/mimo-v2.5",
            max_tokens=500,
            messages=[{"role": "user", "content": content}],
        )
        # 提取文本（跳过 thinking block）
        for block in response.content:
            if hasattr(block, "text"):
                return block.text.strip()
        return ""
    except Exception as e:
        print(f"   ⚠️  AI 视觉分析失败: {e}")
        return ""


# ============================================================
# 方案 B：关键帧提取 + AI 视觉
# ============================================================

def extract_keyframes(video_path, output_dir, num_frames=5):
    """从视频中均匀抽取关键帧"""
    frames = []
    try:
        # 获取视频时长
        probe_cmd = [
            FFMPEG_PATH or "ffmpeg", "-i", str(video_path),
            "-show_entries", "format=duration", "-v", "quiet", "-of", "csv=p=0"
        ]
        result = subprocess.run(probe_cmd, capture_output=True, text=True, timeout=10)
        duration = float(result.stdout.strip() or "10")

        # 均匀抽取帧
        interval = duration / (num_frames + 1)
        for i in range(1, num_frames + 1):
            timestamp = interval * i
            frame_path = os.path.join(output_dir, f"frame_{i:02d}.jpg")
            cmd = [
                FFMPEG_PATH or "ffmpeg",
                "-ss", str(timestamp),
                "-i", str(video_path),
                "-vframes", "1",
                "-q:v", "2",
                "-y", frame_path
            ]
            subprocess.run(cmd, capture_output=True, timeout=10)
            if os.path.exists(frame_path):
                frames.append(frame_path)
    except Exception as e:
        print(f"   ⚠️  帧提取失败: {e}")
    return frames


# ============================================================
# 视频信息提取
# ============================================================

async def get_video_info(page, note_id, xsec_token):
    """从详情页获取视频信息（字幕、URL等）"""
    url = f"https://www.xiaohongshu.com/explore/{note_id}?xsec_token={xsec_token}"
    try:
        await page.goto(url, wait_until="domcontentloaded", timeout=15000)
        await asyncio.sleep(3)

        info = await page.evaluate("""() => {
            const state = window.__INITIAL_STATE__ || {};
            const noteMap = state.note?.noteDetailMap || {};
            for (const [key, val] of Object.entries(noteMap)) {
                const note = val.note || {};
                if (!note.video) continue;

                const video = note.video;
                const media = video.media || {};
                const stream = media.stream || {};

                // 获取视频 URL
                let videoUrl = '';
                for (const codec of ['h264', 'h265', 'av1']) {
                    const streams = stream[codec] || [];
                    if (streams.length > 0) {
                        videoUrl = streams[0].masterUrl || '';
                        break;
                    }
                }

                // 获取字幕（如果有的话）
                const subtitles = video.subtitles || [];
                const captionText = subtitles.map(s => s.text || s.content || '').join(' ');

                // 获取描述
                const desc = note.desc || '';

                // 获取标签
                const tags = (note.tagList || note.tags || [])
                    .map(t => t.name || t).filter(Boolean);

                return {
                    videoUrl: videoUrl,
                    duration: video.duration || 0,
                    subtitles: captionText,
                    desc: desc,
                    tags: tags,
                    title: note.title || note.display_title || '',
                    author: note.user?.nickname || '',
                };
            }
            return null;
        }""")
        return info
    except Exception as e:
        print(f"   ❌ 获取视频信息失败: {e}")
        return None


def download_video(video_url, save_path):
    """下载视频文件"""
    try:
        import urllib.request
        import ssl
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        req = urllib.request.Request(video_url)
        req.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
        req.add_header('Referer', 'https://www.xiaohongshu.com/')
        resp = urllib.request.urlopen(req, timeout=60, context=ctx)
        with open(save_path, 'wb') as f:
            f.write(resp.read())
        return True
    except Exception as e:
        print(f"   ❌ 视频下载失败: {e}")
        return False


def extract_audio(video_path, audio_path):
    """从视频中提取音频"""
    if not FFMPEG_PATH:
        print("   ❌ ffmpeg 不可用")
        return False
    try:
        cmd = [
            FFMPEG_PATH,
            "-i", str(video_path),
            "-vn",
            "-acodec", "pcm_s16le",
            "-ar", "16000",
            "-ac", "1",
            "-y", str(audio_path)
        ]
        result = subprocess.run(cmd, capture_output=True, timeout=120)
        return result.returncode == 0 and os.path.exists(audio_path)
    except Exception as e:
        print(f"   ❌ 音频提取失败: {e}")
        return False


# ============================================================
# 主流程
# ============================================================

async def main():
    parser = argparse.ArgumentParser(description="小红书视频帖子处理")
    parser.add_argument("--limit", type=int, help="最多处理条数")
    parser.add_argument("--force", action="store_true", help="强制重新处理")
    parser.add_argument("--method", choices=["whisper", "vision", "auto"], default="auto",
                        help="处理方法：whisper=语音转录, vision=AI视觉, auto=自动选择")
    parser.add_argument("--cookie-file", default=COOKIE_FILE)
    parser.add_argument("--headless", action="store_true", default=False)
    args = parser.parse_args()

    print("=" * 60)
    print("🎬 小红书视频帖子处理")
    print("=" * 60)

    # 检查工具
    has_ffmpeg = FFMPEG_PATH is not None
    has_whisper = check_whisper()
    print(f"🔧 ffmpeg: {'✅ ' + FFMPEG_PATH if has_ffmpeg else '❌ 未安装'}")
    print(f"🔧 whisper: {'✅' if has_whisper else '❌ 未安装'}")

    if not has_ffmpeg and not has_whisper and args.method == "whisper":
        print("❌ whisper 和 ffmpeg 都不可用，请先安装")
        sys.exit(1)

    # 加载收藏列表
    if not FAVORITES_JSON.exists():
        print(f"❌ 收藏列表不存在: {FAVORITES_JSON}")
        sys.exit(1)

    with open(FAVORITES_JSON, 'r', encoding='utf-8') as f:
        favorites = json.load(f)

    # 筛选视频帖子
    video_notes = [n for n in favorites if n.get("type") == "video"]
    print(f"📋 视频帖子: {len(video_notes)} 条")

    # 加载进度
    progress = load_progress()
    done_ids = set(progress.get("transcribed", []) + progress.get("vision_processed", []))
    print(f"📦 已处理: {len(done_ids)} 条")

    # 待处理列表
    to_process = []
    for n in video_notes:
        nid = n.get("note_id", "")
        if not args.force and nid in done_ids:
            continue
        to_process.append(n)

    if args.limit:
        to_process = to_process[:args.limit]

    print(f"🆕 待处理: {len(to_process)} 条")
    if not to_process:
        print("✅ 无需处理")
        return

    # 加载 cookies
    cookies = load_cookies(args.cookie_file)

    # 启动 Playwright
    print("\n🚀 启动浏览器...")
    from playwright.async_api import async_playwright
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=args.headless,
            args=["--disable-blink-features=AutomationControlled", "--no-first-run"]
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
        await page.add_init_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined});")

        success = 0
        failed = 0
        tmp_dir = tempfile.mkdtemp(prefix="xhs_video_")

        for i, note in enumerate(to_process):
            nid = note.get("note_id", "")
            token = note.get("xsec_token", "")
            title = note.get("title", nid[:8])

            print(f"\n[{i+1}/{len(to_process)}] {title[:40]}...")

            # 获取视频信息
            info = await get_video_info(page, nid, token)
            if not info or not info.get("videoUrl"):
                print(f"   ❌ 无法获取视频信息")
                progress["failed"].append({"note_id": nid, "title": title, "reason": "no_video_info"})
                failed += 1
                save_progress(progress)
                continue

            transcript = ""

            # 方案C：检查内嵌字幕
            if info.get("subtitles"):
                transcript = info["subtitles"]
                print(f"   📝 使用内嵌字幕 ({len(transcript)} 字)")
                progress["transcribed"].append(nid)
                success += 1
                save_progress(progress)

            # 主方案：抽帧 + AI 视觉分析
            elif has_ffmpeg:
                print(f"   ⬇️  下载视频...")
                video_path = os.path.join(tmp_dir, f"{nid}.mp4")
                if download_video(info["videoUrl"], video_path):
                    print(f"   🖼️  提取关键帧...")
                    frames_dir = os.path.join(tmp_dir, f"frames_{nid}")
                    os.makedirs(frames_dir, exist_ok=True)
                    frames = extract_keyframes(video_path, frames_dir, num_frames=6)
                    if frames:
                        print(f"   📸 提取了 {len(frames)} 帧，AI 分析中...")
                        transcript = analyze_video_frames(
                            frames,
                            desc=info.get("desc", ""),
                            title=info.get("title", title),
                        )
                        if transcript:
                            print(f"   ✅ AI 分析完成 ({len(transcript)} 字)")
                            progress["transcribed"].append(nid)
                            success += 1
                        else:
                            # AI 分析失败，保存描述作为 fallback
                            transcript = info.get("desc", "")
                            if transcript:
                                print(f"   ⚠️  AI 分析失败，使用帖子描述")
                                progress["transcribed"].append(nid)
                                success += 1
                            else:
                                progress["failed"].append({"note_id": nid, "title": title, "reason": "ai_analysis_failed"})
                                failed += 1
                    else:
                        print(f"   ❌ 帧提取失败")
                        progress["failed"].append({"note_id": nid, "title": title, "reason": "frame_extract_failed"})
                        failed += 1
                    # 清理视频文件
                    if os.path.exists(video_path):
                        os.remove(video_path)
                else:
                    print(f"   ❌ 视频下载失败")
                    progress["failed"].append({"note_id": nid, "title": title, "reason": "download_failed"})
                    failed += 1
                save_progress(progress)

            # 无可用方案
            else:
                print(f"   ⚠️  无 ffmpeg，仅保存描述")
                transcript = info.get("desc", "")
                progress["transcribed"].append(nid)
                success += 1
                save_progress(progress)

            # 将转录文本写入对应的 markdown 文件
            if transcript:
                # 查找对应的 md 文件
                md_files = list(OUTPUT_DIR.glob(f"*{title[:10]}*.md"))
                if md_files:
                    md_path = md_files[0]
                    with open(md_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    # 在 [!tip]- 详情区域添加转录内容
                    if "转录内容" not in content:
                        insert_pos = content.find("> [!info]-")
                        if insert_pos > 0:
                            transcript_block = f"""\n> **🗣️ 视频转录：**
> {transcript[:2000]}
>
"""
                            content = content[:insert_pos] + transcript_block + content[insert_pos:]
                            with open(md_path, 'w', encoding='utf-8') as f:
                                f.write(content)
                            print(f"   📄 已更新: {md_path.name}")

            # 速率控制
            await asyncio.sleep(REQUEST_DELAY)

            # 批次暂停
            if (i + 1) % 10 == 0 and i + 1 < len(to_process):
                print(f"\n   ⏸️  已处理 {i+1} 条，暂停 15 秒...")
                await asyncio.sleep(15)

        await browser.close()

        # 清理临时目录
        import shutil
        shutil.rmtree(tmp_dir, ignore_errors=True)

    # 汇总
    print(f"\n{'=' * 60}")
    print(f"📊 视频处理完成")
    print(f"{'=' * 60}")
    print(f"  ✅ 成功: {success}")
    print(f"  ❌ 失败: {failed}")
    print(f"  🗣️  Whisper 转录: {len(progress.get('transcribed', []))}")
    print(f"  🖼️  视觉处理: {len(progress.get('vision_processed', []))}")
    print(f"{'=' * 60}")


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
