import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.nav`
    text-align: center;
    min-height: 300px;
    margin: 150px 30px 30px 30px;
    box-shadow: 0 2px 0 0 #f5f5f5;
`;
function Projects() {
  return (
    <ProjectsContainer>
        <div id="projects" className="background-alt">
            <h2 className="heading">Projects</h2>
            <div className="container">
                <div className="row">
                    <div className="project shadow-large">
                        <div className="project-image">
                            <img src="images/project.jpg" />
                        </div>
                        <div className="project-info">
                            <h3>Project Name Here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                            </p>
                            <a href="#">View Project</a>
                        </div>
                    </div>

                    <div className="project shadow-large">
                        <div className="project-image">
                            <img src="images/project.jpg" />
                        </div>
                        <div className="project-info">
                            <h3>Project Name Here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                            </p>
                            <a href="#">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ProjectsContainer>
  );
}

export default Projects;
