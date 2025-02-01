import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"; // Assuming your logo is stored in the 'assets' folder

function Header() {
  return (
    <header className="header">
      {/* Add logo */}
      <img src={logo} alt="Pizza Hut Logo" className="logo" />
      <h1>PIZZA HUT</h1>
      {/* Removed the search bar and view cart button */}
    </header>
  );
}

export default Header;
