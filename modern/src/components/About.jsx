import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">About Me</h1>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col xs={12} md={4} className="mb-4 mb-md-0">
          <Image 
            src="https://via.placeholder.com/300" 
            fluid 
            rounded 
            alt="Derek Mercedes"
            className="d-block mx-auto"
          />
        </Col>
        <Col xs={12} md={8}>
          <p>
            Hey there! I'm Derek Mercedes, a Full Stack Developer based in Denver, Colorado. 
            My journey into tech has been a bit of an adventure - from crafting AI for video games at Full Sail University to managing teams in the hospitality industry, and finally finding my true calling in web development.
          </p>
          <p>
            When I'm not coding, you'll find me doing circus acrobatics, playing video and tabletop games, and spending time with my dog.
          </p>
          <p>
            I believe in the power of technology to solve real-world problems and make life a little more fun along the way. If it can make a difference, I'm all in!
          </p>
          <p>
            So if you're looking for someone who combines technical know-how with creativity and a love for other humans, you're in the right place. 
            Let's create something awesome together!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;