import React, {Component} from 'react';
import '../App.css';
import { Container, Navbar,Nav,Card,Button, ListGroup} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'
import headerImg from '../assets/farzad-nazifi-p-xSl33Wxyc-unsplash.jpg'


const  Skills = () => {

    const skills = [
        {image:'database',title: "Database & Query Languages & Deployment",tech: ['AWS S3','AWS EC2','AWS RDS','GitHub Pages','SQL','PostgresSQL','MySQL']},
        {image:'code',title: "Programming Languages & Frameworks", tech: ['React','Bootstrap','JQuery', 'Javascript']},
        {image:'globe',title: "Collaboration Tools", tech: ['Jira','Asana','Slack','Github']}/*,
        {image:"./images/MyPic.jpg",title: "Dynamic Registration Form", desc: 'Basic Register Form',tech: ['React','Bootstrap','CSS']}*/
    
    ];
    
    





    const renderCard = (card,index)=>{
      
        return(
            <div className ='col-md-4' id = 'skills'>
        <Card  style={{ width: '18rem',height:'400px'}} key = {index} imgsrc = {card.image}>
        <Card.Header style = {{backgroundColor:'#0EE5C4',height:'100px'}}>
        <FontAwesome
        className="super-crazy-colors"
        name={card.image}
        //cssModule={faStyles}
        size="3x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'white',padding:'20px' }}/> 
            </Card.Header>
      <Card.Body>
        <Card.Title style={{paddingBottom:'10px'}}>{card.title}</Card.Title>
       <Card.Text>
          <ul className='column2box flush' style={{padding:'0px'}}> { card.tech.map(tech => 
                < li style={{align:'left',textAlign:'left'}}  key={index} name = 'employeeRow' id ='empRow'>{tech}</li>
                    
                        
                            )}
                            
                            </ul>
       
        </Card.Text>
        
      </Card.Body>
      
    </Card>
    </div>
   
    
        )
    };
        return (
            
        <div style={{textAlign:'center',paddingTop:'30px'}}>
            <h1 style={{paddingTop:'40px', textAlign:'center'}}>Skills</h1>
            <div className = 'row' style={{paddingLeft: '15%',marginTop:'80px', paddingRight:'15%'}}>
                      
                        {skills.map(renderCard)}
                        
                            </div>
        </div>
          
      
  
  )};

  export default Skills;