import React, { useState } from "react";
import { Link } from "gatsby";
import { FaTimes } from "react-icons/fa";
import arcs from "./../images/arcs.png";
import button from "./../images/hamburger.png";

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  var openClose = isExpanded ? "open" : "close";
  return (
    <div className="mt-14 mb-5 ml-3  flex items-center justify-between flex-wrap">
      <img
        src={arcs}
        className="fixed block lg:w-14 h-12  flex items-center"
        alt="arcs"
      />

      <button
        className="fixed z-30 flex flex-col  right-5  btn"
        onClick={() => toggleExpansion(!isExpanded)}
      >
        <div className={openClose}></div>
        <div className={openClose}></div>
        <div className={`${openClose} flex flex-row`}>
          <div className={`${openClose} smallDiv`}></div>
          <div className={`${openClose} lgDiv`}></div>
        </div>
      </button>

      <div
        className="pr-auto  nav ease-in-out duration-300 z-20 fixed  block flex flex-col  h-full top-0  pt-24  right-0  bg-orange font-semibold  font "
        style={{
          transform: !isExpanded ? "translateX(100%)" : "translateX(0)",
        }}
      >
        <Link
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl "
          to="/"
        >
          HOME
        </Link>
        <Link
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl"
          to="/about"
        >
          ABOUT
        </Link>
        <Link
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl"
          to="/speakers"
        >
          SPEAKERS
        </Link>
        <Link
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl"
          to="/timeline"
        >
          TIMELINE
        </Link>
        <Link
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl"
          to="/events"
        >
          EVENTS
        </Link>
        <Link
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl"
          to="/prizes"
        >
          PRIZES
        </Link>
        <Link
          className="py-4 px-16  text-center hover:bg-light-orange rounded-3xl "
          to="/sponsors"
        >
          SPONSORS
        </Link>
        <Link
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
