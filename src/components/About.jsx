// About.jsx
import React from 'react';
import '../components/About.css';

const About = () => {
  return (
    <section className="about-container">
      <h2 className="about-header">About Me</h2>
      <div className="about-content">
        <img
          src="/me.jpeg" // This is your profile image
          alt="Profile"
          className="about-profile-image"
        />
        <div className="about-text">
          <p>
            Hi, I'm Miguel Urdiales, a <strong>Full-Stack Developer</strong> passionate about building modern web applications.
            I specialize in technologies like React, Node.js, and Express. When I'm not coding, I enjoy going to the gym
            and competitive gaming.
          </p>
          <p>
            Check out my projects in the <strong>Portfolio Tab</strong> to see some of my work!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
