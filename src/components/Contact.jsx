import { CONTACT } from "../constants"
import { motion } from 'framer-motion'
import ContactForm from "./contactForm"


const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:h-screen ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 mb-0 text-center text-4xl pt-8">Get in Touch</motion.h1>
      <ContactForm />
    </div>
  )
}

export default Contact
