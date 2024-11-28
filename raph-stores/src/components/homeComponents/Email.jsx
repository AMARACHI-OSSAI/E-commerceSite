import React from 'react'
import { FaRegPaperPlane } from "react-icons/fa6";
import { BsEnvelope } from "react-icons/bs";

const Email = () => {
    return (
        <div className='mx-14 flex place-content-between my-10'>
            <div className='flex'>
                <div className='flex '>
                    <FaRegPaperPlane />
                    <h6 className='pl-2'>SIGN UP TO NEWSLETTER</h6>
                </div>
                <div>
                    <p className='pl-6 font-bold'>AND RECEIVE $29 COUPON FOR FIRST SHOPPING</p>
                </div>
            </div>

            <div className=' text-sm w-72 bg-zinc-500 flex justify-around items-center h-16 '>
                <input type="text" placeholder='Enter your email' className='px-2 h-8 mx-3 w-9/12 outline-none' />
                <BsEnvelope className='mr-4 text-2xl' />
            </div>
        </div>
    )
}

export default Email
