import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    // Main container with gray background and white text
    <div className="bg-dark text-white py-5" id="contact">
      <Container>
        {/* Large Title */}
        <h1 className="display-3 fw-bold mb-5">Reach Out to Me</h1>

        {/* Contact Information in 3 Columns */}
        <Row className="mb-5">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Address</h5>
            <p>
             Kakkanad, Ernakulam <br />
              Kerala, India 682021
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Email</h5>
            <p>midhinababu@gmail.com</p>
          </Col>
          <Col md={4}>
            <h5 className="text-uppercase fw-bold">Phone</h5>
            <p>(+91) 9846281314</p>
          </Col>
        </Row>

        {/* "Let's collaborate" Link at the Bottom Right */}
        <div className="d-flex justify-content-end align-items-center mt-5">
          <a href="#collaborate" className="text-white text-decoration-none fs-5 d-flex align-items-center">
            Download Resume<ArrowRight className="ms-2" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;