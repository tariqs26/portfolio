import React from 'react';
import Section from '../Section/Section';
import Link from '../Link/Link';

export default function Contact() {
  return (
    <Section heading='Contact me'>
      <p>
        Reach out to me on{' '}
        <Link
          href='https://twitter.com/Linklexandereardon'
          target='_blank'
          rel='noopener noreferrer'
        >
          linkedin
        </Link>
        , or shoot me an{'\n'}
        <Link href='mailto:' target='_blank' rel='noopener noreferrer'>
          email
        </Link>
      </p>
    </Section>
  );
}
