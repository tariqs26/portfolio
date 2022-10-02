import React from "react";
import Link from "../Link/Link";
import { LinkedInIcon, GitHubIcon } from "./Icons";
import "./Intro.css";

export default function Intro({ darkMode }) {
  return (
    <div className="section-container" id="intro">
      <section className="section">
        <div className="intro">
          <button className="intro-greet intro-btn">
            Hi, I'm
            <div className="greet-icon"></div>
          </button>
          <h1 className="intro-heading">Saad Tariq</h1>
          <h2 className="intro-subheading">Web Developer</h2>
          <div className="intro-links">
            <a
              href="https://github.com/tariqs26"
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/saad-tariq-cs/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="content">
            <p>
              Computer science student at{" "}
              <Link href="">McMaster University</Link> with an interest in all
              things web development.
            </p>
          </div>
          <button className="intro-btn">View resume</button>
        </div>
      </section>
    </div>
  );
}