import React, { Component } from 'react';

import './Projects.scss';
import ProjectDatas from './ProjectDatas'
import angular from 'src/images/Angular.png';
import less from 'src/images/less.png';
import swagger from 'src/images/swagger.png';
import react from 'src/images/React.png';
import typescript from 'src/images/Typescript.png';
import javascript from 'src/images/js.png';
import jquery from 'src/images/jQuery.png';
import jsp from 'src/images/JSP.png';
import spring from 'src/images/Spring.png';
import java from 'src/images/JAVA.png';
import html from 'src/images/HTML.png';
import css from 'src/images/CSS.png';
import git from 'src/images/git.png';
import svn from 'src/images/SVN.png';
import maven from 'src/images/maven.png';
import oracle from 'src/images/oracle.png';
import db2 from 'src/images/oracle.png';
import android from 'src/images/android.png';
import phonegap from 'src/images/Phonegap.png';


type projectProps = { };
type projectState = { 
    projectFold:boolean, 
    projectList:Array<{
        projectName: string,
        startDate: string,
        endDate: string,
        projectDesc: string,
        myTasklist: Array<string>,
        skills: Array<any>
    }>
 };
class Projects extends Component<projectProps, projectState> {

    constructor(props: any) {
        super(props);
        this.state = {
            projectFold: true,
            projectList: ProjectDatas
        };
    }

    foldProject = () => {
        this.setState({projectFold: !this.state.projectFold});
    }
    
    render() {
        return (
            <div className="container" id="projects">
                <div  className="background-alt">
                    <h2 className="heading">Projects</h2>
                    <div>
                        <div className="projects">
                            <table className="project-list-table">
                                <colgroup>
                                    <col width="50px"></col>
                                    <col width="auto"></col>
                                </colgroup>
                                <tbody>
                                    <tr className="project-title">
                                        <td rowSpan={this.state.projectFold ? 4 : this.state.projectList.length + 1}  className="graph">
                                            <div className="graph-line"></div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    {this.state.projectList.map((project, i) => (
                                        ((this.state.projectFold && i < 3) || !this.state.projectFold) &&
                                        <tr>
                                            <td>
                                                <div className="project">
                                                    <div className="circle"></div>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td><h3>{project.projectName} <span>({project.startDate} ~ {project.endDate})</span></h3></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div>
                                                                        <ul className="projectInfo">
                                                                            <li>프로젝트 설명 : {project.projectDesc}</li>
                                                                            <li>
                                                                                담당업무<br />
                                                                                {project.myTasklist.map((task) => (
                                                                                    <div>{task}</div>
                                                                                ))}
                                                                            </li>
                                                                            {project.skills.length > 0 &&
                                                                                <li>
                                                                                    {project.skills.map((skill, j) => (
                                                                                        <img src={skill} alt=""></img>
                                                                                    ))}
                                                                                </li>
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        
                                    ))}
                                </tbody>
                            </table>
                            <button onClick={this.foldProject}>더보기</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;