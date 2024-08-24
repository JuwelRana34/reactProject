import  Image  from "../assets/404.jpg"
import { Link } from "react-router-dom"
import Helmet from "react-helmet"
// import Image from 'next/image'
import { Button, Empty } from 'keep-react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Nopage() {

  useGSAP( () =>{
    gsap.to('.box', {
      scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
      y: 10
  });
  })

  return (
    <>
    <Helmet><title>something wrong</title></Helmet>
    <Empty>
      <Empty.Image>
        <img src={Image}  alt="404"  />
      </Empty.Image>
      <Empty.Title className="box">404 Not Found</Empty.Title>
      <Empty.Description>
         this is not a right path.try again sometime later. thank you.
      </Empty.Description>
      <Link to="/"><Button variant="outline">Go to home</Button></Link>
      
    </Empty>
   
    </>
  )
}

export default Nopage 