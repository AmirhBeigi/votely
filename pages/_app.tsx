import '../styles/fonts.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Splash from '../components/Splash';
import Provider from '../components/Provider';
import { useMe } from '../apis/auth/me/hook';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Splash />
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
