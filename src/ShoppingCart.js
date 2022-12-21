import Navbar from './Navbar';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import './ShoppingCart.css'

const ShoppingCart = () => {
  const cart = useContext(CartContext);
  let totalCost = cart.getTotalCost();
  let cartHasProducts = cart.items.length > 0;

  if (cartHasProducts) {
    return (
      <div>
        <Navbar />
        <div className='cart-body'>
          <div className='cart-box'>
            {cart.items.map((item, idx) => {
              return (
                <div key={idx} className='cart-item'>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => cart.removeFromCart(item.id)}>Remove Items</button>
                </div>
              )
            })}
            <p>Total: ${totalCost}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <p>No Products in Cart</p>
      </div>
    )
  }
}

export default ShoppingCart;