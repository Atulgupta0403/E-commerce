import React from 'react'
import "./newsletter.css"

const newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer on your Email</h1>
        <p>Subscribe to our newsletter and stay updated </p>
        <div className="input">
            <input type="text" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default newsletter
