// import Nav from "../Component/Navbar/Nav"

import Juwel from "../Component/Navbar/Juwel"
import { NavbarComponent } from "../Component/NavbarComponent"



function Home() {
  return (
    <>
   <NavbarComponent className=" mb-10"/>
   <Juwel/>
<a href='../assets/react.svg' className=" absolute bg-indigo-600 text-white p-2 rounded-md m-10 mt-5" download>Click to download</a>                                                      
                                                                         
   
    </>
  )
}

export default Home