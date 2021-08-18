import * as React from "react";
import Navbar from "./../components/navbar";
import Rect from "./../images/arcsRect.png";
import Box from "./../images/arcsBox.png";
import ArcsHome from "./../images/arcsHome.png";
import Circle from "./../images/circle.png";
import Card from "./../components/landingCard";
import { useSpring, animated } from "react-spring";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const IndexPage = () => {
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

  return (
    <div className="-mt-4">
      <Navbar arcs={false} />
      <div className="absolute top-36 w-10 h-10  bg-pink"></div>
      <div className="absolute right-0 top-36 w-10 h-10 bg-pink"></div>
      {/* <div className="absolute right-5 bottom-0 w-8 h-14 bg-pink"></div>
      <div className="absolute left-5 bottom-0 w-8 h-14 bg-pink"></div> */}

      <animated.img
        img
        src={Rect}
        alt="box"
        style={Rectangle}
        className="rect z-10 absolute  md:ml-28 lg:ml-56  md:h-64 md:w-72"
      />

      <animated.img
        img
        src={Box}
        alt="box"
        className="box  z-5 absolute    md:ml-32 lg:ml-60  md:h-64 md:w-72"
        style={box}
      />
      <animated.img
        img
        src={ArcsHome}
        alt="box"
        className="arcs md:ml-44   absolute mt-4 lg:ml-72 md:h-44 md:w-auto"
        style={arcs}
      />
      <animated.img
        img
        alt="circle"
        src={Circle}
        className="circle  absolute  md:mt-60 md:ml-36 lg:ml-72 "
        style={Rectangle}
      />

      <a href="https://www.google.com/">
        <FaTwitter
          size={20}
          className=" icons mt-32  md:ml-20 lg:ml-48 absolute"
          style={Rectangle}
        />
      </a>

      <a href="https://www.google.com/">
        <FaFacebook
          size={20}
          className="icons  mt-40 md:ml-20 lg:ml-48 absolute"
        />
      </a>
      <a href="https://www.google.com/">
        <AiFillInstagram
          size={20}
          className="icons  mt-48 md:ml-20 lg:ml-48 absolute"
        />
      </a>

      <div className="block mt-80 ml-auto mr-auto w-1/2 md:mt-auto   md:w-auto md:mr-12 lg:mr-44 md:float-right ">
        <p className="w-min font line font-semibold text-justify text-4xl md:text-5xl  caption">
          Your next <br />
          Interactive <br />
          Experience
        </p>
        <p className="font text-xl md:text-2xl text-justify text-orange mt-2">
          VIT VELLORE, <br /> MARCH 19-21
        </p>
        <button className="relative center rounded-md  bg-orange px-5 py-2 mt-2">
          Register now
        </button>
      </div>

      <div className=" w-auto h-screen mx-5 md:mx-16 mt-20 md:space-x-7 md:h-auto md:mt-96 flex flex-col  text-justify  font  md:flex-row ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default IndexPage;
