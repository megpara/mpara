import Layout from "../components/Layout";

export default function Merch() {
    return (
        <Layout>
            <div className="relative w-full h-full flex flex-col">
                <div className="basis-1/3 text-white flex justify-between pt-[24vh] px-4 md:px-8">
                    <div className="basis-1/2 font-display text-4xl tracking-widest">Merch</div>
                    <div className="basis-1/2 italic text-[#bab5b1] text-sm">
                    Empara screen prints recycled clothing items by hand. Please <a href="mailto:megan@emparadance.com" className="underline underline-offset-4">let us know</a> if there are products you're interested in seeing. 
                    <br />
                    <br />
                    Coming soon.
                    </div>
                </div>
                <div className="basis-2/3 relative">

                </div>
            </div>
        </Layout>
    )
}