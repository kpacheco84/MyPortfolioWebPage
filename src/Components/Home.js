import React, {Component} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../App.css';

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
        <h2>Full Stack Software Developer</h2>  
        </Col>
        </Row>
        <Row>
            <Col>
            <button className='btn_contact'>Contact Me</button>
            </Col>
        </Row>
      </div>

</Container>
</div>

    )
};


export default Header;
