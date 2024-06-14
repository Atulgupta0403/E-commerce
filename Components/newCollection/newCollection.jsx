import React from 'react'
import "./newCollection.css"
import "./newCollection.css"
import new_collection from "../Assets/new_collections"
import Item from "../Item/item"


const newCollection = () => {
  return (
    <div className='newCollection'>
      <h1>New collections</h1>

      <div className="collection">
        {new_collection.map((item , i)=>{
            return <Item key={i} item={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
        })}
      </div>
    </div>
  )
}

export default newCollection
