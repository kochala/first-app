import React, { useContext } from 'react';
import "./Home.css"
import "./enchance.css"
import "./arrival.css"
import "./last.css"

import {Flash, Month, Explore, Menu} from "@/pages/home"
import { TbTruckDelivery } from "react-icons/tb";
import { LuHeadphones } from "react-icons/lu";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IsDarkContext } from '@/context/IsDarkProvider';

    const Home = () => { 
      const {isDark} = useContext(IsDarkContext)
   
  return (
  <div className={isDark?'home dark': "home"}>
      
    <Menu/>
    <Flash/>
    {/* <Category/> */}
    <Month/>

    <div className='enchance-banner-div'>
      <div className='enchance-div'>
        <span className='enchance-categories'>categories</span>
        <span className='enchance-music'>Enhance Your Music Experience</span>
        <div className='enchance-timer-div'>
          <div className='enchance-timer'>
            <span className='enchance-number'>05</span>
            <span className='enchance-time'>days</span>
          </div>
          <div className='enchance-timer'>
            <span className='enchance-number'>23</span>
            <span className='enchance-time'>hours</span>
          </div>
          <div className='enchance-timer'>
            <span className='enchance-number'>59</span>
            <span className='enchance-time'>minutes</span>
          </div>
          <div className='enchance-timer'>
            <span className='enchance-number'>35</span>
            <span className='enchance-time'>second</span>
          </div>
        </div>
        <button className='enchance-button'>bay now!</button>
      </div>
      <div className='enchance-banner'>
        <img src="src/assets/images/home/enchancebanner.png" alt="" />
      </div>
    </div>

    <Explore/>
   
    <div className='my-main-header-div'>
      <span className='my-flash-icon'></span>
      <span className='my-main-header'>Featured</span>
    </div>
    <div className='my-header-div'>
      <span className='my-header'>New arrival</span>
    </div>
    <div className='arrival-div'>
      <div>
        <img src="src/assets/images/home/arrival1.png" alt="" />
      </div>
      <div className='arrival2'>
        <div> 
          <img src="src/assets/images/home/arrival2.png" alt="" />
        </div>
        <div className='arrival3'>
          <div>
            <img src="src/assets/images/home/arrival3.png" alt="" />
          </div>
          <div>
            <img src="src/assets/images/home/arrival4.png" alt="" />
          </div>
        </div>
      </div>
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
  </div>
);};

export default Home;
