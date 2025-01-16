import { useState } from 'react'
import './App.css'

import Shop from "../src/Pages/shop"
import ShopCategory from "../src/Pages/shopCategory"
import Product from "../src/Pages/product"
import Cart from "../src/Pages/cart"
import Login from "../src/Pages/login"
import men_banner from "../src/Components/Assets/banner_mens.png"
import kid_banner from "../src/Components/Assets/banner_kids.png"
import women_banner from "../src/Components/Assets/banner_women.png"
import Register from "../src/Pages/register"

import Navbar from "../src/Components/navbar/navbar"
// import Footer from "../Components/footer/footer"
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
          <Route path="/product/:productId" element={<Product />} />
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
