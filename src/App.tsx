import React from "react";
import useAnimations from "./hooks/useAnimations";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import "./App.css";

export default function App() {
  const mainRef = useAnimations();
  return (
    <div className="App">
      <Navbar />
      <main className="main" ref={mainRef}>
        <Intro />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
