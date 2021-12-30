import React from "react";
import Button from "react-bootstrap/Button";
import abpic from "./images/ab.jpg";
import { Row, Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
const About = () => {
  return (
    <div className="bg p-lg-5 hero " id="about">
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          {" "}
          <h1>About Me</h1>
        </div>

        <Row>
          <Col md={6} sm={12}>
            <img src={abpic} width="50%" height="100%" alt="" className="ob" />
          </Col>
          <Col md={6} sm={12} className="p-lg-0 pb-5">
            <p className="w-100 mt-5 ">
              I'm passionate about tech, i've been a full-stack developer for
              one year, i'm a good problem solver, a chess player and a hard
              working person. I have experience in the following technologies:
              React Js, Redux, Mongodb, Firebase, Postgresql, HTML, CSS, Materal
              UI, Tailwind CSS and Next Js.
            </p>
            <Button variant="outline-light">View Resume</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
