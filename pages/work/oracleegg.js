import Layout from "../../components/Layout";
import Image from "next/image";

const media = [
    {
        location: "/work/oracleegg/biancaSkins.mov",
        type: "video"
    },
    {
        location: "/work/oracleegg/cloudRemove.mov",
        type: "video"
    },
    {
        location: "/work/oracleegg/davonHead.mov",
        type: "video"
    },
    {
        location: "/work/oracleegg/walking.mov",
        type: "video"
    },
    {
        location: "/work/oracleegg/Rock.mov",
        type: "video"
    },
    {
        location: "/work/oracleegg/covering.mov",
        type: "video"
    },
]

export default function OracleEgg() {
    return (
        <Layout>
            <div className="text-center pt-[24vh] px-4 md:px-8 text-[#bab5b1] text-sm italic">Preliminary exploration with sculptures by Leah Piepgras for "Sun Lover" | Oracle Egg DTLA March 2024<br />Dancers: Davon Rashawn, Daphne Fernberger, Maddie Miller, Kevin Lau, Bianca Chung</div>
            <div className="w-full flex flex-col items-center px-4 md:px-8">
                <div className="w-full md:w-1/2 relative pt-[70%] md:pt-[35%]">
                <iframe src="https://player.vimeo.com/video/1050587020?h=2a3f6860a2&autoplay=1&title=0&byline=0&portrait=0" className="w-full absolute h-full top-0 left-0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
                </div>
            </div>
            <div className="text-white w-full columns-1 md:columns-3 gap-2 md:gap-4 py-8 px-4 md:px-8 relative">
            {media.map((item) => (
                <div className="mb-2 md:mb-16">
                {(item.type) == "image" && <Image src={item.location} alt="Oracle Egg image" width={500} height={300}/>}
                {(item.type) == "video" && <video loop autoPlay muted playsInline src={item.location}/>}
                </div>
            ))}
            </div>
        </Layout>
    )
}