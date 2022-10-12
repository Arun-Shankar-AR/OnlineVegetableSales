import React, { useState } from "react";
import { Navbar, Container, Nav, Col, Form, Row } from "react-bootstrap";
import starnofill from "./Img/starnofill.webp";
import starfill from "./Img/starfill.png";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  let navigate = useNavigate();
  const [status, setStatus] = useState({
    feedback: "",
    rating: null,
  });
function feedback(){
  alert("Feedback Submitted!!")
  navigate('/home')
}

  return (
    <div>
      
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      
      <Container fluid>
        <Row>
          <Col md={3}>
            <Row style={{ padding: 10 }}>
              <Col md={6} style={{ alignSelf: "center" }}>
                Feedback
              </Col>
              <Col md={6}>
                <Form.Control
                  type="text"
                  value={status.feedback}
                  placeholder="Feedback"
                  onChange={(e) =>
                    setStatus({ ...status, feedback: e.target.value })
                  }
                />
              </Col>
            </Row>
            <Row style={{ padding: 10 }}>
              <Col md={6} style={{ alignSelf: "center" }}>
                Rating
              </Col>
              <Col md={6}>
                <Row>
                  {[1, 2, 3, 4, 5].map((val, index) => (
                    <div
                      onClick={() => setStatus({ ...status, rating: index })}
                    >
                      {status.rating != null ? (
                        index > status.rating ? (
                          <img src={starnofill} style={{ height: 24 }} />
                        ) : (
                          <img src={starfill} style={{ height: 22 }} />
                        )
                      ) : (
                        <img src={starnofill} style={{ height: 24 }} />
                      )}
                    </div>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <button style={{marginLeft:'200px'}} className="btn btn-primary float-start" onClick={feedback}>
                      Submit
                    </button>
      </Container>
    </div>
  );
};

export default Feedback;
