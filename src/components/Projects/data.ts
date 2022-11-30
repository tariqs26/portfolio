const GitHub = 'https://github.com/tariqs26';
const Netlify = 'netlify.app';
const imgPath = "./src/assets"

const projects = [
  {
    name: 'Quizr',
    description: 'A trivia app built with React and Typescript, using the Open Trivia Database API. Deployed on Netlify.',
    tech: ['React', 'Redux'],
    imgSrc: 'https://wallpaper.dog/large/20359633.jpg',
    liveLink: `quizr.${Netlify}`,
    codeLink: `${GitHub}/React-Quiz-App`,
  },

  {
    name: 'Job Tracker',
    description: 'An application to manage job applications, filter by status, add files, notes, and more.',
    tech: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma'],
    imgSrc: `${imgPath}/project1.png`,
    liveLink: `pathfinder.${Netlify}`,
    codeLink: `${GitHub}/Path-Finder`,
  },

  {
    name: 'YelpCamp',
    description: 'A campground review app',
    tech: ['Node', 'Express', 'MongoDB'],
    imgSrc: 'https://wallpaper.dog/large/20359633.jpg',
    liveLink: `yelpcamp.${Netlify}`,
    codeLink: `${GitHub}/YelpCamp`,
  },
];

export default projects;
