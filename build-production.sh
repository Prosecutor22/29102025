#!/bin/bash

# Production Build Script for IA03 User Registration App
# This script builds both backend and frontend for production deployment

echo "🚀 Starting Production Build Process"
echo "=================================="

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js v18 or higher."
    exit 1
fi

print_status "Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm."
    exit 1
fi

print_status "npm version: $(npm --version)"

echo ""
echo "📦 Installing Dependencies..."

# Install backend dependencies
echo "🔧 Installing backend dependencies..."
cd backend
if npm ci --only=production; then
    print_status "Backend dependencies installed successfully"
else
    print_error "Failed to install backend dependencies"
    exit 1
fi

# Install dev dependencies for build
if npm install; then
    print_status "Backend dev dependencies installed for build"
else
    print_error "Failed to install backend dev dependencies"
    exit 1
fi

cd ..

# Install frontend dependencies
echo "🔧 Installing frontend dependencies..."
cd frontend
if npm ci; then
    print_status "Frontend dependencies installed successfully"
else
    print_error "Failed to install frontend dependencies"
    exit 1
fi

cd ..

echo ""
echo "🏗️ Building Applications..."

# Build backend
echo "🔨 Building backend..."
cd backend
if npm run build; then
    print_status "Backend built successfully"
else
    print_error "Backend build failed"
    exit 1
fi

cd ..

# Build frontend
echo "🔨 Building frontend..."
cd frontend
if npm run build; then
    print_status "Frontend built successfully"
else
    print_error "Frontend build failed"
    exit 1
fi

cd ..

echo ""
echo "📁 Build Output:"
echo "Backend: ./backend/dist/"
echo "Frontend: ./frontend/dist/"

echo ""
print_status "🎉 Production build completed successfully!"
echo ""
echo "📋 Next Steps:"
echo "1. Deploy backend dist/ folder to your Node.js hosting service"
echo "2. Deploy frontend dist/ folder to your static hosting service"
echo "3. Configure environment variables on your hosting platforms"
echo "4. Set up your production MongoDB database"
echo ""
echo "🌐 Recommended Hosting Options:"
echo "Backend: Railway, Render, Heroku, DigitalOcean"
echo "Frontend: Netlify, Vercel, GitHub Pages, Cloudflare Pages"