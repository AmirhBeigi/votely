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
        <meta name="theme-color" content="#000" />
        <link rel="icon" href="/jojo.ico" />
      </Head>
      <body className="scrollbar-hide scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default CustomDocument;
