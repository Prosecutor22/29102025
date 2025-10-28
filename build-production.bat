@echo off
REM Production Build Script for IA03 User Registration App (Windows)
REM This script builds both backend and frontend for production deployment

echo 🚀 Starting Production Build Process
echo ==================================

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
echo 📦 Installing Dependencies...

REM Install backend dependencies
echo 🔧 Installing backend dependencies...
cd backend
npm ci --only=production
if %errorlevel% neq 0 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)

REM Install dev dependencies for build
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install backend dev dependencies
    pause
    exit /b 1
)

echo ✅ Backend dependencies installed successfully

cd ..

REM Install frontend dependencies
echo 🔧 Installing frontend dependencies...
cd frontend
npm ci
if %errorlevel% neq 0 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)

echo ✅ Frontend dependencies installed successfully

cd ..

echo.
echo 🏗️ Building Applications...

REM Build backend
echo 🔨 Building backend...
cd backend
npm run build
if %errorlevel% neq 0 (
    echo ❌ Backend build failed
    pause
    exit /b 1
)

echo ✅ Backend built successfully

cd ..

REM Build frontend
echo 🔨 Building frontend...
cd frontend
npm run build
if %errorlevel% neq 0 (
    echo ❌ Frontend build failed
    pause
    exit /b 1
)

echo ✅ Frontend built successfully

cd ..

echo.
echo 📁 Build Output:
echo Backend: .\backend\dist\
echo Frontend: .\frontend\dist\

echo.
echo ✅ 🎉 Production build completed successfully!
echo.
echo 📋 Next Steps:
echo 1. Deploy backend dist\ folder to your Node.js hosting service
echo 2. Deploy frontend dist\ folder to your static hosting service
echo 3. Configure environment variables on your hosting platforms
echo 4. Set up your production MongoDB database
echo.
echo 🌐 Recommended Hosting Options:
echo Backend: Railway, Render, Heroku, DigitalOcean
echo Frontend: Netlify, Vercel, GitHub Pages, Cloudflare Pages

pause