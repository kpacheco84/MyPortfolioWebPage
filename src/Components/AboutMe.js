import React, { Component } from "react";
import "../App.css";
import { Reveal, Fade, Rotate } from "react-reveal";

//, in section style

const AboutMe = () => {
  return (
    <Fade bottom cascade>
      <div id="aboutme">
        <h1 style={{ paddingTop: "60px", textAlign: "center" }}>About Me</h1>
        <br></br>
        <section
          style={{
            paddingBottom: "50px",
            paddingLeft: "25%",
            paddingRight: "25%",
          }}
        >
          <p style={{ textIndent: "50px" }}>
            {" "}
            My love for programming and everything data began as a Customer
            Service Supervisor when I was involved in the Business Requirements
            gathering and User Acceptance Testing of our first custom Customer
            Service application. It was what lighted up a passion in me and
            helped me finally decide what I wanted to Major in. I went back to
            college. I created my very first Microsoft Access application to
            help my Employer at the time go paperless back in 2008; when this
            was the beginning trend of every small to major corporation.
          </p>
          <br></br>
          <p style={{ textIndent: "50px" }}>
            I graduated with my Bachelors's in Management Information Systems in
            2013. I've had to wear many hats throughout my career; from Business
            Analyst, Database Programmer, BI Developer, Application Developer,
            Reporting Analyst, Software Developer and much more. I feel
            this has made me a well-rounded asset in the Tech Industry in that I
            have great coding skills AND know how to gather and understand
            business requirements in order to code the best solutions possible.
            My career trajectory has led me to ultimately become a 
            well-rounded FullStack Software Developer. 
            I am constantly growing my skills as I do consider 
            myself a lifelong learner. 
            I have a passion for developing Software and Applications that provide effective, 
            efficient and priceless business solutions. 
          </p>
        </section>
      </div>
    </Fade>
  );
};

export default AboutMe;
