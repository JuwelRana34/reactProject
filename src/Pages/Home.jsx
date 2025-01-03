import Hader from "../Component/Hader"
import Helmet from "react-helmet"
import ContactUs from "../Component/ContactForm/ContactUs"



function Home() {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div className=" ">
         
         <Hader/>
         <div id="contact" className="bg-slate-100">
          
         <ContactUs/>      
          </div> 
         
         
    </div>

    </>
  )
}

export default Home