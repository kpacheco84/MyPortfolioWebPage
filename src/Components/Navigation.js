import React,{useState, useEffect} from "react";
import "../App.css";

import { Navbar, Nav,Modal,Accordion, Row, Column } from "react-bootstrap";
import Roll from 'react-reveal/Roll';

import nav_favicon from '../assets/nav_favicon.svg';
import FontAwesome from "react-fontawesome";
import Experience from "./Experience";


const Navigation = () => {


  const [click, setClick] = useState(false);
  const [button,setButton]=useState(true);
  const [showMenu,setShowMenu]=useState(true);
  const [btns,setBtns]=useState(true);

  const showButton=()=>{
      if(window.innerWidth <= 960){
          setButton(false);
          setBtns(false);
          setShowMenu(false);
      }else{
          setButton(true);
          setBtns(true);
          setShowMenu(true);
      }
  };
  //React Website Tutorial - Beginner React JS Project Fully Responsive
useEffect(()=>{
  showButton();
},[]);

window.addEventListener('resize',showButton);

const menu = [
  {link:"home",name:'Home'},
 
  {link:"projects",name:'Projects'},
  {link:"aboutme",name:'About Me'},
  {link:"skills",name:'Skills'},
  {link:"experience",name:'Experience'},
  {link:"education",name:'Education'}
];

/* flex column*/
const navmenu = ()=>{
return(
  <>
  {showMenu ? 
  <Nav
         className={!button ? "nav flex-column":"nav"  }
         defaultActiveKey="#home"
        >
        
        {menu.map(menu => <Nav.Link
            className="navlink"
            href={'#'+menu.link}
            data-section={'#'+menu.link}
            style={{color:'white'}}
             onClick={!button ? ()=>setShowMenu(!showMenu) :''} 
          >{menu.name}
          </Nav.Link>
        )}</Nav> :''}
      </>
)
}

  return (
    <div>
      
    <div >
      <Navbar
        className="nav-link"
        fixed="top"
       
      >
        <div style={{display:"flex",justifyContent:'space-between',alignContent:'center',width:'100%'}}>


        <Roll top duration={3000}>
          <div> <img src={nav_favicon} style={{height:'80px'}}/></div></Roll>
          <div >
      { !button ?
      
      <FontAwesome
      /*this causes a toggle effect*/
      onClick={()=>setShowMenu(!showMenu)}
                className="icon_menu"
                name="bars"
                size="2x"
              
                style={{color:'#fe1f4e'}}
              />:''
         }
         </div>
     
    </div>
    <div className={'nav-menu-items'}>
  
        {navmenu()}
        </div>
        </Navbar>

    </div>
    </div>
  );
};

export default Navigation;
