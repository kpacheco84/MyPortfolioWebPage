import React, { Component } from "react";
import "../App.css";

import { Container, Row, Col} from 'react-bootstrap';
import { Reveal, Fade, Rotate } from "react-reveal";


import FontAwesome from "react-fontawesome";

//, in section style

const AboutMe = () => {
  return (
        <div id="aboutme" className="aboutme">
        <div>
        <h2 style={{ padding: '60px 0px 20px 145px', textAlign: "left" }}>About Me</h2>
        </div>
    <div  className='aboutme_content'>
      <div className='aboutme_box'>
    <Fade bottom cascade>
      
      <div >
       <section>
          <p>
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
          <p >
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
    </div>
    </div>
    </div>
  );
};

export default AboutMe;
