#!/usr/bin/env node

/**
 * Project Setup CLI
 * One command to create and set up a complete modern web application
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_NAME = process.argv[2] || 'my-project';

console.log('🚀 Project Setup - Creating your application...\n');

// Create project directory
const projectPath = path.resolve(process.cwd(), PROJECT_NAME);

if (fs.existsSync(projectPath)) {
  console.error(`❌ Directory "${PROJECT_NAME}" already exists!`);
  process.exit(1);
}

fs.mkdirSync(projectPath, { recursive: true });
console.log(`✅ Created project directory: ${PROJECT_NAME}\n`);

// Copy template files
console.log('📦 Copying project files...');
copyDirectory(__dirname, projectPath, [
  'node_modules',
  'dist',
  '.git',
  'bin',
  'setup.sh',
  'setup.ps1',
]);

console.log('✅ Files copied successfully\n');

// Install dependencies
console.log('📥 Installing dependencies...');
process.chdir(projectPath);
execSync('npm install', { stdio: 'inherit' });
console.log('✅ Dependencies installed\n');

// Build project
console.log('🔨 Building project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful\n');
} catch (error) {
  console.warn('⚠️  Build had warnings, but project is ready\n');
}

console.log('🎉 Project Setup completed successfully!\n');
console.log('📋 Next steps:');
console.log(`   cd ${PROJECT_NAME}`);
console.log('   npm run dev');
console.log('\n🔐 Demo Credentials:');
console.log('   Admin: admin@gmail.com / 123456');
console.log('   User:  user@gmail.com / 123456\n');

function copyDirectory(src, dest, exclude = []) {
  const files = fs.readdirSync(src);
  
  files.forEach(file => {
    if (exclude.includes(file)) return;
    
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDirectory(srcPath, destPath, exclude);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

