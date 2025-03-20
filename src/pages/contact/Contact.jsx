import React from 'react'
import "./Contact.css"
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <>
      <div className='contact-div'>
        <div className='contact-adress-div'>
          <div className='contact-adress coll'>
            <div className='adress-title-div'>
              <span className='contact-icon'><FiPhone/></span>
              <span><h3>Call To Us</h3></span>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <a href="tel:+995577361967">phone:+995577361967</a>
          </div>
          <div className='contact-adress'>
            <div className='adress-title-div'>
              <span className='contact-icon'><MdOutlineMail/></span>
              <span><h3> Write To US</h3></span>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p><a href="mailto:dachikochalidze0@gmail.com">mail:dachikochalidze0@gmail.com</a></p>
            <p><a href="mailto:dachikochalidze0@gmail.com">mail:dachikochalidze0@gmail.com</a></p>
            
          </div>
        </div>
        <div className='contact-input-div'>
          <div className='contact-input'>
            <input type="text" className='contact-input-info' placeholder='your name'/>
            <input type="email" className='contact-input-info' placeholder='your email'/>
            <input type="tel" className='contact-input-info' placeholder='your phone'/>
          </div>
          <div className='contact-input'>
            <input type="text" className='contact-input-message' placeholder='your message'/>
          </div>
          <button className='contact-button'>send message</button>
        </div>
      </div>
    </>
  )
}

export default Contact
