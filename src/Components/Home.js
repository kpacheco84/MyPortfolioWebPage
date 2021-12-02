import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css'
import { Fade, Reveal, Flip, Zoom } from 'react-reveal'

import hero_svg from '../assets/hero_svg.svg'
import hero_phrase from '../assets/hero_phrase.svg'
import FontAwesome from 'react-fontawesome'

const Header = () => {
  return (
    <div className="hero">
      <Container fluid="true" className="header">
        <div className="header_title">
          <div className="content_left">
            <Row>
              <Col>
                <img style={{ width: '350px' }} src={hero_phrase} />
              </Col>
            </Row>

            <Row>
              <Col>
                <Zoom left>
                  <a href="mailto: katherinepacheco001@gmail.com">
                    <button className="btn_contact">Contact Me</button>
                  </a>
                </Zoom>
              </Col>
            </Row>
          </div>
        </div>
        <div className="content_right">
          <Fade duration={2000}>
            <img className="hero_img" src={hero_svg}></img>
          </Fade>
        </div>
      </Container>
    </div>
  )
}

export default Header
