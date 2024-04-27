// import React from 'react'
import { Link } from "react-router-dom"
function Innernav() {
  return (
    <>
    <div className=" hidden md:hidden relative">
        <div className=" absolute shadow-md top-0 right-0 w-3/6 h-auto text-center bg-blue-200 rounded-md text-lg font-semibold  ">
        <Link className=" flex px-4 py-2 justify-center rounded-md  items-center hover:bg-blue-500 hover:text-white"  to="/" >Home</Link>
        <Link className=" flex px-4 py-2 justify-center rounded-md  items-center hover:bg-blue-500 hover:text-white" to="/About" >About</Link>
        <Link className=" flex px-4 py-2 justify-center rounded-md  items-center hover:bg-blue-500 hover:text-white" to="/Contact" >Contact</Link>
        <Link className=" flex px-4 py-2 justify-center rounded-md  items-center hover:bg-blue-500 hover:text-white" to="/Project">Project</Link>
        </div>

    </div>
    </>
  )
}

export default Innernav