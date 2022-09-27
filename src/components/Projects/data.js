const GitHub = "https://github.com/tariqs26";
const Netlify = "netlify.app";

const projects = [
  {
    title: "Quizr",
    description: "A user generated trivia app",
    features: [
      "create quiz, based on data from the Open Trivia Database",
      "a timed quiz with a score",
    ],
    technologies: ["React", "Redux"],
    image: "https://picsum.photos/200/300",
    liveLink: `quizr.${Netlify}`,
    githubLink: `${GitHub}/React-Quiz-App`,
  },

  {
    title: "Path Finder",
    description: "A path finding visualizer",
    features: [
      "visualize the A* path finding algorithm",
      "visualize the Dijkstra's algorithm",
    ],
    technologies: ["React"],
    image: "https://picsum.photos/200/300",
    liveLink: `pathfinder.${Netlify}`,
    githubLink: `${GitHub}/Path-Finder`,
  },

  {
    title: "YelpCamp",
    description: "A campground review app",
    features: [
      "create, edit, and delete campgrounds",
      "create, edit, and delete reviews",
    ],
    technologies: ["Node", "Express", "MongoDB"],
    image: "https://picsum.photos/200/300",
    liveLink: `yelpcamp.${Netlify}`,
    githubLink: `${GitHub}/YelpCamp`,
  },
];

export default projects;
