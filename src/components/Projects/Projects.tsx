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
            <img className='project-img' src={imgSrc} alt='' loading='lazy' />
            <div className='project-content'>
              <h4 className='project-name'>{name}</h4>
              <div className='project-tech-container'>
                {tech.map((tech) => (
                  <code key={tech}>{tech}</code>
                ))}
              </div>
              <p className='project-desc'>{desc}</p>
              <div className='project-links'>
                <a href={codeLink} aria-label='GitHub Link' target='_blank'>
                  <GitHubIcon />
                </a>
                <a href={liveLink} aria-label='Live Link' target='_blank'>
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
