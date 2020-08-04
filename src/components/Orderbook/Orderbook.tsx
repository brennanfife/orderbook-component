import React from 'react';

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

export default function Orderbook() {
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
        <MiddleBar>
          <Box>
            <Text>USD Spread</Text>
          </Box>
          <Box price="true">
            <Text>00</Text>
          </Box>
          <Box size="true">
            <Text />
          </Box>
        </MiddleBar>
      </ScrollContainer>
      <BottomBar>
        <Box>
          <Text>Aggregation</Text>
        </Box>
        <Box price="true">
          <Text>1.00</Text>
        </Box>
        <Box size="true">
          <ButtonGroup>
            <Button disabled={false} onClick={() => console.log('decrement')}>
              -
            </Button>
            <Button disabled={false} onClick={() => console.log('increment')}>
              +
            </Button>
          </ButtonGroup>
        </Box>
      </BottomBar>
    </OrderbookWrapper>
  );
}
