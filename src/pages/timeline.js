import React, { useState } from "react";
import Navbar from "./../components/navbar";

const Timeline = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <div className="-mt-5">
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      <p className="font-mont font-medium text-center  block text-5xl italic">
        Timeline
      </p>
    </div>
  );
};

export default Timeline;
