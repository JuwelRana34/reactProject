import { SiFacebook } from "react-icons/si";
import { LuInstagram } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

function SocilaLink() {
  return (
    <div className="flex text-4xl justify-center w-full gap-4 mt-4 ">

        <a href="https://www.facebook.com/juwel34/">
             <SiFacebook className=" text-blue-500 hover:bg-blue-500 icon hover:text-white  shadow-blue-300 " />
        </a>

        <a href=" https://instagram.com/juwelrana906?igshid=OGQ5ZDc2ODk2ZA==">
             <LuInstagram className=" icon text-white bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:bg-blue-500 icon hover:text-white  shadow-[#6228d782] " />
        </a>
        <a href="#">
             <BsWhatsapp className="icon  text-green-500 hover:bg-green-500 icon hover:text-white  shadow-green-300   " />
        </a>
        <a href="https://www.linkedin.com/in/juwel-rana-14b563204/">
             <FaLinkedin className="icon  text-blue-700 hover:bg-blue-500 icon hover:text-white  shadow-blue-300 " />
        </a>
       
      
    </div>
  )
}

export default SocilaLink