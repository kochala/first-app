import "./Footer.css";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";
import React, { useContext } from 'react';
import { IsDarkContext } from '@/context/IsDarkProvider';


const Footer = () => {
  
  const { isDark } = useContext(IsDarkContext);

  return (
    <div className={isDark ? "footer-div dark": "footer-div"}>
      <div className='footer-list'>
        <div className='footer-link-div'>
          <span className='footer-link'>EXCLUSIVE</span>
          <span className='footer-link'>Subscribe</span>
          <span className='footer-link'>Get 10% off your first order</span>
           <span className='footer-link'>Enter your email</span>
        </div>
        <div  className='footer-link-div'>
          <span className='footer-link'>Support</span>
          <span className='footer-link'>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</span>
          <span className='footer-link'>exclusive@gmail.com</span>
          <span className='footer-link'>+88015-88888-9999</span>
        </div>
        <div  className='footer-link-div'>
          <span className='footer-link'>ECAUNT</span>
          <span className='footer-link'>My Account</span>
          <span className='footer-link'>Login / Register</span>
          <span className='footer-link'>Cart</span>
          <span className='footer-link'>Wishlist</span>
          <span className='footer-link'>shop</span>
        </div>
        <div className='footer-link-div'>
          <span className='footer-link'>Quick Link</span>
          <span className='footer-link'>Privacy Policy</span>
          <span className='footer-link'>Terms Of Use</span>
          <span className='footer-link'>FAQ</span>
          <span className='footer-link'>Contact</span>
        </div>
        <div className='footer-link-div'>

        </div>
      </div>
      <div className='copyright-div'>
        <span className='copyright'>
          <span className='copyright-icon'>
            &#169;
          </span>
          Copyright Rimel 2022. All right reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
