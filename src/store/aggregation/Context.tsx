import React, { createContext, useReducer, ReactNode } from 'react';

import { AggregationState } from './types';
import AggregationReducer, { AggLevels } from './Reducers';
console.log('AggregationReducer:', AggregationReducer);

const intialAggregationState: AggregationState = {
  aggregation: AggLevels[0],
};

export const AggregationContext = createContext<{
  state: any;
  dispatch: any;
}>({ state: intialAggregationState, dispatch: AggregationReducer });

export const AggregationProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    AggregationReducer,
    intialAggregationState
  );

  return (
    <AggregationContext.Provider value={{ state, dispatch }}>
      {children}
    </AggregationContext.Provider>
  );
};
