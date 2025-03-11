import "./thismonth.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import Cartitem from '../../../cartitem/flashcartitem/Flashcartitem';

const Month = () => {


      const [month, setMonth] = useState([]);
      useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=4&skip=10')
              .then(response => {
                  setMonth(response.data.products);
              })
              .catch(error => {
                  console.error('მონაცემების წაკითხვის შეცდომა:', error);
              });
            }, []);




  return (
    <div>
        <div className='my-main-header-div'>
              <span className='my-flash-icon'></span>
              <span className='my-main-header'>This Month</span>
            </div>
            <div className='my-header-div'>
              <span className='my-header'>Best Selling Products</span>
              <Link to="/Product" key="unique-key"><button className='this-month-button'>wiev all</button></Link>
            </div>
            <div className="best-sale-div">
              {month.map((el) => (
                <Cartitem 
                  key={el.id}
                  id={el.id}
                  image={el.thumbnail}
                  title={el.title}
                  price={el.price}
                  newPrice={el.newprice}
                  discountpercentage ={el.discountPercentage} 
                />
              ))}
            </div>

    </div>
  )
}
 
export default Month