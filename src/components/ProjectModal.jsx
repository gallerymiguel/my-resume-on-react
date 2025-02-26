// src/components/ProjectModal.jsx
import React from "react";
import { Modal } from "react-bootstrap";

const ProjectModal = ({ show, handleClose, project }) => {
  if (!project) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{project.description}</p>
        <h6>Technologies Used:</h6>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
