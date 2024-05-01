import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";
import "./index.css";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Gaming from "./ComPages/Gaming";

const App = () => {
  return (
    <>
      <Header />
      <div className="bg-black overflow-x-hidden scrollbar overflow grid grid-cols-1 gap-14 ">
        <Home />
        <Service />
        <Skills />
        <Education />
        <Project />
        <Hobbies />
        <Contact />
      </div>
    </>
  );
};

export default App;
