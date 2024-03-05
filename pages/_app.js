import Header from "../components/Header";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <link rel="stylesheet" href="https://use.typekit.net/oev0dtt.css" />
        <link rel="stylesheet" href="https://use.typekit.net/uao4cwk.css" />
        <meta property="og:title" content="EMPARA | A movement company" key="ogtitle" />
        <meta
        property="og:description"
        content="A movement company"
        key="ogdesc"
        />
        <meta property="og:image" content="/daphne.jpg" />
      </Head>
          <Header />
          <Component {...pageProps} />
    </>
  );
}

export default MyApp;
