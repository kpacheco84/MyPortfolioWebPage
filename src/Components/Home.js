import React, {Component} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../App.css';
import {Fade, Reveal, Flip, Zoom} from 'react-reveal'

const  Header = () => {

  
 
    return (
<div className='hero'>
<Container fluid='true' className ='header' >
   
  <div className='header_title'>
      <Row>
          <Col>
        
            <h1><span className='header_title_first'>i am</span>  Katherine Pacheco <span className='header_title_second'>and i'm a</span></h1> 
         
        </Col>
    </Row>
     <Row>
         <Col>
        <Zoom delay={300} duration={3000}><h2>Full Stack Software Developer</h2>  </Zoom>
        </Col>
        </Row>
        <Row>
            <Col>
            <a href="mailto: katherinepacheco001@gmail.com"><button className='btn_contact'>Contact Me</button></a>
            </Col>
        </Row>
      </div>

</Container>
</div>

    )
};


export default Header;
