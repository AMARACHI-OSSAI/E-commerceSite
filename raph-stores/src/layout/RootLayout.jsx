import React, { useContext } from 'react'
import Mainheader from '../components/homeComponents/Mainheader'
import Navbar from '../components/homeComponents/Navbar';
import { Outlet } from 'react-router-dom'
import Footer from '../components/homeComponents/Footer';
import Mainfooter from '../components/homeComponents/Mainfooter';
import Finalfooter from '../components/homeComponents/Finalfooter';
import Email from '../components/homeComponents/Email';
import { ProductContext } from '../context/ProductContext';
import Checkout from '../components/cart/Checkout';

function RootLayout() {
  const { cartMessage } = useContext(ProductContext);
  return (
    <div>
      <Mainheader />
      <Navbar />
      {cartMessage && (<div className='absolute z-[500]  px-3 rounded-md left-1/2 bottom-48 text-zinc-800 bg-zinc-400'>{cartMessage}</div>)}
      <main >
        <Outlet />
      </main>
      <Email />
      <Footer />
      <Mainfooter />
      <Finalfooter />
    </div>
  )
}

export default RootLayout
