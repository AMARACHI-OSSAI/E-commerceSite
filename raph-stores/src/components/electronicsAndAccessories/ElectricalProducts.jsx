import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext';
import { BsCart4 } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";
import { trimmedLengthOfTitle } from '../../utility/TrimmedLengthOfTitle';
import { Link } from 'react-router-dom';

const ElectricalProducts = () => {
    const { products, addToCart } = useContext(ProductContext);
    return (
        <div className='mx-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 bg-white rounded-xl shadow-sm p-5 overflow-x-hidden'>
            {products.map((items) => (
                items.category === "electronics" ?
                    <div key={items.id} className='h-[25rem]'>

                        <img className='h-1/2 w-1/2  hover:scale-110' src={items.image} alt="" />
                        <div className='text-xs text-center font-bold my-5'>

                            <p className='mt-5 text-sm py-3 text-left font-normal'>{trimmedLengthOfTitle(items.title)}</p>



                            <div className='flex justify-around'>
                                <p>$<span className='text-2xl font-medium'>{items.price}</span></p>
                               <Link to={`/product/${items.id}`}  key={items.id }> <button className='bg-red-500 p-2 rounded-md hover:bg-red-600 ml-14'><GrOverview /></button></Link>
                                <button className='bg-zinc-300 p-2 rounded-md text-sm hover:bg-zinc-400 flex gap-2' onClick={() => addToCart(items, items.id)}><BsCart4 />Add to cart</button>
                            </div>
                        </div>
                    </div> : ''
            ))}

        </div >
    )
}

export default ElectricalProducts
