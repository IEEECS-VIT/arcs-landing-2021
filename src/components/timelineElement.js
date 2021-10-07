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
        opacity: Width < 1023 || props.show ? "1" : "0",
        backgroundImage: `url(${circles})`,
        zIndex: Width < 1023 || props.show ? "1" : "0",
        backgroundSize: Width > 1023 ? "contain" : "contain",
        backgroundRepeat: "no-repeat",
        color: "white",
        transform:
          Width > 1023
            ? "rotate(90deg)  translateX(-10px)"
            : "rotate(90deg) translateY(0px) ",
        width: Width > 1023 ? "340px" : "350px",
        height: Width > 1023 ? "300px" : "400px",
        transition: "all 0.6s ease-in-out",
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
          className={`${props.date} dot`}
        >
          <div
            className={
              props.show || Width < 1024 ? "inner-circle2" : "inner-circle"
            }
          ></div>
        </button>
      }
    >
      <div
        className="data  lg:mt-5 w-1/2 lg:w-auto "
        style={{ opacity: props.show || Width < 1024 ? "1" : "0" }}
      >
        <h3 className="">EVENT NAME</h3>
        <h4 className="">03/08/2021</h4>
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie at
          egestas justo quis nibh. Turpis diam lectus viverra a velit quis. In
          volutpat nisl, sed libero malesuada nunc convallis tellus dignissim.
          Sed aliquet eu morbi aliquam dolor. Libero, non et orci, laoreet vitae
          amet, facilisis. Dolor id mattis ut massa scelerisque mattis. Tortor
          vulputate urna venenatis eu.
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
