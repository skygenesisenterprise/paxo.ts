import { Point, PaxosList } from '../core/paxos-api';

export interface ListProps {
  position: Point;
  size: { width: number; height: number };
  items: string[];
  onSelect?: (index: number) => void;
}

export class List {
  private guiList: PaxosList;

  constructor(props: ListProps) {
    this.guiList = gui.list({
      position: props.position,
      size: props.size,
      items: props.items
    });

    if (props.onSelect) {
      this.onSelect(props.onSelect);
    }
  }

  setItems(items: string[]) {
    this.guiList.setItems(items);
  }

  onSelect(callback: (index: number) => void) {
    this.guiList.onSelect(callback);
  }

  get element() {
    return this.guiList;
  }
}