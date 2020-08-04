import { INCREMENT_AGGREGATION, DECREMENT_AGGREGATION } from '../constants';

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
