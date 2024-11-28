import React, { createContext, useState, useEffect } from 'react'
// import Products from '../components/homeComponents/Products';

// create context
export const ProductContext = createContext([]);

function ProdContext({ children }) {
  // product state
  const [products, setProducts] = useState([])

  // cart state
  const [cart, setCart] = useState([]);

  const [ cartMessage, setCartMessage] = useState('')


  // amount state
  const [itemAmount, setItemAmount] = useState(0);

  // total price state
  const [total, setTotal] = useState(0);


  // for the search bar, 
  // search state
  // const [search, setSearch] = useState('')

  // get total amount
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      const priceAsNumber = parseFloat(currentItem.price);
      if (isNaN(priceAsNumber)) {
        return accumulator
      }
      return accumulator + priceAsNumber * currentItem.amount
    }, 0);
    setTotal(total);
  }, [cart]);

  // add to cart
  const addToCart = (items, id) => {
    const newItem = { ...items, amount: 1 };

    // check if an item is already in the cart
    const cartItem = cart.find((items) => {
      return items.id === id;
    })

    if (cartItem) {
      const newCart = [...cart].map((items) => {
        if (items.id === id) {
          return { ...items, amount: cartItem.amount + 1 };
        } else {
          return items
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem])
      console.log(cart);
      
    }
    setCartMessage('Added to cart');
    setTimeout(()=> setCartMessage(''), 3000)
  }

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart])


  // remove an item from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((items) => {
      return items.id !== id;
    });
    setCart(newCart);
  }

  // clear cart
  const clearCart = () => {
    setCart([]);
  }

  // increase the quantity of an item
  const increaseAmount = (id) => {
    const cartItem = cart.find((items) => items.id === id);
    addToCart(cartItem, id)
  }

  // decrease the quantity of an item
  const decreaseAmount = (id) => {
    const cartItem = cart.find((items) => {
      return items.id === id
    });
    if (cartItem) {
      const newCart = cart.map((items) => {
        if (items.id === id && items.amount > 1) {
          return { ...items, amount: cartItem.amount - 1 };
        } else {
          return items;
        }
      });
      setCart(newCart)
    } else {
      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
    }
  }
  return (
    <div>
      <ProductContext.Provider value={{ products, setProducts, total, addToCart, cart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, cartMessage }}>
        {children}
      </ProductContext.Provider>
    </div>
  )
}
export default ProdContext;

