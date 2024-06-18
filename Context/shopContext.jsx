import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"

export const shopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0; 
    }
    return cart
}

const ShopContextProvider = (props) =>{

    const [cartItems , setcartItems] = useState(getDefaultCart())
    // console.log(contextValue)
    
    const addToCart = (itemId) =>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1 }))
        console.log(cartItems)
    }
    const removeFromCart = (itemId) =>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1 }))
    }

    // const getTotalCartAmount = () => {
    //     let totalAmount = 0 ;
    //     for(const item in cartItems){
            
    //     }
    // }

    const contextValue = { cartItems , all_product , addToCart , removeFromCart }
    

    return (
        <shopContext.Provider value={contextValue} >
            {props.children}
        </shopContext.Provider> 
    )
}


export default ShopContextProvider