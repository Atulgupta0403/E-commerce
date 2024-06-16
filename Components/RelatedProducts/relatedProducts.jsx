import React from 'react'
import "./relatedProduct.css"
import data_product from "../Assets/data"
import Item from "../Item/item"

const relatedProducts = () => {
    console.log(data_product)
  return (
    <div className='relatedProducts'>
      <h1>Related Products</h1>
      <div className="relatedProduct-item">
        {data_product.map((item , i)=>{
            return <Item key={i} item={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} id={item.id} />
        })}
      </div>
    </div>
  )
}
import "./relatedProduct.css"
export default relatedProducts
