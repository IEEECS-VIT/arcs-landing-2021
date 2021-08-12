import * as React from "react";
import Navbar from "./../components/Navbar/navbar";
import Rect from "./../images/arcsRect.png";
import Box from "./../images/arcsBox.png";
import ArcsHome from "./../images/arcsHome.png";
import Circle from "./../images/circle.png";
import comp from "./../images/card.png";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const IndexPage = () => {
  return (
    <div>
      <Navbar arcs={false} />
      <div className="">
        <img
          src={Rect}
          alt="box"
          className="box z-20 absolute mt-6 w-72 ml-28 lg:ml-60  h-64"
        />
        <img
          src={Box}
          alt="box"
          className="rect z-10 absolute mt-6 w-72 ml-32 lg:ml-64  h-64"
        />
        <img
          src={ArcsHome}
          alt="box"
          className="arcs ml-44 z-30 absolute mt-14 lg:ml-72 h-44"
        />
        <img
          alt="circle"
          src={Circle}
          className="circle z-10 absolute mt-64  ml-72 -mb-10 "
        />
        <a href="https://www.google.com/" target="_blank">
          <FaTwitter className="mt-32 ml-52 absolute" />
        </a>
        <a href="https://www.google.com/" target="_blank">
          <FaFacebook className="mt-40 ml-52 absolute" />
        </a>
        <a href="https://www.google.com/" target="_blank">
          <AiFillInstagram className="mt-48 ml-52 absolute" />
        </a>
      </div>

      <div className="block mt-96 ml-auto mr-auto w-1/2 md:mt-auto md:w-auto md:mr-12 lg:mr-44 md:float-right caption">
        <p className="font line font-semibold inline-block text-justify  text-5xl mt-4">
          Your next <br />
          Interactive <br />
          Experience
        </p>
        <p className="font text-2xl text-orange mt-2">
          VIT VELLORE, <br /> MARCH 19-21
        </p>
        <button className="relative  rounded-md bg-button px-5 py-2 mt-2">
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
