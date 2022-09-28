import React from "react";
import { useState } from "react";
import LogoIcon from "./LogoIcon";
import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";

import "./Navbar.css";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
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
