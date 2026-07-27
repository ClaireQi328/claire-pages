---
created: 2026-07-27
updated: 2026-07-27
tags: [Self, 系统]
---

# Chrome 扩展导出包

> 从 Chrome 导出的扩展，用于导入到其他浏览器（如夸克浏览器）

---

## 📦 扩展清单

| 扩展名称 | Extension ID | 版本 | 用途 |
|---------|--------------|------|------|
| Dark Reader | akldabonmimlicnjlflnapfeklbfemhj | 1.12.2 | 网页深色模式 |
| Obsidian Web Clipper | cnjifjpddelmedmihgijeibhnjfabmlf | 1.7.1 | 网页剪藏到 Obsidian |
| React Developer Tools | dbjibobgilijgolhjdcbdebjhejelffo | 1.38.0 | React 调试工具 |
| Tampermonkey | dhdgffkkebhmkfjojejmpbldmpobfkfo | 5.5.0 | 用户脚本管理器 |
| FigmaEX | dimbmiiiefochhhipipkphcfjckchhjd | 1.5.92 | Figma 扩展 |
| GitLab | dlnejlppicbjfcfcedcflplfjajinajd | 22.3.0 | GitLab 集成 |
| Zotero Connector | ekhagklcjbdpajgpjgmbionohlpdbjgc | 5.0.211 | 文献管理工具 |
| Full Screen Weather | fkkaebihfmbofclegkcfkkemepfehibg | 1.5 | 全屏天气 |
| Figma | fkmaohpngenfoccdgceedjkfhkdcohmg | 1.3.24 | Figma 主扩展 |
| ChatGPT | hehggadaopoacecdllhhajmbjkdcmajg | 1.2.27221.15725 | ChatGPT 官方扩展 |
| Notion Web Clipper | iifacdnjakkhjjiengaffnegbndgingi | 1.6.0 | 网页剪藏到 Notion |
| Obsidian Web Clipper 2 | kkanleannibdajfjnemhabbdhciboggj | 1.0.8 | Obsidian 剪藏（备用） |
| Vue.js devtools | lcgdcmgblmaamnegeblfjljkabjnpaod | 4.5.2 | Vue 调试工具 |
| html.to.design | ldnheaepmnmbjjjahokphckbpgciiaed | 0.0.204 | HTML 转设计稿 |
| Codia AI Web2Figma | lgkpkfjpoibickpmjijghililnfhdiad | 0.0.1 | 网页转 Figma |
| Highlighty | migdhldfbapmodfbmgpofnikfbfpbbon | 2.4.8 | 文本高亮搜索 |
| Chrome Web Store Payments | nmmhkkegccagdldgiimedpiccmgmieda | 1.0.0.6 | Chrome 支付相关 |

---

## 🔧 导入到夸克浏览器

### 方法一：加载已解压的扩展（推荐）

1. 打开夸克浏览器，进入 `chrome://extensions/`
2. 开启「开发者模式」
3. 点击「加载已解压的扩展程序」
4. 选择本文件夹中对应的扩展目录

### 方法二：打包为 .crx 文件

如需打包为 .crx 格式：

```bash
# 在 Chrome 中使用开发者模式打包
# 或使用第三方工具如 CRX Installer
```

---

## ⚠️ 注意事项

- 扩展数据（设置、配置）不会随扩展迁移，需要手动重新配置
- 部分扩展可能与夸克浏览器不完全兼容
- 建议优先导入核心扩展：Tampermonkey、Dark Reader、Obsidian Web Clipper

---

## 📁 文件夹结构

```
chrome-extensions/
├── README.md                          ← 本文件
├── ChatGPT_hehggadaopoacecdllhhajmbjkdcmajg/
├── Dark_Reader_akldabonmimlicnjlflnapfeklbfemhj/
├── FigmaEX_dimbmiiiefochhhipipkphcfjckchhjd/
├── ... (共 17 个扩展)
└── Chrome_Web_Store_Payments_nmmhkkegccagdldgiimedpiccmgmieda/
```

---

## 🔄 Tampermonkey 脚本同步

由于 Tampermonkey 使用 LevelDB 存储脚本，无法直接从文件系统导出，需要通过浏览器界面操作。

### 导出脚本

1. **打开导出工具页面**
   - 在 Chrome 中打开：`00_Self/assets/chrome-extensions/tampermonkey-scripts/export-scripts.html`
   - 或直接访问 Tampermonkey 工具页

2. **执行导出**
   - 点击「导出所有脚本」
   - 保存 `scripts.zip` 到 `tampermonkey-scripts/` 文件夹

3. **使用 PowerShell 辅助脚本**（可选）
   ```powershell
   powershell -ExecutionPolicy Bypass -File "00_Self/assets/chrome-extensions/export-tampermonkey.ps1"
   ```

### 导入到夸克浏览器

1. 在夸克浏览器中加载 Tampermonkey 扩展
2. 打开 Tampermonkey 面板 → 实用工具 → 导入
3. 选择之前导出的 `scripts.zip`

---

## 📋 完整迁移清单

| 步骤 | 操作 | 状态 |
|------|------|------|
| 1 | 导出所有 Chrome 扩展 | ✅ 完成 |
| 2 | 导出 Tampermonkey 脚本 | ⏳ 待操作 |
| 3 | 在夸克浏览器中安装扩展 | ⏳ 待操作 |
| 4 | 导入 Tampermonkey 脚本 | ⏳ 待操作 |
| 5 | 配置扩展设置 | ⏳ 待操作 |

