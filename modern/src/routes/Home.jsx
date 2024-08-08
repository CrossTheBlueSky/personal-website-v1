import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Home() {
  return (
    <Container fluid className="p-0">
      <Row className="align-items-center hero">
        <Col md={6} className="text-center text-md-end">
          <Image 
            src="https://via.placeholder.com/400" 
            roundedCircle 
            fluid 
            alt="Derek Mercedes"
            className="mb-3 mb-md-0"
          />
        </Col>
        <Col md={6} className="text-center text-md-start">
          <h1 className="display-4">Hi there!</h1>
          <h2 className="display-5">I'm Derek Mercedes.</h2>
          <p className="lead">I make things for computers.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;