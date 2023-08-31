import React from 'react'
import CV from '../../../src/CV.docx'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Contact Me here!</a>
    </div>
  )
}

export default CTA
