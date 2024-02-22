import Head from "next/head";
import Header from "./Header";
import { useEffect } from "react";

export default function Layout({ children }) {
    var current = 0;
    var icons = ["/favicons/m.png", "/favicons/p.png", "/favicons/a.png", "/favicons/r.png", "/favicons/a.png"];
    
    useEffect(() => {
        if (typeof document !== "undefined") {
        setInterval(() => {
            var icon = (++current % icons.length);
            var url = icons[icon];
            document.getElementById('icon').href = url;
            }, 1500);
        }
    })
        


    return (
        <div className="w-full h-full relative">
            <Head>
                <link id="icon" rel="icon" href="/favicons/m.png" />
            </Head>
            <Header />
            {children}
        </div>
    )
}