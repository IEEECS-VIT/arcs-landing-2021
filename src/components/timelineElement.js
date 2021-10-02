import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import circles from "./../images/cardbackground.png";
const TimelineElement = (props) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{
        backgroundImage: props.show ? `url(${circles})` : "none",
        zIndex: props.show ? "40" : "10",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white",
        transform: "rotate(90deg) translateY(50px)",
        width: "260px",
      }}
      contentArrowStyle={{
        visibility: props.show ? "visible" : "hidden",
        borderBottom: "20px solid #040303",
        borderRadius: "2px",
        left: "25%",
        top: "-25px",
      }}
      iconStyle={{
        background: "white",
        color: "white",
      }}
      icon={
        <button
          aria-label="btn"
          onClick={() => props.showCard(props.num)}
          className="dot"
        ></button>
      }
    >
      <div className="data " style={{ opacity: props.show ? "1" : "0" }}>
        <h3 className="">EVENT NAME</h3>
        <h4 className="">03/08/2021</h4>
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie at
          egestas justo quis nibh. Turpis diam lectus viverra a velit quis.
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
