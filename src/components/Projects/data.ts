const start = 'https://';
const gitHub = (name: string) => `${start}github.com/${name}`;
const netlify = (name: string) => `${start}${name}netlify.app`;
const imgPath = './src/assets/images';

const projects = [
  {
    name: 'Neuro',
    desc: 'A trivia app built with React and Typescript, using the Open Trivia Database API. Deployed on Netlify.',
    tech: ['React', 'Redux', 'TypeScript', 'Axios'],
    imgSrc: `${imgPath}/project2.png`,
    liveLink: netlify('neuro'),
    codeLink: gitHub('neuro'),
  },

  {
    name: 'Job Tracker',
    desc: 'An application to manage job applications, filter by status, add files, notes, and more.',
    tech: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma'],
    imgSrc: `${imgPath}/project1.png`,
    liveLink: netlify('job-tracker'),
    codeLink: gitHub('job-tracker'),
  },

  {
    name: 'YelpCamp',
    desc: 'A campground review app',
    tech: ['Node', 'Express', 'MongoDB'],
    imgSrc: `${imgPath}/project1.png`,
    liveLink: netlify('yelpcamp'),
    codeLink: gitHub('yelpcamp'),
  },
];

export default projects;
