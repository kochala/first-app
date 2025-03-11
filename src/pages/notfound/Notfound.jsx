import React from 'react'
import "./Notfound.css"
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (<>
    <div className='notfound-div'>
        <span className='notfound-eror'>404 Not Found</span>
        <p>Your visited page not found. You may go home page.</p>
        <Link to="/" ><button className='notfound-button'>back to home page</button></Link>
        
    </div>
    </>
  )
}

export default Notfound