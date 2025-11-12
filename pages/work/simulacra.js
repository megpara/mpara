import Layout from "../../components/Layout";
import Image from "next/image";

const credits = [
    {
        title: "Residency",
        name: "LAUNCH:LA 2025 at L.A. Dance Project"
    },
    {
        title: "Duration",
        name: "25 minutes"
    },
    {
        title: "Choreographer",
        name: "Megan Paradowski"
    },
    {
        title: "Sculptor",
        name: "Heidi Ross"
    },
    {
        title: "Original Score, created with field recordings of the ice sculpture",
        name: "Ian Wellman"
    },
    {
        title: "Cast",
        name: "Jessy Crist, Maddie Lacambra, Travis Lim, Nadia Maryam, Jonah Tran, Marco Vega"
    },
    {
        title: "Costume Design",
        name: "Gabrielle Kraus"
    },
    {
        title: "Lighting Design",
        name: "Caleb Wildman"
    },
    {
        title: "Fabricator",
        name: "Ryan Ross"
    },
    {
        title: "Stage Manager",
        name: "Zaira Paredes-Villegas"
    },
    {
        title: "L.A. Dance Project Residency Team",
        name: "Rachelle Rafailedes Mucha, Alisa Wyman, Chris Tynan"
    },
    {
        title: "Cinematography",
        name: "Colin Lupe"
    },
    {
        title: "Photography",
        name: "Skye Schmidt Varga and Guillermo De La Barreda"
    }
]

const images = [
    "/work/simulacra/simulacra1.jpg",
    "/work/simulacra/simulacra9.jpg",
    "/work/simulacra/simulacra4.jpg",
    "/work/simulacra/simulacra2.jpg",
    "/work/simulacra/simulacra3.jpg",
    "/work/simulacra/simulacra7.jpg",
    "/work/simulacra/simulacra5.jpg",
    "/work/simulacra/simulacra6.jpg",
    "/work/simulacra/simulacra11.jpg",
    "/work/simulacra/simulacra10.jpg",
]

export default function Simulacra() {
    return (
        <Layout>
            <div className="text-white block md:flex justify-between pt-[24vh] px-4 md:px-8  md:gap-8">
                    <div className="basis-1/3 md:basis-1/2 pb-4 pr-12 md:pb-0 tracking-widest">
                        <div className="font-display text-4xl">Simulacra</div>
                        <div className="text-[#bab5b1] text-sm italic pt-8">Created in residency at L.A. Dance Project for LAUNCH:LA 2025, Simulacra features a 50-pound ice sculpture made of beet juice that drips and stains the white-carpeted stage over the course of the performance.</div>
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
                    <div className="w-full pt-[70%] relative">
                        <iframe src="https://player.vimeo.com/video/1136285626?h=c0d60c6261&autoplay=1&title=0&byline=0&portrait=0" className="w-full absolute h-full top-0 left-0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
                    </div>
                    </div>
                </div>
                <div className="text-white w-full columns-1 md:columns-3 gap-2 md:gap-4 py-8 px-4 md:px-8 pb-[15vh] relative">
                    {images.map((photo, index) => (
                        <div className="w-full flex flex-col items-center justify-center">
                        <Image src={photo} alt="Photo of Simulacra" width={500} height={300} className="pb-2 md:pb-4" />
                        </div>
                    ))}
                </div>
        </Layout>
    )
}
