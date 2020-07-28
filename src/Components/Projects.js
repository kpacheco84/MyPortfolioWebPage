import React, {Component} from 'react';
import '../App.css';
import { NavLink, Link } from 'react-router-dom';
import {Navbar,Modal,Button,Row,Col, Form,ButtonGroup, Alert,ToggleButton, ToggleButtonGroup, CardGroup, CardImg} from 'react-bootstrap';
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



const  Projects = () => {

  $(document).ready(function(){
    $('.scale').hover(function() {
      console.log('moused over')
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});
 
    const projects = [
        {image:portfolio,title: "My Portfolio",desc: 'One Page React App', tech: ['AWS S3','React','Bootstrap','CSS'],github:'https://github.com/kpacheco84/MyPortfolioWebPage.git',run:'',pics:''},
        {image:phrase,title: "OOP Phrase Game", desc: 'OOP Game',tech: ['AWS S3','React','Bootstrap','JQuery'],github:'https://github.com/kpacheco84/4-OOPGame.git',run:'https://kpacheco84.github.io/4-OOPGame/', pics:''},
        {image:empAPI,title: "Employee API List", desc: 'API Employee Directory',tech: ['Github Pages','RestfulAPI','Bootstrap','CSS'],github:'https://github.com/kpacheco84/5-public_api_request-v1.git', run:'https://kpacheco84.github.io/5-public_api_request-v1/', pics:''}//,
        //{image:"./images/MyPic.jpg",title: "Dynamic Registration Form", desc: 'Basic Register Form',tech: ['React','Bootstrap','CSS']}
    
    ];
    
    
    


    

    const renderCard = (card,index)=>{
      
        return(
            <div className ='col-md-4'  >
        <Card  style={{ width: '25rem',height:'550px',padding:'0px'}} key = {index} >
        <CardImg src={card.image} style={{height:'200px', width:'100%'}}></CardImg>
      <Card.Body>
        <Card.Title style={{paddingBottom:'10px'}}>{card.title}</Card.Title>
        <Card.Text>
          <ul className='column2box'> { card.tech.map(tech => 
                < li style={{align:'left',textAlign:'left'}}  key={index} name = 'employeeRow' id ='empRow'>{tech}</li>
                    
                        
                            )}
                            
                            </ul>
       
        </Card.Text>
        {/*}<Button style={{backgroundColor:'#ff4d4d',border:'0px',marginTop:'20px'}} 
        onClick= {()=>{alert('ShowModal')}}>Description</Button>*/}
      </Card.Body>
      <Card.Footer  style = {{backgroundColor:'#ff4d4d',height:'100px'}} >
      <a href={card.github} target="_blank">
      
      <a href={card.run} target="_blank"><FontAwesome
        className="super-crazy-colors slow-spin"
        name="desktop"
        //cssModule={faStyles}
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'white',padding:'20px' }}/></a>
        
        <a href={card.github} target="_blank">
        <FontAwesome
        className="super-crazy-colors slow-spin icon"
        name="film"
        //cssModule={faStyles}
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'white',padding:'20px' }}/>
          </a>
      <FontAwesome className="super-crazy-colors slow-spin icon"
       
        name="github"
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'white',padding:'20px' }}/>
       </a>
       
     
        </Card.Footer>
    </Card>
    
    </div>
    
        )
    };



   

        return (
            
          <div style={{textAlign:'center',paddingTop:'30px'}}>
            
          <h1 className= 'animatable' style={{paddingTop:'40px', textAlign:'center'}}>Projects</h1>
          <div className = 'row' style={{paddingLeft: '15%',marginTop:'80px', paddingRight:'15%'}}>
      
                        {projects.map(renderCard)}
                        
                            </div>

                         
        </div>
         
      
  
  )};


export default Projects;