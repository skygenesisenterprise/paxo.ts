import { Color, Point, PaxosLabel } from '../core/paxos-api';

export interface LabelProps {
  text: string;
  position: Point;
  color?: Color;
}

export class Label {
  private guiLabel: PaxosLabel;

  constructor(props: LabelProps) {
    this.guiLabel = gui.label({
      text: props.text,
      position: props.position,
      color: props.color
    });
  }

  setText(text: string) {
    this.guiLabel.setText(text);
  }

  setColor(color: Color) {
    this.guiLabel.setColor(color);
  }

  get element() {
    return this.guiLabel;
  }
}