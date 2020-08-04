import React from 'react';

import { IOrderbook } from './types';
import { getZeros, getAsks, getBids } from './utils';

import {
  OrderbookWrapper,
  TitleBar,
  Title,
  TopBar,
  Box,
  Text,
  ScrollContainer,
  MiddleBar,
  BottomBar,
  ButtonGroup,
  Button,
} from './Orderbook.style';

export default function Orderbook({
  asks,
  bids,
  spread,
  aggregation,
  askCumulative,
  bidCumulative,
  incrementAggregation,
  decrementAggregation,
}: IOrderbook) {
  return (
    <OrderbookWrapper>
      <TitleBar>
        <Title>Order Book</Title>
      </TitleBar>
      <TopBar>
        <Box>
          <Text>Market Size</Text>
        </Box>
        <Box price="true">
          <Text>Price (USD)</Text>
        </Box>
        <Box size="true">
          <Text>My Size</Text>
        </Box>
      </TopBar>
      <ScrollContainer>
        <>{asks ? getAsks(asks, askCumulative) : getZeros('red')}</>
        <MiddleBar>
          <Box>
            <Text>USD Spread</Text>
          </Box>
          <Box price="true">
            <Text>{spread ? spread.toFixed(2) : '-'}</Text>
          </Box>
          <Box size="true">
            <Text />
          </Box>
        </MiddleBar>
        <>{bids ? getBids(bids, bidCumulative) : getZeros('green')}</>
      </ScrollContainer>
      <BottomBar>
        <Box>
          <Text>Aggregation</Text>
        </Box>
        <Box price="true">
          <Text>{aggregation ? aggregation : '-'}</Text>
        </Box>
        <Box size="true">
          <ButtonGroup>
            <Button
              disabled={aggregation === '0.01'}
              onClick={decrementAggregation}
            >
              -
            </Button>
            <Button
              disabled={aggregation === '1.00'}
              onClick={incrementAggregation}
            >
              +
            </Button>
          </ButtonGroup>
        </Box>
      </BottomBar>
    </OrderbookWrapper>
  );
}
