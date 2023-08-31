import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {CiFacebook} from 'react-icons/ci'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    // <footer>
    //   <a href="#" className='footer_logo'>SID</a>

    //   <ul className='permalinks'>
    //     <li><a href="#"> Home </a></li>
    //     <li><a href="#about"> about </a></li>
    //     <li><a href="#experience"> experience </a></li>
    //     <li><a href="#portfolio"> portfolio </a></li>
    //     <li><a href="#Contact"> Contact </a></li>
    //   </ul>

    //   {/* <div className="footer_socials">
    //     <a href="https://facebook.com">{CiFacebook}</a>
    //     <a href="https://instagram.com">{BsInstagram}</a>
    //     <a href="https://linkedin.com">{BsLinkedin}</a>
    //   </div> */}

      <div className="footer_copyright">
        <small>
          &copy; SIDDHARTHA KOMMU. All rights reserved.
        </small>
      </div>
    // </footer>
  )
}

export default Footer
