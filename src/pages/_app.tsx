import type { AppProps } from 'next/app';
// import localFont from 'next/font/local'; ++

import { Provider } from 'react-redux';
import { store } from '@/store/store';

import '@/styles/globals.sass';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
     </Provider>
  );
}
