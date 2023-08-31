import React from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {BiSolidUserDetail} from 'react-icons/bi'

// import {TbNotes} from 'react-icons/tb'

import {LiaAwardSolid} from 'react-icons/lia'

import {BsFillBriefcaseFill} from 'react-icons/bs'

import {IoIosContact} from 'react-icons/io'

import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActive]= useState('#')
  return (
    <nav className='nav'>

      <a href="#" onClick={() => setActive('#')} className={ activeNav === '#' ? 'active' : ''}><BiHomeSmile /></a>

      <a href="#about"onClick={() => setActive('#about')} className={ activeNav === '#about' ? 'active' : ''}><BiSolidUserDetail /></a>

      <a href="#experience" onClick={() => setActive('#experience')} className={ activeNav === '#experience' ? 'active' : ''}><LiaAwardSolid/></a>

      {/* <a href="#testimonials"onClick={() => setActive('#onClick')} className={ activeNav === '#onClick' ? 'active' : ''}><LiaAwardSolid/></a> */}

      <a href="#portfolio" onClick={() => setActive('#portfolio')} className={ activeNav === '#portfolio' ? 'active' : ''}><BsFillBriefcaseFill /></a>

      <a href="#contact" onClick={() => setActive('#contact')} className={ activeNav === '#contact' ? 'active' : ''}><IoIosContact /></a>

    </nav>
  )
}

export default Nav
