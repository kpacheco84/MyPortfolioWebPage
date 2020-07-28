import React, {Component} from 'react';
import '../App.css';
import { Container} from 'react-bootstrap';

import headerImg from '../assets/farzad-nazifi-p-xSl33Wxyc-unsplash.jpg'



const  Header = () => {

 
    return (
<div>
<br></br>
    <br></br>
<Container fluid='true' style={{backgroundImage:`url(${headerImg})`,height:'500px', width:'auto',backgroundSize: '50% 100%',
backgroundColor:'black',backgroundRepeat: 'no-repeat',width:'100%'
, margin:'0px 100px 0px 0px'}}>
    
    <br></br>
    <br></br>
    <div id='myHeaderTitle' style={{right:'0px',textAlign:'right',paddingRight:'30px'}}>
<h1 className= 'w3-animate-left' style={{color:'white'}}>Katherine Pacheco</h1>    
<h6 className= 'w3-animate-left'style={{color:'white'}}>FullStack Software Developer</h6>
</div>
</Container>
</div>

    )
};


export default Header;
