import * as React from "react";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { ImLocation, ImPhoneHangUp } from "react-icons/im";
import Navbar from "./../components/navbar";
import Rectangles from "./../components/rectangle";
import "../Events.scss";
// import border from "../images/border.png";
const ContactPage = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  var Blur = isExpanded ? "change-opacity" : "none";
  return (
    <div className="pt-3 select-none">
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      <Rectangles />

      <div className={`container lg:mt-14 mt-5 mx-auto  ${Blur}`}>
        <center>
          {/* <div className="w-full flex justify-center">
            <div className="flex">
              <img
                className="object-scale-down w-44 sm:w-52 md:w-64 lg:w-80 xl:w-96 h-24"
                src={border}
                alt="lines"
              />
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-center text-2xl absolute sm:text-5xl md:text-2xl lg:text-3xl ml-8 mt-4 md:ml-16 mb-0 lg:ml-24 xl:ml-32 "
              >
                Contact Us
              </p>
            </div>
          </div> */}
          <p
            style={{ fontFamily: "Montserrat" }}
            className="text-center w-full font-medium md:-mt-4 text-4xl mb-10 sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl"
          >
            Contact Us
          </p>
        </center>
        <br></br>

        <div className="grid grid-cols-1 md:grid-cols-2 md:mb-4 lg:px-28 md:px-10 lg:mt-14">
          <div className="xl:px-20 md:px-2 md:order-first order-last pr-0 pl-20 md:pl-10 lg:mb-8 -ml-4 contactbox">
            <p className="text-sm lg:text-xl ">
              <span className="env  ">
                <ImLocation
                  style={{
                    display: "inline",
                    fontSize: "1.5rem",
                    fill: "white",
                  }}
                />
              </span>{" "}
              &nbsp; VIT, Vellore
            </p>
            <br></br>
            <br></br>
            <p className="text-sm lg:text-xl ">
              <span className="env ">
                <FaEnvelope
                  style={{
                    display: "inline",
                    fontSize: "1.5rem",
                    fill: "white",
                  }}
                />
              </span>
              &ensp; ieeecs@vit.ac.in
            </p>
            <br></br>
            <br></br>
            <div className="text-sm lg:text-xl flex flex-none items-top">
              <div>
                <span className="env">
                  <ImPhoneHangUp
                    style={{
                      display: "inline",
                      fontSize: "1.5rem",
                      fill: "white",
                    }}
                  />
                </span>
              </div>
              &nbsp;
              <div>
                <p>+91-9509995499</p>
                <p>+91-9354217705</p>
              </div>
            </div>
          </div>

          <div className="place-self-center ">
            <form>
              <input
                className=" flex justify-center bginput bg-gray-100 rounded p-3 md:p-4 md:w-96 md:mx-auto lg:leading-4 text-gray-400 w-72  leading-3 lg:text-l text-sm"
                type="name"
                placeholder="NAME"
              ></input>
              <br></br>

              <input
                className="flex justify-center bginput bg-gray-100 rounded p-3 md:p-4 md:w-96 md:mx-auto lg:leading-4 text-gray-400 w-72 leading-3 lg:text-l text-sm"
                type="email"
                placeholder="EMAIL"
              ></input>
              <br></br>

              <textarea
                className=" flex justify-center bginput bg-gray-100 rounded p-3 md:p-4 md:w-96 md:mx-auto lg:leading-4 text-gray-400 w-72  leading-3 lg:text-l text-sm"
                placeholder="MESSAGE"
                rows="4"
              ></textarea>
              <br></br>

              <button
                type="button"
                className="submitButton relative leading-3 mx-0 my-0 h-8 md:w-96 rounded-3xl text-center w-72"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
