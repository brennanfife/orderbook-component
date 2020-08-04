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

/**
 * Get Percentage of market size against total cumulative
 *
 * @param cumulative
 *   Cumulative amount to calculate
 * @param  cumulativeType
 *   Cumulative type (i.e. ask or bid)
 *  @param  baseCumulative
 *   Current total be measured against
 *
 * @returns fillPercentage
 *   % amount of color to fill row
 */
export function getPercentage(
  cumulative: string,
  cumulativeType: string,
  baseCumulative: number
) {
  let fillPercentage = 0;
  if (cumulativeType === 'ask')
    fillPercentage = (parseFloat(cumulative) / baseCumulative) * 100;
  else if (cumulativeType === 'bid')
    fillPercentage = (parseFloat(cumulative) / baseCumulative) * 100;
  else {
    fillPercentage = 50;
  }

  fillPercentage = Math.min(fillPercentage, 100);
  fillPercentage = Math.max(fillPercentage, 0);
  return fillPercentage * 10; //to lengthen
}

/**
 * Called on init lo fill rows before waiting for incoming data
 *
 * TODO: REPLACE WITH SOME FORM OF CACHING
 *
 * @param color
 *   What color to fill zeros with
 *
 * @returns data
 *   An array of zeros, wrapped with Row div
 */
export function getZeros(color: string) {
  let data = [];
  let length = 50;

  for (let i = 0; i < length; i++) {
    data.push(
      <Row key={uuidv4()}>
        <Sidebar
          style={{
            backgroundSize: '50% 100%',
          }}
        />
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

/**
 * Get market ask orders
 *
 * @param asks
 *   Currency market asks
 *
 * @returns currentAsks
 *   An array of market asks in reverse order
 */
export function getAsks(asks: number[][], baseCumulative: number) {
  const currentAsks = asks.map((ask: number[]) => {
    const decimal = ask[0].toString().split('.')[1];
    const length = decimal && decimal.length > 2 ? decimal.length : 2;
    const fixedNumber = Number(ask[0].toString()).toFixed(length);
    const price: string[] = fixedNumber.split('.');
    const percentage = getPercentage(ask[1].toString(), 'ask', baseCumulative);

    return (
      <Row key={uuidv4()}>
        <Sidebar
          style={{
            backgroundSize: percentage + '% 100%',
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

/**
 * Get market bid orders
 *
 * @param bids
 *   Currency market bids
 *
 * @returns currentBids
 *   An array of market bids
 */
export function getBids(bids: number[][], baseCumulative: number) {
  return bids.map((bid: number[]) => {
    const decimal = bid[0].toString().split('.')[1];
    const length = decimal && decimal.length > 2 ? decimal.length : 2;
    const fixedNumber = Number(bid[0].toString()).toFixed(length);
    const price: string[] = fixedNumber.split('.');
    const percentage = getPercentage(bid[1].toString(), 'bid', baseCumulative);

    return (
      <Row key={uuidv4()}>
        <Sidebar
          style={{
            backgroundSize: percentage + '% 100%',
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
