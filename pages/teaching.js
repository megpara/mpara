import Layout from "../components/Layout";

const upcoming = [
    {
        title: "ocsa master class",
        date: "March 2024",
        time: "",
        location: "",
        info: ""
    },
    {
        title: "grand arts master class",
        date: "May 2024",
        time: "",
        location: "",
        info: ""
    },
    {
        title: "park city",
        date: "July 2024",
        time: "",
        location: "",
        info: ""
    },
    {
        title: "london",
        date: "August 2024",
        time: "",
        location: "",
        info: ""
    },
    {
        title: "nyc",
        date: "September 2024",
        time: "",
        location: "",
        info: ""
    }
]

const past = [
    {
        title: "South Pasadena High School",
        date: "Ongoing"
    },
    {
        title: "University of Redlands",
        date: "2022-2023"
    },
    {
        title: "Genesis Studios",
        date: "2023"
    },
    {
        title: "Base Studios London",
        date: "2023"
    },
    {
        title: "The Hub Studios London",
        date: "2023"
    },
    {
        title: "The Space LA",
        date: "2023"
    },
    {
        title: "Arts on Site NYC",
        date: "2023"
    },
    {
        title: "Los Angeles Dance Festival",
        date: "2023"
    },
]

export default function Teaching() {
    return (
        <Layout>
            <div className="relative w-full h-full flex flex-col z-[-1]">
                <div className="basis-1/3 text-white flex justify-between pt-[24vh] px-4 md:px-8">
                    <div className="basis-1/2 font-display uppercase text-4xl font-normal tracking-widest">Upcoming</div>
                    <div className="basis-1/2 italic lowercase text-[#bab5b1] text-sm flex flex-col divide-y-[1px] divide-[#bab5b1] gap-2">
                    {upcoming.map((workshop) => (
                        <div className="flex justify-between">
                            <div>{workshop.title}</div>
                            <div>{workshop.date}</div>
                            {/* <div>{workshop.location}</div>
                            <div>{workshop.info}</div> */}
                        </div>
                    ))}
                    </div>
                </div>
                <div className="basis-2/3 text-white flex justify-between pt-[24vh] px-4 md:px-8">
                    <div className="basis-1/2 font-display uppercase text-4xl font-normal tracking-widest">Past</div>
                    <div className="basis-1/2 italic lowercase text-[#bab5b1] text-sm flex flex-col divide-y-[1px] divide-[#bab5b1] gap-2">
                    {past.map((workshop) => (
                        <div className="flex justify-between">
                            <div>{workshop.title}</div>
                            <div>{workshop.date}</div>
                            {/* <div>{workshop.location}</div>
                            <div>{workshop.info}</div> */}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}