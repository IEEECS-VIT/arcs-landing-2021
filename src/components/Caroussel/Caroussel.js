import React from "react";
import "./Carousel.style.scss";

function Carousel() {
  return (
    <div className="speaker-list w-screen flex flex-col md:flex-row justify-center items-center">
      <div className="speaker1">
        <div className="speaker-img"></div>

        <div className="speaker-content">
          <div className="speaker-name text-center my-4 font-bold text-xl md:text-2xl lg:text-3xl">
            Speaker Name
          </div>
          <div className="speaker-intro text-center mx-4">
            Some Random Description of the speaker Some Random Description of
            the speaker Some Random Description of the speaker Some Random
            Description of the speaker
          </div>
        </div>
      </div>

      <div className="speaker2">
        <div className="speaker-img"></div>

        <div className="speaker-content">
          <div className="speaker-name text-center my-4 font-bold text-xl md:text-2xl lg:text-3xl">
            Speaker Name
          </div>
          <div className="speaker-intro text-center mx-4">
            Some Random Description of the speaker Some Random Description of
            the speaker Some Random Description of the speaker Some Random
            Description of the speaker
          </div>
        </div>
      </div>

      <div className="speaker3">
        <div className="speaker-img"></div>

        <div className="speaker-content">
          <div className="speaker-name text-center my-4 font-bold text-xl md:text-2xl lg:text-3xl">
            Speaker Name
          </div>
          <div className="speaker-intro text-center mx-4">
            Some Random Description of the speaker Some Random Description of
            the speaker Some Random Description of the speaker Some Random
            Description of the speaker
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
