import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full h-[12vh] fixed flex justify-between items-center text-white z-40">
            <div className="basis-1/3 flex gap-4 pl-4 md:pl-8 z-40 lowercase italic font-thin text-sm">
                <div>Vimeo</div>
                <div>Ig</div>
            </div>
            <Link className="basis-1/3 flex justify-center z-40" href="/" replace>
                <img src="logoWhite.png" className="max-w-[150px]"/>
            </Link>
            <div className="basis-1/3" />
        </div>
    )
}