import React, { useState } from 'react';
import ccxt from 'ccxt';

import Orderbook from './Orderbook';
import useInterval from '../../hooks/useInterval';

export default function OrderbookContainer() {
  const isRunning = true;
  const interval = 1000;
  const symbol = 'BTC/USD';
  const [asks, setAsks] = useState<any>();
  const [bids, setBids] = useState<any>();
  const [spread, setSpread] = useState(0);
  const aggregation = '0.01';

  const aggregateOrderBookSide = (orderbookSide: any, precision: number) => {
    const result: any = [];
    const amounts: any = {};
    for (let i = 0; i < orderbookSide.length; i++) {
      const ask = orderbookSide[i];
      let price = ask[0];
      if (precision !== undefined) {
        price = ccxt.decimalToPrecision(
          price,
          ccxt.ROUND,
          precision,
          ccxt.TICK_SIZE
        );
      }
      amounts[price] = (amounts[price] || 0) + ask[1];
    }
    Object.keys(amounts).forEach((price) =>
      result.push([parseFloat(price), amounts[price]])
    );
    return result;
  };

  const aggregateOrderBook = function (orderbook: any, precision: number) {
    let asks = aggregateOrderBookSide(orderbook['asks'], precision);
    let bids = aggregateOrderBookSide(orderbook['bids'], precision);
    return {
      asks: ccxt.sortBy(asks, 0),
      bids: ccxt.sortBy(bids, 0, true),
    };
  };

  useInterval(
    () => {
      (async () => {
        const CCXT = ccxt as any;
        const exchange = new CCXT['coinbasepro']({
          enableRateLimit: true,
        }) as ccxt.Exchange;

        await exchange.loadMarkets();

        const orderbook = await exchange.fetchOrderBook(symbol);

        const aggOrderBook = aggregateOrderBook(
          orderbook,
          parseFloat(aggregation)
        );

        const asks = aggOrderBook.asks;
        setAsks(asks);

        const bids = aggOrderBook.bids;
        setBids(bids);
        setSpread(orderbook.asks[0][0] - orderbook.bids[0][0]);
      })();
    },
    isRunning ? interval : null
  );

  return (
    <Orderbook
      asks={asks}
      bids={bids}
      spread={spread}
      aggregation={aggregation}
    />
  );
}
