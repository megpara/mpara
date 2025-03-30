import Layout from "../../components/Layout";
import Image from "next/image";

const credits = [
    {
        title: "Creator & Choreographer",
        name: "Megan Paradowski"
    },
    {
        title: "Producer",
        name: "Halston Bruce"
    },
    {
        title: "Chef",
        name: "Sera Domenica"
    },
    {
        title: "Cast",
        name: "Marco Palomino, Travis Lim, Daphne Fernberger, Shauna Davis"
    },
    {
        title: "Lighting",
        name: "Colin Lupe"
    },
    {
        title: "Costumes",
        name: "Rabôt Clothing"
    },
    {
        title: "Location Rep",
        name: "Eric Tucker"
    },
    {
        title: "Duration",
        name: "90 minutes"
    },
    {
        title: "Press",
        name: "LA Dance Chronicle",
        ref: "https://www.ladancechronicle.com/empara-presents-well-done-at-melody-wine-bar-for-immersive-experience/"
    }
]

const images = [
    "/work/welldone/Empara_IWR-5.jpg",
    "/work/welldone/Empara_IWR-6.jpg",
    "/work/welldone/food2.png",
    "/work/welldone/food1.JPG",
    "/work/welldone/Empara_IWR-8.jpg",
    "/work/welldone/Empara_IWR-1-small.jpg",
    "/work/welldone/Empara_IWR-7-small.jpg",
    "/work/welldone/Empara_IWR-2.jpg",
    "/work/welldone/food3.JPG",
]

export default function WellDone() {
    return (
        <Layout>
            <div className="text-white block md:flex justify-between pt-[24vh] px-4 md:px-8">
                    <div className="basis-1/3 md:basis-1/2 font-display pb-4 md:pb-0 text-4xl tracking-widest">Well Done</div>
                    <div className="basis-2/3 md:basis-1/2 text-[#bab5b1] text-sm italic flex flex-col divide-y-[1px] divide-[#bab5b1]">
                    {credits.map((credit, index) => (
                        <div className={"flex justify-between items-center pb-2" + (index !== 0 ? " pt-2" : "")}>
                            <div className="basis-1/2">
                                {credit.title}
                            </div>
                            {credit.ref ? (
                            <a className="basis-2/6 underline" href={credit.ref} target="_blank">
                                {credit.name}
                            </a>
                            ) : (
                            <div className="basis-2/6">
                                {credit.name}
                            </div>
                            )}
                        </div>
                    ))}
                    <div className="w-full pt-[70%] relative">
                        <iframe src="https://player.vimeo.com/video/1018468359?h=71f1037d61&autoplay=1&title=0&byline=0&portrait=0" className="w-full absolute h-full top-0 left-0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
                    </div>
                    </div>
                </div>
                <div className="text-white w-full columns-1 md:columns-3 gap-2 md:gap-4 p-8 pb-[15vh] relative">
                    {images.map((photo, index) => (
                        <div className="w-full flex flex-col items-center justify-center">
                        <Image src={photo} alt="Photo of Well Done" width={500} height={300} className="pb-2 md:pb-4" />
                        </div>
                    ))}
                </div>
        </Layout>
    )
}