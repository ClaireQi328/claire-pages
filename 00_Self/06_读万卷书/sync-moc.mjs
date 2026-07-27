#!/usr/bin/env node
/**
 * 微信读书 MOC 同步脚本
 * 功能：
 *   1. 扫描 00_Self/读万卷书/ 下所有书文件
 *   2. 从 frontmatter 提取完整书名、作者、进度、划线数
 *   3. 保留已有分类，新书自动归入"🆕 新书待分类"
 *   4. 更新统计数据（进度、划线数、状态）
 * 
 * 用法：node sync-moc.js
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIR = __dirname;
const MOC_FILE = join(DIR, '读万卷书.md');
const EXCLUDE_FILES = ['读万卷书.md', 'sync-moc.js', 'sync-moc.log'];

// ── 工具函数 ──

function extractField(content, field) {
  const m = content.match(new RegExp('^' + field + ':\\s*(.+)$', 'm'));
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : '';
}

function cleanTitle(raw) {
  return raw
    .replace(/【[^】]{20,}】/g, '')
    .replace(/（[^）]{20,}）/g, '')
    .replace(/,孙连才编著,北京：清华大学出版社_13503340\(1\)/, '')
    .replace(/（白金版）/, '')
    .replace(/（第3版）/, '')
    .replace(/（杨天真重磅新作）/, '')
    .trim();
}

const STATUS_EMOJI = { '1': '📋', '2': '📖', '3': '⏸️', '4': '✅' };

// ── 主逻辑 ──

// 1. 扫描所有书文件
const files = readdirSync(DIR)
  .filter(f => f.endsWith('.md') && !EXCLUDE_FILES.includes(f))
  .sort();

const books = files.map(f => {
  const content = readFileSync(join(DIR, f), 'utf8');
  const name = basename(f, '.md');
  const rawTitle = extractField(content, 'title') || name;
  return {
    file: name,
    rawTitle,
    cleanTitle: cleanTitle(rawTitle),
    author: extractField(content, 'author'),
    progress: extractField(content, 'progress') || '-',
    noteCount: parseInt(extractField(content, 'noteCount')) || 0,
    status: extractField(content, 'readingStatus'),
    lastRead: extractField(content, 'lastReadDate'),
    get emoji() { return STATUS_EMOJI[this.status] || '❓'; }
  };
});

// 2. 读取现有 MOC，提取已有分类映射
let existingCategories = {};
const NEW_CAT = '🆕 新书待分类';

try {
  const mocContent = readFileSync(MOC_FILE, 'utf8');
  const catRegex = /^## .+?（\d+）$/gm;
  let currentCat = null;
  
  for (const line of mocContent.split('\n')) {
    const catMatch = line.match(/^## .+? (.+?)（/);
    if (catMatch) {
      currentCat = catMatch[1].trim();
      continue;
    }
    const linkMatch = line.match(/\[\[([^\]|]+)\]\]/);
    if (linkMatch && currentCat) {
      existingCategories[linkMatch[1]] = currentCat;
    }
  }
} catch (e) {
  console.log('⚠️  未找到现有 MOC，将创建新文件');
}

// 3. 构建分类
const catOrder = ['个人成长', '人物传记', '哲学宗教', '心理', '政治军事', '教育学习', '文学', '社会文化', '精品小说', '经济理财', '计算机', '其他'];
const catEmojis = {
  '个人成长': '🧠', '人物传记': '👤', '哲学宗教': '🧘', '心理': '💭',
  '政治军事': '⚔️', '教育学习': '🎓', '文学': '📖', '社会文化': '🌍',
  '精品小说': '📕', '经济理财': '💰', '计算机': '💻', '其他': '📝',
  [NEW_CAT]: '🆕'
};

const categorized = {};
catOrder.forEach(c => categorized[c] = []);
categorized[NEW_CAT] = [];

let newBooks = [];

books.forEach(book => {
  const cat = existingCategories[book.file];
  if (cat && categorized[cat]) {
    categorized[cat].push(book);
  } else {
    categorized[NEW_CAT].push(book);
    newBooks.push(book.cleanTitle);
  }
});

// 4. 生成 MOC
const lines = [];
const today = new Date().toISOString().slice(0, 10);

lines.push('---');
lines.push('aliases: [读书, 书单, Reading]');
lines.push('created: 2026-07-08');
lines.push(`updated: ${today}`);
lines.push(`description: "读万卷书 — ${books.length}本书的阅读笔记索引，按主题分类"`);
lines.push('---');
lines.push('#Self #自我 #MOC #读书');
lines.push('');
lines.push('# 📚 读万卷书');
lines.push('');
lines.push(`> 共 ${books.length} 本 · 阅读是最便宜的旅行`);
lines.push('');
lines.push('---');

for (const catName of [...catOrder, NEW_CAT]) {
  const catBooks = categorized[catName];
  if (catBooks.length === 0) continue;
  
  const emoji = catEmojis[catName] || '📚';
  lines.push('');
  lines.push(`## ${emoji} ${catName}（${catBooks.length}）`);
  lines.push('');
  lines.push('| 状态 | 书名 | 作者 | 进度 | 划线 | 链接 |');
  lines.push('|:---:|---|---|:---:|:---:|---|');
  
  catBooks.forEach(b => {
    const noteDisplay = b.noteCount > 0 ? b.noteCount.toString() : '-';
    lines.push(`| ${b.emoji} | ${b.cleanTitle} | ${b.author} | ${b.progress} | ${noteDisplay} | [[${b.file}]] |`);
  });
}

lines.push('');

const mocText = lines.join('\n');
writeFileSync(MOC_FILE, mocText, 'utf8');

// 5. 输出结果
console.log(`✅ MOC 已更新：${books.length} 本书`);
if (newBooks.length > 0) {
  console.log(`\n🆕 新增 ${newBooks.length} 本（已归入"新书待分类"）：`);
  newBooks.forEach(t => console.log(`   📖 ${t}`));
  console.log('\n💡 请在 Obsidian 中将新书移到正确分类');
} else {
  console.log('✅ 无新增书籍');
}
