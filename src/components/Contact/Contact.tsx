import Section from '../Section/Section';
import Link from '../Link/Link';

export default function Contact() {
  return (
    <Section heading='Contact'>
      <p>
        Reach out to me on{' '}
        <Link href='https://linkedin.com/saad-tariq-cs'>linkedin</Link>, or
        shoot me an{' '}
        <Link href='mailto:'>email</Link>
      </p>
    </Section>
  );
}
