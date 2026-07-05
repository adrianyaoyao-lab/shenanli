@echo off
chcp 65001 >nul
set PATH=%ProgramFiles%\nodejs;%PATH%
cd /d "D:\深安锂\公司官网"
echo Installing dependencies...
echo.
npm install
echo.
echo Done! Run run-dev.bat to start the development server.
pause
