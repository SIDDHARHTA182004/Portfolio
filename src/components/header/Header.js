import React from 'react'
import './header.css'
import CTA from './CTA'
import Profile from '../../images/photo_noBG2.png'
import Socials from './Socials'

const Header = () => {
  return (
    
    <header>
    <div className="container header_container">
         <h5>Hello! I am</h5>
         <h1>Siddhartha Kommu</h1>
         <h5 className='text-light'>
          A sophomore student at Mechanical and Aerospace department at IIT Hyderabad 
         </h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={Profile} alt="me" />
        </div>
      </div>
      </header>
   
  )
}

export default Header
