import React, { useContext } from 'react'
import "./productDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { shopContext } from '../../Context/shopContext'

const productDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(shopContext)
    // console.log(product)
  return (
    <div className='productDisplay'>
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-img">
            <img className='main-image' src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>

        <div className="productDisplay-right-prices">
            <p className='old'>${product.old_price}</p>
            <p className='new'>${product.new_price}</p>
        </div>

        <div className="productDisplay-desp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, quia.
        </div>

        <div className="productDisplay-size">
            <h3>Select Size</h3>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XXL</p>
        </div>

        <div className="productDisplay-button">
            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>

        </div>

        <div className="category">
            <p>Category:{product.category}</p>
            {/* <p>Tags:{product.tags}</p> */}
        </div>

      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default productDisplay
