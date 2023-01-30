import React from "react";
import "./Footer.css";
// import Wave from "../../img/wave.png";
import Wave1 from "../../img/wave1.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Fiverr from "../../img/fiverr.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave1} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>freelancer.khalid23@gmail.com</span>
        <div className="f-icons">
        <a href="https://github.com/khalid-akhss19" target="_blank">
          <Gitub color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/services/page/8a805831a2169b83a4/" target="_blank">
          <LinkedIn color="white" size={"3rem"} /></a>
          <a href="https://www.fiverr.com/share/xqxVpx" target="_blank">
          <Insta color="white" size={"3rem"} /></a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
