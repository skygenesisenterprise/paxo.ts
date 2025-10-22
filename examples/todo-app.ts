// Todo App example using Paxo.ts components

import { Window, Button, Input, List, Label, colors, useStorage } from '../src/index';

// Global state
let input: Input;
let list: List;
let addButton: Button;
let statusLabel: Label;
let todos: string[] = [];
const storage = useStorage<string[]>('todos', []);

// App lifecycle functions
declare var run: () => void;
declare var quit: () => void;

run = function() {
  // Load existing todos
  todos = storage.get();

  // Create main window
  const win = new Window({ title: 'Todo App' });

  // Create UI components
  input = new Input({
    position: { x: 10, y: 10 },
    size: { width: 200, height: 30 },
    placeholder: 'Enter a todo...'
  });

  addButton = new Button({
    text: 'Add',
    position: { x: 220, y: 10 },
    onClick: addTodo
  });

  list = new List({
    position: { x: 10, y: 50 },
    size: { width: 300, height: 150 },
    items: todos,
    onSelect: removeTodo
  });

  statusLabel = new Label({
    text: `Todos: ${todos.length}`,
    position: { x: 10, y: 210 },
    color: colors.blue
  });

  // Add to window
  win.addChild(input);
  win.addChild(addButton);
  win.addChild(list);
  win.addChild(statusLabel);

  win.show();
};

function addTodo() {
  const text = input.getText().trim();
  if (text) {
    todos.push(text);
    updateList();
    input.setText('');
    storage.set(todos); // Save
  }
}

function removeTodo(index: number) {
  todos.splice(index, 1);
  updateList();
  storage.set(todos); // Save
}

function updateList() {
  list.setItems(todos);
  statusLabel.setText(`Todos: ${todos.length}`);
}

quit = function() {
  storage.set(todos); // Save on exit
};