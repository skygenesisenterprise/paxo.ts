const chokidar = require('chokidar');
const path = require('path');
const { exec } = require('child_process');

console.log('🚀 Starting Paxo.ts Dev Server...');
console.log('👀 Watching examples/*.ts for changes...');
console.log('💡 Edit your TypeScript files and they will be automatically built!');
console.log('🎮 Run the PaxOS simulation separately: pio run -e linux');

// Function to build an app
function buildApp(appName) {
  console.log(`🔨 Building ${appName}...`);
  exec(`node scripts/build-app.js ${appName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Build failed: ${error.message}`);
      return;
    }
    if (stderr) console.error(stderr);
    console.log(`✅ ${appName} built successfully - restart your sim to see changes!`);
  });
}

// Watch for TS file changes
const watcher = chokidar.watch('examples/*.ts', {
  persistent: true,
  ignoreInitial: true
});

watcher.on('change', (filePath) => {
  const appName = path.basename(filePath, '.ts');
  console.log(`📝 ${appName}.ts changed, rebuilding...`);
  buildApp(appName);
});

// Handle exit
process.on('SIGINT', () => {
  console.log('👋 Dev server stopped');
  process.exit();
});