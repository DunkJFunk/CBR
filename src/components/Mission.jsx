import React from "react";
import GroupPic from "../media/missionfoto.jpeg";
import Wave2 from "./Wave2";
import BoatVid from "../media/MissionVid.mp4";

const Mission = () => {

    return (
        <div className="h-auto w-screen" id="mission">
            <div className="flex max-md:flex-col align-middle justify-center pb-16 pt-48 gap-24 bg-slate-900 max-md:gap-8 max-md:pt-16">
                <div className="flex-row align-middle justify-center w-[40%] h-full max-md:w-full mt-6 px-6">
                    <video src={BoatVid} autoPlay loop muted webkit-playsinline playsinline alt="5200 Bottom Coverage" className="border-8 border-owhite"/>
                    <p className="text-center mt-6 text-slate-300">Classic Boat Restoration team, 2021</p>
                </div>
                <div className="w-1/3 text-left mt-6 max-md:w-full max-md:mt-2 max-md:px-10">
                    <h2 className="text-6xl font-bebasneue text-owhite max-lg:text-5xl">Our Mission</h2>
                    <h2 className="font-semibold text-4xl mb-5 text-owhite font-bebasneue">______</h2>
                    <p className="text-xl text-owhite max-md:text-xl">
                    We love mahogany boats and are simply passionate about them. After more than twenty years, over one hundred restorations, 
                    and more than 250 boat bottoms completed we know what we’re doing, and share the same pride in these boats when finished as their owners do.
                    That means communicating every step of the way and making sure we are exceeding every expectation.
                    </p>
                </div>
            </div>
            <div className="bg-owhite">
                <Wave2/>
            </div>
        </div>
    )
}
export default Mission;