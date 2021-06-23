import React from "react";
import "./App.css";

import Projects from "./Components/Projects";

//import { NavLink, Link } from 'react-router-dom';
//import {Navbar,Modal,Button,Row,Col, Form,ButtonGroup, Alert,ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
//import bootstrap from 'bootstrap'
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import { Navbar, Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import ProjectPicsModal from "./Components/ProjectPicsModal.js";
import { Reveal, Fade, Rotate } from "react-reveal";

/*dont use container with image maybe use image in div*/
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

require("intersection-observer");

export class App extends React.Component {
  render() {
    //Active navigation on scroll
    window.addEventListener("scroll", (event) => {
      let navigationLinks = document.querySelectorAll("nav.navbar.nav-link a");
      let fromTop = window.scrollY;
      let navbar = document.querySelector("nav.navbar.nav-link");
      let navbarHeight = navbar.offsetHeight;
      let scrollPosition = window.scrollY;

      let homeLink = document.querySelector('[href~="#home"]');

      console.log(homeLink);

      navigationLinks.forEach((link) => {
        let section = document.querySelector(link.dataset.section);

        let sectionHeight = section.offsetHeight;

        if (
          section.offsetTop - navbarHeight <= scrollPosition &&
          section.offsetTop - navbarHeight + sectionHeight > fromTop
        ) {
          homeLink.classList.remove("active");
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });

    return (
      <div>
        <Container fluid="true"  id="home">
          <Navigation id="nav"></Navigation>

          <Home/>
          <div></div>
          
          <Container
            id="projects"
            fluid="true"
          >
            <Projects></Projects>
          </Container>
          <Container
          id='aboutme'
            fluid="true"
          >
            <AboutMe></AboutMe>
          </Container>

          
          <Container
            id="skills"
            fluid="true"
            onScroll={() => {
              
            }}
          >
            <Skills></Skills>
          </Container>

          <Container
            id="experience"
            fluid="true"
          
            onScroll={() => {
              
            }}
          >
            <Experience></Experience>
          </Container>

          <Container
            id="education"
            fluid="true"
            
          >
        <Education></Education>
          </Container>
         
          <Footer></Footer>
        </Container>
      </div>
    );
  }
}
export default App;
