import Layout from "../components/Layout";

export default function Origin() {
    return (
        <Layout>
                <div className="relative z-[-1]">
                    <div className="text-white flex justify-between pt-[24vh] px-4 md:px-8">
                        <div className="basis-1/2 font-display uppercase text-4xl font-normal tracking-widest">Origin</div>
                        <div className="basis-1/2 text-[#bab5b1] text-sm">
                            Empara originates from the Latin word &quot;emparer,&quot; meaning to take posession of something
                            <br />
                            <br />
                            Empara takes possesion of the human form, the skin and what it holds, emotions, lineage, and the oneness that connects all beings
                        </div>
                    </div>
                    <div className="text-white flex justify-between pt-[24vh] pb-[12vh] px-4 md:px-8">
                        <img src="/headshot.png" className="basis-1/2 max-w-[400px] object-cover pb-8"/>
                        <div className="basis-1/2 text-[#bab5b1] text-sm text-justify">
                            Megan Paradowski has choreographed and performed in contemporary dance works across the US and Europe in venues such as 2220 Arts + Archives, the Museum of Neon Art, the Institute for Art and Olfaction, NAVEL LA, and Hosek Contemporary Berlin. Her work has been reviewed by the LA Times, Autre Magazine, LA Dance Chronicle, and Fjord Review, amongst others. She is honored to have received grants from the German Consulate General in Los Angeles and the US Embassy in Cyprus. She has had the incredible opportunity to tour and perform her work over the past five years in places such as Berlin, London, and Cyprus.
                            <br />
                            <br />
                            Megan also works to bring avant-garde movement to the entertainment industry, where she has worked on commercial photo and video shoots including CloZee, Madilyn Bailey, Loren Stewart, and Undesigned LA. Megan is interested in collaborating with other artists and celebrating other forms, as well as transcendence through live performance. She holds a BFA in Dance from Tisch School of the Arts at NYU, and she has taught as a professor of dance at the University of Redlands, as well as at schools across Los Angeles such as South Pasadena High School and Genesis Studios.
                        </div>
                    </div>
                </div>
        </Layout>
    )
}