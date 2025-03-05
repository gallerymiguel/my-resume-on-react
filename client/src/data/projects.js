// src/data/projects.js
const projects = [
    {
        id: 1,
        title: "OpenAI-Weatherforecast",
        image: "/OpenAi.jpg",
        github: "https://github.com/gallerymiguel/OpenAI-Weatherforecast",
        description:
          "This project provides a five-day weather forecast using OpenAI's API, where the forecast is formatted as if announced by a sports commentator.",
        technologies: ["Typescript", "OpenAI API", "Bootstrap", "CSS", "Node.js", "Express", "dotenv"],
      },
      {
        id: 2,
        title: "After Action Review",
        image: "/afteractionreview.png",
        github: "https://github.com/CelestialChai/after_action_review",
        live: "https://after-action-review.onrender.com/",
        description:
          "Engineered an application to facilitate the review and analysis of task performances with capabilities for detailed reporting and historical data analysis.",
        technologies: ["MongoDB", "Express", "React", "Node.js", "Typescript", "Material-UI", "jsPDF", "CSS"],
      },
      {
        id: 3,
        title: "Tech Quiz",
        video: "/techquiz.mp4", // Video instead of image
        github: "https://github.com/gallerymiguel/tech-quiz-test",
        description: "An advanced quiz platform challenging users' Python programming skills, from syntax to complex programming concepts, providing instant feedback.",
        technologies: ["MongoDB", "Express", "React", "Node.j", "Cypress"],
      },
      {
        id: 4,
        title: "Google Books Search Engine",
        image: "/SavedBooks.png",
        github: "https://github.com/gallerymiguel/google-books-search-engine/",
        live: "https://google-books-search-engine-friontend.onrender.com/",
        description: "This is a full-stack application that allows users to search for books using the Google Books API and save their favorite books to a personalized account. ",
        technologies: ["GraphQL", "React", "MongoDB", "Node.js", "Express", "Apollo Server", "Apollo Client", "Bootstrap", "CSS"],
      },
      {
        id: 5,
        title: "Temperature Converter",
        image: "/temperature.jpg",
        github: "https://github.com/CelestialChai/temperature_converter",
        live: "https://celestialchai.github.io/temperature_converter/",
        description: "A simple temperature converter app.",
        technologies: ["JavaScript", "Bootstrap", "CSS", "HTML"],
      },
      {
        id: 6,
        title: "Candidate Search App",
        image: "/CandidateSearch.jpg",
        github: "https://github.com/gallerymiguel/candidate-search/",
        live: "https://candidate-search-kx1t.onrender.com/",
        description: "Developed a dynamic web application that leverages the GitHub API to allow users to search, view, and save GitHub profiles. Designed to help recruiters and hiring managers find potential candidates based on specific queries.",
        technologies: ["React", "Typescript", "GitHub API", "Local Storage", "CSS"],
      },
    ];
  
  export default projects;
  