import React from 'react';
import './Footer.css'; // Create this file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/gallerymiguel" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/miguelurdialesgallery/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/miguel__urdiales/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Miguel Urdiales All rights reserved.</p>
    </footer>
  );
};

export default Footer;
