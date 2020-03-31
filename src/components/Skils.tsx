import React from 'react';
import styled from 'styled-components';
import Angular from '../images/Angular.png';
import react from '../images/React.png';
import Typescript from '../images/Typescript.png';
import JS from '../images/js.png';
import jQuery from '../images/jQuery.png';
import JSP from '../images/JSP.png';
import Spring from '../images/Spring.png';
import JAVA from '../images/JAVA.png';
import HTML from '../images/HTML.png';
import CSS from '../images/CSS.png';
import git from '../images/git.png';
import SVN from '../images/SVN.png';


const SkillsContainer = styled.nav`
  text-align: center;
    min-height: 300px;
    margin: 150px 30px 30px 30px;
    box-shadow: 0 2px 0 0 #f5f5f5;
`;
function Skills() {
  const imgStyle={
    height:"100px"
  }
    
  return (
    <SkillsContainer>
      <div id="skills">
        <h2 className="heading">Skills</h2>
        <div className="info-list">
					<img src={Angular} alt="" style={imgStyle}/>
					<img src={react} alt=""/>
					<img src={Typescript} alt=""/>
					<img src={JS} alt=""/>
					<img src={jQuery} alt=""/>
					<img src={JSP} alt=""/>
					<br />
					<img src={Spring} alt=""/>
					<img src={JAVA} alt=""/>
					<img src={HTML} alt=""/>
					<img src={CSS} alt=""/>
					<img src={git} alt=""/>
					<img src={SVN} alt=""/>
				</div>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Ruby</li>
          <li>Go</li>
          <li>Node.js</li>
          <li>AngularJs</li>
          <li>React</li>
          <li>Elixir</li>
          <li>Java</li>
          <li>C</li>
          <li>C#</li>
          <li>C++</li>
          <li>Ruby on Rails</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Ruby</li>
          <li>Go</li>
          <li>Node.js</li>
          <li>AngularJs</li>
          <li>React</li>
          <li>Elixir</li>
          <li>Java</li>
          <li>C</li>
          <li>C#</li>
          <li>C++</li>
          <li>Ruby on Rails</li>
        </ul>
      </div>
    </SkillsContainer>
  );
}

export default Skills;
