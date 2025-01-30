import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function OrderStatusPage({ cart }) {
  const { orderId } = useParams();
  const [priority, setPriority] = useState(false);
  const priorityCost = 9.00; // Extra cost for priority

  // Calculate total cost
  const totalPrice = cart.reduce((sum, pizza) => sum + pizza.price * (pizza.quantity || 1), 0);
  const finalPrice = priority ? totalPrice + priorityCost : totalPrice;

  // Delivery estimate (random time for UI effect)
  const [deliveryTime, setDeliveryTime] = useState("");
  useEffect(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 45); // Estimated 45 mins delivery
    setDeliveryTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  }, []);

  return (
    <div className="order-status">
      <h2>Order #{orderId} Status</h2>
      <p><strong>Only 44 minutes left 😊</strong></p>
      <p><em>Estimated delivery: {deliveryTime}</em></p>

      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id}>
            1× {pizza.name} <span>€{pizza.price}</span>
            <br />
            <small>{pizza.ingredients}</small>
          </li>
        ))}
      </ul>

      <div className="order-summary">
        <p>Price pizza: <strong>€{totalPrice.toFixed(2)}</strong></p>
        {priority && <p>Price priority: <strong>€{priorityCost.toFixed(2)}</strong></p>}
        <p><strong>To pay on delivery: €{finalPrice.toFixed(2)}</strong></p>
      </div>

      <button
        className={priority ? "priority-selected" : "priority-btn"}
        onClick={() => setPriority(true)}
        disabled={priority}
      >
        Make Priority (€{priorityCost.toFixed(2)})
      </button>
    </div>
  );
}

export default OrderStatusPage;
