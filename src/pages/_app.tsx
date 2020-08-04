import Head from 'next/head';
import { Provider } from 'react-redux';

import store from '../store';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  <Head>
    <title key="title">Orderbook Component</title>
    <meta charSet="UTF-8" />

    <meta name="description" content={'Orderbook Component'} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
      key="viewport"
    />
  </Head>;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
