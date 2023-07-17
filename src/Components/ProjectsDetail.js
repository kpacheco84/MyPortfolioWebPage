/* Show Modal of Project with the images on the left and scrollable
description of the projects
languages used
icons for the repo  and play on desktop*/

import React, { Component } from 'react'
import '../App.css'

import { Card, Button } from 'react-bootstrap'

//use fontawesome
import FontAwesome from 'react-fontawesome'
//import faStyles from 'font-awesome/css/font-awesome.css'

import $ from 'jquery'

const ProjectDetails = () => {
  const project = [
    {
      image: '',
      title: 'My Portfolio',
      desc: 'One Page React App',
      tech: ['AWS S3', 'React', 'Bootstrap', 'CSS'],
      github: 'https://github.com/kpacheco84/MyPortfolioWebPage.git',
      run: 'https://kpacheco84.github.io/MyPortfolioWebPage/.',
    },
  ]

  const renderCard = (card, index) => {
    return (
      <div className="col-md-4">
        <Card
          className="column2box"
          style={{ width: '18rem', height: '400px' }}
          key={index}
          imgsrc={card.image}
        >
          <Card.Body>
            <Card.Title style={{ paddingBottom: '10px' }}>
              {card.title}
            </Card.Title>
            <Card.Text>
              <ul>
                {' '}
                {card.tech.map((tech) => (
                  <li
                    style={{ align: 'left', textAlign: 'left' }}
                    key={index}
                    name="Row"
                    id="projRow"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Card.Text>
            <Button
              style={{
                backgroundColor: '#ff4d4d',
                border: '0px',
                marginTop: '20px',
              }}
            >
              Description
            </Button>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: '#ff4d4d', height: '100px' }}>
            <a href={card.github} target="_blank">
              <FontAwesome
                className="super-crazy-colors slow-spin"
                name="github"
                size="2x"
                spin
                style={{
                  textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
                  color: 'white',
                  padding: '20px',
                }}
              />
            </a>

            <a href={card.run} target="_blank">
              <FontAwesome
                className="super-crazy-colors slow-spin"
                name="desktop"
                size="2x"
                spin
                style={{
                  textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
                  color: 'white',
                  padding: '20px',
                }}
              />
            </a>

            <a href={card.github} target="_blank">
              <FontAwesome
                className="super-crazy-colors slow-spin"
                name="film"
                size="2x"
                spin
                style={{
                  textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
                  color: 'white',
                  padding: '20px',
                }}
              />
            </a>
          </Card.Footer>
        </Card>
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center', paddingTop: '30px' }}>
      <h1
        className='class="block animatable fadeInUp'
        style={{ paddingTop: '40px', textAlign: 'center' }}
      >
        Projects
      </h1>
      <div
        className="row"
        style={{ paddingLeft: '15%', marginTop: '80px', paddingRight: '15%' }}
      >
        {projects.map(renderCard)}
      </div>
    </div>
  )
}

export default ProjectDetails
