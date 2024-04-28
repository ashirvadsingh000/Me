import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";
import "./index.css";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";

const App = () => {
  return (
    
      <div className="scrollbar bg-black overflow-x-hidden  flex flex-col gap-y-2  ">
        <Header /> 
        <Home />
        <Service />
        <Skills />
        <Education />
        <Project />
      </div>
  );
};

export default App;
