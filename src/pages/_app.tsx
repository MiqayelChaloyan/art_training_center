import type { AppProps } from 'next/app';
// import localFont from 'next/font/local'; ++

// import { Provider } from 'react-redux';
// import { store } from '@/store/store';

// import '@/styles/globals.sass';

// const gilroy = localFont({
//   src: [
//     {
//       path: '../fonts/Gilroy/Gilroy-Extrabold.woff2',
//       weight: '800',
//       style: 'normal'
//     }
//   ]
// });
import '@/styles/globals.sass';


export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
      <Component {...pageProps} />
    // </Provider>
  );
}
