import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SideMenu from "../components/SideMenu";

export default function Home() {
    return (
        <Layout>
            <div className="w-full h-full relative">
            <video loop autoPlay muted playsInline className="absolute w-screen h-screen top-0 left-0 object-cover" src="wdtease.mov" />
            {/* <img src="/index/daphne.jpg" className="absolute w-screen h-screen top-0 left-0 object-cover" /> */}
            {/* <SideMenu /> */}
            </div>
            <div className="w-full h-full flex items-center justify-center">
            <Footer />
            </div>
        </Layout>
    )
}