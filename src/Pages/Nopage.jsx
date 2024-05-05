import  Image  from "../assets/404.jpg"
import { Link } from "react-router-dom"

function Nopage() {
  return (
    <>
    <div className=" w-full h-auto mx-auto  justify-center items-center">
       <img src={Image} alt="" className=" w-[95%] h-auto justify-center items-center"  />
    <Link to='/' className=" p-4 bg-blue-600 text-white rounded-lg justify-center 
    items-center text-center mx-auto ml-5 w-auto h-auto inline-block  hover:bg-indigo-400 transition-all m-2 ">Back</Link>
    </div>
   
    </>
  )
}

export default Nopage 