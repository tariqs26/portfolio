import React from "react";
import Link from "../Link/Link";
import { LinkedInIcon, GitHubIcon } from "./Icons";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="section-container" id="intro">
      <section className="section">
        <div className="intro">
          <button className="intro-greet intro-btn animate">Hi, I'm</button>
          <h1 className="intro-heading animate">Saad Tariq</h1>
          <h2 className="intro-subheading animate">Web Developer</h2>
          <div className="intro-links animate">
            <IntroLink href="https://github.com/tariqs26">
              <GitHubIcon />
            </IntroLink>
            <IntroLink href="https://www.linkedin.com/in/saad-tariq-cs/">
              <LinkedInIcon />
            </IntroLink>
          </div>
          <div className="content animate">
            <p>
              Computer science student at{" "}
              <Link href="">McMaster University</Link> passionate about building things for the web.
            </p>
          </div>
          <button className="intro-btn animate">View resume</button>
        </div>
      </section>
    </div>
  );
}

const IntroLink = ({ href, children }) => (
  <a href={href} rel="noreferrer" target="_blank">
    {children}
  </a>
);
