import { useEffect } from "react";
import Layout from "../components/Layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const works = [
    {
        img: "/headshot.png",
        title: "Well Done",
        subtitle: "Concept, choreography, and direction"
    },
    {
        img: "/headshot.png",
        title: "Sun Lover",
        subtitle: "Coming soon"
    },
    {
        img: "/headshot.png",
        title: "Monstrous Forms",
        subtitle: "Coming soon"
    },
    {
        img: "/headshot.png",
        title: "Hatis Noit",
        subtitle: "Coming soon"
    }
];

export default function WorkOld() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let sections = gsap.utils.toArray(".panel");
        const containerWidth = document.querySelector(".container").offsetWidth;

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            duration: 0.5,
            scrollTrigger: {
                trigger: document.querySelector(".container"),
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: `+=${containerWidth}`,
                onUpdate: (self) => document.getElementById("white").style.width = ((self.progress * 100 / 4) + "%"),
            },
        })
        gsap.from(".panel", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
    }, [])
    return (
        <Layout>
        <div className="container flex w-[400vw] max-w-[400vw] overflow-x-hidden overflow-y-auto">
        <div className="absolute bottom-8 left-8 text-white text-xs lowercase italic">Scroll</div>
        <div className="absolute bottom-0 h-[3px] bg-white" id="white" />
            {works.map((work, index) => (
                <div className="panel w-screen h-screen text-white flex flex-col items-center justify-center">
                    <div className="w-3/4 flex flex-col items-center justify-center">
                        {/* <Image src={work.img} alt="Project image" className="w-1/2 h-auto"/> */}
                        <div>{work.title}</div>
                        <div>{work.subtitle}</div>
                    </div>
                </div>
            ))}
            {/* <div className="panel panel2 w-1/6 h-screen text-white">Director</div>
            <div className="panel panel3 bg-black w-1/6 h-screen text-white">Cinematographer</div>
            <div className="panel panel4 w-1/6 h-screen text-white">Editor</div>
            <div className="panel panel4 w-1/6 h-screen text-white">Editor</div>
            <div className="panel panel4 w-1/6 h-screen text-white">Editor</div> */}
        </div>
        </Layout>
    )
}