import type { NextComponentType } from 'next';
import { Head, Html, Main, NextScript } from 'next/document';

const CustomDocument: NextComponentType = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script src="https://accounts.google.com/gsi/client" async defer></script>
        <link rel="icon" href="/jojo.ico" />

        <meta name="application-name" content="Votely" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Votely" />
        <meta name="description" content="Poll App" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon_x192.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://votely.vercel.app" />
        <meta name="twitter:title" content="Votely" />
        <meta name="twitter:description" content="Poll App" />
        <meta name="twitter:creator" content="@Amirhbeigi" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Votely" />
        <meta property="og:description" content="Poll App" />
        <meta property="og:site_name" content="Votely" />
        <meta property="og:url" content="https://votely.vercel.app" />
      </Head>
      <body className="scrollbar-hide scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default CustomDocument;
