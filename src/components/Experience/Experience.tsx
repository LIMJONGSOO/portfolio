import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.nav`
    text-align: center;
    min-height: 300px;
    margin: 150px 30px 30px 30px;
    box-shadow: 0 2px 0 0 #f5f5f5;
`;
function Experience() {
  return (
    <>
        <ExperienceContainer id="experience" className="background-alt">
            <h2 className="heading">Experience</h2>
            <div id="experience-timeline">
                <div data-date="September 2015 – September 2016">
                    <h3>Employer Name</h3>
                    <h4>Job Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                    </p>
                </div>

                <div data-date="September 2015 – September 2016">
                    <h3>Employer Name</h3>
                    <h4>Job Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                    </p>
                </div>

                <div data-date="September 2015 – September 2016">
                    <h3>Employer Name</h3>
                    <h4>Job Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                    </p>
                </div>
            </div>
        </ExperienceContainer>
    </>
  );
}

export default Experience;
