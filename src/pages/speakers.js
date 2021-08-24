import React from "react";
import { Caroussel } from "../components/Caroussel/Caroussel";
import { CoverSpeaker } from "../components/CoverSpeaker/CoverSpeaker";


const Speakers = () => {
  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <CoverSpeaker title="Speakers" />
      <Caroussel items={items} active={0} />
    </div>
  );
}

export default Speakers;