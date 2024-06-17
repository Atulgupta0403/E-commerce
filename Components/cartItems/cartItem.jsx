import React, { useContext } from 'react'
import "./cartItem.css"
import { shopContext } from '../../Context/shopContext'
import remove_icon from "../Assets/cart_cross_icon.png"
import Footer from "../footer/footer"

const cartItem = () => {
    const {all_product , addToCart , removeFromCart , cartItems} = useContext(shopContext)
    // console.log(all_product)
    // console.log(typeof(all_product))
    // all_product.map((e)=>{
    //     console.log([e.id])
    // })
    console.log(cartItems)
  return (
    <>
    <div className='cartItem'>
      <div className="cartItem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
          if(cartItems[e.id] > 0){
              return <>
                <div className="cartItem-format cartItem-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p className='title'> {e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartItem-Quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='carticon-remove-icon' onClick={()=>{removeFromCart(e.id)}} src={remove_icon} alt="" />
                </div>
                    <hr />
            </>
            
        }
    })}
    </div>
      <Footer />
    </>
  )
}

export default cartItem
