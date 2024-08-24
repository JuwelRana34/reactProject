// import Nav from "../Component/Navbar/Nav"

import Navbar from "../Component/Navbar/Navbar"
import Footer from "../Component/Footer/Footer"
import Hader from "../Component/Hader"
import Helmet from "react-helmet"



function Home() {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div className=" h-screen">
         <Navbar/>
         <Hader/>         
         <Footer/>
         
    </div>

    </>
  )
}

export default Home