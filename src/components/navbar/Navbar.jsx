import React, {useContext} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { CiHeart, CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { LuMoon, LuSun} from "react-icons/lu";
import { IsDarkContext } from "@/context/IsDarkProvider"

const Navbar = () => {
  const {isDark, setIsDark} = useContext(IsDarkContext)
  return (
    <div className={isDark? "navbar dark": "navbar"}>
      <div className='navbar-head'>
        <span className='text'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <a href="">SHOP NOW</a>
        </span>
        <span>ENGLISH</span>
      </div>
      <div className='navbar-menu'>
        <span><h2>EXCLUSIVE</h2></span>
        <div className='menu-list'> 
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/Singup">Singup</Link>
        </div> 
        <div className='nav-search-div'>
          <div className="nav-search">
            <input type="text" placeholder="what are you looking for?" className="nav-search-input" />
            <CiSearch className="nav-search-icon" />
          </div>
          <CiHeart/>
          <BsCart3/>
          <button className='theme-btn' onClick={()=> setIsDark(!isDark)}>
            {isDark?<LuSun/>:<LuMoon/>}
          </button>
        </div>
      </div> 
    </div>
  )
}

export default Navbar