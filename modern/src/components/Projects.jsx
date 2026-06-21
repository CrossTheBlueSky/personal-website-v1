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
      name: "Ebb — Mental State Journal",
      image: "modern/ebb-placeholder.jpeg",
      technologies: ["TypeScript", "React", "Python", "TailwindCSS", "ChartJS", "PostgreSQL"],
      description: "A journaling app that lets you color-code your moods and chart mood trends over time.",
      modalImage: "modern/src/assets/ebb-screenshot.png",
      github: "https://github.com/crossthebluesky/ebb-journaling-v2",
    },
    {
      id: 2,
      name: "D&D Nearby: 5e Character Builder",
      image: "modern/nearby-placeholder-2.webp",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "MantineUI"],
      description: "Streamlines the process and automates the math required to build a character for D&D 5th Edition.",
      modalImage: "modern/src/assets/nearby-screenshot.png",
      github: "https://github.com/crossthebluesky/DnD-Nearby-5e-Character-Builder",
    },
    {
      id: 3,
      name: "Milestone Fitness",
      image: "modern/milestone-splash-1.png",
      technologies: ["React", "Python", "SQLAlchemy", "Flask", "Bootstrap"],
      description: "A fitness app that uses machine learning to break large performance goals into smaller, achievable steps.",
      modalImage: "modern/src/assets/milestone-screenshot.png",
      github: "https://github.com/crossthebluesky/Milestone-Fitness-App",
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
            <a href={activeProject?.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2 mb-2">View on GitHub</a>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Projects;