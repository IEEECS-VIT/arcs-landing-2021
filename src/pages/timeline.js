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
  var Blur = isExpanded ? "change-opacity" : "none";
  return (
    <div className="w-full lg:overflow-hidden pt-10  h-screen ">
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      <div className={Blur}>
        <p className="text-5xl mt-10 lg:mt-5 text-center font-bold font-mont">
          Timeline
        </p>
        <img
          className="invisible lg:visible z-10 absolute right-24 h-auto w-48 bottom-3"
          src={ArcsText}
          alt="arcsText"
        />
        <div className="mt-5 md:mt-28 lg:mt-2 lg:mt-32  ">
          <VerticalTimeline layout={"1-column-right"} animate={false}>
            <Element
              show={show[0]}
              showCard={showCard}
              num={0}
              date={"one"}
              eventName="EVENT NAME"
              date="03/08/2021"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie at
              egestas justo quis nibh. Turpis diam lectus viverra a velit quis. In
              volutpat nisl, sed libero malesuada nunc convallis tellus dignissim.
              Sed aliquet eu morbi aliquam dolor. Libero, non et orci, laoreet vitae
              amet, facilisis. Dolor id mattis ut massa scelerisque mattis. Tortor
              vulputate urna venenatis eu."
            />
            <Element
              show={show[1]}
              showCard={showCard}
              num={1}
              date={"two"}
              eventName="EVENT NAME"
              date="03/08/2021"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie at
              egestas justo quis nibh. Turpis diam lectus viverra a velit quis. In
              volutpat nisl, sed libero malesuada nunc convallis tellus dignissim.
              Sed aliquet eu morbi aliquam dolor. Libero, non et orci, laoreet vitae
              amet, facilisis. Dolor id mattis ut massa scelerisque mattis. Tortor
              vulputate urna venenatis eu."
            />
            <Element
              show={show[2]}
              showCard={showCard}
              num={2}
              date={"three"}
              eventName="EVENT NAME"
              date="03/08/2021"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie at
              egestas justo quis nibh. Turpis diam lectus viverra a velit quis. In
              volutpat nisl, sed libero malesuada nunc convallis tellus dignissim.
              Sed aliquet eu morbi aliquam dolor. Libero, non et orci, laoreet vitae
              amet, facilisis. Dolor id mattis ut massa scelerisque mattis. Tortor
              vulputate urna venenatis eu."
            />
            <Element
              show={show[3]}
              showCard={showCard}
              num={3}
              date={"four"}
              eventName="EVENT NAME"
              date="03/08/2021"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie at
              egestas justo quis nibh. Turpis diam lectus viverra a velit quis. In
              volutpat nisl, sed libero malesuada nunc convallis tellus dignissim.
              Sed aliquet eu morbi aliquam dolor. Libero, non et orci, laoreet vitae
              amet, facilisis. Dolor id mattis ut massa scelerisque mattis. Tortor
              vulputate urna venenatis eu."
            />
            <Element
              show={show[4]}
              showCard={showCard}
              num={4}
              date={"five"}
              eventName="EVENT NAME"
              date="03/08/2021"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie at
              egestas justo quis nibh. Turpis diam lectus viverra a velit quis. In
              volutpat nisl, sed libero malesuada nunc convallis tellus dignissim.
              Sed aliquet eu morbi aliquam dolor. Libero, non et orci, laoreet vitae
              amet, facilisis. Dolor id mattis ut massa scelerisque mattis. Tortor
              vulputate urna venenatis eu."
            />
            <Element
              show={show[5]}
              showCard={showCard}
              num={5}
              date={"six"}
              eventName="EVENT NAME"
              date="03/08/2021"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie at
              egestas justo quis nibh. Turpis diam lectus viverra a velit quis. In
              volutpat nisl, sed libero malesuada nunc convallis tellus dignissim.
              Sed aliquet eu morbi aliquam dolor. Libero, non et orci, laoreet vitae
              amet, facilisis. Dolor id mattis ut massa scelerisque mattis. Tortor
              vulputate urna venenatis eu."
            />
          </VerticalTimeline>
          <img
            className="invisible lg:visible z-10 absolute right-0 h-56 w-56 bottom-0"
            alt="line"
            src={line}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
