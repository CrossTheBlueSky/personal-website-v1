import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProjectCard({ project, onLearnMore }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={project.image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{project.name}</Card.Title>
        <Card.Text className="flex-grow-1">
          {project.technologies.join(", ")}
        </Card.Text>
        <Button variant="primary" onClick={() => onLearnMore(project)}>
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;