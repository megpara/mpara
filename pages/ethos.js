import Layout from "../components/Layout";

export default function Ethos() {
    return(
        <Layout>
            <div className="relative w-full h-full flex flex-col z-[-1]">
                <div className="basis-1/3 text-white flex justify-between pt-[24vh] px-4 md:px-8">
                    <div className="basis-1/2 font-display uppercase text-4xl tracking-widest">Ethos</div>
                    <div className="basis-1/2 italic text-[#bab5b1] text-sm">
                    mpara is a choreography and movement direction company focused on making untraditional and accessible contemporary dance experiences
                    </div>
                </div>
                <div className="basis-2/3 relative">
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <img src="logoNoMovement.png" className="w-3/4 md:w-1/2 h-auto object-cover opacity-10" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <div className="text-[#bab5b1] italic p-2">To take possesion of the human form</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}