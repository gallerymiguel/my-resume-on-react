// src/components/Portfolio.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Portfolio.css'; // Ensure you have this for styling

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'OpenAI-Weatherforecast', image: '/OpenAi.jpg', github: 'https://github.com/gallerymiguel/OpenAI-Weatherforecast' },
    { id: 2, title: 'Readme Generator', image: '/markdown.jpg', github: 'https://github.com/gallerymiguel/readme-generator' },
    { id: 3, title: 'Vehicle Builder CLI', image: '/Vehicle.jpg', github: 'https://github.com/gallerymiguel/Vehicle-Builder-CLI' },
    { id: 4, title: 'Employee Manager PSQL-CLI', image: '/SQL.jpg', github: 'https://github.com/gallerymiguel/Employee-Manager-CLI' },
    { id: 5, title: 'Temperature Converter', image: '/temperature.jpg', github: 'https://github.com/CelestialChai/temperature_converter' },
    { id: 6, title: 'Weather App API', image: '/WeatherAPI', github: 'https://github.com/gallerymiguel/Weather-App-Challenge' },

  ];

  return (
    <section className="portfolio-container">
      <h2 className="portfolio-header">My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <img src={project.image} alt={project.title} />
            <h6>{project.title}</h6>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
