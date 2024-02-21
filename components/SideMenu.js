export default function SideMenu() {
    return (
        <div>
            <div className="absolute top-0 right-0 w-1/4 h-screen bg-black opacity-30" />
            <div className="absolute top-0 right-0 w-1/4 h-screen flex flex-col gap-8 text-white uppercase p-8 text-sm z-10">
                <div className="opacity-30 hover:opacity-100">
                    <div className="font-normal">Well Done</div>
                    <div>Live performance, Coming to Los Angeles in 2024</div>
                </div>
                <div className="opacity-30 hover:opacity-100">
                    <div className="font-normal">CloZee</div>
                    <div>Movement direction by Megan Paradowski</div>
                </div>
            </div>
        </div>
    )
}