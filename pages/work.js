import { use, useState } from "react";
import Layout from "../components/Layout";
import Teaser from "../components/Teaser";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

const works = [
    {
        media: "/wdtease.mov",
        title: "Well Done",
        subtitle: "Concept, choreography, and direction",
        type: "video",
        url: "/work/welldonefilm",
    },
    {
        media: "/work/heliophilia.jpg",
        title: "Sun Lover",
        subtitle: "In collaboration with Sculptor Leah Piepgras",
        type: "image",
        url: "/work/oracleegg"
    },
    {
        media: "/work/hatis.jpg",
        title: "Hatis Noit",
        subtitle: "Coming soon",
        type: "image",
    },
    {
        media: "/work/clozee.mov",
        title: "CloZee",
        subtitle: "Movement direction",
        type: "video",
        url: "/work/clozee",
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

    return(
        <Layout>
            <Head>
                <title>Work</title>
                <meta
                name="description"
                content="Past works | View the archive"
                />
            </Head>
            <div className="text-white w-full columns-2 md:columns-3 gap-2 md:gap-4 p-8 pt-[15vh] relative">
                {works.map((work) => (
                    <div className="mb-8 md:mb-16 group relative cursor-pointer break-inside-avoid-column w-full relative" onClick={work.url ? () => router.push(work.url) : mockClick}>
                        {(work.type) == "image" && <Image src={work.media} alt="Project image" className="opacity-80 group-hover:opacity-100 duration-300" width={500} height={300}/>}
                        {(work.type) == "video" && <video loop autoPlay muted playsInline src={work.media} className="opacity-80 group-hover:opacity-100 duration-300"/>}
                        <div className="text-[#bab5b1] group-hover:text-white duration-300 pt-8">
                            <div className="uppercase tracking-widest">{work.title}</div>
                            <div className="text-xs">{work.subtitle}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}