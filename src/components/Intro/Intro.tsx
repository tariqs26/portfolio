import { useEffect, useRef } from 'react';
import Link from '../Link/Link';
import { LinkedInIcon, GitHubIcon } from 'components/Icons';
import './Intro.css';

export default function Intro() {
  const introRef = useRef(null);
  useEffect(() => {
    if (!introRef.current) return;
    const children = (introRef.current as HTMLElement).children;
    for (let i = 0; i < children.length; i++)
      (children[i] as HTMLElement).style.animationDelay = `${i * 0.1 + 1.5}s`;
  }, [introRef]);

  return (
    <div className='section-container' id='intro'>
      <section className='section'>
        <div className='intro' ref={introRef}>
          <div className='intro-greet intro-btn animate'>Hi, I'm</div>
          <h1 className='intro-heading animate'>Saad Tariq</h1>
          <h2 className='intro-subheading animate'>Web Developer</h2>
          <div className='intro-links animate'>
            <IntroLink href='https://github.com/tariqs26' ariaLabel='GitHub'>
              <GitHubIcon />
            </IntroLink>
            <IntroLink href='https://www.linkedin.com/in/saad-tariq-cs/' ariaLabel='Linkedin'>
              <LinkedInIcon />
            </IntroLink>
          </div>
          <div className='content animate'>
            <p>
              Computer science student at{' '}
              <Link href=''>McMaster University</Link> passionate about building
              things for the web.
            </p>
          </div>
          <div className='intro-btn animate'>View resume</div>
        </div>
      </section>
    </div>
  );
}

const IntroLink = ({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) => (
  <a href={href} aria-label={ariaLabel} rel='noreferrer' target='_blank'>
    {children}
  </a>
);
