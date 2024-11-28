import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
// import { CartContext } from '../../context/CartContext';
// import { ProductContext } from '../../context/ProductContext';


const Navbar = () => {
  const {handleChange, search, handleFilteredSearch, result, togglesearch, setTogglesearch} = useContext(SearchContext);

  // const {totalItems} = useContext(CartContext);
  // const {products} = useContext(ProductContext);
  return (
    
    <div className='flex  py-2   bg-zinc-500 justify-around' >
      <ul className='flex text-white	w-96  h-12 pt-2.5	justify-around' >
        <li><Link to={'/'}>Home</Link></li>
        <li> <Link to={'/products'}>Products</Link>  </li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/login'}>Log In</Link></li>
        <li><Link to={'/faqs'}>FAQs</Link></li>
      </ul>
      <div className=' text-sm w-72 bg-zinc-700 flex justify-around items-center h-11 '>
        <input type='search' placeholder='Enter your search' className='px-2 h-8 mx-3 w-10/12 outline-none' value={search} onChange={handleChange}/>
        <CiSearch className='mr-4 text-2xl' onClick={handleFilteredSearch}  />
      </div>

    { togglesearch && (<div className=' w-fit text-zinc-900 bg-white z-50 overflow-y-scroll h-16'>
        {result.map((singleItem)=> (
          <ul key={singleItem.id} className='flex h-16 items-start gap-3 space-y-4 divide-y-2 pt-2 px-2 '>
            <li onClick={()=> setTogglesearch(false)}>
              <Link to={`product/${singleItem.id}`}>{singleItem.title}</Link></li>
          </ul>
        ))  }   
      </div>)}

  
    </div>
  )
}
export default Navbar;