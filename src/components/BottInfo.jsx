import React from "react";
import BoatPic from "../media/5200bot.jpeg";

const BottInfo = () => {
    return (
        <div className="h-auto w-screen">
            {/* <div className="h-2 w-screen bg-slate-900"></div> */}
            <div className="flex flex-wrap align-middle justify-center pb-16 pt-24 gap-24 bg-owhite">
                <div className="w-1/3 h-30 text-right mt-6">
                    <h2 className="text-6xl font-bebasneue mb-5 text-slate-900">Our 5200 Bottoms</h2>
                    <h2 className="font-semibold text-4xl mb-5 text-slate-900 font-bebasneue">______</h2>
                    <p className="text-3xl text-slate-900">
                    In over 22 years of boat restoration and repair we have completed more than 250 5200 boat bottoms. Why a 5200 boat bottom? The wood in classic wood powerboats is always moving – 
                    expanding and contracting with moisture levels and temperature. Not to mention the natural movement as the boat pounds through the water. 
                    The 5200 boat bottom is flexible and moves with the wood. More about our 5200 boat bottoms below!
                    </p>
                </div>
                <div className="flex-row align-middle justify-center w-1/4 h-auto">
                    <img src={BoatPic} alt="5200 Bottom Coverage" className="border-8 border-slate-900"/>
                    <p className="text-center mt-6 text-slate-300">Our Team C 202X</p>
                </div>
            </div>
        </div>
    )
};

export default BottInfo;