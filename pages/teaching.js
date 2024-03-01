import Layout from "../components/Layout";

const upcoming = [
    {
        title: "All levels ballet",
        date: "Wednesdays @ 9:30am",
        location: "Highland Park, LA",
        info: "https://www.hisawyer.com/twinkle-toes-dance-company/schedules/activity-set/619305"
    },
    {
        title: "All levels contemporary",
        date: "Wednesdays @ 10:30am",
        location: "Highland Park, LA",
        info: "https://www.hisawyer.com/twinkle-toes-dance-company/schedules/activity-set/619308"
    },
    {
        title: "OCSA master class",
        date: "March 2024",
        location: "",
        info: ""
    },
    {
        title: "Grand Arts master class",
        date: "May 2024",
        location: "",
        info: ""
    },
    {
        title: "Park City",
        date: "July 2024",
        location: "",
        info: ""
    },
    {
        title: "London",
        date: "August 2024",
        location: "",
        info: ""
    },
    {
        title: "NYC",
        date: "September 2024",
        location: "",
        info: ""
    },
    {
        title: "South Pasadena High School",
        date: "Ongoing"
    },
]

const past = [
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
            <div className="relative">
                <div className="text-white flex justify-between pt-[24vh] px-4 md:px-8">
                    <div className="basis-1/2 font-display uppercase text-4xl font-normal tracking-widest">Upcoming</div>
                    <div className="basis-1/2 text-[#bab5b1] text-sm flex flex-col divide-y-[1px] divide-[#bab5b1]">
                    {upcoming.map((workshop, index) => (
                        <div className={"flex justify-between items-center pb-2" + (index !== 0 ? " pt-2" : "")}>
                            <div className="basis-1/2">
                                {workshop.title}
                            </div>
                            <div className="basis-2/6">
                                {workshop.date}
                                <br />
                                {workshop.location}
                            </div>
                            <a className="basis-1/6 text-right" href={workshop.info} target="_blank">{workshop.info ? "Register" : ""}</a>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="text-white flex justify-between py-[12vh] px-4 md:px-8">
                    <div className="basis-1/2 font-display uppercase text-4xl font-normal tracking-widest">Past</div>
                    <div className="basis-1/2 text-[#bab5b1] text-sm flex flex-col divide-y-[1px] divide-[#bab5b1]">
                    {past.map((workshop, index) => (
                        <div className={"flex justify-between pb-2"  + (index !== 0 ? " pt-2" : "")}>
                            <div>{workshop.title}</div>
                            <div>{workshop.date}</div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}