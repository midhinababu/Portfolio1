import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../index.css" 

function Headsection() {
  return (
    <div className="hero-section" id="home">
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE */}
          <Col md={6} className="text-dark">
            <h1 className="fw-bold display-5">Hi, I'm Midhina Babu</h1>
            <p className="lead">MERN Stack Developer</p>

            <div className="social-icons mt-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="/images/Gemini2.png"
              alt="profile"
              className="img-fluid hero-profile-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Headsection;
