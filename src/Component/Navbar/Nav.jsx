import { Link } from "react-router-dom"
// import React from "react";
import { useState } from "react";
import  Image  from "../Image/developer.png"
import { HiBars3CenterLeft } from "react-icons/hi2";
import Innernav from "./Innernav";

function Nav() {
  const [show, setshow]=useState(false);
 
  return (
 <>
 <div className="bg-slate-100 shadow-lg shadow-cyan-100  sticky top-0 ">
 <div className=" flex  justify-between  container  mx-auto">

  <div >
    <a className="flex justify-center items-center text-2xl font-semibold text-sky-600 " href="/">
      <img src={Image} alt="" className="space-x-4 h-10 w-10 m-2 " /> 
Juwel Rana
    </a>
    
  </div>

<div className=" hidden md:block flex-col pr-10 justify-center my-auto text-lg font-semibold  items-center ">
  <Link className="  px-4 py-2 items-center hover:text-blue-600"  to="/" >Home</Link>
  <Link className="  px-4 py-2 items-center hover:text-blue-600" to="/About" >About</Link>
  <Link className="  px-4 py-2 items-center hover:text-blue-600" to="/Contact" >Contact</Link>
  <Link className="  px-4 py-2 items-center hover:text-blue-600" to="/Project">Project</Link>
</div>

<HiBars3CenterLeft onClick={()=>  setshow(!show)} className=" w-7 h-7 mx-auto mr-3 my-auto hover:text-blue-600  md:hidden" /> 
 </div>
 </div>
 {
  show?<Innernav/>:null
 }

   
 </>
  )
}

export default Nav