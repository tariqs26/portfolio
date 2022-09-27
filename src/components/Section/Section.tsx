import "./Section.css";

export default function Section({ heading, children }) {
  return (
    <div className="section-container" id={heading.split(" ")[0].toLowerCase()}>
      <section className="section">
        <div className="section-heading hidden">
          <div className="section-heading-text">
            <h2 className="text">{heading}</h2>
          </div>
          <span className="section-heading-rule" />
        </div>
        <div className="section-content hidden">{children}</div>
      </section>
    </div>
  );
}
