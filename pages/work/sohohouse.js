import Layout from "../../components/Layout";
import Image from "next/image";

const credits = [
    {
        title: "Choreographer",
        name: "Megan Paradowski"
    },
    {
        title: "Producer",
        name: "Halston Bruce"
    },
    {
        title: "Chefs",
        name: "Heidi Ross and Camila Casañas"
    },
    {
        title: "Cast",
        name: "Travis Lim, Marirosa Crawford, Courtney Conovan, Davon Rashawn"
    },
    {
        title: "Musicians",
        name: "Grandfather and Cafe Lounge"
    },
    {
        title: "Costumes",
        name: "Rabôt Clothing"
    },
    {
        title: "Photographer",
        name: "Oscar Mendoza"
    },
    {
        title: "Location",
        name: "Soho Warehouse"
    },
    {
        title: "Duration",
        name: "90 minutes"
    }
]

const images = [
    "/work/soho/1.JPG",
    "/work/soho/2.JPG",
    "/work/soho/3.JPG",
    "/work/soho/4.JPG",
    "/work/soho/5.JPG",
    "/work/soho/6.JPG",
    "/work/soho/7.JPG",
    "/work/soho/8.JPG",
    // "/work/soho/9.JPEG",
]

export default function SohoHouse() {
    return (
        <Layout>
            <div className="text-white block md:flex justify-between pt-[24vh] px-4 md:px-8">
                    <div className="basis-1/3 md:basis-1/2 font-display pb-4 pr-12 md:pb-0 text-4xl tracking-widest">Embodying the Equinox: A Feast for the Senses</div>
                    <div className="basis-2/3 md:basis-1/2 text-[#bab5b1] text-sm italic flex flex-col divide-y-[1px] divide-[#bab5b1]">
                    {credits.map((credit, index) => (
                        <div className={"flex justify-between items-center pb-2" + (index !== 0 ? " pt-2" : "")}>
                            <div className="basis-1/2">
                                {credit.title}
                            </div>
                            <div className="basis-2/6">
                                {credit.name}
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="text-white w-full columns-1 md:columns-3 gap-2 md:gap-4 p-8 py-[15vh] relative">
                    {images.map((photo, index) => (
                        <div className="w-full flex flex-col items-center justify-center">
                        <Image src={photo} alt="Photo of Embodying the Equinox" width={500} height={300} className="pb-2 md:pb-4" />
                        </div>
                    ))}
                </div>
        </Layout>
    )
}