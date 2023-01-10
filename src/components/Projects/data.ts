const start = 'https://';
const gitHub = (name: string) => `${start}github.com/tariqs26/${name}`;
const netlify = (name: string) => `${start}${name}.netlify.app`;
import p1 from 'assets/images/project1.png';
import p2 from 'assets/images/project2.png';

const projects = [
  {
    name: 'Neuro',
    desc: 'A trivia app built with React and Typescript, using the Open Trivia Database API. Deployed on Netlify.',
    tech: ['React', 'Redux', 'TypeScript', 'Axios'],
    imgSrc: p2,
    liveLink: netlify('neuro-trivia'),
    codeLink: gitHub('Neuro'),
  },

  {
    name: 'Job Tracker',
    desc: 'An application to manage job applications, filter by status, add files, notes, and more.',
    tech: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma'],
    imgSrc: p2,
    liveLink: netlify('job-tracker'),
    codeLink: gitHub('job-tracker'),
  },

  {
    name: 'YelpCamp',
    desc: 'A campground review app',
    tech: ['Node', 'Express', 'MongoDB'],
    imgSrc: p1,
    liveLink: netlify('yelpcamp'),
    codeLink: gitHub('yelpcamp'),
  },
];

export default projects;
