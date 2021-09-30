import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Navbar from "./../components/navbar";

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
    <div className="w-full lg:overflow-y-hidden h-screen">
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      <div className="mt-5 lg:mt-44 ">
        <VerticalTimeline layout={"1-column-right"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work  "
            contentStyle={{
              background: show[0] ? "grey" : "none",
              color: "white",
            }}
            contentArrowStyle={{
              borderRight: show[0] ? "7px solid  grey" : "none",
            }}
            iconStyle={{ background: "white", color: "white" }}
            icon={
              <button
                aria-label="btn"
                onClick={() => showCard(0)}
                className="dot"
              ></button>
            }
          >
            <div className="data h-36" style={{ opacity: show[0] ? "1" : "0" }}>
              <h3 className="">EVENT NAME</h3>
              <h4 className="">03/08/2021</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie at egestas justo quis nibh. Turpis diam lectus viverra
                a velit quis.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: show[1] ? "grey" : "none",
              color: "white",
            }}
            contentArrowStyle={{
              borderRight: show[1] ? "7px solid  grey" : "none",
            }}
            iconStyle={{ background: "white", color: "white" }}
            icon={
              <button
                aria-label="btn"
                onClick={() => showCard(1)}
                className="dot"
              ></button>
            }
          >
            <div className="data h-36" style={{ opacity: show[1] ? "1" : "0" }}>
              <h3 className="">EVENT NAME</h3>
              <h4 className="">03/08/2021</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie at egestas justo quis nibh. Turpis diam lectus viverra
                a velit quis.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: show[2] ? "grey" : "none",
              color: "white",
            }}
            contentArrowStyle={{
              borderRight: show[2] ? "7px solid  grey" : "none",
            }}
            iconStyle={{ background: "white", color: "white" }}
            icon={
              <button
                aria-label="btn"
                onClick={() => showCard(2)}
                className="dot"
              ></button>
            }
          >
            <div className="data h-36" style={{ opacity: show[2] ? "1" : "0" }}>
              <h3 className="">EVENT NAME</h3>
              <h4 className="">03/08/2021</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie at egestas justo quis nibh. Turpis diam lectus viverra
                a velit quis.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              background: show[3] ? "grey" : "none",
              color: "white",
            }}
            contentArrowStyle={{
              borderRight: show[3] ? "7px solid  grey" : "none",
            }}
            iconStyle={{ background: "white", color: "white" }}
            icon={
              <button
                aria-label="btn"
                onClick={() => showCard(3)}
                className="dot"
              ></button>
            }
          >
            <div className="data h-36" style={{ opacity: show[3] ? "1" : "0" }}>
              <h3 className="">EVENT NAME</h3>
              <h4 className="">03/08/2021</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie at egestas justo quis nibh. Turpis diam lectus viverra
                a velit quis.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              background: show[4] ? "grey" : "none",
              color: "white",
            }}
            contentArrowStyle={{
              borderRight: show[4] ? "7px solid  grey" : "none",
            }}
            iconStyle={{ background: "white", color: "white" }}
            icon={
              <button
                aria-label="btn"
                onClick={() => showCard(4)}
                className="dot"
              ></button>
            }
          >
            <div className="data h-36" style={{ opacity: show[4] ? "1" : "0" }}>
              <h3 className="">EVENT NAME</h3>
              <h4 className="">03/08/2021</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie at egestas justo quis nibh. Turpis diam lectus viverra
                a velit quis.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              background: show[5] ? "grey" : "none",
              color: "white",
            }}
            contentArrowStyle={{
              borderRight: show[5] ? "7px solid  grey" : "none",
            }}
            iconStyle={{ background: "white", color: "white" }}
            icon={
              <button
                aria-label="btn"
                onClick={() => showCard(5)}
                className="dot"
              ></button>
            }
          >
            <div className="data h-36" style={{ opacity: show[5] ? "1" : "0" }}>
              <h3 className="">EVENT NAME</h3>
              <h4 className="">03/08/2021</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie at egestas justo quis nibh. Turpis diam lectus viverra
                a velit quis.
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
