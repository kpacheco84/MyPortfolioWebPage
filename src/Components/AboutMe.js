import React, { Component } from 'react'
import '../App.css'

import { Container, Row, Col } from 'react-bootstrap'
import { Reveal, Fade, Rotate, Flip } from 'react-reveal'

import FontAwesome from 'react-fontawesome'

//, in section style

const AboutMe = () => {
  return (
    <div id="aboutme" className="aboutme">
      <div>
        <Fade duration={3000}>
          <h1>About Me</h1>
        </Fade>
      </div>
      <div className="aboutme_content">
        <div className="aboutme_box">
          <Fade bottom cascade duration={2000}>
            <div>
              <section>
                <p>
                  I have over 8 years experience in Business Intelligence and
                  Data analysis and 3 years Application Development Experience.
                </p>
                <br></br>
                <p>
                  I enjoy developing on-demand and ad-hoc reports and
                  interactive dashboards. I also enjoy creating applications
                  that help businesses automate, grow or make their business
                  processes more efficient, and if I can add embedded analytics
                  to an application its{' '}
                  <span style={{ fontSize: '40px', color: 'red' }}>
                    &#9829;
                  </span>
                </p>
                <br></br>
                <p>
                  My skills continue to grow and evolve as I do consider myself
                  I life long learner.
                </p>
              </section>
            </div>
          </Fade>
          <br></br>
          <Rotate bottom delay={500} duration={2000}>
            <a href="mailto: katherinepacheco001@gmail.com">
              <button className="btn_contact">Contact Me</button>
            </a>
          </Rotate>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
