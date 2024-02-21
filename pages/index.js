import Header from "../components/Header";
import Layout from "../components/Layout";
import SideMenu from "../components/SideMenu";

export default function Home() {
    return (
        <Layout>
            <video loop autoPlay muted className="absolute w-screen h-screen top-0 left-0 object-cover" src="wdtease.mov" />
            <SideMenu />
        </Layout>
    )
}