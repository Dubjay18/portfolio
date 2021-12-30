import { Button } from "react-bootstrap";
import React from "react";

const Nav = ({ home, proj, about, contact }) => {
  return (
    <>
      <style type="text/css">
        {`
      .btn-main{
          background-color:transparent;
          color:white;
          transition: all .7s;

      }
      .btn-main:hover{
          transform:scale(1.3);
          color:white;
      }
      `}
      </style>
      <div className="d-flex justify-content-center py-2 bg" id="nav">
        <Button variant="main" onClick={home}>
          Home
        </Button>
        <Button variant="main" onClick={about}>
          About
        </Button>
        <Button variant="main" onClick={proj}>
          Projects
        </Button>
        <Button variant="main" onClick={contact}>
          Contact
        </Button>
      </div>
    </>
  );
};

export default Nav;
