import Link from "next/link"

export default function Footer() {
    return (
        <div className="absolute bottom-0 h-[8vh] flex justify-between items-center text-[8px] md:text-xs lowercase italic text-[#bab5b1] border-t-[1px] border-[#F0EBE5] border-opacity-20 footer">
            <Link href="/mail">Mailing list</Link>
            <div><a href="mailto:megan@emparadance.com">megan@emparadance.com</a></div>
            <div>&copy; 2024 all rights reserved</div>
        </div>
    )
}