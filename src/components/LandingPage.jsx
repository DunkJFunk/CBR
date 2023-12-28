import React from "react";
import boatImage from "../media/2.jpg"
// import logo from "../media/logo.png"

const LandingPage = () => {
    const handleSeeMore = () => {
        window.scrollTo({top: 3200, behavior: 'smooth'});
      };
    return (
        <div className="w-screen z-10 relative">
            <div className="bg-bcolor">
                <img className="w-screen h-auto transform -scale-x-100" src={boatImage} alt="Boating Line" style={{opacity: .5}}/>
            </div>
            <div className="absolute left-60 top-1/3 font-montserrat w-1/2 text-slate-900 flex-row text-left">
                <h1 className="text-7xl font-cinzel font-bold w-3/4">RESTORATION DONE THE RIGHT WAY</h1>
                <p className="text-4xl font-bold mt-4 w-4/5">
                    With more than 22 years of experience and 250 boats restored, join countless boat owners who have allowed us share the same pride in their boats as they do.
                </p>
                <button onClick={handleSeeMore} className="py-4 px-4 bg-slate-900 rounded text-white mt-10 text-2xl">See More...</button>
            </div>
        </div>
    );
}

export default LandingPage;