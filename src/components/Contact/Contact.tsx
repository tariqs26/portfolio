export default function Contact() {
  return (
    <div className='section-container' id='contact'>
      <section className='section'>
        <header className='section-heading hidden'>
          <span className='section-heading-rule' />
          <div className='section-heading-text'>
            <h3>{`<Contact />`}</h3>
          </div>
          <span className='section-heading-rule' />
        </header>
        <div className='content hidden'>
          {' '}
          <h4>
            Want to work together, or just want to say hi? Feel free to reach
            out!
          </h4>
          <a className='hero-btn' href='mailto:tariqs26@mcmaster.ca'>
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
}
