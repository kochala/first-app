import React from 'react'
import "./Singup.css"
import { Link } from 'react-router-dom';

const Singup = () => {
  return (
    <>
    <div className='singup-div'>
      <div className='singup-banner'>
        <img src="src/assets/images/singup/singupbanner.png" alt="" />
      </div>
      <div className='singup'>
        <span className='singup-title'>create an account</span>
        <p>enter your details below</p>
        <input type="text" className='singup-input' placeholder='name'/>
        <input type="email" className='singup-input' placeholder='email or phone number'/>
        <input type="Password" className='singup-input' placeholder='password'/>
        <button className='singup-button'>create account</button>
        <div className='singup-google-link'>
          <img src="src/assets/images/singup/singupgooglelogo.png" alt="" />
          <span>sing up with google</span>
        </div>
        <span className='singup-login-link'>already have account? <Link to="/Login" >log in</Link></span>
      </div>
    </div>
    
    </>
  )
}

export default Singup
