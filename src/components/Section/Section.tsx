import React from "react";
import "./Section.css";

export default function Section({ heading, children }) {
  return (
    <div className="section-container">
      <section className="section">
        <header className="section-heading hidden">
          <div className="section-heading-text">
            <h2>{heading}</h2>
          </div>
          <span className="section-heading-rule" />
        </header>
        <div className="section-content hidden">{children}</div>
      </section>
    </div>
  );
}
