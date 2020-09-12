import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
import { Reveal, Fade, Rotate, Flip } from "react-reveal";

const Skills = () => {
  const skills = [
    {
      image: "database",
      title: "Database & Query Languages",
      tech: ["SQL", "PostgreSQL", "MySQL", "DynamoDB", "Mongo DB"],
    },
    {
      image: "code",
      title: "Programming Languages & Frameworks",
      tech: ["React", "Bootstrap", "JQuery", "Javascript", "Node", "Express"],
    },
    {
      image: "globe",
      title: "Collaboration Tools",
      tech: ["Jira", "Asana", "Slack", "Github", "Git"],
    },
    {
      image: "rocket",
      title: "Deployment Tools",
      tech: [
        "AWS S3",
        "AWS EC2",
        "AWS RDS",
        "AWS Amplify",
        "GitHub Pages",
        "Heroku",
      ],
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="p-3" id="skills">
        <Card
          style={{ width: "18rem", height: "400px", padding: "20px" }}
          key={index}
          imgsrc={card.image}
        >
          <Card.Header style={{ backgroundColor: "#0EE5C4", height: "100px" }}>
            <FontAwesome
              className="super-crazy-colors"
              name={card.image}
              //cssModule={faStyles}
              size="3x"
              style={{
                textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                color: "white",
                padding: "20px",
              }}
            />
          </Card.Header>
          <Card.Body>
            <Card.Title style={{ paddingBottom: "10px" }}>
              {card.title}
            </Card.Title>
            <Card.Text>
              <ul
                className="column2box flush"
                style={{ padding: "0px", listStyleType: "none" }}
              >
                {" "}
                {card.tech.map((tech) => (
                  <li
                    style={{
                      align: "left",
                      textAlign: "left",
                    }}
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
        </Card>
      </div>
    );
  };
  return (
    <div style={{ textAlign: "center", paddingTop: "30px" }}>
      <Flip top>
        <h1 style={{ paddingTop: "40px", textAlign: "center" }}>Skills</h1>
      </Flip>
      <div
        className="row"
        style={{
          justifyContent: "center",
          marginTop: "80px",
          paddingBottom: "50px",
        }}
      >
        <Flip top cascade>
          {skills.map(renderCard)}
        </Flip>
      </div>
    </div>
  );
};

export default Skills;
