import React from 'react';
import { Card} from 'react-bootstrap';

function ProjectCard({ project, onLearnMore }) {
  return (
    <Card className="project-card h-100">
      <Card.Img variant="top" src={project.image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{project.name}</Card.Title>
        <Card.Text className="flex-grow-1">
          {project.technologies.join(", ")}
        </Card.Text>
        {project.github ? (
          <a
            href={project.github}
            className="button btn"
            variant="primary"
            onClick={(event) => {
              event.preventDefault();
              onLearnMore(project);
            }}
          >
            Learn More
          </a>
        ) : (
          <button type="button" className="button btn" onClick={() => onLearnMore(project)}>
            Learn More
          </button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;