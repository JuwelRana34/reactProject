import { FaDownload } from "react-icons/fa6";
import { Player } from '@lottiefiles/react-lottie-player';
import FileDownload from "./FileDownload";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hader() {

 
  return (
    <div className=" h-screen">
<div className=" md:flex">


<div className="headerleft">
    
    <h1 data-aos="zoom-in" className=" font-poetsen text-4xl text-green-700"> Juwel Rana </h1>
    <h3 data-aos="zoom-in"  className="text-xl my-4 font-pacifico">  code with me.</h3>
    
    <div className="btn flex justify-evenly ">

       <Link   to="/Contact"><button  className="contactbtn"> Contact</button> </Link>
     
       <button  className="downloadbtn" >
         <FileDownload fileName="Download_Cv" fileUrl="/public/Juwel Rana's CV.pdf"/>
         <FaDownload className=" ml-2 text-xl" /> 
       </button>

    </div>
    
   
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