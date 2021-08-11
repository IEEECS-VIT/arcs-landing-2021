import * as React from "react";
import Navbar from "./../components/Navbar/navbar";
import Box from "./../images/arcsBox.png";
import Rect from "./../images/arcsRect.png";
import ArcsHome from "./../images/arcsHome.png";
import Circle from "./../images/circle.png";
import comp from "./../images/card.png";
const IndexPage = () => {
  return (
    <div>
      <Navbar arcs={false} />

      <img
        src={Box}
        alt="box"
        className="box z-20 absolute mt-6 w-72 ml-36 lg:ml-64  h-64"
      />
      <img
        src={Rect}
        alt="box"
        className="rect z-10 absolute mt-6 w-72 ml-36 lg:ml-64  h-64"
      />
      <img
        src={ArcsHome}
        alt="box"
        className="arcs ml-44 z-30 absolute mt-14 lg:ml-80 h-44"
      />
      <img src={Circle} className="circle z-10 absolute mt-64  ml-72 -mb-10 " />
      <p className="font line font-semibold inline-block  float-right text-justify mr-20  text-5xl lg:mr-72 mt-4">
        Your next <br />
        Interactive <br />
        Experience
      </p>
      <p className="font float-right mt-44 text-2xl -mr-44 text-orange">
        VIT VELLORE, <br /> MARCH 19-21
      </p>
      <button className="relative mt-64 float-right -mr-36 rounded-md bg-button px-5 py-2">
        Register now
      </button>

      <div className="mt-5 mx-16 flex flex-col  text-justify mt-96 font text-sm md:flex-row ">
        <div className="px-2 m-4  h-32 w-4/8 border-4 grad  md:h-auto md:w-screen md:m-2 md:pb-3 lg:h-32 lg:w-3/8">
          <p className=" font-semibold">Hackbattle</p>
          <img
            src={comp}
            className="h-20 w-16 lg:h-16 lg:w-12 float-left inline-block ml-2"
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </div>
        <div className="p-3  m-4 h-32 w-4/8 border-4 grad  md:h-auto md:w-screen md:-mt-5">
          <p className="font-semibold">Hackbattle</p>
          <img src={comp} className="h-20 w-16 float-left inline-block ml-2" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </div>
        <div className="px-2 m-4  h-32 w-4/8 border-4 grad md:m-2 md:pb-3 md:h-auto md:w-screen lg:h-32 lg:w-3/8">
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
