import React from 'react';
import "./About.css"
import { TbTruckDelivery } from "react-icons/tb";
import { LuHeadphones } from "react-icons/lu";
import { RiSecurePaymentLine } from "react-icons/ri";

const About = () => {
  return (
    <>
      <div className='about-div'>
        <div className='about-info'>
          <span><h1>Our Story</h1></span>
          <p>Launced in 2015, Exclusive is South Asias premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. </p>
          <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.</p>
        </div>
        <div className='about-image'>
          <img src="src/assets/images/about/about1.png" alt="" />
        </div>
      </div>
      <div className='about-icons-div'>
        <img src="src/assets/images/about/abouticon1.png" alt="" />
        <img src="src/assets/images/about/abouticon2.png" alt="" />
        <img src="src/assets/images/about/abouticon2.png" alt="" />
        <img src="src/assets/images/about/abouticon4.png" alt="" />
      </div>
      <div className='last-icons-div'>
        <div className='last-icon-div'>
          <span className='last-icon'>< TbTruckDelivery  /></span>
          <span className='last-text'>FREE AND FAST DELIVERY</span>
          <span>"Free delivery for all orders over $140"</span>
        </div>
        <div className='last-icon-div'>
          <span className='last-icon'>< LuHeadphones  /></span>
          <span className='last-text'>24/7 CUSTOMER SERVICE</span>
          <span>Friendly 24/7 customer support</span>
        </div>
        <div className='last-icon-div'>
          <span className='last-icon'>< RiSecurePaymentLine  /></span>
          <span className='last-text'>MONEY BACK GUARANTEE</span>
          <span>We reurn money within 30 days</span>
        </div>
      </div>
    </>
  );
};

export default About;
