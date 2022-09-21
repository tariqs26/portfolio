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
          const sectionTextH2 = section.querySelector(".section-heading h2");
          const sectionRule = section.querySelector(".section-heading-rule");
          const sectionText = section.querySelector(".section-heading");
          if (entry.isIntersecting) {
            section.classList.remove("hidden");
            setTimeout(() => {
              sectionText.classList.remove("hidden");
              for (let element of [sectionTextH2, sectionRule])
                element.classList.add("animation");
            }, 300);
          }
        });
      },
      { threshold: 0.5 }
    );
    document
      .querySelector("main")
      .querySelectorAll(".section-container")
      .forEach((section) => {
        section.classList.add("hidden");
        const sectionText = section.querySelector(".section-heading");
        sectionText && sectionText.classList.add("hidden");
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
