import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { Container, Row, Col, Card } from 'react-bootstrap';

const Education = () => {
  return (
    <Container className="mt-5" id="educate">
      <Row>
        {/* --- Column 1: Education --- */}
        <Col md={6} className="mb-4">
          <h3 className="border-bottom pb-2 mb-3">Education</h3>
          
          {/* Master's Degree - Added 'shadow' class */}
          <Card className="mb-4 shadow border-0 bg-light">
            <Card.Body>
              <Card.Title className="text-primary">Master of Computer Application</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Calicut University | 2022</Card.Subtitle>
              <Card.Text>
                CCSIT Thalikulam,Thrissur
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Bachelor's Degree - Added 'shadow' class */}
          <Card className="shadow border-0 bg-light">
            <Card.Body>
              <Card.Title className="text-primary">Bachelor of Information Technology</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"> Calicut University | 2019</Card.Subtitle>
              <Card.Text>
CCSIT Thalikulam , Thrissur              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* --- Column 2: Experience --- */}
        <Col md={6}>
          <h3 className="border-bottom pb-2 mb-3">Experience</h3>
          
          {/* Work Experience Entry - Added 'shadow' class */}
          <Card className="shadow border-0">
            <Card.Body>
              <Card.Title className="text-success">Node JS Developer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Kochi | 2023 - 2024</Card.Subtitle>
              <Card.Text as="div"> {/* as="div" is good practice when containing list items */}
                <ul className="mb-0">
                    {/* <li></li> */}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;