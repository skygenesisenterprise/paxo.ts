// Paxo.ts - TypeScript Framework for Paxo Phone

// Declare PaxOS global APIs
declare global {
  const gui: GuiModule;
  const storage: StorageModule;
  const hardware: HardwareModule;
  const time: TimeModule;
  const events: EventsModule;
  const gsm: GsmModule;
  const json: JsonModule;

  // App lifecycle functions (defined by user apps)
  // function run(): void;
  // function background(): void;
  // function wakeup(): void;
  // function quit(): void;

  // Utility functions
  function require(module: string): any;
  function saveTable(table: any, filename: string): void;
  function loadTable(filename: string): any;
  function launch(appName: string): void;
}

// Type definitions for PaxOS APIs

export interface Color {
  r: number;
  g: number;
  b: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Rect extends Point, Size {}

export interface GuiModule {
  // Window management
  window(options?: { title?: string; size?: Size; position?: Point }): PaxosWindow;

  // Drawing
  canvas(size: Size): Canvas;

  // Widgets
  button(options: { text: string; position: Point; size?: Size; onClick?: () => void }): PaxosButton;
  label(options: { text: string; position: Point; color?: Color }): PaxosLabel;
  input(options: { position: Point; size?: Size; placeholder?: string }): PaxosInput;
  list(options: { position: Point; size: Size; items: string[] }): PaxosList;

  // Colors
  color(r: number, g: number, b: number): Color;

  // Constants
  ALIGN_LEFT: number;
  ALIGN_CENTER: number;
  ALIGN_RIGHT: number;
}

export interface PaxosWindow {
  show(): void;
  hide(): void;
  close(): void;
  addChild(child: any): void;
  setTitle(title: string): void;
}

export interface Canvas {
  drawPixel(x: number, y: number, color: Color): void;
  drawLine(x1: number, y1: number, x2: number, y2: number, color: Color): void;
  drawRect(rect: Rect, color: Color, filled?: boolean): void;
  drawText(text: string, position: Point, color: Color): void;
  clear(): void;
}

export interface PaxosButton {
  setText(text: string): void;
  setPosition(position: Point): void;
  onClick(callback: () => void): void;
}

export interface PaxosLabel {
  setText(text: string): void;
  setColor(color: Color): void;
}

export interface PaxosInput {
  getText(): string;
  setText(text: string): void;
  onChange(callback: (text: string) => void): void;
}

export interface PaxosList {
  setItems(items: string[]): void;
  onSelect(callback: (index: number) => void): void;
}

export interface StorageModule {
  readFile(filename: string): string;
  writeFile(filename: string, content: string): void;
  listDir(path: string): string[];
  makeDir(path: string): void;
  remove(path: string): void;
  exists(path: string): boolean;
  move(from: string, to: string): void;
}

export interface HardwareModule {
  flashLed(duration: number): void;
  // Add more as needed
}

export interface TimeModule {
  now(): number;
  formatTime(timestamp: number): string;
  setTimeout(callback: () => void, delay: number): number;
  clearTimeout(id: number): void;
  setInterval(callback: () => void, interval: number): number;
  clearInterval(id: number): void;
}

export interface EventsModule {
  on(event: string, callback: (...args: any[]) => void): void;
  off(event: string, callback?: (...args: any[]) => void): void;
}

export interface GsmModule {
  sendSms(number: string, message: string): void;
  call(number: string): void;
  getContacts(): Contact[];
  // Add more
}

export interface Contact {
  name: string;
  number: string;
}

export interface JsonModule {
  encode(data: any): string;
  decode(json: string): any;
}

// Export everything
export * from './App';