export const personalInfo = {
  name: "Samarth Shetty",
  title: "Software Developer",
  email: "shettysamarth11@gmail.com",
  linkedin: "https://www.linkedin.com/in/thesamarthshetty",
};

export const experience = [
  {
    "company": "Bellevie",
    "url": "https://bellevie.life/",
    "position": "Software Development Engineer I",
    "period": "2023 - Present",
    "description": "Worked as a Backend Developer on the main consumer app, focusing on performance, security, and reliability. Built secure RESTful APIs with Node.js, Express, MongoDB, Redis, using JWT authentication and Joi validation.",
    "achievements": [
      "Collaborated with product, design, and frontend teams to deliver new features aligned with business requirements.",
      "Built modular, reusable, and scalable components within a microservices architecture.",
      "Followed modern development practices and enforced coding standards to ensure code quality and maintainability.",
      "Contributed to improving system reliability and performance for high-traffic production environments."
    ]
  },
  // {
  //   company: "Grab",
  //   url: "https://www.grab.in/",
  //   position: "Software Developer",
  //   period: "2019 - 2022",
  //   description: "Worked on the main consumer app focusing on reliability and performance. Used React Native for cross-platform development and Redux for state management.",
  //   achievements: [
  //     "Contributed to the development of the main consumer application",
  //     "Implemented complex UI components and user interactions",
  //     "Worked on performance optimizations for mobile platforms",
  //     "Collaborated in an agile environment with international teams"
  //   ]
  // }
];

export const skills = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Redis", icon: "/icons/redis.svg" },
  { name: "kafka", icon: "/icons/kafka.svg" },
  { name: "Git/GitHub", icon: "/icons/github.svg" },
  { name: "REST APIs", icon: "/icons/api.svg" },
  { name: "HTML/CSS", icon: "/icons/htmlcss.svg" },
];

export const projects = [
  {
    title: "BelleVie Platform",
    description: "Microservices-based platform with REST APIs for Marketplace, Events, and Discovery, integrated with Elasticsearch and optimized MongoDB queries.",
    //technologies: ["Node.js", "MongoDB", "Express"],
    technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "Elasticsearch", "AWS"],
    //image: "https://images.pexels.com/photos/34577/pexels-photo.jpg",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.",
    technologies: ["React.js", "Redux", "Firebase"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information application with location-based forecasts and interactive maps.",
    technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    demoUrl: "#",
    githubUrl: "#"
  }
];