
import { useState, useEffect } from "react"
import Footer from "../Component/Footer/Footer"
import Navbar from "../Component/Navbar/Navbar"
import axios from 'axios';
import { Card } from 'keep-react'
import { Button } from 'keep-react'
import { Link } from "react-router-dom";


function Project() {
 const [data , setData]=useState([])
 const [loading , setloading]= useState(true)
 const [error , seterror]= useState(null)

const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;



const start = (currentPage - 1) * itemsPerPage;
const currentData = data.slice(start, start + itemsPerPage);

const handlePrev = () => {
    if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
    }
};

const handleNext = () => {
    if (start + itemsPerPage < data.length) {
        setCurrentPage(currentPage + 1);
    }
};
  

 useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then( Response => {
    setData(Response.data);
    setloading(false)
  })
  .catch((error)=>{
    seterror(error)
    setloading(false)
  })
 },[])

 if (error){
  return <p> Error:{error.message}/</p>
 }

  return (
  <>
    <Navbar/>
   <div className=" container grid gap-2 p-2 md:grid-cols-3  mx-auto mt-10">
   
   
      {data.length === 0 && <p className=" font-semibold text-xl text-orange-500">Data is Loading...</p>  }
      
            
                {currentData.map(post => (
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

     <div className="pagination w-full my-4">
                <Button color="primary" onClick={handlePrev} disabled={currentPage === 1}>Previous</Button>
                <Button color="warning" onClick={handleNext} disabled={start + itemsPerPage >= data.length}>Next</Button>
            </div>
    <Footer/>
    </>
  )
}

export default Project