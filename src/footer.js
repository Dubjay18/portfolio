import React from "react";
import { ArrowBarUp, Linkedin, Github } from "react-bootstrap-icons";
const Footer = ({ up }) => {
  return (
    <div className="footer d-flex justify-content-center align-items-center">
      <div>
        <div className=" d-flex justify-content-center align-items-center">
          {" "}
          <ArrowBarUp className="footer-font" onClick={up} />
        </div>

        <div className="d-flex justify-content-between  w-100 footer-small">
          <div className="p-5 social-links">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              <Linkedin className="" />
            </a>
          </div>
          <div className="p-5 social-links">
            <a
              href="https://github.com/Dubjay18"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Github className="social-links" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
