import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";

const Experience = () => {
  const exp = [
    {
      image: "",
      company: "Reflections Electronics Pro, LLC",
      title: "Web & Software Developer (contractor)",
      dates: "November 2019 - Present",
      resp: [""],
    },
    {
      image: "",
      company: "Femwell Group Health, LLC",
      title: "Business Intelligence Developer",
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
      company: "Reflections Elctroncis Pro, LLC",
      title: "Office Manager and Application Developer",
      dates: "January 2008 - December 2011",
      resp: [""],
    },
    {
      image: "",
      company: "United States Medical Supply, LLC",
      title: "Customer Service Supervisor",
      dates: "July 2006 - January 2008",
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
    </div>
  );
};

export default Experience;
