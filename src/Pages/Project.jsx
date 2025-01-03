
import { useState, useEffect } from "react"
import axios from 'axios';
import { Card } from 'keep-react'
import { Button } from 'keep-react'
import { Link } from "react-router-dom";
import Helmet from "react-helmet"

function Project() {
 const [data , setData]=useState([])
 const [loading , setloading]= useState(true)
 const [error , seterror]= useState(null)

const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 3;



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
  axios.get('https://juwelrana34.github.io/allProject/allProject.json')
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
  <Helmet><title>Project</title></Helmet>
 
   <div className=" container grid gap-2 p-2 md:grid-cols-3 mx-auto mt-10">
   
   
      {data.length === 0 && <p className=" font-semibold text-xl p-3 bg-gray-50 rounded-lg text-orange-500">Data is Loading...</p>  }
      
            
                {currentData.map(({id, title, link ,image}) => (

                 <Card  key={id} 
                 style={{backgroundColor: id % 2===1? "#e0fcfe" : "white"}}
                 
                 className="max-w-md ">
                 <Card.Content className="p-2">
                   <Card.Title className=" pb-5 capitalize">{title}</Card.Title>
                   <Card.Description>
                    <img className=" w-full object-cover" src={`https://lh3.google.com/u/0/d/${image}`} alt="" />
                   </Card.Description>
                 </Card.Content>
                 
                  <Link to={link}><Button color="secondary" className=" m-4">Live</Button> </Link> 
               </Card>
                ))}
              
    </div>

     <div className="pagination w-full my-4">
                <Button color="primary" onClick={handlePrev} disabled={currentPage === 1}>Previous</Button>
                <Button color="warning" onClick={handleNext} disabled={start + itemsPerPage >= data.length}>Next</Button>
            </div>
   
    </>
  )
}

export default Project