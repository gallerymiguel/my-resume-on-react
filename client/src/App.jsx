// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About'; // Your existing About Me/Home component
import Portfolio from './components/Portfolio'; // Your Portfolio component
import Contact from './components/Contact'; // Placeholder Contact component
import Resume from './components/Resume'; // Placeholder Resume component
import Footer from './components/Footer'; // Import the Footer component
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
