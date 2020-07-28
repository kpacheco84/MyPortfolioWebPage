import React, {Component} from 'react';
import '../App.css';
import { Container, Navbar,Nav, Card} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'
import headerImg from '../assets/farzad-nazifi-p-xSl33Wxyc-unsplash.jpg';

import teamtreehouse from '../assets/FIU-Panther.png';
import fiupanther from '../assets/team-treehouse.png';


const  Education = () => {

    const edu = [
        {image:'fiupanther',school: "Florida International University",title: 'Bachelors: Management Information Systems',dates: 'August 2013', info: 'GPA: 3.58'},
        {image:'',school: "Florida International University",title: 'Certificate Business Intelligence',dates: 'August 2013', info: ''},
        {image:'',school: "Team Treehouse",title: 'TechDegree: FullStack Javascript',dates: 'November 2018 - July 2019', info: ''},
  
        //{image:"./images/MyPic.jpg",title: "Dynamic Registration Form", desc: 'Basic Register Form',tech: ['React','Bootstrap','CSS']}
    
    ];
 
   
    
    const renderCard = (card,index)=>{
      
        return(
            <div className ='col-md-4' >
        <Card  style={{ width: '30rem',height:'400px',marginTop:'20px'}} key = {index} imgsrc = {card.image}>
        <Card.Header style = {{backgroundColor:'#0EE5C4',height:'50px'}}></Card.Header>
      <Card.Body>
        <Card.Title style={{paddingBottom:'10px'}}>{card.school} </Card.Title>
        <Card.Subtitle>{card.title}</Card.Subtitle>
        <Card.Text>{card.info}</Card.Text>
        
           <br></br>
           <br></br>
      </Card.Body>
      <Card.Footer style={{fontStyle:'italic',textAlign:'center'}}>({card.dates})</Card.Footer>
    </Card>
    </div>
    
        )
    };
        return (
            
        
        <div>
        <br></br> 
         <br></br> 
      
            <h1 style={{paddingTop:'20px', textAlign:'center'}}>Education</h1>
                    <div className = 'row' style={{paddingLeft: '10%',paddingTop:'20px', paddingRight:'15%'}}>
                     {edu.map(renderCard)}
                        
        </div>
        </div>
     
          
      
  
  )};



export default Education;