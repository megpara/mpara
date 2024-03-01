import { useState } from "react";
import Layout from "../components/Layout";
import Teaser from "../components/Teaser";
import { useRouter } from "next/router";

const works = [
    {
        media: "/wdtease.mov",
        title: "Well Done",
        subtitle: "Concept, choreography, and direction",
        type: "video",
    },
    {
        media: "/work/heliophilia.jpg",
        title: "Heliophilia",
        subtitle: "In collaboration with Leah Piepgras, coming soon",
        type: "image",
    },
    {
        media: "/work/hatis.jpg",
        title: "Hatis Noit",
        subtitle: "Coming soon",
        type: "image",
    },
    {
        media: "/work/ana.png",
        title: "Becoming",
        subtitle: "In collaboration with Ana Reyes, coming soon",
        type: "image",
    }
];

export default function Work() {
    const router = useRouter();
    const mockClick = () => {
        
    };
    const [wdOpen, setwdOpen] = useState(false);
    const togglewd = () => {
        setwdOpen(!wdOpen);
    };

    return(
        <Layout>
            <div className="text-white w-full columns-2 md:columns-3 gap-2 md:gap-4 p-8 pt-[15vh] relative">
                {works.map((work) => (
                    <div className="mb-8 md:mb-16 group relative cursor-pointer" onClick={(work.title == "Well Done") ? togglewd : mockClick}>
                        {(work.type) == "image" && <img src={work.media} className="opacity-80 group-hover:opacity-100 duration-300"/>}
                        {(work.type) == "video" && <video loop autoPlay muted src={work.media} className="opacity-80 group-hover:opacity-100 duration-300"/>}
                        <div className="text-[#bab5b1] group-hover:text-white duration-300 pt-8 break-inside-avoid-column">
                            <div className="">{work.title}</div>
                            <div className="text-xs">{work.subtitle}</div>
                        </div>
                    </div>
                ))}
                <Teaser open={wdOpen} toggle={togglewd} />
            </div>
        </Layout>
    )
}