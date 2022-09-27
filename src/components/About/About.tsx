import React from "react";
import Section from "../Section/Section";
import Link from "../Link/Link";

export default function About() {
  return (
    <Section heading={"About me"}>
      <p>Hi There!</p>
      <p>
        I'm Saad Tariq, a computer science student at{" "}
        <Link href="">McMaster University</Link> in my second year. I have
        experience with front-end web development but I'am looking to expand my
        knowledge towards back-end development.
      </p>
      <p>
        Some of my favorite projects include this website a trivia app and a
        full-stack camp site review app.
      </p>
      <p>
        I have experience with HTML, CSS, Javascript, React, Node.js, Express,
        MongoDB, and Git.
      </p>
    </Section>
  );
}
