import { AnimatePresence, motion } from "framer-motion";
import MenuItem from "./MenuItem";
import MenuSubtitle from "./MenuSubtitle";
import MenuTitle from "./MenuTitle";

export default function Menu({ open, toggle }) {
    return (
        <AnimatePresence>
        {open && (
          <motion.div
            initial={{ width: "0%", opacity: 0 }}
            animate={{
              width: "100%",
              opacity: 1,
              transition: { duration: 1 },
            }}
            exit={{
              width: "0%",
              opacity: 0,
              transition: { duration: 1 },
            }}
            className="fixed top-0 right-0 z-20 h-screen bg-[#131313] py-8 px-4"
            id="menu-container"
          >
            <motion.button 
            whileHover={{
                rotate: 90,
                transition: { duration: 1 },
            }}
            className="absolute top-8 right-4"
            onClick={toggle}
            >
                X
            </motion.button>
            <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-wrap justify-center w-3/4 gap-8">
                <MenuItem>
                    <MenuSubtitle>Work<br />samples</MenuSubtitle>
                    <MenuTitle>Work</MenuTitle>
                </MenuItem>
                <MenuItem>
                    <MenuSubtitle>About<br />Mpara</MenuSubtitle>
                    <MenuTitle>Origin</MenuTitle>
                </MenuItem>
                <MenuItem>
                    <MenuSubtitle>Mission<br />statement</MenuSubtitle>
                    <MenuTitle>Ethos</MenuTitle>
                </MenuItem>
                <MenuItem>
                    <MenuSubtitle>Take<br />class</MenuSubtitle>
                    <MenuTitle>Teaching</MenuTitle>
                </MenuItem>
                <MenuItem>
                    <MenuSubtitle>Upcoming<br />shows</MenuSubtitle>
                    <MenuTitle>Events</MenuTitle>
                </MenuItem>
                <MenuItem>
                    <MenuSubtitle>Mpara<br />gear</MenuSubtitle>
                    <MenuTitle>Merch</MenuTitle>
                </MenuItem>
            </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
    )
}