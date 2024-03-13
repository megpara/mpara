import Head from "next/head";
import Layout from "../components/Layout";

export default function Events() {
    return (
        <Layout>
            <Head>
                <title>Events</title>
            </Head>
            <div className="panel w-screen h-screen text-white flex flex-col items-center justify-center pt-[12vh]">
                    <div className="w-3/4 flex flex-col items-center justify-center cursor-pointer">
                        <video loop autoPlay muted src="/wdtease.mov" playsInline className="w-full md:w-1/2 h-auto"/>
                        <div className="pt-8 text-center">
                        <div className="font-display tracking-widest text-3xl pb-2">Well Done</div>
                    <div className="text-sm italic text-[#bab5b1] pb-4">An immersive dining experience</div>
                            <div className="text-sm italic text-[#bab5b1]">May 20th, 7:00pm</div>
                            <div className="text-sm italic text-[#bab5b1]">Melody Wine Bar on Virgil</div>
                            <a href="https://www.welldonetheshow.com/" target="_blank">
                                <div className="mt-4 text-[#bab5b1] underline underline-offset-4 uppercase tracking-widest text-xs">Get tickets</div>
                            </a>
                        </div>
                    </div>
                </div>
        </Layout>
    )
}