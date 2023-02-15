import './Section.css';

export default function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className='section-container' id={heading.toLocaleLowerCase()}>
      <section className='section'>
        <header className='section-heading hidden'>
          <div className='section-heading-text'>
            <h3>{`<${heading} />`}</h3>
          </div>
          <span className='section-heading-rule' />
        </header>
        <div className='content hidden'>{children}</div>
      </section>
    </div>
  );
}
