import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Contact Me</h1>
      <Row>
        <Col md={6} className="mb-4 mb-md-0">
          <h3>Get in Touch</h3>
          <p>Reach out to me via email, or find me at the links below!</p>
          <div className="d-flex mb-3">
            <FaEnvelope className="me-2" />
            <span>derek.mercedes@gmail.com</span>
          </div>
          <div className="mb-3">
            <a href="https://github.com/crossthebluesky" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/derek-mercedes" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://dev.to/crossthebluesky" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={24} />
            </a>
          </div>
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;