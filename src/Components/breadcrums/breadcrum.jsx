import React from 'react'
import "./breadcrum.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"


const breadcrum = (props) => {
    const {product}  = props
    // console.log(product)
  return (
    <div className='breadcrum'>
      Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default breadcrum
