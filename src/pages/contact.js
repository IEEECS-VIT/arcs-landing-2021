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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  var Blur = isExpanded ? "change-opacity" : "none";

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const response = fetch(
      "https://arcs-backend-c3x0ipokb-vidipt-khetriwal.vercel.app/" +
        "/message",
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
        }),
      }
    );
    // const content = response.json();
    console.log(response);
  };
  return (
    <div className="pt-3 select-none">
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      <Rectangles />

      <div className={`container lg:mt-14 mt-5 mx-auto  ${Blur}`}>
        <center>
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
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <input
                className=" flex justify-center bginput bg-gray-100 rounded p-3 md:p-4 md:w-96 md:mx-auto lg:leading-4 text-gray-400 w-72  leading-3 lg:text-l text-sm"
                type="name"
                placeholder="NAME"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
              <br></br>

              <input
                className="flex justify-center bginput bg-gray-100 rounded p-3 md:p-4 md:w-96 md:mx-auto lg:leading-4 text-gray-400 w-72 leading-3 lg:text-l text-sm"
                type="email"
                placeholder="EMAIL"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <br></br>

              <textarea
                className=" flex justify-center bginput bg-gray-100 rounded p-3 md:p-4 md:w-96 md:mx-auto lg:leading-4 text-gray-400 w-72  leading-3 lg:text-l text-sm"
                placeholder="MESSAGE"
                rows="4"
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              <br></br>

              <button
                type="submit"
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
