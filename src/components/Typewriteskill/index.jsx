import React from "react";
import "./style.css";
import Typewriter from "typewriter-effect";

import { introdata, meta } from "../../content_option"



export const Typewriteskill = () => {
  return (
        <div className="zerone ">
                <h1 className="heading1">
                  <Typewriter
                 
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
        </div>
    
      
    
  );
};
