import React from "react";
import { Link } from "react-router-dom";
import boatImage from "../media/2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';


const LandingPage = () => {
    const handleContact = () => {
        window.scrollTo({top: 99999, behavior: 'smooth'});
      };
      
    return (
        <div className="w-screen z-10 relative max-md:bg-owhite max-md:h-screen overflow-hidden">
            <div className="bg-bcolor">
                <img className="w-screen h-auto transform -scale-x-100" src={boatImage} alt="Boating Line" style={{opacity: .5}}/>
            </div>
            <div className="absolute left-60 top-1/4 w-1/2 text-slate-900 flex-row text-left max-md:left-10 max-md:top-48 max-sm:top-28 max-md:w-full max-lg:relative">
                <h1 className="text-4xl font-cinzel font-bold w-3/4 max-sm:hidden">RESTORATION DONE THE RIGHT WAY</h1>
                <div className="text-2xl font-montserrat font-bold mt-4 w-4/5 max-sm:block max-sm:text-4xl">
                    <p>- More than 250 restorations</p>
                    <p>- Twenty+ years experience</p>
                    <p>- 5200 Bottoms</p>
                    <p>- Mirror Finishes</p>                
                </div>
                <Link to="/gallery"> 
                    <button className="p-3 bg-slate-900 rounded text-white mt-10 text-xl max-sm:px-8"><FontAwesomeIcon icon={faImage} className="pr-2" /> See More</button>
                </Link>
                <button onClick={handleContact} className="py-4 px-4 bg-slate-900 rounded text-white mt-10 text-xl max-sm:px-8 hidden max-sm:block">Contact Us</button>
            </div>
        </div>
    );
}

export default LandingPage;