import { createContext, useState } from 'react';
import { productsArray, getProductData } from './components/productList';

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalCost: () => {},
  getTotalQuantity: () => {}
})

// [{id: 1, quantity: 2}]

export function CartProvider({children}) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(product => product.id === id)?.quantity

    if(quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addToCart(id, name, price, quant) {
    const quantity = getProductQuantity(id);
    if(quantity === 0) {
      setCartProducts([...cartProducts, {id: id, name: name, price: price, quantity: quant}])
    } else {
      setCartProducts(
        cartProducts.map(
          product => product.id === id
          ? { ...product, quantity: product.quantity + quant }
          : product
        )
      )
    }
  }

  function removeFromCart(id) {
    setCartProducts(
      cartProducts =>
      cartProducts.filter(currentProduct => {
        return currentProduct.id !== id;
      })
    )
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.forEach(cartItem => {
      totalCost += (cartItem.price * cartItem.quantity);
    })
    return totalCost.toFixed(2);
  }

  function getTotalQuantity() {
    let totalQuantity = 0;
    cartProducts.map((cartItem) => {
      totalQuantity += cartItem.quantity;
    })
    return totalQuantity;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addToCart,
    removeFromCart,
    getTotalCost,
    getTotalQuantity
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;