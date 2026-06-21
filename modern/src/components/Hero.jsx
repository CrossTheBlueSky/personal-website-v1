import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero py-0">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col md={8}>
            <h1 className="display-4 mt-4">Hello! I&apos;m Derek.</h1>
            <h2 className="h3 mb-4">Full-stack software engineer specializing in the MERN stack and AWS.</h2>
            <p className="lead mb-4">
              I build robust, user-friendly web applications. Technology is at its best when it strengthens the human element—that&apos;s what drives me as a developer.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;