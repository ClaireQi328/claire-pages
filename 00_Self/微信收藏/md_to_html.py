#!/usr/bin/env python3
"""
微信收藏 Markdown → 干净 HTML 转换器
====================================
清洗微信公众号噪音，生成排版优美的单文件 HTML。

用法：
    python md_to_html.py                    # 批量处理所有 .md
    python md_to_html.py article.md         # 处理单个文件
    python md_to_html.py --summary          # 生成内容摘要
"""

import os
import re
import sys
import json
import html as html_mod
from pathlib import Path
from datetime import datetime

# ============================================================
# 配置
# ============================================================
VAULT_ROOT = Path(r"C:\Users\qi'yue\Desktop\Claire")
EXPORT_DIR = VAULT_ROOT / "00_Self" / "微信收藏"
HTML_DIR = EXPORT_DIR / "html"
ASSETS_DIR = EXPORT_DIR / "assets"

# ============================================================
# HTML 模板
# ============================================================
HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<style>
:root {{
  --bg: #ffffff;
  --bg-secondary: #f8f9fa;
  --text: #1a1a1a;
  --text-secondary: #666666;
  --border: #e5e7eb;
  --accent: #2563eb;
  --accent-light: #eff6ff;
  --callout-bg: #f0f7ff;
  --callout-border: #3b82f6;
  --code-bg: #f3f4f6;
}}

* {{ margin: 0; padding: 0; box-sizing: border-box; }}

body {{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  background: var(--bg-secondary);
  color: var(--text);
  line-height: 1.8;
  font-size: 16px;
}}

.container {{
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}}

/* 头部 */
.header {{
  background: var(--bg);
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}}

.header h1 {{
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 16px;
  color: var(--text);
}}

.meta {{
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 16px;
}}

.meta-item {{
  display: inline-flex;
  align-items: center;
  gap: 4px;
}}

.meta-item a {{
  color: var(--accent);
  text-decoration: none;
}}

.meta-item a:hover {{
  text-decoration: underline;
}}

.tags {{
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}}

.tag {{
  background: var(--accent-light);
  color: var(--accent);
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 500;
}}

/* Callout 摘要 */
.callout {{
  background: var(--callout-bg);
  border-left: 4px solid var(--callout-border);
  border-radius: 0 8px 8px 0;
  padding: 16px 20px;
  margin: 20px 0;
  font-size: 15px;
  color: #1e40af;
  line-height: 1.7;
}}

.callout-label {{
  font-weight: 600;
  margin-bottom: 4px;
}}

/* 正文 */
.content {{
  background: var(--bg);
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}}

.content h1 {{
  display: none;
}}

.content h2 {{
  font-size: 20px;
  font-weight: 600;
  margin: 32px 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}}

.content h3 {{
  font-size: 18px;
  font-weight: 600;
  margin: 24px 0 12px;
}}

.content h4 {{
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0 8px;
}}

.content p {{
  margin: 12px 0;
}}

.content strong {{
  font-weight: 600;
}}

.content img {{
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 16px 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}}

.content ul, .content ol {{
  margin: 12px 0;
  padding-left: 24px;
}}

.content li {{
  margin: 6px 0;
}}

.content blockquote {{
  border-left: 3px solid var(--border);
  padding: 8px 16px;
  margin: 16px 0;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  border-radius: 0 8px 8px 0;
}}

.content code {{
  background: var(--code-bg);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: "SF Mono", "Fira Code", Consolas, monospace;
  font-size: 14px;
}}

.content pre {{
  background: #1e293b;
  color: #e2e8f0;
  padding: 16px 20px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 16px 0;
}}

.content pre code {{
  background: none;
  padding: 0;
  color: inherit;
}}

.content a {{
  color: var(--accent);
  text-decoration: none;
}}

.content a:hover {{
  text-decoration: underline;
}}

.content hr {{
  border: none;
  border-top: 1px solid var(--border);
  margin: 24px 0;
}}

/* 底部链接 */
.footer {{
  text-align: center;
  padding: 24px;
  font-size: 14px;
  color: var(--text-secondary);
}}

.footer a {{
  color: var(--accent);
  text-decoration: none;
}}

/* 响应式 */
@media (max-width: 640px) {{
  .container {{ padding: 12px; }}
  .header, .content {{ padding: 20px; }}
  .header h1 {{ font-size: 20px; }}
}}
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>{title}</h1>
    <div class="meta">
      <span class="meta-item">📅 {date}</span>
      <span class="meta-item">🔗 <a href="{source_url}" target="_blank">阅读原文</a></span>
    </div>
    <div class="tags">{tags_html}</div>
  </div>

  <div class="callout">
    <div class="callout-label">💡 内容摘要</div>
    <div>{summary}</div>
  </div>

  <div class="content">
    {content_html}
  </div>

  <div class="footer">
    <a href="{source_url}" target="_blank">📎 查看原文</a>
  </div>
