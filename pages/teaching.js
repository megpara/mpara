import Head from "next/head";
import Layout from "../components/Layout";
import { title } from "process";

const upcoming = [
    {
        title: "Empara: The Class",
        date: "Friday 4/4",
        time: "1-2:15pm",
        location: "The Space LA",
        info: "https://form.typeform.com/to/Fz5QOTl3"
    },
    {
        title: "Empara: The Class",
        date: "Friday 4/11",
        time: "1-2:15pm",
        location: "The Space LA",
        info: "https://form.typeform.com/to/Fz5QOTl3"
    },
    // {
    //     title: "All levels contemporary",
    //     date: "Wednesdays @ 10:30am",
    //     location: "Highland Park, LA",
    //     info: "https://www.hisawyer.com/twinkle-toes-dance-company/schedules/activity-set/619308"
    // },
    // {
    //     title: "OCSA master class",
    //     date: "March 2024",
    //     location: "",
    //     info: ""
    // },
    // {
    //     title: "South Pasadena High School",
    //     date: "Ongoing"
    // },
]

const past = [
    {
        title: "Grand Arts High School master class",
        date: "May 2024",
    },
    {
        title: "Los Angeles Dance Festival",
        date: "2023 & 2024"
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
        title: "University of Redlands Faculty",
        date: "2022-2023"
    },
    {
        title: "Brockus Project Studios",
        date: "2023"
    },
    {
        title: "Stomping Ground LA",
        date: "2023"
    },
    {
        title: "Studio2 Berlin",
        date: "2022"
    }
]

export default function Teaching() {
    return (
        <Layout>
            <Head>
                <title>Teaching</title>
                <meta
                name="description"
                content="Empara class | Join us for ballet and contemporary"
                />
            </Head>
            <div className="relative">
            <div className="text-white block md:flex justify-between pt-[24vh] px-4 md:px-8">
                <div className="basis-1/3 md:basis-1/2 font-display pb-4 md:pb-0 text-4xl tracking-widest">Empara: The Class</div>
                <div className="basis-1/2 italic text-[#bab5b1] text-sm">
                    Empara: The Class blends intense technical rigor with improvisational movement. Grounded in task-based exploration, strengthening and alignment, and phrase work, the class builds physical stamina while pushing the boundaries of personal expression. With influences from Wim Vandekeybus and Pina Bausch, the movement shifts between raw, animalistic physicality, pedestrian gestures, and moments of clear technique. Participants are encouraged to bring their own thoughts, emotions, and lived experiences into the work. Together, we will discover the transformative space we inhabit when we let go and surrender to the dance.
                </div>
            </div>
                <div className="text-white block md:flex justify-between pt-[12vh] px-4 md:px-8">
                    <div className="basis-1/3 md:basis-1/2 font-display pb-4 md:pb-0 text-4xl tracking-widest">Upcoming</div>
                    <div className="basis-2/3 md:basis-1/2 text-[#bab5b1] text-sm italic flex flex-col divide-y-[1px] divide-[#bab5b1]">
                    {upcoming.map((workshop, index) => (
                        <div className={"flex justify-between items-center pb-2" + (index !== 0 ? " pt-2" : "")}>
                            <div className="basis-1/2">
                                {workshop.title}
                            </div>
                            <div className="basis-2/6">
                                {workshop.date}
                                <br />
                                {workshop.time}
                                <br />
                                {workshop.location}
                            </div>
                            {workshop.info && 
                                // <button className="bg-[#6e808d] p-2">
                                    <a className="basis-1/6 text-right font-bold text-white underline" href={workshop.info} target="_blank">{workshop.info ? "Sign Up" : ""}</a>
                                // </button>
                            }
                        </div>
                    ))}
                    </div>
                </div>
                <div className="text-white block md:flex justify-between py-[12vh] px-4 md:px-8">
                    <div className="basis-1/3 md:basis-1/2 font-display pb-4 md:pb-0 text-4xl tracking-widest">Past</div>
                    <div className="basis-2/3 md:basis-1/2 text-[#bab5b1] text-sm italic flex flex-col divide-y-[1px] divide-[#bab5b1]">
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