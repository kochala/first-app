import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductCategories } from './Categori-api';
import "./Category.css"

const Categorypage = () => {
    const {category_slug} = useParams();
    const [productList, setProductList] = useState([])
    useEffect(() => {
        getProductCategories(category_slug)
        .then((resp)=>resp)
        .then((data)=>setProductList(data.products))
    },[category_slug]) 
  return (
    <div className='single-categories'>
        {productList.map((product)=>(
          <div className='single-category-div'
          key={product.title}>
            <p className='category-title'>{product.title}</p>
            <img src={product.thumbnail} alt="" />
            <div className='add-to-cart'> 
            <span>add to cart</span>

          </div> 
          </div>

 
        ))}
    </div>
  )
}

export default Categorypage

