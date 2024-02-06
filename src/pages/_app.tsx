import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { store } from '@/store/store';

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

import '@/styles/globals.sass';

import { appWithI18Next } from 'ni18n';
import { ni18nConfig } from '../../ni18n.config';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
};

export default appWithI18Next(App, ni18nConfig);
