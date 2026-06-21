import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero py-0">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col md={8}>
            <h1 className="display-4 mt-4">Derek Mercedes</h1>
            <h2 className="h3 mb-2">Full-Stack Software Engineer</h2>
            <p className="lead mb-4">
              AWS-certified developer building responsive web applications, RESTful APIs,
              and cloud-native solutions with JavaScript, TypeScript, React, and Python.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;