import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className='login-div'>
      <div className='login-banner'>
        <img src="src/assets/images/login/loginbanner.png" alt="" />
      </div>
      <div className='login'>
        <span className='login-title'>log in to exclusive</span>
        <p>enter your details below</p>
       
        <input type="email" className='login-input' placeholder='email or phone number'/>
        <input type="Password" className='login-input' placeholder='password'/>
        <div>
        <button className='login-button'>log in </button>
        <span className='login-forgot-password'><Link>forgot password?</Link></span>
        </div>
        
        
        
      </div>
    </div>


    </>
  )
}

export default Login