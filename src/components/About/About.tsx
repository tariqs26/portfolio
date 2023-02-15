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
        <Link href='https://www.mcmaster.ca/'>McMaster University</Link>,
        passionate about developing aesthetically pleasing, intuitive and
        performant web applications.
      </p>
      <p>
        Experienced in front-end development using{' '}
        <Link href='https://reactjs.org/'>React</Link>,{' '}
        <Link href='https://redux.js.org/'>Redux</Link>, and{' '}
        <Link href='https://www.typescriptlang.org/'>TypeScript</Link>, gained
        from working on personal projects, currently learning full-stack
        development using <Link href='https://nodejs.org/en/'>Node.js</Link>,{' '}
        <Link href='https://expressjs.com/'>Express</Link>, and{' '}
        <Link href='https://www.mongodb.com/'>MongoDB</Link>. I am constantly
        looking for opportunities to learn new technologies, build upon my
        existing skills, and grow as a developer.
      </p>
      <p>Here are some technologies I use in projects:</p>
      <div className='tech-icons'>
        {[
          'JavaScript',
          'TypeScript',
          'React',
          'Redux',
          'Node',
          'Express',
          'MongoDB',
        ].map((name) => {
          return (
            <TechIcon
              key={name}
              icon={iconLinks[name as keyof typeof iconLinks]}
              name={name}
            />
          );
        })}
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
