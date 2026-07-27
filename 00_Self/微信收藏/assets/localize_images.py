#!/usr/bin/env python3
"""
微信收藏 Markdown 图片本地化工具
- 扫描 .md 文件中的远程图片链接
- 下载图片到本地 assets/ 文件夹
- 重写 Markdown 链接为相对路径
- 可选：添加 Obsidian frontmatter

用法：
    python localize_images.py <markdown目录或文件> [--vault <vault路径>]
"""

import os
import re
import sys
import hashlib
import urllib.request
import urllib.error
import ssl
import time
import argparse
from pathlib import Path
from datetime import datetime


# --- 配置 ---
VALID_IMAGE_EXTS = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg'}
MAX_FILENAME_LEN = 80
DOWNLOAD_TIMEOUT = 15
RETRY_COUNT = 3
RETRY_DELAY = 2
USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'


# --- 正则：匹配 Markdown 图片语法 ---
# 支持：![alt](url) 和 ![[image]]
IMG_REGEX = re.compile(
    r'!\[([^\]]*)\]\(([^)\s]+?)(?:\s+"[^"]*")?\)'  # ![alt](url "title")
)


def ensure_dir(path: Path):
    path.mkdir(parents=True, exist_ok=True)


def url_to_filename(url: str, idx: int) -> str:
    """从 URL 生成唯一文件名"""
    # 提取 URL 中的扩展名
    url_path = url.split('?')[0]
    ext = Path(url_path).suffix.lower()
    if ext not in VALID_IMAGE_EXTS:
        ext = '.jpg'  # 默认

    # 用 URL hash 生成短文件名
    url_hash = hashlib.md5(url.encode()).hexdigest()[:10]
    return f"img_{idx:04d}_{url_hash}{ext}"


def download_image(url: str, save_path: Path, idx: int) -> bool:
    """下载单张图片，支持重试"""
    # 创建不验证 SSL 的上下文（某些微信 CDN 可能有问题）
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    headers = {
        'User-Agent': USER_AGENT,
        'Referer': 'https://mp.weixin.qq.com/',
    }

    for attempt in range(RETRY_COUNT):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=DOWNLOAD_TIMEOUT, context=ctx) as resp:
                content_type = resp.headers.get('Content-Type', '')
                data = resp.read()

                # 验证是否为图片（通过 Content-Type 或文件头）
                if not data or len(data) < 100:
                    print(f"  ⚠️  跳过（内容过小）: {url[:60]}...")
                    return False

                ensure_dir(save_path.parent)
                with open(save_path, 'wb') as f:
                    f.write(data)
                return True

        except (urllib.error.URLError, urllib.error.HTTPError, OSError) as e:
            if attempt < RETRY_COUNT - 1:
                print(f"  ⏳ 重试 ({attempt+1}/{RETRY_COUNT}): {str(e)[:50]}...")
                time.sleep(RETRY_DELAY)
            else:
                print(f"  ❌ 失败: {str(e)[:50]}... | {url[:60]}")
                return False
    return False


def add_frontmatter(content: str, title: str, source_url: str = "") -> str:
    """为 Markdown 添加 Obsidian frontmatter"""
    # 如果已有 frontmatter，不重复添加
    if content.startswith('---'):
        return content

    today = datetime.now().strftime('%Y-%m-%d')
    fm_lines = [
        '---',
        f'created: {today}',
        f'updated: {today}',
        f'tags: [Clippings, 微信收藏]',
        f'source: "{source_url}"',
        f'status: draft',
        '---',
        '',
    ]
    return '\n'.join(fm_lines) + content


