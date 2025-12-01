import React from "react";

import { Container, Row, Col } from "react-bootstrap";
function Skill() {
  return (
    // <div className="py-5">
    //   <Container >
    //     <h2 className="text-center mb-4">Skills</h2>

    //     {/* Row 1 */}
    //     <Row className="text-center mb-4">
    //       <Col xs={6} md={3} className="mb-3">
    //         <img
    //           src="src/images/html.png"
    //           alt="HTML"
    //           className="img-fluid"
    //         />
    //       </Col>

    //       <Col xs={6} md={3} className="mb-3">
    //         <img
    //           src="src/images/css.png"
    //           alt="CSS"
    //           className="img-fluid"
    //         />
    //       </Col>

    //       <Col xs={6} md={3} className="mb-3">
    //         <img
    //           src="src/images/js.png"
    //           alt="JavaScript"
    //           className="img-fluid"
    //         />
    //       </Col>

    //       <Col xs={6} md={3} className="mb-3">
    //         <img
    //           src="src/images/react.png"
    //           alt="React"
    //           className="img-fluid"
    //         />
    //       </Col>
    //     </Row>

    //     {/* Row 2 */}
    //     <Row className="text-center">
    //       <Col xs={6} md={3} className="mb-3">
    //         <img
    //           src="src/images/nodejs.png"
    //           alt="Node.js"
    //           className="img-fluid"
    //         />
    //       </Col>

    //       <Col xs={6} md={3} className="mb-3">
    //         <img
    //           src="/images/express.png"
    //           alt="Express"
    //           className="img-fluid"
    //         />
    //       </Col>

    //       <Col xs={6} md={3} className="mb-3">
    //         <img
    //           src="src/images/mongodb.png"
    //           alt="MongoDB"
    //           className="img-fluid"
    //         />
    //       </Col>

    //       <Col xs={6} md={3} className="mb-3">
    //         <img
    //           src="/images/git.png"
    //           alt="Git"
    //           className="img-fluid"
    //         />
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>

    <div className="py-5" id="skill">
      <Container className="px-4 px-md-5"> 
        {/* Added padding on left & right */}
        
        <h2 className="text-center mb-4">Skills</h2>

        {/* Row 1 */}
        <Row className="text-center mb-4">
          <Col xs={6} md={3} className="mb-3">
            <img
              src="/images/html.png"
              alt="HTML"
              className="skill-img"
            />
            <p>HTML</p>
          </Col>

          <Col xs={6} md={3} className="mb-3">
            <img
              src="/images/css.png"
              alt="CSS"
              className="skill-img"
            />
            <p>CSS</p>
          </Col>

          <Col xs={6} md={3} className="mb-3">
            <img
              src="/images/js.png"
              alt="JavaScript"
              className="skill-img"
            />
            <p>Java Script</p>
          </Col>

          <Col xs={6} md={3} className="mb-3">
            <img
              src="/images/react.png"
              alt="React"
              className="skill-img"
            />
            <p>React</p>
          </Col>
        </Row>

        {/* Row 2 */}
        <Row className="text-center">
          <Col xs={6} md={3} className="mb-3">
            <img
              src="/images/nodejs.png"
              alt="Node.js"
              className="skill-img"
            />
            <p>Node JS</p>
          </Col>

          <Col xs={6} md={3} className="mb-3">
            <img
              src="/images/express.png"
              alt="Express"
              className="skill-img"
            />
            <p>Express JS</p>
          </Col>

          <Col xs={6} md={3} className="mb-3">
            <img
              src="/images/mongodb.png"
              alt="MongoDB"
              className="skill-img"
            />
            <p>Mongo DB</p>
          </Col>

          <Col xs={6} md={3} className="mb-3">
            <img
              src="/images/git.png"
              alt="Git"
              className="skill-img"
            />
            <p>GIT</p>
          </Col>
        </Row>
      </Container>
    </div>


  );
}

export default Skill;
