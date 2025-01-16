import React from 'react'
import Hero from "../Components/Hero/hero"
import Popular from '../Components/popular/popular'
import Offers from "../Components/offers/offers"
import NewCollection from "../Components/newCollection/newCollection"
import Newsletter from '../Components/newsLetter/newsletter'
import Footer from "../Components/footer/footer"

const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default shop
