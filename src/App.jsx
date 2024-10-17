import { useState } from 'react'
import './App.css'

import Shop from "../Pages/shop"
import ShopCategory from "../Pages/shopCategory"
import Product from "../Pages/product"
import Cart from "../Pages/cart"
import Login from "../Pages/login"
import men_banner from "../Components/Assets/banner_mens.png"
import kid_banner from "../Components/Assets/banner_kids.png"
import women_banner from "../Components/Assets/banner_women.png"
import Register from "../Pages/register"

import Navbar from "../Components/navbar/navbar"
import Footer from "../Components/footer/footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/register" element={<Register /> } />
          <Route path='/login' element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
