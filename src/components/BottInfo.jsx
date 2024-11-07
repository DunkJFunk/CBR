import React from "react";
import BoatPic from "../media/5200bot.jpeg";
import BoatVid from "../media/5200bot.mp4";

const BottInfo = () => {
    return (
        <div className="h-auto w-screen" id="bottinfo">
            {/* <div className="h-2 w-screen bg-slate-900"></div> */}
            <div className="flex max-md:flex-col-reverse align-middle justify-center py-20 gap-24 bg-owhite max-md:gap-4">
                <div className="w-1/3 h-30 text-right mt-6 max-md:w-full max-md:mt-2 max-md:px-10">
                    <h2 className="text-6xl font-bebasneue text-slate-900 max-sm:text-5xl">Our 5200 Bottoms</h2>
                    <h2 className="font-semibold text-4xl mb-5 text-slate-900 font-bebasneue">______</h2>
                    <p className="text-xl text-slate-900 max-sm:text-xl">
                        In over 22 years of boat restoration and repair we have completed more than 250 5200 boat bottoms. Why a 5200 boat bottom? Unlike the wood in classic wood powerboats, which is always moving – 
                        expanding and contracting with moisture levels and temperature, the 5200 boat bottom is flexible and moves with the wood. 
                        More about our 5200 boat bottoms below!
                    </p>
                    </div>
                <div className="mt-6 flex-row align-middle justify-center w-1/3 h-full max-md:w-full max-md:p-4 max-md:">
                    <video src={BoatVid} autoPlay loop muted webkit-playsinline playsinline alt="5200 Bottom Coverage" className="border-8 border-slate-900"/>
                    <p className="text-center mt-6 text-slate-300 max-sm:hidden">Our Team C 202X</p>
                </div>
            </div>
        </div>
    )
};

export default BottInfo;