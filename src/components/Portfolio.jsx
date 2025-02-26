import React, { useState } from "react";
import "./Portfolio.css"; // Custom styling
import ProjectModal from "./ProjectModal"; // Import the new modal component
import projects from "../data/projects"; // Import project data

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null); // Store selected project
  const [showModal, setShowModal] = useState(false); // Modal visibility

  // Handle project click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Handle modal close
  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section
      className={`portfolio-container container ${showModal ? "blurred" : ""}`}
    >
      <h2 className="portfolio-header text-center my-4">My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card h-100 position-relative">
              <div className="hover-icon">
                <i className="fas fa-info-circle"></i>
              </div>
              {project.video ? (
                <video
                  className="card-img-top hover-effect"
                  controls
                  muted
                  loop
                  autoPlay
                  playsInline
                  onClick={() => handleProjectClick(project)}
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={project.image}
                  className="card-img-top hover-effect"
                  alt={project.title}
                  onClick={() => handleProjectClick(project)}
                />
              )}

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <div className="mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary me-2"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal for Project Details */}
      <ProjectModal
        show={showModal}
        handleClose={handleClose}
        project={selectedProject}
      />
    </section>
  );
};

export default Portfolio;
