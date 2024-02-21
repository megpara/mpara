export default function Header() {
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
            <div className="basis-1/3" />
        </div>
    )
}