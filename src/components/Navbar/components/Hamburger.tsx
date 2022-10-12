import React, { useState, useRef, useEffect } from "react";
import "./Hamburger.css";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    menuRef.current &&
      (open
        ? (menuRef.current as HTMLElement).classList.remove("hidden") 
        : (menuRef.current as HTMLElement).classList.add("hidden"));
  }, [open]);
  return (
    <div className="hamburger">
      <div className="bar-container" onClick={() => setOpen(!open)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="menu hidden" ref={menuRef}>
        <a href="#about" className="link" onClick={() => setOpen(!open)}>
          About
        </a>
        <a href="#projects" className="link" onClick={() => setOpen(!open)}>
          Projects
        </a>
        <a href="#contact" className="link" onClick={() => setOpen(!open)}>
          Contact
        </a>
      </div>
    </div>
  );
}