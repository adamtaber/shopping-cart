import { Link } from "react-router-dom";
import { CartContext } from './CartContext';
import { useContext } from 'react';
import './Navbar.css';

const Navbar = () => {
  const cart = useContext(CartContext);

  return (
    <div>
      <nav className='navbar'>
        <ul className='nav-elements'>
          <li className='nav-link'><Link className='nav-link' to="/">Home</Link></li>
          <div className='nav-link-right'>
            <li className='nav-link'><Link to="/shop" className='nav-link'>Shop</Link></li>
            <li className='nav-link'><Link to="/cart" className='nav-link'>Shopping Cart({cart.getTotalQuantity()} items)</Link></li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;