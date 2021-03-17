import React from "react";
import "../App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

//Footer icons disappear when minimizing window

const Footer = () => {
  return (
    <div>
      <footer
        className="footer"
        
        //fixed="bottom"
      ><div>
          <a href="https://www.linkedin.com/in/k-p-693183193" target="_blank">
            <FontAwesome
              className="super-crazy-colors footer_icons"
              name="linkedin"
              size="2x"
            
            />
          </a>
          </div>
          <div>
          <a href="https://github.com/kpacheco84" target="_blank">
            <FontAwesome
              className="super-crazy-colors footer_icons"
              name="github"
              //cssModule={faStyles}
              size="2x"
             
            />
          </a>
          </div>
          <div>
          <a href="mailto: katherinepacheco001@gmail.com">
            <FontAwesome
              className="super-crazy-colors footer_icons"
              name="envelope"
              //cssModule={faStyles}
              size="2x"
              
            />
          </a>
          </div>
          <div>
          <div className='footer_name'>
          <label
           
          >
            <FontAwesome
              className="super-crazy-colors footer_icons"
              name="copyright"
              size="1x"
            
            />
            
            Katherine Pacheco 2021
            
          </label>
          </div>
          </div>
     
      </footer>
    </div>
  );
};

export default Footer;
