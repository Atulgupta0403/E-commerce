import React from 'react'
import "./CSS/login.css"
import Footer from "../Components/footer/footer"

const login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Username'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p>Already have an Account ? <a href='/login'>Login now</a></p>

        <div className="login-agree">
          <input type="checkbox" />
          <p>By contuning , i agree to the terms of use & privacy policy .</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default login
