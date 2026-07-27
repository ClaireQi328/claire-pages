@echo off
chcp 65001 >nul
title 重命名微信收藏文件夹

echo ================================================
echo   重命名：微信收藏 → 09_微信收藏
echo ================================================
echo.
echo ⚠️  请确保微信已关闭！
echo.

cd /d "%~dp0.."

if exist "微信收藏" (
    ren "微信收藏" "09_微信收藏"
    if errorlevel 1 (
        echo ❌ 重命名失败，请关闭微信后重试
    ) else (
        echo ✅ 重命名成功！
        echo    微信收藏 → 09_微信收藏
    )
) else if exist "09_微信收藏" (
    echo ✅ 已经是 09_微信收藏，无需重命名
) else (
    echo ❌ 找不到微信收藏文件夹
)

echo.
pause
