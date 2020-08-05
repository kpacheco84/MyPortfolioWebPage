import React, {Component} from 'react';
import '../App.css';

import {Navbar,Nav} from 'react-bootstrap';
//use fontawesome

const  Navigation = () => {

 
  


 
      return (
<div>
  <Navbar className="navbar navbar-expand-sm navbar-custom bg-primary navbar-custom nav-item nav-link red" bg="dark" variant="dark" fixed='top' >
    
    <Nav className="nav mr-auto nav-item pill-3 nav-link" variant="pills" defaultActiveKey="#home">
    <Nav.Link className= 'coral' style={{color:'white'}} href="#home">Home</Nav.Link>
      <Nav.Link  className= 'coral' style={{color:'white'}} href="#aboutme">About Me</Nav.Link>
      <Nav.Link className= 'coral' style={{color:'white'}} href="#skills">Skills</Nav.Link>
      <Nav.Link className= 'coral' style={{color:'white'}} href="#projects">Projects</Nav.Link>
      <Nav.Link  className= 'coral' style={{color:'white'}} href="#experience">Experience</Nav.Link>
      <Nav.Link className= 'coral' style={{color:'white'}} href="#education">Education</Nav.Link>
    </Nav>
    
  </Navbar>
  
</div>
      )
};


export default Navigation;
