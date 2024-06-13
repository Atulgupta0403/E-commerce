import React, { useState } from 'react'
import "./navbar.css"
import Logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'

const navbar = () => {

  const [menu , setMenu] = useState("shop")

  return (
    <>
    <div class='container'>
      <div className="navlogo">
        <img src={Logo} alt="logo" />
        <p>Shopper</p>
      </div>
      <div className="navmenu">
        <a onClick={()=>{setMenu("shop")}}> <Link to="/">Shop</Link> {menu=== "shop"?<hr/> : <></>} </a>
        <a onClick={()=>{setMenu("men")}}><Link to="/mens">Men</Link> {menu=== "men"?<hr/> : <></>} </a>
        <a onClick={()=>{setMenu("women")}}> <Link to="/womens">Women</Link> {menu=== "women"?<hr/> : <></>} </a>
        <a onClick={()=>{setMenu("kids")}}> <Link to="/kids">Kids</Link> {menu=== "kids"?<hr/> : <></>} </a>
      </div>

      <div className="nav_login_cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="cart_icon" /></Link>
      </div>


    </div>
    </>
  )
}

export default navbar