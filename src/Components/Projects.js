import React,{useState} from "react";
import "../App.css";

import { Card, CardImg,Modal, Carousel } from "react-bootstrap";

//use fontawesome
import FontAwesome from "react-fontawesome";

import $ from "jquery";

//import images

import phrase from "../assets/phrasehunter.png";
import portfolio from "../assets/portfolio.png";
import empAPI from "../assets/empAPI.png";
import AmplifyNotes from "../assets/AmplifyNotes.PNG";
import InteractiveForm from "../assets/InteractiveForm.PNG";
import shoppingCart from "../assets/shoppingCart.png";
import reflections from "../assets/ref_joborderdetail.jpg";
import ref_customeredit from "../assets/ref_customeredit.jpg";
import ref_employeedelete from "../assets/ref_employeedelete.jpg";
import ref_entryformvalidation from "../assets/ref_entryformvalidation.jpg";
import ref_entryprintticket from "../assets/ref_entryprintticket.jpg";
import ref_entrysuccess from "../assets/ref_entrysuccess.jpg";
import ref_entrytooltip from "../assets/ref_entrytooltip.jpg";
import ref_exitticket from "../assets/ref_exitticket.jpg";
import ref_joborderdetail from "../assets/ref_joborderdetail.jpg";
import ref_joborderdetailsavealert from "../assets/ref_joborderdetailsavealert.jpg";
import ref_joborders from "../assets/ref_joborders.jpg";
import ref_login from "../assets/ref_login.jpg";
import ref_sidenav from "../assets/ref_sidenav.jpg";

import { Flip, Fade } from "react-reveal";

/* add to projects the Interactive registration form
  add the amplify notetaker showing aws cognito login and registration capability
  finish the marketplace app*/

const Projects = () => {
  //this icon transition not working
  $(document).ready(function () {
    $(".scale").hover(
      function () {
        console.log("moused over");
        $(this).addClass("transition");
      },
      function () {
        $(this).removeClass("transition");
      }
    );
  });

  const [showCarousel, setShowCarousel] = useState(false);
  const handleShowCarousel = ()=>{

    setShowCarousel(true);
  }


  const carousel = [
{
image:ref_login,
header:'Login Page',
desc:' Login screen allows customer to login securely if they are currently not authenticated.'

},
{
  image:ref_sidenav,
  header:'Navigation Bars',
  desc:' Top Nav show the name of the employee who has successfully logged in. Side navigation hamburger menu appears allowing the employee to toggle the side navigation menu.'
  
  },
{
image:ref_entrytooltip,
header:'Service Order Entry',
desc:' Employee can enter the details of the service order request.'

},
{
  image:ref_entryformvalidation,
  header:'Service Order Entry',
  desc:' All forms include validation messages.'
  
  },
  {
    image:ref_entrysuccess,
    header:'Service Order Entry',
    desc:'Success messages.'
    
    },
    {
      image:ref_entryprintticket,
      header:'Service Order Entry',
      desc:'Both the Entry and Exit ticket allows the employee to see a printable view of the job order detail. These same Tickets will be automatically emailed to the customers email address on file.'
      
      },
        {
          image:ref_customeredit,
          header:'Customer Form',
          desc:'All critical data has forms for full CRUD  operations.'
          
          },
          {
            image:ref_joborders,
            header:'Service Orders',
            desc:'All service orders show in a table and allow quick click for detail view, allows filtering and the ability to take payments.'
            
            },
            {
              image:ref_joborderdetail,
              header:'Service Order Detail',
              desc:'This screen allows the employee to see all the equipment detail in one single screen.'
              
              },
              {
                image:ref_joborderdetailsavealert,
                header:'Service Order Detail',
                desc:'Alerts help insure the employee is prompted any important information.'
                
                },
                {
                  image:ref_exitticket,
                  header:'Service Order Exit',
                  desc:'The Service Order Exit screen allows the employee to view service order detail and balance information to take payments.'
                  
                  },
  
  ];

  const projects = [

    {
      image: reflections,
      title: "Reflections Electronics Pro - Intranet",
      desc:"Internal Service Request Portal",
      tech: ["AWS S3", "React", "Ant-Design", "React Hooks"],
      github: "",
      run: "",
      pics: "test",
      github_flag:false,
      run_flag: false,
      pics_flag: true
    },
    {
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
    {
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
    },
    {
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
    },
  ];

  const renderCard = (card, index) => {
    console.log(card);
    return (
    
      <div className="col-md-4">
        <Card
          style={{ width: "25rem", height: "550px", margin: "20px" }}
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
              <ul className="column2box">
                {" "}
                {card.tech.map((tech) => (
                  <li
                    style={{ align: "left", textAlign: "left" }}
                    key={index}
                    name="employeeRow"
                    id="empRow"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Card.Text>
           
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "#ff4d4d", height: "100px" }}>

            {index === 0 ?
             
             <FontAwesome
             disabled={card.run_flag}
               className="super-crazy-colors slow-spin"
               name="desktop"
               //cssModule={faStyles}
               size="2x"
               spin
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
                className="super-crazy-colors slow-spin"
                name="desktop"
                //cssModule={faStyles}
                size="2x"
                spin
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
           
           className="super-crazy-colors slow-spin icon"
           name="github"
           size="2x"
           spin
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
                spin
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
              
              className="super-crazy-colors slow-spin icon"
              name="film"
              //cssModule={faStyles}
              size="2x"
              spin
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
    <div
      style={{ textAlign: "center", paddingTop: "30px", paddingBottom: "50px" }}
    >
      <Fade up delay={500}>
        <h1 style={{ paddingTop: "40px", textAlign: "center" }}>Projects</h1>
      </Fade>

      <div
        className="row"
        style={{
          justifyContent: "center",
          marginTop: "80px",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <Flip left delay={500}>
          {projects.map(renderCard)}
        </Flip>


       <div   >
          <Modal closeButton ={true}
          show = {showCarousel}
           onHide = {()=>setShowCarousel(false)}
          
           size='xl'
          >
          <Carousel
       
         >
           {carousel.map((carousel=>
          
           <Carousel.Item interval={500}>
           <img
           //style={{width:'50%',height:'50%'}}
             className="d-block w-100"
             src={carousel.image}
             alt="First slide"
           />
           {/*<Carousel.Caption style={{backgroundColor:'black',opacity:'80%'}}>
            
           </Carousel.Caption>*/}
           <div style={{backgroundColor:'black',opacity:'80%',padding:'35px'}}>
           <h3 style={{color:'white'}}>{carousel.header}</h3>
             <p style={{color:'white'}}>{carousel.desc}</p>
             </div>
         </Carousel.Item>
           
           
           ))



           }
 
 
</Carousel>
</Modal>
</div>
      </div>
    </div>
  );
};

export default Projects;
