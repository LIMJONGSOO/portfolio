import React from "react";
import "./AboutMe.scss";
import me from "src/images/limjs.jpg";

function AboutMe() {
  return (
    <div id="about" className="container">
      <div className="row">
        <div className="col-md-4">
          <h2 className="heading">About Me</h2>
        </div>
        <div className="col-md-8">
          <img className="me" src={me} alt="jslim"></img>
          <p>
            6년차 웹 개발자입니다. <br />
            주로 Springframework 기반의 웹 개발 프로젝트를 참여하였으며,
            최근에는 Angular6 를 기반으로 프론트엔드 개발을 담당하였습니다.
            <br />
            회사의 프로젝트 외에도 개인적으로 ES6, React에 관심을 가지고
            자기개발을 하고있고,
            <br />
            최적의 알고리즘으로 코딩하기 위해 'programmers'와 서적을 통해
            알고리즘 공부를 하고 있습니다.
            <br />
            개발자지만 다양한 항공사의 프로젝트를 진행하며 전문적인 항공업무를
            파악을 하여 개발하였습니다.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
