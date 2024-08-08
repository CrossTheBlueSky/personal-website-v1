import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si';

function Footer() {
  return (
    <footer className="bg-light py-3 mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
              <FaLinkedin size={24} />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://dev.to/yourusername" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
              <SiDevdotto size={24} />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
              <FaGithub size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;