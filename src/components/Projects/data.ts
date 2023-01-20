const start = 'https://';
const gitHub = (name: string) => `${start}github.com/tariqs26/${name}`;
const netlify = (name: string) => `${start}${name}.netlify.app`;
import p1 from 'assets/images/project1.png';
import p2 from 'assets/images/project2.png';

const projects = [
  {
    name: 'Neuro',
    desc: 'A trivia app built with React and Typescript, using axios to fetch data from the Open Trivia Database API.',
    tech: ['React', 'Redux', 'TypeScript', 'Axios'],
    imgSrc: p2,
    liveLink: netlify('neuro-trivia'),
    codeLink: gitHub('Neuro'),
  },
  {
    name: 'YelpCamp',
    desc: 'A full-stack web application that allows users to create, edit, and delete campgrounds, and leave reviews and ratings for each campground, built using the MERN stack.',
    tech: [
      'React',
      'TypeScript',
      'React Query',
      'Node',
      'Express',
      'MongoDB',
    ],
    imgSrc: p1,
    liveLink: netlify('yelpcamp'),
    codeLink: gitHub('yelpcamp'),
  },
  {
    name: 'Vector Visualizer',
    desc: 'An app that allows users to visualize vectors and their operations, using the Elm programming language.',
    tech: ['HTML', 'CSS', 'Elm'],
    imgSrc: p2,
    liveLink: netlify('job-tracker'),
  },
];

export default projects;
