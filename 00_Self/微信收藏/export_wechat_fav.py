#!/usr/bin/env python3
"""
微信收藏 → Obsidian Markdown 一键导出工具
==========================================
监控剪贴板，自动捕获微信文章链接，下载并转为本地 Markdown + 图片。

使用方法：
    python export_wechat_fav.py

操作流程：
    1. 运行脚本
    2. 打开微信 PC → 收藏
    3. 逐条打开收藏文章 → Ctrl+C 复制链接
    4. 脚本自动捕获并下载（无需等待，可连续 Ctrl+C）
    5. 按 Ctrl+Q 结束

依赖：
    pip install pyperclip    # 剪贴板访问
    （可选）pip install keyboard  # Ctrl+Q 热键（无则用 Ctrl+C 退出）

输出：
    vault/00_Self/微信收藏/
    ├── 文章标题.md          ← Markdown + 本地图片
    ├── assets/              ← 下载的图片
    └── .export_log.json     ← 导出记录
"""

import os
import re
import sys
import json
import time
import hashlib
import threading
import urllib.request
import urllib.error
import ssl
import html
import signal
from pathlib import Path
from datetime import datetime
from html.parser import HTMLParser

# ============================================================
# 配置
# ============================================================
VAULT_ROOT = Path(r"C:\Users\qi'yue\Desktop\Claire")
EXPORT_DIR = VAULT_ROOT / "00_Self" / "微信收藏"
ASSETS_DIR = EXPORT_DIR / "assets"
LOG_FILE = EXPORT_DIR / ".export_log.json"

# HTTP 配置
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
DOWNLOAD_TIMEOUT = 20
RETRY_COUNT = 3
RETRY_DELAY = 2

# 微信文章 URL 正则
WECHAT_URL_PATTERNS = [
    re.compile(r'https?://mp\.weixin\.qq\.com/s[/?]\S+'),
    re.compile(r'https?://mp\.weixin\.qq\.com/s/[A-Za-z0-9_-]+'),
    re.compile(r'https?://mp\.weixin\.qq\.com/cgi-bin/[^\s"\'<>]+'),
]

# 图片 URL 正则（HTML 中）
HTML_IMG_PATTERNS = [
    re.compile(r'<img[^>]+data-src="([^"]+)"', re.IGNORECASE),
    re.compile(r'<img[^>]+src="([^"]+)"', re.IGNORECASE),
    re.compile(r'background-image:\s*url\(["\']?([^"\')\s]+)["\']?\)', re.IGNORECASE),
]

# Markdown 图片正则
MD_IMG_REGEX = re.compile(r'!\[([^\]]*)\]\(([^)\s]+?)(?:\s+"[^"]*")?\)')

# 标题正则（从 HTML 提取）
TITLE_REGEX = re.compile(r'<title[^>]*>(.*?)</title>', re.IGNORECASE | re.DOTALL)
H1_REGEX = re.compile(r'<h1[^>]*>(.*?)</h1>', re.IGNORECASE | re.DOTALL)

# ============================================================
# 工具函数
# ============================================================

def get_ssl_context():
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    return ctx


def url_to_filename(url: str, idx: int) -> str:
    url_path = url.split("?")[0].split("#")[0]
    ext = Path(url_path).suffix.lower()
    if ext not in {".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".svg"}:
        ext = ".jpg"
    url_hash = hashlib.md5(url.encode()).hexdigest()[:10]
    return f"img_{idx:04d}_{url_hash}{ext}"


def sanitize_filename(name: str, max_len: int = 80) -> str:
    """清理文件名，移除非法字符"""
    name = re.sub(r'[\\/:*?"<>|\n\r\t]', '', name)
    name = re.sub(r'\s+', ' ', name).strip()
    name = name.strip('.')
    if len(name) > max_len:
        name = name[:max_len]
    return name or "未命名文章"


def fetch_url(url: str) -> bytes:
    """下载 URL 内容，带重试"""
    headers = {
        "User-Agent": USER_AGENT,
        "Referer": "https://mp.weixin.qq.com/",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    }
    for attempt in range(RETRY_COUNT):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=DOWNLOAD_TIMEOUT, context=get_ssl_context()) as resp:
                return resp.read()
        except Exception as e:
            if attempt < RETRY_COUNT - 1:
                time.sleep(RETRY_DELAY)
            else:
                raise


# ============================================================
# HTML → Markdown 转换器（轻量级，无需外部依赖）
# ============================================================

