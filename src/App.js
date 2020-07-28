import React, {Component} from 'react';
import './App.css';

import Projects from './Components/Projects'
import { BrowserRouter, Route,Switch, Redirect,PrivateRoute, Router,RouteProps} from 'react-router-dom';
//import { NavLink, Link } from 'react-router-dom';
//import {Navbar,Modal,Button,Row,Col, Form,ButtonGroup, Alert,ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import bootstrap from 'bootstrap'
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import {Navbar,Modal,Button,Row,Col, Form,ButtonGroup, Alert,ToggleButton, ToggleButtonGroup, CardGroup, Container} from 'react-bootstrap';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import ProjectPicsModal from './Components/ProjectPicsModal.js';
/* Make each section needed*/
//
//as you scroll down to each section fade up from the bottom the title of each section. jquery commented out below. not sure where to place it
// change pill color on hoover and active
// change to active when focused on specific container
// add image to education and possibly to the projects image
// want to make some wavy edges have svg but not sure how to place it correctly, seems it has to be inside the container
//make containers responsive
//Properly classify each skill and desciptions
//enlarge icons you hover over
import $ from "jquery";



export class App extends React.Component{
  
  

  
  
  render() {
    let zigzag1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,192L288,128L576,192L864,288L1152,160L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>`;
  
    $(document).ready(function() {
      alert("document ready occurred!");
      
    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {
      
      // Calc current offset and get all animatables
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
      
      // Unbind scroll handler if we have no animatables
      if ($animatables.length == 0) {
        $(window).off('scroll', doAnimations);
      }
      
      // Check all animatables and animate them if necessary
      $animatables.each(function(i) {
         var $animatable = $(this);
        if (($animatable.offset().top + $animatable.height() - 20) < offset) {
          $animatable.removeClass('animatable').addClass('animated');
        }
      });
  
    };
    
    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  
  });
  return (
   <div>
     <Container fluid='true' id = 'home'>
     
    <Navigation></Navigation>
    
    <Header></Header>
   
 <Container fluid='true' style={{height:'500px', backgroundSize: '50% 100%',backgroundImage:{zigzag1},
backgroundColor:'white',backgroundRepeat: 'no-repeat',width:'100%'
, margin:'0px 100px 0px 0px'}}>
      <AboutMe></AboutMe>
      
</Container>
     
      <Container id = 'projects' fluid='true' style={{height:'800px',backgroundSize: '100%',
backgroundColor:'#ffcccc',backgroundRepeat: 'no-repeat',width:'100%'
, margin:'0px 100px 0px 0px'}}>
  <Projects></Projects>
    </Container>
    <Container id = 'skills' fluid='true' style={{height:'700px',backgroundSize: '50% 100%',
backgroundColor:'white',backgroundRepeat: 'no-repeat',width:'100%'
, margin:'0px 100px 0px 0px'}}>
   <Skills></Skills>
   </Container>
   <Container id ='experience' fluid='true' style={{height:'900px', width:'auto',backgroundSize: '100%',
backgroundColor:'#ccffff',backgroundRepeat: 'no-repeat',width:'100%'
, margin:'0px 100px 0px 0px'}}>
    <Experience></Experience>
    </Container>
    <Container id = 'education' fluid='true' style={{height:'700px',backgroundSize: '50% 100%',
backgroundColor:'white',backgroundRepeat: 'no-repeat',width:'100%'
, margin:'0px 100px 0px 0px'}}>
     <Education></Education>
     
     </Container>

     <Container id = 'pics' fluid='true' style={{height:'700px',backgroundSize: '50% 100%',
backgroundColor:'white',backgroundRepeat: 'no-repeat',width:'100%'
, margin:'0px 100px 0px 0px'}}>
     <ProjectPicsModal>hello</ProjectPicsModal>
     </Container>
     
    <Footer></Footer>
   
  </Container>
  
    </div>
  );
}
}
export default App;
