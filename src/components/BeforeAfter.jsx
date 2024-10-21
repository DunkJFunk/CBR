import React from "react";
import before3 from "../media/beforeandafter-before3.jpg";
import after3 from "../media/beforeandafter-after3.jpg";
import before2 from "../media/beforeandafter-before2.jpg";
import after2 from "../media/beforeandafter-after2.jpg";
import before1 from "../media/beforeandafter-before.jpg";
import after1 from "../media/beforeandafter-after.jpg";
import b1 from "../media/b1.jpg";

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const BeforeAfter = () => {
  return (
    <div style={{ backgroundImage: `url(${b1})`, backgroundSize: 'cover', backgroundRepeat: ""}} id="beforeafter">
      <div className="max-sm:bg-slate-900">
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
        <button className="text-center text-4xl font-bebasneue pb-10 text-owhite">See more of our work</button>
      </div>
    </div>
  );
};

export default BeforeAfter;