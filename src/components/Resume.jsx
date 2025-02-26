// src/components/Resume.jsx
import React from 'react';
import './Resume.css'; // Make sure this line is present
import { FaFileDownload } from 'react-icons/fa'; // You can install react-icons if you haven't already

const Resume = () => {
  return (
    <section className="resume-container">
      <div className="resume-header">
        <h2>My Resume</h2>
        <a href="/CodingResume.pdf" download className="resume-link">
          <button className="resume-btn">
            <FaFileDownload /> Download Resume
          </button>
        </a>
      </div>

      <div className="skills-container">
        <div className="skills-section">
          <h3>Front-End Development</h3>
          <ul>
            <li>HTML, CSS, and JavaScript</li>
            <li>React.ts and Typescript</li>
            <li>React.js & JSX</li>
            <li>Responsive Web Design</li>
            <li>CSS Frameworks (Bootstrap, Tailwind CSS)</li>
            <li>Version Control with Git</li>
            <li>UI/UX Design Principles</li>
          </ul>
        </div>

        <div className="skills-section">
          <h3>Back-End Development</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Database Management with PostgreSQL</li>
            <li>RESTful APIs</li>
            <li>Authentication (JWT, Passport.js)</li>
            <li>Testing with Cypress</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
