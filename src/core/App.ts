import { Window } from '../components/Window';

export abstract class App {
  protected mainWindow: Window;

  constructor(title?: string) {
    this.mainWindow = new Window({ title });
  }

  abstract run(): void;

  background?(): void;
  wakeup?(): void;
  quit?(): void;

  protected show() {
    this.mainWindow.show();
  }
}