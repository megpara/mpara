import Link from "next/link";

export default function WellDoneFilm() {
    return (
        <div className="w-full h-full flex items-center justify-center text-white">
            <div className="w-full h-full pb-12 flex flex-col items-center justify-center">
                <div className="w-full h-full relative">
                    <iframe src="https://player.vimeo.com/video/911319946?h=71f1037d61&autoplay=1&title=0&byline=0&portrait=0" className="absolute top-0 left-0 w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
                <p className="text-xs lowercase italic pt-8">Concept, Choreography, and Direction: Megan Paradowski<br />
                DP: Colin Lupe<br />
                Performers: Marco Palomino, Daphne Fernberger, Travis Lim<br />
                Space: Reunion LA<br />
                Producer: Halston Bruce<br />
                Music: 3. Sequentia: Lacrimosa by Jacky Terrasson<br />
                <Link href="/work/welldone" className="uppercase underline">Live performance, Los Angeles 2024</Link></p>
            </div>
        </div>
    )
}