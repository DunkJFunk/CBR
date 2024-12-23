import React from 'react';
// import logo from '../media/logo.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleScrolltoTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  const handleContact = () => {
    const anchorId = document.getElementById('contact');
    if (anchorId) {
        anchorId.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }};  
  const handleAbout = () => {
    const anchorId = document.getElementById('mission');
    if (anchorId) {
        anchorId.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'center'
        });
    }};
  
  return (
    <div className='w-screen flex items-center justify-center'>
      <div className="fixed container mx-2 z-20 top-2">
        <div className="flex justify-between items-center my-4 max-sm:ml-16 md:mx-8">
        <Link to="/">
          <img onClick={handleScrolltoTop} src={logo} alt="Classic Boat Restoration" className=' h-12 max-sm:h-20'/>
        </Link>
        <Link className='max-sm:hidden' to="/">
          <div className="flex text-slate-900 font-bold font-montserrat text-2xl gap-8 max-sm:text-transparent">
              <button onClick={handleAbout}>About</button>
              <button onClick={handleContact}>Contact</button>
              <Link to="/gallery">
                <button onClick={handleScrolltoTop}>Gallery</button>
              </Link>
              <Link to="/admin">
                <button onClick={handleScrolltoTop}>Admin</button>
              </Link>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;