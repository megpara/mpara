import Header from "../components/Header";
import "../styles/globals.css";
import Head from "next/head";
import localFont from '@next/font/local';

const optimanova = localFont({
  src: [
    {
      path: "../public/fonts/OptimaNovaLTProLight.otf",
      weight: "100"
    },
    {
      path: '../public/fonts/OptimaNovaLTProRegular.otf',
      weight: '400'
    }
  ],
  variable: '--font-optima-nova'
})

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en" className={`${optimanova.variable} font-paragraph`}>
      <Head>
        <title>Empara | A Movement Company</title>
        <meta
          name="description"
          content="Empara is a movement and choreography company focused on creating nontraditional contemporary dance experiences."
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
        <meta property="og:image" content="/og.png" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      </Head>
          <Header />
          <Component {...pageProps} />
    </html>
  );
}

export default MyApp;
