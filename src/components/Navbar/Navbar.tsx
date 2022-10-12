import React from "react";
import useNavShadow from "../../hooks/useNavShadow";
import { LogoIcon, DarkIcon, LightIcon } from "./components/Icons";
import Hamburger from "./components/Hamburger";
import NavLinks from "./components/NavLinks";
import "./Navbar.css";

export default function Navbar({ darkMode, setDarkMode }) {
  useNavShadow();
  return (
    <nav className="nav">
      <a
        href="/#"
        className="nav-a"
        onClick={() => {
          document.querySelector(".menu").classList.add("hidden");
        }}
      >
        <LogoIcon />
      </a>
      <NavLinks />
      <Hamburger />
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
