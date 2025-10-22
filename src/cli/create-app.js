const fs = require('fs');
const path = require('path');

const appName = process.argv[2];
if (!appName) {
  console.error('Usage: node scripts/create-app.js <app-name>');
  process.exit(1);
}

const tsFile = path.join('examples', `${appName}.ts`);

// Create TS template
const template = `// ${appName} app for Paxo.ts

// App lifecycle functions
function run() {
  // Create main window
  const win = gui.window({
    title: "${appName.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}",
    size: { width: 320, height: 240 }
  });

  // Add your UI components here
  const label = gui.label({
    text: "Welcome to ${appName}!",
    position: { x: 50, y: 50 },
    color: gui.color(0, 0, 0)
  });

  win.addChild(label);
  win.show();
}

function quit() {
  // Cleanup code here
}
`;

fs.writeFileSync(tsFile, template);
console.log(`App template created: examples/${appName}.ts`);
console.log(`Run: npm run build-app ${appName}`);