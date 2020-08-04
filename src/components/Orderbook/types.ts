export interface IOrderbook {
  asks: number[][] | undefined;
  bids: number[][] | undefined;
  spread: number;
  aggregation: string;
}
