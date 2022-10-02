import React from "react";
import { LogoIcon, DarkIcon, LightIcon } from "./Icons";

import "./Navbar.css";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="nav">
      <a href="#intro">
        <LogoIcon className="nav-logo nav-icon" />
      </a>
      <ul className="nav-links">
        <li className="nav-link">
          <a href="#about" className="link">
            About
          </a>
        </li>
        <li className="nav-link">
          <a href="#projects" className="link">
            Projects
          </a>
        </li>
        <li className="nav-link">
          <a href="#contact" className="link">
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-icon-container">
      {!darkMode ? (
        <DarkIcon onClick={() => setDarkMode(true)} />
      ) : (
        <LightIcon onClick={() => setDarkMode(false)} />
      )}
      </div>
    </nav>
  );
}