import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Merch() {
    return (
        <Layout>
            <Head>
                <title>Merch</title>
                <meta
                name="description"
                content="Empara gear | Recycled clothing items screen printed by hand in LA"
                />
            </Head>
            <div className="relative w-full h-full flex flex-col">
                <div className="basis-1/3 text-white flex justify-between pt-[24vh] px-4 md:px-8">
                    <div className="basis-1/2 font-display text-4xl tracking-widest">Merch</div>
                    <div className="basis-1/2 italic text-[#bab5b1] text-sm">
                    All products are screen printed by hand by Megan Paradowski in Highland Park, LA. Please <a href="mailto:megan@emparadance.com" className="underline underline-offset-4">let us know</a> if there are products you're interested in seeing. 
                    <br />
                    <br />
                    T-shirts coming soon.
                    </div>
                </div>
                <div className="basis-2/3 w-full relative flex flex-col items-center justify-center py-24">
                <div className="w-full px-8 md:px-0 md:w-2/3 lg:w-1/2 flex justify-between">
                    <div className="">
                        <Image src="/baggu2.jpg" width={300} height={300} priority />
                    </div>
                    <div className="text-[#bab5b1] flex flex-col justify-center pl-4">
                        <div>Empara Standard Baggu Bag</div>
                        <div className="pt-2">$22.00</div>
                        <button className="bg-[#d82d1a] text-white mt-2"><a href="https://www.paypal.com/ncp/payment/JPT8WNM8TQ83W" target="_blank">Order now</a></button>
                    </div>
                </div>

                </div>
            </div>
        </Layout>
    )
}