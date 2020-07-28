
import React, {Component} from 'react';
import '../App.css';
import { NavLink, Link } from 'react-router-dom';
import {Navbar,Modal,Button,Row,Col, Form,ButtonGroup, Alert,ToggleButton, ToggleButtonGroup, CardGroup, CardImg, Carousel, CarouselItem, CarouselProps} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import MyPic from '../assets/MyPic.jpg'
//use fontawesome
import FontAwesome from 'react-fontawesome'
//import faStyles from 'font-awesome/css/font-awesome.css'
import Navigation from './Navigation'
import Header from './Header'
import $ from "jquery";
//<Navigation></Navigation>
//import images
import fiu from '../assets/FIU-Panther.png'
import phrase from '../assets/phrasehunter.png'
import portfolio from '../assets/portfolio.png'
import empAPI from '../assets/empAPI.png'




const  ProjectPicsModal = () => {

      const projects = [
          {image:portfolio,title: "My Portfolio",desc: 'One Page React App', tech: ['AWS S3','React','Bootstrap','CSS'],github:'https://github.com/kpacheco84/MyPortfolioWebPage.git',run:'',pics:''},
          {image:phrase,title: "OOP Phrase Game", desc: 'OOP Game',tech: ['AWS S3','React','Bootstrap','JQuery'],github:'https://github.com/kpacheco84/4-OOPGame.git',run:'https://kpacheco84.github.io/4-OOPGame/', pics:''},
          {image:empAPI,title: "Employee API List", desc: 'API Employee Directory',tech: ['Github Pages','RestfulAPI','Bootstrap','CSS'],github:'https://github.com/kpacheco84/5-public_api_request-v1.git', run:'https://kpacheco84.github.io/5-public_api_request-v1/', pics:''}//,
          //{image:"./images/MyPic.jpg",title: "Dynamic Registration Form", desc: 'Basic Register Form',tech: ['React','Bootstrap','CSS']}
      
      ];
      
      
      
  
  
      
  
      const renderCarousel = (pics,index)=>{
        
          return(
            <div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Third slide"
                />
            
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />
            
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
     
          )
      };
  
  
  
     
  
          return (
            <div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Third slide"
                />
            
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />
            
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
          

 )};




export default ProjectPicsModal;