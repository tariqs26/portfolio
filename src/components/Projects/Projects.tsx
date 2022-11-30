import Section from '../Section/Section';
import projects from './data';
import { GitHubIcon, LiveLinkIcon } from 'components/Icons';
import './Projects.css';

export default function Projects() {
  return (
    <>
      <Section heading={'Projects'}>{null}</Section>
      {projects.map(({ name, imgSrc, tech, desc, codeLink, liveLink }) => (
        <div className='project-container section-container'>
          <div className='project section hidden' key={name}>
            <img className='project-img' src={imgSrc} alt='' />
            <div className='project-content'>
              <h3 className='project-name'>{name}</h3>
              <div className='project-tech-container'>
                {tech.map((tech) => (
                  <code key={tech}>{tech}</code>
                ))}
              </div>
              <p className='project-desc'>{desc}</p>
              <div className='project-links'>
                <a href={codeLink}>
                  <GitHubIcon />
                </a>
                <a href={liveLink}>
                  <LiveLinkIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
