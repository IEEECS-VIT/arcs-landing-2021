import * as React from "react";
import { useState } from "react";
import Navbar from "./../components/navbar";
import "../Events.scss";

import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import rec1 from "../images/rec1.png";
import rec2 from "../images/rec2.png";
import smrec2 from "../images/smrec2.png";
// import cyber from '../images/event1.png'
import Carousel from "../components/Events/eventscarousel";
// import border from "../images/border.png";

const EventPage = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const items = [
    {


      title:"HACKBATTLE '21",
      img:"event1",
      text:" HackBattle, our premier event - where participants show us what they're made of - powered by creativity, determination, and of course, coffee. Working on avenues of cutting edge technology - whether it be Machine Learning, Cloud Computing, Blockchain, IoT, AR/VR, or any other new tech - we've covered them all. "
       
    },
    {
      title:"CICADA 3302",
      img:"ux",
      text:"Based on the famous enigmatic online puzzles known as Cicada 3301, this event is IEEE – CS’s take on the unsolved mystery. Participants and their teammates will have to use skills of logic, cryptography and deduction to progress through different levels of brain-boggling conundrums."
    },
    {
      title:"CONVOKE",
      img:"event1",
      text:"Discover a world of technology and innovation that you never dreamt existed. Through CONVOKE, IEEE-CS is here to help you envision the opportunities in the tech world. Here we bring an opportunity for you to get involved with the heroes of the tech industry. Our speakers range from executives, entrepreneurs and eminent personalities from the biggest tech firms like Google, Amazon, Infosys etc."
    },
    {

      title:"HACKBATTLE '21",
      img:"event1",
      text:" HackBattle, our premier event - where participants show us what they're made of - powered by creativity, determination, and of course, coffee. Working on avenues of cutting edge technology - whether it be Machine Learning, Cloud Computing, Blockchain, IoT, AR/VR, or any other new tech - we've covered them all."
       
    },
    {
      title:"CICADA 3302",
      img:"ux",
      text:"Based on the famous enigmatic online puzzles known as Cicada 3301, this event is IEEE – CS’s take on the unsolved mystery. Participants and their teammates will have to use skills of logic, cryptography and deduction to progress through different levels of brain-boggling conundrums."
    },
    {
      title:"CONVOKE",
      img:"event1",
      text:"Discover a world of technology and innovation that you never dreamt existed. Through CONVOKE, IEEE-CS is here to help you envision the opportunities in the tech world. Here we bring an opportunity for you to get involved with the heroes of the tech industry. Our speakers range from executives, entrepreneurs and eminent personalities from the biggest tech firms like Google, Amazon, Infosys etc."
    }
  ]


  return (
    <div>
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />

      <div className="md:mt-23 mt-16 -z-1">
        <div className="fixed md:left-0 md:visible invisible">
          <img src={rec1} alt="noo" className="h-44"></img>
        </div>
        <div className="fixed md:right-48 -right-14 top-32 -z-1">
          <img src={c1} alt="noo" className="iphone5:h-24 h-32" />
        </div>
        {/* <div className="w-full flex justify-center">
          <div className="flex">
            <img
              className="opacity-0 object-scale-down w-44 sm:w-52 md:w-64 visible lg:invisible h-24 iphone5:h-20 iphone5:w-40"
              src={border}
              alt="lines"
            />
            <p
              style={{ fontFamily: "Montserrat" }}
              className="text-center font-medium ml-4 md:-mt-4 text-4xl absolute sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl"
            >
              Events
            </p>
          </div>
        </div> */}
        <p
          style={{ fontFamily: "Montserrat" }}
          className="text-center w-full font-medium md:-mt-4 text-4xl mb-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl"
        >
          Events
        </p>
        <div className="w-full text-center">
          <button
            disabled={true}
            type="button"
            className=" gradbox opacity-70 border-4 md:text-l py-2 px-3 text-base iphone5:text-sm"
          >
            COMING SOON!
          </button>
        </div>

        <Carousel items={items} active={0} />

        <div className="fixed md:top-80 left-0 -top-11 md:visible  invisible -z-1 ">
          <img src={c2} alt="noo" />
        </div>

        <div className="fixed md:left-60 md:bottom-0 md:visible invisible -z-1">
          <img src={c3} alt="noo" />
        </div>
        <div className="fixed md:right-96 md:bottom-2 md:left-auto bottom-6 left-8 -z-1 ">
          <img src={c4} alt="noo" className="h-auto iphone5:h-12" />
        </div>
        <div className="fixed md:right-0 md:bottom-0 md:visible invisible -z-1 ">
          <img src={rec2} alt="noo" className="h-44 "></img>
        </div>

        <div className="fixed right-0 bottom-0 md:invisible visible -z-1 ">
          <img src={smrec2} alt="noo" className="h-32 iphone5:h-24"></img>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
