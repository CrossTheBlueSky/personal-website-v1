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
      name: "Ebb — Mental State Journal",
      image: "modern/ebb-placeholder.jpeg",
      technologies: ["TypeScript", "React", "Python", "PostgreSQL", "TailwindCSS", "ChartJS"],
      description: "Journaling app that tracks moods associated with entries and charts them over time. Built with a React and TypeScript front end, ChartJS visualizations, and a Python + PostgreSQL API with JWT authentication.",
      modalImage: "modern/src/assets/ebb-screenshot.png",
      github: "https://github.com/CrossTheBlueSky/ebb-journaling-v2",
    },
    {
      id: 2,
      name: "D&D Nearby: 5e Character Builder",
      image: "modern/nearby-placeholder-2.webp",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "MantineUI"],
      description: "Streamlines the process and automates the math required to make a character for D&D 5th Edition. Uses the MERN stack with data from 35+ rulebooks exposed through a RESTful API and printable character sheets.",
      modalImage: "modern/src/assets/nearby-screenshot.png",
      github: "https://github.com/CrossTheBlueSky/DnD-Nearby-5e-Character-Builder",
    },
    {
      id: 3,
      name: "SnapSwap",
      image: "modern/milestone-splash-1.png",
      technologies: ["AWS", "S3", "DynamoDB", "Cognito", "Lambda", "EC2", "SAM"],
      description: "Connects users across the cloud and allows them to swap photos. Built with Amazon S3 and DynamoDB for storage, Cognito for user management, and SAM with EC2 and Lambda for application logic.",
      modalImage: "modern/milestone-splash-1.png",
    },
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Selected Projects</h1>
      <Row className="g-4">
        {projects.map((project) => (
          <Col xs={12} sm={6} md={4} key={project.id}>
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
          {activeProject?.github && (
            <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2 mb-2">GitHub Repo</a>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Projects;
