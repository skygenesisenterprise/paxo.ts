import { Point, PaxosInput } from '../core/paxos-api';

export interface InputProps {
  position: Point;
  size?: { width: number; height: number };
  placeholder?: string;
  onChange?: (text: string) => void;
}

export class Input {
  private guiInput: PaxosInput;

  constructor(props: InputProps) {
    this.guiInput = gui.input({
      position: props.position,
      size: props.size,
      placeholder: props.placeholder
    });

    if (props.onChange) {
      this.onChange(props.onChange);
    }
  }

  getText(): string {
    return this.guiInput.getText();
  }

  setText(text: string) {
    this.guiInput.setText(text);
  }

  onChange(callback: (text: string) => void) {
    this.guiInput.onChange(callback);
  }

  get element() {
    return this.guiInput;
  }
}