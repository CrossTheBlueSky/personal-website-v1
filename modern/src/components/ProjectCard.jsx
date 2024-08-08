import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProjectCard({ project, onLearnMore }) {
  return (
    <Card>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>
          Technologies: {project.technologies.join(", ")}
        </Card.Text>
        <Button variant="primary" onClick={() => onLearnMore(project)}>
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;