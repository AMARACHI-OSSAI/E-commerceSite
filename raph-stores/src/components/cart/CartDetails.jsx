import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { GiTrashCan } from 'react-icons/gi'
import { IoMdRemove } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";

const CartDetails = ({ items }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(ProductContext)
 

  const { id, title, image, price, amount } = items
  return (
    <div>
      <div className='cartitem flex justify-between items-center mt-5 py-3 border-b-2 border-zinc-500'>
        <div className='productdetails flex justify-between items-center max-w-60'>
          <img  src={items.image} alt="{items.title}"  className='w-14 h-14 mr-5 '/>
          <div className='productinfo '>
            <h3 className='m-0 text-lg'>{items.title}</h3>
            <div className='bg-red-600 w-20 rounded pl-2 cursor-pointer mt-2' onClick={() => removeFromCart(id)}><GiTrashCan />Remove</div>
          </div>
        </div>
        <div className='quantity flex items-center'>
          <button  className='w-7 h-7 cursor-pointer bg-zinc-400 flex items-center justify-center ' onClick={()=>decreaseAmount(id)}><IoMdRemove /></button>
          <span className='mx-2'>{items.amount}</span>
          <button className='w-7 h-7 cursor-pointer bg-zinc-400 flex items-center justify-center ' onClick={()=> increaseAmount(id)}><IoAddSharp /></button>
        </div>
        <div className='price text-xl'>${items.price}</div>
        <div className='total text-xl'>
          {`$${parseFloat(items.price*items.amount).toFixed(2)}`}
        </div>
      </div>
    </div>
  )
}

export default CartDetails
