import { INCREMENT_AGGREGATION, DECREMENT_AGGREGATION } from './Constants';
import { AggregationState, CounterActions } from './types';

export const AggLevels = ['0.01', '0.05', '0.10', '0.50', '1.00']; //could add in 2.5, 5.0, and 10.0 similar to coinbare pro

export default function AggregationReducer(
  state: AggregationState,
  action: CounterActions
): AggregationState {
  switch (action.type) {
    case INCREMENT_AGGREGATION:
      return {
        ...state,
        aggregation: AggLevels[AggLevels.indexOf(state.aggregation) + 1],
      };
    case DECREMENT_AGGREGATION:
      return {
        ...state,
        aggregation: AggLevels[AggLevels.indexOf(state.aggregation) - 1],
      };
    default:
      return state;
  }
}
