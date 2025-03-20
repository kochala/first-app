import React, {useContext} from 'react';
import "./Flashcartitem.css"
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { IsDarkContext } from "@/context/IsDarkProvider"

const Cartitem = ({image, id, price, discountpercentage, title}) => {
  const {isDark} = useContext(IsDarkContext)
  return (
    <Link className="link-to-product" to={`Products/${id}`} >
      <div className={isDark?'flash-cartitem-div dark': "flash-cartitem-div"}>
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
          <p className='title'>{title}</p>
          <p className='price'>${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Cartitem; 
 