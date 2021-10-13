import React from "react";
import comp from "./../images/card.png";
const landingCard = () => {
  return (
    <div className="grad w-60 h-40 my-4 mx-2 card-style flex flex-none  md:my-2 lg:my-0.5">
      <div className="inner">
        <div className="flex flex-none items-center ">
          <img
            draggable="false"
            src={comp}
            className="w-24 h-24 pr-3"
            alt="comp"
          />
          <div className="text-justify">
            <p className="mb-2 mr-auto ml-auto text-lg pb-1 text-black">
              Hackbattle
            </p>
            <p className="text-gray justify-around text-xs ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landingCard;
