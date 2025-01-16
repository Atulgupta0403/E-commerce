import React, { useContext } from 'react'
import "./cartItem.css"
import { shopContext } from '../../Context/shopContext'
import remove_icon from "../Assets/cart_cross_icon.png"
import Footer from "../footer/footer"

const cartItem = () => {
    const {all_product  ,cartItems, removeFromCart , getTotalCartAmount} = useContext(shopContext)
    // console.log(all_product)
    // console.log(typeof(all_product))
    // all_product.map((e)=>{
    //     console.log([e.id])
    // })
    // console.log(cartItems)
    // all_product.map((e)=>{
    //   console.log(cartItems[e.id] > 0)
    // })

    console.log(all_product)

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
              return <div>
                <div className="cartItem-format cartItem-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p className='title'> {e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartItem-Quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='carticon-remove-icon' onClick={()=>{removeFromCart(e.id)}} src={remove_icon} alt="" />
                </div>
                <hr />
              </div>
        }
        console.log(cartItems[e.id])

        return null;
      })}

    <div className="cartitems-down">
      <div className="cartitem-total">
        <h1>Cart Total</h1>
        <div className='cartitems-total'>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p className='total'>Total</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
        </div>

        <button className='proceed'>PROOCEED TO CHECK OUT</button>
      </div>

      <div className="cartitems-promocode">
        <p>If you have a promocode , Enter it here </p>
        <div className="cartitems-promobox">
          <input type="text" placeholder='promo code '/>
          <button>Submit</button>
        </div>
      </div>

    </div>
    </div>
      <Footer />
    </>
  )
}

export default cartItem
