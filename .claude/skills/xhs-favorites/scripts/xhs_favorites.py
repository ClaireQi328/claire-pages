#!/usr/bin/env python3
"""
小红书收藏夹全量拉取脚本
使用 Playwright 浏览器自动化，从用户收藏页提取所有收藏笔记的 ID 和元数据。

用法:
  python xhs_favorites.py                          # 拉取所有收藏
  python xhs_favorites.py --limit 20               # 只拉取前20条（测试用）
  python xhs_favorites.py --profile-url <url>       # 指定用户主页URL
  python xhs_favorites.py --output favorites.json   # 自定义输出路径

输出:
  JSON 文件，包含每条收藏的 note_id、标题、作者、封面、类型等元数据。
  可被 xhs-favorites skill 的批量提取阶段消费。
"""

import json
import os
import re
import sys
import time
import asyncio
import argparse
from pathlib import Path

# Windows GBK 编码兼容：强制 UTF-8 输出
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")

# ============================================================
# 配置
# ============================================================

COOKIE_FILE = os.path.expanduser("~/cookies.json")
VAULT_ROOT = Path(os.environ.get("VAULT_ROOT", r"C:\Users\qi'yue\Desktop\Claire"))
DEFAULT_OUTPUT = VAULT_ROOT / "99_Clippings" / "xhs_favorites_list.json"

# 收藏页 URL（已验证可用）
COLLECTION_URL_TEMPLATE = "https://www.xiaohongshu.com/user/profile/{uid}?tab=fav&subTab=note"

# API URL 匹配关键词（用于拦截 XHR 响应）
API_COLLECT_KEYWORD = "/note/collect/page"

# 滚动配置
SCROLL_PAUSE = 2.5        # 每次滚动后等待秒数
MAX_NO_NEW_COUNT = 8      # 连续N次滚动无新内容则认为到底
MAX_SCROLLS = 500         # 最大滚动次数（安全阀）
MIN_DELAY = 0.5           # 最小间隔（防检测）

# ============================================================
# Cookie 加载
# ============================================================

def load_cookies(path):
    """从 cookies.json 加载并适配 Playwright cookie 格式"""
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
        # Playwright 需要 url 或 domain+path，我们已有 domain+path
        # expires: Playwright 接受 Unix 时间戳（秒），-1 表示 session cookie
        if c.get("expires") and c["expires"] > 0:
            cookie["expires"] = int(c["expires"])
        cookies.append(cookie)

    return cookies


def validate_cookies(cookies):
    """检查关键 cookie 是否存在（宽松模式：有 a1 即可）"""
    names = {c["name"] for c in cookies}
    if "a1" not in names:
        print("❌ 缺少核心 cookie: a1")
        print("   请在 Chrome 打开 xiaohongshu.com → F12 Console → 运行 export-cookies.js")
        return False
    # web_session 是 httpOnly，document.cookie 拿不到，不强制要求
    # Playwright 通过浏览器注入可以继承 Chrome 的登录状态
    if "web_session" not in names:
        print("⚠️  缺少 web_session（httpOnly cookie），尝试用 Playwright 继承登录状态...")
    return True


# ============================================================
# 页面操作
# ============================================================

async def navigate_to_profile(page, profile_url=None):
    """导航到用户主页，提取 user_id"""
    if profile_url:
        target = profile_url.rstrip("/")
    else:
        target = "https://www.xiaohongshu.com"

    print(f"🌐 打开页面: {target}")
    await page.goto(target, wait_until="domcontentloaded", timeout=30000)
    await asyncio.sleep(3)

    # 尝试从 URL 提取 user_id
    url = page.url
    m = re.search(r'/user/profile/([a-f0-9]{24})', url)
    if m:
        uid = m.group(1)
        print(f"✅ 找到 user_id: {uid}")
        return uid

    # 尝试从页面内容提取
    try:
        uid = await page.evaluate("""() => {
            // 从 __INITIAL_STATE__ 中查找
            if (window.__INITIAL_STATE__) {
                const state = JSON.stringify(window.__INITIAL_STATE__);
                const m = state.match(/"user_id":"([a-f0-9]{24})"/);
                if (m) return m[1];
            }
            // 从 URL 或 DOM 中查找
            const links = document.querySelectorAll('a[href*="/user/profile/"]');
            for (const link of links) {
                const m2 = link.href.match(/user\\/profile\\/([a-f0-9]{24})/);
                if (m2) return m2[1];
            }
            return null;
        }""")
        if uid:
            print(f"✅ 找到 user_id: {uid}")
            return uid
    except Exception:
        pass

    print("❌ 无法自动获取 user_id")
    print("   请使用 --profile-url 参数指定你的小红书主页链接")
    print("   例如: https://www.xiaohongshu.com/user/profile/你的ID")
    return None


