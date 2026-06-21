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
            I&apos;m Derek Mercedes, an AWS-certified full-stack developer based in Denver, Colorado, with expertise in JavaScript, TypeScript, React, and Python. I build responsive web applications and RESTful APIs using microservices and cloud technologies.
          </p>
          <p>
            My path into tech runs from game development and AI at Full Sail University through hospitality management to full-stack engineering. That mix of technical depth and people-first leadership shapes how I approach every project.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me doing circus acrobatics, playing video and tabletop games, and spending time with my dog.
          </p>
          <p>
            Feel free to explore my projects below, or reach out if you&apos;d like to collaborate or chat about tech.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;