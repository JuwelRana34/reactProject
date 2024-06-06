// import React from 'react'
// import Nav from "../Component/Navbar/Nav"
import Footer from "../Component/Footer/Footer"
import Navbar from "../Component/Navbar/Navbar"
import Image from "../assets/juwelRana.jpg"
import Socilaicon from "../Component/Socialicon/SocilaLink"
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import QustionaboutMe from "../Component/QustionaboutMe/QustionaboutMe"

function About() {
  return (
    <>
    <Navbar/>
        <div className="  bg-gradient-to-t to-transparent from-teal-100  mt-8 p-2">
          <h1 className=" font-bold  text-2xl  text-center ">About Me</h1>
            <div className=" bg-white w-full md:w-2/3 mx-auto rounded-lg p-1 mt-10 ">
               <img src={Image} alt="JuwelRana"  className=" relative -top-10 shadow-lg  text-center mx-auto  h-40 w-40 m-2 rounded-lg" />
              <h1 className=" text-center font-poetsen font-semibold text-xl text-orange-500"> Md. Juwel Rana</h1>
              <button className=" my-2 block mx-auto p-3 text-white font-semibold text-lg bg-indigo-500 rounded-full ">Web Developer</button>
               <Socilaicon />
               
               {/* detail  */}
               <div className="bg-gray-100 md:w-3/6 mx-auto rounded-md my-8 ">

               
                <div className=" flex gap-5 mt-5  items-center p-3">
                 
                 <p className=" bg-white  p-3 rounded-lg shadow-lg">
                  <a href="tel:+8809697202836"><FaPhone className="text-[#19aaf8] text-2xl"/> </a> </p>
                  <div className=" flex-col md:flex gap-2"> 
                    <h1 className=" font-semibold ">Phone:</h1>
                    <p>+8809697202836</p>                 
                  </div>
                </div> 
                

                <hr className=" mx-3" />

                <div className=" flex gap-5 mt-5  items-center p-3">
                 
                 <p className=" bg-white p-3 rounded-lg shadow-lg"><MdEmail className=" text-green-400  text-2xl" /></p>
                  <div className=" flex-col md:flex gap-2"> 
                    <h1 className=" font-semibold ">Email:</h1>
                    <p>juwelrana3426@gamil.com</p>                 
                  </div>
                </div>

                  <hr className=" mx-3" />

                <div className=" flex gap-5 mt-5  items-center p-3">
                 
                 <p className=" bg-white p-3 rounded-lg shadow-lg"><GrMapLocation className=" text-2xl text-orange-600" /></p>
                  <div className=" flex-col md:flex gap-2"> 
                    <h1 className=" font-semibold ">Location:</h1>
                    <p>Wari Dhaka, Bangladesh</p>                 
                  </div>
                </div>




               </div>
            
             {/* qustion ans  */}

              <h1 className=" text-xl font-bold  text-center text-cyan-600">Mostly Ask Qustion</h1>

              <QustionaboutMe/>
           

            </div>

        </div>
    <Footer/>
    </>
  )
}

export default About