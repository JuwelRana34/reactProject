import { SiFacebook } from "react-icons/si";
import { LuInstagram } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

function SocilaLink() {
  return (
    <div className="flex text-4xl justify-evenly mt-4 ">

        <a href="https://www.facebook.com/juwel34/">
             <SiFacebook className=" text-blue-500 " />
        </a>

        <a href=" https://instagram.com/juwelrana906?igshid=OGQ5ZDc2ODk2ZA==">
             <LuInstagram className=" text-[#f34c6d]" />
        </a>
        <a href="#">
             <BsWhatsapp className=" text-green-500  " />
        </a>
        <a href="linkedin.com/in/juwel-rana-14b563204">
             <FaLinkedin className=" text-blue-700  " />
        </a>
       
      
    </div>
  )
}

export default SocilaLink