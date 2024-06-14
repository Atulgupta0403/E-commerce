import React from 'react'
import "./footer.css"
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"
import pintrest_icon from "../Assets/pintester_icon.png"

const footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>shopper</p>
        </div>

        <div className="footer-link">
            <a href="">Company</a>
            <a href="">Products</a>
            <a href="">Offices</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>

        <div className="footer-icon">
            <div className="icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="icon-container">
                <img src={pintrest_icon} alt="" />
            </div>
            <div className="icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>

        <hr />

        <p className='copyright'>Copyright @ 2024 - All Right Reserved</p>
      
    </div>
  )
}

export default footer
