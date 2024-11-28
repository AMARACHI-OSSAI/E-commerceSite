import React,  {useState, createContext} from 'react'

// create context
export const CartContext = createContext ();

const CartProvider = ({children}) => {
// cart state
const [cart, setCart] = useState  ([]);
const [cartCount, setCartCount] = useState(0)

// add to cart
const addToCart = (items) => {
  setCart([...cart, items])
  setCartCount(cartCount + 1)
}
  return (
    <CartContext.Provider value={{cart, cartCount, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}


export default CartProvider
