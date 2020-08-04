export interface AggregationState {
  aggregation: string;
}

export enum CounterActionTypes {
  INCREMENT_AGGREGATION = 'INCREMENT_AGGREGATION',
  DECREMENT_AGGREGATION = 'DECREMENT_AGGREGATION',
}
export type CounterActions = INCREMENT_AGGREGATION | DECREMENT_AGGREGATION;

export interface INCREMENT_AGGREGATION {
  type: CounterActionTypes.INCREMENT_AGGREGATION;
}

export interface DECREMENT_AGGREGATION {
  type: CounterActionTypes.DECREMENT_AGGREGATION;
}
