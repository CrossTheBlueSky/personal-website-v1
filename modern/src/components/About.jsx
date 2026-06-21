import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import derekImage from '/new_site_photo.png';

function About() {
  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">About Me</h1>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col xs={12} sm={12} md={4} lg={4} className="mb-4 mb-md-0">
        <div className="circular-image-container mb-4">
          <Image 
            src={derekImage}
            rounded 
            alt="Derek Mercedes"
            className="mx-auto circular-image"
          />
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={0}>
        </Col>
        <Col xs={12} sm={12} md={5} lg={7}className="text-start">
          <p>
            I'm an AWS-Certified Full-Stack Software Engineer based in Denver, Colorado.
            I build responsive web applications and RESTful APIs with microservices and cloud
            technologies, with a strong background in management and customer-facing work.
          </p>
          <p>
            My path into software spans game-development AI at Full Sail University, IT support
            at scale, and freelance full-stack delivery for clients who need reliable APIs,
            e-commerce storefronts, and cloud migrations.
          </p>
          <p>
            I care about maintainable code, clear documentation, and shipping work that holds up
            after handoff. If you need someone who can own a feature from API to UI, I would
            love to connect.
          </p>
          <p className="mb-0">
            <strong>Credentials:</strong> AWS Certified Developer, Full-Stack Software Engineering
            (Flatiron School), B.S. Computer Science — Game Development (Full Sail University).
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;