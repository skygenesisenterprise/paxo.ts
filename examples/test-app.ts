// test-app app for Paxo.ts

// App lifecycle functions
declare var run: () => void;
declare var quit: () => void;

run = function() {
  // Create main window
  const win = gui.window({
    title: "Test App",
    size: { width: 320, height: 240 }
  });

  // Add your UI components here
  const label = gui.label({
    text: "Welcome to test-app!",
    position: { x: 50, y: 50 },
    color: gui.color(0, 0, 0)
  });

  win.addChild(label);
  win.show();
};

quit = function() {
  // Cleanup code here
}
