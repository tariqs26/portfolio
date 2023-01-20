import Section from '../Section/Section';
import Link from 'components/Link/Link';
import iconLinks from './iconLinks';
import './About.css';

export default function About() {
  return (
    <Section heading={'About'}>
      <p>Hi there!</p>
      <p>
        I'm Saad Tariq, a second-year computer science student at{' '}
        <Link href='https://www.mcmaster.ca/'>McMaster University</Link>, with a
        drive for developing aesthetically pleasing, intuitive and performant
        web applications, focusing on fostering dynamic user experiences.
      </p>
      <p>
        Experienced in front-end development using React, Redux, React Query and
        TypeScript, gained from working on personal projects, currently learning
        full-stack development, using Node.js, Express, and MongoDB. I am
        constantly looking for opportunities to learn new technologies, build
        upon my existing skills, and grow as a developer.
      </p>
      <p>Here are some technologies I use in projects:</p>
      <div className='tech-icons'>
        {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux'].map(
          (name) => {
            return (
              <TechIcon
                key={name}
                icon={iconLinks[name as keyof typeof iconLinks]}
                name={name}
              />
            );
          }
        )}
      </div>
    </Section>
  );
}

type TechIconProps = {
  icon: string;
  name: string;
};
const TechIcon = ({ icon, name }: TechIconProps) => {
  return (
    <div className='tech-icon hidden'>
      <img src={icon} alt={name} loading='lazy' />
      <span>{name}</span>
    </div>
  );
};
