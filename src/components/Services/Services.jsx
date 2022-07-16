import React, {useContext} from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume-naunihal.pdf";
import {themeContext} from "../../Context";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{color: darkMode ? "white" : ""}}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> voluptates tempora voluptatem ipsam pariatur
          <br /> Tenetur earum ipsam sed esse, incidunt nisi
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{backgroundColor: "#abf1ff94"}}
        ></div>
      </div>

      {/* Right Side */}
      <div className="cards">
        <div style={{left: "14rem"}}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            details={"Figma, Sketch, Photoshop, Adobe"}
          />
        </div>

        {/* Second Card */}

        <div style={{top: "12rem"}}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            details={"HTML, Css, Javascript, React"}
          />
        </div>
        {/* Third Card */}

        <div style={{top: "19rem", left: "17rem"}}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            details={"lorem ipsum dolor sit amet consectetur adipisicing elit"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{background: "var(--purple)"}}
        ></div>
      </div>
    </div>
  );
};

export default Services;
