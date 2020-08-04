import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IOrderbook } from './types';

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
  Row,
  Cell,
  Data,
  LightGreen,
  DarkGreen,
  LightRed,
  DarkRed,
} from './Orderbook.style';

function getZeros(color: string) {
  let data = [];
  let length = 50;

  for (let i = 0; i < length; i++) {
    data.push(
      <Row key={uuidv4()}>
        <Cell>
          <Data>{'0.0000'}</Data>
        </Cell>
        <Cell price="true">
          <Data>
            {color === 'green' ? (
              <DarkGreen>
                {'0000.'}
                <LightGreen>{'00'}</LightGreen>
              </DarkGreen>
            ) : (
              <DarkRed>
                {'0000.'}
                <LightRed>{'00'}</LightRed>
              </DarkRed>
            )}
          </Data>
        </Cell>
        <Cell size="true">
          <Data>-</Data>
        </Cell>
      </Row>
    );
  }
  return data;
}

function getAsks(asks: number[][]) {
  const currentAsks = asks.map((ask: number[]) => {
    let price: string[] = ask[0].toString().split('.');
    console.log('price:', price);
    if (!price[1]) price[1] = '00';
    if (price[1].length === 1) price[1] = price[1] + '0';

    return (
      <Row key={uuidv4()}>
        <Cell>
          <Data>{ask[1].toFixed(4)}</Data>
        </Cell>

        <Cell price="true">
          <Data>
            <DarkRed>
              {`${price[0]}.`}
              <LightRed>{price[1]}</LightRed>
            </DarkRed>
          </Data>
        </Cell>
        <Cell size="true">
          <Data>-</Data>
        </Cell>
      </Row>
    );
  });
  return currentAsks.reverse();
}

function getBids(bids: number[][]) {
  return bids.map((bid: number[]) => {
    let price: string[] = bid[0].toString().split('.');
    if (!price[1]) price[1] = '00';
    if (price[1].length === 1) price[1] = price[1] + '0';

    return (
      <Row key={uuidv4()}>
        <Cell>
          <Data>{bid[1].toFixed(4)}</Data>
        </Cell>

        <Cell price="true">
          <Data>
            <DarkGreen>
              {`${price[0]}.`}
              <LightGreen>{price[1]}</LightGreen>
            </DarkGreen>
          </Data>
        </Cell>
        <Cell size="true">
          <Data>-</Data>
        </Cell>
      </Row>
    );
  });
}

export default function Orderbook({
  asks,
  bids,
  spread,
  aggregation,
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
        <>{asks ? getAsks(asks) : getZeros('red')}</>
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
        <>{bids ? getBids(bids) : getZeros('green')}</>
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