async def setup_api_interceptor(page):
    """设置 API 响应拦截器，捕获收藏列表数据"""
    captured = {"responses": [], "notes": []}

    async def handle_response(response):
        url = response.url
        # 只关注 API 响应
        if "edith.xiaohongshu.com/api/" not in url:
            return

        # 检查是否是收藏 API
        if API_COLLECT_KEYWORD not in url:
            return

        try:
            data = await response.json()
            captured["responses"].append({"url": url, "data": data})
        except Exception:
            pass

    page.on("response", handle_response)
    return captured


def extract_notes_from_api_data(api_data):
    """从 API 响应中递归提取笔记数据"""
    notes = []

    def search(obj, depth=0):
        if depth > 10 or len(notes) > 5000:
            return
        if isinstance(obj, dict):
            # 检测笔记对象
            note_id = obj.get("note_id") or obj.get("id") or obj.get("noteId")
            if note_id and isinstance(note_id, str) and len(note_id) >= 20:
                notes.append(obj)
                return
            for v in obj.values():
                search(v, depth + 1)
        elif isinstance(obj, list):
            for item in obj:
                search(item, depth + 1)

    search(api_data)
    return notes


async def extract_notes_from_initial_state(page):
    """从 __INITIAL_STATE__ 中提取笔记数据"""
    try:
        return await page.evaluate("""() => {
            if (!window.__INITIAL_STATE__) return [];
            const state = JSON.parse(JSON.stringify(window.__INITIAL_STATE__));
            const notes = [];
            const seen = new Set();

            function findNotes(obj, depth) {
                if (depth > 12 || notes.length > 5000) return;
                if (typeof obj !== 'object' || obj === null) return;

                if (Array.isArray(obj)) {
                    obj.forEach(item => findNotes(item, depth + 1));
                    return;
                }

                const noteId = obj.note_id || obj.noteId || obj.id;
                if (noteId && typeof noteId === 'string' && noteId.length >= 20 && !seen.has(noteId)) {
                    seen.add(noteId);
                    notes.push(obj);
                    return;
                }

                Object.values(obj).forEach(v => findNotes(v, depth + 1));
            }

            findNotes(state, 0);
            return notes;
        }""")
    except Exception:
        return []


# ============================================================
# 笔记解析
# ============================================================

