import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-img" />
      </div>
      <div className="about-right">
        <h3>About university</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
          aliquet tortor, sit amet lacinia magna convallis sed. Integer eget
          ligula arcu. Ut sed velit vel libero tristique efficitur.
        </p>
        <p>
          Nulla facilisi. Fusce sodales ultrices sem, at consequat ipsum lacinia
          sed. Vestibulum sit amet aliquam justo. Suspendisse potenti. Duis vel
          lacinia nulla.
        </p>
        <p>
          Phasellus pharetra massa nec risus efficitur, vitae eleifend orci
          rhoncus. Cras accumsan ligula vel turpis feugiat, in vehicula urna
          convallis. Integer malesuada nec risus vel commodo.
        </p>
      </div>
    </div>
  );
};

export default About;
