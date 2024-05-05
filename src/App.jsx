import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Project from "./Pages/Project"
import Nopage from './Pages/Nopage'
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Project' element={<Project/>} />
      <Route path='/*' element={<Nopage/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
