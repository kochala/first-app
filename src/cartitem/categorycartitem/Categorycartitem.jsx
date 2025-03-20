import React from 'react'
import "./Categorycartitem.css"
import { Link } from 'react-router-dom'

const Categorycartitem = ({image, slug}) => {
  return (
    <Link className="link-to-product" to={`category/${slug}`} >
      <div className='categorycartitem'>
        <img src={image} alt="" />
        <span>{slug}</span>
      </div>
    </Link>
  )
}

export default Categorycartitem