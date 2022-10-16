import React, { useEffect } from "react";
import useAnimations from "./hooks/useAnimations";
import useDarkMode from "./hooks/useDarkMode";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import "./App.css";

export default function App() {
  useEffect(() => {
    window.location.href = "/#";
  }, []);
  const [darkMode, setDarkMode] = useDarkMode();
  const mainRef = useAnimations();

  return (
    <div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main ref={mainRef}>
        <Intro />
        <div className="spacer" id="about"/>
        <About />
        <div className="spacer spacer2" id="projects"/>
        <Projects />
        <div className="spacer" id="contact"/>
        <Contact />
      </main>
    </div>
  );
}