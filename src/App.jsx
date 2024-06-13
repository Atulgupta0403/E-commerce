import { useState } from 'react'
import './App.css'

import Shop from "../Pages/shop"
import ShopCategory from "../Pages/shopCategory"
import Product from "../Pages/product"
import Cart from "../Pages/cart"
import Login from "../Pages/login"

import Navbar from "../Components/navbar/navbar"
import {BrowserRouter , Routes , Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path= "/" element={<Shop/>}/>
        <Route path= "/mens" element={<ShopCategory  category="mens"/>}/>
        <Route path= "/womens" element={<ShopCategory category="womens"/>}/>
        <Route path= "/kids" element={<ShopCategory category="kids"/>}/>
        <Route path= "/product" element={<Product />}>
          <Route path= ":productId" element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
