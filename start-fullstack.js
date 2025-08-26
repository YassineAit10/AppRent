const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting RentMatch Full-Stack Application...\n');

// Start backend server
console.log('📦 Starting Backend Server...');
const backend = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'server'),
  shell: true,
  stdio: 'inherit'
});

// Wait a bit for backend to start, then start frontend
setTimeout(() => {
  console.log('\n📱 Starting Frontend Application...');
  const frontend = spawn('npm', ['start'], {
    cwd: __dirname,
    shell: true,
    stdio: 'inherit'
  });

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n\n🛑 Shutting down servers...');
    backend.kill();
    frontend.kill();
    process.exit();
  });

  frontend.on('error', (err) => {
    console.error('Frontend error:', err);
  });
}, 3000);

backend.on('error', (err) => {
  console.error('Backend error:', err);
});

console.log(`
========================================
🏠 RentMatch Full-Stack Application
========================================
Backend API: http://localhost:5000
Frontend:    http://localhost:4028
API Health:  http://localhost:5000/api/health
========================================

Press Ctrl+C to stop all servers
`);