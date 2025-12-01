import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbarheader() {
  return (
    <div>
         <Navbar bg="light" expand="lg">
      <Container>
        {/* Left Side Heading */}
        <Navbar.Brand href="#home" className="fw-bold">
          Midhina Babu
        </Navbar.Brand>

        {/* Hamburger menu for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Right Side Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#educate">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navbarheader