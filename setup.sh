#!/bin/bash

# Bus Admin - One Command Setup Script
# This script sets up the entire project with one command

echo "🚀 Project Setup - Installation Script"
echo "=============================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm $(npm -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"
echo ""

# Run build to check for errors
echo "🔨 Building project to check for errors..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build successful"
echo ""

echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "   1. Run 'npm run dev' to start the development server"
echo "   2. Open http://localhost:5000 in your browser"
echo ""
echo "🔐 Demo Credentials:"
echo "   Admin: admin@gmail.com / 123456"
echo "   User:  user@gmail.com / 123456"
echo ""
echo "📚 For more information, see README.md"
echo ""

