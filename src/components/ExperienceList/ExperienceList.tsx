import React from 'react';

function ExperienceList() {
  return (
    <div id="experiencelist" className="experience">
        <div id="lead">
            <div id="lead-content">
                <h1>Ryan Fitzgerald</h1>
                <h2>Software Engineer</h2>
                <a href="#" className="btn-rounded-white">Download Resume</a>
            </div>

            <div id="lead-overlay"></div>

            <div id="lead-down">
                <span>
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    </div>
  );
}

export default ExperienceList;
