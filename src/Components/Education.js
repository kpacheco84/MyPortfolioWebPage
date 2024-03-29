import React from 'react'
import '../App.css'
import { Card, CardImg } from 'react-bootstrap'

import fiu from '../assets/FIU-Panther.png'
import team from '../assets/team-treehouse.png'
import { Reveal, Fade, Rotate } from 'react-reveal'

const Education = () => {
  const edu = [
    {
      image: fiu,
      school: 'Florida International University',
      title: 'Bachelors: Management Information Systems',
      dates: 'August 2013',
      info: 'GPA: 3.58',
    },
    {
      image: fiu,
      school: 'Florida International University',
      title: 'Certificate Business Intelligence',
      dates: 'August 2013',
      info: '',
    },
    {
      image: team,
      school: 'Team Treehouse',
      title: 'TechDegree: React Full Stack Javascript',
      dates: 'November 2018 - July 2019',
      info: '',
    },

    //{image:"./images/MyPic.jpg",title: "Dynamic Registration Form", desc: 'Basic Register Form',tech: ['React','Bootstrap','CSS']}
  ]

  const renderCard = (card, index) => {
    return (
      <div>
        <Card className="edu_card" key={index} imgsrc={card.image}>
          <Card.Body>
            <Card.Title style={{ paddingBottom: '10px' }}>
              {card.school}{' '}
            </Card.Title>
            <Card.Subtitle>
              <b>{card.title}</b>
            </Card.Subtitle>
            <CardImg
              src={card.image}
              style={{ height: '180px', width: '50%', paddingTop: '20px' }}
            ></CardImg>
            <Card.Text
              style={{
                paddingBottom: '20px',
                paddingTop: '15px',
                textAlign: 'center',
                textIndent: '0px',
              }}
            >
              {card.info}
            </Card.Text>

            <br></br>
            <br></br>
          </Card.Body>
          <Card.Footer style={{ fontStyle: 'italic', textAlign: 'center' }}>
            ({card.dates})
          </Card.Footer>
        </Card>
      </div>
    )
  }
  return (
    <div className="edu_section">
      <Rotate bottom right cascade>
        <br></br>
        <br></br>

        <h1>Education</h1>
        <div
          className="row"
          style={{
            justifyContent: 'center',
            paddingLeft: '5%',
            marginTop: '50px',
            paddingRight: '5%',
            paddingBottom: '80px',
          }}
        >
          {edu.map(renderCard)}
        </div>
      </Rotate>
    </div>
  )
}

export default Education
