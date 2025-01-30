import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, updateCart }) {
  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

  const increaseQuantity = (id) => {
    updateCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const decreaseQuantity = (id) => {
    updateCart(cart.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Go to the <Link to="/menu">menu</Link> and add some pizzas!</p>
      ) : (
        <ul>
          {cart.map((pizza) => (
            <li key={pizza.id} className="cart-item">
              <span>{pizza.name} - €{pizza.price} x {pizza.quantity}</span>
              <button onClick={() => decreaseQuantity(pizza.id)}>-</button>
              <button onClick={() => increaseQuantity(pizza.id)}>+</button>
              <button onClick={() => removeItem(pizza.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: €{total.toFixed(2)}</h3>
      {cart.length > 0 && (
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      )}
    </div>
  );
}

export default Cart;
