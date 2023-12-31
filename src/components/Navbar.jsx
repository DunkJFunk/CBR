import React from 'react';
// import logo from '../media/logo.png';
import logo2 from '../media/logo2.png';

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
      <div className="fixed container px-2 z-20 mx-auto top-2">
        <div className="flex justify-between items-center py-4">
          <img onClick={handleScrolltoTop} src={logo2} alt="Classic Boat Restoration" className='h-32'/>
        <div className="flex text-slate-900 font-bold font-montserrat text-3xl gap-8 max-sm:text-transparent">
          <button onClick={handleAbout}>About</button>
          <button onClick={handleWork}>Our Work</button>
          <button onClick={handleContact}>Contact</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;