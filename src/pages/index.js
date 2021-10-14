import React, { useState } from "react";
import { Link } from "gatsby";
import Navbar from "./../components/navbar";
import Rect from "./../images/arcsRect.png";
import Box from "./../images/arcsBox.png";
import ArcsHome from "./../images/arcsHome.png";
import Circle from "./../images/circle.png";
import Card from "./../components/landingCard";
import { useSpring, animated } from "react-spring";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Rectangles from "./../components/rectangle";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import scrollTo from "gatsby-plugin-smoothscroll";

const IndexPage = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const Rectangle = useSpring({
    from: { transform: "translate(-90%,0)" },
    to: { transform: "translate(2%,0)" },
    config: { duration: 500 },
    loop: false,
  });

  const box = useSpring({
    from: { transform: "translate(0,-90%)" },
    to: { transform: "translate(0,1.5%)" },
    config: { duration: 500 },
    loop: false,
  });

  const arcs = useSpring({
    from: { transform: "translate(0,-90%)" },
    to: { transform: "translate(0,1.5%)" },
    config: { duration: 600 },
    loop: false,
  });
  const social = useSpring({
    from: { transform: "translate(-100px,0)" },
    to: { transform: "translate(2%,0)" },
    config: { duration: 600 },
    loop: false,
  });
  var Blur = isExpanded ? "change-opacity" : "none";
  return (
    <div className="pt-16">
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      <Rectangles />
      <div className={`absolute w-full z-5 ${Blur}`}>
        <animated.img
          src={Rect}
          alt="box"
          style={Rectangle}
          className="rect z-10 absolute  md:ml-28 lg:ml-60  md:h-64 md:w-72 lg:mt-4"
        />

        <animated.img
          src={Box}
          alt="box"
          className="box  z-5 absolute    md:ml-32 lg:ml-64  md:h-64 md:w-72 "
          style={box}
        />
        <animated.img
          src={ArcsHome}
          alt="box"
          className="arcs md:ml-44   absolute mt-4 lg:ml-72 md:h-48 md:w-auto"
          style={arcs}
        />
        <animated.img
          alt="circle"
          src={Circle}
          className="circle  absolute  md:mt-60 lg:mt-64  md:ml-36 lg:ml-72 "
          style={Rectangle}
        />
        <animated.div
          style={social}
          className="icons absolute w-5 ml-14 md:ml-20 lg:ml-48 mt-36 space-y-3 flex flex-col"
        >
          <a href="https://twitter.com/ieeecsvit">
            <FaTwitter size={20} className=" block" />
          </a>

          <a href="https://www.facebook.com/ieeecsvit">
            <FaFacebook size={20} className=" block" />
          </a>
          <a href="https://www.instagram.com/ieeecs_vit/">
            <AiFillInstagram size={20} className="block " />
          </a>
        </animated.div>

        <div className="max-xs:h-3/5 max-xs:pb-12 sm:mb-48 md:mb-2 caption-div block mt-80 ml-auto mr-auto w-1/2 md:mt-auto md:w-auto md:mr-12 lg:mr-44 md:float-right ">
          <p className=" leading-tight w-min font-mont line font-semibold text-justify text-4xl md:text-5xl  md:leading-tight caption">
            Your Next <br />
            Interactive <br />
            Experience
          </p>
          <p className="font-mont subcaption text-xl md:text-2xl text-justify text-orange mt-2">
            VIT VELLORE, <br />
            26-28 NOVEMBER
          </p>
          <button
            disabled={true}
            className="font-mont opacity-70 font-bold relative center rounded-md  bg-orange px-5 py-2 mt-2"
          >
            Coming Soon!
          </button>
          <button
            onClick={() => scrollTo("#cards")}
            className="md:hidden w-full cta flex justify-center pt-10"
          >
            <IoChevronDownCircleOutline size="50px" color="#fcc48b" />
          </button>
        </div>

        <div
          id="cards"
          className="max-xs:h-3/5 sm:mt-20 sm:pt-10 md:pt-20 md:mt-80 flex font-mont mx-auto lg:mx-20 flex-wrap justify-around "
        >
          <Link to="/events">
            <Card />
          </Link>
          <Link to="/events">
            <Card />
          </Link>
          <Link to="/events">
            <Card />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
