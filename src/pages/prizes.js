import React, { useState } from "react";
import Navbar from "../components/navbar";
const Prizes = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <div className="-mt-5">
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      <p className=" text-center font-bold  text-5xl font-mont">PRIZES</p>
      <div className="justify-center  mt-32 flex flex-row">
        <p className="-mr-16 z-20 circles prize3 transform ease-in-out hover:z-50 duration-500 hover:scale-125">
          <p className="text-center -mt-10 font-mont font-semibold text-2xl">
            Quiz
          </p>
        </p>
        <hr className="-mr-3 rotate-90 border-2 h-80 " />
        <p className="-mt-10 z-30 circles prize1  transform ease-in-out hover:z-50 duration-500 hover:scale-125">
          <p className="text-center -mt-10 font-mont font-semibold text-2xl">
            Competitive
          </p>
        </p>
        <hr className=" -ml-3 z-10 rotate-90 border-2 h-80 " color="black" />

        <p className="-ml-16 z-20 circles  prize2  transform ease-in-out hover:z-50 duration-500 hover:scale-125 ">
          <p className="text-center -mt-10 font-mont font-semibold text-2xl">
            Cicada
          </p>
        </p>
      </div>
    </div>
  );
};

export default Prizes;
