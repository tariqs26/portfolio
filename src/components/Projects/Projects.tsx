import Section from "../Section/Section"
import { useEffect } from "react"
import projects from "./data"
import { GitHub, LiveLink } from "components/Icons"
import "./Projects.css"

export default function Projects() {
  useEffect(() => {
    const projectHeadingRule = document.querySelector(
      ".section-container:nth-child(4) .section-heading-rule"
    ) as HTMLElement

    const handleAnimationEnd = () => {
      const firstProject = document.querySelector(
        ".section-container:nth-child(5) .project"
      ) as HTMLElement
      const secondProject = document.querySelector(
        ".section-container:nth-child(6) .project"
      ) as HTMLElement
      firstProject.classList.remove("hidden", "delay")
      secondProject.classList.remove("delay")
    }

    projectHeadingRule.addEventListener("animationend", handleAnimationEnd)
    return () =>
      projectHeadingRule.removeEventListener("animationend", handleAnimationEnd)
  }, [])

  return (
    <>
      <Section heading={"Projects"}>{null}</Section>
      {projects.map(({ name, imgSrc, tech, desc, codeLink, liveLink }) => (
        <div className="project-container section-container" key={name}>
          <section className={`project section hidden delay`}>
            <img className="project-img" src={imgSrc} alt="" loading="lazy" />
            <div className="project-content">
              <h4 className="project-name">{name}</h4>
              <div className="project-tech-container">
                {tech.map((tech) => (
                  <code key={tech}>{tech}</code>
                ))}
              </div>
              <p className="project-desc">{desc}</p>
              <div className="project-links">
                <a href={codeLink} aria-label="GitHub Link" target="_blank">
                  <GitHub />
                </a>
                {liveLink && (
                  <a href={liveLink} aria-label="Live Link" target="_blank">
                    <LiveLink />
                  </a>
                )}
              </div>
            </div>
          </section>
        </div>
      ))}
    </>
  )
}
