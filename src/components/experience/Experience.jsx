import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {RiMedal2Line} from 'react-icons/ri'


const Experience = () => {
  return (
    <section id='experience'>
    <h5>
      What Skills I Have
    </h5>
    <h2>
      My Experience
    </h2>

    < div className="container experience_container">

      <div className="skills">
        <h3>
          Skills
        </h3>
        <div className="experience_content">
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon' />
      <div><h4>HTML</h4>
      <small className="text-light">Experienced</small>
      </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon' />
      <div>
      <h4>CSS</h4>
      <small className="text-light">Experienced</small>
      </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon' />
      <div>
      <h4>JavaScript</h4>
      <small className="text-light">Intermediate</small>
      </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon' />
      <div>
      <h4>React Js</h4>
      <small className="text-light">Interediate</small>
      </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon' />
      <div>
      <h4>C++</h4>
      <small className="text-light">Beginner</small>
      </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon' />
      <div>
      <h4>Hugo</h4>
      <small className="text-light">Beginner</small>
      </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon' />
      <div>
      <h4>Solid Edge <br /> 3D Modeling</h4>
      <small className="text-light">Experienced</small>
      </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon' />
      <div>
      <h4>Touch Typing</h4>
      <small className="text-light">Experienced</small>
      </div>
          </article>


        </div>
      </div>



      <div className="experience">
      <h3>
          Experience
        </h3>
     <article className='experience_details'>
          <RiMedal2Line  className='experience_details-icon'/>
      <div>
      <h4>Lambda (SD Club of IITH) <br /> Core Member</h4>
      <small className="text-light">2023-24</small>
      </div>
          </article>

          <article className='experience_details'>
          <RiMedal2Line  className='experience_details-icon'/>
      <div>
      <h4>Elan Culti Domain <br /> Volunteer</h4>
      <small className="text-light">2023</small>
      </div>
          </article>


          </div>
        </div>
        

  </section>
  )
}

export default Experience
