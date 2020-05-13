import React from "react";

import "./Skills.scss";
import Angular from "src/images/Angular.png";
import react from "src/images/React.png";
import Typescript from "src/images/Typescript.png";
import JS from "src/images/js.png";
import jQuery from "src/images/jQuery.png";
import JSP from "src/images/JSP.png";
import Spring from "src/images/Spring.png";
import JAVA from "src/images/JAVA.png";
import HTML from "src/images/HTML.png";
import CSS from "src/images/CSS.png";
import git from "src/images/git.png";
import SVN from "src/images/SVN.png";

function Skills() {
  return (
    <div id="skills" className="container">
      <div id="skills">
        <h1>Skills</h1>
        <div className="skills">
          <img src={Angular} alt="" />
          <img src={react} alt="" />
          <img src={Typescript} alt="" />
          <img src={JS} alt="" />
          <img src={jQuery} alt="" />
          <img src={JSP} alt="" />
          <br />
          <img src={Spring} alt="" />
          <img src={JAVA} alt="" />
          <img src={HTML} alt="" />
          <img src={CSS} alt="" />
          <img src={git} alt="" />
          <img src={SVN} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
