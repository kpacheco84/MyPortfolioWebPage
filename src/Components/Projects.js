import React,{useState} from "react";
import "../App.css";

import { Card, CardImg,Modal, Carousel, Row, Col} from "react-bootstrap";

//use fontawesome
import FontAwesome from "react-fontawesome";

import $ from "jquery";

//import images

import phrase from "../assets/phrasehunter.png";
import portfolio from "../assets/portfolio.png";
import empAPI from "../assets/empAPI.png";
import AmplifyNotes from "../assets/AmplifyNotes.PNG";
import shoppingCart from "../assets/shoppingCart.png";
import reflections from "../assets/ref_joborderdetail.jpg";


import { Flip, Fade } from "react-reveal";
import { findByLabelText } from "@testing-library/dom";
import ProjectsCarousel from "./ProjectsCarousel";

/* add to projects the Interactive registration form
  add the amplify notetaker showing aws cognito login and registration capability
  finish the marketplace app*/

const Projects = () => {

  const [showCarousel, setShowCarousel] = useState(false);
  const handleShowCarousel = ()=>{

    setShowCarousel(true);
  }


  const projects = [

    {
      id:1,
      image: reflections,
      title: "Reflections Electronics Pro - Intranet",
      desc:"Internal Service Request Portal",
      tech: ["React","AWS S3", "AWS Amplify","GraphQL", "Ant-Design", "React Hooks"],
      github: "",
      run: "",
      pics: "test",
      github_flag:false,
      run_flag: false,
      pics_flag: true
    },
    {
      id:2,
      image: phrase,
      title: "OOP Phrase Game",
      desc: "OOP Game",
      tech: ["AWS S3", "React", "Bootstrap", "JQuery"],
      github: "https://github.com/kpacheco84/4-OOPGame.git",
      run: "https://kpacheco84.github.io/4-OOPGame/",
      pics: "",
      github_flag:true,
      run_flag: true,
      pics_flag: false
    },

    {
      id:3,
      image: shoppingCart,
      title: "E-Commerce Shopping Cart",
      desc: "MERN Application",
      tech: [
        "AWS S3",
        "MongoDB Atlas",
        "Express",
        "React",
        "Node",
        "React-Reveal",
      ],
      github: "https://github.com/kpacheco84/react-shopping-cart.git",
      run: "https://react-shopping-cart-kp.herokuapp.com/",
      pics: "",
      github_flag:true,
      run_flag: true,
      pics_flag: false
    }/*
    {
      image: empAPI,
      title: "Employee API List",
      desc: "API Employee Directory",
      tech: ["Github Pages", "React", "RestfulAPI", "Bootstrap", "CSS"],
      github: "https://github.com/kpacheco84/5-public_api_request-v1.git",
      run: "https://kpacheco84.github.io/5-public_api_request-v1/",
      pics: "",
      github_flag:true,
      run_flag: true,
      pics_flag: false
    }, 
    {
      image: InteractiveForm,
      title: "Dynamic Registration Form",
      desc: "Basic Register Form",
      tech: ["GitHub Pages", "React", "HTML", "CSS", "JQuery"],
      github: "https://github.com/kpacheco84/3-Interactive-Form.git",
      run: "https://kpacheco84.github.io/3-Interactive-Form/",
      pics: "",
      github_flag:true,
      run_flag: true,
      pics_flag: false
    },
    {
      image: "",
      title: "D3.js Examples",
      desc:
        "This includes multiple D3.js uses and exaples from one or more above projects",
      tech: ["AWS S3", "React", "D3.js"],
      github: "https://github.com/kpacheco84/MyPortfolioWebPage.git",
      run: "https://dev.dy1wlhyxpzb5j.amplifyapp.com",
      pics: "",
    }*/,
    { id:4,
      image: AmplifyNotes,
      title: "Amplify Note Taker",
      desc: "Amplify Note Taker",
      tech: [
        "AWS S3",
        "React",
        "AWS Amplify",
        "DynamoDB",
        "GraphQL",
        "Cognito",
      ],
      github: "https://github.com/kpacheco84/5-public_api_request-v1.git",
      run:
        "http://amplifynotetaker-20200613175654-hostingbucket-dev.s3-website.us-east-2.amazonaws.com/",
      pics: "",
      github_flag:true,
      run_flag: true,
      pics_flag: false
    }/*,
    {
      id:5,
      image: portfolio,
      title: "My Portfolio",
      desc: "One Page React App",
      tech: ["AWS S3", "React", "Bootstrap", "CSS"],
      github: "https://github.com/kpacheco84/MyPortfolioWebPage.git",
      run: "https://dev.dy1wlhyxpzb5j.amplifyapp.com",
      pics: "",
      github_flag:true,
      run_flag: true,
      pics_flag: false
    },*/
  ];

  const renderCard = (card, index) => {
    console.log(card);
    return (
      <div className="p-3" id="projects">
        <Card
        className='project_cards'
          
          key={index}
        >
          <CardImg
            src={card.image}
            style={{ height: "200px", width: "100%" }}
          ></CardImg>
          <Card.Body>
            <Card.Title style={{ paddingBottom: "10px" }}>
              {card.title}
            </Card.Title>
            <Card.Text>
              <div style={{textAlign:'center', justifyContent:'center'}}>
              <ul style={{listStyle:'none', textAlign:'center'}}>
                {" "}
                {card.tech.map((tech) => (
                  <li style={{ width:'100%',height:'100%', textAlign:'left', breakInside:'avoid'}}key={index} >
                    {tech}
                  </li>
                ))}
              </ul>
              </div>
            </Card.Text>
           
          </Card.Body>
          <Card.Footer style={{ backgroundColor: 'var(--black)', height: "100px" }}>

            {index === 0 ?
             
             <FontAwesome
             disabled={card.run_flag}
               className="slow_spin"
               name="desktop"
               //cssModule={faStyles}
               size="2x"
               
               style={{
                 textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                 color:  "gray" ,
                 padding: "20px",
               }}
             />
          
            :
            <a href={card.run} target="_blank" rel="noreferrer">
              <FontAwesome
              disabled={card.run_flag}
                className="slow-spin"
                name="desktop"
                //cssModule={faStyles}
                size="2x"
                
                style={{
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                  color:  "white",
                  padding: "20px",
                }}
              />
            </a>
              }
            {index === 0 ?
              <FontAwesome
           
           className="slow-spin"
           name="github"
           size="2x"
         
           style={{
             textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
             color : 'gray',
             padding: "20px",
           }}
         />
            :
            <a href=  {card.github}  target="_blank" rel="noreferrer">
              <FontAwesome
           
                className="super-crazy-colors slow-spin icon"
                name="github"
                size="2x"
              
                style={{
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                  color: "white" ,
                  padding: "20px",
                }}
              />
            </a>
  }
            <span onClick={index === 0 ? () => handleShowCarousel() : ()=> alert('none available')}
            style={{cursor: index === 0 ?'pointer': 'default'}}
            >
            <FontAwesome
              
              className="slow-spin"
              name="film"
              //cssModule={faStyles}
              size="2x"
           
              style={{
                textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                color: card.pics_flag  ? "white" : 'gray',
                padding: "20px",
              }}
            />
        </span>
          </Card.Footer>
        </Card>
      
        </div>
    );
  };


 
  return (
    <div className='projects'>
     
    <Flip top delay={1000}>
    <div style={{ paddingTop: "20px", textAlign: "center", width:'100%'}}>
    <h1 >Projects</h1>
    </div>
  </Flip>
   
     
      <div>
      <div
        className="row"
        style={{
          justifyContent: "center",
          marginTop: "80px",
          paddingBottom: "50px",
          textAlign:'center'
        }}
      >
        <Flip top cascade delay={1000}>
          {projects.map(renderCard)}
        </Flip>
      </div>
    </div>

    <div   >
          <Modal 
          closeButton ={true}
          show = {showCarousel}
           onHide = {()=>setShowCarousel(false)}
          size='xl'
          >
 <ProjectsCarousel/>
</Modal>
</div>



    </div>
 
    
  );
};

export default Projects;
