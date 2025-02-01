// import React, { useState, useEffect } from "react";
// import PizzaList from "../components/PizzaList";
// import { Link } from "react-router-dom";

// function Menu({ cart, setCart }) {
//   const [pizzas, setPizzas] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState(""); // State to hold the search query

//   // Fetch pizzas from the API
//   useEffect(() => {
//     fetch("http://localhost:5000/pizzas")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch pizzas.");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setPizzas(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError("Failed to load pizzas. Please check if the server is running.");
//         setLoading(false);
//       });
//   }, []);

//   // Function to add items to the cart
//   const addToCart = (pizza) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === pizza.id);
//       return existingItem
//         ? prevCart.map((item) =>
//             item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
//           )
//         : [...prevCart, { ...pizza, quantity: 1 }];
//     });
//   };

//   // Filter pizzas based on the search query
//   const filteredPizzas = pizzas.filter((pizza) =>
//     pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter based on pizza name
//   );

//   return (
//     <div className="menu">
//       <h2>Pizza Menu</h2>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search pizza..."
//         className="search"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm as the user types
//       />

//       {/* View Cart Button */}
//       <Link to="/cart">
//         <button className="view-cart-btn">View Cart</button>
//       </Link>

//       {loading && <p>Loading pizzas...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* Show filtered pizzas */}
//       {!loading && !error && <PizzaList pizzas={filteredPizzas} addToCart={addToCart} />}
//     </div>
//   );
// }

// export default Menu;
// Menu.js
import React, { useState, useEffect } from "react";
import PizzaCard from "../components/PizzaCard"; // Import PizzaCard
import { Link } from "react-router-dom";

function Menu({ cart, setCart }) {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search query

  // Fetch pizzas from the API
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
      .catch(() => {
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

  // Filter pizzas based on the search query
  const filteredPizzas = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu">
      <h2>Pizza Menu</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search pizza..."
        className="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm as the user types
      />

      {/* View Cart Button */}
      <Link to="/cart">
        <button className="view-cart-btn">View Cart</button>
      </Link>

      {loading && <p>Loading pizzas...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Show filtered pizzas */}
      {!loading && !error && (
        <div className="pizza-container">
          {filteredPizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
