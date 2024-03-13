import Header from "../components/Header";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Empara | A Movement Company Based in Los Angeles</title>
        <meta
          name="description"
          content="Empara is a movement and choreography company focused on creating nontraditional contemporary dance experiences. Empara celebrates other art forms and encourages all bodies to connect to their innate desire to move."
        />
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
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      </Head>
          <Header />
          <Component {...pageProps} />
    </>
  );
}

export default MyApp;
