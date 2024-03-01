import Head from "next/head";
import { useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

export default function Layout({ children }) {
    var current = 0;
    var icons = ["/favicons/m.png", "/favicons/p.png", "/favicons/a.png", "/favicons/r.png", "/favicons/a.png"];

    const router = useRouter();
    
    useEffect(() => {
        if (typeof document !== "undefined") {
        setInterval(() => {
            var icon = (++current % icons.length);
            var url = icons[icon];
            document.getElementById('icon').href = url;
            }, 1500);
        }
        if (router.asPath != "/") {
            gsap.from(".child", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
        }
    }, [])

    return (
        <div className="w-full h-full relative">
            <Head>
                <link id="icon" rel="icon" href="/favicons/m.png" />
            </Head>
            <div className="child">
            {children}
            </div>
        </div>
    )
}