import { useEffect } from "react";
import Layout from "../components/Layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Work() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let sections = gsap.utils.toArray(".panel");
        const containerWidth = document.querySelector(".container").offsetWidth;
        const containerHeight = document.querySelector(".container").offsetHeight;

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: document.querySelector(".container"),
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: `+=${containerWidth}`
            }
        })
    })
    return (
        <Layout>
        <div className="container flex w-[400vw] max-w-[400vw] overflow-x-hidden overflow-y-auto">
            <div className="panel bg-black w-screen h-screen text-white">Creator</div>
            <div className="panel w-screen h-screen text-white">Director</div>
            <div className="panel bg-black w-screen h-screen text-white">Cinematographer</div>
            <div className="panel w-screen h-screen text-white">Editor</div>
        </div>
        </Layout>
    )
}