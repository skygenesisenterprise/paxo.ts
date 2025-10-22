// Hello World example for Paxo.ts

// App lifecycle functions
function run() {
  // Create a window
  const win = gui.window({ title: "Hello Paxo.ts", size: { width: 320, height: 240 } });

  // Create a label
  const label = gui.label({
    text: "Hello, World!",
    position: { x: 100, y: 100 },
    color: gui.color(255, 0, 0) // Red
  });

  // Create a button
  const button = gui.button({
    text: "Click me!",
    position: { x: 100, y: 150 },
    onClick: () => {
      label.setText("Button clicked!");
    }
  });

  // Add to window
  win.addChild(label);
  win.addChild(button);

  win.show();
}

function quit() {
  // Cleanup if needed
}