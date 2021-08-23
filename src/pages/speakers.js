import React, { Component } from "react";
// import Caroussel from "../components/Caroussel/Caroussel.component";
import { CoverSpeaker } from "../components/CoverSpeaker/CoverSpeaker";


export default class Speakers extends Component {
  constructor() {
    super();

    this.state = [
      {
        id: 1,
        title: "UI/UX",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
      },
      {
        id: 2,
        title: "WebDev",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
      },
      {
        id: 3,
        title: "Android",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
      },
      {
        id: 4,
        title: "iOS",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
      },
      {
        id: 5,
        title: "IOT",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
      },
      {
        id: 6,
        title: "Machine Learning",
        description:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
      },
    ];
  }

  render() {
    return (
      <div>
        <CoverSpeaker title="Speakers" />
        {/* <Caroussel /> */}
      </div>
    );
  }
}
