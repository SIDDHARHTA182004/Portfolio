import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
const Socials = () => {
  return (
    <div className='socials'>
      <a href="https://linkedin.com" target="_blank"> <BsLinkedin /> </a>
      <a href="https://github.com" target="_blank"><BsGithub /></a>
      <a href="https://instagram.com" target="_blank"><BsInstagram /></a>
      <a href="https://gmail.com" target="_blank"><BiLogoGmail /> </a>
    </div>
  )
}

export default Socials
