import React from "react";
import comp from "./../images/card.png";
const landingCard = () => {
  return (
    <div className="border my-4    w-full md:my-1">
      <div className="inner  h-auto  ">
        <p className="mr-auto ml-auto w-1/2  text-lg pb-1 text-black ">
          Hackbattle
        </p>
        <img
          src={comp}
          className=" -mt-6 h-auto w-24 float-left inline-block pr-3"
          alt="comp"
        />
        <p className="text-gray text-justify text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
      </div>
    </div>
  );
};

export default landingCard;
