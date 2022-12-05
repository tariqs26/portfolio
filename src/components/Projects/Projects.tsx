import Section from '../Section/Section';
import projects from './data';
import { GitHubIcon, LiveLinkIcon } from 'components/Icons';
import './Projects.css';

export default function Projects() {
  return (
    <>
      <Section heading={'Projects'}>{null}</Section>
      {projects.map(({ name, imgSrc, tech, desc, codeLink, liveLink }) => (
        <div className='project-container section-container' key={name}>
          <section className='project section hidden'>
            <img className='project-img' src={imgSrc} alt='' />
            <div className='project-content'>
              <h4 className='project-name'>{name}</h4>
              <div className='project-tech-container'>
                {tech.map((tech) => (
                  <code key={tech}>{tech}</code>
                ))}
              </div>
              <p className='project-desc'>{desc}</p>
              <div className='project-links'>
                <a href={codeLink} aria-label="GitHub Link">
                  <GitHubIcon />
                </a>
                <a href={liveLink} aria-label="Live Link">
                  <LiveLinkIcon />
                </a>
              </div>
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
