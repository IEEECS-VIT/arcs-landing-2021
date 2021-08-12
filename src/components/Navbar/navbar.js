import React from "react";
import { Link } from "gatsby";
import ieeecs from "./../../images/ieee_logo.png";
import arcs from "./../../images/arcs.png";

const navbar = () => {
  return (
    <div className="flex flex-row mt-2 ml-6 mb-2">
      <img src={ieeecs} className="w-32 h-10 mt-2" alt="ieee" />
      <div className="flex flex-col md:flex-row font-normal ml-auto mt-2  mx-auto bg-nav my-auto rounded-3xl font text-sm">
        <Link className="px-3 py-2.5  hover:bg-nav-hover rounded-3xl" to="/">
          HOME
        </Link>
        <Link
          className="px-3 py-2.5 hover:bg-nav-hover rounded-3xl"
          to="/about"
        >
          ABOUT
        </Link>
        <Link
          className="px-3 py-2.5 hover:bg-nav-hover rounded-3xl "
          to="/speakers"
        >
          SPEAKERS
        </Link>
        <Link
          className="px-3 py-2.5 hover:bg-nav-hover rounded-3xl"
          to="/timeline"
        >
          TIMELINE
        </Link>
        <Link
          className="px-3 py-2.5 hover:bg-nav-hover rounded-3xl"
          to="/events"
        >
          EVENTS
        </Link>
        <Link
          className="px-3 py-2.5 hover:bg-nav-hover rounded-3xl"
          to="/prizes"
        >
          PRIZES
        </Link>
        <Link
          className="px-3 py-2.5 hover:bg-nav-hover rounded-3xl"
          to="/sponsors"
        >
          SPONSORS
        </Link>
        <Link
          className="px-3 py-2.5 hover:bg-nav-hover rounded-3xl"
          to="/contact"
        >
          CONTACT US
        </Link>
      </div>

      <img className="ml-auto mr-10  w-14 h-12 mt-1 " src={arcs} alt="arcs" />
    </div>
  );
};

export default navbar;
