import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const navigate = useNavigate(); // ✅ Allows navigation to Order Status Page

  const handleOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill in all fields before placing an order.");
      return;
    }
    
    // Generate a random order ID
    const orderId = Math.floor(Math.random() * 10000);
    
    // Navigate to Order Status Page
    navigate(`/order-status/${orderId}`);
  };

  return (
    <div className="checkout">
      <h2>Ready to order? Let’s go!</h2>
      <input 
        type="text" placeholder="First Name" 
        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input 
        type="text" placeholder="Phone Number" 
        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <input 
        type="text" placeholder="Address" 
        value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      
      <button onClick={handleOrder} disabled={!form.name || !form.phone || !form.address}>
        Order Now
      </button>
    </div>
  );
}

export default CheckoutPage;
