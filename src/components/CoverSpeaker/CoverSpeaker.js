import React from "react";
import "./CoverSpeaker.style.css";
import logo from "../../images/vector.png";

export const CoverSpeaker = (props) => {
  return (
    <div className="heading md:h-56 min-h-64 min-w-full flex flex-row justify-center items-center border-0 p-0 m-0">
      <img className="img1" src={logo} alt="frustration" />
      <div className="heading-content">{props.title}</div>
      <img className="img2" src={logo} alt="whyyyyyyyy" />
    </div>
  );
};
