// import React from 'react'
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
function Innernav() {
  return (
    <>
    <div className="  md:hidden relative">
        <div data-aos="fade-left"  className=" absolute shadow-md top-0 right-0 w-3/6 h-auto text-center bg-blue-200 rounded-md text-lg font-semibold  ">
        <Link className=" flex px-4 py-2 justify-center rounded-md  items-center hover:bg-blue-500 hover:text-white"  to="/" >Home</Link>
        <Link className=" flex px-4 py-2 justify-center rounded-md  items-center hover:bg-blue-500 hover:text-white" to="/About" >About</Link>
        <Link className=" flex px-4 py-2 justify-center rounded-md  items-center hover:bg-blue-500 hover:text-white" to="/Contact" >Contact</Link>
        <Link className=" flex px-4 py-2 justify-center rounded-md  items-center hover:bg-blue-500 hover:text-white" to="/Project">Project</Link>
        </div>

    </div>
    {
      AOS.init({
        offset: 300,
        duration: 600
      })
    }
    </>
  )
}

export default Innernav