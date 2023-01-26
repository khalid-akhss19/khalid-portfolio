import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import linkdn from "../../img/linkdn.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Platforms to Hire me
          </span>
          <span>Marketpalces are: </span>
          <spane>
            {/* Lorem ispum is simpley dummy text of printing of printing Lorem */}
            <a href="https://www.upwork.com/freelancers/~019a116eae5f9c5485" target="_blank" className="linkeror">
            Upwork.com </a>
            <br /><br/>
            {/* ispum is simpley dummy text of printingLorem ispum is simpley dummy */}
            <a href="https://www.fiverr.com/share/RQZa9R" target="_blank" className="linkeror">
            Fiver.com </a>
            <br /><br/>
            {/* y dummy text of printingLorem */}
            <a href="https://www.linkedin.com/services/page/8a805831a2169b83a4/" target="_blank" className="linkeror">
            Linkdin.com </a>
            <br />
            {/* ispum is simpley dummy text of printing */}
          </spane>
          <a href="https://www.upwork.com/freelancers/~019a116eae5f9c5485" target="_blank" className="linkeror">
          
            <button className="button s-button">Hire Me</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <a href="https://www.upwork.com/freelancers/~019a116eae5f9c5485" target="_blank">
          <div className="w-secCircle">
          
            <img src={Upwork} alt="" /> 
          </div> </a>
          <a href="https://www.fiverr.com/share/RQZa9R" target="_blank">
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div> </a>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <a href="https://www.linkedin.com/services/page/8a805831a2169b83a4/" target="_blank">
          <div className="w-secCircle">
            <img src={linkdn} alt="" />
          </div> </a>
          <a href="https://www.fiverr.com/share/xqxVpx" target="_blank">
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div> </a>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
