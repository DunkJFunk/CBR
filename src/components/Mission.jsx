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
                    <h2 className="text-5xl font-bebasneue text-owhite max-lg:text-4xl">Our Mission</h2>
                    <h2 className="font-semibold text-3xl mb-5 text-owhite font-bebasneue">______</h2>
                    <p className="text-xl text-owhite max-md:text-xl font-montserrat">
                    Here at Classic Boat Restorations we are passionate about classic mahogany powerboats.  We know you are too.  We believe in doing things right the first time, and take pride in our craftsmanship.  From master carpenters, to expert finishers…combined with using only the best marine products available...our goal is to provide a safe and beautiful classic you can enjoy for years to come with family and friends.  Let us restore a classic for you!
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