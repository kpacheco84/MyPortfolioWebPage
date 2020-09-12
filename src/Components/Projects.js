import React from "react";
import "../App.css";

import { Card, CardImg } from "react-bootstrap";

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

  const projects = [
    {
      image: phrase,
      title: "OOP Phrase Game",
      desc: "OOP Game",
      tech: ["AWS S3", "React", "Bootstrap", "JQuery"],
      github: "https://github.com/kpacheco84/4-OOPGame.git",
      run: "https://kpacheco84.github.io/4-OOPGame/",
      pics: "",
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
    },
    {
      image: empAPI,
      title: "Employee API List",
      desc: "API Employee Directory",
      tech: ["Github Pages", "React", "RestfulAPI", "Bootstrap", "CSS"],
      github: "https://github.com/kpacheco84/5-public_api_request-v1.git",
      run: "https://kpacheco84.github.io/5-public_api_request-v1/",
      pics: "",
    }, //,

    {
      image: InteractiveForm,
      title: "Dynamic Registration Form",
      desc: "Basic Register Form",
      tech: ["GitHub Pages", "React", "HTML", "CSS", "JQuery"],
      github: "https://github.com/kpacheco84/3-Interactive-Form.git",
      run: "https://kpacheco84.github.io/3-Interactive-Form/",
      pics: "",
    } /*,
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
    },
    {
      image: portfolio,
      title: "My Portfolio",
      desc: "One Page React App",
      tech: ["AWS S3", "React", "Bootstrap", "CSS"],
      github: "https://github.com/kpacheco84/MyPortfolioWebPage.git",
      run: "https://dev.dy1wlhyxpzb5j.amplifyapp.com",
      pics: "",
    },
  ];

  const renderCard = (card, index) => {
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
            {/*}<Button style={{backgroundColor:'#ff4d4d',border:'0px',marginTop:'20px'}} 
        onClick= {()=>{alert('ShowModal')}}>Description</Button>*/}
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "#ff4d4d", height: "100px" }}>
            <a href={card.run} target="_blank" rel="noreferrer">
              <FontAwesome
                className="super-crazy-colors slow-spin"
                name="desktop"
                //cssModule={faStyles}
                size="2x"
                spin
                style={{
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                  color: "white",
                  padding: "20px",
                }}
              />
            </a>

            <a href={card.github} target="_blank" rel="noreferrer">
              <FontAwesome
                className="super-crazy-colors slow-spin icon"
                name="github"
                size="2x"
                spin
                style={{
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                  color: "white",
                  padding: "20px",
                }}
              />
            </a>

            <FontAwesome
              onClick={() => alert("Picture Slide Show Coming Soon!")}
              className="super-crazy-colors slow-spin icon"
              name="film"
              //cssModule={faStyles}
              size="2x"
              spin
              style={{
                textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                color: "white",
                padding: "20px",
              }}
            />
          </Card.Footer>
        </Card>
      </div>
    );
  };

  return (
    <div
      style={{ textAlign: "center", paddingTop: "30px", paddingBottom: "50px" }}
    >
      <Fade up>
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
        <Flip left>{projects.map(renderCard)}</Flip>
      </div>
    </div>
  );
};

export default Projects;