class HtmlToMarkdown(HTMLParser):
    """将微信文章 HTML 转换为 Markdown"""

    def __init__(self):
        super().__init__()
        self.result = []
        self.current_tag = None
        self.tag_stack = []
        self.skip_tags = {"script", "style", "noscript", "svg", "head"}
        self.skip_depth = 0
        self.title = ""
        self.images = []
        self.in_code = False

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        self.tag_stack.append(tag)

        if tag in self.skip_tags:
            self.skip_depth += 1
            return
        if self.skip_depth > 0:
            return

        if tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            level = int(tag[1])
            self.result.append("\n\n" + "#" * level + " ")
        elif tag == "p":
            self.result.append("\n\n")
        elif tag == "br":
            self.result.append("\n")
        elif tag == "strong" or tag == "b":
            self.result.append("**")
        elif tag == "em" or tag == "i":
            self.result.append("*")
        elif tag == "code":
            self.in_code = True
            self.result.append("`")
        elif tag == "pre":
            self.result.append("\n\n```\n")
        elif tag == "blockquote":
            self.result.append("\n\n> ")
        elif tag == "li":
            self.result.append("\n- ")
        elif tag == "a":
            href = attrs_dict.get("href", "")
            if href and not href.startswith("javascript"):
                self.result.append("[")
        elif tag == "img":
            src = attrs_dict.get("data-src") or attrs_dict.get("src", "")
            alt = attrs_dict.get("alt", "image")
            if src and src.startswith("http"):
                self.images.append(src)
                self.result.append(f"![{alt}]({src})")
        elif tag == "hr":
            self.result.append("\n\n---\n\n")
        elif tag == "section" or tag == "div":
            self.result.append("\n")

    def handle_endtag(self, tag):
        if self.tag_stack and self.tag_stack[-1] == tag:
            self.tag_stack.pop()

        if tag in self.skip_tags and self.skip_depth > 0:
            self.skip_depth -= 1
            return
        if self.skip_depth > 0:
            return

        if tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self.result.append("\n")
        elif tag == "strong" or tag == "b":
            self.result.append("**")
        elif tag == "em" or tag == "i":
            self.result.append("*")
        elif tag == "code":
            self.in_code = False
            self.result.append("`")
        elif tag == "pre":
            self.result.append("\n```\n\n")
        elif tag == "blockquote":
            self.result.append("\n")
        elif tag == "a":
            # 回溯查找 href
            pass
        elif tag == "section" or tag == "div":
            self.result.append("\n")

    def handle_data(self, data):
        if self.skip_depth > 0:
            return
        text = data.strip()
        if not text:
            return
        # 解码 HTML 实体
        text = html.unescape(text)
        self.result.append(text)

    def handle_entityref(self, name):
        char = html.unescape(f"&{name};")
        self.result.append(char)

    def handle_charref(self, name):
        char = html.unescape(f"&#{name};")
        self.result.append(char)

    def get_markdown(self):
        text = "".join(self.result)
        # 清理多余空行
        text = re.sub(r'\n{3,}', '\n\n', text)
        text = text.strip()
        return text

    def get_title(self):
        return self.title

    def set_title(self, title):
        self.title = title


def html_to_markdown(html_content: str) -> tuple:
    """
    将 HTML 转换为 Markdown，返回 (markdown_text, images_list, title)
    """
    # 提取标题
    title = ""
    title_match = TITLE_REGEX.search(html_content)
    if title_match:
        title = html.unescape(title_match.group(1)).strip()

    h1_match = H1_REGEX.search(html_content)
    if h1_match:
        h1_text = re.sub(r'<[^>]+>', '', h1_match.group(1)).strip()
        if h1_text:
            title = h1_text

    if not title:
        # 从 meta 描述中提取
        og_match = re.search(r'<meta[^>]+property="og:title"[^>]+content="([^"]+)"', html_content)
        if og_match:
            title = html.unescape(og_match.group(1)).strip()

    # 转换
    converter = HtmlToMarkdown()
    try:
        converter.set_title(title)
        converter.feed(html_content)
    except Exception:
        pass

    markdown = converter.get_markdown()
    images = converter.images

    return markdown, images, title


# ============================================================
# 图片下载
# ============================================================

