# Bus Admin - One Command Setup Script (PowerShell)
# This script sets up the entire project with one command

Write-Host "🚀 Project Setup - Installation Script" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node -v
    Write-Host "✅ Node.js $nodeVersion detected" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Red
    exit 1
}

# Check Node.js version
$nodeMajorVersion = (node -v).Substring(1).Split('.')[0]
if ([int]$nodeMajorVersion -lt 18) {
    Write-Host "❌ Node.js version 18+ is required. Current version: $nodeVersion" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Check if npm is installed
try {
    $npmVersion = npm -v
    Write-Host "✅ npm $npmVersion detected" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not installed. Please install npm first." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
Write-Host ""

# Run build to check for errors
Write-Host "🔨 Building project to check for errors..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed. Please check the errors above." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful" -ForegroundColor Green
Write-Host ""

Write-Host "🎉 Setup completed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Run 'npm run dev' to start the development server"
Write-Host "   2. Open http://localhost:5000 in your browser"
Write-Host ""
Write-Host "🔐 Demo Credentials:" -ForegroundColor Cyan
Write-Host "   Admin: admin@gmail.com / 123456" -ForegroundColor Yellow
Write-Host "   User:  user@gmail.com / 123456" -ForegroundColor Yellow
Write-Host ""

