import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar className="header p-0" data-bg-color="dark" expand="lg" sticky="top">
      <Container className="p-0 fs-5">
        {/* <Navbar.Brand href="#home">Derek Mercedes</Navbar.Brand> */}
        <Navbar.Toggle className="burger" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;