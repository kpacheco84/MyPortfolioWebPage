import React,{useState} from "react";
import "../App.css";

import { Card, CardImg,Modal, Carousel } from "react-bootstrap";

//use fontawesome
import FontAwesome from "react-fontawesome";

import $ from "jquery";

//import images

import phrase from "../assets/phrasehunter.png";
import portfolio from "../assets/portfolio.png";
import empAPI from "../assets/empAPI.png";
import AmplifyNotes from "../assets/AmplifyNotes.PNG";
import InteractiveForm from "../assets/InteractiveForm.PNG";
import shoppingCart from "../assets/shoppingCart.png";
import reflections from "../assets/ref_joborderdetail.jpg";
import ref_customeredit from "../assets/ref_customeredit.jpg";
import ref_employeedelete from "../assets/ref_employeedelete.jpg";
import ref_entryformvalidation from "../assets/ref_entryformvalidation.jpg";
import ref_entryprintticket from "../assets/ref_entryprintticket.jpg";
import ref_entrysuccess from "../assets/ref_entrysuccess.jpg";
import ref_entrytooltip from "../assets/ref_entrytooltip.jpg";
import ref_exitticket from "../assets/ref_exitticket.jpg";
import ref_joborderdetail from "../assets/ref_joborderdetail.jpg";
import ref_joborderdetailsavealert from "../assets/ref_joborderdetailsavealert.jpg";
import ref_joborders from "../assets/ref_joborders.jpg";
import ref_login from "../assets/ref_login.jpg";
import ref_sidenav from "../assets/ref_sidenav.jpg";

const carousel = [
    {
    image:ref_login,
    header:'Login Page',
    desc:' Login screen allows customer to login securely if they are currently not authenticated.'
    
    },
    {
      image:ref_sidenav,
      header:'Navigation Bars',
      desc:' Top Nav show the name of the employee who has successfully logged in. Side navigation hamburger menu appears allowing the employee to toggle the side navigation menu.'
      
      },
    {
    image:ref_entrytooltip,
    header:'Service Order Entry',
    desc:' Employee can enter the details of the service order request.'
    
    },
    {
      image:ref_entryformvalidation,
      header:'Service Order Entry',
      desc:' All forms include validation messages.'
      
      },
      {
        image:ref_entrysuccess,
        header:'Service Order Entry',
        desc:'Success messages.'
        
        },
        {
          image:ref_entryprintticket,
          header:'Service Order Entry',
          desc:'Both the Entry and Exit ticket allows the employee to see a printable view of the job order detail. These same Tickets will be automatically emailed to the customers email address on file.'
          
          },
            {
              image:ref_customeredit,
              header:'Customer Form',
              desc:'All critical data has forms for full CRUD  operations.'
              
              },
              {
                image:ref_joborders,
                header:'Service Orders',
                desc:'All service orders show in a table and allow quick click for detail view, allows filtering and the ability to take payments.'
                
                },
                {
                  image:ref_joborderdetail,
                  header:'Service Order Detail',
                  desc:'This screen allows the employee to see all the equipment detail in one single screen.'
                  
                  },
                  {
                    image:ref_joborderdetailsavealert,
                    header:'Service Order Detail',
                    desc:'Alerts help insure the employee is prompted any important information.'
                    
                    },
                    {
                      image:ref_exitticket,
                      header:'Service Order Exit',
                      desc:'The Service Order Exit screen allows the employee to view service order detail and balance information to take payments.'
                      
                      },
      
      ];


const ProjectsCarousel=(props)=>{
    return (
        <div>
                     <Carousel
       
       >
         {carousel.map((carousel=>
        
         <Carousel.Item interval={500}>
         <img
         //style={{width:'50%',height:'50%'}}
           className="d-block w-100"
           src={carousel.image}
           alt="First slide"
         />
         {/*<Carousel.Caption style={{backgroundColor:'black',opacity:'80%'}}>
          
         </Carousel.Caption>*/}
         <div style={{backgroundColor:'black',opacity:'80%',padding:'35px'}}>
         <h3 style={{color:'white'}}>{carousel.header}</h3>
           <p style={{color:'white'}}>{carousel.desc}</p>
           </div>
       </Carousel.Item>
         
         
         ))



         }


</Carousel>
        </div>
    );
}

export default ProjectsCarousel;