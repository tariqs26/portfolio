const start = 'https://';
const gitHub = (name: string) => `${start}github.com/tariqs26/${name}`;
const netlify = (name: string) => `${start}${name}.netlify.app`;
import p1 from 'assets/images/project1.png';
import p2 from 'assets/images/project2.png';
import p3 from 'assets/images/project3.png';

const projects = [
  {
    name: 'YelpCamp',
    desc: 'Full-stack web application that allows users to create, edit, and delete campgrounds, and leave reviews and ratings for each campground.',
    tech: ['React', 'TypeScript', 'Node', 'Express', 'MongoDB'],
    imgSrc: p3,
    liveLink: netlify('yelpcamp'),
    codeLink: gitHub('yelpcamp'),
  },
  {
    name: 'Neuro',
    desc: 'Trivia app with a time-based scoring system, allowing users to generate questions based on specific topics and difficulty levels.',
    tech: ['React', 'Redux', 'TypeScript', 'Axios'],
    imgSrc: p2,
    liveLink: netlify('neuro-trivia'),
    codeLink: gitHub('Neuro'),
  },
  // {
  //   name: 'Vector Visualizer',
  //   desc: 'An app that allows users to visualize vectors and their operations, using the Elm programming language.',
  //   tech: ['HTML', 'CSS', 'Elm'],
  //   imgSrc: p1,
  //   liveLink:
  //     'https://cs1xd3.online/ShowModulePublish?modulePublishId=02b6bf1e-45a3-41ab-91d5-6f6ffe135ef7&fullscreen=true',
  // },
];

export default projects;
