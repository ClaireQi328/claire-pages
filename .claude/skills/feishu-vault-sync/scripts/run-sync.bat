@echo off
REM 飞书增量同步 - Windows Task Scheduler 入口
REM 每天凌晨 02:00 由 Task Scheduler 调用

set VAULT_DIR=C:\Users\qi'yue\Desktop\Claire
set BASH_EXE=C:\Program Files\Git\bin\bash.exe
set SCRIPT=%VAULT_DIR%\.claude\skills\feishu-vault-sync\scripts\sync-incremental.sh
set LOG=%VAULT_DIR%\.claude\scripts\sync-feishu-task.log

echo [%date% %time%] 开始 >> "%LOG%"

"%BASH_EXE%" --login -c "cd '%VAULT_DIR%' && bash '%SCRIPT%'" >> "%LOG%" 2>&1

echo [%date% %time%] 结束 (exit: %ERRORLEVEL%) >> "%LOG%"
