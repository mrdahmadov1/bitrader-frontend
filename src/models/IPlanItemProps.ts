export interface PlanItemProps {
  item: {
    isVertical: boolean;
    variant: number;
    title: string;
    price: number;
    offerList: Array<string>;
  };
}
