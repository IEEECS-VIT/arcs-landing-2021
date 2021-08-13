import * as React from "react";
import Navbar from "./../components/Navbar/navbar";
import Rect from "./../images/arcsRect.png";
import Box from "./../images/arcsBox.png";
import ArcsHome from "./../images/arcsHome.png";
import Circle from "./../images/circle.png";
import comp from "./../images/card.png";
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
    from: { transform: "translate(0,-100%)" },
    to: { transform: "translate(0,1%)" },
    config: { duration: 700, delay: 200 },
    loop: false,
  });

  return (
    <div>
      <Navbar arcs={false} />
      <div className="absolute top-36 w-10 h-12  bg-pink"></div>
      <div className="absolute right-0 top-36 w-10 h-12 bg-pink"></div>
      <div className="absolute right-5 bottom-0 w-9 h-16 bg-pink"></div>
      <div className="absolute left-5 bottom-0 w-9 h-16 bg-pink"></div>
      <div className="relative">
        <animated.img
          img
          src={Rect}
          alt="box"
          style={Rectangle}
          className="rect z-10 absolute mt-6 md:w-72 md:ml-28 lg:ml-60  md:h-64"
        />

        <animated.img
          img
          src={Box}
          alt="box"
          className="box 0 z-5 absolute   mt-6 md:w-72 md:ml-32 lg:ml-64  md:h-64"
          style={box}
        />
        <animated.img
          img
          src={ArcsHome}
          alt="box"
          className="arcs md:ml-44   absolute mt-14 lg:ml-72 md:h-44"
          style={arcs}
        />
        <animated.img
          img
          alt="circle"
          src={Circle}
          className="circle  absolute  md:mt-64 md:ml-36 lg:ml-72 "
          style={Rectangle}
        />

        <a href="https://www.google.com/" target="_blank">
          <FaTwitter
            size={20}
            className=" icons mt-32  md:ml-20 lg:ml-52 absolute"
            style={Rectangle}
          />
        </a>

        <a href="https://www.google.com/" target="_blank">
          <FaFacebook
            size={20}
            className="icons  mt-40 md:ml-20 lg:ml-52 absolute"
          />
        </a>
        <a href="https://www.google.com/" target="_blank">
          <AiFillInstagram
            size={20}
            className="icons  mt-48 md:ml-20 lg:ml-52 absolute"
          />
        </a>
      </div>

      <div className="block mt-80 ml-auto mr-auto w-1/2  md:mt-auto md:w-auto md:mr-12 lg:mr-56  md:float-right ">
        <p className=" font line font-semibold text-justify text-4xl md:text-5xl pt-2 caption">
          Your next <br />
          Interactive <br />
          Experience
        </p>
        <p className="font text-2xl text-justify text-orange mt-2">
          VIT VELLORE, <br /> MARCH 19-21
        </p>
        <button className="relative center rounded-md  bg-orange px-5 py-2 mt-2">
          Register now
        </button>
      </div>

      <div className="mx-16 flex flex-col mt-5 text-justify md:mt-96 font text-sm md:flex-row ">
        <div className="px-2 m-4  h-auto  border-4 grad  md:h-auto md:w-screen md:m-2 md:pb-3 lg:h-auto ">
          <p className="font-semibold">Hackbattle</p>
          <img
            src={comp}
            className="h-20 w-16 lg:h-16 lg:w-12 float-left inline-block ml-2"
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </div>
        <div className="p-3  m-4 h-auto  border-4 grad  md:h-auto md:w-screen md:-mt-5">
          <p className="font-semibold">Hackbattle</p>
          <img src={comp} className="h-20 w-16 float-left inline-block ml-2" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </div>
        <div className="px-2 m-4  h-auto  border-4 grad md:m-2 md:pb-3 md:h-auto md:w-screen lg:h-auto ">
          <p className="font-semibold">Hackbattle</p>
          <img
            src={comp}
            className="h-20 w-16 lg:h-16 lg:w-12 float-left inline-block ml-2"
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
