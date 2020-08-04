import { INCREMENT_AGGREGATION, DECREMENT_AGGREGATION } from './Constants';

export const incrementAggregation = () => {
  return {
    type: INCREMENT_AGGREGATION,
  };
};

export const decrementAggregation = () => {
  return {
    type: DECREMENT_AGGREGATION,
  };
};
