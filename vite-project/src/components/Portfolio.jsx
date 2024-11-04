// src/components/Portfolio.jsx
import React from 'react';
import './Portfolio.css'; // Create this file for styling

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'Project 1', image: '/path-to-image1.jpg' },
    { id: 2, title: 'Project 2', image: '/path-to-image2.jpg' },
    { id: 3, title: 'Project 3', image: '/path-to-image3.jpg' },
    { id: 4, title: 'Project 4', image: '/path-to-image4.jpg' },
    { id: 5, title: 'Project 5', image: '/path-to-image5.jpg' },
    { id: 6, title: 'Project 6', image: '/path-to-image6.jpg' },
  ];

  return (
    <section className="portfolio-container">
      <h2 className="portfolio-header">My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
