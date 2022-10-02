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
    window.location.href = "/#"
  }, [])
  
  const mainRef = useAnimations();
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className="main" ref={mainRef}>
        <Intro darkMode={darkMode}/>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
