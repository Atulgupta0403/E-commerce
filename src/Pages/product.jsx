import React, { useContext } from 'react'
import {shopContext} from "../Context/shopContext"
import {useParams} from "react-router-dom"
import Breadcrum from "../Components/breadcrums/breadcrum"
import ProductDisplay from '../Components/productDisplay/productDisplay'
import Description from '../Components/DescriptionBox/description'
import Footer from "../Components/footer/footer"
import RelatedProducts from '../Components/RelatedProducts/relatedProducts'

const product = () => {
  const {all_product} = useContext(shopContext)
  const {productId} = useParams()
  const product = all_product.find((e) => e.id=== Number(productId))
  return (
    <div>
      <Breadcrum product = {product}/>
      <ProductDisplay product = {product} />
      <Description />    
      <RelatedProducts />
      <Footer />
      
    </div>
  )
}

export default product
