# Chrome Extensions Import to Quark Browser
# 此脚本帮助将导出的扩展导入到夸克浏览器

$ErrorActionPreference = "SilentlyContinue"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Chrome Extensions Import to Quark" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 扩展源目录
$sourceDir = "00_Self\assets\chrome-extensions"

# 夸克浏览器扩展目录（Chromium 内核）
$quarkExtDir = "$env:LOCALAPPDATA\Quark\User Data\Default\Extensions"

Write-Host "🔍 检查夸克浏览器..." -ForegroundColor Yellow

# 检查夸克浏览器是否安装
$quarkPath = "$env:LOCALAPPDATA\Quark\User Data"
if (Test-Path $quarkPath) {
    Write-Host "✅ 夸克浏览器已安装" -ForegroundColor Green

    # 创建扩展目录（如果不存在）
    if (!(Test-Path $quarkExtDir)) {
        New-Item -ItemType Directory -Path $quarkExtDir -Force | Out-Null
        Write-Host "📁 已创建扩展目录: $quarkExtDir" -ForegroundColor Green
    }
} else {
    Write-Host "❌ 未找到夸克浏览器，请先安装" -ForegroundColor Red
    Write-Host ""
    Write-Host "下载地址: https://www.quark.cn/" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  导入扩展" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 获取所有扩展目录
$extensions = Get-ChildItem $sourceDir -Directory | Where-Object {
    $_.Name -notmatch "tampermonkey-scripts" -and
    $_.Name -ne "assets"
}

Write-Host "📦 找到 $($extensions.Count) 个扩展" -ForegroundColor White
Write-Host ""

foreach ($ext in $extensions) {
    $extName = $ext.Name -replace "_[a-z0-9]{32}$", "" -replace "_", " "
    Write-Host "📋 $($ext.Name)" -ForegroundColor White

    # 检查是否有 manifest.json
    $manifestPath = Join-Path $ext.FullName "manifest.json"
    if (Test-Path $manifestPath) {
        Write-Host "   ✅ 有效扩展" -ForegroundColor Green
    } else {
        Write-Host "   ⚠️  缺少 manifest.json" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  导入说明" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "由于夸克浏览器的安全限制，需要手动导入扩展：" -ForegroundColor White
Write-Host ""
Write-Host "1. 打开夸克浏览器" -ForegroundColor White
Write-Host "2. 地址栏输入: chrome://extensions/" -ForegroundColor Yellow
Write-Host "3. 开启「开发者模式」" -ForegroundColor White
Write-Host "4. 点击「加载已解压的扩展程序」" -ForegroundColor White
Write-Host "5. 选择以下目录中的扩展：" -ForegroundColor White
Write-Host ""

$fullPath = Resolve-Path $sourceDir
Write-Host "   $fullPath" -ForegroundColor Green -BackgroundColor Black

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  推荐导入顺序" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Tampermonkey (用户脚本管理器)" -ForegroundColor White
Write-Host "2. Dark Reader (深色模式)" -ForegroundColor White
Write-Host "3. Obsidian Web Clipper (网页剪藏)" -ForegroundColor White
Write-Host "4. ChatGPT (AI 助手)" -ForegroundColor White
Write-Host "5. 其他扩展" -ForegroundColor Gray

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Tampermonkey 脚本导入" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "安装 Tampermonkey 后，导入脚本：" -ForegroundColor White
Write-Host ""
Write-Host "1. 点击 Tampermonkey 图标 → 管理面板" -ForegroundColor White
Write-Host "2. 点击「实用工具」标签" -ForegroundColor White
Write-Host "3. 在「导入」部分选择之前导出的 scripts.zip" -ForegroundColor White

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  完成" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "导入完成后，扩展将出现在夸克浏览器中" -ForegroundColor Green
Write-Host ""
Write-Host "按任意键退出..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
