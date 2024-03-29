import React from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import GlobalStyles from "../theme/globalStyles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Navbar />
      <div className="App">
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </React.Fragment>
  );
}

export default App;
