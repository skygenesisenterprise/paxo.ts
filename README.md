# paxo.ts
A Paxo Phone TypeScript Framework for Application Environment

This framework provides a modern, type-safe alternative to Lua for developing applications on the Paxo Phone. TypeScript offers better developer experience with static typing, autocompletion, and familiar syntax, making it easier to learn and use than Lua for developers coming from web or software development backgrounds.

## Why TypeScript over Lua?

- **Static Typing**: Catch errors at compile-time instead of runtime
- **Familiar Syntax**: Similar to JavaScript, widely used in web development
- **Better IDE Support**: Autocompletion, refactoring, and debugging tools
- **Easier Learning Curve**: For developers already knowing JS/TS, no need to learn Lua
- **Type Safety**: Prevents common bugs like typos in API calls

## Features

- **Type-safe APIs**: Full TypeScript interfaces for all PaxOS modules
- **Component Library**: Reusable UI components (Button, Label, Input, etc.)
- **Custom Hooks**: useStorage, useTimer for common patterns
- **App Framework**: Base App class for structured development
- **Utilities**: Colors, time formatting, and more
- **CLI Tools**: create-app, build-app, dev server
- **Vite-like DX**: Fast builds, file watching, hot reloading
- **Complete Tree Structure**: Organized like React/Next.js frameworks

## Project Structure

```
paxo.ts/
├── src/
│   ├── core/           # Core PaxOS API types and App base class
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom hooks (useStorage, useTimer)
│   ├── utils/          # Utility functions and helpers
│   └── cli/            # Command-line tools
├── examples/           # Sample applications
├── docs/               # Documentation
├── tests/              # Test files
├── storage/            # Built apps for PaxOS
└── package.json        # Project configuration
```

## Installation

```bash
pnpm install
```

## Quick Start

1. Create a new app: `npm run create-app my-app`
2. Start the dev server: `npm run dev`
3. Edit the generated `examples/my-app.ts` file - changes will be automatically built and the simulation restarted
4. The app will be packaged in `storage/apps/my-app/` ready for deployment to PaxOS

## Development Workflow

Inspired by Vite.js, the dev server provides fast, iterative development:
- **File Watching**: Automatically detects changes in TypeScript files
- **Instant Transpilation**: Converts TS to Lua on-the-fly
- **App Packaging**: Generates PaxOS-compatible app bundles
- **Hot Build**: No manual rebuilds needed during development

**Usage**:
1. Run `npm run dev` in one terminal (starts the watcher)
2. Run `pio run -e linux` in another terminal (starts PaxOS simulation)
3. Edit your TS files - they'll be built automatically
4. Restart the sim manually to see changes (or use PaxOS's app_dev.py for auto-restart)

This workflow eliminates the compile-wait cycle, making development as smooth as modern web frameworks.

## Manual Usage

1. Write your app in TypeScript in the `examples/` directory (e.g., `examples/my-app.ts`)
2. Build the app: `npm run build-app my-app`
3. The app will be packaged in `storage/apps/my-app/` ready for deployment to PaxOS

## Example

See `examples/hello-world.ts` for a basic app example.

## API Reference

The framework provides typed interfaces for all PaxOS APIs. Import types from `src/index.ts` for development.

## Contributing

Contributions are welcome! Please see the PaxOS repository for more information on the underlying system. 
