import React from 'react'
import img11 from '../../assets/pexels.jpg'

const MainImage = () => {
  return (
    <div className=' mx-14 flex'>
      <div className=' w-1/2 mt-10 '>
        <p className='text-6xl '>Don't be </p>
        <p className='text-6xl '> slow! </p>
        <p className='ml-40 text-6xl mt-10'>Our prices are low!</p>
      </div>

      <img className='w-1/2 h-80 ' src={img11} alt='main image' />

    </div>
  )
}

export default MainImage
