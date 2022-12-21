import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import ShoppingCart from "./ShoppingCart";
import CartProvider from "./CartContext"

const RouteSwitch = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default RouteSwitch;