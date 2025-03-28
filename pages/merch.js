import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import { useEffect } from "react";

export default function Merch() {
    useEffect(() => {
        // Dynamically load PayPal script
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=AXgz5VqpoO23JzH90mNz2vBKiDRIRB7OREs-LmEYALGylPsTU9Q2d-jIKSWdBF5G9mxdB3iOVX4JjDFI&components=buttons,hosted-buttons";
        script.async = true;
        document.body.appendChild(script);
    
        script.onload = () => {
          if (window.cartPaypal) {
            window.cartPaypal.Cart({ id: "pp-view-cart" });
            window.cartPaypal.AddToCart({ id: "KN9VT6H4LBNHW" });
            window.cartPaypal.AddToCart({ id: "JPT8WNM8TQ83W" });
            window.cartPaypal.AddToCart({ id: "X3Y64G37SMVH2" });
          }
        };
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    return (
        <>
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
                <script src="https://www.paypalobjects.com/ncp/cart/cart.js" data-merchant-id="85AFT4H8HJVNN"></script>
            </Head>
            
            <div className="relative w-full h-full flex flex-col">
            
                <div className="basis-1/3 text-white pt-[24vh] px-4 md:px-8">
                    <div className="flex justify-between pb-12">
                        <div className="basis-1/2 font-display text-4xl tracking-widest">Merch</div>
                        <div className="basis-1/2 italic text-[#bab5b1] text-sm">
                        Empara partners with our favorite local, sustainable brands to offer ethical and high quality products. All items are screen printed by hand by Megan Paradowski in Highland Park, LA, and all proceeds go towards paying our dancers. Thank you for supporting movement and the arts!
                        </div>
                    </div>
                </div>
                <div className="grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-6 text-[#bab5b1] px-8 pb-24">
                    <div className="flex flex-col items-center">
                        <Image src="/babyteeblackv3.png" width={300} height={300} priority />
                        <div className="text-xs pt-8 w-3/4 text-center"><a href="https://gilrodriguez.com/products/bellevue-tee-black" className="underline" target="_blank" >The Bellevue Tee</a> by Gil Rodriguez<br />A super soft short-sleeve made from cotton baby rib. Made in USA with locally knit materials. 100% cotton. </div>
                        <div className="max-w-full pt-8">
                            <paypal-add-to-cart-button data-id="KN9VT6H4LBNHW"></paypal-add-to-cart-button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/babyteewhite.png" width={300} height={300} priority />
                        <div className="text-xs pt-8 w-3/4 text-center"><a href="https://gilrodriguez.com/products/bellevue-tee-black" className="underline" target="_blank" >The Bellevue Tee</a> by Gil Rodriguez<br />A super soft short-sleeve made from cotton baby rib. Made in USA with locally knit materials. 100% cotton.</div>
                        <div className="max-w-full pt-8">
                            <paypal-add-to-cart-button data-id="X3Y64G37SMVH2"></paypal-add-to-cart-button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/cobaltbaggu.png" width={300} height={300} priority />
                        <div className="text-xs pt-8 w-3/4 text-center"><a href="https://www.baggu.com/products/standard-baggu-black" className="underline" target="_blank" >Standard Baggu</a> by Baggu<br />Assembled from one continuous piece of recycled ripstop nylon to minimize waste and increase durability. Holds up to 50lbs.</div>
                        <div className="max-w-full pt-8">
                            <paypal-add-to-cart-button data-id="JPT8WNM8TQ83W"></paypal-add-to-cart-button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}