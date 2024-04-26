import React from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import About from "./components/AboutMe/About.jsx";
import Project from "./components/ProjectsPage/Project.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Project />
    </>
  );
}
