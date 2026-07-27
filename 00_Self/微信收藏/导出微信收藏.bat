@echo off
chcp 65001 >nul
set PYTHONDONTWRITEBYTECODE=1
title 微信收藏 → Obsidian 导出

echo ================================================
echo   微信收藏 → Obsidian Markdown 导出工具
echo ================================================
echo.

:: 检查 Python
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 未找到 Python，请先安装 Python 3.6+
    pause
    exit /b 1
)

:: 检查并安装依赖
echo 📦 检查依赖...
python -c "import pyperclip" >nul 2>&1
if errorlevel 1 (
    echo    安装 pyperclip...
    pip install pyperclip -q
)
python -c "import keyboard" >nul 2>&1
if errorlevel 1 (
    echo    安装 keyboard...
    pip install keyboard -q
)
echo ✅ 依赖就绪
echo.

:: 启动导出脚本
python "%~dp0export_wechat_fav.py"

pause
