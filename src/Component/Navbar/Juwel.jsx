import { useState } from 'react';
import { Link } from 'react-router-dom';
import Image  from '../Image/developer.png';

const Juwel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 

  return (
    <nav className="bg-indigo-500 shadow-lg  p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-lg"><img src={Image} alt="" className="space-x-4 h-10 w-10  " /> </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6 z-500" viewBox="0 0 24 24">
              {isOpen ? (
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className=" hidden   md:block flex-col md:flex-row space-x-5 items-center mt-2">
            <Link to="/" className="text-white py-2">Home</Link>
            <Link to="/About" className="text-white py-2">About</Link>
            <Link to="/Project" className="text-white py-2">Project</Link>
            <Link to="/Contact" className="text-white py-2">Contact</Link>
          </div>
        <div className={`md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 h-full w-3/4 bg-indigo-500 z-50 transition-transform transform`}>
  {/* Close button */}
  {isOpen && (
    <button onClick={() => setIsOpen(false)} className="absolute top-0 right-0 m-4 text-white">
      <svg className="h-6 w-6" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>

    </button>
  )}
          <div className="flex  flex-col md:flex-row space-x-5 items-center text-center w-full mx-auto mt-20">
            <Link to="/"        className="text-white  hover:bg-blue-400 w-full  hover:shadow-lg h-auto text-lg font-serif py-2">     Home</Link>
            <Link to="/About"   className="text-white  hover:bg-blue-400 w-full  hover:shadow-lg h-auto text-lg font-serif py-2">About</Link>
            <Link to="/Services" className="text-white hover:bg-blue-400 w-full  hover:shadow-lg h-auto text-lg font-serif   py-2">Services</Link>
            <Link to="/Contact" className="text-white  hover:bg-blue-400 w-full  hover:shadow-lg h-auto text-lg font-serif py-2">Contact</Link>
          </div>
        </div>
        </div>
     
    </nav>
  );
};

export default Juwel;