import React from "react";
import before3 from "../assets/beforeandafter-before3.jpg";
import after3 from "../assets/beforeandafter-after3.jpg";
import before2 from "../assets/beforeandafter-before2.jpg";
import after2 from "../assets/beforeandafter-after2.jpg";
import before1 from "../assets/beforeandafter-before.jpg";
import after1 from "../assets/beforeandafter-after.jpg";
import b1 from "../assets/b1.jpg";

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const BeforeAfter = () => {
  return (
    <div style={{ backgroundImage: `url(${b1})`, backgroundSize: 'cover', backgroundRepeat: ""}} id="beforeafter">
      <div className="flex flex-col max-sm:bg-slate-900">
        <div className="flex align-middle justify-center pb-14 pt-20 relative ">
          <div>
            <ReactCompareSlider className="mx-6 border-owhite border-8 h-72"
              itemOne={<ReactCompareSliderImage src={before1} alt="Before" />}
              itemTwo={<ReactCompareSliderImage src={after1} alt="After" />}
            />
            {/* <p className="text-center text-xl text-white font-playfair mt-4">Chris Craft XX</p> */}
          </div>
          <div className="hidden sm:block">
            <ReactCompareSlider className="mx-6 border-owhite border-8 h-72"
              itemOne={<ReactCompareSliderImage src={before2} alt="Before" />}
              itemTwo={<ReactCompareSliderImage src={after2} alt="After" />}
            />
            {/* <p className="text-center text-xl text-white font-playfair mt-4">Chris Craft XX</p> */}
          </div>
          <div className="hidden md:block">
            <ReactCompareSlider className="mx-6 border-owhite border-8 h-72"
              itemOne={<ReactCompareSliderImage src={before3} alt="Before" />}
              itemTwo={<ReactCompareSliderImage src={after3} alt="After" />}
            />
            {/* <p className="text-center text-xl text-white font-playfair mt-4">Chris Craft XX</p> */}
          </div>
        </div>
        <div className="self-center">
          <button className="text-4xl font-bebasneue mb-10 text-owhite" onClick={() => {window.location.href = 'https://www.youtube.com/@classicwoodies'}}>Click Here to see these boats IN ACTION</button>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;