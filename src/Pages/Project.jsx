
import { useState, useEffect } from "react"
import Footer from "../Component/Footer/Footer"
import Navbar from "../Component/Navbar/Navbar"
import axios from 'axios';
import { Card } from 'keep-react'
import { Button } from 'keep-react'
import { Link } from "react-router-dom";


function Project() {
 const [data , setdata]=useState([])
 const [loading , setloading]= useState(true)
 const [error , seterror]= useState(null)
 useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then( Response => {
    setdata(Response.data);
    setloading(false)
  })
  .catch((error)=>{
    seterror(error)
    setloading(false)
  })
 },[])

 if(loading){
  return <p className=" text-center">Data is Loading...</p>
 }
 if (error){
  return <p> Error:{error.message}/</p>
 }

  return (
    <>
    <Navbar/>
   <div className=" container grid gap-2 p-2 md:grid-cols-3  mx-auto mt-10">
    {data.map((post)=>(
      
      <Card  key={post.key} 
      style={{backgroundColor: post.id % 2===1? "#e0fcfe" : "white"}}
      
      className="max-w-md ">
      <Card.Content>
        <Card.Title className=" capitalize">{post.title}</Card.Title>
        <Card.Description>
        {post.body}
        </Card.Description>
      </Card.Content>
       <Link to="/Contact"><Button color="success" className=" m-4">Contact</Button> </Link> 
    </Card>
     
        
    ))}
   </div>
    
 
     
 
    
    
  
    <Footer/>
    </>
  )
}

export default Project