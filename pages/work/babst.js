import Layout from "../../components/Layout";

const credits = [
    {
        title: "Duration",
        name: "10 minutes"
    },
    {
        title: "Choreographer and performer",
        name: "Megan Paradowski"
    },
    {
        title: "Flautist",
        name: "Daniela Mars"
    },
    {
        title: "Artist",
        name: "Vanessa Conte"
    },
    {
        title: "Curator",
        name: "Helen Babst"
    },
    {
        title: "Cinematography",
        name: "Colin Lupe"
    }
]

export default function Babst() {
    return (
        <Layout>
            <div className="text-white block md:flex justify-between pt-[24vh] px-4 md:px-8  md:gap-8">
                    <div className="basis-1/3 md:basis-1/2 pb-4 pr-12 md:pb-0 tracking-widest">
                        <div className="font-display text-4xl">Resonant Figures</div>
                        <div className="text-[#bab5b1] text-sm italic pt-8">Created in collaboration with flautist Daniela Mars at Babst Gallery in response to Vanessa Conte's solo exhibition RIDE.</div>
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
                        <iframe src="https://player.vimeo.com/video/1136290608?h=c0d60c6261&autoplay=1&title=0&byline=0&portrait=0" className="w-full absolute h-full top-0 left-0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
                    </div>
                    </div>
                </div>
        </Layout>
    )
}
