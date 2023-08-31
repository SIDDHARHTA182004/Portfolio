import React from 'react'
import Header from './components/header/Header.js'
import Nav from './components/nav/Nav'
import About from './components/about_me/About'
import Contact from './components/contact_me/Contact'
import Experience from './components/experience/Experience'
// import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'


const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
    </>
  )
}

export default App
