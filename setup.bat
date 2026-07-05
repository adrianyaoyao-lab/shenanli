@echo off
chcp 65001 >nul
set PATH=%ProgramFiles%\nodejs;%SystemRoot%\system32;%SystemRoot%;%PATH%
cd /d "D:\深安锂\公司官网"
echo Cleaning old node_modules...
if exist node_modules rmdir /s /q node_modules
echo.
echo Installing dependencies...
call npm install
echo.
if errorlevel 1 (
    echo Installation failed. Press any key to exit...
    pause >nul
    exit /b 1
)
echo.
echo Installation complete! Press any key to start the development server...
pause >nul
echo Starting development server on http://localhost:3000
call npm run dev
