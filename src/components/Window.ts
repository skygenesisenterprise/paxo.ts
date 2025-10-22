import { Size, Point, PaxosWindow } from '../core/paxos-api';

export interface WindowProps {
  title?: string;
  size?: Size;
  position?: Point;
}

export class Window {
  private guiWindow: PaxosWindow;
  private children: any[] = [];

  constructor(props: WindowProps = {}) {
    this.guiWindow = gui.window({
      title: props.title || 'Paxo App',
      size: props.size || { width: 320, height: 240 },
      position: props.position
    });
  }

  addChild(child: any) {
    this.children.push(child);
    this.guiWindow.addChild(child.element || child);
  }

  show() {
    this.guiWindow.show();
  }

  hide() {
    this.guiWindow.hide();
  }

  close() {
    this.guiWindow.close();
  }

  setTitle(title: string) {
    this.guiWindow.setTitle(title);
  }

  get element() {
    return this.guiWindow;
  }
}