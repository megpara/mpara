import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(false);
  };

  // Close menu even if clicking on same page
  const { events } = useRouter();
  useEffect(() => {
      events.on('routeChangeStart', toggleMenu);
      return () => {
        events.off('routeChangeStart', toggleMenu); 
      };
    }, [toggleMenu, events]);

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
      {!menuOpen &&
        <div className="fixed top-0 right-0 flex flex-col items-end justify-center h-[12vh] pr-4 md:pr-8 z-[100] group">
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex">
            <div className="group flex flex-col justify-between h-[15px] w-[35px] items-end">
              <span className="h-[1px] w-full bg-[#faeddd]" />
              <span className="h-[1px] w-[60%] group-hover:w-full duration-700 bg-[#faeddd]" />
              <span className="h-[1px] w-[80%] group-hover:w-full duration-700 bg-[#faeddd]" />
            </div>
          </button>
        </div>
      }
          <Menu open={menuOpen} toggle={toggleMenu} />
          <Component {...pageProps} />
    </>
  );
}

export default MyApp;
