import Section from '../Section/Section';
import Link from 'components/Link/Link';
import iconLinks from './iconLinks';
import './About.css';

export default function About() {
  return (
    <Section heading={'About'}>
      <p>Hi there!</p>
      <p>
        I'm Saad Tariq, a second year computer science student at{' '}
        <Link href='https://www.mcmaster.ca/'>McMaster</Link>
        University, passionate about all things web development.
      </p>
      <p>
        I have experience with front-end web development gained from working on
        personal projects and am currently aiming towards full-stack
        development. I am constantly on the lookout for opportunities to learn
        new technologies, build upon my existing skills, and grow as a
        developer.
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
