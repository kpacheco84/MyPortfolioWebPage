import React, {Component} from 'react';
import '../App.css';


//, in section style


const  AboutMe = () => {

 
    return (
        
<div id = 'aboutme' >

 
<h1 style={{paddingTop:'60px',
 textAlign:'center'}}>About Me</h1>
<br></br>
<section style={{ paddingBottom:'50px',paddingLeft:'25%', paddingRight: '25%'}}>
 <p style={{textIndent:'50px'}}>       My love for programming and everything data began as a Customer Service Supervisor 
     when I was involved in the Business Requirements gathering and User Acceptance Testing 
     of our first custom Customer Service application. It was what lighted up a passion in me and 
     helped me finally decide what I wanted to Major in. I went back to college on a part-time basis and created my 
     very first Microsoft Access application to help my Employer at the time go paperless back in 2008; 
     when this was the beginning trend of every small to major corporation.
     </p>
     <br></br>
       <p style={{textIndent:'50px'}}>I have always enjoyed working in the Healthcare world in one way or another and have gained expertise 
in Healthcare Data Analysis after graduating with my Bachelors's in Management Information Systems in 2013. 
I've had to wear many hats throughout my career; from Business Analyst, Database Programmer, BI Developer, 
Application Developer, Reporting Analyst Web Developer and much more. I feel this has made me a well-rounded asset 
in the Tech Industry in that I have great coding skills but know how to gather and understand 
business requirements in order to code the best solutions possible. My career trajectory has led me
to ultimately become a FullStack Software Developer. I hope to continue to grow 
and polish my current skills and gain new skills as I embark on the best years of my Career Development. 
 </p>
 </section>

</div>
    )
};


export default AboutMe;
