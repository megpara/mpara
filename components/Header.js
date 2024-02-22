import { useEffect, useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
import { useRouter } from "next/router";

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
        <div className="w-full h-[12vh] fixed flex justify-between items-center text-white z-40">
            <div className="basis-1/3 flex gap-4 pl-8 z-40 lowercase italic font-thin text-sm">
                {/* <div className="group relative cursor-pointer">
                    Work
                    <div className="absolute invisible group-hover:visible bg-white text-black p-4">
                        <div>Performance</div>
                        <div>Commercial</div>
                    </div>
                </div> */}
                <div>Vimeo</div>
                <div>Ig</div>
            </div>
            <Link className="basis-1/3 flex justify-center z-40" href="/" replace>
                <img src="logoWhite.png" className="max-w-[150px]"/>
            </Link>
            <div className="basis-1/3 flex flex-col items-end pr-8">
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex">
                  <div className="group flex flex-col justify-between h-[15px] w-[35px] items-end">
                    <span className="h-[1px] w-full bg-[#faeddd]" />
                    <span className="h-[1px] w-[60%] group-hover:w-full duration-700 bg-[#faeddd]" />
                    <span className="h-[1px] w-[80%] group-hover:w-full duration-700 bg-[#faeddd]" />
                  </div>
                </button>
            </div>
            <Menu open={menuOpen} toggle={toggleMenu} />
        </div>
    )
}