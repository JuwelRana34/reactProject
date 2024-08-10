import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Image  from '../Image/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="  shadow-lg   shadow-cyan-100 mb-2  p-4">

      <div className="container  mx-auto flex justify-between items-center relative">
        <div className="flex items-center">
          <NavLink to="/" className="text-white font-bold text-lg"><img src={Image} alt="" className="space-x-4 h-12 w-12  " /> </NavLink>
        
        </div>
        <h1 className=' md:hidden font-semibold  font-pacifico text-orange-500 text-xl'>juwel Rana </h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-indigo-500 focus:outline-none">
            <svg className="h-6 w-6 z-500" viewBox="0 0 24 24">
            {!isOpen && (
                 <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
          
        </div>
        <div className=" hidden   md:block flex-col md:flex-row md:space-x-5 items-center mt-2">
            <NavLink to="/"        className=" relative nav-after text-Black text-lg font-semibold hover:text-indigo-600 py-2  ">Home</NavLink>
            <NavLink  to="/About"   className="relative nav-after text-Black text-lg font-semibold hover:text-indigo-600 py-2 ">About</NavLink>
            <NavLink to="/Project" className="relative nav-after text-Black text-lg font-semibold hover:text-indigo-600 py-2">Project</NavLink>
            <NavLink to="/Contact" className=" relative nav-after text-Black text-lg font-semibold hover:text-indigo-600 py-2">Contact</NavLink>
          </div>
        <div className={`md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 h-full w-3/4 backdrop-blur-sm bg-white/70 z-50 transition-transform transform`}>
  {/* Close button */}
  {isOpen && (
    <button onClick={() => setIsOpen(false)} className="absolute top-0 right-0 m-4 text-black">
      <svg className="h-6 w-6" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>

    </button>
  )}
          <div className="flex  flex-col md:flex-row font-semibold  items-center text-center w-full mx-auto mt-20">
            <NavLink to="/"        className=" text-black border-b-[1px]  hover:bg-gray-100 w-full  hover:shadow-lg h-auto text-lg font-serif py-2">Home</NavLink>
            <NavLink to="/About"   className="text-black border-b-[1px]  hover:bg-gray-100 w-full  hover:shadow-lg h-auto text-lg font-serif py-2">About</NavLink>
            <NavLink to="/Project" className="text-black border-b-[1px]  hover:bg-gray-100 w-full  hover:shadow-lg  h-auto text-lg font-serif   py-2">Project</NavLink>
            <NavLink to="/Contact" className="text-black border-b-[1px]  hover:bg-gray-100 w-full  hover:shadow-lg h-auto text-lg font-serif py-2">Contact</NavLink>
          </div>
        </div>
        </div>
     
    </nav>
  );
};

export default Navbar;