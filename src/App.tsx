import React from 'react';
import Navigator from './components/Navigator';
import Experience from './components/Experience';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skils';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigator/>
      <Main/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
