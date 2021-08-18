import React from "react";
import comp from "./../images/card.png";
const landingCard = () => {
  return (
    <div className="my-4 h-auto flex-auto w-full md:my-1 grad ">
      <p className="mr-auto ml-auto w-1/2  text-lg pb-1 text-black ">
        Hackbattle
      </p>
      <img
        src={comp}
        className="h-auto w-24 float-left inline-block pr-5"
        alt="comp"
      />
      <p className="text-gray text-justify text-sm ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna
      </p>
    </div>
  );
};

export default landingCard;
