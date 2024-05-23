import { FaDownload } from "react-icons/fa6";
import { Player } from '@lottiefiles/react-lottie-player';
function Hader() {
  return (
    <>
   <div className=" md:flex">


<div className=" flex-1 justify-center items-center flex flex-col mt-5 py-5 bg-gradient-to-b from-white to-green-100">
    <h1 className=" font-poetsen text-4xl text-indigo-500"> Juwel Rana </h1>
    <h3 className="text-xl my-4 font-pacifico">  code with me.</h3>
    
    <div className="btn flex justify-between">
      
    <a href="#">
       <button className="p-3 m-2 bg-indigo-500 px-3 text-white mt-2 text-lg font-semibold rounded-md"> Contact</button>
    </a>
    <a href="#" >
       <button className="p-3  m-2 bg-green-500 px-3 hover:bg-gradient-to-l transition duration-700 ease-in-out from-blue-400 to-[#b709f4] text-white mt-2 text-lg font-semibold rounded-md flex justify-center items-center"> Download CV <FaDownload className=" ml-2 text-xl" /> </button>
    </a>
    </div>
    
   
</div>


<div className="flex-1 bg-green-100  md:mt-5 md:bg-gradient-to-b from-white to-green-100 ">

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
    </>
  )
}

export default Hader