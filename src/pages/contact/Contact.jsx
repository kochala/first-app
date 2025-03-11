import React from 'react'
import "./Contact.css"
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";


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
            <p>Phone: +8801611112222</p>
          </div>
          <div className='contact-adress'>
            <div className='adress-title-div'>
              <span className='contact-icon'><MdOutlineMail/></span>
              <span><h3> Write To US</h3></span>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className='contact-input-div'>
          <div className='contact-input'>
            <input type="text" className='contact-input-info' placeholder='your name'/>
            <input type="text" className='contact-input-info' placeholder='your email'/>
            <input type="text" className='contact-input-info' placeholder='your phone'/>
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
