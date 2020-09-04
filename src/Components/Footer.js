import React from "react";
import "../App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

//Footer icons disappear when minimizing window

const Footer = () => {
  return (
    <div>
      <Navbar
        className="navbar navbar-custom bg-primary"
        bg="dark"
        variant="dark"
        fixed="bottom"
      >
        <Container>
          <a href="https://www.linkedin.com/in/k-p-693183193" target="_blank">
            <FontAwesome
              className="super-crazy-colors"
              name="linkedin"
              size="2x"
              style={{
                textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                color: "white",
                marginLeft: "700px",
                padding: "10px",
                textAlign: "right",
              }}
            />
          </a>
          <a href="https://github.com/kpacheco84" target="_blank">
            <FontAwesome
              className="super-crazy-colors "
              name="github"
              //cssModule={faStyles}
              size="2x"
              style={{
                textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                color: "white",
                padding: "10px",
                textAlign: "right",
              }}
            />
          </a>
          <a href="mailto: katherinepacheco001@gmail.com">
            <FontAwesome
              className="super-crazy-colors"
              name="envelope"
              //cssModule={faStyles}
              size="2x"
              style={{
                textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                color: "white",
                padding: "10px 10px 10px 10px",
              }}
            />
          </a>
          <h1
            style={{
              fontWeight: "50",
              fontStyle: "italic",
              fontSize: "22px",
              color: "white",
              textAlign: "right",
            }}
          >
            Katherine Pacheco 2020
          </h1>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
