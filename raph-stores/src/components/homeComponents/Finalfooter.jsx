import React from 'react'
import img8 from "../../assets/paypal.png"

const Finalfooter = () => {
  return (
    <div className='bg-zinc-950 h-20 mx-14 mt-14 flex justify-around py-8'>
      <div className='flex'>
        <p className='text-white'>© 2017</p>
        <p className='text-zinc-400'> TopDeal</p>
        <p className='text-white'>. Designed by</p>
        <p className='text-zinc-400'> SmartAddons.Com</p>
        <p className='text-white'>. All Rights Reserved</p>
      </div>
      <div>
        <img src={img8} alt="payment options" />
      </div>


    </div>
  )
}

export default Finalfooter
