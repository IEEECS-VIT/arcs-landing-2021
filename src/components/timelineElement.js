import React, { useEffect, useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import circles from "./../images/EventCard.png";

const TimelineElement = (props) => {
  const [Width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{
        opacity: Width < 1023 || props.show ? "1" : "0",
        backgroundImage: `url(${circles})`,
        zIndex: Width < 1023 || props.show ? "1" : "0",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        color: "white",
        transform:
          props.num < 3 || Width < 1023
            ? "rotate(90deg)  translateX(-10px)"
            : " rotate(90deg) scaleX(-1) translatex(250px) ",

        width: Width > 1023 ? "340px" : "350px",
        height: Width > 1023 ? "300px" : "400px",
        animation: Width > 1023 && props.show ? "fadein 1s" : "none",
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
        className={`lg:mt-7 w-1/2 lg:w-auto ${
          props.num < 3 || Width < 1023 ? "data" : "data-inverted"
        }`}
        style={{
          opacity: props.show || Width < 1024 ? "1" : "0",
          transform: props.num >= 3 && Width > 1023 ? "scaleX(-1)" : "",
        }}
      >
        <h3 className="">{props.eventName}</h3>
        <h4 className="">{props.date}</h4>
        <p className="text-xs">{props.text}</p>
      </div>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