def parse_note(raw):
    """从原始数据中提取标准化的笔记信息"""
    note_id = (
        raw.get("note_id")
        or raw.get("noteId")
        or raw.get("id")
        or raw.get("noteId")
        or ""
    )

    # 标题
    title = (
        raw.get("title")
        or raw.get("display_title")
        or raw.get("name")
        or ""
    )
    title = re.sub(r'<[^>]+>', '', str(title)).strip()[:100]

    # 描述/内容
    desc = (
        raw.get("desc")
        or raw.get("description")
        or raw.get("content")
        or ""
    )
    desc = re.sub(r'<[^>]+>', '', str(desc)).strip()

    # 作者
    user = raw.get("user") or raw.get("author") or {}
    author = ""
    if isinstance(user, dict):
        author = user.get("nickname") or user.get("name") or user.get("nick_name") or ""

    # 封面图
    cover = ""
    cover_obj = raw.get("cover") or raw.get("image_list") or raw.get("images") or raw.get("imageList")
    if isinstance(cover_obj, dict):
        cover = (cover_obj.get("url_default") or cover_obj.get("url")
                 or cover_obj.get("urlDefault") or "")
        if not cover and cover_obj.get("info_list"):
            cover = cover_obj["info_list"][0].get("url", "") if cover_obj["info_list"] else ""
    elif isinstance(cover_obj, list) and cover_obj:
        first = cover_obj[0]
        if isinstance(first, dict):
            cover = first.get("url_default") or first.get("url") or first.get("urlDefault") or ""

    # 类型
    note_type = raw.get("type") or raw.get("note_type") or raw.get("noteType") or ""

    # 互动数据
    interact = raw.get("interact_info") or raw.get("liked_count") or {}
    liked = 0
    if isinstance(interact, dict):
        liked = interact.get("liked_count") or interact.get("liked") or 0
    elif isinstance(interact, (int, str)):
        liked = interact

    # 时间
    timestamp = raw.get("time") or raw.get("create_time") or raw.get("create_time") or 0
    if isinstance(timestamp, (int, float)) and timestamp > 1000000000:
        if timestamp > 10000000000:  # 毫秒
            timestamp = timestamp / 1000
        from datetime import datetime
        try:
            date_str = datetime.fromtimestamp(timestamp).strftime("%Y-%m-%d")
        except Exception:
            date_str = ""
    else:
        date_str = str(timestamp) if timestamp else ""

    # 标签
    tags = raw.get("tag_list") or raw.get("tags") or []
    if isinstance(tags, list):
        tag_names = [
            t.get("name", "") if isinstance(t, dict) else str(t)
            for t in tags
        ]
    else:
        tag_names = []

    # 链接
    url = raw.get("url") or raw.get("link") or ""
    if not url and note_id:
        url = f"https://www.xiaohongshu.com/explore/{note_id}"

    # xsec_token（访问详情页必需）
    xsec_token = raw.get("xsec_token", "")

    # 作者 ID
    author_id = user.get("user_id", "") if isinstance(user, dict) else ""

    return {
        "note_id": note_id,
        "title": title,
        "desc": desc[:300] if desc else "",
        "author": author,
        "author_id": author_id,
        "cover_url": cover,
        "type": str(note_type),
        "liked_count": liked,
        "date": date_str,
        "tags": tag_names,
        "xsec_token": xsec_token,
        "url": url,
    }


# ============================================================
# 滚动加载
# ============================================================

async def scroll_and_collect(page, captured, limit=None):
    """滚动页面加载所有收藏内容"""
    print("\n📜 开始滚动加载收藏列表...")

    all_notes = {}
    no_new_count = 0
    scroll_count = 0

    while scroll_count < MAX_SCROLLS:
        # 从 API 响应中提取
        for resp in captured["responses"]:
            notes = extract_notes_from_api_data(resp["data"])
            for note in notes:
                note_id = note.get("note_id") or note.get("id") or note.get("noteId")
                if note_id and note_id not in all_notes:
                    all_notes[note_id] = note
        captured["responses"].clear()

        # 从 __INITIAL_STATE__ 提取
        state_notes = await extract_notes_from_initial_state(page)
        for note in state_notes:
            note_id = note.get("note_id") or note.get("id") or note.get("noteId")
            if note_id and note_id not in all_notes:
                all_notes[note_id] = note

        count = len(all_notes)
        scroll_count += 1

        # 进度
        if scroll_count % 5 == 0 or count > 0:
            print(f"   📋 已加载 {count} 条收藏 (滚动第 {scroll_count} 次)")

        # 检查限制
        if limit and count >= limit:
            print(f"   ✅ 达到限制 {limit} 条")
            break

        # 检测是否到底
        prev_count = count
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await asyncio.sleep(SCROLL_PAUSE)

        # 尝试点击"加载更多"按钮
        if await try_load_more(page):
            no_new_count = 0  # 点击了加载更多，重置计数器

        # 再次提取
        for resp in captured["responses"]:
            notes = extract_notes_from_api_data(resp["data"])
            for note in notes:
                note_id = note.get("note_id") or note.get("id") or note.get("noteId")
                if note_id and note_id not in all_notes:
                    all_notes[note_id] = note
        captured["responses"].clear()

        state_notes = await extract_notes_from_initial_state(page)
        for note in state_notes:
            note_id = note.get("note_id") or note.get("id") or note.get("noteId")
            if note_id and note_id not in all_notes:
                all_notes[note_id] = note

        if len(all_notes) == prev_count:
            no_new_count += 1
            if no_new_count >= MAX_NO_NEW_COUNT:
                print(f"   ✅ 连续 {MAX_NO_NEW_COUNT} 次无新内容，判断已到底部")
                break
        else:
            no_new_count = 0

    return list(all_notes.values())


# ============================================================
# 手动解析 fallback：从 DOM 提取笔记链接
# ============================================================

