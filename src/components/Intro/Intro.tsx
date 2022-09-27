import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="section-container" id="intro">
      <section className="section">
        <div className="intro">
          <button className="intro-greet intro-btn">
            Greetings! I'm
            <div className="greet-icon"></div>
          </button>
          <h1 className="intro-heading">Saad Tariq</h1>
          <h2 className="intro-subheading">Web Developer</h2>
          <div className="intro-links"></div>
          <div className="content">
            Computer science student at McMaster with an interest in all things
            web development.
          </div>
          <button className="intro-btn">View Projects</button>
          <button className="intro-btn">View resume</button>
        </div>
        <div className="intro-screen">
          console.log("Hello World!"); TODO: make screen simulate coding
        </div>
      </section>
    </div>
  );
}
