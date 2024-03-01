import { useEffect } from "react";
import Layout from "../components/Layout";
import gsap from "gsap";

export default function Events() {
    useEffect(() => {
        gsap.from(".panel", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
    }, [])
    return (
        <Layout>
            <div className="panel w-screen h-screen text-white flex flex-col items-center justify-center">
                    <div className="w-3/4 flex flex-col items-center justify-center cursor-pointer">
                    <div className="font-display tracking-widest uppercase text-3xl pb-2">Well Done</div>
                    <div className="text-sm italic text-[#bab5b1] pb-8">An immersive dining experience</div>

                        <video loop autoPlay muted src="/wdtease.mov" className="w-full md:w-1/2 h-auto"/>
                        <div className="pt-8 text-center">
                            <div className="text-sm italic text-[#bab5b1]">April 29th, 7:00pm</div>
                            <div className="text-sm italic text-[#bab5b1]">Melody Wine Bar on Virgil</div>
                            <a href="https://www.welldonetheshow.com/" target="_blank">
                                <div className="mt-4 text-[#bab5b1]">Get tickets</div>
                            </a>
                        </div>
                    </div>
                </div>
        </Layout>
    )
}