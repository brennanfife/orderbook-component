import Head from 'next/head';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import store from '../store';
import theme from '../styles/theme';

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
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
