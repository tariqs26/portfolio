import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <button className="nav-logo">
        <a href="#intro">Home</a>
      </button>
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
      <button className="nav-color-scheme">dark</button>
    </nav>
  );
}
