import React from 'react';
// import logo from '../media/logo.png';
import logo2 from '../media/logo2.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const handleScrolltoTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  const handleContact = () => {
    window.scrollTo({top: 99999, behavior: 'smooth'});
  };  
  const handleAbout = () => {
    window.scrollTo({top: 950, behavior: 'smooth'});
  };
  const handleWork = () => {
    window.scrollTo({top: 3200, behavior: 'smooth'});
  };

  return (
    <div className='w-screen flex items-center justify-center'>
      <div className="fixed container mx-2 z-20 top-2">
        <div className="flex justify-between items-center my-4 max-sm:ml-16 md:mx-8">
        <Link to="/">
          <img onClick={handleScrolltoTop} src={logo2} alt="Classic Boat Restoration" className=' h-20 max-sm:h-20'/>
        </Link>
        <Link className='max-sm:hidden' to="/">
          <div className="flex text-slate-900 font-bold font-montserrat text-3xl gap-8 max-sm:text-transparent">
              <button onClick={handleAbout}>About</button>
              <button onClick={handleWork}>Our Work</button>
              <button onClick={handleContact}>Contact</button>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;