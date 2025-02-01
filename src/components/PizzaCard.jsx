// PizzaCard.js
import React from "react";



function PizzaCard({ pizza, addToCart }) {
  return (
    <li className="pizza-card">
      <img src={pizza.image} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <p>Price: €{pizza.price}</p>
      <button onClick={() => addToCart(pizza)}>Add to Cart</button>
    </li>
  );
}

export default PizzaCard;
