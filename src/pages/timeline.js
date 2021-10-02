import React, { useState } from "react";
import circles from "./../images/cardbackground.png";
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
    <div className="w-full lg:overflow-y-hidden h-screen -mt-5">
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      <div className="mt-5 lg:mt-44 ">
        <VerticalTimeline layout={"1-column-right"} animate="false">
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              backgroundImage: show[0] ? `url(${circles})` : "none",
              zIndex: show[0] ? "40" : "10",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "white",
              transform: "rotate(90deg) translateY(50px)",
              width: "260px",
            }}
            contentArrowStyle={{
              visibility: show[0] ? "visible" : "hidden",
              borderRight: "7px solid gray",
            }}
            iconStyle={{
              background: "white",
              color: "white",
            }}
            icon={
              <button
                aria-label="btn"
                onClick={() => showCard(0)}
                className="dot"
              ></button>
            }
          >
            <div className="data " style={{ opacity: show[0] ? "1" : "0" }}>
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
              backgroundImage: show[1] ? `url(${circles})` : "none",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "white",
              transform: "rotate(90deg) translateY(50px)",
              width: "260px",
              zIndex: show[1] ? "40" : "10",
            }}
            contentArrowStyle={{
              visibility: show[1] ? "visible" : "hidden",
              borderRight: "7px solid gray",
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
            <div className="data " style={{ opacity: show[1] ? "1" : "0" }}>
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
              backgroundImage: show[2] ? `url(${circles})` : "none",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "white",
              transform: "rotate(90deg) translateY(50px)",
              width: "260px",
              zIndex: show[2] ? "40" : "10",
            }}
            contentArrowStyle={{
              visibility: show[2] ? "visible" : "hidden",
              borderRight: "7px solid gray",
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
            <div className="data" style={{ opacity: show[2] ? "1" : "0" }}>
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
              backgroundImage: show[3] ? `url(${circles})` : "none",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "white",
              transform: "rotate(90deg) translateY(50px)",
              width: "260px",
              zIndex: show[3] ? "40" : "10",
            }}
            contentArrowStyle={{
              visibility: show[3] ? "visible" : "hidden",
              borderRight: "7px solid gray",
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
            <div className="data " style={{ opacity: show[3] ? "1" : "0" }}>
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
              backgroundImage: show[4] ? `url(${circles})` : "none",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "white",
              transform: "rotate(90deg) translateY(50px)",
              width: "260px",
              zIndex: show[4] ? "40" : "10",
            }}
            contentArrowStyle={{
              visibility: show[4] ? "visible" : "hidden",
              borderRight: "7px solid gray",
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
            <div className="data " style={{ opacity: show[4] ? "1" : "0" }}>
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
              backgroundImage: show[5] ? `url(${circles})` : "none",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "white",
              transform: "rotate(90deg) translateY(50px)",
              width: "260px",
              zIndex: show[5] ? "40" : "10",
            }}
            contentArrowStyle={{
              visibility: show[5] ? "visible" : "hidden",
              borderRight: "7px solid gray",
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
            <div className="data " style={{ opacity: show[5] ? "1" : "0" }}>
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
