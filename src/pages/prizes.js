import React, { useState } from "react";
import Navbar from "../components/navbar";
import Rect from "./../images/prizeRect.png";
const Prizes = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  var Blur = isExpanded ? "change-opacity" : "none";
  return (
    <div className="-mt-5">
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      <div className={Blur}>
        <img
          src={Rect}
          className="absolute invisible md:visible w-24 h-auto mt-10 mr-5"
          alt="separator"
        />
        <img
          src={Rect}
          className="absolute invisible md:visible w-24 h-auto mt-20 ml-5 right-0 transform rotate-180"
          alt="separator"
        />
        <p className=" text-center font-bold text-4xl md:text-5xl font-mont">
          PRIZES
        </p>
        <div className="justify-center mt-7 md:mt-32 flex flex-col md:flex-row ">
          <p className="md:-mr-16 z-10 circles prize3 transform ease-in-out  duration-500 hover:scale-125">
            <p className=" caption text-center mt-10 md:-mt-10 font-mont font-semibold text-2xl">
              Quiz
            </p>
          </p>
          <div className="z-30  md:border-r-4 md:border-l-4 border-black relative lines md:-mt-24">
            <p className="z-50 md:pb-10 relative caption-2 text-center  font-mont font-semibold text-2xl">
              Competitive
            </p>
            <p className="z-20 circles prize1 transform   ease-in-out  duration-500 "></p>
          </div>

          <p className="md:-ml-16 z-10 circles  prize2  transform ease-in-out  duration-500 hover:scale-125 ">
            <p className=" caption text-center mt-10 md:-mt-10 font-mont font-semibold text-2xl">
              Cicada
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
