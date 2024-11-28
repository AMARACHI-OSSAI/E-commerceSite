import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import LoginPage from './pages/LoginPage'
import ElectronicsAndAccessoriesPage from './pages/ElectronicsAndAccessoriesPage'
import JewelryPage from './pages/JewelryPage'
import MenClothingsPage from './pages/MenClothingsPage'
import WomenClothingsPage from './pages/WomenClothingsPage'
import ProductDetails from './pages/ProductDetails'
import Cart from './components/cart/Cart'
import Checkout from './components/cart/Checkout'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/faqs' element={<FaqPage />} />
        <Route path='/electronicsandaccessories' element={<ElectronicsAndAccessoriesPage />}/>
        <Route path='/jewelry' element={<JewelryPage />}/>
        <Route path='/menclothings' element={<MenClothingsPage/>}/>
        <Route path='/womenclothings' element={<WomenClothingsPage />} />
        <Route path='/product/:id' element={<ProductDetails/ >}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />} />
        


      </Route>
    )
  );
  return (
    <RouterProvider router={router} />


  )
}
export default App