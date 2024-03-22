import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="w-screen h-screen relative">
            <video loop autoPlay muted playsInline className="absolute w-screen h-screen top-0 left-0 object-cover" src="wdtease.mov" poster="/thumbnail.jpg" />
            <div className="absolute bottom-16 w-full h-[12vh] text-white flex items-end text-[8px] md:text-[10px] tracking-widest px-8">
                <div className="basis-1/3">
                    <div className="max-w-[75px] md:max-w-[100px] uppercase">
                    A movement company
                    </div>
                </div>
                <div className="basis-1/3 flex flex-col items-center">
                    <div className="max-w-[75px] md:max-w-[100px] font-display italic">
                        Take possession of the human form
                    </div>
                </div>
                <div className="basis-1/3" />
            </div>
            </div>
        </Layout>
    )
}