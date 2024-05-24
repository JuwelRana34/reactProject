import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Player } from "@lottiefiles/react-lottie-player";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
// const [ usep, setusep]=useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    console.log(e.target.value)
        emailjs
          .sendForm('service_9ygswwv', 'template_ayr4gdd', form.current, {
            publicKey: 'user_LN4DoRR1JLQvmCTNWw6ri',
            
          })
          .then(
            () => {
                 form.current.reset();
                // setusep(true)
               
                toast.success('Your message has been sent successfully!',{
                  position: "top-center",
                });
                
            },
            () => {
              // console.log('FAILED...', error.text);
              toast.error("Oops! something is wrong, try again.", {
                position: "top-center",
              })
            },
            
          );
      };

  return (
    <div className=" md:h-screen mb-5 md:flex">
    
    <form ref={form} onSubmit={sendEmail} className="flex flex-col  mx-auto  md:w-3/6"  >

      <label className=" label">Name:</label>
      <input className=" inputfild " placeholder="Type your name..." type="text" name="user_name" />
      
      <label className="label">Email</label>
      <input className="inputfild" type="email" placeholder="Type your email..." name="user_email" />
      
      <label className="label">Message</label>
      <textarea className="inputfild" placeholder="Type your message..." name="message" />
      
      <input className=" w-5/6 mx-auto p-3 bg-blue-500 text-white my-2 rounded-md " type="submit" value="Send" />
     

   <ToastContainer />
    </form>

    <div className=" mx-auto flex flex-col justify-start ">

    <Player
    src="https://lottie.host/0cf58c2f-ba81-42ea-b291-33259fe5b6ea/e2QxPlDn6F.json"
    className=" h-64 w-64 md:h-96 md:w-96"
    loop 
    autoplay
   />

    </div>







    </div>
     
  
  )
}

export default ContactUs