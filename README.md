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

- Type-safe APIs for PaxOS modules (GUI, Storage, Hardware, etc.)
- TypeScript to Lua transpilation using TypeScriptToLua
- Automated app packaging for PaxOS deployment
- Modern development workflow with npm/pnpm

## Installation

```bash
pnpm install
```

## Quick Start

1. Create a new app: `npm run create-app my-app`
2. Edit the generated `examples/my-app.ts` file
3. Build the app: `npm run build-app my-app`
4. The app will be packaged in `storage/apps/my-app/` ready for deployment to PaxOS

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
