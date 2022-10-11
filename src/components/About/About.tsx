import React from "react";
import Section from "../Section/Section";
import iconLinks from "./iconLinks";
import "./About.css";

export default function About() {
  return (
    <Section heading={"About me"}>
      <p>Hi There!</p>
      <p>
        I'm Saad Tariq, a computer science student at McMaster University in my
        second year. I have experience with front-end web development but I'am
        looking to expand my knowledge towards back-end development.
      </p>
      <p>
        Some of my favorite projects include this website a trivia app and a
        full-stack camp site review app.
      </p>
      <p>Here are some technologies I use in projects:</p>
      <div className="tech-icons">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Redux",
          "Node",
          "Python",
        ].map((name) => {
          return <TechIcon key={name} icon={iconLinks[name]} name={name} />;
        })}
      </div>
    </Section>
  );
}

const TechIcon = ({ icon, name }) => {
  return (
    <div className="tech-icon">
      <img src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
};
