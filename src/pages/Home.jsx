import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h2>The best pizza.</h2>
      <p>Straight out of the oven, straight to you.</p>
      <input type="text" placeholder="Your full name" className="name-input" />

      {/* Only keep the Order Now button */}
      <Link to="/menu">
        <button>Order Now</button>
      </Link>
    </div>
  );
}

export default Home;
