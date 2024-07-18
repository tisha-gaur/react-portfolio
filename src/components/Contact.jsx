import { CONTACT } from "../constants"
import {motion} from 'framer-motion'
import ContactForm from "./contactForm"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>
        {/* <motion.div 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="text-center tracking-tighter">
            <p onClick={ () => window.open("https://outlook.live.com/mail/0/deeplink/compose?mailtouri=mailto%3Atisha98gaur%40gmail.com")}className="mouse cursor-pointer my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            
        </motion.div> */}
        <ContactForm/>
    </div>
  )
}

export default Contact
