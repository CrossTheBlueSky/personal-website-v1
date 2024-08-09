import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to a server or email service
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
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
          <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
          <div className="d-flex mb-3">
            <FaEnvelope className="me-2" />
            <span>derek.mercedes@example.com</span>
          </div>
          <div className="mb-3">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
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