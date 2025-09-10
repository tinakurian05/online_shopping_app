import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: "#222", padding: "15px", color: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>🕒 Watch Store</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link to="/deals" style={{ color: "white", textDecoration: "none" }}>Deals</Link>
          <Link to="/categories" style={{ color: "white", textDecoration: "none" }}>Categories</Link>
          <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>Cart</Link>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
          <Link to="/register" style={{ color: "white", textDecoration: "none" }}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
