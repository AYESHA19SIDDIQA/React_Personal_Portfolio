import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Societies from "../components/Societies";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="sidebar">
          <Contact />
          <Skills />
        </div>
        <div className="main">
          <AboutMe />
          <Experience />
          <Education />
          <Certifications />
          <Societies />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
