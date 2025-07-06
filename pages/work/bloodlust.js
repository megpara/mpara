import Layout from "../../components/Layout";
import Image from "next/image";

const credits = [
    {
        title: "Choreographer",
        name: "Megan Paradowski"
    },
    {
        title: "Musicians",
        name: "V.C.R and Grandfather"
    },
    {
        title: "Cast",
        name: "Jacquelyn Tepper, Maddie Lacambra"
    },
    {
        title: "Costumes",
        name: "Gabrielle Klaus"
    },
    {
        title: "Location of Debut",
        name: "Bloodlust Wine Bar, Ensenada MX"
    },
    {
        title: "Duration of Debut",
        name: "90 minutes"
    },
    {
        title: "Additional Performance Location",
        name: "The Aster Los Angeles"
    },
    {
        title: "Additional Performance Duration",
        name: "7 minutes"
    },
    {
        title: "Curator",
        name: "Nora Shields"
    },
    {
        title: "Collaborator",
        name: "Avery Wheless"
    }
]

const media = [
    {
        location: "/work/bloodlust/trailer.mov",
        type: "video"
    },
    {
        location: "/work/bloodlust/1.jpg",
        type: "image"
    },
    {
        location: "/work/bloodlust/3.jpg",
        type: "image"
    },
    {
        location: "/work/bloodlust/4.jpg",
        type: "image"
    },
]

export default function Bloodlust() {
    return (
        <Layout>
            <div className="text-white block md:flex justify-between pt-[24vh] px-4 md:px-8  md:gap-8">
                    <div className="basis-1/3 md:basis-1/2 pb-4 pr-12 md:pb-0 tracking-widest">
                        <div className="font-display text-4xl">Gotas de Amor</div>
                        <div className="text-[#bab5b1] text-sm italic pt-8">Immersive, durational performance Gotas de Amor explores bodies as liquid, dripping in and out of one another and immersing themselves in the architecture of the space. This work brings the physical and metaphorical representations of liquid to life — water, wine, love, sacrifice, fantasy, illusion. Originally performed at Bloodlust Wine Bar in Ensenada, Mexico, the piece was also performed at The Aster Los Angeles in collaboration with featured artist Avery Wheless.</div>
                    </div>
                    <div className="basis-2/3 md:basis-1/2 text-[#bab5b1] text-sm italic flex flex-col divide-y-[1px] divide-[#bab5b1]">
                    {credits.map((credit, index) => (
                        <div className={"flex justify-between items-center pb-2" + (index !== 0 ? " pt-2" : "")}>
                            <div className="basis-1/2">
                                {credit.title}
                            </div>
                            <div className="basis-2/6">
                                {credit.name}
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="text-white w-full columns-1 md:columns-3 gap-2 md:gap-4 py-8 px-4 md:px-8 pb-[15vh] relative">
                    {media.map((item, index) => (
                        <div className="w-full flex flex-col items-center justify-center mb-2">
                            {(item.type) == "image" && <Image src={item.location} alt="Image of Gotas de Amor" width={500} height={300}/>}
                            {(item.type) == "video" && <video loop autoPlay muted playsInline src={item.location} width={500}/>}
                        </div>
                    ))}
                </div>
        </Layout>
    )
}