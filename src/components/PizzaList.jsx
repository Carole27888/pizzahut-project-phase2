import React from "react";

function PizzaList({ pizzas, addToCart }) {
  return (
    <ul>
      {pizzas.map((pizza) => (
        <li key={pizza.id}>
          <img src={pizza.image} alt={pizza.name} style={{ width: "100px", borderRadius: "8px" }} />
          <h3>{pizza.name}</h3>
          <p>Ingredients: {pizza.ingredients.join(", ")}</p>
          <p>Price: €{pizza.price}</p>
          <button onClick={() => addToCart(pizza)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
}

export default PizzaList;
