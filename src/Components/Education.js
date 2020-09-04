import React from "react";
import "../App.css";
import { Card, CardImg } from "react-bootstrap";

import fiu from "../assets/FIU-Panther.png";
import team from "../assets/team-treehouse.png";

const Education = () => {
  const edu = [
    {
      image: fiu,
      school: "Florida International University",
      title: "Bachelors: Management Information Systems",
      dates: "August 2013",
      info: "GPA: 3.58",
    },
    {
      image: fiu,
      school: "Florida International University",
      title: "Certificate Business Intelligence",
      dates: "August 2013",
      info: "",
    },
    {
      image: team,
      school: "Team Treehouse",
      title: "TechDegree: FullStack Javascript",
      dates: "November 2018 - July 2019",
      info: "",
    },

    //{image:"./images/MyPic.jpg",title: "Dynamic Registration Form", desc: 'Basic Register Form',tech: ['React','Bootstrap','CSS']}
  ];

  const renderCard = (card, index) => {
    return (
      <div className="col-md-4">
        <Card
          style={{
            width: "25rem",
            height: "430px",
            marginTop: "20px",
            marginBottom: "50px",
          }}
          key={index}
          imgsrc={card.image}
        >
          <Card.Header
            style={{ backgroundColor: "#0EE5C4", height: "50px" }}
          ></Card.Header>
          <Card.Body>
            <Card.Title style={{ paddingBottom: "10px" }}>
              {card.school}{" "}
            </Card.Title>
            <Card.Subtitle>{card.title}</Card.Subtitle>
            <CardImg
              src={card.image}
              style={{ height: "180px", width: "50%", paddingTop: "20px" }}
            ></CardImg>
            <Card.Text style={{ paddingBottom: "20px" }}>{card.info}</Card.Text>

            <br></br>
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

      <h1 style={{ paddingTop: "20px", textAlign: "center" }}>Education</h1>
      <div
        className="row"
        style={{
          justifyContent: "center",
          paddingLeft: "5%",
          marginTop: "100px",
          paddingRight: "5%",
          paddingBottom: "150px",
        }}
      >
        {edu.map(renderCard)}
      </div>
    </div>
  );
};

export default Education;
