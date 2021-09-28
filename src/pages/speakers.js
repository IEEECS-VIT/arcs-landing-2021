import React from "react";
import { CoverSpeaker } from "../components/CoverSpeaker/CoverSpeaker";
import Carousel from "../components/Caroussel/Caroussel";
const Speakers = () => {
  return (
    <div>
      <CoverSpeaker title="Speakers" />
      <Carousel />
    </div>
  );
};

export default Speakers;
