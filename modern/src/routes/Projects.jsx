import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [show, setShow] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setActiveProject(project);
    setShow(true);
  };

  const projects = [
    {
      id: 1,
      name: "Project 1",
      image: "https://via.placeholder.com/300x200",
      technologies: ["React", "Node.js", "MongoDB"],
      description: "This is a more detailed description of Project 1. It includes information about the project's purpose, challenges faced, and solutions implemented.",
      modalImage: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com"
    },
    {
      id: 2,
      name: "Project 2",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      description: "This is a more detailed description of Project 2. It includes information about the project's purpose, challenges faced, and solutions implemented.",
      modalImage: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com"
    },
    {
      id: 3,
      name: "Project 3",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Angular", "Django", "MySQL"],
      description: "This is a more detailed description of Project 3. It includes information about the project's purpose, challenges faced, and solutions implemented.",
      modalImage: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com"
    }
  ];

  return (
    <Container>
      <h1 className="text-center mb-4">My Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col md={4} key={project.id} className="mb-4">
            <ProjectCard project={project} onLearnMore={handleShow} />
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{activeProject?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={activeProject?.modalImage} alt={activeProject?.name} className="img-fluid mb-3" />
          <p>{activeProject?.description}</p>
          <p><strong>Technologies:</strong> {activeProject?.technologies.join(", ")}</p>
          <p>
            <a href={activeProject?.github} target="_blank" rel="noopener noreferrer" className="me-3">GitHub Repo</a>
            <a href={activeProject?.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </p>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Projects;