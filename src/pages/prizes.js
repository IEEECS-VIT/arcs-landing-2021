import React, { useState } from "react";
import Navbar from "../components/navbar";
const Prizes = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  var Blur = isExpanded ? "change-opacity" : "none";
  return (
    <div className="-mt-5">
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      <div className={Blur}>
        <p className=" text-center font-bold text-4xl md:text-5xl font-mont">
          PRIZES
        </p>
        <div className="justify-center mt-5 md:mt-32 flex flex-col md:flex-row">
          <p className="md:-mr-16 z-20 circles prize3 transform ease-in-out  duration-500 hover:scale-125">
            <p className="text-center mt-10 md:-mt-10 font-mont font-semibold text-2xl">
              Quiz
            </p>
          </p>
          <hr className="-mr-3  lines md:rotate-90 border-2 md:h-80 " />
          <p className="md:-mt-10 z-30 circles prize1  transform ease-in-out  duration-500 hover:scale-125">
            <p className="text-center mt-10 md:-mt-10 font-mont font-semibold text-2xl">
              Competitive
            </p>
          </p>
          <hr className=" -ml-3 z-10 md:rotate-90 border-2 md:h-80 lines " />

          <p className="md:-ml-16 z-20 circles  prize2  transform ease-in-out  duration-500 hover:scale-125 ">
            <p className="text-center mt-10 md:-mt-10 font-mont font-semibold text-2xl">
              Cicada
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
