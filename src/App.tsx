import Navbar from "components/Navbar/Navbar";
import Intro from "components/Intro/Intro";
import About from "components/About/About";
import Projects from "components/Projects/Projects";
import Contact from "components/Contact/Contact";
import { useRef, useEffect } from "react";

import "./App.css";

export default function App() {
  const mainRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target;
          const sectionContent = section.querySelector(".section-content");
          const sectionText = section.querySelector(".section-heading");
          const sectionTextH2 = section.querySelector(".section-heading h2");
          const sectionRule = section.querySelector(".section-heading-rule");
          if (entry.isIntersecting) {
            for (let elem of [sectionContent, sectionText])
              elem.classList.remove("hidden");
            for (let element of [sectionTextH2, sectionRule])
              element.classList.add("animation");
          }
        });
      },
      { threshold: 0.5 }
    );

  mainRef.current
      .querySelectorAll(".section-container")
      .forEach((section) => {
        observer.observe(section);
      });
  }, [mainRef]);

  return (
    // give class name light to change theme to light
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


