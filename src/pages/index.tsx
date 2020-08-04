import Head from 'next/head';

import OrderBook from '../components/Orderbook';

export default function Home() {
  return (
    <>
      <Head>
        <title>OrderBook Component</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="OrderBook component" />
        <meta lang="en" dir="ltr" />
      </Head>
      <OrderBook />
    </>
  );
}
