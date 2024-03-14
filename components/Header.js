import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
    const router = useRouter();
    const [bg, setBg] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(false);
    };
    const toggleState = () => {
        setMenuOpen(false);
        if (router.asPath == "/") {
            setBg(false)
        } else {
            setBg(true)
        }
    }
    
    // Close menu even if clicking on same page
    useEffect(() => {
        if (router.asPath == "/") {
            setBg(false);
        } else {
            setBg(true);
        }
        router.events.on('routeChangeStart', toggleState);
        return () => {
            router.events.off('routeChangeStart', toggleState); 
        };
    }, [toggleState, router.events]);

    return (
        <>
        <div className={"w-full h-[12vh] fixed flex justify-start items-center text-white z-[60] px-4 md:px-8" + (bg ? " bg-[#131313]" : "")}>
            <div className="basis-1/3 flex gap-4 z-40 lowercase italic font-thin text-sm">
                <a href="https://vimeo.com/user137775228" target="_blank">Vimeo</a>
                <a href="https://www.instagram.com/" target="_blank">Ig</a>
            </div>
            <Link className="basis-1/3 flex justify-center z-40 relative" href="/" replace>
                <Image src="/logofinal.png" alt="Empara logo" width={140} height={25}/>
            </Link>
            {menuOpen ? (
                <div className="basis-1/3 flex justify-end">
                <motion.button 
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                }}
                className="flex z-[200] items-center"
                onClick={toggleMenu}
                aria-label="Close"
                >
                    X
                </motion.button>
                </div>
            ) : (
                <div className="basis-1/3 flex flex-col items-end justify-center h-[12vh] z-[100] group">
                <button onClick={() => setMenuOpen(!menuOpen)} className="flex" aria-label="Open">
                    <div className="group flex flex-col justify-between h-[15px] w-[35px] items-end">
                    <span className="h-[1px] w-full bg-[#faeddd]" />
                    <span className="h-[1px] w-[60%] group-hover:w-full duration-700 bg-[#faeddd]" />
                    <span className="h-[1px] w-[80%] group-hover:w-full duration-700 bg-[#faeddd]" />
                    </div>
                </button>
                </div>
            )}
            {/* {!menuOpen &&
                <div className="basis-1/3 flex flex-col items-end justify-center h-[12vh] pr-4 md:pr-8 z-[100] group">
                <button onClick={() => setMenuOpen(!menuOpen)} className="flex" aria-label="Open">
                    <div className="group flex flex-col justify-between h-[15px] w-[35px] items-end">
                    <span className="h-[1px] w-full bg-[#faeddd]" />
                    <span className="h-[1px] w-[60%] group-hover:w-full duration-700 bg-[#faeddd]" />
                    <span className="h-[1px] w-[80%] group-hover:w-full duration-700 bg-[#faeddd]" />
                    </div>
                </button>
                </div>
            } */}
        </div>
        <Menu open={menuOpen} toggle={toggleMenu} />
        </>
    )
}