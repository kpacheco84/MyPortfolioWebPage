import React, {Component} from 'react';
import '../App.css';

import {Navbar,Nav,Modal,Button,Row,Col, Form,ButtonGroup, Alert,ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
//use fontawesome

const  Navigation = () => {

 
      return (
<div>
  <Navbar className="navbar navbar-expand-sm navbar-custom bg-primary navbar-custom nav-item nav-link" bg="dark" variant="dark" fixed='top' >
    
    <Nav className="mr-auto nav-item pill-3 nav-link" variant="pills" defaultActiveKey="/home">
    <Nav.Link style={{color:'white'}} href="#home">Home</Nav.Link>
      <Nav.Link  style={{color:'white'}} href="#aboutme">About Me</Nav.Link>
      <Nav.Link style={{color:'white'}} href="#skills">Skills</Nav.Link>
      <Nav.Link style={{color:'white'}} href="#projects">Projects</Nav.Link>
      <Nav.Link style={{color:'white'}} href="#experience">Experience</Nav.Link>
      <Nav.Link style={{color:'white'}} href="#education">Education</Nav.Link>
    </Nav>
    
  </Navbar>
  
</div>
      )
};


export default Navigation;