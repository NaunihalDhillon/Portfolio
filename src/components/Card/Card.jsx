import React, {useContext} from "react";
import "./card.css";
import {themeContext} from "../../Context";

const Card = ({emoji, heading, details, color}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="card"
      style={{
        borderColor: {color},
        color: darkMode ? "white" : "",
        backgroundColor: darkMode ? "#141616" : "",
        opacity: "0.8",
      }}
    >
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span style={{color: darkMode ? "white" : ""}}>{details}</span>
      <button className="c-button">Learn More</button>
    </div>
  );
};

export default Card;
