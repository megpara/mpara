import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="w-full h-full relative">
            <video loop autoPlay muted playsInline className="absolute w-screen h-screen top-0 left-0 object-cover" src="wdtease.mov" />
            </div>
            <div className="w-full h-full flex items-center justify-center">
            <div className="absolute bottom-0 h-[8vh] block md:flex justify-between items-center text-[#bab5b1] border-t-[1px] border-[#F0EBE5] border-opacity-20 footer lowercase italic tracking-widest text-sm">
                <div className="invisible md:visible">To take possession of the human form</div>
                <div className="text-center md:text-right">A movement, and choreography company</div>
            </div>
            </div>
        </Layout>
    )
}