const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const appName = process.argv[2];
if (!appName) {
  console.error('Usage: npm run build-app <app-name>');
  process.exit(1);
}

const tsFile = path.join('examples', `${appName}.ts`);
const luaFile = path.join('examples', `${appName}.lua`);
const appDir = path.join('storage', 'apps', appName);
const appLua = path.join(appDir, 'app.lua');

// Check if TS file exists
if (!fs.existsSync(tsFile)) {
  console.error(`TS file ${tsFile} not found`);
  process.exit(1);
}

// Transpile TS to Lua
console.log('Transpiling TypeScript to Lua...');
execSync('npx tstl', { stdio: 'inherit' });

// Read generated Lua
let luaContent = fs.readFileSync(luaFile, 'utf8');

// Fix self parameters in global functions
luaContent = luaContent.replace(/function (\w+)\(self\)/g, 'function $1()');

// Write back
fs.writeFileSync(luaFile, luaContent);

// Create app directory
if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

// Copy Lua as app.lua
fs.copyFileSync(luaFile, appLua);

// Create manifest.json if not exists
const manifestPath = path.join(appDir, 'manifest.json');
if (!fs.existsSync(manifestPath)) {
  const manifest = {
    name: appName.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
    version: '1.0.0',
    permissions: ['gui'] // Default permissions
  };
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
}

console.log(`App ${appName} built successfully in ${appDir}`);