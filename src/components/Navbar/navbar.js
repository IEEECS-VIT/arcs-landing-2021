import React from "react";
import { Link } from "gatsby";
import ieeecs from "./../../images/ieee_logo.png";
import arcs from "./../../images/arcs.png";

const navbar = (props) => {
  return (
    <div className="flex flex-row mt-2 ml-6 ">
      <img src={ieeecs} className="w-40 h-11 mt-2" alt="ieee" />
      <div className="ml-20 mt-2  bg-nav my-auto rounded-3xl py-2 font">
        <Link
          className="px-4 py-2.5  -my-1 hover:bg-nav-hover rounded-3xl"
          to="/"
        >
          Home
        </Link>
        <Link
          className="px-4 py-2.5 hover:bg-nav-hover rounded-3xl"
          to="/about"
        >
          About
        </Link>
        <Link
          className="px-4 py-2.5 hover:bg-nav-hover rounded-3xl "
          to="/speakers"
        >
          Speakers
        </Link>
        <Link
          className="px-4 py-2.5 hover:bg-nav-hover rounded-3xl"
          to="/timeline"
        >
          Timeline
        </Link>
        <Link
          className="px-4 py-2.5 hover:bg-nav-hover rounded-3xl"
          to="/events"
        >
          Events
        </Link>
        <Link
          className="px-4 py-2.5 hover:bg-nav-hover rounded-3xl"
          to="/prizes"
        >
          Prizes
        </Link>
        <Link
          className="px-4 py-2.5 hover:bg-nav-hover rounded-3xl"
          to="/sponsors"
        >
          Sponsors
        </Link>
        <Link
          className="px-4 py-2.5 hover:bg-nav-hover rounded-3xl"
          to="/contact"
        >
          Contact Us
        </Link>
      </div>

      <img className="ml-28  w-16 h-14 " src={arcs} alt="arcs" />
    </div>
  );
};

export default navbar;
