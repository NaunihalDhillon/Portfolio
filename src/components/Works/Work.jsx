import React, {useContext} from "react";
import "./Work.css";
import {themeContext} from "../../Context";

import Upwork from "../..//img/Upwork.png";
import Fiverr from "../..//img/fiverr.png";
import Amazon from "../..//img/amazon.png";
import Facebook from "../..//img/Facebook.png";
import Shopify from "../..//img/Shopify.png";

const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{color: darkMode ? "white" : ""}}>Worked with</span>
        <span>Brands & Clients</span>
        <span style={{color: darkMode ? "white" : ""}}>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printingLorem ispum is simpley dummy
          text
          <br />
          y dummy text of printingLorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <button className="button s-button">Hire Me</button>
        <div
          className="blur s-blur1"
          style={{backgroundColor: "#abf1ff94"}}
        ></div>
      </div>

      {/* Right Side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Fiverr" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
