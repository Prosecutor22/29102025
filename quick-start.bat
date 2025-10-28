@echo off
REM IA03 User Registration API - Quick Start Script (Windows)
REM This script helps you quickly set up and run both backend and frontend

echo 🚀 IA03 User Registration API - Quick Start
echo ===========================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js v18 or higher.
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm.
    pause
    exit /b 1
)

echo ✅ npm version:
npm --version

echo.
echo 📦 Installing dependencies...

REM Install backend dependencies
echo 🔧 Installing backend dependencies...
cd backend
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)

REM Install frontend dependencies
echo 🔧 Installing frontend dependencies...
cd ..\frontend
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)

cd ..

echo.
echo ✅ Dependencies installed successfully!
echo.
echo 🔧 Setup Instructions:
echo =====================
echo.
echo 1. 🗄️  MongoDB Setup:
echo    - Install MongoDB Community Edition
echo    - Or use MongoDB Atlas (cloud)
echo    - Update MONGODB_URI in backend/.env
echo.
echo 2. 🎮 Running the Application:
echo    Backend (Command Prompt 1):
echo    $ cd backend
echo    $ npm run start:dev
echo.
echo    Frontend (Command Prompt 2):
echo    $ cd frontend
echo    $ npm run dev
echo.
echo 3. 🌐 Access the Application:
echo    Frontend: http://localhost:5173
echo    Backend API: http://localhost:3000/api
echo.
echo 4. 🧪 Test the Registration:
echo    - Go to http://localhost:5173
echo    - Click 'Sign Up'
echo    - Register with any email/password
echo.
echo 📚 For detailed instructions, see README.md
echo.
echo 🎉 Setup complete! Happy coding!
pause