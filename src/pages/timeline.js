import React, { useState } from "react";
import line from "./../images/dottedLine.png";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Navbar from "./../components/navbar";
import Element from "./../components/timelineElement";
import ArcsText from "./../images/arcsText.png";
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
    <div className="w-full lg:overflow-hidden  h-screen -mt-5">
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      <p className="text-5xl text-center font-medium italic  ">Timeline</p>
      <div className="mt-5 md:mt-28 lg:mt-56 lg:ml-48 ">
        <VerticalTimeline layout={"1-column-right"} animate={false}>
          <Element show={show[0]} showCard={showCard} num={0} date={"one"} />
          <Element show={show[1]} showCard={showCard} num={1} date={"two"} />
          <Element show={show[2]} showCard={showCard} num={2} date={"three"} />
          <Element show={show[3]} showCard={showCard} num={3} date={"four"} />
          <Element show={show[4]} showCard={showCard} num={4} date={"five"} />
          <Element show={show[5]} showCard={showCard} num={5} date={"six"} />
        </VerticalTimeline>
        <img
          className="invisible lg:visible z-20 absolute right-0 h-56 w-56 bottom-0"
          src={line}
        />
        <img
          className="invisible lg:visible absolute right-24 h-20 w-44 bottom-3"
          src={ArcsText}
        />
      </div>
    </div>
  );
};

export default Timeline;
