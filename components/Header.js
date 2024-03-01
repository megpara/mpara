import Link from "next/link";

export default function Header() {
    return (
        <div className="w-2/3 h-[12vh] fixed flex justify-start items-center text-white z-40">
            <div className="basis-1/2 flex gap-4 pl-4 md:pl-8 z-40 lowercase italic font-thin text-sm">
                <a href="https://vimeo.com/user137775228" target="_blank">Vimeo</a>
                <a href="https://www.instagram.com/" target="_blank">Ig</a>
            </div>
            <Link className="basis-1/2 flex justify-center z-40" href="/" replace>
                <img src="elogo.png" className="max-w-[200px]"/>
            </Link>
        </div>
    )
}