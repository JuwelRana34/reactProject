import { SiFacebook } from "react-icons/si";
import { LuInstagram } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function SocilaLink() {
  return (
    <div  className="flex text-4xl justify-center w-full gap-3 mt-4 ">

        <a className="hover:scale-125 hover:transition-all "  href="https://www.facebook.com/juwel34/">
             <SiFacebook className="   text-blue-500 hover:bg-blue-500 icon hover:text-white  shadow-blue-300 " />
        </a>

        <a className="hover:scale-125 hover:transition-all " href=" https://instagram.com/juwelrana906?igshid=OGQ5ZDc2ODk2ZA==">
             <LuInstagram className=" icon text-white bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:bg-blue-500 icon hover:text-white  shadow-[#6228d782] " />
        </a>
        <a className="hover:scale-125 hover:transition-all " href="https://wa.me/+8801761632836">
             <BsWhatsapp className="icon  text-green-500 hover:bg-green-500 icon hover:text-white  shadow-green-300   " />
        </a>
        <a className="hover:scale-125 hover:transition-all " href="https://www.linkedin.com/in/juwel-rana-14b563204/">
             <FaLinkedin className="icon  text-blue-700 hover:bg-blue-500 icon hover:text-white  shadow-blue-300 " />
        </a>
        <a className="hover:scale-125 hover:transition-all " href="https://github.com/JuwelRana34">
             <FaGithub className="icon  text-black hover:bg-black icon hover:text-white  shadow-gray-400 " />
        </a>
       
        
    </div>
    
  )
}

export default SocilaLink