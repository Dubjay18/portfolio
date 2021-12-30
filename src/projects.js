import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Tilt from "react-tilt";
import { Data } from "./data";

const Projects = () => {
  return (
    <div className=" " id="projects">
      <div
        className="d-flex justify-content-center align-items-center"
        id="projects"
      >
        {" "}
        <h1>PROJECTS</h1>
      </div>

      <div>
        <Container className="mt-5 pb-5">
          {Data.map((e) => (
            <Row className="w-100 pb-prime">
              <Col lg={5} sm={12}>
                <div className="w-100  ">
                  <h3>{e.name}</h3>
                  <p className="mb-4">{e.dep}</p>
                  <div className="d-flex">
                    <Button variant="outline-dark">
                      {/* <a href={e.see_live && `${e.see_live}`}></a> */}
                      <a
                        href={e.see_live && `${e.see_live}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        See Live
                      </a>
                    </Button>
                    <a
                      href={e.source_code && `${e.source_code}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-color-main cta-btn"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={7} sm={12}>
                <div>
                  {" "}
                  <Tilt options={{ max: 26 }}>
                    <img
                      src={e.img_src}
                      alt=""
                      width="60%"
                      className="shadow-lg"
                    />
                  </Tilt>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Projects;
