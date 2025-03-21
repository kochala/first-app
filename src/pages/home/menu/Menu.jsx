import React, { useContext } from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos, MdArrowForward} from "react-icons/md";
import "./menu.css"
import { IsDarkContext } from '@/context/IsDarkProvider';

const Menu = () => {
    const [categories, setCategories] = useState([]);
     useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
        .then(response => {
            setCategories(response.data);
        })
        .catch(error => {
            console.error('მონაცემების წაკითხვის შეცდომა:', error);
        });
        }, []);

        const {isDark} = useContext(IsDarkContext)


  return (
    <div className={isDark?'home-menu dark': "home-menu"}>
      <div className='home-menu-list'>
        {categories.map((el) =>(
          <Link to={`category/${el.slug}`} key={el.slug} >
            <p >
              {el.name}<MdArrowForwardIos/>
            </p>
          </Link>
        ))}
      </div>
      <div className='home-banner'> 
        <div className='home-banner-text'> 
          <span className='apple-logo'>
            <img src="src/assets/images/home/applelogo.png" alt="" />
            iPhone 14 Series
          </span>
          <span className='home-sale'>
            Up to 10% off Voucher
          </span>
          <span className='home-shop-now'>
            <Link key="unique-key">shop now <MdArrowForward/></Link>
          </span>
        </div>
        <div className='home-banner-apple'>
          <img src="src/assets/images/home/applebanner.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Menu