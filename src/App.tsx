import React, { useEffect, useState } from "react";
import useAnimations from "./hooks/useAnimations";
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

  const [darkMode, setDarkMode] = useState(false);
  const setDarkModeHandler = (darkMode : boolean) => {
    setDarkMode(darkMode);
    const root = document.querySelector(":root");
    darkMode && root?.classList.add("light");
    !darkMode  && root?.classList.remove("light");
  };

  const mainRef = useAnimations();
  return (
    <div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkModeHandler} />
      <main className="main" ref={mainRef}>
        <Intro darkMode={darkMode} />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
