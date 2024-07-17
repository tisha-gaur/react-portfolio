import logo from "../assets/tg.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-0 flex items-center justify-between pt-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 h-15 w-20" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="hover:text-blue-500" onClick={() => window.open("https://www.linkedin.com/in/tisha-gaur-04810b22b", "_blank")}/>
        <FaGithub className=" hover:text-blue-500" onClick={()=>{return window.open("https://github.com/tisha-gaur","_blank")}}/>
    </div>
  </nav>
}

export default Navbar
