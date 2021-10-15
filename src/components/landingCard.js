import React from "react";
import hb from "../images/landingCard/card.png";
import convoke from "../images/landingCard/convoke.jpg";
import cicada from "../images/landingCard/cicada.svg";
const landingCard = (props) => {
  let image;
  if (props.img_name === "convoke") {
    image = <img src={convoke} className="w-24 h-auto pt-3 pr-3" alt="comp" />;
  } else if (props.img_name === "cicada") {
    image = <img src={cicada} className="w-24 h-auto pt-3 pr-3" alt="comp" />;
  } else if (props.img_name === "hb") {
    image = <img src={hb} className="w-24 h-24 pr-3" alt="comp" />;
  }

  return (
    <div className="grad w-60 h-40 my-4 mx-2 card-style flex flex-none  md:my-2 lg:my-0.5">
      <div className="inner">
        <div className="flex flex-none items-center ">
          {/* <img
            src={`${img_path + props.img_name}`}
            className="w-24 h-24 pr-3"
            alt="comp"
          /> */}
          {image}
          <div className="text-justify">
            <p className="mb-2 mr-auto ml-auto text-lg pb-1 text-black">
              {props.title}
            </p>
            <p className="text-gray justify-around text-xs ">{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landingCard;
