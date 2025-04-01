import Head from "next/head";
import { useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

export default function Layout({ children }) {
    var faviconIndex = 0;
    const router = useRouter();
    
    useEffect(() => {
        if (typeof document !== "undefined") {
        var interval = setInterval(() => {
            console.log(document.getElementById('icon').href);
            faviconIndex++;
            faviconIndex %= 6;
            document.getElementById('icon').href = "/favicons/" + faviconIndex + ".png";
            }, 3000);
        }
        if (router.asPath != "/") {
            gsap.from(".child", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
        }
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="w-full h-full relative">
            <Head>
                <link id="icon" rel="icon" href="../../favicons/0.png" />
                <link rel="preload" href="https://www.paypal.com/sdk/js?client-id=AXgz5VqpoO23JzH90mNz2vBKiDRIRB7OREs-LmEYALGylPsTU9Q2d-jIKSWdBF5G9mxdB3iOVX4JjDFI&components=buttons,hosted-buttons" as="script"></link>
            </Head>
            <div className="child">
            {children}
            </div>
        </div>
    )
}