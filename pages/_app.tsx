import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>mappins</title>
        <meta
          name="description"
          content="mappins"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Script
        type="text/javascript"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=1n27uhht04"
        strategy="beforeInteractive"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
