@echo off
chcp 65001 >nul
set PYTHONDONTWRITEBYTECODE=1
title 微信收藏 Markdown → HTML 转换

echo ================================================
echo   微信收藏 → 干净 HTML 转换工具
echo ================================================
echo.
echo 📂 正在转换所有文章...

python -X utf8 "%~dp0md_to_html.py"

echo.
echo ================================================
echo   完成！HTML 文件在 html/ 目录下
echo ================================================
echo.
pause
