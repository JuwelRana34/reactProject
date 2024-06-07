import  Image  from "../assets/404.jpg"
import { Link } from "react-router-dom"

// import Image from 'next/image'
import { Button, Empty } from 'keep-react'

function Nopage() {
  return (
    <>
    {/* <div className=" w-full h-auto mx-auto  justify-center items-center">
       <img src={Image} alt="" className=" w-[95%] h-auto justify-center items-center"  />
       <button className=" p-4 m-1 justify-center items-center mx-auto bg-blue-500 text-center text-white text-lg font-serif rounded-md ">
       <Link to='/' >  Back</Link>
        
       </button>

    </div> */}



    <Empty>
      <Empty.Image>
        <img src={Image}  alt="404"  />
      </Empty.Image>
      <Empty.Title>404 Not Found</Empty.Title>
      <Empty.Description>
         this is not a right path.try again sometime later. thank you.
      </Empty.Description>
      <Link to="/"><Button variant="outline">Go to home</Button></Link>
      
    </Empty>
   
    </>
  )
}

export default Nopage 