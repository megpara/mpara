import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Menu from "./Menu";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(false);
    };
    
    // Close menu even if clicking on same page
    const { events } = useRouter();
    useEffect(() => {
        events.on('routeChangeStart', toggleMenu);
        return () => {
            events.off('routeChangeStart', toggleMenu); 
        };
    }, [toggleMenu, events]);

    return (
        <div className="w-full h-[12vh] fixed flex justify-start items-center text-white z-40">
            <div className="basis-1/3 flex gap-4 pl-4 md:pl-8 z-40 lowercase italic font-thin text-sm">
                <a href="https://vimeo.com/user137775228" target="_blank">Vimeo</a>
                <a href="https://www.instagram.com/" target="_blank">Ig</a>
            </div>
            {/* {!menuOpen && */}
                <Link className="basis-1/3 flex justify-center z-40 relative" href="/" replace>
                    <img src="logofinal.png" className="max-w-[150px]"/>
                </Link>
            {/* } */}
            {!menuOpen &&
                <div className="basis-1/3 flex flex-col items-end justify-center h-[12vh] pr-4 md:pr-8 z-[100] group">
                <button onClick={() => setMenuOpen(!menuOpen)} className="flex">
                    <div className="group flex flex-col justify-between h-[15px] w-[35px] items-end">
                    <span className="h-[1px] w-full bg-[#faeddd]" />
                    <span className="h-[1px] w-[60%] group-hover:w-full duration-700 bg-[#faeddd]" />
                    <span className="h-[1px] w-[80%] group-hover:w-full duration-700 bg-[#faeddd]" />
                    </div>
                </button>
                </div>
            }
            <Menu open={menuOpen} toggle={toggleMenu} />
        </div>
    )
}