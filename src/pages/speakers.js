import React, { useState } from "react";
import { CoverSpeaker } from "../components/CoverSpeaker/CoverSpeaker";
import Carousel from "../components/Caroussel/Caroussel";
import Navbar from "../components/navbar";
const Speakers = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  var Blur = isExpanded ? "change-opacity" : "none";
  return (
    <div className="select-none">
      <div className="sm:mb-20 lg:mb-20">
        <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      </div>
      <div className={Blur}>
        <CoverSpeaker title="Speakers" />
        <Carousel />
      </div>
    </div>
  );
};

export default Speakers;
