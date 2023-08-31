import React from 'react'
import './contact.css'
import {BiLogoGmail} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import {TbBrandMessenger} from 'react-icons/tb'

// import { useRef } from 'react';
// import emailjs from 'emailjs-com'

const Contact = () => {
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };
  return (
   <section id='contact'>
  <h5>
    Get In Touch 
  </h5>
  <h2>
    Contact Me
  </h2>


  <div className="container contact_container">
    <div className="contact_options">
      <article className='contact_option'>
      <BiLogoGmail className='contact_option-icon' />
        <h4>Email</h4>
        <h5>siddharthakommu.18@gmail.com</h5>
        <a href="mailto:siddharthakommu.18@gmail.com" target="_blank">Send a mail</a>
      </article>

      <article className='contact_option'>
      <TbBrandMessenger className='contact_option-icon'/>
        <h4> Messenger </h4>
        <h5>SID</h5>
        <a href="https://m.me/siddhart.kommu"  target="_blank">Send a Message</a>
      </article>


      <article className='contact_option'>
      <BsWhatsapp className='contact_option-icon'/>
        <h4>WhatsApp</h4>
        <h5>8328686004</h5>
        <a href="https://api.whatsapp.com/send?phone+91 8328686004" target="_blank">Text me here</a>
      </article>
    </div>
  

  <form action="" className='page'>
    <input type="text" name="name" id="" placeholder='Your Full name' required />

    <input type="email" name="email" id="" placeholder='Your email' required />

    <textarea name="message" id=""  rows="17" placeholder='Your message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
  
  </div>

   </section>
  )
}

export default Contact
