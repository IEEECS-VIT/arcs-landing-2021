import React, { useState } from "react";
import { Link } from "gatsby";
import { FaTimes } from "react-icons/fa";
import arcs from "./../images/arcs.png";
import button from "./../images/hamburger.png";

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <div className="mt-2 ml-3  flex items-center justify-between flex-wrap">
      <img
        src={arcs}
        className=" lg:w-14 h-12 mt-5 flex items-center"
        alt="arcs"
      />
      <div className="z-30 block fixed top-3 right-3">
        <button
          className=" flex float:right  px-3 py-2 "
          onClick={() => toggleExpansion(!isExpanded)}
        >
          {!isExpanded && <img src={button} alt="ham" />}
          {isExpanded && <FaTimes size={40} />}
        </button>
      </div>
      <div
        className="pr-auto px-16 nav ease-in-out duration-300 z-20 fixed  block flex flex-col  h-full top-0  pt-24  right-0  bg-orange font-semibold  font "
        style={{
          transform: !isExpanded ? "translateX(100%)" : "translateX(0)",
        }}
      >
        <Link
          className="py-4 text-center hover:bg-light-orange rounded-3xl "
          to="/"
        >
          HOME
        </Link>
        <Link
          className="py-4 text-center hover:bg-light-orange rounded-3xl"
          to="/about"
        >
          ABOUT
        </Link>
        <Link
          className="py-4  text-center hover:bg-light-orange rounded-3xl"
          to="/speakers"
        >
          SPEAKERS
        </Link>
        <Link
          className="py-4  text-center hover:bg-light-orange rounded-3xl"
          to="/timeline"
        >
          TIMELINE
        </Link>
        <Link
          className="py-4  text-center hover:bg-light-orange rounded-3xl"
          to="/events"
        >
          EVENTS
        </Link>
        <Link
          className="py-4  text-center hover:bg-light-orange rounded-3xl"
          to="/prizes"
        >
          PRIZES
        </Link>
        <Link
          className="py-4  text-center hover:bg-light-orange rounded-3xl "
          to="/sponsors"
        >
          SPONSORS
        </Link>
        <Link
          className="py-4  text-center hover:bg-light-orange rounded-3xl"
          to="/contact"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
