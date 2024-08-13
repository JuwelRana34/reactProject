// import { FaDownload } from "react-icons/fa6";
import { Player } from '@lottiefiles/react-lottie-player';
// import FileDownload from "./FileDownload";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocilaLink from './Socialicon/SocilaLink';
import { HiOutlineExternalLink } from "react-icons/hi";


function Hader() {

 
  return (
    <div className=" mt-5 h-auto bg-gradient-to-b from-white to-green-100">
    

    <div className=" md:flex">


<div className="headerleft">
    
    <h1 data-aos="zoom-in" className=" hederText font-poetsen text-4xl "> Juwel Rana </h1>
    <h3 data-aos="zoom-in"  className="text-xl my-4 font-pacifico">  code with me.</h3>
    
    <div className="btn w-full flex justify-center items-center gap-0 md:gap-6 ">

       <Link  className='text-center'  to="/Contact">
        <button  className="contactbtn"> Contact
        <HiOutlineExternalLink className="mx-2 text-xl" />
       </button> </Link>
     
       {/* <button  className="downloadbtn" >
         <FileDownload fileName="Download_Cv" />
         <FaDownload className=" ml-2 text-xl" /> 
       </button> */}

    </div>
    <SocilaLink/>
   
</div>


<div  className=" headerRight">

{/* <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>  */}

 <Player 
 
 src='https://lottie.host/c641be27-a4d8-4cf3-a6ed-b9cdd6456655/9um2kZS7RS.json'
 className=" h-64 w-64  md:h-96 md:w-96  "
 loop 
 autoplay
direction={-1}

 />

</div>

    </div>
   
   {
      AOS.init({
        offset: 300,
        duration: 600
      })
    }
    </div>
  )
}

export default Hader