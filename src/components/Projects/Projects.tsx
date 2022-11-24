import Section from '../Section/Section';
import projects from './data';
import { GitHubIcon, LinkedInIcon } from 'src/Icons';
import './Projects.css';

export default function Projects() {
  return (
    <Section heading={'Projects'}>
      <div className='projects'>
        {projects.slice(0,2).map((project) => (
          <div className='project' key={project.title}>
            <img className='project-img' src={project.image} alt='' />
            <div className='project-content'>
              <h3 className='project-name'>{project.title}</h3>
              <p className='project-desc'>{project.description}</p>
              <div className='project-tech-container'>
                {project.technologies.map((tech) => (
                  <code>{tech}</code>
                ))}
              </div>
              <div className='project-links'>
                <a href={project.githubLink}><GitHubIcon /></a>
                <a href={project.liveLink}><LinkedInIcon /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
