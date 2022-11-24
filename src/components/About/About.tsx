import Section from '../Section/Section';
import iconLinks from './iconLinks';
import './About.css';

export default function About() {
  return (
    <Section heading={'About Me'}>
      <p>Hi There!</p>
      <p>
        I'm Saad Tariq, a second year computer science student at McMaster
        University. I have experience with front-end web development acquired
        from experimenting with and developing projects in my free time. I am
        constantly on the lookout for opportunities to learn new technologies
        and improve my current skills.
      </p>
      <p>Here are some technologies I use in projects:</p>
      <div className='tech-icons'>
        {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux'].map(
          (name) => {
            return <TechIcon key={name} icon={iconLinks[name]} name={name} />;
          }
        )}
      </div>
    </Section>
  );
}

const TechIcon = ({ icon, name }) => {
  return (
    <div className='tech-icon hidden'>
      <img src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
};
