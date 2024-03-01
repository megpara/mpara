import Menu from "../components/Menu";
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
      </Head>{" "}
          <Component {...pageProps} />
    </>
  );
}

export default MyApp;
