import React from 'react';
import "./Flashcartitem.css"
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Cartitem = ({image, id, price, discountpercentage, title}) => {
  return (
    <Link className="link-to-product" to={`Products/${id}`} >
      <div className='flash-cartitem-div'>
        <div className='flash-cartitem'>
          <div className='flash-image'>
            <span className='flash-sale'>-{discountpercentage}%</span>
            <div className='flash-icons'>
              <span className='flash-icon' ><FaRegHeart/></span>
              <span className='flash-icon'><FiEye /></span>
            </div>
          </div>
          <div className='flash-img'>
            <img src={image} />
          </div>
          <div className='add-to-cart'> 
            <span>add to cart</span>
          </div> 
        </div>       
        <div className='flash-info'> 
          <h3>{title}</h3>
          <span className='price'>${price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Cartitem; 
 