import Layout from "../../components/Layout";
import Image from "next/image";

const credits = [
    {
        title: "Performance Title",
        name: '"Water Memory"'
    },
    {
        title: "Choreographer",
        name: "Megan Paradowski"
    },
    {
        title: "Cast",
        name: "Marirosa Crawford, Jeremy Coachman, Davon Rashawn"
    },
    {
        title: "Cinematographer",
        name: "Avery Wheless"
    },
    {
        title: "Duration",
        name: "7 minutes"
    }
]

const images = [
    "/work/bozomag/bozo.gif",
    "/work/bozomag/bozo3.gif",
    "/work/bozomag/bozo2.gif",
]

export default function BozoMag() {
    return (
        <Layout>
            <div className="text-white block md:flex justify-between pt-[24vh] px-4 md:px-8">
                    <div className="basis-1/3 md:basis-1/2 font-display pb-4 md:pb-0 text-4xl tracking-widest">CARLA X BOZOMAG</div>
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
                <div className="text-white w-full columns-1 md:columns-3 gap-2 md:gap-4 p-8 py-[15vh] relative">
                    {images.map((photo, index) => (
                        <div className="w-full flex flex-col items-center justify-center">
                        <Image src={photo} alt="Photo of She Sprang Out Red" width={500} height={300} className="pb-2 md:pb-4" />
                        </div>
                    ))}
                </div>
        </Layout>
    )
}