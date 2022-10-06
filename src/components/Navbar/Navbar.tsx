import React, { useEffect } from "react";
import { LogoIcon, DarkIcon, LightIcon } from "./Icons";
import "./Navbar.css";

export default function Navbar({ darkMode, setDarkMode }) {
  const [pos, setPos] = React.useState(0);
  
  
  useEffect(() => {
    const handleScroll = () => {
      (pos === 0 || window.scrollY === 0) && setPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pos]);

  useEffect(() => {    
    if (pos > 0) document.querySelector(".nav")?.classList.add("nav-shadow");
    else document.querySelector(".nav")?.classList.remove("nav-shadow");
  }, [pos]);

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
