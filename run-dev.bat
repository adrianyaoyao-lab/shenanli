@echo off
chcp 65001 >nul
set PATH=%ProgramFiles%\nodejs;%PATH%
cd /d "D:\深安锂\公司官网"
echo Starting development server...
echo.
npm run dev
