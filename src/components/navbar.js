import React, { useState } from "react";
import { Link } from "gatsby";
import arcs from "./../images/arcs.png";

import useWindowScrollPosition from "@rehooks/window-scroll-position";

const Navbar = (props) => {
  var openClose = props.isExpanded ? "open" : "close";
  const [visible, setVisible] = useState(false);
  const changePosition = 100;
  let position = useWindowScrollPosition();
  if (position.y > changePosition && !visible) {
    setVisible(true);
  } else if (position.y <= changePosition && visible) {
    setVisible(false);
  }
  return (
    <div
      className=" top-0 w-full px-3 py-9 fixed duration-200 flex items-center justify-between flex-wrap"
      style={{
        boxShadow: visible ? "0px  2px 2px #aaa" : "",
        backgroundColor: visible ? "#FFF" : "",
        zIndex: "498",
        // position: visible ? "fixed" : "fixed",
      }}
    >
      <Link to="/">
        <img
          src={arcs}
          className="fixed w-auto h-11 -mt-5 flex items-center"
          alt="arcs"
        />
      </Link>
      <button
        className="fixed z-40 flex flex-col  right-5  btn "
        style={{ zIndex: "499" }}
        onClick={() => props.toggleExpansion(!props.isExpanded)}
      >
        <div className={openClose}></div>
        <div className={openClose}></div>
        <div className={`${openClose} flex flex-row`}>
          <div className={`${openClose} smallDiv`}></div>
          <div className={`${openClose} lgDiv`}></div>
        </div>
      </button>

      <div
        className="pr-auto nav ease-in-out duration-300 z-20 fixed font-semibold block flex flex-col h-full top-0  pt-24  right-0  bg-orange   font-mont "
        style={{
          transform: !props.isExpanded ? "translateX(110%)" : "translateX(0)",
        }}
      >
        <Link
          onClick={() => props.toggleExpansion(!props.isExpanded)}
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl "
          to="/"
        >
          HOME
        </Link>
        {/* <Link
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl"
          to="/speakers"
        >
          SPEAKERS
        </Link> */}
        {/* <Link
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl"
          to="/timeline"
        >
          TIMELINE
        </Link> */}
        <Link
          onClick={() => props.toggleExpansion(!props.isExpanded)}
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl"
          to="/events"
        >
          EVENTS
        </Link>
        {/* <Link
         onClick={() => props.toggleExpansion(!props.isExpanded)}
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl"
          to="/prizes"
        >
          PRIZES
        </Link> */}
        {/* <Link
         onClick={() => props.toggleExpansion(!props.isExpanded)}
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl "
          to="/sponsors"
        >
          SPONSORS
        </Link> */}
        <Link
          onClick={() => props.toggleExpansion(!props.isExpanded)}
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl"
          to="/contact"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