async def extract_from_dom(page):
    """从页面 DOM 中提取笔记卡片信息"""
    try:
        return await page.evaluate("""() => {
            const notes = [];
            const seen = new Set();

            // 策略1：查找所有指向笔记详情的链接
            const links = document.querySelectorAll('a[href*="/explore/"], a[href*="/discovery/item/"]');
            for (const link of links) {
                const m = link.href.match(/(?:explore|discovery\\/item)\\/([a-f0-9]{24})/);
                if (m && !seen.has(m[1])) {
                    seen.add(m[1]);
                    // 向上找到卡片容器
                    const card = link.closest('.note-item, .feeds-page__card, [class*="card"], [class*="note"], section') || link;
                    const img = card.querySelector('img') || link.querySelector('img');
                    // 多种选择器尝试获取标题
                    const titleEl = card.querySelector('.title, .note-title, [class*="title"], [class*="desc"]');
                    const title = titleEl ? titleEl.textContent.trim() : '';
                    // 获取作者
                    const authorEl = card.querySelector('.author, [class*="author"], [class*="name"], .nickname');
                    const author = authorEl ? authorEl.textContent.trim() : '';
                    // 获取点赞数
                    const likeEl = card.querySelector('[class*="like"], [class*="count"], .count');
                    const liked = likeEl ? likeEl.textContent.trim() : '';
                    // 获取封面图
                    let cover = '';
                    if (img) {
                        cover = img.src || img.dataset.src || '';
                        // 清理 URL（去掉缩放参数）
                        cover = cover.split('?')[0];
                    }
                    notes.push({
                        note_id: m[1],
                        title: title.substring(0, 100),
                        author: author,
                        cover_url: cover,
                        liked_count: liked,
                        url: link.href,
                        source: 'dom'
                    });
                }
            }

            // 策略2：查找带 data-note-id 的元素
            document.querySelectorAll('[data-note-id], [data-id]').forEach(el => {
                const nid = el.dataset.noteId || el.dataset.id;
                if (nid && nid.length >= 20 && !seen.has(nid)) {
                    seen.add(nid);
                    const title = el.querySelector('[class*="title"], [class*="desc"]')?.textContent?.trim() || '';
                    notes.push({
                        note_id: nid,
                        title: title.substring(0, 100),
                        url: 'https://www.xiaohongshu.com/explore/' + nid,
                        source: 'dom-data'
                    });
                }
            });

            return notes;
        }""")
    except Exception:
        return []


async def try_load_more(page):
    """尝试点击'加载更多'按钮"""
    try:
        clicked = await page.evaluate("""() => {
            // 查找"加载更多"、"查看更多"、"Load more"按钮
            const btns = document.querySelectorAll('button, div[role="button"], .load-more, [class*="load-more"], [class*="more"]');
            for (const btn of btns) {
                const text = btn.textContent.trim().toLowerCase();
                if (text.includes('加载更多') || text.includes('查看更多') || text.includes('load more')
                    || text.includes('展开') || text.includes('more')) {
                    btn.click();
                    return true;
                }
            }
            return false;
        }""")
        if clicked:
            print("   📌 点击了'加载更多'按钮")
            await asyncio.sleep(2)
        return clicked
    except Exception:
        return False


# ============================================================
# 主流程
# ============================================================

