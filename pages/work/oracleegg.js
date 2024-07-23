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
            <div className="text-white w-full columns-1 md:columns-3 gap-2 md:gap-4 p-8 pt-[15vh] relative">
            {media.map((item) => (
                <div className="mb-8 md:mb-16">
                {(item.type) == "image" && <Image src={item.location} alt="Oracle Egg image" width={500} height={300}/>}
                {(item.type) == "video" && <video loop autoPlay muted playsInline src={item.location}/>}
                </div>
            ))}
            </div>
        </Layout>
    )
}