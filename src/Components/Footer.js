import React, {Component} from 'react';
import '../App.css';
import { Container, Navbar,Nav} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome'
import headerImg from '../assets/farzad-nazifi-p-xSl33Wxyc-unsplash.jpg'
import { Link } from 'react-router-dom';



const  Footer = () => {

 
    return (
<div>
<Navbar className="navbar navbar-expand-sm navbar-custom bg-primary" bg="dark" variant="dark" fixed='bottom' >
  
  
      <Container>
          <a href='www.linkedin.com/in/k-p-693183193' target="_blank">
  <FontAwesome className="super-crazy-colors"
        name="linkedin"
        size="2x"
       
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'white',marginLeft:'100px', padding:'10px' }}/>
        </a>
         <a href='https://github.com/kpacheco84' target='_blank'>
        <FontAwesome
        className="super-crazy-colors "
        name="github"
        //cssModule={faStyles}
        size="2x"
        
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'white',padding:'10px' }}/>
        </a>
        <a href='mailto: katherinepacheco001@gmail.com'>
        <FontAwesome
        className="super-crazy-colors"
        name="envelope"
        //cssModule={faStyles}
        size="2x"
        
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'white',padding:'10px 10px 10px 10px' }}/>
        </a>
        <h1 style={{ fontWeight:'50',fontStyle:'italic', fontSize:'22px', color:'white',right:'0px',textAlign:'right',paddingRight:'0px'}}>Katherine Pacheco 2020</h1>
 </Container>
</Navbar>

</div>
    )
};


export default Footer;
