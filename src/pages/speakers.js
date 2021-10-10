import React, { useState } from "react";
import { CoverSpeaker } from "../components/CoverSpeaker/CoverSpeaker";
import Carousel from "../components/Caroussel/Caroussel";
import Navbar from "../components/navbar";
const Speakers = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <div>
      <div className="mb-10">
        <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      </div>
      <CoverSpeaker title="Speakers" />
      <Carousel />
    </div>
  );
};

export default Speakers;
