import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="w-screen h-screen relative">
            <video loop autoPlay muted playsInline className="absolute w-screen h-screen top-0 left-0 object-cover" src="wdtease.mov" poster="/thumbnail.jpg" />
            <div className="absolute bottom-0 w-full h-[12vh] text-white flex flex-col items-center justify-center">
                <div className="font-display uppercase text-center text-xs">Take possession of the human form</div>
            </div>
            </div>
        </Layout>
    )
}