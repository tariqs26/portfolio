import React from "react";
import "./NavLinks.css";

export default function NavLinks(){
    return (
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
    );
}