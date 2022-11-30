import Section from '../Section/Section';
import Link from '../Link/Link';

export default function Contact() {
  return (
    <Section heading='Contact me'>
      <p>
        Reach out to me on{' '}
        <Link href='https://twitter.com/Linklexandereardon'>linkedin</Link>, or
        shoot me an{' '}
        <Link href='mailto:'>email</Link>
      </p>
    </Section>
  );
}
