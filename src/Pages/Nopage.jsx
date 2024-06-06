import  Image  from "../assets/404.jpg"
import { Link } from "react-router-dom"

function Nopage() {
  return (
    <>
    <div className=" w-full h-auto mx-auto  justify-center items-center">
       <img src={Image} alt="" className=" w-[95%] h-auto justify-center items-center"  />
       <button className=" p-4 m-1 justify-center items-center mx-auto bg-blue-500 text-center text-white text-lg font-serif rounded-md ">
       <Link to='/' >  Back</Link>
        
       </button>

    </div>
   
    </>
  )
}

export default Nopage 