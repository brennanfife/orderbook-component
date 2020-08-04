export interface IOrderbook {
  asks: number[][] | undefined;
  bids: number[][] | undefined;
  spread: number;
  aggregation: string;
  askCumulative: number;
  bidCumulative: number;
  incrementAggregation: () => any;
  decrementAggregation: () => any;
}
