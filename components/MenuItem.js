import Link from "next/link";

export default function MenuItem({ title, subtitleOne, subtitleTwo, link }) {
    return (
        <Link className="flex gap-4 items-center group" href={link}>
            <div className="flex gap-2 text-xl items-center text-[#bab5b1]">
            <div className="opacity-100 md:group-hover:opacity-100 md:opacity-0 duration-1000">[</div>
            <div className="italic lowercase text-center text-xs relative font-display">{subtitleOne}<br/>{subtitleTwo}</div>
            <div className="opacity-100 md:group-hover:opacity-100 md:opacity-0 duration-1000">]</div>
            </div>
            <div className="text-5xl md:text-6xl tracking-widest font-display uppercase">{title}</div>
        </Link>
    )
}