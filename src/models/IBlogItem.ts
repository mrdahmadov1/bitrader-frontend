export interface Item {
  id: number;
  thumbImg: string;
  meta: string;
  authorThumbImg: string;
}

export interface ItemProps {
  item: Item;
}
