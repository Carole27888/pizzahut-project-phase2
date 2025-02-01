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
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/menu">Go to Menu</Link></p>
      ) : (
        <div className="cart-items">
          {cart.map((pizza) => (
            <div className="cart-item" key={pizza.id}>
              <img src={pizza.image} alt={pizza.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients.join(", ")}</p>
                <p><strong>€{pizza.price}</strong></p>
              </div>
              <div className="cart-item-actions">
                <button className="decrease-btn" onClick={() => decreaseQuantity(pizza.id)}>-</button>
                <span>{pizza.quantity}</span>
                <button className="increase-btn" onClick={() => increaseQuantity(pizza.id)}>+</button>
                <button className="remove-btn" onClick={() => removeItem(pizza.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="order-summary">
        <h3>Total: €{total.toFixed(2)}</h3>
        {cart.length > 0 && (
          <Link to="/checkout">
            <button className="checkout-btn">Checkout</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CartPage;
