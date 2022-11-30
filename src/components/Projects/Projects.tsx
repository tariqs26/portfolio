import Section from '../Section/Section';
import projects from './data';
import { GitHubIcon, LiveLinkIcon } from 'components/Icons';
import './Projects.css';

export default function Projects() {
  return (
    <>
      <Section heading={'Projects'}>{null}</Section>
      {projects.map((project) => (
        <div className='project-container section-container'>
          <div className='project section hidden' key={project.name}>
            <img className='project-img' src={project.imgSrc} alt='' />
            <div className='project-content'>
              <h3 className='project-name'>{project.name}</h3>
              <div className='project-tech-container'>
                {project.tech.map((tech) => (
                  <code key={tech}>{tech}</code>
                ))}
              </div>
              <p className='project-desc'>{project.description}</p>
              <div className='project-links'>
                <a href={project.codeLink}>
                  <GitHubIcon />
                </a>
                <a href={project.liveLink}>
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
