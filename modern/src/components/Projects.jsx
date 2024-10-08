import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import nearbyImage from '/nearby-screenshot.png'


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
      name: "Ebb - A Journaling App",
      image: "modern/ebb-placeholder.jpeg",
      technologies: ["TypeScript", "React", "Python", "TailwindCSS", "ChartJS", "PostgreSQL"],
      description: " A journaling app that tracks and visualizes your mood patterns over time",
      modalImage: "modern/src/assets/ebb-screenshot.png",
      github: "https://github.com/CrossTheBlueSky/ebb-journaling-v2",
      demo: "#"
    },
    {
      id: 2,
      name: "D&D Nearby",
      image: "modern/nearby-placeholder-2.webp",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "MantineUI"],
      description: "An App I made to streamline the creation of characters for 5e Dungeons and Dragons.",
      modalImage: "modern/src/assets/nearby-screenshot.png",
      github: "https://github.com/CrossTheBlueSky/DnD-Nearby-5e-Character-Builder",
      demo: "#"
    },
    {
      id: 3,
      name: "Milestone Fitness",
      image: "modern/milestone-splash-1.png",
      technologies: ["React", "Python", "SQLAlchemy", "Flask", "Bootstrap"],
      description: " A fitness app that utilizes machine learning to break down large fitness goals into smaller steps.",
      modalImage: "modern/src/assets/milestone-screenshot.png",
      github: "https://github.com/CrossTheBlueSky/Milestone-Fitness-App",
      demo: "#"
    },

  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">My Projects</h1>
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
          <div className="d-flex flex-wrap">
            <a href={activeProject?.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2 mb-2">GitHub Repo</a>
            <a href={activeProject?.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mb-2">Live Demo</a>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Projects;