import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Teaser({ open, toggle, src, caption }) {
    return (
        <AnimatePresence>
        {open && (
            <motion.div                 
            initial={{ opacity: 0 }}
            animate={{
            opacity: 1,
            transition: { duration: 1 },
            }}
            exit={{
            opacity: 0,
            transition: { duration: 1 },
            }}
            className="fixed top-0 left-0 pt-[15vh] z-10 bg-[#00000099] w-full h-full flex items-center justify-center cursor-pointer"
            onClick={toggle}
            >
              <div className="w-3/4 h-full flex items-center justify-center">
              <div className="w-full h-full pb-12 flex flex-col items-center justify-center">
                <div className="w-full h-full relative">
                  <iframe src={`${src}?h=71f1037d61&autoplay=1&title=0&byline=0&portrait=0`} className="absolute top-0 left-0 w-full h-full" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
                <p className="text-xs lowercase italic pt-8">Concept, Choreography, and Direction: Megan Paradowski<br />
                DP: Colin Lupe<br />
                Performers: Marco Palomino, Daphne Fernberger, Travis Lim<br />
                Space: Reunion LA<br />
                Producer: Halston Bruce<br />
                Music: 3. Sequentia: Lacrimosa by Jacky Terrasson<br />
                <Link href="/work/welldone" className="uppercase underline">Live performance</Link></p>
              </div>
              </div>
              </motion.div>
        )}
        </AnimatePresence>
    )
}