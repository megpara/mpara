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
                    <a className="w-3/4 flex flex-col items-center justify-center cursor-pointer" href="https://www.welldonetheshow.com" target="_blank">
                        <video loop autoPlay muted src="/wdtease.mov" className="w-full md:w-1/2 h-auto"/>
                        <div className="pt-8 text-center">
                            <div className="font-display tracking-widest uppercase text-3xl font-normal">Well Done</div>
                            <div className="lowercase text-xs italic pt-2">April 29th, 7:00pm</div>
                            <div className="lowercase text-xs italic pt-2">Melody Wine Bar on Virgil</div>
                        </div>
                    </a>
                </div>
        </Layout>
    )
}