import { HERO_CONTENT } from "../constants/index.js";
import { motion } from "framer-motion"
const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay },
    }
})

const Hero = () => {
    return <div className="pb-4 lg:mb-35" >
        <div className="flex flex-wrap ">
            <div className="w-full p-4 md:pl-20 lg:w-1/2">
                <div className="flex flex-col itema-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        // initial={{x:-100, opacity:0}} 
                        // animate={{x:0, opacity:1}} 
                        // transition={{duration:0.5, delay:2}}
                        className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        Tisha Gaur
                    </motion.h1>
                    <motion.span variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="pb-10 bg-gradient-to-r from-pink-300 via-slate-200 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                    <a href="resumelink" className="w-1/2">
                      <motion.button initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
                        type="button" className="text-black font-bold w-5/6 bg-gradient-to-r from-pink-300 via-slate-00 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Resume
                      </motion.button>
                    </a>

                    <motion.p variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 w-full py-6 font-light md:text-xl tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            {/* <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="rounded-2xl"
                        src={profilePic}
                        alt="Tisha Gaur" />
                </div>
            </div> */}
        </div>
    </div>
};

export default Hero