def download_image(url: str, save_path: Path, idx: int) -> bool:
    for attempt in range(RETRY_COUNT):
        try:
            req = urllib.request.Request(url, headers={
                "User-Agent": USER_AGENT,
                "Referer": "https://mp.weixin.qq.com/",
            })
            with urllib.request.urlopen(req, timeout=DOWNLOAD_TIMEOUT, context=get_ssl_context()) as resp:
                data = resp.read()
                if not data or len(data) < 100:
                    return False
                save_path.parent.mkdir(parents=True, exist_ok=True)
                with open(save_path, "wb") as f:
                    f.write(data)
                return True
        except Exception:
            if attempt < RETRY_COUNT - 1:
                time.sleep(RETRY_DELAY)
    return False


def download_images_local(markdown: str, article_assets_dir: Path, article_idx: int) -> str:
    """下载 Markdown 中的远程图片到本地，重写链接"""
    matches = MD_IMG_REGEX.findall(markdown)
    if not matches:
        return markdown

    new_markdown = markdown
    for idx, (alt, url) in enumerate(matches, 1):
        if not url.startswith("http"):
            continue

        filename = url_to_filename(url, idx)
        local_path = article_assets_dir / filename
        relative_path = f"assets/{filename}"

        if download_image(url, local_path, article_idx * 1000 + idx):
            old_pattern = f"![{alt}]({url})"
            new_pattern = f"![{alt}]({relative_path})"
            new_markdown = new_markdown.replace(old_pattern, new_pattern)

    return new_markdown


# ============================================================
# 文章处理
# ============================================================

def process_article(url: str, article_idx: int) -> dict:
    """处理单篇文章：下载 HTML → 转 Markdown → 下载图片 → 保存"""
    result = {"url": url, "success": False, "title": "", "file": "", "images": 0}

    try:
        print(f"\n{'─'*60}")
        print(f"📥 [{article_idx}] 正在下载: {url[:70]}...")

        # 下载 HTML
        raw = fetch_url(url)
        # 尝试多种编码
        for encoding in ["utf-8", "gbk", "gb2312", "latin-1"]:
            try:
                html_content = raw.decode(encoding)
                break
            except (UnicodeDecodeError, LookupError):
                continue
        else:
            html_content = raw.decode("utf-8", errors="replace")

        # HTML → Markdown
        markdown, images, title = html_to_markdown(html_content)
        title = sanitize_filename(title) if title else f"收藏_{article_idx:03d}"
        result["title"] = title

        print(f"   📝 标题: {title}")
        print(f"   📷 发现 {len(images)} 张图片")

        # 添加 frontmatter
        today = datetime.now().strftime("%Y-%m-%d")
        frontmatter = (
            f"---\n"
            f"created: {today}\n"
            f"updated: {today}\n"
            f"tags: [Clippings, 微信收藏]\n"
            f'source: "{url}"\n'
            f"status: draft\n"
            f"---\n\n"
        )
        full_markdown = frontmatter + f"# {title}\n\n" + markdown

        # 下载图片到本地
        article_assets_dir = ASSETS_DIR
        article_assets_dir.mkdir(parents=True, exist_ok=True)

        if images:
            full_markdown = download_images_local(full_markdown, article_assets_dir, article_idx)
            # 统计实际下载成功的图片数
            local_imgs = MD_IMG_REGEX.findall(full_markdown)
            result["images"] = sum(1 for _, p in local_imgs if not p.startswith("http"))

        # 保存文件
        md_filename = f"{title}.md"
        md_path = EXPORT_DIR / md_filename
        # 避免重名
        counter = 1
        while md_path.exists():
            md_filename = f"{title}_{counter}.md"
            md_path = EXPORT_DIR / md_filename
            counter += 1

        md_path.write_text(full_markdown, encoding="utf-8")
        result["file"] = md_filename
        result["success"] = True

        # 自动生成 HTML
        try:
            from md_to_html import convert_md_to_html
            html_result = convert_md_to_html(md_path)
            if html_result.get("success"):
                result["html_file"] = html_result.get("html_file", "")
                print(f"   🌐 HTML: {result['html_file']}")
        except Exception:
            pass  # HTML 生成失败不影响主流程

        print(f"   ✅ 已保存: {md_filename}")
        print(f"   📷 本地图片: {result['images']}/{len(images)}")

    except Exception as e:
        print(f"   ❌ 失败: {str(e)[:80]}")

    return result


# ============================================================
# 剪贴板监控
# ============================================================

def extract_url(text: str) -> str:
    """从剪贴板文本中提取微信文章 URL"""
    for pattern in WECHAT_URL_PATTERNS:
        match = pattern.search(text)
        if match:
            url = match.group(0)
            # 清理尾部可能的多余字符
            url = url.rstrip('")>\'')
            return url
    return ""


