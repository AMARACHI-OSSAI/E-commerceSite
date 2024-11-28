import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ProductContext } from '../../context/ProductContext';
import { BsCart4 } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";
import {CartContext} from '../../context/CartContext';



const Products = ({ isShow }) => {

   const {addToCart}= useContext (CartContext)
    const [error, setError] = useState('')

    const { setProducts, products } = useContext(ProductContext);
    

    
    async function fetchProduct() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data);
            console.log(response.data);
        }
        catch (error) {
            setError(error)
            // console.log(error);

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className=' mx-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 bg-white rounded-xl shadow-sm p-5'>
            {error && <p>Error: {error.message} </p>}
            {products.map(items => (<div key={items.id} className='h-[25rem]'>
            

                <img src={items.image} alt={items.title}
                    className='h-1/2 w-1/2 hover:scale-110' />
                <div className='mt-10'>
                    <p className='text-sm py-3 text-left font-normal '>{items.title}</p></div>

         
                    {/* <div className='flex justify-around'>
                        <p>$<span className='text-2xl font-medium'>{items.price}</span></p>
                        <button className='bg-teal-300 p-2 rounded-md hover:bg-teal-500 ml-14' onClick={()=>handleOpen()}><GrOverview /></button>
                        <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' onClick={()=> addToCart(items)}><BsCart4 />Add to cart</button>
                    </div>
                    {IsOpen && (<Sidebar/>)} */}
             

            </div>
        ))}
        </div>
    )
}

export default Products
