import type { AppProps } from 'next/app';
// import localFont from 'next/font/local'; ++

import { Provider } from 'react-redux';
import { store } from '@/store/store';

import '@/styles/globals.sass';

import { appWithI18Next } from 'ni18n';
import { ni18nConfig } from '../../ni18n.config';


function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
     </Provider>
  );
};

export default appWithI18Next(App, ni18nConfig);