def load_log() -> list:
    if LOG_FILE.exists():
        try:
            return json.loads(LOG_FILE.read_text(encoding="utf-8"))
        except Exception:
            return []
    return []


def save_log(log: list):
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    LOG_FILE.write_text(json.dumps(log, ensure_ascii=False, indent=2), encoding="utf-8")


class ClipboardMonitor:
    """剪贴板监控器"""

    def __init__(self):
        self.seen_urls = set()
        self.results = []
        self.running = True
        self.article_counter = 0

        # 加载历史记录，避免重复
        log = load_log()
        for entry in log:
            if entry.get("url"):
                self.seen_urls.add(entry["url"])
        if log:
            self.article_counter = len(log)

    def stop(self):
        self.running = False

    def process_clipboard(self, text: str):
        url = extract_url(text)
        if not url:
            return
        if url in self.seen_urls:
            return

        self.seen_urls.add(url)
        self.article_counter += 1

        result = process_article(url, self.article_counter)
        self.results.append(result)

        # 每处理一篇就保存日志
        save_log(self.results)

    def run(self):
        """主循环：监控剪贴板"""
        try:
            import pyperclip
        except ImportError:
            print("❌ 缺少 pyperclip 库，请运行: pip install pyperclip")
            sys.exit(1)

        # 尝试导入 keyboard（可选）
        has_keyboard = False
        try:
            import keyboard
            has_keyboard = True
        except ImportError:
            pass

        # 确保输出目录存在
        EXPORT_DIR.mkdir(parents=True, exist_ok=True)
        ASSETS_DIR.mkdir(parents=True, exist_ok=True)

        print("=" * 60)
        print("  微信收藏 → Obsidian 导出工具")
        print("=" * 60)
        print()
        print("📋 操作说明：")
        print("   1. 打开微信 PC → 收藏")
        print("   2. 逐条打开文章 → Ctrl+C 复制链接")
        print("   3. 脚本自动捕获并下载")
        if has_keyboard:
            print("   4. 按 Ctrl+Q 结束导出")
        else:
            print("   4. 按 Ctrl+C 结束导出")
        print()
        print(f"📁 输出目录: {EXPORT_DIR}")
        print(f"📊 已有记录: {len(self.seen_urls)} 条（跳过重复）")
        print()

        # 注册 Ctrl+Q 退出热键
        if has_keyboard:
            keyboard.add_hotkey("ctrl+q", self.stop)
            print("⌨️  Ctrl+Q = 结束导出")
        else:
            print("💡 未安装 keyboard 库，用 Ctrl+C 退出")
            print("   （可选安装: pip install keyboard）")

        print()
        print("👀 等待复制微信文章链接...")
        print("─" * 60)

        last_clipboard = ""
        try:
            while self.running:
                try:
                    current = pyperclip.paste()
                except Exception:
                    time.sleep(0.5)
                    continue

                if current != last_clipboard:
                    last_clipboard = current
                    if current.strip():
                        self.process_clipboard(current.strip())

                time.sleep(0.5)

        except KeyboardInterrupt:
            pass
        finally:
            self.print_summary()

    def print_summary(self):
        print()
        print("=" * 60)
        print("  📊 导出总结")
        print("=" * 60)

        success = [r for r in self.results if r.get("success")]
        failed = [r for r in self.results if not r.get("success")]

        print(f"  本次处理: {len(self.results)} 篇")
        print(f"  ✅ 成功: {len(success)} 篇")
        if failed:
            print(f"  ❌ 失败: {len(failed)} 篇")
            for f in failed:
                print(f"     - {f.get('url', '')[:60]}")

        total_images = sum(r.get("images", 0) for r in success)
        print(f"  📷 本地图片: {total_images} 张")
        print(f"  📁 输出目录: {EXPORT_DIR}")

        if success:
            print()
            print("  已导出的文章：")
            for r in success:
                print(f"    📄 {r.get('file', '未知')}")

        print()
        print("💡 在 Obsidian 中打开即可查看")
        print("─" * 60)


# ============================================================
# 入口
# ============================================================

def main():
    # Windows 终端 UTF-8 支持
    if sys.platform == "win32":
        os.system("chcp 65001 >nul 2>&1")

    monitor = ClipboardMonitor()

    # 优雅退出
    def signal_handler(sig, frame):
        monitor.stop()

    signal.signal(signal.SIGINT, signal_handler)

    monitor.run()


if __name__ == "__main__":
    main()
