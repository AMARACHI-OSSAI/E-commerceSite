import React, { useContext } from 'react'
import { GiTrashCan } from 'react-icons/gi'
import CartDetails from './CartDetails'
import { ProductContext } from '../../context/ProductContext'
import { FaRegFaceSadCry } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Checkout from './Checkout';


function Cart() {
  const { cart, clearCart, total, itemAmount } = useContext(ProductContext)
  return (
    <div>
      <div className='cartcontainer flex justify-between p-5'>
        <div className='cartleft w-2/3 bg-zinc-300 justify-between pl-10'>
          <div className='cartheader flex justify-between mt-5 font-bold pl-10 mb-5'>
            <h1 className='text-2xl'>Shopping Cart</h1>
            <h1 className='text-2xl'>Items: ({itemAmount}) </h1>
            <GiTrashCan size={25} onClick={clearCart} className='deletecart text-xl' />
          </div>
          <div className='cartheader flex justify-between ml-16 '>
            <span className='text-xl  '>Product Description</span>
            <span className='text-xl '>Quantity</span>
            <span className='text-xl '>Price</span>
            <span className='text-xl  '>Total</span>
          </div>
          <div className='h-full'>
            {cart.length > 0 ? (
              cart.map((items) => (
                <CartDetails items={items} key={items.id} />
              ))
            ) : (
              <div className='flex justify-center items-center flex-col mt-20'>
                <strong><h1 className='text-xl'>Your Cart Is Empty !!!</h1></strong>
                <FaRegFaceSadCry className='size-16' />
              </div>

            )
            }
          </div>
        </div>
        <div className='cartright w-1/3 bg-zinc-300 p-20  '>
          <h2 className='text-2xl mb-5'>Cart Summary</h2>
          <div className='cartsummary'>
            <div className='summaryitem flex  justify-between mb-2'>
              <span>Items</span>
              <span>{itemAmount}</span>
            </div>
            <div className='summaryitem flex  justify-between mb-2'>
              <span>Subtotal</span>
              <span>${isNaN(total) ? 0 : total}</span>
            </div>
            <div className='summaryitem flex  justify-between mb-2'>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className='summaryitem flex  justify-between mb-2'>
              <span>Promo Code</span>
              <input className='ml-2' type='text' placeholder='Enter your code' />
              <button className='applybtn bg-red-600 text-white rounded py-2 px-4 cursor-pointer mt-2 ml-3'>Apply</button>
            </div>
            <div className='summaryitemtotalcost flex  justify-between mb-2 font-bold text-lg'>
              <span>Total Cost</span>
              <span>${isNaN(total) ? 0 : total}</span>
            </div>
            <Link to={'/checkout'}>
              <button className='checkoutbtn w-1/2 bg-zinc-500 text-white rounded p-4 cursor-pointer mt-5 hover:bg-zinc-600'>CHECKOUT</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart
