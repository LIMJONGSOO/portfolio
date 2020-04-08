import React, { Component } from 'react';

import './Projects.scss';
import ProjectDatas from './ProjectDatas'
import fold from 'src/images/fold.png';
import unfold from 'src/images/unfold.png';

type projectProps = { };
type projectState = { 
    projectFold:boolean, 
    foldButtonImg:any,
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
            foldButtonImg: unfold,
            projectList: ProjectDatas
        };
    }

    foldProject = () => {
        this.setState({projectFold: !this.state.projectFold, foldButtonImg: this.state.projectFold? fold : unfold });
    }
    
    render() {
        return (
            <div className="container" id="projects">
                <div  className="background-alt">
                    <h2 className="heading">Projects (총 {this.state.projectList.length}개)</h2>
                    <div>
                        <div className="projects">
                            <table className="project-list-table">
                                <colgroup>
                                    <col width="50px"></col>
                                    <col width="auto"></col>
                                </colgroup>
                                <tbody>
                                    <tr className="project-title">
                                        <td rowSpan={this.state.projectFold ? 5 : this.state.projectList.length + 2}  className="graph">
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
                                                        <colgroup>
                                                            <col width="auto"></col>
                                                        </colgroup>
                                                        <tbody>
                                                            <tr>
                                                                <td><h3>{project.projectName} <span>({project.startDate} ~ {project.endDate})</span></h3></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="projectInfo">
                                                                    <div>
                                                                        <ul>
                                                                            <li>프로젝트 설명 : {project.projectDesc}</li>
                                                                            <li>
                                                                                담당업무<br />
                                                                                {project.myTasklist.map((task) => (
                                                                                    <>
                                                                                        {task}<br></br>
                                                                                    
                                                                                    </>
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
                                    <tr>
                                        <div className="foldImg" onClick={this.foldProject}>
                                            <img src={this.state.foldButtonImg} alt=""></img>
                                        </div>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;