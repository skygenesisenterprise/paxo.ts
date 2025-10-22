# Paxo.ts Documentation

## Overview

Paxo.ts is a TypeScript framework for developing applications on the Paxo Phone. It provides a modern, type-safe alternative to Lua development with familiar APIs and tooling.

## Getting Started

### Installation

```bash
pnpm install
```

### Creating Your First App

```bash
npm run create-app my-app
npm run build-app my-app
```

## API Reference

### Components

#### Button

```typescript
import { Button } from 'paxo.ts';

const button = new Button({
  text: 'Click me',
  position: { x: 10, y: 10 },
  onClick: () => console.log('Clicked!')
});
```

#### Window

```typescript
import { Window, Button } from 'paxo.ts';

const window = new Window({ title: 'My App' });
const button = new Button({ text: 'OK', position: { x: 10, y: 10 } });
window.addChild(button);
window.show();
```

### Hooks

#### useStorage

```typescript
import { useStorage } from 'paxo.ts';

const storage = useStorage('my-data', { count: 0 });
const data = storage.get();
storage.set({ count: data.count + 1 });
```

### App Class

```typescript
import { App } from 'paxo.ts';

class MyApp extends App {
  run() {
    // Your app logic here
    this.show();
  }
}
```

## Examples

See the `examples/` directory for complete app examples.