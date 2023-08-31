import React from 'react'
import './about.css'
import {LiaAwardSolid} from 'react-icons/lia'
import Profile from '../../../src/images/Profile.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container
'> <div className="about_me">
  <div className="about_me-image">
    <img src={Profile} alt="My_Img" />
  </div>
  </div>


  <div className="about_content">
     <p>
     Hey there! I'm SIDDHARTHA KOMMU, an undergrad in Mechanical and Aerospace Engineering at IIT Hyderabad. Hyderabad is my home, where education has shaped my journey. I excelled at K.V.S and D.A.V schools, securing 83% in my 10th CBSE exams. <br />

Driven by curiosity, I thrived at Narayana, achieving 97% in 12th grade and a JEE rank of '6131,' realizing my IIT dream.<br />

Beyond books, I'm a dynamic individual. I'm a swimmer, proudly representing my uni's aquatics team, finding serenity in the pool and gym. Cooking fuels my creativity, a flavorful escape. Social connections are my forte; friends are my treasure, valuable in all walks of life.<br />


     </p>

     <a href="#contact" className='btn btn-primary'>Wanna Talk?</a>
  </div>
</div>
    </section>
  )
}

export default About
