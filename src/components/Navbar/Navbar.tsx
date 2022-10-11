import React from "react";
import useNavShadow from "../../hooks/useNavShadow";
import { LogoIcon, DarkIcon, LightIcon } from "./Icons";
import "./Navbar.css";

export default function Navbar({ darkMode, setDarkMode }) {
  useNavShadow();
  return (
    <nav className="nav">
      <a href="#intro">
        <LogoIcon />
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
        {darkMode ? (
          <DarkIcon onClick={() => setDarkMode(false)} />
        ) : (
          <LightIcon onClick={() => setDarkMode(true)} />
        )}
      </div>
    </nav>
  );
}
