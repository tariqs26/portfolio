import './Section.css';

export default function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className='section-container'>
      <section className='section'>
        <header className='section-heading hidden'>
          <div className='section-heading-text'>
            <h2>{heading}</h2>
          </div>
          <span className='section-heading-rule' />
        </header>
        <div className='content hidden'>{children}</div>
      </section>
    </div>
  );
}
