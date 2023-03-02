import { GitHubIcon, LinkedInIcon } from 'components/Icons';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Saad Tariq. All rights reserved</p>
      <div className='socials'>
        <a
          className='footer-link'
          href='https://github.com/tariqs26'
          aria-label='GitHub'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon />
        </a>
        <a
          className='footer-link'
          href='https://www.linkedin.com/in/saad-tariq-cs/'
          aria-label='Linkedin'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
