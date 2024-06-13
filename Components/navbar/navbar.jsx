import React from 'react'
import "./navbar.css"
import Logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"

const navbar = () => {
  return (
    <>
    <div class='container'>
      <div className="navlogo">
        <img src={Logo} alt="logo" />
        <p>Shopper</p>
      </div>
      <div className="navmenu">
        <a href="">Shop</a>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">Kids</a>
      </div>

      <div className="nav_login_cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon" />
      </div>


    </div>
    </>
  )
}

export default navbar