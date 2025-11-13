// pages/merch.js
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import usePaypalCart from "../hooks/usePaypalCart";

export default function Merch() {
  // Hook handles loading scripts, adding items, and syncing cart button
  usePaypalCart();

  const products = [
    {
      id: "RWJ3X5N6BWQDW",
      src: "/redtank.jpg",
      name: "The LaPointe Tank",
      brand: "Gil Rodriguez",
      description:
        "A cotton baby rib spaghetti tank with square neckline. Made in USA with locally knit materials. 100% cotton.",
      link: "https://gilrodriguez.com/products/lapointe-tank-tomate?variant=45618902532388",
    },
    {
      id: "KN9VT6H4LBNHW",
      src: "/babyteeblackv3.png",
      name: "The Bellevue Tee",
      brand: "Gil Rodriguez",
      description:
        "A super soft short-sleeve made from cotton baby rib. Made in USA with locally knit materials. 100% cotton.",
      link: "https://gilrodriguez.com/products/bellevue-tee-black",
    },
    {
      id: "X3Y64G37SMVH2",
      src: "/babyteewhite.png",
      name: "The Bellevue Tee",
      brand: "Gil Rodriguez",
      description:
        "A super soft short-sleeve made from cotton baby rib. Made in USA with locally knit materials. 100% cotton.",
      link: "https://gilrodriguez.com/products/bellevue-tee-black",
    },
    {
      id: "JPT8WNM8TQ83W",
      src: "/cobaltbaggu.png",
      name: "Standard Baggu",
      brand: "Baggu",
      description:
        "Assembled from one continuous piece of recycled ripstop nylon to minimize waste and increase durability.",
      link: "https://www.baggu.com/products/standard-baggu-black",
    },
  ];

  return (
    <>
      {/* Fixed cart button */}
      <div className="fixed right-4 md:right-8 mt-32 z-50">
        <paypal-cart-button data-id="pp-view-cart"></paypal-cart-button>
      </div>

      <Layout>
        <Head>
          <title>Merch</title>
          <meta
            name="description"
            content="Empara merch | Screen printed by hand in LA"
          />
        </Head>

        <div className="relative w-full h-full flex flex-col merch">
          {/* Header section */}
          <div className="basis-1/3 text-white pt-[24vh] px-4 md:px-8">
            <div className="flex justify-between pb-12">
              <div className="basis-1/2 font-display text-4xl tracking-widest">
                Merch
              </div>
              <div className="basis-1/2 italic text-[#bab5b1] text-sm">
                Empara partners with our favorite local, sustainable brands to
                offer ethical and high quality products. All items are screen
                printed by hand by Meg in Montecito Heights, LA, and all
                proceeds go towards paying our dancers. Thank you for supporting
                movement and the arts!
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div className="grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 gap-12 text-[#bab5b1] px-8 pb-24">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-between"
              >
                <Image
                  src={product.src}
                  width={300}
                  height={300}
                  priority
                  alt={product.name}
                />
                <div className="text-xs pt-8 w-3/4 text-center">
                  <a
                    href={product.link}
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.name}
                  </a>{" "}
                  by {product.brand}
                  <br />
                  {product.description}
                </div>
                <div className="w-full max-w-full pt-8">
                  <paypal-add-to-cart-button data-id={product.id}></paypal-add-to-cart-button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
