import React from 'react';
import Navigator from './components/Navigator/Navigator';
import Main from './components/Main/Main';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

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
