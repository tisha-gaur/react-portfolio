import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div className="boeder-b border-neutral-900 pb-4">
      <h1 className="mt-20 mb-14 text-center text-4xl">About <span className="text-neutral-500">Me</span></h1>
      <div className="flex justify-center items-center flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="h-60 md:h-96" src={aboutImg} alt="about" />
            </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6 ">{ABOUT_TEXT}</p>
                </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
