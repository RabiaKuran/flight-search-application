import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mainNav">
      <NavLink to="/">Flight Search</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/contact-us">Contact Us</NavLink>
    </nav>
  );
}

export default Navbar;
