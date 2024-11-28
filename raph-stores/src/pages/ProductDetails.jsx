import React, { useContext } from 'react'
// `import params`
import { useParams } from 'react-router-dom'
import Products from '../components/homeComponents/Products'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../context/CartContext'




function ProductDetails() {
    // const { cartCount } = useContext(CartContext);
const {addToCart, products} = useContext(ProductContext)
    // get product id
    const { id } = useParams();

    // get product based on id
    const product = products.find(product => {
        return product.id === parseInt(id);

    })
    return (
        <div>
            <div className='productdetailsinfo flex px-20 mt-20'>
                <div className='detailleft '>
                    <img  src={product.image} className='w-4/5 '/>
                </div>
                <div className='detailright  py-16 ml-20 '>
                    <h3 className='text-2xl'>{product.title}</h3>
                    <p className='productprice text-lg text-red-600 mt-2 font-bold '>${product.price}</p>
                    <p className=' text-lg  mt-4 w-1/3  '>{product.description}</p>
                    <button className='bg-red-600 mt-4 py-3 px-4 rounded-md text-black font-bold' onClick={()=> addToCart(product, product.id  )}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
