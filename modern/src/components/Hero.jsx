import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import heroImage from '/derek.png';

const Hero = () => {
  return (
    <section className="hero py-0">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col md={8}>
            <h1 className="display-4 mt-4">My name is Derek.</h1>
            {/* <div className="circular-image-container mb-4">
              <img 
                src={heroImage}
                alt="Derek Mercedes" 
                className="img-fluid circular-image"
              />
            </div> */}
            <h2 className="h3 mb-4">I make things for computers.</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;