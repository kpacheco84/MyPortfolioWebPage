import React, { useState, useEffect } from 'react'
import '../App.css'

import { Navbar, Nav, Modal, Accordion, Row, Column } from 'react-bootstrap'
import Slide from 'react-reveal'

import nav_favicon from '../assets/nav_favicon.svg'
import FontAwesome from 'react-fontawesome'
import Experience from './Experience'
import kp_logo from '../assets/kp_logo.svg'

const Navigation = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [showMenu, setShowMenu] = useState(true)
  const [btns, setBtns] = useState(true)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
      setBtns(false)
      setShowMenu(false)
    } else {
      setButton(true)
      setBtns(true)
      setShowMenu(true)
    }
  }
  //React Website Tutorial - Beginner React JS Project Fully Responsive
  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  const menu1 = [
    { id: 1, link: 'home', name: 'Home' },

    { id: 2, link: 'projects', name: 'Projects' },
    { id: 3, link: 'aboutme', name: 'About Me' },
  ]

  const menu2 = [
    { id: 4, link: 'skills', name: 'Skills' },
    { id: 5, link: 'experience', name: 'Experience' },
    { id: 6, link: 'education', name: 'Education' },
  ]

  /*
let homeLink = document.querySelector('[href~="#home"]');

console.log(homeLink);

navigationLinks.forEach((link) => {
  let section = document.querySelector(link.dataset.section);

  let sectionHeight = section.offsetHeight;

  if (
    section.offsetTop - navbarHeight <= scrollPosition &&
    section.offsetTop - navbarHeight + sectionHeight > fromTop
  ) {
    homeLink.classList.remove("active");
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
});
*/
  /* flex column*/
  const navmenu1 = () => {
    return (
      <>
        {showMenu ? (
          <Nav
            className={!button ? 'nav flex-column' : 'nav1'}
            defaultActiveKey="#home"
          >
            {menu1.map((menu) => (
              <Nav.Link
                className="navlink"
                href={'#' + menu.link}
                data-section={'#' + menu.link}
                style={{ color: 'white' }}
                onClick={!button ? () => setShowMenu(!showMenu) : ''}
              >
                {menu.name}
              </Nav.Link>
            ))}
          </Nav>
        ) : (
          ''
        )}
      </>
    )
  }
  const navmenu2 = () => {
    return (
      <>
        {showMenu ? (
          <Nav
            className={!button ? 'nav flex-column' : 'nav2'}
            defaultActiveKey="#home"
          >
            {menu2.map((menu) => (
              <Nav.Link
                className="navlink"
                href={'#' + menu.link}
                data-section={'#' + menu.link}
                style={{ color: 'white' }}
                onClick={!button ? () => setShowMenu(!showMenu) : ''}
              >
                {menu.name}
              </Nav.Link>
            ))}
          </Nav>
        ) : (
          ''
        )}
      </>
    )
  }

  return (
    <div>
      <div>
        <Navbar className="nav-link" fixed="top">
          <div className="nav-menu-items">{navmenu1()}</div>
          <Slide top duration={5000}>
            <img
              src={kp_logo}
              style={{
                width: '200px',
                position: 'absolute',
                marginTop: '100px',
                marginLeft: '40%',
                alignItems: 'center',
              }}
            />
          </Slide>
          {/*this is the code for the hamburger menu of links*/}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignContent: 'center',
              width: '100%',
            }}
          >
            <div>
              {!button ? (
                <FontAwesome
                  /*this causes a toggle effect*/
                  onClick={() => setShowMenu(!showMenu)}
                  className="icon_menu"
                  name="bars"
                  size="2x"
                  style={{ color: '#c82586' }}
                />
              ) : (
                ''
              )}
            </div>
          </div>
          {/*end of hamburger menu*/}

          <div className="nav-menu-items">{navmenu2()}</div>
        </Navbar>
      </div>
    </div>
  )
}

export default Navigation
