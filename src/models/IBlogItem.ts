export interface Item {
  id: number;
  thumbImg: string;
  meta: string;
  title: string;
  description: string;
  authorThumbImg: string;
  author: string;
  date: string;
}

export interface ItemProps {
  item: Item;
}
