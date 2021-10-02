import React, { useState } from "react";
import circles from "./../images/cardbackground.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Navbar from "./../components/navbar";
import Element from "./../components/timelineElement";

const Timeline = () => {
  function showCard(e) {
    console.log(e);
    let newArr = [false, false, false, false, false, false];
    newArr[e] = true;
    isClicked(newArr);
    // console.log(show);
  }
  const [isExpanded, toggleExpansion] = useState(false);
  const [show, isClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <div className="w-full lg:overflow-y-hidden h-screen -mt-5">
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      <div className="mt-5 lg:mt-44 ">
        <VerticalTimeline layout={"1-column-right"} animate={false}>
          <Element show={show[0]} showCard={showCard} num={0} />
          <Element show={show[1]} showCard={showCard} num={1} />
          <Element show={show[2]} showCard={showCard} num={2} />
          <Element show={show[3]} showCard={showCard} num={3} />
          <Element show={show[4]} showCard={showCard} num={4} />
          <Element show={show[5]} showCard={showCard} num={5} />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
