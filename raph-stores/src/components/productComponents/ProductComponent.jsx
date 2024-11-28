import React from 'react'
import MainImage from './MainImage'
import Products from '../homeComponents/Products'
import OurProducts from './OurProducts'
import Email from '../homeComponents/Email'

const ProductComponent = () =>{
  return (
    <div>
      <MainImage />
      <OurProducts />
      <Products isShow={true}/>
      
    </div>
  )
}

export default ProductComponent
