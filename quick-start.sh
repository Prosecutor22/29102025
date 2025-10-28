#!/bin/bash

# IA03 User Registration API - Quick Start Script
# This script helps you quickly set up and run both backend and frontend

echo "🚀 IA03 User Registration API - Quick Start"
echo "==========================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm version: $(npm --version)"

echo ""
echo "📦 Installing dependencies..."

# Install backend dependencies
echo "🔧 Installing backend dependencies..."
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

# Install frontend dependencies  
echo "🔧 Installing frontend dependencies..."
cd ../frontend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

cd ..

echo ""
echo "✅ Dependencies installed successfully!"
echo ""
echo "🔧 Setup Instructions:"
echo "====================="
echo ""
echo "1. 🗄️  MongoDB Setup:"
echo "   - Install MongoDB Community Edition"
echo "   - Or use MongoDB Atlas (cloud)"
echo "   - Update MONGODB_URI in backend/.env"
echo ""
echo "2. 🎮 Running the Application:"
echo "   Backend (Terminal 1):"
echo "   $ cd backend"
echo "   $ npm run start:dev"
echo ""
echo "   Frontend (Terminal 2):"
echo "   $ cd frontend"
echo "   $ npm run dev"
echo ""
echo "3. 🌐 Access the Application:"
echo "   Frontend: http://localhost:5173"
echo "   Backend API: http://localhost:4000/api"
echo ""
echo "4. 🧪 Test the Registration:"
echo "   - Go to http://localhost:5173"
echo "   - Click 'Sign Up'"
echo "   - Register with any email/password"
echo ""
echo "📚 For detailed instructions, see README.md"
echo ""
echo "🎉 Setup complete! Happy coding!"