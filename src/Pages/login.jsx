import React from 'react'
import "../Pages/CSS/login.css"

const login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="text" placeholder='Username'/>
          {/* <input type="email" placeholder='Email Address'/> */}
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p>I don't have an Account ? <a href='/register'>Register Now</a></p>

        <div className="login-agree">
          <input type="checkbox" />
          <p>By contuning , i agree to the terms of use & privacy policy .</p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default login
