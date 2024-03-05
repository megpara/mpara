import Layout from "../components/Layout";

export default function Ethos() {
    return(
        <Layout>
            <div className="relative w-full h-full flex flex-col">
                <div className="basis-1/3 text-white flex justify-between pt-[24vh] px-4 md:px-8">
                    <div className="basis-1/2 font-display text-4xl tracking-widest">Ethos</div>
                    <div className="basis-1/2 italic text-[#bab5b1] text-sm">
                    Empara is a movement and choreography company focused on creating nontraditional and accessible contemporary dance experiences. Empara celebrates other art forms and encourages all bodies to connect to their innate desire to move.
                    <br />
                    <br />
                    The work brings together audiences that may not otherwise experience contemporary dance by hosting performances in unusual settings. Empara works with visceral, dynamic, and theatrical movement that celebrates the unique styles and qualities of each dancer. The company is driven by collaboration - between the dancers, other mediums, and spaces. 
                    <br />
                    <br />
                    If you are an artist or space looking to create an unconventional product or experience, please <a href="mailto:megan@emparadance.com" className="underline underline-offset-4">reach out</a> as we'd love to hear from you.
                    </div>
                </div>
                <div className="basis-2/3 relative pb-[12vh]">
                </div>
            </div>
        </Layout>
    )
}