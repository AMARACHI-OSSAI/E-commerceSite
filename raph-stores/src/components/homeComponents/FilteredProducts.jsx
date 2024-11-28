import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FilteredProducts() {
    const [filterProducts, setFilterProducts] = useState([]);
    const[error, setError] = useState(null)

    const fetchFilterProducts = async() =>{
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            setFilterProducts(response.data);
        
    } catch (error) {
        setError(error)
        
    }

useEffect (()=>{
    fetchFilterProducts()

},[])


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
        {error && <p>Error: {error.message}</p>}
        {filterProducts.map((items)=>(
            <div key={items.id} className='h-[30rem]'>
                <img src = {items.image} alt={items.title} className='h-1/2 w-1/2 '/>
                <p>{items.title}</p>
                </div>
        ))}
      
    </div>
  )
}}

export default FilteredProducts
