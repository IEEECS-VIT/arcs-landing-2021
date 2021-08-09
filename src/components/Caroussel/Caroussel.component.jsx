import React from "react";
import M from "materialize-css";
import "./Caroussel.style.scss";

export default function Caroussel() {
  return (
      <div class="carousel">
        <a class="carousel-item" href="#one!">
          <img
            src="https://lorempixel.com/250/250/nature/1"
            alt="carousel-img1"
          />
        </a>
        <a class="carousel-item" href="#two!">
          <img
            src="https://lorempixel.com/250/250/nature/2"
            alt="carousel-img2"
          />
        </a>
        <a class="carousel-item" href="#three!">
          <img
            src="https://lorempixel.com/250/250/nature/3"
            alt="carousel-img3"
          />
        </a>
        <a class="carousel-item" href="#four!">
          <img
            src="https://lorempixel.com/250/250/nature/4"
            alt="carousel-img4"
          />
        </a>
        <a class="carousel-item" href="#five!">
          <img
            src="https://lorempixel.com/250/250/nature/5"
            alt="carousel-img5"
          />
        </a>
      </div>
  );
}
