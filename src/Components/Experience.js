import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";
import { Reveal, Fade, Rotate } from "react-reveal";
const Experience = () => {
  const exp = [
    {
      image: "",
      company: "Reflections Electronics Pro, LLC",
      title: "Fullstack Software Developer (contractor/freelance)",
      dates:"September 2020 - January 2021",
      resp: [""],
    },
    {
      image: "",
      company: "Femwell Group Health, LLC",
      title: "Business Intelligence & Application Developer",
      dates: "November 2015 - Present",
      resp: [""],
    },
    {
      image: "",
      company: "Financial Recovery Group, LLC",
      title: "Data Analyst",
      dates: "October 2013 - October 2015",
      resp: [""],
    },
    {
      image: "",
      company: "Royal Carribean, LLC",
      title: "Business Analyst Intern",
      dates: "June 2013 - August 2013",
      resp: [""],
    },
    {
      image: "",
      company: "Reflections Electroncis Pro, LLC",
      title: "Office Manager and Application Developer",
      dates: "January 2008 - December 2011",
      resp: [""],
    },
    
    //{image:"./images/MyPic.jpg",title: "Dynamic Registration Form", desc: 'Basic Register Form',tech: ['React','Bootstrap','CSS']}
  ];

  const renderCard = (card, index) => {
    return (
      <div className="col-md-4">
        <Card
          style={{ width: "25rem", height: "300px", marginTop: "20px" }}
          key={index}
          imgsrc={card.image}
        >
          <Card.Header
            style={{
              backgroundColor: "#ff4d4d",
              opacity: "80%",
              height: "50px",
            }}
          ></Card.Header>
          <Card.Body>
            <Card.Title style={{ paddingBottom: "10px" }}>
              {card.company}{" "}
            </Card.Title>
            <Card.Subtitle>{card.title}</Card.Subtitle>
            <Card.Text></Card.Text>
            <br></br>
          </Card.Body>
          <Card.Footer style={{ fontStyle: "italic", textAlign: "center" }}>
            ({card.dates})
          </Card.Footer>
        </Card>
      </div>
    );
  };
  return (
    <div>
      <Rotate bottom left cascade delay={800}>
        <br></br>
        <br></br>

        <h1 style={{ paddingTop: "20px", textAlign: "center" }}>Experience</h1>
        <div
          className="row"
          style={{
            justifyContent: "center",
            paddingLeft: "5%",
            marginTop: "80px",
            paddingRight: "5%",
            paddingBottom: "50px",
          }}
        >
          {exp.map(renderCard)}
        </div>
      </Rotate>
    </div>
  );
};

export default Experience;
