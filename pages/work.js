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
    const handleRefresh = () => {
        router.reload();
    };
    const [wdOpen, setwdOpen] = useState(false);
    const togglewd = () => {
        setwdOpen(!wdOpen);
    };

    return(
        <Layout>
            <div className="text-white w-full columns-2 md:columns-3 gap-8 md:gap-16 p-8 pt-[15vh] relative">
                {works.map((work) => (
                    <div className="mb-8 md:mb-16 group relative cursor-pointer" onClick={(work.title == "Well Done") ? togglewd : handleRefresh}>
                        {(work.type) == "image" && <img src={work.media}/>}
                        {(work.type) == "video" && <video loop autoPlay muted src={work.media}/>}
                        <div className="absolute top-0 left-0 w-full h-full bg-[#00000050] invisible group-hover:visible p-8">
                            <div className="font-display uppercase tracking-widest">{work.title}</div>
                            <div className="text-xs lowercase italic">{work.subtitle}</div>
                        </div>
                    </div>
                ))}
                <Teaser open={wdOpen} toggle={togglewd} />
            </div>
        </Layout>
    )
}