import React from 'react'
import { useParams } from 'react-router-dom'
import { BiAccessibility } from "react-icons/bi";


const ProductDetails = () => {
  const {id}= useParams();
  return (
    <div><BiAccessibility />

      <h2>product id:{id}</h2>
    </div>
  )
}

export default ProductDetails
