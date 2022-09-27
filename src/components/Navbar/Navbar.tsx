import { useState } from "react";
import LogoIcon from "./LogoIcon";
import DarkIcon from "./DarkIcon";

import "./Navbar.css";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <nav className="nav">
      <a href="#intro">
        <LogoIcon className="nav-logo" />
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
      <DarkIcon
        onClick={() => setDarkMode(!darkMode)}
        addition={!darkMode ? " rotate" : ""}
      />
    </nav>
  );
}
