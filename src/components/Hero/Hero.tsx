import { useEffect } from 'react';
import { LinkedInIcon, GitHubIcon } from 'components/Icons';
import './Hero.css';

export default function Intro() {
  useEffect(() => {
    const children = document.querySelectorAll(
      '.intro> :not(.content), .intro .content :is(p, div'
    );
    for (let i = 0; i < children.length; i++)
      (children[i] as HTMLElement).style.animationDelay = `${i * 0.1 + 1.1}s`;
  }, []);

  return (
    <div className='section-container'>
      <div
        id='top'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '10px',
          height: '10px',
        }}
      ></div>
      <section className='section'>
        <div className='intro'>
          <div className='intro-greet intro-btn animate'>Hi, I'm</div>
          <h1 className='animate'>Saad Tariq</h1>
          <h2 className='animate'>Web Developer</h2>
          <div className='content'>
            <div className='intro-links animate'>
              <IntroLink href='https://github.com/tariqs26' ariaLabel='GitHub'>
                <GitHubIcon />
              </IntroLink>
              <IntroLink
                href='https://www.linkedin.com/in/saad-tariq-cs/'
                ariaLabel='Linkedin'
              >
                <LinkedInIcon />
              </IntroLink>
            </div>
            <p className='animate'>
              Computer science student at McMaster University passionate about
              building things for the web.
            </p>
            <div className='intro-buttons animate'>
              <a href='#projects' className='intro-btn'>
                View my work
              </a>
              <a href='#contact' className='intro-btn'>
                Contact me
              </a>
            </div>
          </div>
        </div>
        <span id='about'></span>
      </section>
    </div>
  );
}

type IntroLinkProps = {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
};
const IntroLink = ({ href, ariaLabel, children }: IntroLinkProps) => (
  <a href={href} aria-label={ariaLabel} rel='noreferrer' target='_blank'>
    {children}
  </a>
);