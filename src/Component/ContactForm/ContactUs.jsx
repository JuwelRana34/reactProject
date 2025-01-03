import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Player } from "@lottiefiles/react-lottie-player";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Socialicon from "../Socialicon/SocilaLink";

function ContactUs() {
  const [sendText, setsendText] = useState("Send");

  const form = useRef();

  function btntext() {
    setTimeout(() => {
      setsendText("Send");
    }, 5000);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setsendText("sending...");

    emailjs
      .sendForm("service_9ygswwv", "template_ayr4gdd", form.current, {
        publicKey: "user_LN4DoRR1JLQvmCTNWw6ri",
      })
      .then(
        () => {
          form.current.reset();
          // setusep(true)

          toast.success("Your message has been sent successfully!", {
            position: "top-center",
          });
          setsendText("Sent");
          btntext();
        },
        () => {
          // console.log('FAILED...', error.text);
          toast.error("Oops! something is wrong, try again.", {
            position: "top-center",
          });
        }
      );
  };

  return (
    <div className=" md:h-screen mb-5 md:flex">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col  mx-auto  md:w-3/6"
      >
        <h1 className="text-center text-3xl font-bold my-5 text-green-500">Contact Me</h1>
        <label className=" label">Name:</label>
        <input
          className=" bshadow inputfild "
          placeholder="Type your name..."
          type="text"
          name="user_name"
          required
        />

        <label className="label">Email:</label>
        <input
          className=" bshadow inputfild"
          type="email"
          placeholder="Type your email..."
          name="user_email"
          required
        />

        <label className="label">Message:</label>
        <textarea
          className=" bshadow inputfild resize-none"
          placeholder="Type your message..."
          name="message"
          required
        />

        <input
          className=" shadow-lg shadow-blue-200 w-5/6 mx-auto p-3  bg-blue-500 hover:bg-blue-600 text-white my-6 rounded-md "
          type="submit"
          value={sendText}
        />

        {/* <div className=" flex w-5/6 justify-center mx-auto items-center">
          <hr className=" w-full mx-auto" />
          <p className="px-4 font-semibold text-gray-400">OR</p>
          <hr className=" w-full mx-auto" />
        </div> */}

        {/* <Socialicon /> */}
        <ToastContainer />
      </form>

      <div className=" hidden md:block mx-auto flex flex-col justify-start ">
        <Player
          src="https://lottie.host/0cf58c2f-ba81-42ea-b291-33259fe5b6ea/e2QxPlDn6F.json"
          className=" h-72 w-72 md:h-96 md:w-96"
          loop
          autoplay
        />
      </div>
    </div>
  );
}

export default ContactUs;
