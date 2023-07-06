import { GitHub, LinkedIn } from "components/Icons";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="socials">
        <a
          className="footer-link"
          href="https://github.com/tariqs26"
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub />
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/saad-tariq-cs/"
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Saad Tariq. All rights reserved.</p>
    </footer>
  );
}
