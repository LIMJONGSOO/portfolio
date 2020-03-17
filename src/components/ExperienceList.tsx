import React from 'react';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
