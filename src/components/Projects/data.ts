const GitHub = 'https://github.com/tariqs26';
const Netlify = 'netlify.app';

const projects = [
  {
    title: 'Quizr',
    description: 'A trivia app built with React and Typescript, using the Open Trivia Database API. Deployed on Netlify.',
    features: [
      'create quiz, based on data from the Open Trivia Database',
      'a timed quiz with a score',
    ],
    technologies: ['React', 'Redux'],
    image: 'https://wallpaper.dog/large/20359633.jpg',
    liveLink: `quizr.${Netlify}`,
    githubLink: `${GitHub}/React-Quiz-App`,
  },

  {
    title: 'Job Tracker',
    description: 'A job application tracker built with next.js, Typescript, PostgreSQL, and Prisma. Deployed on Vercel. Manage applications, add notes, and track the status',
    features: [
      'visualize the A* path finding algorithm',
      "visualize the Dijkstra's algorithm",
    ],
    technologies: ['Next.js', 'Typescript', 'PostgreSQL', 'Prisma'],
    image: 'https://wallpaper.dog/large/20359633.jpg',
    liveLink: `pathfinder.${Netlify}`,
    githubLink: `${GitHub}/Path-Finder`,
  },

  {
    title: 'YelpCamp',
    description: 'A campground review app',
    features: [
      'create, edit, and delete campgrounds',
      'create, edit, and delete reviews',
    ],
    technologies: ['Node', 'Express', 'MongoDB'],
    image: 'https://wallpaper.dog/large/20359633.jpg',
    liveLink: `yelpcamp.${Netlify}`,
    githubLink: `${GitHub}/YelpCamp`,
  },
];

export default projects;
