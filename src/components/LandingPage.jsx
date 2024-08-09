import React from "react";
import boatImage from "../media/2.jpg";

const LandingPage = () => {
    const handleSeeMore = () => {
        if (window.innerWidth < 640) {
            window.scrollTo({top: 4500, behavior: 'smooth'});
        } else {
            window.scrollTo({top: 3200, behavior: 'smooth'});
        }
    };
    const handleContact = () => {
        window.scrollTo({top: 99999, behavior: 'smooth'});
      };
      
    return (
        <div className="w-screen z-10 relative max-md:bg-owhite max-md:h-screen overflow-hidden">
            <div className="bg-bcolor">
                <img className="w-screen h-auto transform -scale-x-100  max-md:hidden" src={boatImage} alt="Boating Line" style={{opacity: .5}}/>
            </div>
            <div className="absolute left-60 top-1/4 font-montserrat w-1/2 text-slate-900 flex-row text-left max-md:left-10 max-md:top-48 max-sm:top-28 max-md:w-full max-lg:relative">
                <h1 className="text-5xl font-cinzel font-bold w-3/4 max-sm:hidden">RESTORATION DONE THE RIGHT WAY</h1>
                <p className="text-3xl font-bold mt-4 w-4/5 max-sm:block max-sm:text-4xl">
                    With more than 22 years of experience and 250 boats restored, join countless boat owners who have allowed us share the same pride in their boats as they do.
                </p>
                <button onClick={handleSeeMore} className="py-4 px-4 bg-slate-900 rounded text-white mt-10 text-xl max-sm:px-8">See More...</button>
                <button onClick={handleContact} className="py-4 px-4 bg-slate-900 rounded text-white mt-10 text-xl max-sm:px-8 hidden max-sm:block">Contact Us</button>
            </div>
        </div>
    );
}

export default LandingPage;