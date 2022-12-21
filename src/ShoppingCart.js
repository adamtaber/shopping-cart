import Navbar from './Navbar';
import { CartContext } from './CartContext';
import { useContext } from 'react';

const ShoppingCart = () => {
  const cart = useContext(CartContext);
  let totalCost = cart.getTotalCost();
  let cartHasProducts = cart.items.length > 0;

  if (cartHasProducts) {
    return (
      <div>
        <Navbar />
        {cart.items.map((item, idx) => {
          return (
            <div key={idx}>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => cart.removeFromCart(item.id)}>Remove Items</button>
            </div>
          )
        })}
        <p>Total: ${totalCost}</p>
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