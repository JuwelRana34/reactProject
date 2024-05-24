
import ContactUs from "../Component/ContactForm/ContactUs"
import Footer from "../Component/Footer/Footer"
import Navbar from "../Component/Navbar/Navbar"

function Contact() {
  return (
    <div>
    <Navbar/> 
    <h1 className=" bg-green-400 text-white w-3/6 md:w-2/12 mx-auto items-center py-2 rounded-md text-xl shadow-xl shadow-green-200 text-center mt-10">Contact Me </h1>
   <ContactUs/>

    <Footer />
    </div>
  )
}

export default Contact