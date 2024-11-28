import React from 'react'
import BannerandCategories from '../components/homeComponents/BannerandCategories'
import Products from '../components/homeComponents/Products'
import Paymentbar from '../components/homeComponents/Paymentbar'
import Email from '../components/homeComponents/Email'
import Footer from '../components/homeComponents/Footer'
import FilteredProducts from '../components/homeComponents/FilteredProducts'

export default function HomePage() {
  return (
    <div>
      <BannerandCategories/>
      {/* <Products isShow={false}/> */}
      <FilteredProducts />
      <Paymentbar />
      

    </div>
  )
}
