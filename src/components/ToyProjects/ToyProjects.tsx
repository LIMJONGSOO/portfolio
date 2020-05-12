import React, { Component } from "react";

import "./ToyProjects.scss";
import ProjectDatas from "./ToyProjectDatas";

type projectProps = {};
type projectState = {
  projectList: Array<{
    projectName: string;
    date: string;
    projectDesc: Array<string>;
    url: string;
    image: any;
  }>;
};
class ToyProjects extends Component<projectProps, projectState> {
  constructor(props: any) {
    super(props);
    this.state = {
      projectList: ProjectDatas,
    };
  }

  clickToyProject(url: string) {
    window.open(url, "_blank");
  }

  render() {
    return (
      <div className="container" id="toyprojects">
        <div className="background-alt">
          <h2 className="heading">
            ToyProjects (총 {this.state.projectList.length}개)
          </h2>
          <div>
            <div className="toyprojects">
              {this.state.projectList.map(
                (project, i) => (
                  <div key={i} className="ogType" onClick={()=> this.clickToyProject(project.url)}>
                    <div className="image">
                      <img src={project.image} alt={project.projectName}/>
                    </div>
                    <div className="text">
                      <div className="title">{project.projectName}({project.date})</div>
                      <div className="desc">
                        {project.projectDesc.map(
                          (desc) => (
                            <div>{desc}</div>
                          )
                        )}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToyProjects;
