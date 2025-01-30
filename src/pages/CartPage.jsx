import React from "react";
import { Link } from "react-router-dom";

function CartPage({ cart, setCart }) {
  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Decrease quantity (Ensure it doesn't go below 1)
  const decreaseQuantity = (id) => {
    setCart(cart.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/menu">Go to Menu</Link></p>
      ) : (
        <ul>
          {cart.map((pizza) => (
            <li key={pizza.id} className="cart-item">
              <span>{pizza.name} - €{pizza.price} </span>
              <span> | Quantity: </span>  
              <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
              <span> {pizza.quantity} </span>
              <button onClick={() => increaseQuantity(pizza.id)}>+</button>
              <button onClick={() => removeItem(pizza.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: €{total.toFixed(2)}</h3>
      {cart.length > 0 && (
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      )}
    </div>
  );
}

export default CartPage;
