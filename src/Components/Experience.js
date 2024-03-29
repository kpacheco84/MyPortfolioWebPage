import React, { useState } from 'react'
import '../App.css'
import { Card } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { Reveal, Fade, Rotate } from 'react-reveal'
import working from '../assets/working.svg'
import { map } from 'jquery'
const Experience = () => {
  const [active, setActive] = useState(1)

  const exp = [
    {
      id: 1,
      image: '',
      company: 'WebMD Health + Limeade, LLC',
      title: 'Business Intelligence Developer III',
      dates: 'January 2022 - Present',
      resp: [
        'Full Stack Software development for the development of a customer facing report application/ Dashboard using a modern front end framework (React, HTML, CSS, React-Bootstrap, Re-Charts ).',
        'Back End Development in Python (FastAPI Framework) creating new RESTAPI endpoints',
        'Develop reports and dashboards using Tableau. Data sources include AWS Redshift and Azure Data lake',
        'Use modern cloud technology such as AWS and Azure Devops',
        'Collaborate and develop dbt models to feed reporting and apis (for AWS to Azure migration)',
      ],
    },
    {
      id: 2,
      image: '',
      company: 'Reflections Electronics Pro, LLC',
      title: 'Fullstack Software Developer (freelance)',
      dates: 'September 2020 - March 2021',
      resp: [
        'Built React.js application. Stored and launched on AWS. Serverless architecture using AWS Amplify Datastore (GraphQL and DynamoDB).',
        'Amazon Cognito for Authentication.',
        'This application is mission critical and is used to track all service orders for equipment repairs. ',
      ],
    },
    {
      id: 3,
      image: '',
      company: 'Femwell Group Health, LLC',
      title: 'Business Intelligence & Application Developer',
      dates: 'November 2015 - Present',
      resp: [
        `Web Application Development for converting manual data processes to more 
     automated forms of processing using Logi Info (a .Net Framework), javaScript, 
      HTML, and CSS.`,
        ` Knowledge of practice management and EHR systems such as ECW, Intergy , 
      Greenway Suites including front end and backend database structure`,
        ` Develop dashboards and reports using Excel, SSRS, Power BI, LOGI Analytics`,
      ],
    },
    {
      id: 4,
      image: '',
      company: 'Financial Recovery Group, LLC',
      title: 'Data Analyst',
      dates: 'October 2013 - October 2015',
      resp: [
        `ETL - Health Insurance data received in various formats including patient 
      demographics, claims, pharmacy claims, provider data and more`,
        `Business Analyst tasks including gather business requirements from clients and 
      develop and program the appropriate solutions to meet client needs.`,
      ],
    },
    {
      id: 5,
      image: '',
      company: 'Royal Carribean, LLC',
      title: 'Business Analyst Intern',
      dates: 'June 2013 - August 2013',
      resp: [
        `Developed, and maintained Access database for quality control items that were 
      deemed critical for the Celebrity brand and Mexico and Brazil market.`,
        `Created reports to send to upper management`,
      ],
    } /*
    {id:5,
      image: "",
      company: "Reflections Electroncis Pro, LLC",
      title: "Office Manager and Application Developer",
      dates: "January 2008 - December 2011",
      resp: [],
    },*/,

    //{image:"./images/MyPic.jpg",title: "Dynamic Registration Form", desc: 'Basic Register Form',tech: ['React','Bootstrap','CSS']}
  ]

  const [activeExp, setActiveExp] = useState(exp[0])

  const handleSelect = (id) => {
    var resp = exp.filter((exp) => exp.id === id)[0]
    console.log(resp)
    setActive(id)
    setActiveExp(resp)
    console.log('after set', activeExp)
  }

  return (
    <div className="experience">
      <Fade delay={2000} duration={2000}>
        <div>
          <h1>Work Experience</h1>
        </div>
      </Fade>
      <div>
        <div className="experience_section">
          <Fade duration={2000} delay={1000} left>
            <ul className="experience_nav">
              {exp.map((exp) => (
                <li
                  value={exp.id}
                  className={active === exp.id ? 'exp_active' : ''}
                  onClick={() => handleSelect(exp.id)}
                >
                  {exp.company}
                </li>
              ))}
            </ul>
          </Fade>
          <Fade right duration={2000} delay={1000}>
            <div className="experience_box">
              <div className="experience_box_header">
                <div style={{ width: '20%' }}>
                  <img
                    src={working}
                    style={{ width: '80px', position: 'relative' }}
                  />
                </div>
                <div
                  style={{
                    width: '800%',
                    textAlign: 'center',
                    paddingRight: '80px',
                  }}
                >
                  <h5>{activeExp.company}</h5>
                  <h6>{activeExp.dates}</h6>
                  <h6>
                    <b>{activeExp.title}</b>
                  </h6>
                </div>
              </div>
              <ul>
                {activeExp.resp.map((resp) => (
                  <li>
                    <FontAwesome
                      className="exp_caret"
                      name="caret-right"
                      size="2x"
                    />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Experience
