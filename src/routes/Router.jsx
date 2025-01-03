
import {  Routes, Route } from "react-router";
import App from '../App';
import About from '../Pages/About';
import ContactUs from '../Component/ContactForm/ContactUs';
import Home from "../Pages/Home";
import Project from "../Pages/Project";
import Nopage from "../Pages/Nopage";
import Login from "../Pages/Login";
import Dashbord from "../Pages/Dashbord";
const Router = () => {
    return <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="dashbord" element={<Dashbord />} />
      </Route>
      <Route path="*" element={<Nopage />} />
    </Routes>
}

export default Router