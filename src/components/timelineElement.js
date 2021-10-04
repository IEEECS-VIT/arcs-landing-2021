import { Hidden } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import circles from "./../images/EventCard.png";

const TimelineElement = (props) => {
  const [Width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  });
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{
        backgroundImage:
          Width < 1024 || props.show ? `url(${circles})` : "none",
        zIndex: Width < 1024 || props.show ? "1" : "0",
        backgroundSize: Width > 1024 ? "cover" : "100% 100%",
        backgroundRepeat: "no-repeat",

        color: "white",
        transform:
          Width > 1024
            ? "rotate(90deg) translateY(50px)"
            : "rotate(90deg) translateY(50px) ",
        width: Width > 1024 ? "270px" : "auto",
        height: Width > 1024 ? "200px" : "auto",
      }}
      contentArrowStyle={{
        visibility: "hidden",
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
      <div
        className="data mt-5"
        style={{ opacity: props.show || Width < 1024 ? "1" : "0" }}
      >
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
