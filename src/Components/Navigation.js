import React from "react";
import "../App.css";

import { Navbar, Nav } from "react-bootstrap";

//NEED TO FIX NAV AN FOOTER WIDTH SO IT DOESNT SPAN TO WIDE AND REQUIRE SCROLLING

const Navigation = () => {
  return (
    <div>
      <Navbar
        className="navbar bg-primary nav-item nav-link red"
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Nav
          className="nav mr-auto nav-item pill-3 nav-link"
          variant="pills"
          defaultActiveKey="#home"
        >
          <Nav.Link
            className="coral"
            style={{ color: "white" }}
            href="#home"
            data-section="#home"
          >
            Home
          </Nav.Link>
          <Nav.Link
            className="coral"
            style={{ color: "white" }}
            href="#aboutme"
            data-section="#aboutme"
          >
            About Me
          </Nav.Link>
          <Nav.Link
            className="coral"
            style={{ color: "white" }}
            href="#projects"
            data-section="#projects"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            className="coral"
            style={{ color: "white" }}
            href="#skills"
            data-section="#skills"
          >
            Skills
          </Nav.Link>
          <Nav.Link
            className="coral"
            style={{ color: "white" }}
            href="#experience"
            data-section="#experience"
          >
            Experience
          </Nav.Link>
          <Nav.Link
            className="coral"
            style={{ color: "white" }}
            href="#education"
            data-section="#education"
          >
            Education
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
