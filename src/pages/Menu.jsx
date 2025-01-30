import React, { useState, useEffect } from "react";
import PizzaList from "../components/PizzaList";

function Menu({ cart, setCart }) {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch pizzas from the API using fetch()
  useEffect(() => {
    fetch("http://localhost:5000/pizzas")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch pizzas.");
        }
        return response.json();
      })
      .then((data) => {
        setPizzas(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load pizzas. Please check if the server is running.");
        setLoading(false);
      });
  }, []);

  // Function to add items to the cart
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === pizza.id);
      return existingItem
        ? prevCart.map((item) =>
            item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  return (
    <div className="menu">
      <h2>Pizza Menu</h2>
      {loading && <p>Loading pizzas...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <PizzaList pizzas={pizzas} addToCart={addToCart} />}
    </div>
  );
}

export default Menu;