</div>
</body>
</html>"""


# ============================================================
# 微信噪音清洗
# ============================================================

# 需要删除的微信 UI 残留文本
CLEANUP_PATTERNS = [
    # 微信 UI 元素
    r'预览时标签不可点',
    r'微信扫一扫.*',
    r'微信扫码.*',
    r'关注该公众号.*',
    r'取消允许.*',
    r'在小说阅读器.*',
    r'去阅读.*',
    r'阅读全文.*',
    r'阅读原文.*',
    r'分享到朋友圈.*',
    r'分享给朋友.*',
    r'复制链接.*',
    r'投诉.*',
    r'生成海报.*',
    r'前往小程序.*',
    r'不再弹出.*',
    r'我知道了.*',
    # 微信交互元素
    r'视频小程序.*',
    r'轻点两下取消.*',
    r'赞.*轻点两下.*',
    r'在看.*轻点两下.*',
    r'分享留言收藏.*',
    r'听过.*',
    r'听过本内容.*',
    # 广告和推广
    r'长按识别二维码.*',
    r'点击关注.*',
    r'点击上方蓝字.*',
    r'点击下方.*关注.*',
    r'商务合作.*',
    r'投稿.*',
    r'转载.*请联系.*',
    r'加星标.*',
    r'星标.*公众号.*',
    # 底部残留
    r'▼往期精彩回顾.*',
    r'▼今日福利.*',
    r'▼往期.*',
    r'▼点.*查看.*',
]

# 正则编译
CLEANUP_RE = [re.compile(p, re.IGNORECASE) for p in CLEANUP_PATTERNS]


def clean_inline_noise(text: str) -> str:
    """清洗行内微信噪音（混合在正文中的噪音文本）"""
    # 行内噪音片段
    inline_noise = [
        r'视频小程序赞，轻点两下取消赞在看，轻点两下取消在看分享留言收藏听过',
        r'视频小程序.*?取消在看',
        r'轻点两下取消.*',
        r'分享留言收藏.*',
        r'听过.*?小程序',
        r'微信扫码加入星球.*',
        r'微信扫码.*',
        r'加入星球.*',
        r'，，，，，，，，，，，，。',
        r'，，，，，，，，，，，，',
        r'在小说阅读器中沉浸阅读.*',
        r'在小说阅读器.*',
    ]
    for pattern in inline_noise:
        text = re.sub(pattern, '', text)
    # 清理连续逗号
    text = re.sub(r'，{3,}', '', text)
    # 清理连续句号
    text = re.sub(r'。{3,}', '', text)
    return text.strip()


def clean_wechat_noise(text: str) -> str:
    """清洗微信公众号特有的噪音内容"""
    lines = text.split('\n')
    cleaned = []

    for i, line in enumerate(lines):
        stripped = line.strip()

        # 跳过空行连续过多
        if stripped == '' and cleaned and cleaned[-1] == '':
            continue

        # 跳过纯星号分隔线
        if re.match(r'^[\*]{3,}$', stripped):
            continue

        # 跳过匹配噪音模式的行
        skip = False
        for pattern in CLEANUP_RE:
            if pattern.match(stripped):
                skip = True
                break
        if skip:
            continue

        # 跳过重复的标题（H1 出现两次时删除第二次）
        if stripped.startswith('# ') and not stripped.startswith('## '):
            title_text = stripped[2:].strip()
            found_dup = False
            for prev in cleaned[-5:]:
                if prev.startswith('# ') and prev[2:].strip() == title_text:
                    found_dup = True
                    break
            if found_dup:
                continue

        # 跳过 "原创xxx" 作者水印
        if re.match(r'^原创.{1,20}$', stripped):
            continue

        # 跳过短噪音行（小于5个字符且全是标点或特殊字符）
        if len(stripped) < 5 and not any(c.isalnum() for c in stripped):
            continue

        # 清理空 ** 标记
        if re.match(r'^[\*\s]+$', stripped):
            continue

        # 行内噪音清洗
        stripped = clean_inline_noise(stripped)
        if not stripped:
            continue

        # 清理 HTML 实体
        stripped = stripped.replace('&amp;amp;', '&')
        stripped = stripped.replace('&amp;', '&')

        # 更新原始行（保持缩进）
        line_indent = line[:len(line) - len(line.lstrip())]
        cleaned.append(line_indent + stripped)

    # 删除开头和结尾的空行
    while cleaned and cleaned[0].strip() == '':
        cleaned.pop(0)
    while cleaned and cleaned[-1].strip() == '':
        cleaned.pop()

    return '\n'.join(cleaned)


# ============================================================
# Markdown → HTML 转换（轻量级，无外部依赖）
# ============================================================

def md_to_html_simple(md_text: str) -> str:
    """将 Markdown 转换为 HTML（支持常用语法）"""
    lines = md_text.split('\n')
    html_lines = []
    in_code_block = False
    in_list = False
    list_type = None  # 'ul' or 'ol'

    for line in lines:
        stripped = line.strip()

        # 代码块
        if stripped.startswith('```'):
            if in_code_block:
                html_lines.append('</code></pre>')
                in_code_block = False
            else:
                lang = stripped[3:].strip()
                html_lines.append(f'<pre><code class="language-{lang}">')
                in_code_block = True
            continue

        if in_code_block:
            html_lines.append(html_mod.escape(line))
            continue

        # 空行
        if not stripped:
            if in_list:
                html_lines.append(f'</{list_type}>')
                in_list = False
            html_lines.append('')
            continue

        # 标题
        if stripped.startswith('#'):
            level = len(stripped) - len(stripped.lstrip('#'))
            text = stripped[level:].strip()
            if level <= 4:
                html_lines.append(f'<h{level}>{inline_md(text)}</h{level}>')
            else:
                html_lines.append(f'<p>{inline_md(text)}</p>')
            continue

        # 引用
        if stripped.startswith('>'):
            text = stripped[1:].strip()
            html_lines.append(f'<blockquote>{inline_md(text)}</blockquote>')
            continue

        # 无序列表
        if re.match(r'^[-*+]\s', stripped):
            text = re.sub(r'^[-*+]\s', '', stripped)
            if not in_list or list_type != 'ul':
                if in_list:
                    html_lines.append(f'</{list_type}>')
                html_lines.append('<ul>')
                in_list = True
                list_type = 'ul'
            html_lines.append(f'<li>{inline_md(text)}</li>')
            continue

        # 有序列表
        if re.match(r'^\d+\.\s', stripped):
            text = re.sub(r'^\d+\.\s', '', stripped)
            if not in_list or list_type != 'ol':
                if in_list:
                    html_lines.append(f'</{list_type}>')
                html_lines.append('<ol>')
                in_list = True
                list_type = 'ol'
            html_lines.append(f'<li>{inline_md(text)}</li>')
            continue

        # 分隔线
        if re.match(r'^[-*_]{3,}$', stripped):
            html_lines.append('<hr>')
            continue

        # 图片
        img_match = re.match(r'!\[([^\]]*)\]\(([^)]+)\)', stripped)
        if img_match:
            alt = img_match.group(1)
            src = img_match.group(2)
            # 修正路径：HTML 在 html/ 子目录，assets 需要 ../assets
            if src.startswith('assets/'):
                src = '../' + src
            html_lines.append(f'<img src="{src}" alt="{alt}" loading="lazy">')
            continue

        # 关闭列表
        if in_list:
            html_lines.append(f'</{list_type}>')
            in_list = False

        # 普通段落
        html_lines.append(f'<p>{inline_md(stripped)}</p>')

    if in_list:
        html_lines.append(f'</{list_type}>')

    return '\n'.join(html_lines)


def inline_md(text: str) -> str:
    """处理行内 Markdown 语法"""
    # 图片（先处理，避免被其他规则干扰）
    def fix_img_path(m):
        alt, src = m.group(1), m.group(2)
        if src.startswith('assets/'):
            src = '../' + src
        return f'<img src="{src}" alt="{alt}" loading="lazy">'
    text = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', fix_img_path, text)
    # 链接
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2" target="_blank">\1</a>', text)
    # 粗体
    text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)
    # 斜体
    text = re.sub(r'\*([^*]+)\*', r'<em>\1</em>', text)
    # 行内代码
    text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)
    return text


# ============================================================
# Frontmatter 解析
# ============================================================

def parse_frontmatter(text: str) -> tuple:
    """解析 YAML frontmatter，返回 (metadata_dict, content)"""
    if not text.startswith('---'):
        return {}, text

    end = text.find('---', 3)
    if end == -1:
        return {}, text

    fm_text = text[3:end].strip()
    content = text[end+3:].strip()

    meta = {}
    for line in fm_text.split('\n'):
        if ':' in line:
            key, val = line.split(':', 1)
            key = key.strip()
            val = val.strip().strip('"').strip("'")
            if key == 'tags':
                # 解析 [Clippings, 微信收藏] 格式
                val = val.strip('[]').split(',')
                val = [t.strip() for t in val]
            meta[key] = val

    return meta, content


def extract_tags_html(tags) -> str:
    """生成标签 HTML"""
    if not tags:
        return ''
    if isinstance(tags, str):
        tags = [t.strip() for t in tags.split(',')]
    return ''.join(f'<span class="tag">#{t}</span>' for t in tags if t)


# ============================================================
# 主转换函数
# ============================================================

def convert_md_to_html(md_path: Path, summary: str = "") -> dict:
    """将单个 Markdown 文件转换为 HTML"""
    result = {"file": md_path.name, "success": False}

    try:
        raw = md_path.read_text(encoding='utf-8')
        meta, content = parse_frontmatter(raw)

        # 清洗微信噪音
        cleaned = clean_wechat_noise(content)

        # 转换为 HTML
        content_html = md_to_html_simple(cleaned)

        # 提取元数据
        title = meta.get('title', md_path.stem)
        # 如果标题中还有 HTML 实体，解码
        title = title.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')
        source_url = meta.get('source', '#')
        date = meta.get('created', datetime.now().strftime('%Y-%m-%d'))
        tags = meta.get('tags', ['Clippings', '微信收藏'])

        # 生成摘要（如果没提供）
        if not summary:
            summary = generate_summary(cleaned)

        tags_html = extract_tags_html(tags)

        # 生成 HTML
        html_output = HTML_TEMPLATE.format(
            title=html_mod.escape(title),
            date=date,
            source_url=source_url,
            tags_html=tags_html,
            summary=summary,
            content_html=content_html,
        )

        # 写入文件
        HTML_DIR.mkdir(parents=True, exist_ok=True)
        html_filename = md_path.stem + '.html'
        html_path = HTML_DIR / html_filename
        html_path.write_text(html_output, encoding='utf-8')

        result["success"] = True
        result["html_file"] = html_filename
        result["title"] = title

    except Exception as e:
        result["error"] = str(e)

    return result


def generate_summary(text: str) -> str:
    """从文章内容生成简短摘要"""
    # 取前 200 个非空、非标题的文本行
    lines = []
    for line in text.split('\n'):
        stripped = line.strip()
        if not stripped or stripped.startswith('#') or stripped.startswith('!'):
            continue
        if re.match(r'^[-*+]\s', stripped):
            stripped = re.sub(r'^[-*+]\s', '', stripped)
        if len(stripped) > 10:
            lines.append(stripped)
        if len(lines) >= 5:
            break

    if not lines:
        return "暂无摘要"

    summary = ' '.join(lines)
    # 截断到合理长度
    if len(summary) > 300:
        summary = summary[:297] + '...'

    return summary


# ============================================================
# 入口
# ============================================================

def main():
    if sys.platform == "win32":
        os.system("chcp 65001 >nul 2>&1")

    # 确定要处理的文件
    if len(sys.argv) > 1 and sys.argv[1] != '--summary':
        # 单文件模式
        md_path = Path(sys.argv[1])
        if not md_path.exists():
            print(f"❌ 文件不存在: {md_path}")
            sys.exit(1)
        files = [md_path]
    else:
        # 批量模式
        files = sorted(EXPORT_DIR.glob('*.md'))
        if not files:
            print(f"⚠️ 未找到 .md 文件: {EXPORT_DIR}")
            sys.exit(0)

    print(f"📂 找到 {len(files)} 个 Markdown 文件")
    print(f"📁 HTML 输出: {HTML_DIR}")
    print("=" * 60)

    results = []
    for md_file in files:
        if md_file.name.startswith('.'):
            continue
        print(f"\n📄 转换: {md_file.name}")
        result = convert_md_to_html(md_file)
        results.append(result)
        if result["success"]:
            print(f"   ✅ → {result['html_file']}")
        else:
            print(f"   ❌ {result.get('error', '未知错误')}")

    # 统计
    success = [r for r in results if r["success"]]
    failed = [r for r in results if not r["success"]]

    print("\n" + "=" * 60)
    print(f"✅ 转换完成: {len(success)} 篇成功, {len(failed)} 篇失败")
    print(f"📁 HTML 文件: {HTML_DIR}")

    if failed:
        print("\n❌ 失败列表:")
        for f in failed:
            print(f"   - {f['file']}: {f.get('error', '')}")


if __name__ == "__main__":
    main()