async def main():
    parser = argparse.ArgumentParser(description="小红书收藏夹拉取工具")
    parser.add_argument("--cookie-file", default=COOKIE_FILE, help="cookies.json 路径")
    parser.add_argument("--output", default=str(DEFAULT_OUTPUT), help="输出 JSON 路径")
    parser.add_argument("--profile-url", help="用户主页 URL")
    parser.add_argument("--limit", type=int, help="最多拉取条数（测试用）")
    parser.add_argument("--headless", action="store_true", default=False,
                        help="无头模式（调试用，默认有界面）")
    args = parser.parse_args()

    print("=" * 60)
    print("🔖 小红书收藏夹拉取工具")
    print("=" * 60)

    # 1. 加载 cookies
    if not os.path.exists(args.cookie_file):
        print(f"\n❌ Cookies 文件不存在: {args.cookie_file}")
        print("请在 Chrome 打开 xiaohongshu.com → F12 Console → 运行 export-cookies.js")
        sys.exit(1)

    cookies = load_cookies(args.cookie_file)
    if not validate_cookies(cookies):
        sys.exit(1)
    print(f"✅ 加载了 {len(cookies)} 个 cookie")

    # 2. 启动 Playwright
    print("\n🚀 启动浏览器...")
    from playwright.async_api import async_playwright
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=args.headless,
            args=[
                "--disable-blink-features=AutomationControlled",
                "--no-first-run",
                "--disable-gpu",
            ]
        )
        context = await browser.new_context(
            viewport={"width": 1440, "height": 900},
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
            locale="zh-CN",
        )

        # 注入 cookies
        try:
            await context.add_cookies(cookies)
        except Exception as e:
            print(f"⚠️  部分 cookie 注入失败: {e}")
            # 过滤掉有问题的 cookie 重试
            valid_cookies = []
            for c in cookies:
                try:
                    await context.add_cookies([c])
                    valid_cookies.append(c)
                except Exception:
                    pass
            print(f"   成功注入 {len(valid_cookies)}/{len(cookies)} 个 cookie")

        page = await context.new_page()

        # 反检测：移除 webdriver 标识
        await page.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
            window.chrome = { runtime: {} };
        """)

        # 3. 导航到用户主页
        uid = await navigate_to_profile(page, args.profile_url)
        if not uid:
            print("\n❌ 无法确定用户 ID，请使用 --profile-url 参数")
            await browser.close()
            sys.exit(1)

        # 4. 设置 API 拦截
        captured = await setup_api_interceptor(page)

        # 5. 访问收藏页面（使用已验证的 URL 格式）
        collection_url = COLLECTION_URL_TEMPLATE.format(uid=uid)
        print(f"\n🔍 打开收藏页: {collection_url}")
        try:
            await page.goto(collection_url, wait_until="domcontentloaded", timeout=20000)
            await asyncio.sleep(5)
            print(f"   ✅ 收藏页已加载")
        except Exception as e:
            print(f"   ❌ 加载失败: {e}")
            # Fallback: 尝试点击收藏标签
            try:
                await page.evaluate("""() => {
                    const divs = document.querySelectorAll('div, span');
                    for (const d of divs) {
                        if (d.textContent.trim() === '收藏' && d.children.length === 0) {
                            d.click(); return true;
                        }
                    }
                    return false;
                }""")
                await asyncio.sleep(3)
            except Exception:
                pass

        # 6. 滚动加载
        raw_notes = await scroll_and_collect(page, captured, limit=args.limit)

        # 7. Fallback: DOM 提取
        if len(raw_notes) < 5:
            print("\n⚠️  API 拦截数据较少，尝试从 DOM 补充...")
            dom_notes = await extract_from_dom(page)
            existing_ids = {n.get("note_id") or n.get("id") for n in raw_notes}
            for dn in dom_notes:
                nid = dn.get("note_id")
                if nid and nid not in existing_ids:
                    raw_notes.append(dn)

        # 8. 解析并标准化
        print(f"\n📊 共捕获 {len(raw_notes)} 条原始数据，开始解析...")
        parsed_notes = []
        seen_ids = set()
        for raw in raw_notes:
            note = parse_note(raw)
            if note["note_id"] and note["note_id"] not in seen_ids:
                seen_ids.add(note["note_id"])
                parsed_notes.append(note)

        # 9. 保存结果
        output_path = Path(args.output)
        output_path.parent.mkdir(parents=True, exist_ok=True)

        # 加载已有数据进行合并
        existing = {}
        if output_path.exists():
            try:
                with open(output_path, 'r', encoding='utf-8') as f:
                    existing_list = json.load(f)
                for n in existing_list:
                    if isinstance(n, dict) and n.get("note_id"):
                        existing[n["note_id"]] = n
                print(f"   📂 已有 {len(existing)} 条记录")
            except Exception:
                pass

        # 合并：新数据覆盖旧数据
        all_notes = existing.copy()
        new_count = 0
        for note in parsed_notes:
            if note["note_id"] not in all_notes:
                new_count += 1
            all_notes[note["note_id"]] = note

        result = sorted(all_notes.values(), key=lambda x: x.get("date", ""), reverse=True)

        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(result, f, ensure_ascii=False, indent=2)

        print(f"\n{'=' * 60}")
        print(f"✅ 收藏列表已保存: {output_path}")
        print(f"   📋 总计: {len(result)} 条唯一笔记")
        print(f"   🆕 新增: {new_count} 条")
        print(f"   📦 已有: {len(result) - new_count} 条")
        print(f"{'=' * 60}")

        await browser.close()


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
