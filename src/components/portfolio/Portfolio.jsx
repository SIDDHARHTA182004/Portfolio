import React from 'react'
import './portfolio.css'
import webimg1 from '../../images/webimg1.png'
import cab from '../../images/cab.avif'
import page2 from '../../images/page2.webp'
import page3 from '../../images/page3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container ">
      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={cab} alt="" />
        </div>
        <h3>IITH Cab-Sharing</h3>
        <div className="portfolio-items_cat">
        <a href="https://github.com/SIDDHARHTA182004/IITH-Cabsharing.git" className='btn'>GitHub repo Link</a>
        <a href="" target='_blank' className='btn btn-primary'>live demo(Currently Unavailable)</a>
        </div>
      </article>

      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={page2} alt="" />
        </div>
        <h3>My Blog Page</h3>
        <div className="portfolio-items_cat">
        <a href="https://github.com/SIDDHARHTA182004/MY_PERSONL_BLOG.git" className='btn'>GitHub repo Link</a>
        <a href="https://live-demo" target='_blank' className='btn btn-primary'>live demo (Currently Unavailable)</a>
        </div>
      </article>

      <article className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={page3} alt="" />
        </div>
        <h3>My Portfolio Site </h3>
        <div className="portfolio-items_cat">
        <a href="https://github.com" className='btn'>GitHub repo Link</a>
        <a href="https://live-demo" target='_blank' className='btn btn-primary'>live demo of the webpage</a>
        </div>
      </article>
    </div>
  </section>
  )
}

export default Portfolio
