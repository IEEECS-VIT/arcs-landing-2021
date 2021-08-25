import React from "react";
import comp from "./../images/card.png";
const landingCard = () => {
  return (
    <div className="border w-60 my-4 card-style flex flex-none  md:my-2 lg:my-0.5">
      <div className="inner  ">
        <p className="mb-2 mr-auto ml-auto w-1/2  text-lg pb-1 text-black ">
          Hackbattle
        </p>
        <img
          src={comp}
          className="-mt-6 h-auto w-24 float-left inline-block pr-3"
          alt="comp"
        />
        <p className="text-gray justify-around text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
      </div>
    </div>
  );
};

export default landingCard;
