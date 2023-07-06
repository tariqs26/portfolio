import { useEffect } from "react"
import { LinkedIn, GitHub } from "components/Icons"
import "./Hero.css"
import Link from "components/Link/Link"

export default function Hero() {
  useEffect(() => {
    const children = document.querySelectorAll(
      ".hero > :not(.content), .hero .content :is(p, div)",
    )
    for (let i = 0; i < children.length; i++)
      (children[i] as HTMLElement).style.animationDelay = `${i * 0.1 + 1.1}s`
  }, [])

  return (
    <div className="section-container" id="hero">
      <section className="section">
        <div className="hero">
          <div className="hero-greet hero-btn animate">Hi, I'm</div>
          <h1 className="animate">Saad Tariq</h1>
          <h2 className="animate">Web Developer</h2>
          <div className="content">
            <div className="hero-links animate">
              <Link href="https://github.com/tariqs26" aria-label="GitHub">
                <GitHub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/saad-tariq-cs/"
                aria-label="Linkedin"
              >
                <LinkedIn />
              </Link>
            </div>
            <p className="animate">
              Computer science student at McMaster University passionate about
              all things web development.
            </p>
            <div className="hero-buttons animate">
              <a href="#projects" className="hero-btn">
                View my work
              </a>
              <a href="#contact" className="hero-btn">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
