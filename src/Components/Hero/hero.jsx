import React from 'react'
import "./hero.css"
import Hand_icon from "../Assets/hand_icon.png"
import Hero_img from "../Assets/hero_image.png"
import Arrow from "../Assets/arrow.png"

const hero = () => {
  return (
    <div class="hero">
      <div className="hero-left">

        <h3>New Arrival Only</h3>

        <div className="hand_icon">
            <h1>new</h1>
            <img src={Hand_icon} alt="" />
        </div>

        <h1>collections</h1>
        <h1>for everyone</h1>

        <button class="latest">Latest Collection 
            <img src={Arrow} alt="" />
        </button>

      </div>
      <div className="hero-right">
        <img src={Hero_img} alt="" />
      </div>
    </div>
  )
}

export default hero
