import { useState, useRef, useEffect } from "react";
import useNavShadow from "hooks/useNavShadow";
import { Logo, Dark, Light } from "components/Icons";
import Hamburger from "./components/Hamburger";
import NavLinks from "./components/NavLinks";
import "./Navbar.css";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  useNavShadow();

  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menu = menuRef.current as HTMLElement;
    const arr = menu.parentElement as HTMLElement;
    if (open) {
      menu.classList.remove("hide");
      for (let bar of arr.querySelectorAll(".bar")) bar.classList.add("anim");
    } else {
      menu.classList.add("hide");
      for (let bar of arr.querySelectorAll(".bar"))
        bar.classList.remove("anim");
    }
  }, [open]);

  return (
    <nav className="nav">
      <a
        href="/#hero"
        aria-label="Home"
        onClick={() => {
          setOpen(false);
        }}
      >
        <Logo />
      </a>
      <NavLinks />
      <Hamburger {...{ open, setOpen, menuRef }} />
      <div
        className="mode-container"
        aria-label="Toggle dark mode"
        role="button"
      >
        {darkMode ? (
          <Dark onClick={() => setDarkMode(false)} />
        ) : (
          <Light onClick={() => setDarkMode(true)} />
        )}
      </div>
      <div
        className="menu hide"
        ref={menuRef}
        aria-expanded={open}
        onClick={(e) => {
          e.target instanceof HTMLAnchorElement && setOpen(false);
        }}
      >
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
