import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>FAST REACT PIZZA CO.</h1>
      <input type="text" placeholder="Search order #" className="search" />
      <Link to="/cart">
        <button>View Cart</button>
      </Link>
    </header>
  );
}

export default Header;
