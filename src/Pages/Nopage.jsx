import  Image  from "../assets/404.jpg"
import { Link } from "react-router-dom"

// import Image from 'next/image'
import { Button, Empty } from 'keep-react'

function Nopage() {
  return (
    <>

    <Empty>
      <Empty.Image>
        <img src={Image}  alt="404"  />
      </Empty.Image>
      <Empty.Title>404 Not Found</Empty.Title>
      <Empty.Description>
         this is not a right path.try again sometime later. thank you.
      </Empty.Description>
      <Link to="/"><Button variant="outline">Go to home</Button></Link>
      
    </Empty>
   
    </>
  )
}

export default Nopage 