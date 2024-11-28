import React from 'react'
import Jewelry from './Jewelry'
import MainImage from '../productComponents/MainImage'
import JewelryTitle from './JewelryTitle'

function JewelryCategory() {
  return (
    <div>
        <MainImage />
        <JewelryTitle />
      <Jewelry />
    </div>
  )
}

export default JewelryCategory
