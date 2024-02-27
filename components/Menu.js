import { AnimatePresence, motion } from "framer-motion";
import MenuItem from "./MenuItem";
import Footer from "./Footer";

export default function Menu({ open, toggle }) {
    return (
        <AnimatePresence>
        {open && (
        <div className="fixed top-0 right-0 w-full h-full uppercase z-40 text-white">
          <motion.div
            initial={{ width: "0%" }}
            animate={{
              width: "100%",
              transition: { duration: 0.5 },
            }}
            exit={{
              width: "0%",
              transition: { duration: 0.2 },
            }}
            className="fixed top-0 right-0 h-screen bg-[#131313] py-8 px-4"
            id="menu-container"
          >
            <motion.button 
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
            }}
            className="fixed h-[12vh] flex z-50 top-0 right-0 items-center right-4 md:right-8"
            onClick={toggle}
            >
                X
            </motion.button>
            </motion.div>

            <motion.div 
                initial={{ opacity: "0%" }}
                animate={{
                opacity: "100%",
                transition: { duration: 1 },
                }}
                exit={{
                opacity: "0%",
                transition: { duration: 0.2 },
                }}
                className="w-full h-full flex items-center justify-center"
            >
            <div className="flex flex-wrap justify-center w-full md:w-3/4 gap-8 z-20 menu">
                <MenuItem subtitleOne="Work" subtitleTwo="samples" title="Work" link="/work" />
                <MenuItem subtitleOne="About" subtitleTwo="mpara" title="Origin" link="/origin" />
                <MenuItem subtitleOne="Mission" subtitleTwo="statement" title="Ethos" link="/" />
                <MenuItem subtitleOne="Take" subtitleTwo="class" title="Teaching" link="/" />
                <MenuItem subtitleOne="Upcoming" subtitleTwo="shows" title="Events" link="/" />
                <MenuItem subtitleOne="Mpara" subtitleTwo="gear" title="Merch" link="/" />
            </div>
            <Footer />
            </motion.div>
            </div>
        )}
        </AnimatePresence>
    )
}