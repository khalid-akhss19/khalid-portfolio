import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/boy.png";
import boy1 from "../../img/by.png";
import boy2 from "../../img/khalid.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkdn.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import { Typewriteskill } from "../Typewriteskill/index"
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div>
          <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Khalid Hussain </span>
       
            <span className="typewtr">
            {/* <h1 className="fluidz-48 mb-1x"> */}
            {/* <Typewriteskill/> </h1> */}
            </span>
            
          
         <span>
            As a highly experienced Frontend Developer, I specialize  in <br/> web design and development, consistently delivering high-quality work.
          </span> 
        </div>
        </div>
        <div></div>
        
        {/* <Link to="contact" smooth={true} spy={true}> */}
        <a href="https://www.upwork.com/freelancers/~019a116eae5f9c5485" target="_blank">
          <button className="button i-button">Hire Me</button> </a>
        {/* </Link> */}
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/khalid-akhss19" target="_blank"> 
          <img src={Github} alt="khalid github link" />  </a> 
          <a href="https://www.linkedin.com/in/front-end-react-dev/" target="_blank">
          <img src={LinkedIn} alt=" khalid web dev linkdin"  />   </a>
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" /> */}
        <img src={boy2} alt="" />
        {/* <img src="" alt="" /> */}
        {/* animation */}
        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        /> */}

        {/* <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="React.js" text2="Dev" />
        </motion.div> */}

        {/* animation */}
        {/* <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        > */}
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="Front End" text2="Dev" />
        </motion.div> */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
