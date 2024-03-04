import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1> We ensure better education for better world</h1>
        <p>
          our cutting edge curriculam is designed to empower students with the
          knowledge, skills, and experience needed to excel in dynamic field of
          education
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
