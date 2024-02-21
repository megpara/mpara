import { useState } from "react";
import Menu from "./Menu";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <div className="w-full h-[6vw] fixed flex justify-between items-center text-white font-thin text-sm uppercase z-10">
            <div className="basis-1/3 flex gap-4 pl-4">
                <div className="group relative cursor-pointer">
                    Work
                    <div className="absolute invisible group-hover:visible bg-white text-black p-4">
                        <div>Performance</div>
                        <div>Commercial</div>
                    </div>
                </div>
                <div>Origin</div>
                <div>Ethos</div>
                <div>Teaching</div>
            </div>
            <div className="basis-1/3 flex justify-center">
                <img src="logoWhite.png" className="max-w-[150px]"/>
            </div>
            <div className="basis-1/3 flex flex-col items-end pr-4">
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex">
                  <div className="group flex flex-col justify-between h-[20px] w-[35px] items-end">
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