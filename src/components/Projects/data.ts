import p2 from "assets/images/project2.png"
import p3 from "assets/images/project3.webp"

const start = "https://"
const gitHub = (name: string) => `${start}github.com/tariqs26/${name}`
const netlify = (name: string) => `${start}${name}.netlify.app`

export default [
  {
    name: "YelpCamp",
    desc: "Full-stack web application that allows users to view, post, and leave reviews on campground locations.",
    tech: ["React", "TypeScript", "Node", "Express", "MongoDB"],
    imgSrc: p3,
    liveLink: netlify("yelpcamp-campgrounds"),
    codeLink: gitHub("yelpcamp-client"),
  },
  {
    name: "Neuro",
    desc: "Trivia app with a time-based scoring system, allowing users to generate questions based on specific topics and difficulty levels.",
    tech: ["React", "Redux", "TypeScript", "Axios"],
    imgSrc: p2,
    liveLink: netlify("neuro-trivia"),
    codeLink: gitHub("Neuro"),
  },
]
