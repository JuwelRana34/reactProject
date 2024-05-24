
import ContactUs from "../Component/ContactForm/ContactUs"
import Footer from "../Component/Footer/Footer"
import Navbar from "../Component/Navbar/Navbar"

function Contact() {
  return (
    <div>
    <Navbar/> 
    <h1 className=" text-center mt-10">contact </h1>
   <ContactUs/>

    <Footer />
    </div>
  )
}

export default Contact