def process_markdown_file(
    md_path: Path,
    assets_dir: Path,
    add_fm: bool = True,
    dry_run: bool = False,
) -> dict:
    """处理单个 Markdown 文件：下载图片并重写链接"""
    content = md_path.read_text(encoding='utf-8')
    matches = IMG_REGEX.findall(content)

    if not matches:
        return {'file': md_path.name, 'images': 0, 'downloaded': 0, 'failed': 0}

    stats = {'file': md_path.name, 'images': len(matches), 'downloaded': 0, 'failed': 0}
    new_content = content

    for idx, (alt, url) in enumerate(matches, 1):
        # 跳过已经是本地路径的图片
        if not url.startswith('http'):
            continue

        filename = url_to_filename(url, idx)
        local_path = assets_dir / filename
        relative_path = f"assets/{filename}"

        if dry_run:
            print(f"  📷 [{idx}] {url[:60]}... → {relative_path}")
            stats['downloaded'] += 1
            continue

        # 下载
        print(f"  📷 [{idx}] 下载: {url[:60]}...")
        if download_image(url, local_path, idx):
            # 重写链接
            new_alt = alt if alt else 'image'
            old_pattern = f"![{alt}]({url})"
            new_pattern = f"![{new_alt}]({relative_path})"
            new_content = new_content.replace(old_pattern, new_pattern)
            stats['downloaded'] += 1
            print(f"      ✅ → {relative_path}")
        else:
            stats['failed'] += 1

    # 添加 frontmatter（如果需要）
    if add_fm and not dry_run:
        source_url = ""
        # 尝试从内容提取来源链接
        link_match = re.search(r'\[.*?\]\((https?://mp\.weixin\.qq\.com[^)]+)\)', content)
        if link_match:
            source_url = link_match.group(1)
        elif matches:
            source_url = matches[0][1] if matches[0][1].startswith('http') else ""
        new_content = add_frontmatter(new_content, md_path.stem, source_url)

    # 写回文件
    if not dry_run and new_content != content:
        md_path.write_text(new_content, encoding='utf-8')

    return stats


def find_md_files(path: Path) -> list:
    """查找所有 .md 文件"""
    if path.is_file() and path.suffix == '.md':
        return [path]
    elif path.is_dir():
        return sorted(path.glob('**/*.md'))
    return []


def main():
    parser = argparse.ArgumentParser(
        description='微信收藏 Markdown 图片本地化工具',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例：
  python localize_images.py ./output
  python localize_images.py ./output --vault "C:/Users/xxx/Desktop/Claire"
  python localize_images.py ./output --no-frontmatter
  python localize_images.py ./output --dry-run
        """
    )
    parser.add_argument('path', help='包含 .md 文件的目录或单个 .md 文件')
    parser.add_argument('--vault', help='Obsidian vault 根目录（用于存放 assets）')
    parser.add_argument('--no-frontmatter', action='store_true', help='不添加 frontmatter')
    parser.add_argument('--dry-run', action='store_true', help='仅预览，不实际下载')

    args = parser.parse_args()
    target = Path(args.path).resolve()

    if not target.exists():
        print(f"❌ 路径不存在: {target}")
        sys.exit(1)

    # 确定 assets 目录
    if args.vault:
        assets_dir = Path(args.vault) / '00_Self' / '微信收藏' / 'assets'
    else:
        assets_dir = target.parent / 'assets' if target.is_file() else target / 'assets'

    md_files = find_md_files(target)
    if not md_files:
        print(f"⚠️  未找到 .md 文件: {target}")
        sys.exit(0)

    print(f"📂 找到 {len(md_files)} 个 Markdown 文件")
    print(f"📁 图片保存至: {assets_dir}")
    if args.dry_run:
        print("🔍 预览模式（不实际下载）")
    print("=" * 60)

    total_stats = {'files': 0, 'images': 0, 'downloaded': 0, 'failed': 0}

    for md_file in md_files:
        print(f"\n📄 处理: {md_file.name}")
        stats = process_markdown_file(
            md_file,
            assets_dir,
            add_fm=not args.no_frontmatter,
            dry_run=args.dry_run,
        )
        print(f"   图片: {stats['images']} | 下载: {stats['downloaded']} | 失败: {stats['failed']}")

        total_stats['files'] += 1
        total_stats['images'] += stats['images']
        total_stats['downloaded'] += stats['downloaded']
        total_stats['failed'] += stats['failed']

    print("\n" + "=" * 60)
    print(f"✅ 完成！共处理 {total_stats['files']} 个文件")
    print(f"   总图片: {total_stats['images']} | 下载: {total_stats['downloaded']} | 失败: {total_stats['failed']}")


if __name__ == '__main__':
    main()
