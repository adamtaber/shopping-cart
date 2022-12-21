import Navbar from './Navbar';
import React, { useState, useEffect, createContext } from "react";
import { productsArray } from './components/productList';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import './Shop.css';

const Shop = () => {
  // const [shoppingCart, setShoppingCart] = useState([]);
  // const [cartQuantity, setCartQuantity] = useState(0);

  const cart = useContext(CartContext);

  // const shopItems = [
  //   {id: 0, name: "item 1", price: 2},
  //   {id: 1, name: "item 2", price: 5},
  //   {id: 2, name: "item 3", price: 25}
  // ]

  const handleSubmit = (e) => {
    e.preventDefault();
    cart.addToCart(e.target.itemId.value, 
                   e.target.itemName.value,
                   Number(e.target.itemPrice.value),
                   Number(e.target.quantity.value));
    // let itemQuantity = Number(e.target.quantity.value)
    // let itemId = e.target.itemId.value
    // setShoppingCart(shoppingCart => [...shoppingCart, 
    //                                    {item: shopItems[itemId], 
    //                                     quantity: itemQuantity}])
    // setCartQuantity(cartQuantity + itemQuantity)
  }

  return (
    <div>
      <Navbar />
      <div className='product-grid'>
        {productsArray.map((item, idx) => {
          return (
            <div key={idx} className='product-card'>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <form onSubmit = {handleSubmit}>
                <label> Qty:
                  <input type="number" name="quantity" />        
                </label>
                <input type="hidden" name="itemId" value={item.id} />
                <input type="hidden" name="itemName" value={item.name} />
                <input type="hidden" name="itemPrice" value={item.price} />
                <button type='submit'>Add to Cart</button>
              </form>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Shop;