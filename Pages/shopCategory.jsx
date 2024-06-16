import React, { useContext } from 'react'
import "./CSS/shopCategory.css"
import { shopContext } from '../Context/shopContext'
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
// import all_product from "../Components/Assets/all_product"
import Item from "../Components/Item/item"
import Footer from "../Components/footer/footer"

const shopCategory = (props) => {
  const {all_product} = useContext(shopContext)
  return (
    <div className='shopCategory'>
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products.

        </p>
        <div className="shopCategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopCategory-product">
        {all_product.map((item , i)=>{
          if(props.category === item.category){
            return <Item key={i} item={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} id={item.id} />
          }
          else{
            return null;
          }
        })}
      </div>

      <div className="shopCategory-load">
        <p>Explore More</p>
      </div>
      
      <Footer />
    </div>
  )
}

export default shopCategory
