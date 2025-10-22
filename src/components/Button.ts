import { Color, Point, PaxosButton } from '../core/paxos-api';

export interface ButtonProps {
  text: string;
  position: Point;
  size?: { width: number; height: number };
  color?: Color;
  onClick?: () => void;
}

export class Button {
  private guiButton: PaxosButton;

  constructor(props: ButtonProps) {
    this.guiButton = gui.button({
      text: props.text,
      position: props.position,
      size: props.size,
      onClick: props.onClick
    });
  }

  setText(text: string) {
    this.guiButton.setText(text);
  }

  setPosition(position: Point) {
    this.guiButton.setPosition(position);
  }

  onClick(callback: () => void) {
    this.guiButton.onClick(callback);
  }

  get element() {
    return this.guiButton;
  }
}