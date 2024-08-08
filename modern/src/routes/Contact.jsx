import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email and message to your server
    // For now, we'll just show an alert
    console.log('Email:', email);
    console.log('Message:', message);
    setShowAlert(true);
    setEmail('');
    setMessage('');
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <Container>
      <h1 className="text-center mb-4">Contact Me</h1>
      <h2 className="text-center mb-4">
        Send me a message </h2>
        <h6 className="text-center mb-4">(Or scroll down to find me in other places!)</h6>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Your message has been sent successfully!
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Your Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5} 
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;