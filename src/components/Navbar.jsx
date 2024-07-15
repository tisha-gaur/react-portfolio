import logo from "../assets/tg.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-0 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 h-15 w-20" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="onclick hover:text-blue-500"/>
        <FaGithub className="onclick hover:text-blue-500"/>
    </div>
  </nav>
}

export default Navbar
