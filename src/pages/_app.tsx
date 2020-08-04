import Head from 'next/head';

import { AggregationProvider } from '../store/aggregation/Context';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  <Head>
    <title key="title">hello</title>
    <meta charSet="UTF-8" />

    <meta name="description" content={'OrderBook Component'} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
      key="viewport"
    />
  </Head>;
  return (
    <AggregationProvider>
      <Component {...pageProps} />
    </AggregationProvider>
  );
}
