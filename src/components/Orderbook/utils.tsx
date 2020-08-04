import { v4 as uuidv4 } from 'uuid';

import {
  Row,
  Cell,
  Data,
  LightGreen,
  DarkGreen,
  LightRed,
  DarkRed,
  Sidebar,
} from './Orderbook.style';

export function getPercentage(
  cumulative: any,
  cumulativeType: string,
  baseCumulative: any
) {
  let fillPercentage = 0;
  if (cumulativeType === 'ask')
    fillPercentage = (cumulative / baseCumulative) * 100;
  else if (cumulativeType === 'bid')
    fillPercentage = (cumulative / baseCumulative) * 100;
  else return;

  fillPercentage = Math.min(fillPercentage, 100);
  fillPercentage = Math.max(fillPercentage, 0);
  return fillPercentage;
}

export function getZeros(color: string) {
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

export function getAsks(asks: number[][], baseCumulative: number) {
  const currentAsks = asks.map((ask: number[]) => {
    let price: string[] = ask[0].toString().split('.');
    if (!price[1]) price[1] = '00';
    if (price[1].length === 1) price[1] = price[1] + '0';

    return (
      <Row key={uuidv4()}>
        <Sidebar
          style={{
            backgroundSize:
              getPercentage(price[1], 'ask', baseCumulative) + '% 100%',
          }}
          ask="true"
        />

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

export function getBids(bids: number[][], baseCumulative: number) {
  return bids.map((bid: number[]) => {
    let price: string[] = bid[0].toString().split('.');
    if (!price[1]) price[1] = '00';
    if (price[1].length === 1) price[1] = price[1] + '0';

    return (
      <Row key={uuidv4()}>
        <Sidebar
          style={{
            backgroundSize:
              getPercentage(price[1], 'bid', baseCumulative) + '% 100%',
          }}
          bid="true"
        />
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
