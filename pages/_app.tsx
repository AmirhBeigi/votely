import "../styles/fonts.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { AnimatePresence, motion } from "framer-motion";
import Splash from "../components/splash";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Splash />
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
    </QueryClientProvider>
  );
}

export default MyApp;
