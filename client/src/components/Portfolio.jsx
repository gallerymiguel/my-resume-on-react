import React from "react";
import "./Portfolio.css"; // Custom styling
import projects from "../data/projects"; // Import project data
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <main className="main-content">
      <section className="portfolio-container container">
        <h2 className="portfolio-header text-center my-4">My Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card h-100 position-relative">
                <div className="hover-icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <Link to={`/projects/${project.slug}`} style={{ textDecoration: "none" }}>
                  {project.promo_video ? (
                    <video
                      className="card-img-top hover-effect"
                      controls
                      muted
                      loop
                      autoPlay
                      playsInline
                    >
                      <source src={project.promo_video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      className="card-img-top hover-effect"
                      alt={project.title}
                    />
                  )}
                </Link>

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
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success"
                      >
                        Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
