import React from "react";
import GroupPic from "../media/about.jpg";
import Wave2 from "./Wave2";

const Mission = () => {

    return (
        <div className="h-auto w-screen">
            <div className="flex max-sm:flex-col align-middle justify-center pb-16 pt-48 gap-24 bg-slate-900 max-sm:g-4 max-sm:pt-16">
                <div className="flex-row align-middle justify-center w-1/4 h-full max-sm:w-full max-sm:m-4">
                    <img src={GroupPic} alt="5200 Bottom Coverage" className="border-8 border-slate-900"/>
                    <p className="text-center mt-6 text-slate-300 max-sm:hidden">Our Team C 202X</p>
                </div>
                <div className="w-1/3 text-left mt-6 max-sm:w-full max-sm:mt-2 max-sm:px-10">
                    <h2 className="text-6xl font-bebasneue mb-5 text-owhite">Our Mission</h2>
                    <h2 className="font-semibold text-4xl mb-5 text-owhite font-bebasneue">______</h2>
                    <p className="text-3xl text-owhite">
                    We love mahogany boats and are simply passionate about them. After more than twenty years, over one hundred restorations, 
                    and more than 250 boat bottoms completed we know what we’re doing, and share the same pride in these boats when finished as their owners do.
                    Classic Boat Restoration is your trusted partner. We don’t use the word partner lightly. A partner is a team player in a shared goal. 
                    That means communicating every step of the way and making sure we are exceeding expectations.
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