import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectPage.css"; // Custom styles for the project page

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h2 className="text-center mt-5">Project not found</h2>;
  }

  return (
    <div className="container my-5">
      <div className="glass-card p-4 shadow-sm">
        <h1 className="mb-3 text-center">{project.title}</h1>
        <p className="lead">{project.description}</p>

        {project.demo_video && (
          <div className="my-4">
            <video
              src={project.demo_video}
              className="w-100 rounded shadow"
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div className="row g-4">
          <div className="col-md-6">
            <div className="glass-card p-3 shadow-sm">
              <h4>Key Features</h4>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="glass-card p-3 shadow-sm">
              <h4>Tech Stack</h4>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="glass-card p-3 shadow-sm mt-4">
          <h4>Links</h4>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light me-2"
          >
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success me-2"
            >
              Live Site
            </a>
          )}
          {project.store && (
            <a
              href={project.store}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Chrome Web Store
            </a>
          )}
        </div>
        <h3 className="mt-5 text-center">Screenshots</h3>
        <div className="row g-4 mt-4">
          {project.images.map((img, index) => (
            <div key={index} className="col-md-6">
              <div className="glass-card shadow-sm">
                <img
                  src={typeof img === "string" ? img : img.src}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="project-screenshot img-fluid rounded"
                  style={
                    typeof img === "object" ? { aspectRatio: img.aspect } : {}
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
