import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.nav`
    text-align: center;
    min-height: 300px;
    margin: 150px 30px 30px 30px;
    box-shadow: 0 2px 0 0 #f5f5f5;
`;
function Education() {
  return (
    <>
        <EducationContainer id="education">
            <h2 className="heading">Education</h2>
            <div className="education-block">
                <h3>University of Ottawa</h3>
                <span className="education-date">Sept 2016 - Sept 2017</span>
                <h4>Bachelor of Science in Computer Science</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.
                </p>
            </div>

            <div className="education-block">
                <h3>University of Ottawa</h3>
                <span className="education-date">Sept 2016 - Sept 2017</span>
                <h4>Bachelor of Science in Computer Science</h4>
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                </ul>
            </div>
        </EducationContainer>
    </>
  );
}

export default Education;
