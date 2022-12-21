import { Link } from "react-router-dom";
import { CartContext } from './CartContext';
import { useContext } from 'react';

const Navbar = () => {
  const cart = useContext(CartContext);

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Shopping Cart({cart.getTotalQuantity()} items)</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;